
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("open");

        const isOpen = navigation.classList.contains("open");

        menuButton.setAttribute("aria-expanded", isOpen);
    });
}
