// Console log data diri
// Berikan single comments pada setiap baris data diri yang ada pada soal nomor 1

// Mendeklarasikan variabel nama 
let nama = "Mia"
// Mendeklarasikan variabel asalDaerah
let asalDaerah = "Garut"
// Mendeklarasikan variabel tanggalLahir
let tangalLahir = "06 April 1995"
// Mendeklarasikan variabel umur
let umur = "28"
// Mendeklarasikan variabel posisiPekerjaan
let posisiPekerjaan = "Operator Sekolah"

//Menampilkan variabel nama di console
console.log("Nama:", nama)
//Menampilkan variabel asalDaerah di console
console.log("Asal Daerah:", asalDaerah)
//Menampilkan variabel tanggalLahir di console
console.log("Tanggal Lahir:", tangalLahir)
//Menampilkan variabel umur di console
console.log("Umur", umur)
//Menampilkan variabel posisiPekerjaan di console
console.log("Posisi Pekerjaan:", posisiPekerjaan)


// Buat variabel untuk menampung data diri yang telah dibuat pada nomor 1, lalu panggil dan tampilkan dengan menggunakan console log
let dataDiri = {
    nama:"Mia",
    asalDaerah:"Garut",
    tanggalLahir:"06 April 1995",
    umur:"28",
    posisiPekerjaan:"Operator Sekolah"
}

console.log("Nama: ", dataDiri.nama);
console.log("Asal Daerah: ", dataDiri.asalDaerah);
console.log("Tanggal Lahir: ", dataDiri.tanggalLahir);
console.log("Umur: ", dataDiri.umur);
console.log("Posisi Pekerjaan: ", dataDiri.posisiPekerjaan);


// Lakukan operasi matematika berikut. Simpan hasil pada sebuah variabel untuk masing-masing operasi!
let hasilPenjumlahan = 25+10
console.log(hasilPenjumlahan)

let hasilPerkalian = 100*2
console.log(hasilPerkalian)

let hasilPembagian = 99/2
console.log(hasilPembagian)

let hasilModulus = 99%2
console.log(hasilModulus)


// Buat conditional IF .. ELSE IF yang menggambarkan divisi dan tugas divisi pada STARTUP
let tugas = 'HR';
if (tugas === 'HR') {
    console.log('Tugas sebagai HR adalah melakukan rekrutmen untuk calon pegawai baru');
} else if (tugas === 'Marketing') {
    console.log('Tugas sebagai staff Marketing adala melakukan pemasaran produk atau jasa perusahaan kepada target konsumen');
} else if (tugas === 'R&D') {
    console.log('Tugas sebagai staff R&D adalah mengembangkan teknologi baru untuk meningkatkan kualitas produk');
} else {
    console.log('Tugas tidak ditemukan')
}


// Buat conditional untuk membandingkan 2 buah nilai. Tampilkan apakah salah satu nilai misal a lebih besar dari b, a lebih kecil dari b, dan a sama dengan b.
let a = 5;
let b = 9;
if (a < b) {
    console.log("a lebih kecil dari b");
} else if (a > b) {
    console.log("a lebih lebih besar dari b");
} else {
    console.log("a sama dengan b");
}


// Gunakan switch case untuk mengetahui nama hari berdasarkan angka. Hari minggu dimulai dari angka 1 dan seterusnya.
var namaHari = 1;
switch(namaHari) {
    case 1: console.log('Senin');
        break;
    case 2: console.log('Selasa');
        break;
    case 3: console.log('Rabu');
        break;
    case 4: console.log('Kamis');
        break;
    case 5: console.log('Jumat');
        break;
    case 6: console.log('Sabtu');
        break;
    case 7: console.log('Minggu');
        break;
    default: console.log('Angka yang dimasukkan tidak valid');
}


// Gunakan switch case untuk membuat sebuah game sederhana. UP -> Karakter berjalan keatas; RIGHT -> Karakter berjalan kekanan; BOTTOM -> Karakter berjalan kebawah; LEFT -> Karakter berjalan kekiri.
var gameSederhana = 'Right';
switch(gameSederhana) {
    case 'Up': console.log('Karakter berjalan keatas');
        break;
    case 'Right': console.log('Karakter berjalan kekanan');
        break;
    case 'Bottom': console.log('Karakter berjalan kebawah');
        break;
    case 'Left': console.log('Karakter berjalan kekiri');
        break;
    default: console.log('Arah yang ditekan tidak valid');
}
