// const button = document.getElementsByClassName("active");

// Array.from(button).forEach(btn => {
//     addEventListener("click", (btn)=>{
//         btn.classList.add("btn_active");
//     })
// });

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.getElementsByClassName("active");
    const sections = document.querySelectorAll(".allPartNone");

    console.log(Array.from(sections)[0])
    
    
      Array.from(buttons)[0].classList.add("btn_active");
      Array.from(sections)[0].classList.remove("allPartNone");
      Array.from(sections)[0].classList.add("allPart");

    
  

    Array.from(buttons).forEach((button, index) => {
      button.addEventListener("click", () => {
        
        Array.from(buttons).forEach((btn) => {
          btn.classList.add("about_btn");
          btn.classList.remove("btn_active");
        });
  
        Array.from(sections).forEach((part) => {
          part.classList.add("allPartNone");
        });
  
        button.classList.add("btn_active");
  
        if (sections[index]) {
          sections[index].classList.remove("allPartNone");
        }
      });
    });
  });
  
