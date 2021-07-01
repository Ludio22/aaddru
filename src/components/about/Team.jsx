import React from 'react';
import TeamGuy from './TeamGuy';

const Team = (props) => {

    let teams = props.team.map(el => <TeamGuy guy={el} />);

    return(
        <section id="team" className="team">
            <h2 id="team">Наша команда</h2>
            {teams}
        </section>
    );
}

export default Team;