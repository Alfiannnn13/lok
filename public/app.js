import { getDatabase, ref, push } from 'firebase/database';

// Mendapatkan referensi database
const database = getDatabase();

// Fungsi untuk mendapatkan lokasi pengguna
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(saveLocation);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

// Fungsi untuk menyimpan lokasi ke Firebase Realtime Database
function saveLocation(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  const locationData = {
    latitude: latitude,
    longitude: longitude,
    timestamp: new Date().toString()
  };

  // Simpan lokasi ke Firebase Realtime Database
  push(ref(database, 'locations'), locationData)
    .then(() => {
      alert("Lokasi berhasil disimpan!");
    })
    .catch((error) => {
      console.error("Error saat menyimpan lokasi: ", error);
    });
}

// Panggil fungsi getLocation() saat halaman dimuat
getLocation();
