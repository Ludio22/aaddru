import React from 'react';
import { NavLink } from "react-router-dom";
import '../css/header.css';

const Header = () => {
    return (
        <header>
            <nav className="navigator">
                <NavLink to="/" className="NavLink"><div className="navigator__item">Главная</div></NavLink>
                <NavLink to="/progress" className="NavLink"><div className="navigator__item">Прогресс</div></NavLink>
                <NavLink to="/about" className="NavLink"><div className="navigator__item">О переводе</div></NavLink>
                <NavLink to="/feed_back" className="NavLink"><div className="navigator__item">Обратная связь</div></NavLink>
                <NavLink to="/donation" className="NavLink"><div className="navigator__item">Поддержать</div></NavLink>
                <NavLink to="/version" className="NavLink"><div className="navigator__item">Версии</div></NavLink>
            </nav>
        </header>
    );
}

export default Header;