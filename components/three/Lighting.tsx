"use client";

import { Environment, ContactShadows } from "@react-three/drei";

type LightingProps = {
  /**
   * drei environment preset used for image-based reflections. "studio" gives a
   * clean, premium product-shot look without shipping a custom HDR file.
   */
  environmentPreset?:
    | "studio"
    | "city"
    | "warehouse"
    | "apartment"
    | "dawn"
    | "sunset"
    | "lobby";
  /** Toggle the soft ground shadow. */
  contactShadows?: boolean;
};

/**
 * Premium three-point studio lighting setup.
 *
 * - Ambient fill keeps shadows from going fully black.
 * - A bright key directional light (with shadows) defines form.
 * - A cooler rim/fill light adds separation and dimension.
 * - An HDR environment supplies realistic reflections on metallic surfaces.
 * - ContactShadows grounds the product so it doesn't appear to float.
 */
export function Lighting({
  environmentPreset = "studio",
  contactShadows = true,
}: LightingProps) {
  return (
    <>
      <ambientLight intensity={0.4} />

      {/* Key light */}
      <directionalLight
        position={[5, 6, 4]}
        intensity={2.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0001}
      >
        <orthographicCamera
          attach="shadow-camera"
          args={[-5, 5, 5, -5, 0.1, 30]}
        />
      </directionalLight>

      {/* Fill light, cooler and softer */}
      <directionalLight position={[-5, 3, -2]} intensity={0.8} color="#dfe6f0" />

      {/* Subtle top rim for edge definition */}
      <spotLight
        position={[0, 8, 0]}
        angle={0.5}
        penumbra={1}
        intensity={0.6}
        distance={20}
      />

      <Environment preset={environmentPreset} />

      {contactShadows ? (
        <ContactShadows
          position={[0, -1.0, 0]}
          opacity={0.45}
          scale={12}
          blur={2.6}
          far={4}
          resolution={512}
          color="#000000"
        />
      ) : null}
    </>
  );
}
