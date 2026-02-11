import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import type { Education } from './types'
import { emptyEdu } from './defaults';

interface State {
	data: Education;
	setData: (d: Education) => void;
}


const storageKey = 'edu-diagram'

const useStore = create<State>()(
	persist(
		set => ({
			data: { ...emptyEdu },
			setData: d => set((/*state*/) => ({ data: d }))
		}),
		{
			name: storageKey
		}
	)
)

function clearStorage() {
	localStorage.removeItem(storageKey)
}

export { useStore, clearStorage }
