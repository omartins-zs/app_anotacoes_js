const content = document.querySelector('.content')
const btnNew = document.querySelector('.addNote-content')

let items_db = localStorage.getItem("items_db")
    ? JSON.parse(localStorage.getItem("items_db"))
    : [];

const colors = [
    "#845EC2",
    "#008F7A",
    "#001E9B",
    "#FFC75F",
    "#FF8066",
    "#FFC09F",
    "#BA3CAF",
    "#BAFCAF",
    "#345CAF",
];

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

function loadItems() {
    content.innerHTML = "";
    verifyNulls();

    items_db.forEach((item, i) => {
        addHTML(item, i);
    });

    addEvents();
}

btnNew.onclick = () => {
    addHTML();

    addEvents();
};

function addHTML(item) {
    const div = document.createElement("div");

    div.innerHTML = `<div class="item" style="background-color: ${item?.color || randomColor()
        }">
      <span class="remove">X</span>
      <textarea>${item?.text || ""}</textarea>
    </div>`;

    content.appendChild(div);
}