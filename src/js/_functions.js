// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
// import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/enable-scroll';

// Реализация модального окна
// import GraphModal from 'graph-modal';
// const modal = new GraphModal();

// import ModalWindow from 'r-modalwindow';
// const modal = new ModalWindow([data-modal]);

// fslightbox
// require("fslightbox")

// const gallery = new FsLightbox();


// плагин menuAutofocus
// import MenuAutofocus from 'r-menuautofocus';
// const menuAutofocus = new MenuAutofocus('[data-burger]');

// Плагин динамического адаптива
// import DynamicAdaptive from 'r-dynamicadaptive';
// const dynamicAdaptive = new DynamicAdaptive('[data-dynamic-state]');

// Реализация табов
// import GraphTabs from 'graph-tabs';
// const tabs = new GraphTabs('tab');

// Плагин аккордеонов
// import Accordion from 'r-accordions';
// const accordionList = new Accordion('.accordion-list');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
// import Swiper, { Navigation, Pagination } from 'swiper';
// Swiper.use([Navigation, Pagination]);
// const swiper = new Swiper(el, {
//   slidesPerView: 'auto',
// });

// плагин noUislider
// import noUislider from 'nouislider';
// const slider = document.querySelector('.slider');
// noUiSlider.create(slider, {
//   start: 50,
//   step: 1,
//   connect: [true, false],
//   range: {
//     'min': 10,
//     'max': 1000
//   },
// });

// плагин декоративных стрелочек leader-line
// import LeaderLine from 'leader-line-new';
// new LeaderLine(
//   document.getElementById('element-1'),
//   document.getElementById('element-2')
// );

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// import { animItemsScroll } from './functions/anim-scroll';

// video.js
// import videojs from 'video.js';
// const player = videojs(document.querySelector('.video-js'));

// Плагин choices.js
// import Choices from 'choices.js';
// const element = document.querySelector('.js-choice');
// const choices = new Choices(element);

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// import { smoothSrooll } from './functions/smooth-srooll';

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// Удалить ошибки валидации
import { removeValidation } from './functions/remove-validation';

// Сохранение данных формы при перезагрузке страницы
import { savingData } from "./functions/saving-data";

import { validateForms } from './functions/validate-forms';

const contactsFormRules = [
  {
    ruleSelector: '.statenumber',
    stateNumber: true,
    rules: [{
      rule: 'required',
      value: true,
    },
    ]
  },
  {
    ruleSelector: '.vehicle',
    rules: [{
      rule: 'required',
    }]
  },
  {
    ruleSelector: '.date',
    rules: [{
      rule: 'required',
    },
    {
      rule: 'customRegexp',
      value: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9][0-9]|20[0-1][0-9]|202[0-3])$/,
    },]
  },
  {
    ruleSelector: '.fullname',
    rules: [{
      rule: 'required',
    }]
  },
  {
    ruleSelector: '.series',
    series: true,
    rules: [{
      rule: 'required',
      value: true,
    },
    {
      rule: 'minLength',
      value: 4,
    },]
  },
  {
    ruleSelector: '.number',
    number: true,
    rules: [{
      rule: 'required',
      value: true,
    }]
  },
  {
    ruleSelector: '.text',
    rules: [{
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
    }]
  },
  {
    ruleSelector: '.date2',
    rules: [{
      rule: 'required',
    },
    {
      rule: 'customRegexp',
      value: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19[0-9][0-9]|20[0-1][0-9]|202[0-3])$/,
    },]
  },
]

const afterForm = () => {
  console.log('Произошла отправка, тут можно писать любые действия');
};

validateForms('.form--vehicle', contactsFormRules, afterForm);
