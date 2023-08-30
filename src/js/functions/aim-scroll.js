import vars from '../_vars';

export const animItemsScroll = () => {
  for (const currItem of vars.scrollItemElems) {
    const windowBottom = window.pageYOffset + document.documentElement.clientHeight;
    const currItemBottom = window.pageYOffset + currItem.getBoundingClientRect().bottom;
    const currItemTop = window.pageYOffset + currItem.getBoundingClientRect().top;
    const windowTop = window.pageYOffset;

    if (currItem.classList.contains('anim-items-top')) {
      if (windowBottom >= currItemTop && windowTop <= currItemBottom) {
        currItem.classList.add('anim-item--show');
      } else {
        if (!currItem.classList.contains('no-anim-repeat')) {
          currItem.classList.remove('anim-item--show');
        }
      }
    } else {
      if (windowBottom >= currItemBottom && windowTop <= currItemBottom) {
        currItem.classList.add('anim-item--show');
      } else {
        if (!currItem.classList.contains('no-anim-repeat')) {
          currItem.classList.remove('anim-item--show');
        }
      }
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (vars.scrollItemElems.length > 0) {
    setTimeout(() => {
      animItemsScroll();
    });
  }
  // document.addEventListener('scroll', () => {
  //   if (vars.scrollItemElems.length > 0) {
  //     animItemsScroll();
  //   }
  // })
})
