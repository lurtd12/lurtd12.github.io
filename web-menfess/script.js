// Ambil elemen-elemen yang dibutuhkan
const form = document.getElementById('menfess-form');
const messageInput = document.getElementById('message');
const messageList = document.getElementById('message-list');

// Fungsi untuk menampilkan pesan
function displayMessages() {
    const messages = JSON.parse(localStorage.getItem('messages')) || []; // Ambil pesan dari localStorage

    // Hapus semua pesan yang ada (untuk merender ulang)
    messageList.innerHTML = '';

    // Tampilkan pesan-pesan yang ada
    messages.forEach(function (message) {
        const menfessDiv = document.createElement('div');
        menfessDiv.classList.add('menfess');
        menfessDiv.textContent = message.text;  // Menampilkan pesan
        messageList.prepend(menfessDiv);  // Menambahkan di bagian atas
    });
}

// Fungsi untuk menyimpan pesan ke dalam localStorage
function saveMessage(messageText) {
    const messages = JSON.parse(localStorage.getItem('messages')) || []; // Ambil pesan dari localStorage
    messages.unshift({ text: messageText }); // Menambahkan pesan baru di bagian atas array

    localStorage.setItem('messages', JSON.stringify(messages)); // Simpan ke localStorage
}

// Event listener saat form disubmit
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah halaman reload

    const messageText = messageInput.value.trim();

    if (messageText !== "") {
        saveMessage(messageText);  // Simpan pesan ke localStorage
        displayMessages();  // Tampilkan pesan setelah disimpan

        // Kosongkan input
        messageInput.value = '';
    } else {
        alert("Tolong masukkan pesan terlebih dahulu!");
    }
});

// Tampilkan pesan saat halaman dimuat
displayMessages();
