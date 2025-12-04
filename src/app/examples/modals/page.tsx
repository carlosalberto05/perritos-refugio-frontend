"use client";

import { useState } from "react";
import Modal from "@/components/organisms/Modal";
import Card from "@/components/organisms/Card";
import Button from "@/components/atoms/Button";

export default function ModalExamplesPage() {
  const [isAdoptionModalOpen, setIsAdoptionModalOpen] = useState(false);
  const [selectedDog, setSelectedDog] = useState<string>("");
  const [isBasicModalOpen, setIsBasicModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);

  const handleAdoptClick = (dogName: string) => {
    setSelectedDog(dogName);
    setIsAdoptionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-surface-light py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          Ejemplos del Componente Modal
        </h1>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Diferentes variaciones del componente Modal para distintos casos de
          uso en la aplicación.
        </p>

        {/* Sección: Modal de Adopción (como en la imagen) */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Modal de Adopción
          </h2>
          <p className="text-gray-600 mb-6">
            Este es el modal que aparece cuando alguien hace clic en
            &quot;Quiero adoptarlo&quot; en una card de perro.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              name="Max"
              breed="Golden Retriever"
              age="3 años"
              size="Grande"
              description="Max es un perro tranquilo y leal, ideal para personas activas que disfruten de paseos."
              imageUrl="https://images.unsplash.com/photo-1633722715463-d30f4f325e24?w=800&q=80"
              adoptionStatus="En adopción"
              onAdoptClick={() => handleAdoptClick("Max")}
            />
          </div>
        </section>

        {/* Sección: Otros Ejemplos de Modals */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Otros Tipos de Modals
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Modal Básico */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2">Modal Básico</h3>
              <p className="text-sm text-gray-600 mb-4">
                Modal simple con solo un botón primario
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsBasicModalOpen(true)}
                fullWidth
              >
                Abrir Modal Básico
              </Button>
            </div>

            {/* Modal de Confirmación */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2">Modal de Confirmación</h3>
              <p className="text-sm text-gray-600 mb-4">
                Modal con dos botones (confirmar y cancelar)
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsConfirmModalOpen(true)}
                fullWidth
              >
                Abrir Confirmación
              </Button>
            </div>

            {/* Modal Informativo */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-bold mb-2">Modal Informativo</h3>
              <p className="text-sm text-gray-600 mb-4">
                Modal grande con mucha información
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={() => setIsInfoModalOpen(true)}
                fullWidth
              >
                Abrir Información
              </Button>
            </div>
          </div>
        </section>

        {/* Modal de Adopción - Replica exacta de la imagen */}
        <Modal
          isOpen={isAdoptionModalOpen}
          onClose={() => setIsAdoptionModalOpen(false)}
          title={`¡Gracias por tu interés en adoptar a ${selectedDog}!`}
          primaryButtonText="Entendido"
          size="md"
        >
          <div className="space-y-4">
            <p className="text-gray-700">
              Para iniciar el proceso de adopción, por favor contáctanos al
              teléfono <span className="font-semibold">+52 55 1234 5678</span> o
              envíanos un email a{" "}
              <a
                href="mailto:adopciones@patitasfelices.org"
                className="text-primary-500 hover:text-primary-600 font-semibold"
              >
                adopciones@patitasfelices.org
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
                  <span>Visita al refugio para conocer a {selectedDog}</span>
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
        </Modal>

        {/* Modal Básico */}
        <Modal
          isOpen={isBasicModalOpen}
          onClose={() => setIsBasicModalOpen(false)}
          title="Modal Básico"
          primaryButtonText="Aceptar"
          size="sm"
        >
          <p>
            Este es un modal básico con solo un botón primario. Perfecto para
            notificaciones simples o mensajes informativos.
          </p>
        </Modal>

        {/* Modal de Confirmación */}
        <Modal
          isOpen={isConfirmModalOpen}
          onClose={() => setIsConfirmModalOpen(false)}
          title="¿Estás seguro?"
          primaryButtonText="Confirmar"
          secondaryButtonText="Cancelar"
          onPrimaryAction={() => {
            alert("Acción confirmada");
            setIsConfirmModalOpen(false);
          }}
          size="sm"
        >
          <p>
            Esta acción no se puede deshacer. ¿Estás seguro de que deseas
            continuar?
          </p>
        </Modal>

        {/* Modal Informativo Grande */}
        <Modal
          isOpen={isInfoModalOpen}
          onClose={() => setIsInfoModalOpen(false)}
          title="Sobre el Proceso de Adopción"
          primaryButtonText="Cerrar"
          size="lg"
        >
          <div className="space-y-4">
            <p>
              En nuestro refugio, nos tomamos muy en serio el bienestar de
              nuestros animales. Por eso, hemos diseñado un proceso de adopción
              que garantiza que cada perrito encuentre el hogar perfecto.
            </p>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Requisitos para Adoptar:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Ser mayor de 18 años</li>
                <li>Tener un domicilio estable</li>
                <li>Contar con espacio adecuado para el perro</li>
                <li>Tener aprobación de todos los miembros de la familia</li>
                <li>Estar dispuesto a hacer visitas de seguimiento</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Beneficios de Adoptar:
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Los perros vienen esterilizados y vacunados</li>
                <li>Primera consulta veterinaria gratuita</li>
                <li>Kit de bienvenida con accesorios básicos</li>
                <li>Asesoría post-adopción ilimitada</li>
                <li>Descuentos en tiendas asociadas</li>
              </ul>
            </div>

            <p className="text-sm text-gray-600 italic">
              ¡Adoptar un perro es dar una segunda oportunidad y ganar un amigo
              para toda la vida!
            </p>
          </div>
        </Modal>

        {/* Información del Componente */}
        <section className="mt-16 bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Sobre el Componente Modal
          </h2>

          <div className="space-y-4 text-gray-700">
            <p>
              <strong>Clasificación en Atomic Design:</strong> Organismo
            </p>
            <p>
              El componente{" "}
              <code className="bg-gray-100 px-2 py-1 rounded">Modal</code> es un
              organismo porque combina múltiples átomos (Button, iconos) con
              lógica compleja de comportamiento.
            </p>

            <div>
              <p className="font-semibold mb-2">Características principales:</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Overlay oscuro con backdrop</li>
                <li>Botón de cerrar (X) en la esquina</li>
                <li>Cierre con Escape key</li>
                <li>Cierre al hacer clic fuera del modal</li>
                <li>Bloqueo del scroll del body</li>
                <li>Botones primario y secundario opcionales</li>
                <li>Tres tamaños: sm, md, lg</li>
                <li>Completamente accesible (ARIA)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
