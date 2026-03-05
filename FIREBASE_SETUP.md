# Setup Firebase untuk Database PMII Martapura

## ✅ STATUS: FIREBASE SUDAH SETUP!

Project Firebase: **database-pmii-martapura** sudah dikonfigurasi dan siap digunakan.

### Informasi Project
- **Project ID:** database-pmii-martapura
- **Auth Domain:** database-pmii-martapura.firebaseapp.com
- **Storage Bucket:** database-pmii-martapura.firebasestorage.app

---

## 📋 Firestore Database

### Collections yang tersedia:
1. **anggota** - Data anggota organisasi
2. **keuangan** - Data transaksi keuangan

### Akses Firestore Console
Pergi ke: https://console.firebase.google.com/

---

## 🚀 Cara Menggunakan Aplikasi

### 1. Buka Aplikasi
- **Local:** Buka `index.html` di browser
- **Online:** https://kanza99.github.io/kta-pmii/ (setelah enable GitHub Pages)

### 2. Test Fitur
- **Input Anggota:**
  - Klik "Input Anggota" di sidebar
  - Isi form lengkap
  - Klik "Simpan Data"
  - Data akan muncul di "Data Anggota"

- **Input Keuangan:**
  - Klik "Input Keuangan" di sidebar
  - Isi form (tanggal, keterangan, jenis, nominal)
  - Klik "Simpan Transaksi"
  - Data akan muncul di "Data Keuangan"

- **Dashboard:**
  - Klik "Dashboard"
  - Lihat statistik dan grafik otomatis update

### 3. Verifikasi Data
- Buka Firebase Console
- Firestore Database > Collections
- Cek "anggota" dan "keuangan" collections
- Data harus muncul real-time

---

## 📊 Struktur Data Firestore

### Document: anggota
```
{
  "nama": "Nama Anggota",
  "kampus": "Universitas XYZ",
  "kaderisasi": "MAPABA",
  "organisasi": "Rayon",
  "status": "Aktif",
  "createdAt": "2024-03-05T12:30:45.123Z"
}
```

### Document: keuangan
```
{
  "tanggal": "2024-03-05",
  "ket": "Iuran Anggota",
  "jenis": "Masuk",
  "nominal": "500000",
  "createdAt": "2024-03-05T12:30:45.123Z"
}
```

---

## 🔧 Jika Ingin Mengganti Firebase Config

Edit file `index.html` baris ~18-27:
```javascript
const firebaseConfig = {
    apiKey: "YOUR_NEW_API_KEY",
    authDomain: "YOUR_NEW_AUTH_DOMAIN.firebaseapp.com",
    projectId: "YOUR_NEW_PROJECT_ID",
    storageBucket: "YOUR_NEW_STORAGE_BUCKET",
    messagingSenderId: "YOUR_NEW_MESSAGING_SENDER_ID",
    appId: "YOUR_NEW_APP_ID"
};
```

Kemudian save file dan reload browser.

---

---

## 🔐 Security Rules (Production)

Untuk production, setup security rules ini di Firebase Console > Firestore > Rules:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Izinkan reading dan writing hanya untuk user yang login
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

⚠️ **PENTING:** Jika aplikasi publik tanpa auth, gunakan rules yang lebih permissive atau setup authentication terlebih dahulu.

---

## 🐛 Troubleshooting

### Error: "Resource not available" atau "Permission denied"
- Cek Firestore Security Rules di Firebase Console
- Gunakan rules di atas atau lebih permissive untuk testing

### Data tidak tersimpan?
- Buka browser console (F12)
- Cek error message
- Pastikan Firebase config benar di `index.html`

### Halaman blank / error?
- Buka `index.html` langsung di browser (tidak perlu server)
- Check console (F12) untuk error details
- Pastikan JavaScript enabled

### Data tidak muncul di Dashboard?
- Tunggu beberapa detik (data di-load dari Firestore)
- Refresh halaman (F5)
- Cek Firestore Console apakah data ada

---

## 📞 Support & Resources

- **Firebase Documentation:** https://firebase.google.com/docs
- **Firestore Guide:** https://firebase.google.com/docs/firestore
- **GitHub Repo:** https://github.com/kanza99/kta-pmii
- **Browser Console:** Tekan F12 untuk debug

---

**Status:** ✅ Firebase sudah siap! Aplikasi bisa digunakan sekarang.
