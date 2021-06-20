/* 
Ödev 1

Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız.
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır. */

const args = process.argv.slice(2);

const alanHesapla = (r) => {
    console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI.toFixed(2) * r * r}`);
};

alanHesapla(args[0] * 1);