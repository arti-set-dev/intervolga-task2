import Inputmask from "inputmask";
import vars from '../_vars';

const inputStateNumber = new Inputmask('А 999 АА 999', {
  placeholder: "_ ___ __ ___ ",
  definitions: {
    "А": {
      validator: "[а-яА-ЯЁё]",
      casing: "upper"
    }
  }
});

const inputDate = new Inputmask('99/99/9999');
const passportSeries = new Inputmask('9999');
const passportNumber = new Inputmask('999999');

document.addEventListener('DOMContentLoaded', () => {
  vars.inputElems?.forEach(input => {
    if (input?.classList.contains('statenumber')) {
      inputStateNumber.mask(input);
    }

    if (input?.classList.contains('date')) {
      inputDate.mask(input);
    }

    if (input?.classList.contains('date2')) {
      inputDate.mask(input);
    }

    if (input?.classList.contains('series')) {
      passportSeries.mask(input);
    }

    if (input?.classList.contains('number')) {
      passportNumber.mask(input);
    }
  })
})
