const fajr_plus = document.getElementById("btn1");
const fajr_minus = document.getElementById("btn2");

const zuhr_plus = document.getElementById("btn3");
const zuhr_minus = document.getElementById("btn4");

const asr_plus = document.getElementById("btn5");
const asr_minus = document.getElementById("btn6");

const magrib_plus = document.getElementById("btn7");
const magrib_minus = document.getElementById("btn8");

const isha_plus = document.getElementById("btn9");
const isha_minus = document.getElementById("btn10");

const delete_button = document.getElementById("btn11");


const p_error = document.getElementById("p0");
const p_count_fajr = document.getElementById("p1");
const p_count_zuhr = document.getElementById("p2");
const p_count_asr = document.getElementById("p3");
const p_count_magrib = document.getElementById("p4");
const p_count_isha = document.getElementById("p5");


let fajr_count = Number(localStorage.getItem("fajr_count")) || 0;
let zuhr_count = Number(localStorage.getItem("zuhr_count")) || 0;
let asr_count = Number(localStorage.getItem("asr_count")) || 0;
let magrib_count = Number(localStorage.getItem("magrib_count")) || 0;
let isha_count = Number(localStorage.getItem("isha_count")) || 0;

p_count_fajr.textContent = `${fajr_count} Фаджр`;
p_count_zuhr.textContent = `${zuhr_count} Зухр`;
p_count_asr.textContent = `${asr_count} Аср`;
p_count_magrib.textContent = `${magrib_count} Магриб`;
p_count_isha.textContent = `${isha_count} Иша`;


// ФАДЖР
function fajr_minus_count() {
    if (fajr_count <= 0) {
        p_error.textContent = "Нельзя задать отрицательное число";
        return;
    }
    
    fajr_count--; 
    localStorage.setItem("fajr_count", fajr_count);
    p_error.textContent = "";
    p_count_fajr.textContent = `${fajr_count} Фаджр`;
}

function fajr_plus_count() {
    fajr_count++;
    localStorage.setItem("fajr_count", fajr_count);
    p_error.textContent = "";
    p_count_fajr.textContent = `${fajr_count} Фаджр`;
}


// ЗУХР
function zuhr_minus_count() {
    if (zuhr_count <= 0) {
        p_error.textContent = "Нельзя задать отрицательное число";
        return;
    }
    
    zuhr_count--;
    localStorage.setItem("zuhr_count", zuhr_count);
    p_error.textContent = "";
    p_count_zuhr.textContent = `${zuhr_count} Зухр`;
}

function zuhr_plus_count() {
    zuhr_count++;
    localStorage.setItem("zuhr_count", zuhr_count);
    p_error.textContent = "";
    p_count_zuhr.textContent = `${zuhr_count} Зухр`; 
}


// АСР
function asr_minus_count() {
    if (asr_count <= 0) {
        p_error.textContent = "Нельзя задать отрицательное число";
        return;
    }
    asr_count--;
    localStorage.setItem("asr_count", asr_count);
    p_error.textContent = "";
    p_count_asr.textContent = `${asr_count} Аср`;
}

function asr_plus_count() {
    asr_count++;
    localStorage.setItem("asr_count", asr_count);
    p_error.textContent = "";
    p_count_asr.textContent = `${asr_count} Аср`;
}


// МАГРИБ
function magrib_minus_count() {
    if (magrib_count <= 0) {
        p_error.textContent = "Нельзя задать отрицательное число";
        return;
    }
    magrib_count--;
    localStorage.setItem("magrib_count", magrib_count);
    p_error.textContent = "";
    p_count_magrib.textContent = `${magrib_count} Магриб`;
}

function magrib_plus_count() {
    magrib_count++;
    localStorage.setItem("magrib_count", magrib_count);
    p_error.textContent = "";
    p_count_magrib.textContent = `${magrib_count} Магриб`;
}


// ИША
function isha_minus_count() {
    if (isha_count <= 0) {
        p_error.textContent = "Нельзя задать отрицательное число";
        return;
    }
    isha_count--;
    localStorage.setItem("isha_count", isha_count);
    p_error.textContent = "";
    p_count_isha.textContent = `${isha_count} Иша`;
}

function isha_plus_count() {
    isha_count++;
    localStorage.setItem("isha_count", isha_count);
    p_error.textContent = "";
    p_count_isha.textContent = `${isha_count} Иша`;
}

function delete_count() {
    fajr_count = 0;
    zuhr_count = 0;
    asr_count = 0;
    magrib_count = 0;
    isha_count = 0;
    
    localStorage.setItem("fajr_count", isha_count);
    localStorage.setItem("zuhr_count", isha_count);
    localStorage.setItem("asr_count", isha_count);
    localStorage.setItem("magrib_count", isha_count);
    localStorage.setItem("isha_count", isha_count);
    
    p_count_fajr.textContent = `${fajr_count} Фаджр`;
    p_count_zuhr.textContent = `${zuhr_count} Зухр`;
    p_count_asr.textContent = `${asr_count} Аср`;
    p_count_magrib.textContent = `${magrib_count} Магриб`;
    p_count_isha.textContent = `${isha_count} Иша`;
}

fajr_minus.addEventListener("click", () => fajr_minus_count());
fajr_plus.addEventListener("click", () => fajr_plus_count());

zuhr_minus.addEventListener("click", () => zuhr_minus_count());
zuhr_plus.addEventListener("click", () => zuhr_plus_count());

asr_minus.addEventListener("click", () => asr_minus_count());
asr_plus.addEventListener("click", () => asr_plus_count());

magrib_minus.addEventListener("click", () => magrib_minus_count());
magrib_plus.addEventListener("click", () => magrib_plus_count());

isha_minus.addEventListener("click", () => isha_minus_count());
isha_plus.addEventListener("click", () => isha_plus_count());

delete_button.addEventListener("click", () => delete_count());
