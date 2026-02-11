import { Pie } from "react-chartjs-2";
import { useStore } from "../data/store";

import './chart'
import { getColor } from "../data/defaults";

const Diagram = () => {
	const rawData = useStore(state => state.data)

	const data = {
		labels: rawData.courses.map(c => c.name),
		datasets: [
			{
				label: 'Veckor',
				data: rawData.courses.map(c => c.weeks),
				backgroundColor: rawData.courses.map(c => getColor(c.color))
			}
		]
	}
	// console.log(data)
	const courseAmount = rawData.courses.length
	const weekAmount = rawData.courses.reduce((acc, cur) => cur.weeks + acc, 0)
	const maxLen = rawData.courses.reduce((acc, cur) => Math.max(cur.weeks, acc), -9999)

	return (
		<div className="diagram">
			<h1> {rawData.name} </h1>
			<p> {courseAmount} kurser på {weekAmount} veckor. </p>
			<p> Den längsta kursen är {maxLen} veckor. </p>
			<Pie data={data} />
		</div>
	)
}

export default Diagram
