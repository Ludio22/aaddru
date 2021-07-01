import React from 'react';
import ToolsItem from './tools/ToolsItem';

const Tools = (props) => {

    let values = props.toolses.map(el => <ToolsItem item={el} />);

    return(
        <section className="tools">
            <h2 id="tools">Тех. Часть</h2>
            <nav className="tools__nav">
                <p>На тот случай если кто-нибудь захочет сделать перевод какой-нибудь игры напишу тут все технические аспекты, с которыми мне пришлось столкнуться (все данные актуальны только для 3ds версии).</p>
                <ul>
                    <a href="#extract"><li>Извлечение данных из игры.</li></a>
                    <a href="#fonts"><li>Редактирование шрифтов.</li></a>
                    <a href="#text"><li>Редактирование текста.</li></a>
                    <a href="#video"><li>Редактирование видео.</li></a>
                    <a href="#img"><li>Редактирование изображений.</li></a>
                </ul>
            </nav>
            {values}
        </section>
    );
}

export default Tools;