console.log("Cześć developerze!");
console.log("Jeśli tu juz jesteś to zyczę Ci dobrego dnia!! PS: coś mi niedziała kropka nad <Z> pewnie to kwestia jakiegoś ustawienia w programie lub złego przypisania, ale juz mi się nie chciało z tym grzebać, takze ten... praca domowa wykonana, więc trzymaj się! :D");

let hiddenHeader = document.querySelector(".hiddenHeader");
let header = document.querySelector(".section__header");

hiddenHeader.addEventListener("click", () => {
    header.remove();
});

let switchTheme = document.querySelector(".js-switchThemeButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".js-themeName");
let table = document.querySelector(".table__row");


switchTheme.addEventListener("click", () => {
    body.classList.toggle("body--darkTheme");
    table.classList.toggle("tableRowDark");

    themeName.innerText = body.classList.contains("body--darkTheme") && table.classList.contains("tableRowDark") ? "tryb normalny" : "wysoki kontrast";

});

const numbers = [5, 10, 15, 20, 25, 30];
const [number1, , number3, ...otherNumbers] = numbers;