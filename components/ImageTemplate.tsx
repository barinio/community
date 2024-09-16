import Image from "next/image";

interface ImageTemplateProps {
  src: string;
  alt: string;
}

const ImageTemplate = ({ src, alt }: ImageTemplateProps) => {
  return (
    <div className="bg-main-yellow flex justify-center items-center rounded-full w-[72px] h-[72px] mb-[50px]">
      <Image
        src={src}
        width={37}
        height={37}
        alt={alt}
        className="object-fill m-auto"
      />
    </div>
  );
};

export default ImageTemplate;
