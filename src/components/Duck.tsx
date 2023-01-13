import React from 'react';
import { Canvas } from "@react-three/fiber";
import { useGLTF, Stage, PresentationControls, OrbitControls } from "@react-three/drei";

function Model(props: any) {
    const { scene } = useGLTF("/Duck.glb");
    return <primitive object={scene} {...props} />
}

function Duck(props: any) {
    return (
        <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{height: props.h, width: props.w}}>
        <Stage environment={"sunset"}>
            <Model scale={0.005} />
        </Stage>
        <OrbitControls enableZoom={false} enablePan={false}  minPolarAngle={0.45 * Math.PI} maxPolarAngle={0.45 * Math.PI} autoRotate autoRotateSpeed={0.5}/>
        </Canvas>
    );
}

export default Duck;