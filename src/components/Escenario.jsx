import React, { useRef, useEffect } from "react";

import { Canvas, useLoader } from "@react-three/fiber";
import { TextureLoader, TorusGeometry } from "three";
import AnimationFrame from "../components/AnimationFrame";

const Escenario = () => {
  // Cargar las texturas para cada figura (asegúrate de tener estos archivos en /assets)
  const cubeTexture = useLoader(TextureLoader, "/assets/texturaUno.jpg");
  const TextureDos = useLoader(TextureLoader, "/assets/texture2.jpg");
  const TextureTres = useLoader(TextureLoader, "/assets/texturaDos.jpg");
  const coneTexture = useLoader(TextureLoader, "/assets/alphaDos.png");
  const coneTextureDos = useLoader(TextureLoader, "/assets/texture1.jpg");
  const sphereTexture = useLoader(TextureLoader, "/assets/alpha.png");
  const sphereTextureDos = useLoader(TextureLoader, "/assets/alphadragon.png");

  const boxRef = useRef();
  
    useEffect(() => {
      let animationFrameId;
  
      const animate = () => {
        if (boxRef.current) {
          boxRef.current.rotation.x += 0.01;
          boxRef.current.rotation.y += 0.01;
        }
        animationFrameId = requestAnimationFrame(animate);
      };
  
      animate();
  
      return () => cancelAnimationFrame(animationFrameId);
    }, []);

  return (
    <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
      {/* Iluminación */}
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} castShadow />

      {/* Base: plano que actúa como suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="lightgray" />
      </mesh>

      {/* Cubo con textura */}
      <mesh position={[-5, 1, 0]} castShadow>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          map={cubeTexture} 
          alphaMap={coneTexture}
          transparent={true}
        />
      </mesh>

      {/* Esfera con textura */}
      <mesh ref={boxRef} position={[-1, 1, 0]} castShadow>
        <sphereGeometry args={[1.4, 32, 32]} />
        <meshStandardMaterial 
        map={TextureTres}
        alphaMap={sphereTextureDos}
        transparent={true}
      />
      </mesh>

      {/* Cono con textura */}
      <mesh position={[3, 1, 0]} castShadow>
        <coneGeometry args={[1, 3, 32]} />
        <meshStandardMaterial map={coneTextureDos} />
      </mesh>

      <mesh position={[7, 1, 0]} castShadow>
        <torusKnotGeometry args={[1, 0.4, 100, 16]} />
        <meshStandardMaterial map={TextureTres} />
      </mesh>
    </Canvas>
  );
};

export default Escenario;
