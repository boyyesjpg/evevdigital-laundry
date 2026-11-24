/* ==========================================================================
   PENGATURAN PROFIL USAHA UMKM INDONESIA — evevlaundry
   Cukup ubah data di objek PROFIL_USAHA di bawah ini untuk menyesuaikan
   nama brand, paket harga, alamat, jam operasional, dan auto-format WhatsApp.
   ========================================================================== */

const PROFIL_USAHA = {
  // 1. Identitas Bisnis
  nama: "evevlaundry",
  namaLengkap: "evevlaundry — Laundry Kiloan Express & Setrika Uap Higienis",
  sektor: "Jasa Laundry Kiloan, Cuci Lipat, Setrika Uap Boiler & Satuan",
  tagline: "Pakaian Bersih Higienis, Rapi & Wangi Tahan 14 Hari — 1 Mesin 1 Pelanggan",
  deskripsi:
    "Pusat jasa laundry kiloan express dan satuan modern di Jakarta Timur. Menggunakan SOP 1 mesin 1 pelanggan, air filtrasi 3 tahap anti kuning, deterjen ramah serat, serta setrika uap boiler presisi anti gosong.",

  // 2. Preferensi Tema Awal ("light" atau "dark")
  temaDefault: "light",

  // 3. Kontak & WhatsApp Bisnis
  whatsapp: "62895323418658",
  whatsappDisplay: "+62 895-3234-18658",
  telepon: "+62 895-3234-18658",
  email: "evevdigital@gmail.com",
  instagram: "@evevlaundry.jkt",
  pesanWABooking:
    "Halo evevlaundry, saya ingin pesan layanan antar-jemput laundry. Mohon info jadwal penjemputan terdekat ya.",

  // 4. Alamat & Jam Operasional
  alamat: "Jl. Otista Raya No. 88, Kel. Bidara Cina, Kec. Jatinegara, Jakarta Timur 13330",
  alamatSingkat: "Jl. Otista Raya No. 88, Jatinegara, Jakarta Timur",
  kota: "Jakarta Timur",
  jamBukaText: "Setiap Hari: 07:00 - 21:00 WIB",
  jamBukaHour: 7,
  jamTutupHour: 21,
  jamOperasionalDetail: [
    { hari: "Senin - Jumat", jam: "07:00 - 21:00 WIB" },
    { hari: "Sabtu - Minggu", jam: "07:00 - 21:00 WIB" },
    { hari: "Hari Libur Nasional", jam: "08:00 - 20:00 WIB" }
  ],
  areaLayanan:
    "Gratis Antar-Jemput Radius 5 KM (Jatinegara, Cawang, Cipinang, Kampung Melayu, Matraman & Tebet)",
  linkMaps:
    "https://maps.google.com/?q=Jl.+Otista+Raya+No.+88+Jatinegara+Jakarta+Timur",

  // 5. Daftar 6 Paket & Harga Realistis UMKM Indonesia
  layanan: [
    {
      id: "cuci-kering-lipat",
      nama: "Cuci Kering Lipat Reguler",
      harga: "Rp 7.000",
      hargaAngka: 7000,
      satuan: "/ kg",
      minimalOrder: "Min. 3 kg",
      estimasi: "2 Hari Selesai",
      badge: "Paling Hemat",
      unggulan: false,
      deskripsi:
        "Pencucian higienis 1 mesin khusus 1 pelanggan, pengeringan 100% mesin dryer tanpa dijemur debu jalanan, lalu dilipat rapi dan disegel wangi.",
      fitur: [
        "SOP 1 Mesin 1 Pelanggan (Anti Campur)",
        "Air Filtrasi 3 Tahap & Deterjen Ramah Serat",
        "Pengeringan 100% Mesin Dryer Higienis",
        "Parfum Micro-Capsule Tahan 14 Hari",
        "Lipat Rapi & Packing Plastik Segel"
      ]
    },
    {
      id: "cuci-komplit-setrika-uap",
      nama: "Cuci Komplit + Setrika Uap",
      harga: "Rp 10.000",
      hargaAngka: 10000,
      satuan: "/ kg",
      minimalOrder: "Min. 3 kg",
      estimasi: "2 Hari Selesai",
      badge: "Paling Laris",
      unggulan: true,
      deskripsi:
        "Paket favorit keluarga & pekerja kantoran. Pakaian dicuci bersih menyeluruh lalu disetrika uap boiler bertekanan tinggi — licin, bebas kusut, dan anti gosong.",
      fitur: [
        "SOP 1 Mesin 1 Pelanggan (Anti Campur)",
        "Setrika Uap Boiler Presisi Anti Gosong",
        "Bebas Bekas Kilap pada Bahan Gelap",
        "Gratis Hanger Khusus Kemeja & Blazer",
        "Garansi Cuci Ulang Jika Kurang Bersih"
      ]
    },
    {
      id: "express-kilat-6-jam",
      nama: "Paket Express Kilat 6 Jam",
      harga: "Rp 15.000",
      hargaAngka: 15000,
      satuan: "/ kg",
      minimalOrder: "Min. 3 kg",
      estimasi: "6 Jam Jadi",
      badge: "Super Kilat",
      unggulan: false,
      deskripsi:
        "Solusi cepat saat pakaian kerja atau perjalanan dinas mendesak. Prioritas antrean mesin utama, selesai bersih, licin, dan wangi di hari yang sama.",
      fitur: [
        "Prioritas Mesin Utama & Proses Same-Day",
        "Cuci Komplit + Setrika Uap Boiler",
        "Kurir Prioritas Jemput dalam 30 Menit",
        "Pengeringan Suhu Terkontrol Ramah Kain",
        "Siap Pakai & Masuk Lemari Hari Ini"
      ]
    },
    {
      id: "setrika-uap-saja",
      nama: "Setrika Uap Boiler Saja",
      harga: "Rp 6.000",
      hargaAngka: 6000,
      satuan: "/ kg",
      minimalOrder: "Min. 3 kg",
      estimasi: "1-2 Hari Selesai",
      badge: "Praktis",
      unggulan: false,
      deskripsi:
        "Khusus pakaian yang sudah Anda cuci sendiri di rumah. Kami haluskan dengan uap boiler bertekanan agar kemeja, gamis, dan seragam rapi sempurna.",
      fitur: [
        "Setrika Uap Boiler Aman untuk Semua Kain",
        "Bebas Gosong & Aman untuk Sablon Kaos",
        "Semprot Parfum Laundry Premium Pilihan",
        "Opsi Lipat Rapi atau Gantung Hanger",
        "Packing Plastik Segel Anti Debu"
      ]
    },
    {
      id: "bedcover-selimut",
      nama: "Cuci Bedcover & Selimut King",
      harga: "Rp 25.000",
      hargaAngka: 25000,
      satuan: "/ pcs",
      minimalOrder: "Satuan (All Size)",
      estimasi: "2-3 Hari Selesai",
      badge: "Anti Tungau",
      unggulan: false,
      deskripsi:
        "Pencucian mesin kapasitas besar untuk bedcover, selimut tebal, dan sprei. Mengangkat debu halus, tungau, dan bau apek agar tidur kembali nyenyak.",
      fitur: [
        "Mesin Heavy-Duty Kapasitas Ekstra Besar",
        "Formula Anti Tungau, Bakteri & Bau Apek",
        "Kering Sempurna Hingga Dakron Terdalam",
        "Parfum Lembut Aman untuk Kulit Sensitif",
        "Kemasan Tas Plastik Tebal Siap Simpan"
      ]
    },
    {
      id: "karpet-gorden-baby",
      nama: "Karpet, Gorden & Baby Care",
      harga: "Rp 18.000",
      hargaAngka: 18000,
      satuan: "/ m²",
      minimalOrder: "Karpet / Gorden / Stroller",
      estimasi: "3 Hari Selesai",
      badge: "Deep Clean",
      unggulan: false,
      deskripsi:
        "Pembersihan mendalam untuk karpet ruang tamu, gorden rumah/kantor, hingga sanitasi stroller bayi menggunakan deterjen hypoallergenic tanpa residu keras.",
      fitur: [
        "Ekstraksi Debu & Noda Membandel",
        "Deterjen Hypoallergenic Ramah Anak & Bayi",
        "Anti Bau Lembap & Bebas Jamur",
        "Perawatan Khusus Serat Kain Gorden",
        "Gratis Antar-Jemput Area Jatinegara"
      ]
    }
  ],

  // 6. Pilihan Aroma Parfum Premium
  pilihanParfum: [
    "Sakura Blossom",
    "Downy Mystique",
    "Snappy Fresh",
    "Ocean Breeze",
    "Soft Lavender"
  ],

  // 7. Keunggulan Utama
  keunggulan: [
    {
      judul: "SOP 1 Mesin 1 Pelanggan",
      deskripsi:
        "Cucian Anda tidak pernah dicampur dengan milik orang lain. Lebih higienis, bebas risiko tertukar, dan aman untuk pakaian bayi."
    },
    {
      judul: "Gratis Jemput & Antar Radius 5 KM",
      deskripsi:
        "Cukup pesan lewat WhatsApp, kurir kami datang menjemput ke rumah, apartemen, atau kost Anda dan mengantar kembali dalam keadaan rapi."
    },
    {
      judul: "Air Filtrasi 3 Tahap & Wangi 14 Hari",
      deskripsi:
        "Air disaring dari zat besi dan kapur agar baju putih tetap cemerlang, dipadukan parfum micro-capsule yang harum tahan lama di lemari."
    }
  ],

  // 8. Helper Auto-Format WhatsApp ke +62 895-3234-18658
  getCleanWaNumber: function () {
    return String(this.whatsapp || "62895323418658").replace(/\D/g, "");
  },

  buatLinkWA: function (pesanKustom) {
    const teks = pesanKustom || this.pesanWABooking;
    return `https://wa.me/${this.getCleanWaNumber()}?text=${encodeURIComponent(teks)}`;
  },

  formatPesanPaket: function (namaPaket, hargaText) {
    const detailHarga = hargaText ? ` (${hargaText})` : "";
    return (
      `Halo ${this.nama} 👋\n` +
      `Saya ingin pesan layanan:\n\n` +
      `🧺 *Paket:* ${namaPaket}${detailHarga}\n` +
      `📍 *Alamat Jemput:* \n` +
      `⏰ *Jadwal Jemput:* Hari ini\n` +
      `🌸 *Pilihan Parfum:* Sakura / Downy / Ocean\n\n` +
      `Mohon info ketersediaan kurir antar-jemput ya. Terima kasih!`
    );
  },

  formatPesanBooking: function (data) {
    const nama = (data.nama || "Pelanggan").trim();
    const telepon = (data.telepon || "-").trim();
    const layanan = (data.layanan || "Cuci Komplit + Setrika Uap").trim();
    const alamat = (data.alamat || "-").trim();
    const catatan = (data.catatan || "-").trim();

    return (
      `*FORM ORDER ANTAR-JEMPUT — ${this.nama.toUpperCase()}*\n` +
      `----------------------------------\n` +
      `👤 *Nama:* ${nama}\n` +
      `📱 *No. WhatsApp:* ${telepon}\n` +
      `🧺 *Paket Layanan:* ${layanan}\n` +
      `📍 *Alamat / Lokasi:* ${alamat}\n` +
      `📝 *Catatan Tambahan:* ${catatan}\n` +
      `----------------------------------\n` +
      `Mohon konfirmasi estimasi penjemputan kurir ya. Terima kasih!`
    );
  },

  pesanPaket: function (namaPaket, hargaText) {
    const url = this.buatLinkWA(this.formatPesanPaket(namaPaket, hargaText));
    window.open(url, "_blank", "noopener,noreferrer");
  }
};

