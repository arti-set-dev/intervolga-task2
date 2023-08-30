import vars from '../_vars';

export const removeValidation = () => {
  const forms = document?.querySelectorAll('.form');
  forms.forEach(formEl => {
    const fields = formEl?.querySelectorAll('.input-reset');
    fields?.forEach(fieldEl => {
      if (fieldEl.classList.contains('just-validate-error-field')) {
        fieldEl?.classList.remove('just-validate-error-field');
        formEl?.reset();
      }

      if (fieldEl.classList.contains('just-validate-success-field')) {
        fieldEl?.classList.remove('just-validate-success-field');
      }

      formEl?.reset();
      localStorage.removeItem('formData');
    })
    const errorLabels = document?.querySelectorAll('.just-validate-error-label');
    errorLabels?.forEach(errorLabel => {
      errorLabel?.remove();
    })
  })
}

document.addEventListener('DOMContentLoaded', () => {
  vars.resetBtnElems.forEach(closeBtnEl => {
    closeBtnEl?.addEventListener('click', () => {
      removeValidation();
    })
  })
})
