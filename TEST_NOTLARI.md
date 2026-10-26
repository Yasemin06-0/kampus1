# Web Sitesi Manuel Test Sonuçları

Sitemizin arama, filtreleme, responsive görünüm ve klavye erişilebilirliği özelliklerini hocamızın belirlediği 6 test senaryosuna göre kontrol ettim.

## Test Detayları Tablosu

| Test Adı / Senaryo | Ne Yaptım? (İşlem) | Ne Olmasını Bekliyordum? | Ne Oldu? (Gerçekleşen) | Durum |
| :--- | :--- | :--- | :--- | :--- |
| **1. Başlığa Göre Arama** | Kutuca "HTML" yazdım. | Sadece HTML kartı kalmalı, sayaç 1 göstermeli. | 1 kart kaldı ve sayaç doğru güncellendi. | **GEÇTİ** |
| **2. Harf Boyutu Testi** | "HTML" ve "html" olarak iki kere arattım. | Arama büyük/küçük harften etkilenmemeli. | Her iki durumda da aynı kart doğru şekilde listelendi. | **GEÇTİ** |
| **3. Bulunmayan Kelime** | Kutuca "xyz" yazdım. | Ekranda kart kalmamalı, uyarı mesajı çıkmalı. | Kartlar gizlendi, "Bulunamadı" mesajı ve 0 sayacı göründü. | **GEÇTİ** |
| **4. Boşluk ve Temizle** | "Temizle" butonuna bastım ve sadece `space` yazdım. | 4 etkinlik kartının tümü geri gelmeli. | Her iki işlemde de 4 kart ekranda göründü. | **GEÇTİ** |
| **5. Menü Geçişleri** | Üst menüdeki sayfa bağlantılarına tıkladım. | Bağlantılar ilgili sayfalara yönlendirmeli. | Tüm sayfalar sorunsuz açıldı. | **GEÇTİ** |
| **6. Mobil & Klavye (Tab)** | Ekranı 390 px daralttım ve `Tab` tuşuna bastım. | Sağa taşma olmamalı, `Tab` ile kutuya odaklanılmalı. | Yatay taşma yapmadı, klavye ile elemanlara ulaşıldı. | **GEÇTİ** |