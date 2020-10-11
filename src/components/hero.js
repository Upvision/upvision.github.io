import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

import "../css/hero.css"

function Box(props){
    const mesh = useRef();

    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

    return (
        <mesh
            {...props}
            ref = {mesh}
            scale = {active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
            onClick = {(e) => setActive(!active)}
            onPointerOver = {(e) => setHover(true)}
            onPointerOut = {(e) => setHover(false)}
        >
            <boxBufferGeometry args = {[1, 1, 1]} />
            <meshStandardMaterial color={hovered? 'hotpink' : 'orange'} />
        </mesh>
    )
}

function Text3d(props) {
    loader = loader || new THREE.FontLoader();
    loader.load('../fonts/')
    return (
        <>
        </>
    )
}

Text3d.defaultProps = {
    loader: null
}

function Hero() {
    return(
        <Canvas>
            <ambientLight />
            <pointLight position = {[10, 10, 10]} />
            {/* <Box position = {[-1.2, 0, 0]} />
            <Box position = {[1.2, 0, 0]} /> */}
        </Canvas>
    )
}

export default Hero