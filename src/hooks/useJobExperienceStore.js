import { create } from 'zustand';


const useJobExperience = create((set) => ({
    index: 0,
    show: false,
    setExperienceIndex: (newIndex) => set(({ index: newIndex })),
    onOpen: () => set({ show: true }),
    onClose: () => set({ show: false }),
}))

export default useJobExperience;