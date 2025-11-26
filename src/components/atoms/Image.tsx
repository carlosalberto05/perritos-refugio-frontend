import NextImage, { ImageProps as NextImageProps } from "next/image";

export interface ImageProps extends Omit<NextImageProps, "alt"> {
  /** Texto alternativo para la imagen (requerido para accesibilidad) */
  alt: string;
  className?: string;
  rounded?: boolean;
  roundedSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
}

const Image = ({
  alt,
  className = "",
  rounded = false,
  roundedSize = "lg",
  ...props
}: ImageProps) => {
  const roundedClasses = rounded
    ? `rounded-${roundedSize}`
    : "";

  const combinedClasses = [roundedClasses, className]
    .filter(Boolean)
    .join(" ");

  return (
    <NextImage
      alt={alt}
      className={combinedClasses}
      {...props}
    />
  );
};

export default Image;
