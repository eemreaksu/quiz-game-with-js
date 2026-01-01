'use strict';

const quiz = new Quiz(sorular);
const ui = new UI();

// Global değişkenleri kaldırdık, timer'ları UI içinde tutacağız
let counter;       // Geri sayım interval'ı
let counterLine;   // Çizgi animasyon interval'ı

// Quiz başlatma butonu
ui.btn_start.addEventListener("click", () => {
    ui.quiz_box.classList.add("active");
    ui.startTimer(10);        // Timer'ı UI class'ına taşıdık
    ui.startTimerLine();
    ui.soruGoster(quiz.soruGetir());
    ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.btn_next.classList.remove("show");
});

// Sonraki soru butonu
ui.btn_next.addEventListener("click", () => {
    if (quiz.sorular.length !== quiz.soruIndex + 1) {
        quiz.soruIndex += 1;
        ui.startTimer(10);
        ui.startTimerLine();
        ui.soruGoster(quiz.soruGetir());
        ui.soruSayisiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
        ui.btn_next.classList.remove("show");
    } else {
        ui.quiz_box.classList.remove("active");
        ui.score_box.classList.add("active");
        ui.skoruGoster(quiz.sorular.length, quiz.dogruCevapSayisi);
    }
});

// Tekrar başlat ve çık butonları
ui.btn_replay.addEventListener("click", () => {
    quiz.soruIndex = 0;
    quiz.dogruCevapSayisi = 0;
    ui.btn_start.click();
    ui.score_box.classList.remove("active");
});

ui.btn_quit.addEventListener("click", () => {
    window.location.reload();
});

// Seçenek tıklandığında çalışır (global fonksiyon olarak kaldı ama istersen UI'ye taşıyabilirsin)
function optionSelected(option) {
    clearInterval(counter);
    clearInterval(counterLine);

    let cevap = option.querySelector("span b").textContent.toLowerCase(); // Küçük harfe çevirdik
    let soru = quiz.soruGetir();

    if (soru.cevabiKontrolEt(cevap)) {
        quiz.dogruCevapSayisi += 1;
        option.classList.add("correct");
        option.insertAdjacentHTML("beforeend", ui.correctIcon);
    } else {
        option.classList.add("incorrect");
        option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
    }

    // Tüm seçenekleri tıklanamaz yap
    ui.option_list.querySelectorAll(".option").forEach(opt => opt.classList.add("disabled"));

    ui.btn_next.classList.add("show");
}

// UI class'ına eklediğimiz yeni metodlar (script.js'nin altına veya ui.js'ye koyabilirsin)
UI.prototype.startTimer = function(time) {
    counter = setInterval(() => {
        ui.time_second.textContent = time;
        time--;

        if (time < 0) {
            clearInterval(counter);
            ui.time_text.textContent = "Süre Bitti";

            let dogruCevap = quiz.soruGetir().dogruCevap;

            ui.option_list.querySelectorAll(".option").forEach(option => {
                if (option.querySelector("span b").textContent.toLowerCase() === dogruCevap) {
                    option.classList.add("correct");
                    option.insertAdjacentHTML("beforeend", ui.correctIcon);
                }
                option.classList.add("disabled");
            });

            ui.btn_next.classList.add("show");
        }
    }, 1000);
};

UI.prototype.startTimerLine = function() {
    let lineWidth = 0;
    counterLine = setInterval(() => {
        lineWidth += 1; // Her 20ms'de 1px artıyor
        ui.time_line.style.width = lineWidth + "px";

        if (lineWidth > 549) { // Timeline'ın maksimum genişliği
            clearInterval(counterLine);
        }
    }, 20);
};