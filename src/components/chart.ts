
import {
	Chart as ChartJS,
	ArcElement,
	Tooltip,
	Legend,
	Colors
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

ChartJS.defaults.plugins.legend.position = 'bottom'
