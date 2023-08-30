import JustValidate from 'just-validate';

export const validateForms = (selector, rules, afterSend) => {
  const form = document?.querySelector(selector);
  const inputStateNumber = form?.querySelector('.statenumber');
  const passportSeries = form?.querySelector('.series');
  const passportNumber = form?.querySelector('.number');

  if (!form) {
    console.error('Нет такого селектора!');
    return false;
  }

  if (!rules) {
    console.error('Вы не передали правила валидации!');
    return false;
  }

  for (let item of rules) {
    if (item.stateNumber) {
      item.rules.push({
        rule: 'function',
        validator: function () {
          const value = inputStateNumber.inputmask.unmaskedvalue();
          return value.length === 8 || value.length === 9;
        },
        errorMessage: item.telError
      });
    }

    if (item.series) {
      item.rules.push({
        rule: 'function',
        validator: function () {
          const value = passportSeries.inputmask.unmaskedvalue();
          return value.length === 4;
        },
        errorMessage: item.telError
      });
    }

    if (item.number) {
      item.rules.push({
        rule: 'function',
        validator: function () {
          const value = passportNumber.inputmask.unmaskedvalue();
          return value.length === 6;
        },
        errorMessage: item.telError
      });
    }
  }

  const validation = new JustValidate(selector);

  for (let item of rules) {
    validation
      .addField(item.ruleSelector, item.rules);
  }

  validation.onSuccess((ev) => {
    let formData = new FormData(ev.target);

    console.log(formData)
    const formValues = [...formData.values()];
    console.log(formValues)

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          if (afterSend) {
            afterSend();
          }
          console.log('Отправлено');
        }
      }
    }

    xhr.open('post', 'mail.php', true);
    xhr.send(formData);

    ev.target.reset();
  })
};
