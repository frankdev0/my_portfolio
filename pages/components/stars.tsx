import styles from "@/styles/Home.module.css";
import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferGeometry, Material, Points as ThreePoints, Vector3 } from 'three';
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import { inSphere } from 'maath/random';

const Stars = (props:any) => { 
    const ref = useRef<ThreePoints<BufferGeometry, Material | Material[]>>(null);

    const sphere = inSphere(new Float32Array(5000), { radius: 1.2 });

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });
    return  (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points 
            ref={ref} 
            positions={sphere} 
            frustumCulled {...props}
            stride={3} 
            >
                <PointMaterial
                transparent
                color='#f272c8'
                 size={0.002} 
                 sizeAttenuation={true} 
                 depthWrite={false}
                  
                 />
                 </Points>
        </group>
    )
}

const StarsCanvas: React.FC = () => {
return (
    <div className={styles.starsign}>
        <Canvas camera={{position: [0, 0, 1]}}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all/>
            </Canvas>
    </div>
)
}

export default StarsCanvas;