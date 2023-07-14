import { create } from 'zustand';


const useLanguageStore = create((set) => ({
    index: 0,
    show: false,
    setItemIndex: (newIndex) => set(({ index: newIndex })),
    onOpen: () => set({ show: true }),
    onClose: () => set({ show: false }),
}))

export default useLanguageStore;