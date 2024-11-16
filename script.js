document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.textContent = 'Click Me!';
    button.style.padding = '10px';
    button.style.marginTop = '20px';
    button.addEventListener('click', () => {
        alert('You clicked the button!');
    });
    document.body.appendChild(button);
});
