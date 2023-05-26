import { create } from 'zustand';

export const useLanguageStore = create((set) => ({

    index: 0,
    chosenLanguagesLength: 0,
    setLanguageIndex: (newIndex) => set(({ index: newIndex })),
    setChosenLanguagesLength: (newChosenLanguagesLength) => set(({ chosenLanguagesLength: newChosenLanguagesLength })),

}))
