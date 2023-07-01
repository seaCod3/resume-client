import { create } from 'zustand';


const useJobExperience = create <RegisterModalStore> ((set) => ({
    index: 0,
    setExperienceIndex: (newIndex) => set(({ index: newIndex })),
}))

export default useJobExperience;