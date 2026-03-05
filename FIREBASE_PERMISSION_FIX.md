# 🔧 FIX ERROR: "Missing or insufficient permissions"

## ❌ Masalah
Saat mencoba upload/input data, error:
```
"Missing or insufficient permissions"
```

---

## ✅ Penyebab
Firebase Security Rules belum dikonfigurasi untuk allow public write access.

---

## 🚀 SOLUSI CEPAT (3 Langkah)

### Step 1️⃣: Buka Firebase Console
**URL:** https://console.firebase.google.com/

Pastikan Anda logged in dengan akun Google yang sama.

---

### Step 2️⃣: Update Security Rules

1. Pilih project: **database-pmii-martapura**
2. Menu kiri > **Firestore Database**
3. Klik tab **"Rules"** (di atas "Data")
4. **Hapus total** kode yang ada saat ini
5. **Paste kode baru ini:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if true;
    }
  }
}
```

---

### Step 3️⃣: Publish & Test

1. **Klik "Publish"** atau **"Update"** button
2. **Tunggu konfirmasi** selesai (biasanya 1-2 menit)
3. **Buka aplikasi** dan refresh (Ctrl+R atau F5)
4. **Test input data** - seharusnya sukses sekarang ✅

---

## ✨ Setelah Fix

Coba lagi:
- ✅ Input Anggota - klik "Simpan Data"
- ✅ Input Keuangan - klik "Simpan Transaksi"
- ✅ Lihat Dashboard update
- ✅ Check Firestore Console - data muncul real-time

---

## 🖼️ Screenshot Guide

### Buka Firestore Rules:
```
Firebase Console
  → Pilih Project (database-pmii-martapura)
    → Firestore Database (menu kiri)
      → Rules tab
        → Edit code di sini
```

### Lokasi Tab Rules:
```
┌─────────────────────────────────┐
│ Data  Rules  Indexes            │  ← Klik "Rules"
│                                 │
│ [Paste code di sini]            │
│                                 │
│           [Publish]             │  ← Klik Publish
└─────────────────────────────────┘
```

---

## ⚠️ Security Warning

Rules `allow read, write: if true;` sangat permissive dan hanya untuk **testing/development**.

Untuk **production**, gunakan authentication atau rules yang lebih ketat:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Hanya user login bisa akses
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

---

## 🐛 Jika Tetap Error

1. **Clear browser cache:**
   - Ctrl+Shift+Delete (Windows) atau Cmd+Shift+Delete (Mac)
   - Pilih "All time"
   - Clear data

2. **Close & reopen aplikasi:**
   - Tutup browser tab
   - Buka ulang: https://kanza99.github.io/kta-pmii/

3. **Check browser console:**
   - Tekan F12
   - Klik "Console" tab
   - Lihat error message detail
   - Screenshot & share jika ada error

4. **Verify Firestore Rules:**
   - Refresh Firebase Console
   - Pastikan code sudah Publish dengan status "Deployed"

---

## 📞 Troubleshoot Checklist

- [ ] Sudah buka Firebase Console?
- [ ] Sudah pilih project **database-pmii-martapura**?
- [ ] Sudah buka tab **Rules**?
- [ ] Sudah paste kode baru?
- [ ] Sudah klik **Publish**?
- [ ] Sudah tunggu 1-2 menit deploy selesai?
- [ ] Sudah refresh browser (F5)?
- [ ] Sudah test input data?

---

## 🎯 Expected Result

Setelah rules di-update dan aplikasi di-refresh:

1. ✅ Form "Simpan Data" berhasil tanpa error
2. ✅ Data muncul di table "Data Anggota"
3. ✅ Data terlihat di Firebase Console > Collections
4. ✅ Dashboard update dengan statistik baru

---

**Status:** Jika berhasil, error seharusnya tidak muncul lagi!

Jika masih error, lihat browser console (F12) untuk detail error message.
