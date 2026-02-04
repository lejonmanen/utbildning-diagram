
export interface Education {
	name: string;
	courses: Course[]
}
export interface Course {
	id: number;
	name: string;
	shortName: string;
	weeks: number;
	color: string;
}
export type Diff = {
	name?: string;
	shortName?: string;
	weeks?: number;
	color?: string;
}

// interface WithId {
// 	id: number;
// }
// export type DiffWithId = Diff & WithId
