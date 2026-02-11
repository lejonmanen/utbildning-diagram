import type { Course, Diff } from "./types"

export function newCourse(courses: Course[]): Course {
	return {
		id: courses.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1,
		name: '',
		shortName: '',
		weeks: 2,
		color: 0
	}
}

export function newList(list: Course[], id: number, diff: Diff): Course[] {
	return list.map(x => {
		if( x.id === id ) {
			return { ...x, ...diff }
		}
		else return x
	})
}

export function shortifyName(longName: string): string {
	return longName.split(' ')[0]
}
