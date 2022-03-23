const date_time = document.getElementById('date');

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const d = new Date();
let month = months[d.getMonth()];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[d.getDay()];
const markup = `<h1>${d.getDate()+' '+month+' , '+d.getFullYear()}</h1>
                <h1>${day}</h1>`;
date_time.innerHTML = markup;

let current = document.getElementById(month);
let markup2 = `${current.innerHTML}`;
let current_month = document.getElementById('current');
current_month.innerHTML = markup2;
