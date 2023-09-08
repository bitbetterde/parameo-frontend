import "@google/model-viewer";
import type React from "react";
import { useEffect, useRef } from "react";
import type { ModelViewerElement } from "@google/model-viewer/lib/model-viewer";

interface Props {
  className?: string;
  modelSrc: string;
  modelAlt?: string;
}

const ModelViewer: React.FC<Props> = ({ className, modelSrc, modelAlt }) => {
  const viewer = useRef<ModelViewerElement>(null);

  useEffect(() => {
    viewer?.current?.addEventListener("load", () => {
      const material = viewer?.current?.model?.materials?.[0];
      material?.pbrMetallicRoughness?.setBaseColorFactor([
        0.866, 0.541, 0.235, 1,
      ]);
      material?.pbrMetallicRoughness?.setMetallicFactor(0.1);
      material?.pbrMetallicRoughness?.setRoughnessFactor(0.3);
    });
  }, [viewer]);

  return (
    //@ts-expect-error Custom Element without types
    <model-viewer
      ref={viewer}
      src={modelSrc}
      alt={modelAlt}
      camera-controls
      auto-rotate
      class={`w-full h-[540px] rounded-md ${className || ""}`}
    />
  );
};

export default ModelViewer;
