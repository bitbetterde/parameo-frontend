import "@google/model-viewer";
import "@google/model-viewer-effects";
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
      material?.pbrMetallicRoughness?.setMetallicFactor(0.7);
      material?.pbrMetallicRoughness?.setRoughnessFactor(0.6);
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
      ar
      class={`w-full h-[540px] rounded-md ${className || ""}`}
    >
      {/*// @ts-expect-error test*/}
      <effect-composer render-mode="quality">
        {/*// @ts-expect-error test*/}
        <outline-effect smoothing={0.4} color="black" strength={1.5} />
        {/*// @ts-expect-error test*/}
      </effect-composer>
      {/*// @ts-expect-error test*/}
    </model-viewer>
  );
};

export default ModelViewer;
