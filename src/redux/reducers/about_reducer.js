import screen1 from '../../media/toolses/kuriimu_2_extract.png';
import screen3 from '../../media/toolses/kuriimu_2_img.png';
import screen2 from '../../media/toolses/gmd_tool.png';
import membaev from '../../media/avatars/membaev.jpg';

let curState = {
    team: [
        {
            TeamGuyName: "Just_Nerd",
            Role: "Основатель и руководитель проекта, главная по тех. вопросам, вставщик текста.",
            Hobbies: "Игры, аниме/манга, программирование, вкусная еда, всё Японское, косплеи.",
            Avatar: "https://sun9-12.userapi.com/impg/_UQq_2DqLyeSHMt9Ul-Aum9mkmeEZIa9Kyh5ug/7UIYsC0Jrr4.jpg?size=850x720&quality=95&sign=cbc29b8d1c74ab3fdf19a3b05e3b66d0&type=album",
        },
        {
            TeamGuyName: "TakingOver",
            Role: "Переводчик",
            Hobbies: "Игры, рок и метал музыка",
            Avatar: "https://cdn.discordapp.com/attachments/838375511074799626/859104851757760572/crop_image1.jpg",
        },
        {
            TeamGuyName: "Risunaa",
            Role: "Редактор",
            Hobbies: "японский язык, пение, рисование, писательство",
            Avatar: "https://cdn.discordapp.com/attachments/835100685983809606/859127647689900062/SP9cOrgT_400x400.jpg",
        },
        {
            TeamGuyName: "Membaev",
            Role: "Переводчик",
            Hobbies: "",
            Avatar: membaev,
        }
    ],
    toolses: [
        {
            id: "extract",
            Header: "Извлечение файлов",
            Info: "Для извлечения файлов из игр на Nintendo 3DS есть много разных программ. Но я использую kuriimu 2. Она очень проста и удобна в использовании, что снижает шансы ошибиться при замене файлов. Помимо вскрытие игры в ней есть всё необходимое чтобы разархивировать архивы самой игры. Вообще kuriimu 2 — это универсальная программа, которая может помочь с самыми разными играми на разных консолях. И что самое главное — она имеет активную поддержку, благодаря чему список поддерживаемых форматов постоянно пополняется.",
            Screen: screen1,
        },
        {
            id: "fonts",
            Header: "Редактирование шрифтов",
            Info: "К сожалению, я не могу рассказвать вам что-либо о моей программе для шрифтов т.к. авторы согласились выдать её при неразглашении информации о программе.",
            Screen: "https://i.ytimg.com/vi/VQ5Ko4oesLE/maxresdefault.jpg",
        },
        {
            id: "text",
            Header: "Редактирование текста",
            Info: "Для редактирования текста я использую программу Gmd Tool. Она написана специально для игр серии Ace Attorney и из доступных программ единственная работает корректно. Большой её плюс в том, что она позволяет работать с командной строкой, тем самым давая возможность мгновенно извлекать и собирать десятки и сотни файлов. Так же, благодаря поддержке кириллицы гораздо ускоряется процесс вставки текста.",
            Screen: screen2,
        },
        {
            id: "video",
            Header: "Редактирование видео",
            Info: "Эту информацию я тоже не могу разглашать...",
            Screen: "https://trikky.ru/wp-content/blogs.dir/1/files/2020/02/07/maxresdefault-8.jpg",
        },
        {
            id: "img",
            Header: "Редактирование изображений",
            Info: "Для извлечения изображений так же используется kuriimu 2. После извлечения они редактируются в любом удобном редакторе, затем заменяют старые в kuriimu 2.",
            Screen: screen3,
        }
    ]
}

/*
{
            TeamGuyName: "",
            Role: "",
            Hobbies: "",
            Avatar: "",
        }
*/

const aboutReducer = (state = curState, action) => {

    switch(action.type){
        default:
            return state;        
    }

}

export default aboutReducer;