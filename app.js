const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];


    displayData(menu);
    displayButton(menu);
    

    function displayButton(menu) {


      let abc = menu.reduce((pre, current, index, array) => {
        if(pre.includes(current.category) == false){
          pre.push(current.category);
        }
        return pre;
      }, []);

      abc.unshift('all');

      let a = abc.map((category) => {
        return `<div class="btn-container" id="btn">
            <button onclick="doFilter('${category}')" type="button" class="filter-btn" data-id="${category}">${category}</button>
            </div>`;
      });

        document.getElementById("btn").innerHTML = a.join(" ");
    }   
    

    function doFilter(a){
      let filteredData = a === "all" ? menu : menu.filter((item) => {
        return item.category === a;
      })
     
      displayFilter(filteredData);
    }

const addToCart  = [];

function displayData(data) {
  let mapData = data.map((v) => {
    let p = `
      <div class="col-4">
        <div class="card" style="width:400px">
          <img class="card-img-top" src="${v.img}" alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${v.title}</h4>
            <p class="card-text">${v.desc}</p>
            <p class="card-price">$${v.price.toFixed(2)}</p>
            <button class="btn btn-primary" onclick="addItemToCart(${v.id})">Add to Cart</button>
          </div>
        </div>
      </div>`;
    return p;
  });
  document.getElementById("menu").innerHTML = mapData.join(" ");
}

function displayFilter(menu) {
  let mapData = menu.map((v) => {
    let p = `
      <div class="col-4">
        <div class="card" style="width:400px">
          <img class="card-img-top" src="${v.img}" alt="Card image">
          <div class="card-body">
            <h4 class="card-title">${v.title}</h4>
            <p class="card-text">${v.desc}</p>
            <p class="card-price">$${v.price.toFixed(2)}</p>
            <button class="btn btn-primary" onclick="addItemToCart(${v.id})">Add to Cart</button>
          </div>
        </div>
      </div>`;
    return p;
  });
  document.getElementById("menu").innerHTML = mapData.join(" ");
}


function addItemToCart(id) {
  const item = menu.find((menuItem) => menuItem.id === id);
  if (item) {

    var d= addToCart.find((menuItem) => menuItem.id === id);
    if(!d)
    {
      addToCart.push({...item,qty:1});
    }
    else
    {
      d.qty = d.qty+1;
    }
    
    alert(`${item.title} has been added to your cart!`);
    updateCartDisplay();
  }
}

function updateCartDisplay() {
  const cartItems = addToCart.map((item) => `
    <li>
      ${item.title} - $${item.price.toFixed(2)} x ${item.qty} = $${(item.price * item.qty).toFixed(2)}
    </li>
  `);
  document.getElementById("cart").innerHTML = `
    <ul>${cartItems.join("")}</ul>
    <p>Total: $${addToCart.reduce((total, item) => total + (item.price * item.qty), 0).toFixed(2)}</p>
  `;
}

