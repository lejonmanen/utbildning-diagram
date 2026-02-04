import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Education } from './types'
import { defaultEdu } from './defaults';

interface State {
	data: Education;
	setData: (d: Education) => void;
}




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
