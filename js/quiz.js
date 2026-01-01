'use strict';

class Quiz {
    constructor(sorular) {
        this.sorular = sorular;
        this.soruIndex = 0;           // Şu anki soru numarası
        this.dogruCevapSayisi = 0;    // Toplam doğru cevap sayısı
    }

    // Mevcut soruyu döndürür
    soruGetir() {
        // Eğer index sınırın dışındaysa hata fırlatır (debug için faydalı)
        if (this.soruIndex >= this.sorular.length) {
            throw new Error('Soru indeksi aşıldı');
        }
        return this.sorular[this.soruIndex];
    }

    // Quiz'in bitip bitmediğini kontrol eder (sonraki soru butonu vs. için kullanılabilir)
    isFinished() {
        return this.soruIndex >= this.sorular.length;
    }

    // Sonraki soruya geçmek için (script.js'de zaten var ama burada da tutabiliriz)
    nextQuestion() {
        this.soruIndex += 1;
    }
}