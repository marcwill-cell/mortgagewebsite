import React from 'react';
import { ContactForm } from './ContactForm';

interface PreQualModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledScenario?: { price: number; down: number; rate: number; term: number } | null;
}

export const PreQualModal: React.FC<PreQualModalProps> = ({ isOpen, onClose, prefilledScenario }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-3xl w-full my-8 shadow-2xl relative overflow-hidden animate-fade-in">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 text-slate-300 hover:text-white bg-teal-950/80 hover:bg-teal-900 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors border border-teal-800"
        >
          ✕
        </button>

        <div className="pt-2">
          <ContactForm prefilledScenario={prefilledScenario} />
        </div>
      </div>
    </div>
  );
};
