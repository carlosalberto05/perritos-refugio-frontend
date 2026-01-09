import Image from "../../atoms/Image";
import BaseCard from "./BaseCard";
import { Heart, MapPin } from "lucide-react";
import Link from "next/link";

interface SuccessStoryCardProps {
  dogName: string;
  ownerName: string;
  story: string;
  image: string;
  date: string;
  shelter?: {
    id: string;
    name: string;
  };
}

function SuccessStoryCard({
  dogName,
  ownerName,
  story,
  image,
  date,
  shelter,
}: SuccessStoryCardProps) {
  return (
    <BaseCard className="overflow-hidden glass-card-light hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-stretch min-h-[300px]">
        <div className="w-full aspect-square md:w-1/3 md:h-auto relative overflow-hidden">
          <Image
            src={image}
            alt={dogName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center space-y-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-pink-500 fill-pink-500" />
              <h3 className="text-2xl font-bold text-gray-900">{dogName}</h3>
            </div>
            <p className="text-lg font-medium text-gray-700">Adoptado por {ownerName}</p>
          </div>

          {shelter && (
            <div className="flex items-center gap-2 text-gray-600 bg-blue-50/50 w-fit px-3 py-1.5 rounded-lg border border-blue-100/50">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium">
                Rescatado por{" "}
                <Link
                  href={`/refugios/${shelter.id}`}
                  className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                >
                  {shelter.name}
                </Link>
              </span>
            </div>
          )}

          <p className="text-gray-600 leading-relaxed text-base italic">
            "{story}"
          </p>

          <div className="pt-2">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
              Adoptado en {date}
            </p>
          </div>
        </div>
      </div>
    </BaseCard>
  );
}

export default SuccessStoryCard;
