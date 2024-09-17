import "../css/index.css";
import {Outlet} from "react-router-dom";
export default function Menu() {
	return (
		<div >
			<nav className="menu">
				<a className="menu__item" href="/">Главная</a>
				<a className="menu__item" href="/drift">Дрифт-такси</a>
				<a className="menu__item" href="/timeattack">Time Attack</a>
				<a className="menu__item" href="/forza">Forza Karting</a>
			</nav>
			<div className="page">
				<Outlet />
			</div>
		</div>
	);
}
