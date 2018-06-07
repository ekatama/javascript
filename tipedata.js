/* berikut adalah contoh
perbedaan antara == dengan ===
== hanya mengecek nilai sama tanpa memperhatikan tipe data
=== lebih dianjurkan karena selain mengecek nilai tetapi juga mengecek tipe data sama atau tidak dengan kondisi yang diinginkan
*/
function tipedata() {

    var data = '3'

    if (data === 3) {
        return 'benar'
    }
    else {
        return 'gagal'
    }
}
function tipedata2(){
    var data = '3'
    if (data == 3) {
        return 'benar'
    }
    else {
        return 'gagal'
    }
}

console.log(tipedata())
console.log(tipedata2())
