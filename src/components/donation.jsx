import React from 'react';
import nami from '../media/donation.jpeg';
import '../css/donation.css';

const Donation = () => {
    return (
        <section className="donation">
            <div className="donation__container">
                <a href="https://www.donationalerts.com/r/just_nerd" rel="noreferrer" target="_blank">
                    <div><img src={nami} alt="Nami_Money" className="donation__img" /></div>
                </a>
                <p className="donation__about">
                    <a href="https://www.donationalerts.com/r/just_nerd" rel="noreferrer" target="_blank">Тут</a> вы можете пожертвовать нам любую сумму. Все деньги пойдут на нужды для перевода.
                </p>
            </div>
        </section>
    );
}

export default Donation;