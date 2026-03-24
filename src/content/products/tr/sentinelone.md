---
title: "SentinelOne Singularity"
description: "Yapay zeka tabanlı otonom siber güvenlik platformu."
lang: "tr"
order: 2
logo: "/products/sentinelone.webp"
---

SentinelOne, yapay zeka ve makine öğrenimi kullanarak tehditleri otonom olarak durdurur.

### SentinelOne mimarisi üç temel prensip üzerine inşa edilmiştir:
*   **Tek Ajan (Single Agent):** Dağıtım ve yönetim karmaşıklığını azaltan, tüm uç noktalar için birleşik, hafif bir ajan mimarisi.
*   **Otonom Karar Mekanizması:** Tehditleri bulut bağlantısından bağımsız olarak, doğrudan uç noktada sıfır gecikmeyle tespit edip engelleyen yerel yapay zeka.
*   **Birleşik Veri Düzlemi (Singularity Data Lake):** Uç nokta, bulut ve kimlik verilerini tek bir veri gölünde toplayarak çapraz etki alanı analizi ve bütünsel tehdit avcılığı sağlar.

---

## 1. Platform Mimarisi ve Güvenlik Bileşenleri
SentinelOne, çok katmanlı bir güvenlik mimarisi sunar. "Tek ajan — çoklu motor" mimarisi, işletim sistemi çekirdeği seviyesinde çalışarak dosya sistemi, işlem ve bellek aktivitelerini gerçek zamanlı izler.

### Kaynak Verimliliği
Hafif yapılı SentinelOne ajanı, uç nokta performansını olumsuz etkilemeyecek şekilde optimize edilmiştir:
- **CPU Kullanımı:** %0–4
- **Bellek Kullanımı:** ~20MB
- **Disk Alanı:** ~200MB

### Otonom Uç Nokta Zekası
En kritik mimari özellik, tespit ve yanıt mantığını yerel olarak çalıştırabilmesidir. Bu "on-agent" zeka, internet bağlantısı olmasa bile tehditleri tespit edip engelleyebilir; bu da özellikle izole ağlar veya kritik altyapılar için kritik önemdedir.

---

## 2. Çok Katmanlı Tehdit Tespit Motorları
SentinelOne, sıfır gün (0-day) tehditleri ve imzasız saldırılara karşı koruma sağlamak için dosya ve süreçleri iki ana aşamada analiz eder:
1.  **Statik Yapay Zeka Motoru (Pre-Execution):** Dosyalar çalıştırılmadan önce devreye girer. İmza veya hash gerektirmeden dosya yapısını ve kod özelliklerini değerlendirerek zararlı yazılımları proaktif olarak engeller.
2.  **Davranışsal Yapay Zeka Motoru (On-Execution):** Bir süreç çalıştırıldıktan sonra API çağrıları, ağ bağlantıları ve sistem değişikliklerini gerçek zamanlı izler. Özellikle dosyasız (fileless) saldırıları ve "Living off the Land" (LotL) tekniklerini tespit etmek için tasarlanmıştır.

---

## 3. Bağlamsal Analiz: Storyline™ Teknolojisi
Patentli Storyline™ teknolojisi, binlerce ham EDR olayını otomatik olarak ilişkilendirerek tek bir eyleme geçirilebilir saldırı hikayesi haline getirir. Her olay bir "Storyline ID" ile etiketlenir, bu da analistlerin saldırı zincirini en başından sonuna kadar tek bir görsel arayüzde görmesini sağlayarak kök neden analizini (RCA) saniyelere indirir.

---

## 4. Olay Yanıtı ve Güvenlik Otomasyonu
SentinelOne, tehditleri hızlı bir şekilde etkisiz hale getirmek ve sistemleri temiz bir duruma döndürmek için gelişmiş araçlar sunar.

-   **Isolate Device (Cihaz İzolasyonu):** Kritik tehdit tespiti anında cihazın ağ bağlantısını keser, ancak yanal hareketi engellemek için yönetim konsolu bağlantısını açık tutar.
-   **1-Click Remediation & Rollback:** Fidye yazılımı (ransomware) hasarlarını geri almak için Windows VSS (Volume Shadow Copy) altyapısını kullanır. Zararlı bir Storyline ile ilişkili tüm sistem değişikliklerini ve dosyaları saldırıdan hemen önceki temiz durumuna geri döndürür.
-   **STAR Kuralları (Storyline Active Response):** Ekiplerin özel tespit ve yanıt kuralları oluşturmasına olanak tanır.
-   **Deep Visibility ve S1QL:** Telemetri verileri 14–90 gün arasında saklanır ve sadeleştirilmiş S1QL diliyle sorgulanabilir.

---

## 5. Otonom SOC: Purple AI ve Hiperotomasyon
-   **Purple AI:** Platformun içine yerleştirilmiş yapay zeka güvenlik analistidir. Doğal dilde sorgulama ve otomatik triyaj yetenekleri sunarak müdahale süresini (MTTR) %55’e kadar azaltır.
-   **Singularity Hyperautomation:** Sürükle-bırak arayüzü ile karmaşık güvenlik playbook’ları oluşturmaya olanak tanıyan kodsuz otomasyon motorudur.
-   **AI-SIEM:** Singularity Data Lake üzerinde çalışarak, anormal kalıpları algoritmik olarak tespit eder.

---

## 6. Genişletilmiş Tespit ve Yanıt (XDR) Yetenekleri
SentinelOne, korumayı tüm kurumsal saldırı yüzeyine yayar:
-   **Singularity Cloud Security (CNAPP):** CWPP (eBPF teknolojisiyle runtime koruma) ve CSPM özelliklerini birleştirir.
-   **Singularity Identity Security (ITDR):** Active Directory ve Azure AD’yi korur.
-   **RemoteOps Forensics:** Binlerce uç noktada uzaktan dijital adli bilişim analizi yapılmasını sağlar.

---

## 7. Lisanslama ve Ekosistem
SentinelOne, kurumsal ihtiyaçlara göre esnek bir model sunar:
-   **Core:** Temel NGAV özellikleri.
-   **Control:** Cihaz ve güvenlik duvarı yönetimi.
-   **Complete:** Gelişmiş EDR, davranışsal AI ve RemoteOps.
-   **Commercial:** ITDR ve WatchTower tehdit avcılığı dahil.
-   **Enterprise:** Purple AI ve özel modüllerle tam ölçek.

---

## Sonuç: Stratejik Değer
SentinelOne Singularity Platformu sadece bir güvenlik aracı değil, dijital dönüşümün stratejik iş ortağıdır. MITRE ATT&CK testlerinde %100 başarı sağlarken sektör ortalamasından %88 daha az uyarı üreterek SOC verimliliğini zirveye taşır.
