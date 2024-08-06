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
  accentColor?: string;
  education?: {
    school?: string;
    degree?: string;
    gradMonth?: string;
    gradYear?: string;
  };
  pfpSize: string;
  pfp?: {
    metadata: {};
    path: {};
    pathOrder: [];
    size: number;
    thumbnailUrl: string;
    uploadedAt: [];
    url: string;
  };
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
      accentColor: "#1a2e49",
      education: {},

      pfpSize: "",
      pfp: {
        metadata: {},
        path: {},
        pathOrder: [],
        size: 0,
        thumbnailUrl: "",
        uploadedAt: [],
        url: "",
      },
      setField: (field, value) =>
        set((state) => ({ ...state, [field]: value })),
    }),
    {
      name: "text-store", // name of the item in local storage
    }
  )
);
