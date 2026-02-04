import { useState, type PropsWithChildren, type ReactNode } from "react"

interface Props extends PropsWithChildren {
	headings: string[];
}

const Tabs = ({ headings, children }: Props) => {
	const [selected, setSelected] = useState(0)
	return (
		<div className="tabs">
			<section className="headings">
				{headings.map((h, index) => (
					<p key={h}
						className={index === selected && 'selected' || ''}
						onClick={() => setSelected(index)}> {h} </p>
				))}
			</section>

			{(children as ReactNode[])[selected]}
		</div>
	)
}

export default Tabs
