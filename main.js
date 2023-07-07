const modalBody = document.querySelector(".modal-body");

const saveBooks = () => {
  localStorage.setItem("books", JSON.stringify(array));
};

modalBody.innerHTML = `
<div>
 <label>Name :</label>
 <input class="form-control mt-2" id="nameBook" type = "text" placeholder="Your name book">
</div>

<div class="mt-3">
 <label>Src :</label>
 <input class="form-control mt-2" id="srcBook" type = "text" placeholder="Your src book">
</div>

<div class="mt-3">
 <label>Price :</label>
 <input class="form-control mt-2" id="priceBook" type = "number" placeholder="Your name book price">
</div>

<div class="mt-3">
 <label>Sales :</label>
 <input class="form-control mt-2" id="salesBook" type = "number" placeholder="Your name book sales">
</div>

<div class="mt-3">
 <label>Status :</label>
 <select class="mt-3" name="" id="selectBook">
  <option value="published">Published</option>
  <option value="draft">Draft</option>
 </select>
</div>
`;

const row = document.querySelector(".row");

const info = () => {
  array.map((item) => {
    row.innerHTML += `
      <div class="col-sm-6 col-lg-4 p-2">
        <div class=" d-flex flex-column  align-items-center rounded-3 card1 p-3">
        
        <img class=" rounded-2 mt-3" src="${
          item.src
        }"  alt="" style=" width: 150px ">
        <div class="mt-3 text-start">
          <p class="d-inline-block status p-1 rounded-2"><i class="fa-solid fa-circle"></i> ${
            item.status
          }</p>
          <h5>${item.name}</h5>
  
          <div class="d-flex align-items-center justify-content-between">
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price}</p>
            </div>
            <div>
            <p class="text-secondary">Sales</p>
             <p>${item.sales}</p>
            </div>
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price * item.sales}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
     `;
  });
};
const modalSave = () => {
  row.innerHTML = "";
  const nameBook = document.querySelector("#nameBook");
  const srcBook = document.querySelector("#srcBook");
  const priceBook = document.querySelector("#priceBook");
  const salesBook = document.querySelector("#salesBook");
  const selectBook = document.querySelector("#selectBook");

  array.push({
    name:
      nameBook.value != "" ? nameBook.value : alert("malumot kiritmadingiz"),
    src: srcBook.value,
    price: priceBook.value,
    sales: salesBook.value,
    status: selectBook.value,
  });
  // alert("123");

  nameBook.value = "";
  srcBook.value = "";
  priceBook.value = "";
  salesBook.value = "";
  selectBook.value = "";
  info();
  // console.log(array);
  saveBooks();
};

const search = () => {
  row.innerHTML = "";
  const searchInput = document.getElementById("searchInput");
  array.map((item) => {
    console.log(item);
    if (item.name.toLowerCase().includes(searchInput.value.toLowerCase())) {
      console.log(item);
      row.innerHTML += `
    <div class="col-sm-6 col-lg-4 p-2">
      <div class=" d-flex flex-column  align-items-center rounded-3 card1 p-3">
      
      <img class=" rounded-2 mt-3" src="${
        item.src
      }"  alt="" style=" width: 150px ">
      <div class="mt-3 text-start">
        <p class="d-inline-block status p-1 rounded-2">${item.status}</p>
        <h5>${item.name}</h5>

        <div class="d-flex align-items-center justify-content-between">
          <div>
          <p class="text-secondary">Price</p>
           <p>${item.price}</p>
          </div>
          <div>
          <p class="text-secondary">Sales</p>
           <p>${item.sales}</p>
          </div>
          <div>
          <p class="text-secondary">Price</p>
           <p>${item.price * item.sales}</p>
          </div>
        </div>
      </div>
      </div>
    </div>
   `;
    }
  });
  searchInput.value = "";
};

const all1 = () => {
  row.innerHTML = "";
  array.map((item) => {
    row.innerHTML += `
      <div class="col-sm-6 col-lg-4 p-2">
        <div class=" d-flex flex-column  align-items-center rounded-3 card1 p-3">
        
        <img class=" rounded-2 mt-3" src="${
          item.src
        }"  alt="" style=" width: 150px ">
        <div class="mt-3 text-start">
          <p class="d-inline-block status p-1 rounded-2"><i class="icon fa-solid fa-circle"></i> ${
            item.status
          }</p>
          <h5>${item.name}</h5>
  
          <div class="d-flex align-items-center justify-content-between">
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price}</p>
            </div>
            <div>
            <p class="text-secondary">Sales</p>
             <p>${item.sales}</p>
            </div>
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price * item.sales}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
     `;
  });
};

const published = () => {
  row.innerHTML = "";
  array.map((item) => {
    if (item.status === "published") {
      row.innerHTML += `
      <div class="col-sm-6 col-lg-4 p-2">
        <div class=" d-flex flex-column  align-items-center rounded-3 card1 p-3">
        
        <img class=" rounded-2 mt-3" src="${
          item.src
        }"  alt="" style=" width: 150px ">
        <div class="mt-3 text-start">
          <p class="d-inline-block status p-1 rounded-2"><i class="icon fa-solid fa-circle"></i> ${
            item.status
          }</p>
          <h5>${item.name}</h5>
  
          <div class="d-flex align-items-center justify-content-between">
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price}</p>
            </div>
            <div>
            <p class="text-secondary">Sales</p>
             <p>${item.sales}</p>
            </div>
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price * item.sales}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
     `;
    }
  });
};

const draft = () => {
  row.innerHTML = "";
  array.map((item) => {
    if (item.status === "draft") {
      row.innerHTML += `
      <div class="col-sm-6 col-lg-4 p-2">
        <div class=" d-flex flex-column  align-items-center rounded-3 card1 p-3">
        
        <img class=" rounded-2 mt-3" src="${
          item.src
        }"  alt="" style=" width: 150px ">
        <div class="mt-3 text-start">
          <p class="d-inline-block status p-1 rounded-2"><i class=" icon fa-solid fa-circle"></i> ${
            item.status
          }</p>
          <h5>${item.name}</h5>
  
          <div class="d-flex align-items-center justify-content-between">
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price}</p>
            </div>
            <div>
            <p class="text-secondary">Sales</p>
             <p>${item.sales}</p>
            </div>
            <div>
            <p class="text-secondary">Price</p>
             <p>${item.price * item.sales}</p>
            </div>
          </div>
        </div>
        </div>
      </div>
     `;
    }
  });
};

info();
