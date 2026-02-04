import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Education } from './types'

interface State {
	data: Education;
	setData: (d: Education) => void;
}

const defaultEdu: Education = { name: 'SU26 | Superutvecklare', courses: [
	{ id: 1, name: 'Glassavsmakare', shortName: 'glass', weeks: 3 },
	{ id: 2, name: 'Igloo for dummies', shortName: 'ig26', weeks: 7 }
] }


const useStore = create<State>()(
	persist(
		set => ({
			data: defaultEdu,
			setData: d => set((/*state*/) => ({ data: d }))
		}),
		{
			name: 'edu-diagram'
		}
	)
)
export { useStore }
