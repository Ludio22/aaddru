import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <nav className="Navigator">
                <NavLink to="/" className="NavLink">Главная</NavLink>
                <NavLink to="/progress" className="NavLink">Прогресс</NavLink>
                <NavLink to="/about" className="NavLink">О переводе</NavLink>
                <NavLink to="/team" className="NavLink">Команда</NavLink>
                <NavLink to="/feed_back" className="NavLink">Контакты</NavLink>
                <NavLink to="/version" className="NavLink">Версии</NavLink>
                <NavLink to="/money" className="NavLink">Донаты</NavLink>
            </nav>
        </header>
    );
}

export default Header;