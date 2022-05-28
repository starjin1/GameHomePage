const menu_bar = document.querySelector('#menu');
const navigation = document.querySelector('.nav');

menu_bar.addEventListener("click", () => {
    navigation.classList.toggle('active');
});