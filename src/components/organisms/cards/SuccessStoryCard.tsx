import Image from "../../atoms/Image";
import BaseCard from "./BaseCard";
import { Heart } from "lucide-react";

interface SuccessStoryCardProps {
  dogName: string;
  ownerName: string;
  story: string;
  image: string;
  date: string;
}

function SuccessStoryCard({
  dogName,
  ownerName,
  story,
  image,
  date,
}: SuccessStoryCardProps) {
  return (
    <BaseCard className="overflow-hidden glass-card-light hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row md:items-stretch min-h-96">
        <div className="w-full aspect-square md:w-1/3 md:h-[400px] relative overflow-hidden">
          <Image
            src={image}
            alt={dogName}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <div className="flex-1 p-6 space-y-3">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-blue-500 fill-blue-500" />
            <h3>{dogName}</h3>
          </div>

          <p className="text-sm text-gray-600">Adoptado por {ownerName}</p>

          <p className="text-gray-700">{story}</p>

          <p className="text-sm text-gray-500 italic">{date}</p>
        </div>
      </div>
    </BaseCard>
  );
}

export default SuccessStoryCard;
