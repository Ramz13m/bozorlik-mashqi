document.addEventListener("DOMContentLoaded", () =>{
  
  
  let shoppingList = [];
  const form = document.querySelector(".form");
  const formInput = form.querySelector(".form__input");
  const formAddButton = form.querySelector(".form__add-button");
  const formClearButton = form.querySelector(".form__clear-button");
  const list = document.querySelector(".list__item");
  
  if(form){
    form.addEventListener("submit", (e)=>{
      e.preventDefault();
      
      const newProduct = formInput.value.toLowerCase().trim();
      
      if(!shoppingList.includes(newProduct)){
        shoppingList.push(newProduct);
      }
      
      list.innerHTML = "";
      
      const progressFragmant = document.createDocumentFragment()
      
      for(let product of shoppingList){
        const newList = document.createElement("li");
        newList.style.cssText = "color: white; fon-family: sans-serif; font-size: 20px; font-weight: bold;"
        newList.textContent = product;
        progressFragmant.appendChild(newList);
      }
      
      list.appendChild(progressFragmant);
      
      
      formInput.value = "";
    }) // form
  }
  
  
  formClearButton.addEventListener("click", () => {
    shoppingList = [];
    list.innerHTML = "";
  })
  
  
}) // end