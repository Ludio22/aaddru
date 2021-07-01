import cover1 from '../../media/cases/1.png';
import cover2 from '../../media/cases/2.png';
import cover3 from '../../media/cases/3.png';
import cover4 from '../../media/cases/4.png';
import cover5 from '../../media/cases/5.png';
import cover6 from '../../media/cases/6.png';

const getHowMach = (Cur, All) => {
    return Cur / All * 100;
}

let curState = {
    cases: [
        {
            caseName: 'Turnabout Countdown',
            progressInfo: {
                translate: Math.trunc(getHowMach(45, 45)),
                edit: Math.trunc(getHowMach(45, 45)),
                put: Math.trunc(getHowMach(5, 45)),
                etc: 34,
            },
            cover: cover1,
        },
        {
            caseName: 'The Monstrous Turnabout',
            progressInfo: {
                translate: 3,
                edit: 0,
                put: 0,
                etc: 0,
            },
            cover: cover2,
        },//Turnabout Academy
        {
            caseName: 'Turnabout Academy',
            progressInfo: {
                translate: 0,
                edit: 0,
                put: 0,
                etc: 0,
            },
            cover: cover3,
        },
        {
            caseName: 'The Cosmic Turnabout',
            progressInfo: {
                translate: 0,
                edit: 0,
                put: 0,
                etc: 0,
            },
            cover: cover4,
        },
        {
            caseName: 'Turnabout for Tomorrow',
            progressInfo: {
                translate: 0,
                edit: 0,
                put: 0,
                etc: 0,
            },
            cover: cover5,
        },
        {
            caseName: 'Turnabout Reclaimed',
            progressInfo: {
                translate: 0,
                edit: 0,
                put: 0,
                etc: 0,
            },
            cover: cover6,
        }
    ]
};

const progressReducer = (state = curState, action) => {

    switch (action.type) {
        default:
            return state;
    }

}

export default progressReducer;