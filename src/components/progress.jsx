import React from 'react';
import ProgressCase from "./progress/ProgressCase";
import '../css/css/progress.css';

const Progress = (props) =>{
    
    let values = props.cases.cases.map(el => <ProgressCase id={el} />);

    return(
        <section className="progress">
            {values}
        </section>
    );
}

export default Progress;