import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { Location } from '@reach/router';

import logoModel from "../assets/logo.glb";

function Logo(props) {
    const group = useRef();
    const { nodes } = useLoader(GLTFLoader, logoModel);

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(state => {
        group.current.position.y = ((0.2 + Math.sin(state.clock.getElapsedTime())) / 2)
        group.current.rotation.z += 0.01
    });

    let scaleVal = window.innerHeight / 24;

    return (
        <mesh
            {...props}
            ref={group}
            castShadow
            dispose={null}
            geometry = {nodes.logo_U.geometry}
            scale = {active ? [scaleVal + 5, scaleVal/2 + 2.5, scaleVal + 5] : [scaleVal, scaleVal/2, scaleVal]}
            rotation={[Math.PI / 2, 0, 0]}
            onClick = {(e) => setActive(!active)}
            onPointerOver = {(e) => setHover(true)}
            onPointerOut = {(e) => setHover(false)}
        >
            <meshLambertMaterial attach="material" color={hovered? 'lightblue' : 'lightgrey'} opacity={0.69}/>
        </mesh>
    )
}
React.memo(Logo);

function Hero(props) {
    return(
        <Canvas shadowMap camera={{ fov: 75 }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <directionalLight
                castShadow
                position={[0, 10, -5]}
                intensity={0.25}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={100}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <Suspense fallback={null}>
                <Location>
                    {({location})=> {
                        if (location.pathname === "/") {
                            return <Logo position = {[0, 0, 0]} />
                        } else {
                            return null;
                        }
                    }}
                </Location>
            </Suspense>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.5, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[10, 10]} />
                <shadowMaterial attach="material" transparent opacity={0.1}/>
            </mesh>
        </Canvas>
    )
}

export default Hero;