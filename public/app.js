// Inisialisasi Firebase Realtime Database
var database = firebase.database();

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
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var locationData = {
        latitude: latitude,
        longitude: longitude,
        timestamp: new Date().toString()
    };

    // Simpan lokasi ke Firebase Realtime Database
    database.ref('locations').push(locationData)
        .then(function() {
            alert("Lokasi berhasil disimpan!");
        })
        .catch(function(error) {
            console.error("Error saat menyimpan lokasi: ", error);
        });
}
