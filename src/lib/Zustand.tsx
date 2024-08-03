import { create } from "zustand";
import { persist } from "zustand/middleware";

type T = {
  name?: string;
  number?: string;
  email?: string;
  city?: string;
  country?: string;
  linkedin?: string;
  website?: string;
  position?: string;
  technicalSkills?: string[];
  personalSkills?: string[];
  setField: (field: any, value: any) => void;
};

export const useTextStore = create<T>()(
  persist(
    (set) => ({
      name: "",
      number: "",
      email: "",
      city: "",
      country: "",
      linkedin: "",
      website: "",
      position: "",
      technicalSkills: [],
      personalSkills: [],
      setField: (field, value) =>
        set((state) => ({ ...state, [field]: value })),
    }),
    {
      name: "text-store", // name of the item in local storage
    }
  )
);
