# AI Kullanımı
# Yapay Zekâ (Copilot) Kullanım Notlarım

## 1. Copilot'a Verdiğim Komutlar ve Nedenleri
- **Arama Kutusu ve Sayaç İsteği:** Etkinlikler sayfasına kullanıcı aradıkça canlı şekilde eşleşen kartları getiren bir arama kutusu ve kaç etkinlik bulunduğunu gösteren sayaç eklemesini istedim.
- **Hata Ayıklama (Debugging) İsteği:** Arama alanına metin yazmama rağmen kartlar filtrelenmiyordu ve konsolda `null` hatası alıyordum. Copilot'a id isimlerindeki uyumsuzluğu ve hatayı bulup sadece gerekli yeri düzeltmesini söyledim.

## 2. Yapay Zeka Önerisini Nasıl Değerlendirdim?
- Copilot kodları incelediğinde HTML tarafında `id="event-search"` kullanılmasına rağmen JavaScript dosyasında yanlışlıkla `#search-event` aranmış olduğunu fark etti. Bu isim uyuşmazlığını düzelttiğinde arama özelliğim sorunsuz çalışmaya başladı, ben de bu öneriyi projemde kabul ettim.

## 3. Kodların Mantığı ve Açıklaması (Kendi Anlatımım)
- **`addEventListener` (Olay Dinleyici):** Arama kutusunu sürekli kontrol eden yapıdır. Kullanıcı kutunun içine her yeni harf yazdığında veya sildiğinde `input` olayını yakalar ve filtreleme fonksiyonunu çalıştırır.
- **`if` Koşul Mantığı:** Arama kutusuna yazılan kelime ile etkinlik kartının başlığı veya açıklama metni karşılaştırılır. Eğer yazılan metin kartın içinde geçiyorsa kart görünür tutulur (`display: block`), geçmiyorsa kart sayfadan gizlenir (`display: none`).

