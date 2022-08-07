const btnArr = document.querySelectorAll("nav li a");
const sectionArr = document.querySelectorAll("section");
const ranProject = document.querySelector("#hero .btn-project");

// Section Switching

btnArr.forEach((btnElem,index) =>{
    btnElem.addEventListener("click", () =>{
        sectionArr.forEach((secElem,btnIndex) =>{
            secElem.classList.remove("section-active");
            btnArr[btnIndex].classList.remove("btn-active");
        });
        btnElem.classList.add("btn-active");
        sectionArr[index].classList.add("section-active");
    });
});

// Random Project

const urlArr = [
    "https://selva-sk10.github.io/fashionate/",
    "https://selva-sk10.github.io/barberShop/",
    "https://selva-sk10.github.io/electronite/",
    "https://selva-sk10.github.io/flag_api/",
    "https://selva-sk10.github.io/theBook/",
    "https://selva-sk10.github.io/todoApp/"
];
let proButtonFun = () =>{
    let ranVal = Math.floor(Math.random() * urlArr.length);
    return(
        `<a href="${urlArr[ranVal]}" target="_blank">Check out My Works</a>`
    );
}

ranProject.innerHTML = proButtonFun();

// Page Reload

const proButton = document.querySelector("#hero .btn-project a");

proButton.onclick = () =>{
    setTimeout(()=>{window.location.reload(true);},1);
}