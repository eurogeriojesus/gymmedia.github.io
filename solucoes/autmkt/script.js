

formLabels.forEach(label => {
    const inputId = label.getAttribute('for');
    const inputElement = document.getElementById(inputId);

    inputElement.addEventListener('input', () => {
        if (inputElement.value !== '') {
            label.classList.add('active');
        } else {
            label.classList.remove('active');
        }
    });
});
