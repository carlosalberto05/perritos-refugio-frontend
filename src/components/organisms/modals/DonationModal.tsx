"use client";
import { DollarSign } from "lucide-react";
import Modal from "@/components/molecules/Modal";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import { cn } from "@/lib/utils";

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  amount: string;
  setAmount: (value: string) => void;
}

export const DonationModal = ({
  isOpen,
  onClose,
  amount,
  setAmount,
}: DonationModalProps) => {
  const presets = ["500", "1000", "2000"];

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="md">
      <Modal.Header
        title="Realizar una Donación"
        description="Tu apoyo nos ayuda a seguir rescatando vidas. Elige la cantidad que deseas donar."
      />
      <Modal.Body className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          {presets.map((val) => (
            <Button
              key={val}
              variant="primary"
              onClick={() => setAmount(val)}
              className={cn(
                "px-4 py-2 rounded-lg font-semibold transition-all",
                amount === val
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              ${val}
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          <label className="text-sm">Otra cantidad (MXN)</label>
          <Input
            type="number"
            placeholder="Ingresa la cantidad"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button
          variant="primary"
          disabled={!amount}
          className="flex items-center justify-center gap-2"
        >
          <DollarSign className="w-4 h-4" />
          Donar ${amount || "0"} MXN
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
