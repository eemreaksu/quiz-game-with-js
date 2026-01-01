'use strict'; // Tarayıcıda strict mode açar, hataları daha erken yakalar

class Soru {
    constructor(soruMetni, cevapSecenekleri, dogruCevap) {
        this.soruMetni = soruMetni;
        this.cevapSecenekleri = cevapSecenekleri;
        // Doğru cevabı küçük harfe çeviriyoruz ki kullanıcı büyük/küçük harf yazsa da doğru saysın
        this.dogruCevap = dogruCevap.toLowerCase(); 
    }

    // Cevabı kontrol eder, büyük/küçük harf duyarsız hale getirildi
    cevabiKontrolEt(cevap) {
        return cevap.toLowerCase() === this.dogruCevap;
    }
}

const sorular = [
    new Soru("1-Hangisi javascript paket yönetim uygulamasıdır?", { a: "Node.js", b: "Typescript", c: "Npm", d: "Nuget" }, "c"),
    new Soru("2-Hangisi frontend kapsamında değerlendirilmez?", { a: "css", b: "html", c: "javascript", d: "sql" }, "d"),
    new Soru("3-Hangisi backend kapsamında değerlendirilir?", { a: "node.js", b: "typescript", c: "angular", d: "react" }, "a"),
    new Soru("4-Hangisi javascript programlama dilini kullanmaz?", { a: "react", b: "angular", c: "vuejs", d: "asp.net" }, "d")
];