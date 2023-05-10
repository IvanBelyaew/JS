let array = []
for (let i = 0; i < 30; i++){
    let RandNumb = Math.floor(Math.random() * 100)
    array.push(RandNumb)
}
const array_size = 6;
let sliced_array = [];
for (let i = 0; i <array.length; i +=array_size) {
    sliced_array.push(array.slice(i, i + array_size));
}
let table = document.querySelector('#table');
for (let subArr of sliced_array) {
    let tr = document.createElement('tr');
    for (let elem of subArr){
        let td = document.createElement('td');
        td.textContent = elem;
        tr.appendChild(td);
        if (elem >= 50){
            td.style.backgroundColor = 'orange'
        }
    }
    table.appendChild(tr);
}
table.insertRow()
function foo () {
    let random_value = Math.floor(Math.random() * 100)
    array.push(random_value)
    let table = document.querySelector('#table');
    if ((array.length - 1) % 6 === 0) {
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.textContent = random_value;
        tr.appendChild(td);
        if (random_value >= 50){
            td.style.backgroundColor = 'orange'
        }
        table.appendChild(tr);
    }
    else {
        let tr = table.rows.item(table.rows.length - 1)
        let td = document.createElement('td');
        td.textContent = random_value;
        tr.appendChild(td);
        if (random_value >= 50){
            td.style.backgroundColor = 'orange'
        }
    }  
}