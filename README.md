# 📱 Database PMII Martapura

Aplikasi web untuk mengelola data anggota dan keuangan organisasi PMII Martapura dengan backend Firebase Firestore.

## ✨ Fitur Utama
- **Dashboard** - Ringkasan statistik anggota dan keuangan
- **Data Anggota** - View, cari, hapus data anggota dengan filter
- **Data Keuangan** - Kelola transaksi masuk/keluar
- **Input Form** - Tambah data anggota dan keuangan baru
- **Grafik Statistik** - Visualisasi jumlah anggota per status
- **Real-time Sync** - Data tersinkronisasi dengan Firebase Firestore

## 🚀 Quick Start

### 1. **Aktifkan GitHub Pages** (Opsional, untuk akses publik)
- Pergi ke repo Settings > Pages
- Pilih branch `main`, folder `/(root)`
- Link publik: `https://kanza99.github.io/kta-pmii/`

### 2. **Setup Firebase** (WAJIB untuk data berfungsi)
Ikuti instruksi di [FIREBASE_SETUP.md](FIREBASE_SETUP.md):
1. Buat project Firebase
2. Aktifkan Firestore Database
3. Copy config credentials
4. Isi placeholder di file `index.html` (baris ~21)

### 3. **Jalankan Aplikasi**
- Buka `index.html` di browser
- Atau hosting di server dengan live server

## 📁 Struktur File
```
/
├── index.html              # Main app (standalone)
├── README.md              # Dokumentasi ini
├── FIREBASE_SETUP.md      # Instruksi setup Firebase
└── .env.example           # Template environment variables
```

## 🔧 Firebase Configuration
**Lokasi config:** `index.html` (baris ~21-27)

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

## 📋 Koleksi Firestore

### `anggota` collection
```json
{
  "nama": "Nama Anggota",
  "kampus": "Nama Universitas",
  "kaderisasi": "MAPABA|PKD|PKL|PKN",
  "organisasi": "Rayon|Komisariat|PC|PKC|PB",
  "status": "Aktif|Tidak Aktif|Demisioner",
  "createdAt": "timestamp"
}
```

### `keuangan` collection
```json
{
  "tanggal": "2024-03-05",
  "ket": "Iuran Anggota",
  "jenis": "Masuk|Keluar",
  "nominal": "500000",
  "createdAt": "timestamp"
}
```

## 🛠️ Teknologi
- **Frontend:** HTML5, Bootstrap 5, Chart.js
- **Backend:** Firebase Firestore
- **Icons:** Font Awesome 6
- **Hosting:** GitHub Pages + Firebase

## 📝 Cara Penggunaan

### Dashboard
- Lihat ringkasan jumlah anggota aktif
- Melihat total pemasukan dan pengeluaran
- Lihat grafik statistik status anggota

### Input Anggota
- Isi form dengan data anggota baru
- Jenjang: MAPABA, PKD, PKL, PKN
- Organisasi: Rayon, Komisariat, PC, PKC, PB
- Status: Aktif, Tidak Aktif, Demisioner

### Input Keuangan
- Catat transaksi masuk (pemasukan) atau keluar (pengeluaran)
- Isi tanggal, keterangan, jenis, nominal
- Data otomatis tersimpan ke Firestore

### Data Tables
- **Search:** Cari anggota berdasarkan nama atau kampus
- **Delete:** Hapus data (hanya anggota, fitur edit sedang development)
- **Real-time:** Data diupdate otomatis dari Firestore

## ⚠️ Penting
- **Firebase HARUS di-setup** agar aplikasi berfungsi penuh
- **Keamanan:** Setup Firestore dengan security rules yang tepat
- **Backup:** Backup data Firestore secara berkala
- **Browser:** Use modern browser (Chrome, Firefox, Edge, Safari)

## 🔐 Firestore Security Rules (Basic)
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```
⚠️ Gunakan rules yang lebih strict untuk production!

## 🐛 Troubleshooting

### Firebase config error?
- Cek di browser console (F12)
- Pastikan semua placeholder di `index.html` sudah diganti
- Baca [FIREBASE_SETUP.md](FIREBASE_SETUP.md)

### Data tidak tersimpan?
- Cek Firestore
collection permissions
- Cek browser network tab untuk error

### Halaman blank?
- Cek file `index.html` terbuka?
- Enable JavaScript di browser
- Check console untuk error message

## 📞 Contact & Support
- Baca dokumentasi [FIREBASE_SETUP.md](FIREBASE_SETUP.md)
- Check error message di browser console (F12)
- Periksa Firebase Console untuk debug
