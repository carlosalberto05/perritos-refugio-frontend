import Button from "../atoms/Button";
import Image from "../atoms/Image";

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
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>{age}</span>
          </div>

          {/* Tamaño */}
          <div className="flex items-center gap-1.5">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
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
            <svg
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            <span>Quiero adoptarlo</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Card;
