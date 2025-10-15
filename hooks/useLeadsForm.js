"use client";

import { create } from 'zustand';

const useLeadFormStore = create((set) => ({
  isOpen: false,
  openLeadForm: () => set({ isOpen: true }),
  closeLeadForm: () => set({ isOpen: false }),
}));

export const useLeadForm = () => {
  const { isOpen, openLeadForm, closeLeadForm } = useLeadFormStore();
  
  return {
    isOpen,
    openLeadForm,
    closeLeadForm
  };
};