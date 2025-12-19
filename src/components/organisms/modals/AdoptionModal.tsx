import Modal from "@/components/molecules/Modal";
import { CONTACT_INFO } from "@/data/home-data";

interface AdoptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  dogName: string;
}

export const AdoptionModal = ({
  isOpen,
  onClose,
  dogName,
}: AdoptionModalProps) => (
  <Modal isOpen={isOpen} onClose={onClose} size="md">
    <Modal.Header title={`¡Gracias por tu interés en adoptar a ${dogName}!`} />
    <Modal.Body>
      <div className="space-y-4">
        <p className="text-gray-700">
          Para iniciar el proceso de adopción, por favor contáctanos al teléfono{" "}
          <span className="font-semibold">{CONTACT_INFO.phone}</span> o envíanos
          un email a{" "}
          <a
            href={`mailto:${CONTACT_INFO.adoptionEmail}`}
            className="text-blue-500 font-semibold"
          >
            {CONTACT_INFO.adoptionEmail}
          </a>
        </p>

        <div>
          <p className="font-semibold text-gray-900 mb-2">
            El proceso de adopción incluye:
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Entrevista inicial</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Visita al refugio para conocer a {dogName}</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Verificación de domicilio</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">•</span>
              <span>Firma de contrato de adopción</span>
            </li>
          </ul>
        </div>
      </div>
    </Modal.Body>
    <Modal.Actions primaryText="Entendido" />
  </Modal>
);
