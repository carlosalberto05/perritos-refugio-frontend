import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import Badge from "../../molecules/Badge";
import { Heart, Calendar, Ruler, Building2 } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface DogCardProps {
  name: string;
  breed: string;
  age: string;
  size: string;
  description: string;
  imageUrl: string;
  imageAlt?: string;
  adoptionStatus?: "En adopción" | "Adoptado" | "Reservado";
  shelter?: {
    id: string;
    name: string;
    logo?: string;
  };
  onAdoptClick?: () => void;
  className?: string;
}

const DogCard = ({
  name,
  breed,
  age,
  size,
  description,
  imageUrl,
  imageAlt = name,
  adoptionStatus = "En adopción",
  shelter,
  onAdoptClick,
  className,
}: DogCardProps) => {
  const getBadgeVariant = () => {
    switch (adoptionStatus) {
      case "En adopción":
        return "success";
      case "Adoptado":
        return "info";
      case "Reservado":
        return "warning";
      default:
        return "success";
    }
  };

  return (
    <div
      className={cn(
        "card-hover bg-white rounded-2xl overflow-hidden shadow-md max-w-sm",
        className
      )}
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

        {/* Badge de Estado usando Badge molecule */}
        <div className="absolute top-4 right-4">
          <Badge variant={getBadgeVariant()} size="md" className="shadow-lg">
            {adoptionStatus}
          </Badge>
        </div>

        {/* Etiqueta del Refugio con efecto Blur */}
        {shelter && (
          <Link 
            href={`/refugios/${shelter.id}`}
            className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm transition-all hover:bg-white/40 hover:scale-105 active:scale-95 z-10"
          >
            <div className="w-6 h-6 rounded-full bg-white/40 flex items-center justify-center overflow-hidden relative">
              {shelter.logo ? (
                <Image
                  src={shelter.logo}
                  alt={shelter.name}
                  fill
                  className="w-full h-full object-cover"
                />
              ) : (
                <Building2 className="w-3.5 h-3.5 text-white" />
              )}
            </div>
            <span className="text-white text-xs font-semibold whitespace-nowrap drop-shadow-sm">
              {shelter.name}
            </span>
          </Link>
        )}
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

export default DogCard;
