'use strict';

class UI {
    constructor() {
        // Tüm DOM elementlerini bir kere burada alıyoruz, tekrar tekrar query yapmasın
        this.btn_start     = document.querySelector(".btn_start");
        this.btn_next      = document.querySelector(".next_btn");
        this.btn_replay    = document.querySelector(".btn_replay");
        this.btn_quit      = document.querySelector(".btn_quit");
        this.quiz_box      = document.querySelector(".quiz_box");
        this.score_box     = document.querySelector(".score_box");
        this.option_list   = document.querySelector(".option_list");
        this.question_text = document.querySelector(".question_text");
        this.time_text     = document.querySelector(".time_text");
        this.time_second   = document.querySelector(".time_second");
        this.time_line     = document.querySelector(".time_line");
        this.question_index = document.querySelector(".quiz_box .question_index");

        this.correctIcon   = '<div class="icon"><i class="fas fa-check"></i></div>';
        this.incorrectIcon = '<div class="icon"><i class="fas fa-times"></i></div>';
    }

    // Soruyu ve seçenekleri ekrana basar
    soruGoster(soru) {
        this.question_text.innerHTML = `<span>${soru.soruMetni}</span>`;
        
        let options = '';
        for (let cevap in soru.cevapSecenekleri) {
            options += `
                <div class="option">
                    <span><b>${cevap}</b>: ${soru.cevapSecenekleri[cevap]}</span>
                </div>
            `;
        }
        this.option_list.innerHTML = options;

        // Her seçeneğe tıklama eventi ekliyoruz (event delegation yerine direkt ekledik)
        const optionsElements = this.option_list.querySelectorAll(".option");
        optionsElements.forEach(opt => {
            opt.setAttribute("onclick", "optionSelected(this)");
        });
    }

    // Footer'daki soru sırasını gösterir (örnek: 2 / 4)
    soruSayisiniGoster(soruSirasi, toplamSoru) {
        let tag = `<span class="badge bg-warning">${soruSirasi} / ${toplamSoru}</span>`;
        this.question_index.innerHTML = tag;
    }

    // Son ekranda skoru gösterir
    skoruGoster(toplamSoru, dogruCevap) {
        let tag = `Toplam ${toplamSoru} sorudan ${dogruCevap} doğru cevap verdiniz.`;
        document.querySelector(".score_box .score_text").innerHTML = tag;
    }
}