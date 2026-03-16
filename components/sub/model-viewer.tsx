'use client';
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";
import { Suspense } from "react";

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export const ModelViewer = ({ url }: { url: string }) => {
  return (
    <Canvas shadows camera={{ position: [0, 0, 5], fov: 50 }}>
      <Suspense fallback={
        <mesh>
           <sphereGeometry args={[1, 16, 16]} />
           <meshBasicMaterial color="gray" wireframe />
        </mesh>
      }>
        <Stage adjustCamera intensity={0.5} environment="city">
          <Model url={url} />
        </Stage>
      </Suspense>
      <OrbitControls makeDefault autoRotate />
    </Canvas>
  );
};
