<?php
// Ambil data dari form
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];
    if (!empty($message)) {
        // Simpan pesan ke file JSON (Anda bisa menggunakan database juga)
        $messages = json_decode(file_get_contents('messages.json'), true);
        $messages[] = $message;
        file_put_contents('messages.json', json_encode($messages));

        // Redirect kembali ke halaman utama setelah mengirim pesan
        header('Location: index.html');
        exit();
    }
}
?>

<?php
// Cek jika ada pesan yang dikirimkan
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $message = $_POST['message'];

    if (!empty($message)) {
        // Ambil pesan sebelumnya dari file JSON
        $messages = json_decode(file_get_contents('messages.json'), true);

        // Tambahkan pesan baru ke array
        $messages[] = $message;

        // Simpan pesan kembali ke file messages.json
        file_put_contents('messages.json', json_encode($messages));

        // Mengembalikan response sukses
        echo json_encode(['success' => true]);
    } else {
        // Jika pesan kosong, kirim response error
        echo json_encode(['success' => false]);
    }
}

