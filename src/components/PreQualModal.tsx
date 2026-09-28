import React from 'react';
import { ContactForm } from './ContactForm';
import { X } from 'lucide-react';

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledScenario?: { price: number; down: number; rate: number; term: number } | null;
}

export const PreQualModal: React.FC<PreQualModalProps> = ({ isOpen, onClose, prefilledScenario }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#06080B]/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
      <div className="art-deco-card rounded-sm border-2 border-[#D4AF37]/50 max-w-4xl w-full my-8 shadow-2xl relative overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-[#D4AF37] hover:text-white bg-[#141822] hover:bg-[#1E2536] w-9 h-9 rounded-sm flex items-center justify-center font-bold text-sm transition-all border border-[#D4AF37]/35 cursor-pointer shadow-lg"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-2 sm:p-4">
          <ContactForm prefilledScenario={prefilledScenario} />
        </div>
      </div>
    </div>
  );
};
