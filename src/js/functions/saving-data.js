import vars from "../_vars";

let formData = {};

export const savingData = (e) => {
  formData[e.target.name] = e.target.value;
  localStorage.setItem('formData', JSON.stringify(formData));
}



vars.formElems?.forEach(form => {
  form.addEventListener('input', (e) => {
    savingData(e);
  })

  if (localStorage.getItem('formData')) {
    formData = JSON.parse(localStorage.getItem('formData'));

    for (const key in formData) {
      form.elements[key].value = formData[key];
    }
  }
})
