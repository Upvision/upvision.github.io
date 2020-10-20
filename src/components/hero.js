import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { softShadows } from 'drei';

import logoModel from "../assets/logo.glb";

softShadows({ size: 0.005, frustrum: 2.75 });

function Logo(props) {
    const group = useRef();
    const { nodes } = useLoader(GLTFLoader, logoModel);

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(state => {
        group.current.position.y = ((Math.sin(state.clock.getElapsedTime())) / 2)
        group.current.rotation.z += 0.01
    });

    let scaleVal = window.innerHeight / 18;

    return (
        <mesh
            {...props}
            ref={group}
            castShadow
            dispose={null}
            geometry = {nodes.Curve001.geometry}
            scale = {active ? [scaleVal + 5, scaleVal + 5, scaleVal + 5] : [scaleVal, scaleVal, scaleVal]}
            rotation={[Math.PI / 2, 0, 0]}
            onClick = {(e) => setActive(!active)}
            onPointerOver = {(e) => setHover(true)}
            onPointerOut = {(e) => setHover(false)}
        >
            <meshLambertMaterial attach="material" color={hovered? 'lightblue' : 'lightgrey'} />
        </mesh>
    )
}
function Hero(props) {
    return(
        <Canvas shadowMap camera={{ fov: 75 }}>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} />
            <pointLight position={[-10, -10, -10]} intensity={0.5} />
            <directionalLight
                castShadow
                position={[0, 10, -5]}
                intensity={1.5}
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-camera-far={100}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
            />
            <Suspense fallback={null}>
                <Logo position = {[0, 0, 0]} />
            </Suspense>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2.3, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[10, 10]} />
                <shadowMaterial attach="material" transparent opacity={0.5}/>
            </mesh>
        </Canvas>

    )
}

export default Hero;