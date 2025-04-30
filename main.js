const menu = [{
        id: 1,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 2,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 3,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 4,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 5,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 6,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 7,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 8,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 9,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    },
    {
        id: 10,
        title: "Buttermilk Panckes",
        category: "breakfast",
        price: 15.99,
        img: image,
        desc: "I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed",
    }
]

//взяли родительский элемент
const sectionCenter = document.querySelector('.section-center');
const btnConteiner = document.querySelector('.btn-conteiner');

window.addEventListener("DOMContentLoaded", function() {
    displayMenuItems(menu);
    displayMenuButtons();
})

function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function(item) {
        return `<article class="menu-item">
                <img src= ${item.img} alt=${item.title} class="photo">

                <div class="item-info">
                    <header>
                        <h4>${item.title}</h4>
                        <h4 class="price">${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
            </article>`
    });

    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(function(values, item) {
        if (!values.includes(item.category)) {
            values.push(item.category);
        }
        return values;
    }, ["ALL"]);

    const categoriesBtns = categories
        .map(function(category) {
            return `<button type="button" class="filter-btn" id=${category}></button>`
        }).join("");

    btnConteiner.innerHTML = categoriesBtns;

    const filterBtns = btnConteiner.querySelectorAll.(".filter-btn");
    console.log(filterBtns);

    filterBtns.forEach(function(btn) {
        btn.addEventListener("click"function(e) {
            console.log(e.currenTarget.dataset) //????
            const category = e.currenTarget.dataset.id;
            const menuCategory = menu.filter()

        })

    })
}