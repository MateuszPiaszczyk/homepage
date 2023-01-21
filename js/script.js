{
    const welcome = () => {
        console.log("Cześć developerze, miej dobry dzień!😀");
    }
    const hiddenHeader = document.querySelector(".hiddenHeader");
    const header = document.querySelector(".section__header");

    hiddenHeader.addEventListener("click", () => {
        header.remove();
    });

    const toggleTheme = () => {
        const body = document.documentElement;
        const themeName = document.querySelector(".js-themeName");

        body.classList.toggle("body--darkTheme");
        themeName.innerText = body.classList.contains("body--darkTheme") ? "tryb normalny" : "wysoki kontrast";

    }

    const init = () => {
        const switchTheme = document.querySelector(".js-switchThemeButton");
        switchTheme.addEventListener("click", toggleTheme);

        welcome();
    }
    init ();
}