// Expose secara global
window.PROFIL_USAHA = PROFIL_USAHA;

/* ==========================================================================
   ENGINE HIDRASI OTOMATIS & INTERCEPTOR WHATSAPP
   ========================================================================== */
document.addEventListener("DOMContentLoaded", function () {
  const p = window.PROFIL_USAHA;
  if (!p) return;

  // 1. Hidrasi elemen dengan atribut [data-config]
  document.querySelectorAll("[data-config]").forEach(function (el) {
    const key = el.getAttribute("data-config");
    if (p[key] !== undefined && typeof p[key] !== "object") {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.value = p[key];
      } else {
        el.textContent = p[key];
      }
    }
  });

  // 2. Auto-format link WhatsApp per paket ([data-wa-paket])
  document.querySelectorAll("[data-wa-paket]").forEach(function (btn) {
    const namaPaket = btn.getAttribute("data-wa-paket");
    const hargaPaket = btn.getAttribute("data-wa-harga") || "";
    const url = p.buatLinkWA(p.formatPesanPaket(namaPaket, hargaPaket));
    if (btn.tagName === "A") {
      btn.setAttribute("href", url);
      btn.setAttribute("target", "_blank");
      btn.setAttribute("rel", "noopener noreferrer");
    } else {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        window.open(url, "_blank", "noopener,noreferrer");
      });
    }
  });

  // 3. Pastikan semua tautan WhatsApp umum mengarah ke +62 895-3234-18658
  document.querySelectorAll('a[data-wa-general="true"], a.floating-wa-btn, a.btn-wa-booking').forEach(function (a) {
    const customMsg = a.getAttribute("data-wa-message");
    a.setAttribute("href", p.buatLinkWA(customMsg || p.pesanWABooking));
    a.setAttribute("target", "_blank");
    a.setAttribute("rel", "noopener noreferrer");
  });

  // 4. Status Buka/Tutup Real-Time (WIB)
  document.querySelectorAll(".live-status-badge").forEach(function (badge) {
    const now = new Date();
    const hour = now.getHours();
    const isOpen = hour >= p.jamBukaHour && hour < p.jamTutupHour;
    if (isOpen) {
      badge.innerHTML = `<span class="status-dot is-open"></span> Buka Sekarang (${p.jamBukaText})`;
      badge.classList.add("is-open");
      badge.classList.remove("is-closed");
    } else {
      badge.innerHTML = `<span class="status-dot is-closed"></span> Tutup — Buka Besok 07:00 WIB (WA Tetap Aktif)`;
      badge.classList.add("is-closed");
      badge.classList.remove("is-open");
    }
  });

  // 5. Intercept Form Booking Antar-Jemput -> Auto-Format ke WhatsApp
  const bookingForms = document.querySelectorAll(
    'form#appointmentForm, form.appointment-form, form[data-wa-form="booking"]'
  );
  bookingForms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const nama =
        form.querySelector('input[name="name"], #bookingName')?.value || "";
      const telepon =
        form.querySelector('input[name="phone"], input[name="tel"], #bookingPhone')?.value || "";
      const layanan =
        form.querySelector('select[name="subject"], select[name="service"], #bookingService')?.value ||
        "Cuci Komplit + Setrika Uap";
      const alamat =
        form.querySelector('input[name="address"], #bookingAddress')?.value || "";
      const catatan =
        form.querySelector('textarea[name="message"], #bookingMessage')?.value || "";

      const waText = p.formatPesanBooking({
        nama: nama || "Pelanggan evevlaundry",
        telepon: telepon || "-",
        layanan: layanan,
        alamat: alamat || "Area Jakarta Timur",
        catatan: catatan || "Mohon info jadwal jemput terdekat"
      });

      const msgEl = form.querySelector(".form-messages");
      if (msgEl) {
        msgEl.textContent = "Mengarahkan ke WhatsApp evevlaundry...";
        msgEl.style.color = "#16a34a";
      }

      window.open(p.buatLinkWA(waText), "_blank", "noopener,noreferrer");
    });
  });

  // 6. Intercept Form Promo Footer -> Kirim permintaan promo ke WhatsApp
  const promoForm = document.querySelector('form[data-wa-form="promo"]');
  if (promoForm) {
    promoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const kontakInput = promoForm.querySelector('input[type="text"], input[type="email"], input[type="tel"]')?.value || "";
      const teksPromo =
        `Halo ${p.nama}, saya ingin mendapatkan info promo hemat & voucher member laundry bulanan.` +
        (kontakInput ? `\nKontak/Email saya: ${kontakInput}` : "");
      window.open(p.buatLinkWA(teksPromo), "_blank", "noopener,noreferrer");
    });
  }
});
