"use client";

import { forwardRef, type ComponentRef } from "react";
import { OrbitControls } from "@react-three/drei";

export type OrbitControlsRef = ComponentRef<typeof OrbitControls>;

type CameraControllerProps = {
  autoRotate?: boolean;
  enableZoom?: boolean;
  enablePan?: boolean;
  minDistance?: number;
  maxDistance?: number;
};

/**
 * Wraps drei's OrbitControls with premium-feeling defaults:
 * - Smooth inertial damping for drag/zoom.
 * - Polar-angle limits so the camera never flips under or over the product.
 * - Distance limits for controlled min/max zoom.
 *
 * The OrbitControls instance is forwarded via ref so the parent can call
 * `.reset()` for the "reset camera" button and saved-camera features later.
 */
export const CameraController = forwardRef<
  OrbitControlsRef,
  CameraControllerProps
>(function CameraController(
  {
    autoRotate = false,
    enableZoom = true,
    enablePan = false,
    minDistance = 2,
    maxDistance = 8,
  },
  ref,
) {
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enableDamping
      dampingFactor={0.05}
      rotateSpeed={0.6}
      zoomSpeed={0.7}
      enableZoom={enableZoom}
      enablePan={enablePan}
      autoRotate={autoRotate}
      autoRotateSpeed={1.0}
      minDistance={minDistance}
      maxDistance={maxDistance}
      // Prevent the camera from flipping past the poles.
      minPolarAngle={Math.PI * 0.15}
      maxPolarAngle={Math.PI * 0.85}
      target={[0, 0, 0]}
    />
  );
});
