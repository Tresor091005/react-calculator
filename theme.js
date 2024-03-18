const themes = [
    {
        bodyBg: "hsl(222, 26%, 31%)",
        bodyC: "hsl(0, 0%, 100%)",
        calcBtnBg: "hsl(223, 31%, 20%)",
        inputResultBg: "hsl(224, 36%, 15%)",
        btnBg: "hsl(30, 25%, 89%)",
        btnC: "hsl(221, 14%, 31%)",
        btnShw: "hsl(28, 16%, 65%)",
        btnHov: "hsl(0, 0%, 100%)",
        btnDelBg: "hsl(225, 21%, 49%)",
        btnDelC: "hsl(0, 0%, 100%)",
        btnDelShw: "hsl(224, 28%, 35%)",
        btnDelHov: "hsla(225, 21%, 49%, 0.85)",
        btnCalBg: "hsl(6, 63%, 50%)",
        btnCalC: "hsl(0, 0%, 100%)",
        btnCalShw: "hsl(6, 70%, 34%)",
        btnCalHov: "hsl(6, 63%, 50%, 0.85)",
    },

    {
        bodyBg: "hsl(0, 0%, 90%)",
        bodyC: "hsl(60, 10%, 19%)",
        calcBtnBg: "hsl(0, 5%, 81%)",
        inputResultBg: "hsl(0, 0%, 93%)",
        btnBg: "hsl(30, 25%, 89%)",
        btnC: "hsl(60, 10%, 19%)",
        btnShw: "hsl(28, 16%, 65%)",
        btnHov: "hsl(0, 0%, 100%)",
        btnDelBg: "hsl(185, 42%, 37%)",
        btnDelC: "hsl(0, 0%, 100%)",
        btnDelShw: "hsl(185, 58%, 25%)",
        btnDelHov: "hsla(185, 42%, 37%, 0.85)",
        btnCalBg: "hsl(25, 98%, 40%)",
        btnCalC: "hsl(0, 0%, 100%)",
        btnCalShw: "hsl(25, 99%, 27%)",
        btnCalHov: "hsl(25, 98%, 40%, 0.85)",
    },

    {
        bodyBg: "hsl(268, 75%, 9%)",
        bodyC: "hsl(52, 100%, 62%)",
        calcBtnBg: "hsl(268, 71%, 12%)",
        inputResultBg: "hsl(268, 71%, 12%)",
        btnBg: "hsl(268, 47%, 21%)",
        btnC: "hsl(52, 100%, 62%)",
        btnShw: "hsl(290, 70%, 36%)",
        btnHov: "hsla(285, 91%, 52%, 0.7)", //---
        btnDelBg: "hsl(281, 89%, 26%)",
        btnDelC: "hsl(0, 0%, 100%)",
        btnDelShw: "hsl(285, 91%, 52%)",
        btnDelHov: "hsl(281, 89%, 26%, 0.85)",
        btnCalBg: "hsl(176, 100%, 44%)",
        btnCalC: "hsl(198, 20%, 13%)",
        btnCalShw: "hsl(177, 92%, 70%)",
        btnCalHov: "hsl(176, 100%, 44%, 0.85)",
    },
];

function setTheme(theme) {
    const root = document.querySelector(":root");
    root.style.setProperty("--body-bgColor", theme.bodyBg);
    root.style.setProperty("--body-Color", theme.bodyC);
    root.style.setProperty("--calcBtn-bgColor", theme.calcBtnBg);
    root.style.setProperty("--inputResult-bgColor", theme.inputResultBg);

    root.style.setProperty("--btn-bgColor", theme.btnBg);
    root.style.setProperty("--btn-Color", theme.btnC);
    root.style.setProperty("--btn-Shadow", theme.btnShw);
    root.style.setProperty("--btn-Hover", theme.btnHov);

    root.style.setProperty("--btnDelete-bgColor", theme.btnDelBg);
    root.style.setProperty("--btnDelete-Color", theme.btnDelC);
    root.style.setProperty("--btnDelete-Shadow", theme.btnDelShw);
    root.style.setProperty("--btnDelete-Hover", theme.btnDelHov);

    root.style.setProperty("--btnCalc-bgColor", theme.btnCalBg);
    root.style.setProperty("--btnCalc-Color", theme.btnCalC);
    root.style.setProperty("--btnCalc-Shadow", theme.btnCalShw);
    root.style.setProperty("--btnCalc-Hover", theme.btnCalHov);
}


function displayThemeButtons () {
    const btnContainer = document.querySelector(".radio");
    themes.forEach((theme) => {
        const div = document.createElement("div");
        div.className = "theme-btn";
        div.style.cssText = `background: ${theme.btnC}`;
        btnContainer.appendChild(div);
        div.addEventListener("click", () => setTheme(theme));
    });
}


displayThemeButtons()