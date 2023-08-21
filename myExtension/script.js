const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const listEl = document.getElementById("list-el");
const deleteBtn = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

let myLeads = [];

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromStorage) {
    myLeads = leadsFromStorage;
    renderLeads(myLeads);
}

function renderLeads(array) {
    listEl.value = "";

    // for (let i=0; i<myLeads.length; i++) {
    //     const li = document.createElement("li");
    //     li.textContent = myLeads[i];
    //     listEl.append(li);
    // }

    let listItems = "";
    for (let i=0; i<array.length; i++) {
        // listItems += "<li> <a target='_blank' href='" + myLeads[i] + "'>" +myLeads[i] +  "</a></li>";
        listItems += `
            <li> <a target='_blank' href='${array[i]}'>${array[i]}</a>
            </li>
            `;
    }
    listEl.innerHTML = listItems;

}

inputBtn.addEventListener("click", () => {
    myLeads.push(inputEl.value);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads(myLeads);
})

deleteBtn.addEventListener("dblclick", () => {
    localStorage.clear();
    myLeads = [];
    renderLeads(myLeads);
})

tabBtn.addEventListener("click", () => {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        myLeads.push(tabs[0].url);
        renderLeads(myLeads);
    })
})


// let leads = new Set();

// inputBtn.addEventListener("click", () => {
//         leads.add(inputEl.value);
//         inputEl.value = "";
// })

// showBtn.addEventListener("click", () => {
//     listEl.innerHTML = "";

//     leads.forEach(function(value) {
//         const li = document.createElement("li");
//         const a = document.createElement("a");
//         a.textContent = value;
//         a.href = value;
//         a.target = "_blank";
//         li.append(a);
//         listEl.append(li);
//     })
// })
    
// const testText = `
//                 Hi!
//                 My name is Adam.
// `

// console.log(testText);