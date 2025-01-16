// fungsi untuk menampilakan nilai kelayar
function appendValue(value){
    document.getElementById('display').value += value;
    console.log("nilai :" + value);
}

// funsi untuk mengkosongkan tampilan layar
function clearDisplay() {
    document.getElementById('display').value = "";
    console.log("clear display")
}

// fungsi untuk melakukan kalkulasi
function calculate() {
    const display = document.getElementById('display');

    try {
        display.value = eval(display.value);  // mulai menghitung
        console.log("hasil :" + display.value);
    } catch {
        display.value = 'error';
        console.log("error bjir")
    }
}