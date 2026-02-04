import type { Education } from "./types";


// Source - https://stackoverflow.com/a/61583051
// Posted by Andrew Kane
// Retrieved 2026-02-04, License - CC BY-SA 4.0
const defaultColors = [
  "#3366CC", "#DC3912", "#FF9900", "#109618",
  "#990099", "#3B3EAC", "#0099C6", "#DD4477",
  "#66AA00", "#B82E2E", "#316395", "#994499",
  "#22AA99", "#AAAA11", "#6633CC", "#E67300",
  "#8B0707", "#329262", "#5574A6", "#651067"
];
export function getColor(num: string | number): string {
	try {
		return defaultColors[Number(num) % defaultColors.length]
	}
	catch {
		return defaultColors[0]
	}
}


export const defaultEdu: Education = {
	name: 'FU26 | Frontendutvecklare',
	courses: [
		{ id: 1, color: 5, name: 'HTML och CSS', shortName: 'HTML+CSS', weeks: 8 },
		{ id: 2, color: 2, name: 'JavaScript grund', shortName: 'JS grund', weeks: 9 },
		{ id: 3, color: 5, name: 'UX och UI', shortName: 'UX och UI', weeks: 6 },
		{ id: 4, color: 3, name: 'Agila metoder', shortName: 'Agil', weeks: 3 },
		{ id: 5, color: 2, name: 'JavaScript fördjupning', shortName: 'JSf', weeks: 10 },
		{ id: 6, color: 4, name: 'Testning', shortName: 'Testning', weeks: 3 },
		{ id: 7, color: 2, name: 'Fullstackutveckling', shortName: 'Fullstack', weeks: 13 },
		{ id: 8, color: 1, name: 'LIA 1', shortName: 'LIA 1', weeks: 12 },
		{ id: 9, color: 6, name: 'Examensarbete', shortName: 'Exarb', weeks: 4 },
		{ id: 10,color: 1, name: 'LIA 2', shortName: 'LIA 2', weeks: 12 },
	].map(c => ({ ...c, color: defaultColors[c.color] }))
}

