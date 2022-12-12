import { ref } from 'vue'


export const postsFirstRow = ref([
    {id: 'post-1', title: 'Дневной макияж с ресницами', text:'Нежный нюдовый макияж, выразительность с помощью ресничек.', cost: '12000 тг.', imageURL: 'img/service-section/1.jfif'},
    {id: 'post-2', title: 'Вечерний макияж',  text:'Вечерний макияж', cost: '12000 тг.', imageURL: 'img/service-section/2.jpg'},
    {id: 'post-3', title: 'Свадебный макияж',  text:'Свадебный нежный макияж', cost: 'от 15000 до 25000 тг.', imageURL: 'img/service-section/3.png'},
])

export const postsSecondRow = ref([
    {id: 'post-4', title: 'Возрастной макияж',  text:'Подчеркиваю вашу красоту, скрываю все недостатки.', cost: '120000 тг.', imageURL: 'img/service-section/4.png'},
    {id: 'post-5', title: 'Макияж для фото и видео съемок',  text:'Все виды макияжа с учетом всех нюансов съемок.', cost: 'от 15000 до 30000 тг.', imageURL: 'img/service-section/5.jpg'},
])
