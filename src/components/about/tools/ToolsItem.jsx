import React from 'react';

const ToolsItem = (props) => {
    return(
        <div className="tools__item">
            <div className="tools__item-info">
                <h3 id={props.item.id}>{props.item.Header}</h3>
                <p>{props.item.Info}</p>
            </div>
            <img src={props.item.Screen} alt="screen" className="tools__item-demo" />
        </div>
    );
}

export default ToolsItem;