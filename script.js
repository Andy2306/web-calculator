// fungsi untuk menampilakan nilai kelayar
function appendValue(nilai){
    document.getElementById('display').value += nilai;
    console.log("nilai :" + nilai);
}
/* https://github.com/Andy2306/web-calculator/blob/main/LICENSE */
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

// fungsi hitung akar pangkat
function langsungHitungPangkat() {
    const nilai = document.getElementById('display');

    try {
        const bilangan = parseFloat(nilai.value);
        if (bilangan < 0) throw new Error ("tidak dapat menghitung " + bilangan);
        nilai.value = Math.sqrt(bilangan);
        console.log("akar kuadrat :" + nilai.value)

    } catch {
        nilai.value = "error"
        console.log(nilai.value)
    }
}

// fungsi hitung persen (menjadi bilangan sederhana)
function langsungHitungPersen() {
    const nilai = document.getElementById('display');

    try {
        const bilangan = parseFloat(nilai.value);
        nilai.value = bilangan / 100;
        console.log("persen :" + nilai.value);
    } catch {
        nilai.value = "error"
        console.log(nilai.value)
    }
}