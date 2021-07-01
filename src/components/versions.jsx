import React from 'react';
import athena from '../media/athena_soon.png';

const Version = () => {

    let styles = {
        height: "inherit",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
    };

    return(
        <section style={styles}>
            <div>
                <p>Скоро тут появятся первые версии перевода</p>
            </div>
            <img src={athena} alt="athena_head" />
        </section>
    );
}

export default Version;