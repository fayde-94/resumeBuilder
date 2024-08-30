import { create } from "zustand";
import { persist } from "zustand/middleware";

type Language = {
  lang?: string;
  prof?: string;
};

type T = {
  name: string;
  number: { u: string; f: string };
  email: string;
  city: string;
  country: string;
  linkedin: string;
  website: string;
  position: string;
  technicalSkills: string[];
  personalSkills: string[];
  accentColor: string;
  ui_pdfs: number;
  ui_likes: number;
  interactions: {
    liked: boolean;
    commented: boolean;
  };
  education: {
    school: string;
    degree: string;
    gradMonth: string;
    gradYear: string;
  };
  counterArray: number[];
  langsArray: number[];
  summary: string;
  pfpSize: { px: string; percent: string };
  pfp: {
    metadata: {};
    path: {};
    pathOrder: [];
    size: number;
    thumbnailUrl: string;
    uploadedAt: [];
    url: string;
  };
  experience: any[];

  languages: Language[];
  setLanguage: (index: number, lang: Language) => void;
  addLanguage: () => void;
  removeLanguage: (index: number) => void;

  addCount: () => void;
  removeCount: () => void;
  setField: (field: any, value: any) => void;
  setExperience: (index: number, key: string, value: any) => void;
  removeExperience: (index: number) => void;
};

export const useTextStore = create<T>()(
  persist(
    (set) => ({
      ui_pdfs: 0,
      ui_likes: 0,
      name: "",
      number: { u: "", f: "" },
      email: "",
      city: "",
      country: "",
      linkedin: "",
      website: "",
      position: "",
      technicalSkills: [],
      personalSkills: [],
      accentColor: "#1a2e49",
      education: {
        school: "",
        degree: "",
        gradMonth: "",
        gradYear: "",
      },
      interactions: {
        liked: false,
        commented: false,
      },
      summary: "",
      experience: [],
      pfpSize: {
        px: "250px",
        percent: "18.1818182%",
      },
      pfp: {
        metadata: {},
        path: {},
        pathOrder: [],
        size: 0,
        thumbnailUrl: "",
        uploadedAt: [],
        url: "",
      },

      languages: [{ lang: "", prof: "" }],

      setLanguage: (index, language) => {
        set((state) => {
          const newLanguages = [...state.languages];
          newLanguages[index] = language;
          return { languages: newLanguages };
        });
      },

      // Function to add a new language entry
      addLanguage: () => {
        set((state) => ({
          languages: [...state.languages, { lang: "", prof: "" }],
        }));
      },

      // Function to remove a language entry by index
      removeLanguage: (index) => {
        set((state) => {
          const newLanguages = state.languages.filter((_, i) => i !== index);
          return { languages: newLanguages };
        });
      },

      counterArray: [0],
      langsArray: [0],
      addCount: () =>
        set((state) => {
          const lastCount = state.counterArray[state.counterArray.length - 1];
          return { counterArray: [...state.counterArray, lastCount + 1] };
        }),
      removeCount: () =>
        set((state) => {
          if (state.counterArray.length > 1) {
            return { counterArray: state.counterArray.slice(0, -1) };
          }
          return state;
        }),
      setExperience: (index, key, value) =>
        set((state) => {
          const newExperience = [...state.experience];
          newExperience[index] = { ...newExperience[index], [key]: value };
          return { experience: newExperience };
        }),
      removeExperience: (index) =>
        set((state) => {
          const newExperience = state.experience.filter((_, i) => i !== index);
          return { experience: newExperience };
        }),
      setField: (field, value) =>
        set((state) => ({ ...state, [field]: value })),
    }),

    {
      name: "text-store", // name of the item in local storage
    }
  )
);
