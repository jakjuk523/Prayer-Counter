// ПЕРЕМЕННЫЕ КНОПОК ДЛЯ НАМАЗОВ
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

// КНОПКА ДЛЯ СБРОСА СЧЕТА
const delete_button = document.getElementById("btn11");

// КНОПКА ДЛЯ ОЦЕНКИ САЙТА
const open_button_grade = document.getElementById("btn13");
const delete_messange = document.getElementById("btn14");

const reset_yes = document.getElementById("btn15");
const reset_no = document.getElementById("btn16");

// КОНТЕЙНЕР ДЛЯ ОЦЕНКИ САЙТА
const p_grade = document.getElementById("p6");
let input_grade = document.getElementById("npt1");
const button_grade = document.getElementById("btn12");

// ИМПОРТ ТЕКСТА
const p_error = document.getElementById("p0");
const p_count_fajr = document.getElementById("p1");
const p_count_zuhr = document.getElementById("p2");
const p_count_asr = document.getElementById("p3");
const p_count_magrib = document.getElementById("p4");
const p_count_isha = document.getElementById("p5");
const p_grade_2 = document.getElementById("p7");
const p_max_count = document.getElementById("p9");

// ИМПОРТ КОНТЕЙНЕРОВ
const div_soli = document.getElementById("dv1");
const div_grade = document.getElementById("dv2");
const div_style = document.getElementById("dv3");
const div_reset = document.getElementById("dv4");

// СЧЕТЧИКИ НАМАЗОВ
let fajr_count = Number(localStorage.getItem("fajr_count")) || 0;
let zuhr_count = Number(localStorage.getItem("zuhr_count")) || 0;
let asr_count = Number(localStorage.getItem("asr_count")) || 0;
let magrib_count = Number(localStorage.getItem("magrib_count")) || 0;
let isha_count = Number(localStorage.getItem("isha_count")) || 0;

// ФУНКЦИЯ ДЛЯ ОБНОВЛЕНИЯ ОБЩЕГО СЧЕТА
function update_max_soli() {
    let max_soli = fajr_count + zuhr_count + asr_count + magrib_count + isha_count;
    p_max_count.textContent = `Сделано намазов всего: ${max_soli}`;
}

// ПОКАЗЫВАЕМ ЗНАЧЕНИЕ ПЕРЕМЕННЫХ НА ЭКРАН ПРИ ЗАГРУЗКЕ
p_count_fajr.textContent = `${fajr_count} Фаджр`;
p_count_zuhr.textContent = `${zuhr_count} Зухр`;
p_count_asr.textContent = `${asr_count} Аср`;
p_count_magrib.textContent = `${magrib_count} Магриб`;
p_count_isha.textContent = `${isha_count} Иша`;
update_max_soli(); // Отображаем общую сумму при старте


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
    update_max_soli();
}

function fajr_plus_count() {
    fajr_count++;
    localStorage.setItem("fajr_count", fajr_count);
    p_error.textContent = "";
    p_count_fajr.textContent = `${fajr_count} Фаджр`;
    update_max_soli();
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
    update_max_soli();
}

function zuhr_plus_count() {
    zuhr_count++;
    localStorage.setItem("zuhr_count", zuhr_count);
    p_error.textContent = "";
    p_count_zuhr.textContent = `${zuhr_count} Зухр`; 
    update_max_soli();
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
    update_max_soli();
}

function asr_plus_count() {
    asr_count++;
    localStorage.setItem("asr_count", asr_count);
    p_error.textContent = "";
    p_count_asr.textContent = `${asr_count} Аср`;
    update_max_soli();
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
    update_max_soli();
}

function magrib_plus_count() {
    magrib_count++;
    localStorage.setItem("magrib_count", magrib_count);
    p_error.textContent = "";
    p_count_magrib.textContent = `${magrib_count} Магриб`;
    update_max_soli();
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
    update_max_soli();
}

function isha_plus_count() {
    isha_count++;
    localStorage.setItem("isha_count", isha_count);
    p_error.textContent = "";
    p_count_isha.textContent = `${isha_count} Иша`;
    update_max_soli();
}

// КНОПКА СБРОСА СЧЕТА
function delete_yes() {
    fajr_count = 0;
    zuhr_count = 0;
    asr_count = 0;
    magrib_count = 0;
    isha_count = 0;
    
    localStorage.setItem("fajr_count", fajr_count);
    localStorage.setItem("zuhr_count", zuhr_count);
    localStorage.setItem("asr_count", asr_count);
    localStorage.setItem("magrib_count", magrib_count);
    localStorage.setItem("isha_count", isha_count);
    
    p_count_fajr.textContent = `${fajr_count} Фаджр`;
    p_count_zuhr.textContent = `${zuhr_count} Зухр`;
    p_count_asr.textContent = `${asr_count} Аср`;
    p_count_magrib.textContent = `${magrib_count} Магриб`;
    p_count_isha.textContent = `${isha_count} Иша`;
    
    update_max_soli();
    
    div_soli.style.display = "flex";
    div_reset.style.display = "none";
}

function delete_no() {
    div_soli.style.display = "flex";
    div_reset.style.display = "none";
}

function delete_count() {
    div_soli.style.display = "none";
    div_reset.style.display = "flex";
}

// ОЦЕНКА САЙТА ПОЛЬЗОВАТЕЛЕМ 
function user_grade() {
    if (input_grade.value.trim() === "") {
        p_grade.textContent = "Ввод пользователя не должен быть пустым !";
        p_grade.style.color = "red";
        return;
    }
    
    let user_grade_value = Number(input_grade.value.trim());
    
    if (isNaN(user_grade_value)) {
        p_grade.textContent = "Введите число !";
        p_grade.style.color = "red";
        return;
    }
    
    if (user_grade_value < 1 || user_grade_value > 10) {
        p_grade.textContent = "Введите число от 1 до 10";
        p_grade.style.color = "red";
        return;
    }
    
    localStorage.setItem("user_grade_site", user_grade_value);
    
    div_style.style.display = "flex";
    div_grade.style.display = "none";
    div_soli.style.display = "flex";
}

// ФУНКЦИЯ ДЛЯ ОТКРЫТИЯ ОКНА С ОЦЕНКОЙ САЙТА
function open_window() {
    div_grade.style.display = "flex";
    div_soli.style.display = "none";
}

function delete_p() {
    div_style.style.display = "none";
}

// ПРИВЯЗЫВАНИЕ ФУНКЦИЙ К КНОПКАМ
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
button_grade.addEventListener("click", () => user_grade());
open_button_grade.addEventListener("click", () => open_window());

// Исправленный и дополненный хвост кода:
reset_yes.addEventListener("click", () => delete_yes());
reset_no.addEventListener("click", () => delete_no());
delete_messange.addEventListener("click", () => delete_p());
