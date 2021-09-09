const storageName = 'forminfo';

const currentStorage = JSON.parse(window.localStorage.getItem(storageName));

if (currentStorage) {
  form.fullname.value = currentStorage.fullname;
  form.useremail.value = currentStorage.useremail;
  form.textarea.value = currentStorage.textarea;
}

form.addEventListener('input', () => {
  const newData = {
    username: form.fullname.value,
    email: form.useremail.value,
    message: form.textarea.value,
  };

  window.localStorage.setItem(storageName, JSON.stringify(newData));
});