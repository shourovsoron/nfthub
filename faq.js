
// For FAQ
const faq = document.querySelector(".allfaq")




function activeFAQ(faq){
    // console.log("opened");

    const currentFAQ = faq.parentNode;
    
    const active = document.querySelector(".active-faq");

  
    if (active && !currentFAQ.classList.contains("active-faq")) {
      active.classList.remove("active-faq");
      const currentFAQbtn = active.querySelector(".faq-open-btn");
      currentFAQbtn.innerHTML='<i class="fa-solid fa-angle-down"></i>';
    }
  
    currentFAQ.classList.toggle("active-faq");
    const currentFAQbtn = currentFAQ.querySelector(".faq-open-btn");
    // currentFAQbtn.innerHTML="-";

    if(currentFAQbtn.innerHTML=='<i class="fa-solid fa-angle-up"></i>'){
        currentFAQbtn.innerHTML='<i class="fa-solid fa-angle-down"></i>';
    }else if(currentFAQbtn.innerHTML=='<i class="fa-solid fa-angle-down"></i>'){
        currentFAQbtn.innerHTML='<i class="fa-solid fa-angle-up"></i>';
    }


}

