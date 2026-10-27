# Yapay Zeka (Copilot) Kullanim Notlarim

## 1. Copilot'a Verdigim Komutlar ve Nedenleri
- **Arama Kutusu ve Sayac Istegi:** Etkinlikler sayfasi icin arama kutusu ve kac etkinlik bulundugunu gösteren sayac eklemesini istedim.
- **Hata Ayiklama (Debugging) Istegi:** Arama alanina metin yazmama ragmen kartlar filtrelenmiyordu ve konsolda `null` hatasi aliyordum. Copilot'a id isimlerindeki uyumsuzlugu ve hatayi bulup sadece gerekli yeri duzeltmesini soyledim.

## 2. Yapay Zeka Onerisini Nasil Degerlendirdim?
- Copilot kodlari incelediginde HTML tarafinda `id="event-search"` kullanilmasina ragmen JavaScript dosyasinda yanlislikla `#search-event` aranmis oldugunu fark etti. Bu isim uyumsuzlugunu duzalttiginde arama ozelligim sorunsuz calismaya basladi, ben de bu oneriyi projemde kabul ettim.

## 3. Kodlarin Mantigi ve Aciklamasi (Kendi Anlatimim)
- **`addEventListener` (Olay Dinleyici):** Arama kutusunu sürekli kontrol eden yapidir. Kullanici kutunun icine her yeni harf yazdiginda veya sildiginde `input` olayini yakalar ve filtreleme fonksiyonunu calistirir.
- **`if` Kosul Mantigi:** Arama kutusuna yazilan kelime ile etkinlik kartinin basligi veya aciklama metni karsilastirilir. Eger yazilan metin kartin icinde geciyorsa kart gorunur tutulur (`display: block`), gecmiyorsa kart sayfadan gizlenir (`display: none`).