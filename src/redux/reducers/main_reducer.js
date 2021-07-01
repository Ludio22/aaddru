let curState = {
    about: "Приветствую всех на сайте перевода игры «Phoenix Wright: Ace Attorney − Dual Destinies». Здесь вы всегда сможете найти актуальную информацию о процессе перевода, а также узнать ответы на все возможные вопросы.",
};

const mainReducer = (state = curState, action) => {

    switch(action.type){
        default:
            return state;        
    }

}

export default mainReducer;