# JavaScript Quiz Uygulaması

Basit, eğlenceli ve zaman sınırlı bir quiz uygulaması. Kullanıcı, JavaScript ve web geliştirme temalı soruları cevaplar. Her sorunun 10 saniyelik süresi vardır. Süre bitince veya cevap seçilince doğru/yanlış işaretlenir ve bir sonraki soruya geçilir. Tüm sorular tamamlandığında sonuç ekranı gösterilir.

## Özellikler

- 4 adet JavaScript ve web geliştirme temalı soru
- Her soru için 10 saniyelik geri sayım timer'ı
- Zamanı görsel olarak gösteren animasyonlu çizgi (timeline)
- Doğru cevap → yeşil arka plan + ✓ ikonu  
  Yanlış cevap → kırmızı arka plan + ✗ ikonu
- Responsive tasarım (mobil ve tablet uyumlu)
- Sonuç ekranında doğru cevap sayısı gösterimi
- Tekrar oynama ve çıkış seçenekleri
- Temiz, class tabanlı ve modüler Vanilla JavaScript kodu

## Ekran Görüntüleri

![alt text](image.png)



## Kullanılan Teknolojiler

- HTML5
- CSS3
- Bootstrap 5 (sadece grid ve button stilleri)
- Font Awesome (ikonlar)
- Vanilla JavaScript (ES6 class'lar, hiçbir framework yok)

## Dosya Yapısı

quiz-app/
├── index.html              # Ana HTML dosyası
|
├── css/
│   └── style.css           # Tüm özel stiller
|
├── js/
│   ├── soru.js             # Soru sınıfı ve soru verileri
|
│   ├── quiz.js             # Quiz mantığı (soru yönetimi, skor takibi)
|
│   ├── ui.js               # Arayüz (DOM) işlemleri
|
│   └── script.js           # Ana script (event listener'lar, timer'lar)
|
└── README.md               # Bu dosya
text

##Kod Yapısı ve Çalışma Mantığı

- soru.js → Soru sınıfını ve tüm soru verilerini (sorular array'i) içerir.
- quiz.js → Quiz sınıfı ile soruları yönetir, mevcut soruyu getirir ve - - doğru cevap sayısını tutar.
- ui.js → Arayüzle ilgili tüm DOM işlemleri (soru gösterme, seçenek oluşturma, skor gösterme vb.).
- script.js → Event listener'ları bağlar, timer'ları başlatır ve oyunun genel akışını kontrol eder.


### Sadık Turan Hoca'nın eğitiminden yararlanılıp, kodlarında ufak düzenlemeler yapılmıştır
