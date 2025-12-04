import Button from "../atoms/Button";
import Image from "../atoms/Image";
import { Heart, Calendar, Ruler } from "lucide-react";

export interface CardProps {
  name: string;
  breed: string;
  age: string;
  size: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  adoptionStatus?: "En adopción" | "Adoptado" | "Reservado";
  onAdoptClick?: () => void;
  className?: string;
}

const Card = ({
  name,
  breed,
  age,
  size,
  description,
  imageUrl,
  imageAlt = name,
  adoptionStatus = "En adopción",
  onAdoptClick,
  className = "",
}: CardProps) => {
  const getBadgeClasses = () => {
    switch (adoptionStatus) {
      case "En adopción":
        return "bg-gradient-to-r from-[rgba(30,144,255,0.9)] to-[rgba(0,199,255,0.85)] text-white";
      case "Adoptado":
        return "bg-gradient-to-r from-green-500 to-green-600 text-white";
      case "Reservado":
        return "bg-gradient-to-r from-amber-500 to-amber-600 text-white";
      default:
        return "bg-gradient-to-r from-[rgba(30,144,255,0.9)] to-[rgba(0,199,255,0.85)] text-white";
    }
  };

  return (
    <div
      className={`card-hover bg-white rounded-2xl overflow-hidden shadow-md max-w-sm ${className}`}
    >
      {/* Contenedor de Imagen */}
      <div className="relative h-80 w-full bg-gray-100">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Badge de Estado */}
        <div className="absolute top-4 right-4">
          <span
            className={`
              px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg
              ${getBadgeClasses()}
            `}
          >
            {adoptionStatus}
          </span>
        </div>
      </div>

      {/* Contenedor de Información */}
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 font-medium">{breed}</p>

        {/* Iconos de Información: Edad y Tamaño */}
        <div className="flex items-center gap-4 text-sm text-gray-600">
          {/* Edad */}
          <div className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            <span>{age}</span>
          </div>

          {/* Tamaño */}
          <div className="flex items-center gap-1.5">
            <Ruler className="w-4 h-4" />
            <span>{size}</span>
          </div>
        </div>

        {/* Descripción */}
        <p className="text-sm text-gray-700 leading-relaxed line-clamp-2">
          {description}
        </p>

        {/* Botón de Acción */}
        <Button
          variant="primary"
          size="md"
          fullWidth
          onClick={onAdoptClick}
          className="mt-4"
        >
          <div className="flex items-center justify-center gap-2">
            <Heart className="w-4 h-4" />
            <span>Quiero adoptarlo</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
