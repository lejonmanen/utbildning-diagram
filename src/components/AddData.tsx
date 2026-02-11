import { clearStorage, useStore } from "../data/store"
import { defaultEdu } from "../data/defaults";
import { newCourse, newList, shortifyName } from "../data/utils";



const AddData = () => {
	const data = useStore(state => state.data)
	const setData = useStore(state => state.setData)
	// const [data, setData] = useState<Education>(defaultEdu)
	const dc = data.courses

	const fillDefaultData = () => {
		setData({ ...defaultEdu })
	}

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
					<div className="fields row">
						<div className="column margin-bot-md">
							<label> Kursnamn </label>
							<input type="text"
								onChange={e => setData({ ...data, courses: newList(dc, c.id, { name: e.target.value, shortName: shortifyName(e.target.value) }) })}
								value={c.name}
								/>
						</div>

						<div className="column">
							<label> Veckor </label>
							<input type="number"
								onChange={e => setData({ ...data, courses: newList(dc, c.id, { weeks: Number(e.target.value) }) })}
								value={c.weeks}
								/>
						</div>
						<div className="column">
							<label title="Det finns 20 olika färger inlagda. Skriv 0 för att välja första färgen till den här kursen."> Färgkategori </label>
							<input type="number" className="short"
								onChange={e => setData({ ...data, courses: newList(dc, c.id, { color: Number(e.target.value) }) })}
								value={c.color}
								/>
						</div>
					</div>

					<button onClick={() => setData({ ...data, courses: data.courses.filter(c2 => c2.id !== c.id)})}> Ta bort </button>
				</div>
			))}
			<div className="row">
				<button
					className="large"
					onClick={() => setData({ ...data, courses: [ ...data.courses, newCourse(data.courses) ] })}
				> Lägg till kurs </button>

				<button
					className="large"
					onClick={clearStorage}
				> Rensa localStorage
				</button>
				<button
					className="large"
					onClick={fillDefaultData}
				> Ersätt med exempeldata
				</button>

			</div>

		</div>
	)
}



export default AddData
