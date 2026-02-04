// import { useState } from "react";
import type { Course, Diff } from "../data/types";
import { useStore } from "../data/store"
import { getColor } from "../data/defaults";



const AddData = () => {
	const data = useStore(state => state.data)
	const setData = useStore(state => state.setData)
	// const [data, setData] = useState<Education>(defaultEdu)
	const dc = data.courses

	return (
		<div className="form-add-data">

			<div className="form-group">
				<label> Utbildningens namn </label>
				<input type="text"
					value={data.name}
					onChange={e => setData({ ...data, name: e.target.value })}
				/>
			</div>

			{data.courses.map(c => (
				<div className="course" key={c.id}>
					<h3> {c.name} [{c.shortName}] </h3>
					<label> Kursnamn </label>
					<input type="text"
						onChange={e => setData({ ...data, courses: newList(dc, c.id, { name: e.target.value }) })}
						value={c.name}
						/>

					{/* <div className="row"> */}
						<label> Veckor </label>
						<input type="number"
							onChange={e => setData({ ...data, courses: newList(dc, c.id, { weeks: Number(e.target.value) }) })}
							value={c.weeks}
							/>

						<label> Kategori (siffra) </label>
						<input type="text" className="short"
							onChange={e => setData({ ...data, courses: newList(dc, c.id, { color: getColor(e.target.value) }) })}
							value={c.color}
							/>
					{/* </div> */}

					<button onClick={() => setData({ ...data, courses: data.courses.filter(c2 => c2.id !== c.id)})}> Ta bort </button>
				</div>
			))}
			<button
				onClick={() => setData({ ...data, courses: [ ...data.courses, newCourse(data.courses) ] })}
			> Lägg till kurs </button>

			{/* <button> Generera diagram </button> */}
		</div>
	)
}

function newCourse(courses: Course[]): Course {
	return {
		id: courses.reduce((acc, cur) => Math.max(acc, cur.id), 0) + 1,
		name: '',
		shortName: '',
		weeks: 2,
		color: getColor(0)
	}
}

function newList(list: Course[], id: number, diff: Diff): Course[] {
	return list.map(x => {
		if( x.id === id ) {
			return { ...x, ...diff }
		}
		else return x
	})
}

export default AddData
