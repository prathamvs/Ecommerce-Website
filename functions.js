// Create objects of language and respective phone no.
let contacts = new Map();
contacts.set('usa', '+91 8547962345')
contacts.set('uae', '+91 8888888888')
contacts.set('canada', '+91 9999999999')
contacts.set('japan', '+91 8746921355')

// Changing phone no. as per country
document.getElementById('select1').addEventListener('change', () => {
  language = document.getElementById('select1').value;
  document.getElementById('contact').innerHTML = contacts.get(language)
  document.getElementById('flag').src = `Seller page/${language}.png`
})


//addEventListener is used to add some events to some particular part


// Get Inputs from Seller and add to particular Place
function getandUpdate() {
  // Getting Value Entered by the User
  tit = document.getElementById('title').value;
  names = document.getElementById('name').value;
  price = document.getElementById('price').value;
  quantity = document.getElementById('quantity').value;
  offer = document.getElementById('offer').value;
  desc = document.getElementById('description').value;
  // If No Items then add items and start from Serial no. 1
  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, names, price, quantity, offer, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  // Else Start From The Part Where it Ended
  else {
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    // parse is used to convert string to javascript object which is used  to exchange data to/from a web server
    itemJsonArray = JSON.parse(itemJsonArrayStr);
    itemJsonArray.push([tit, names, price, quantity, offer, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  }
  update();
}

//  Update The Information Sent BY the User
function update() {
  if (localStorage.getItem('itemsJson') == null) {
    itemJsonArray = [];
    itemJsonArray.push([tit, names, price, quantity, offer, desc]);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  } else {
    itemJsonArrayStr = localStorage.getItem('itemsJson')
    itemJsonArray = JSON.parse(itemJsonArrayStr);
  }
  let tableBody = document.getElementById("tableBody")
  let str = ""
  itemJsonArray.forEach((element, index) => {
    // Adding Items To the List
    str += `
        <tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td>${element[2]}</td>
        <td>${element[3]}</td>
        <td>${element[4] + `%`}</td>
        <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td>
        </tr>`;

  });
  tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click", getandUpdate);
update();

// Delete Item From List
function deleted(itemIndex) {
  itemJsonArrayStr = localStorage.getItem('itemsJson')
  itemJsonArray = JSON.parse(itemJsonArrayStr);
  // Delete item index element from array
  del = itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem('itemsJson', JSON.stringify(itemJsonArray))
  update();
}

// Display The added images

const image_input = document.querySelector("#image_input");
var uploaded_image = "";

image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`
  })
  reader.readAsDataURL(this.files[0]);
})