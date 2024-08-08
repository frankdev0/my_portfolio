import styles from '@/styles/Home.module.css'
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber';
import {OrbitControls, Preload, useGLTF} from '@react-three/drei';
// import CanvasLoader from './canvasLoader';
import CustomLoader from './canvasLoader';


const Globe = () => {
const {scene} = useGLTF('/assets/scene.gltf');

    return (
        <primitive
        object={scene}
        scale={3.0}
        position-y={0}
        rotation-y={0}
        />
            )
        }

        const EarthCanvas = () => { 
          return (
            // <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{preserveDrawingBuffer: true}}
            camera={{
              fov: 45,
              near: 0.1,
              far: 200,
              position: [-4, 3, 6]
            }}
            >
              <Suspense fallback={null}>
                <OrbitControls 
                autoRotate
                enableZoom={false}
                maxPolarAngle={Math.PI / 3}
                minPolarAngle={Math.PI / 3}
                />
                <Globe />
                <Preload all />
               </Suspense>
            </Canvas>
            // </div>
          )
        }

        export default EarthCanvas;