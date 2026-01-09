import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import { Building2, MapPin, PawPrint, Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface ShelterCardProps {
  id: string;
  name: string;
  logo: string;
  image: string;
  rescuedCount: number;
  location: string;
  urgentNeeds?: string;
  className?: string;
}

const ShelterCard = ({
  id,
  name,
  logo,
  image,
  rescuedCount,
  location,
  urgentNeeds,
  className,
}: ShelterCardProps) => {
  return (
    <div
      className={cn(
        "card-hover bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full",
        className
      )}
    >
      {/* Header Image */}
      <div className="relative h-56 w-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
        {/* Glass Logo Overlay */}
        <div className="absolute -bottom-6 left-6">
          <div className="w-16 h-16 rounded-2xl bg-white p-1 shadow-md border border-gray-50 flex items-center justify-center overflow-hidden relative">
            <Image
              src={logo}
              alt={`${name} logo`}
              fill
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 pt-10 flex-grow flex flex-col">
        <div className="flex flex-col gap-1 mb-4">
          <h3 className="text-xl font-bold text-gray-900 leading-tight">
            {name}
          </h3>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm">
            <MapPin className="w-4 h-4 text-blue-500" />
            <span>{location}</span>
          </div>
        </div>

        {/* Rescued Count Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider">
            <PawPrint className="w-3.5 h-3.5" />
            <span>{rescuedCount} perritos rescatados</span>
          </div>
        </div>

        {/* Urgent Needs - Alert style */}
        {urgentNeeds && (
          <div className="mb-6 p-4 rounded-2xl bg-orange-50/50 border border-orange-100 flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
              <Heart className="w-4 h-4 text-orange-600 fill-orange-600" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-orange-800 uppercase tracking-widest mb-0.5">
                Necesidad urgente
              </p>
              <p className="text-sm text-orange-950 font-medium">
                {urgentNeeds}
              </p>
            </div>
          </div>
        )}

        <div className="mt-auto">
          <Link href={`/refugios/${id}`} className="block w-full">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              className="gradient-animated"
            >
              <div className="flex items-center justify-center gap-2">
                <span>Ver perfil y donar</span>
              </div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShelterCard;
