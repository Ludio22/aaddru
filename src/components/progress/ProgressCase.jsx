import React from 'react';

const ProgressCase = (props) => {
 
    let pi = props.id.progressInfo;

    const translate_style = { width: `calc(100% - ${pi.translate}%`, }
    const edit_style = { width: `calc(100% - ${pi.edit}%`, }
    const put_style = { width: `calc(100% - ${pi.put}%`, }
    const etc_style = { width: `calc(100% - ${pi.etc}%`, }

    return (
        <div className="progress__container">
            <img src={props.id.cover} alt="1" style={{ width: '35%', }} className="progress__img_one" />
            <div className="progress__info">
                <p className="progress__info_case-name">{props.id.caseName}</p>
                <img src={props.id.cover} alt="1" style={{ width: '35%', }} className="progress__img_two"/>
                <div className="progress__info_lines">
                    <p className="progress__info_decription">Перевод:</p>
                    <div className="progress__info_value">
                        <div className="progress__line" >
                            <div className="line-gradient" ></div>
                            <div className="gradient-filter" style={translate_style}></div>
                        </div>
                        <p>{pi.translate}%</p>
                    </div>
                    <p className="progress__info_decription">Редактирование:</p>
                    <div className="progress__info_value">
                        <div className="progress__line" >
                            <div className="line-gradient" ></div>
                            <div className="gradient-filter" style={edit_style}></div>
                        </div>
                        <p>{pi.edit}%</p>
                    </div>
                    <p className="progress__info_decription">Вставка:</p>
                    <div className="progress__info_value">
                        <div className="progress__line" >
                            <div className="line-gradient" ></div>
                            <div className="gradient-filter" style={put_style}></div>
                        </div>
                        <p>{pi.put}%</p>
                    </div>
                    <p className="progress__info_decription">Прочее:</p>
                    <div className="progress__info_value">
                        <div className="progress__line" >
                            <div className="line-gradient" ></div>
                            <div className="gradient-filter" style={etc_style}></div>
                        </div>
                        <p>{pi.etc}%</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProgressCase;