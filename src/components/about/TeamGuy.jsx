import React from 'react';

const TeamGuy = (props) => {
    if(props.guy.Hobbies !== ""){
        return (
            <div className="guy-container">
                <div className="guy">
                    <img src={props.guy.Avatar} alt="avatar" className="guy__avatar" />
                    <div className="guy__info">
                        <p>Ник: {props.guy.TeamGuyName}</p>
                        <p>Роль(и): {props.guy.Role}</p>
                        <p>Хобби: {props.guy.Hobbies}</p>
                    </div>
                </div>
            </div>
        );
    }
    else{
        return (
            <div className="guy-container">
                <div className="guy">
                    <img src={props.guy.Avatar} alt="avatar" className="guy__avatar" />
                    <div className="guy__info">
                        <p>Ник: {props.guy.TeamGuyName}</p>
                        <p>Роль(и): {props.guy.Role}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default TeamGuy;