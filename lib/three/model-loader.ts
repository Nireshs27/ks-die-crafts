import { useGLTF } from "@react-three/drei";

/**
 * Material finish options the viewer can support in the future.
 * Kept here so the model + UI layers share a single source of truth.
 */
export type ModelFinish = "steel" | "gold" | "brass";

/**
 * Camera framing options. Distances are in world units and mirror the
 * OrbitControls limits configured in CameraController.
 */
export type CameraConfig = {
  position: [number, number, number];
  fov: number;
  minDistance: number;
  maxDistance: number;
};

/**
 * Describes a single product model. This is intentionally richer than what
 * the first iteration needs so a model gallery / comparison view can be added
 * later without reshaping the data.
 */
export type ProductModel = {
  id: string;
  name: string;
  /** Path relative to /public, e.g. "/models/sample-die.glb". */
  path: string;
  /** Optional human-readable description for annotations / SEO. */
  description?: string;
  /** Default material finish; reserved for the future material switcher. */
  defaultFinish?: ModelFinish;
};

export const DEFAULT_CAMERA: CameraConfig = {
  position: [0, 1.2, 4],
  fov: 45,
  minDistance: 2,
  maxDistance: 8,
};

export const SAMPLE_MODEL: ProductModel = {
  id: "sample-die",
  name: "Precision Jewellery Die",
  path: "/models/sample-die.glb",
  description:
    "A precision-engineered jewellery die showcasing fine detailing and a premium steel finish.",
  defaultFinish: "steel",
};

/**
 * Eagerly warm the GLTF cache so the model is ready by the time the Canvas
 * mounts. drei dedupes against the same cache used by useGLTF, so calling this
 * is cheap and safe to repeat.
 *
 * Draco-compressed models are supported transparently by drei's loader, so no
 * extra wiring is required here when compressed assets are introduced later.
 */
export function preloadModel(path: string): void {
  try {
    useGLTF.preload(path);
  } catch {
    // Preloading is best-effort; a failure here must never break rendering.
  }
}
