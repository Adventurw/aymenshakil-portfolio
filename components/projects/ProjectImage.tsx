import Image from "next/image";

interface ProjectImageProps {
  image: string;
  title: string;
}

export default function ProjectImage({
  image,
  title,
}: ProjectImageProps) {
  return (
    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" >
      <Image
        src={image}
        alt={title}
        width={800}
        height={500}
        className="
          h-60
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
        "
      />
    </div>
  );
}