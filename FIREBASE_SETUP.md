# Setup Firebase untuk Database PMII Martapura

## Langkah 1: Buat Project Firebase
1. Pergi ke https://console.firebase.google.com/
2. Klik "Create Project"
3. Nama: `Database PMII Martapura` (atau nama lain)
4. Klik "Create"

## Langkah 2: Aktifkan Firestore Database
1. Di Firebase Console, pilih project Anda
2. Menu kiri > Firestore Database
3. Klik "Create Database"
4. Mode: **Production mode** (atau testing jika untuk development)
5. Lokasi: Sesuaikan sesuai kebutuhan
6. Klik "Create"

## Langkah 3: Ambil Config Firebase
1. Di Dashboard Firebase, klik icon gear (Settings)
2. Pilih tab "General"
3. Scroll ke bagian "Your apps"
4. Klik Web app (icon `</>`), atau "Add app" jika belum ada
5. Copy credential yang muncul

## Langkah 4: Simpan Config ke Project
1. Buat file `.env.local` di root project:
   ```
   VITE_FIREBASE_API_KEY=YOUR_API_KEY
   VITE_FIREBASE_AUTH_DOMAIN=YOUR_PROJECT.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
   VITE_FIREBASE_STORAGE_BUCKET=YOUR_PROJECT.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
   VITE_FIREBASE_APP_ID=YOUR_APP_ID
   ```
2. Ganti placeholder dengan nilai dari Firebase Console

## Langkah 5: Update `index.html`
Buka `index.html`, cari baris ~13-21 (script Firebase), ganti:
```javascript
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID
};
```

## Langkah 6: Test Database
1. Di index.html, browser akan menampilkan error jika config salah
2. Coba input data anggota/keuangan
3. Cek di Firebase Console > Firestore > Collections untuk verifikasi data tersimpan

## Selesai!
Web app Anda sudah siap dengan Firebase backend.
