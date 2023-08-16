// Bagian Rumus Menghitung Keliling Segitiga
function keliling(){
    var sisiA = document.getElementById('sisiA').value;
    var sisiB = document.getElementById('sisiB').value;
    var sisiC = document.getElementById('sisiC').value;

    var keliling = parseInt (sisiA) + parseInt (sisiB) + parseInt (sisiC);

    document.getElementById('keliling').innerHTML = "Keliling Segitiga : " + keliling
}

// Bagian Rumus Menghitung Luas Segitiga
function luas(){
    var alas = document.getElementById('alas').value;
    var tinggi = document.getElementById('tinggi').value;
    
    var luas = (alas*tinggi)*1/2

    document.getElementById('luas').innerHTML = "Luas Segitiga : " + luas
}

// Bagian Button Reset Input Keliling
function resetkeliling() {
    document.getElementById("sisiA").value = "";
    document.getElementById("sisiB").value = "";
    document.getElementById("sisiC").value = "";
    document.getElementById("keliling").innerHTML = ""; 
}

// Bagian Button Reset Input Luas
function resetluas() {
    document.getElementById("alas").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("luas").innerHTML = "";
}
    