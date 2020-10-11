import React, { Suspense, useRef, useState } from 'react'
import { Canvas, useFrame, useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import logoModel from "../assets/logo.glb";
import "../css/hero.css";

function Logo(props) {
    const group = useRef();
    const { nodes } = useLoader(GLTFLoader, logoModel)

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(state => {
        group.current.position.y = ((Math.sin(state.clock.getElapsedTime())) / 2)
        group.current.rotation.z += 0.01
    });
    const PI = Math.PI;

    return (
        <mesh
            {...props}
            ref={group}
            castShadow
            dispose={null}
            geometry = {nodes.Curve001.geometry}
            scale = {active ? [46, 46, 46] : [42, 42, 42]}
            rotation={[PI/2, 0, 0]}
            onClick = {(e) => setActive(!active)}
            onPointerOver = {(e) => setHover(true)}
            onPointerOut = {(e) => setHover(false)}
        >
            <meshStandardMaterial attach="material" color={hovered? '#13E8B5' : 'lightblue'} />
        </mesh>
    )
}
function Hero() {
    return(
        <Canvas>
            <ambientLight />
            <pointLight position = {[10, 10, 10]} />
            <directionalLight
                castShadow
                position={[10, 8, -5]}
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
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
                <planeBufferGeometry attach="geometry" args={[10, 10]} />
                <shadowMaterial attach="material" transparent opacity={0.5} color="white"/>
            </mesh>
        </Canvas>
    )
}

export default Hero