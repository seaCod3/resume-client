import { create } from 'zustand';

export const useLanguageStore = create((set) => ({

    index: 0,
    chosenLanguagesLength: 0,
    inLangPage: false,
    setLanguageIndex: (newIndex) => set(({ index: newIndex })),
    setChosenLanguagesLength: (newChosenLanguagesLength) => set(({ chosenLanguagesLength: newChosenLanguagesLength })),
    setInLangPage: (newInLangPage) => set(({ inLangPage: newInLangPage })),

}))
