// const button = document.getElementsByClassName("active");


// Array.from(button).forEach(btn => {
//     addEventListener("click", (btn)=>{
//         btn.classList.add("btn_active");
//     })
// }); 

const buttons = document.getElementsByClassName("active");

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("btn_active");
    });
});