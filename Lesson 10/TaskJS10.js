// Стоврити форму з трьома полями для name,surname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let form1 = document.createElement("form");
form1.name = 'form1';
let inputUserName = document.createElement("input");
inputUserName.type = 'text';
inputUserName.placeholder = 'name';
inputUserName.name = 'username';
inputUserName.style.cssText = 'margin:10px';
let inputUserSurname = document.createElement("input");
inputUserSurname.type = 'text';
inputUserSurname.placeholder = 'surname';
inputUserSurname.name = 'surname';
inputUserSurname.style.cssText = 'margin:10px';
let inputUserAge = document.createElement("input");
inputUserAge.type = 'number';
inputUserAge.placeholder = 'age';
inputUserAge.name = 'age';
inputUserAge.style.cssText = 'margin:10px';
let saveButton = document.createElement("input");
saveButton.type = 'submit';
saveButton.value = 'Save data';
saveButton.style.cssText = 'margin:10px';
form1.append(inputUserName, inputUserSurname, inputUserAge, saveButton);
document.body.appendChild(form1);

form1.onsubmit = function (ev) {
  ev.preventDefault();
  console.log(this.username.value);
  console.log(this.surname.value);
  console.log(this.age.value);
  let block = document.createElement("div");
  let p = document.createElement("p");
  p.innerText = `NAME: ${this.username.value}  //  SURNAME: ${this.surname.value}  //  AGE: ${this.age.value}`;
  block.appendChild(p);
  document.body.append(block);
}

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let form2 = document.createElement("form");
form2.name = 'form2';
let block2 = document.createElement("div");
let h2 = document.createElement("h2");

document.onreadystatechange = function () {

  if (document.readyState === 'interactive') {
    let counter = parseInt(sessionStorage.getItem('reloadCounter'));
    // debugger
    counter?counter++:counter = 1;
    sessionStorage.setItem('reloadCounter', JSON.stringify(counter));
    h2.innerText = `Page reload counter: ${sessionStorage.getItem('reloadCounter')}`
  }
}
block2.append(h2);
form2.append(block2)
document.body.append(form2);
