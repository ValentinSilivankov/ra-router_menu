import "./Menu/css/index.css";
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Menu from "./Menu/components/Menu"
import HomePage from "./Menu/components/HomePage";
import DriftPage from "./Menu/components/DriftPage";
import TimeAttackPage from "./Menu/components/TimeAttackPage";
import ForzaPage from "./Menu/components/ForzaPage";

export default function App() {
  return (
	  <div>
		  <BrowserRouter>
			  <Routes>
				<Route path="/" element={<Menu />}>
					<Route index element={<HomePage />} />
					<Route path="/drift" element={<DriftPage />} />
					<Route path="/timeattack" element={<TimeAttackPage />} />
					<Route path="/forza" element={<ForzaPage />} />
				</Route>
			  </Routes>
		  </BrowserRouter>
	  </div>
  );
}
