import './App.css'
import AddData from './components/AddData'
import Diagram from './components/Diagram'
import Tabs from './components/Tabs'


const App = () => {

	return (
		<div className="app">
			<Tabs headings={['Kurser', 'Diagram']}>
				<AddData />
				<Diagram />
			</Tabs>
			<div className=""></div>
		</div>
	)
}

export default App
