import "@google/model-viewer";

interface Props {
  className?: string;
  modelSrc: string;
  modelAlt?: string;
}

const ModelViewer: React.FC<Props> = ({
  className,
  modelSrc,
  modelAlt,
}) => {
  return (
    //@ts-expect-error
    <model-viewer
      src={modelSrc}
      alt={modelAlt}
      camera-controls
      class={`w-full h-[540px] ${className || ""}`}
    />
  );
};

export default ModelViewer;
