/* 
Ödev -3
Daire Modüler Dosyası
-Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
-module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
-require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız. */

const { circleArea, circleCircumference } = require('./circle');

circleArea(5);
circleCircumference(5);