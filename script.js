let queue = [];
let front = 0;
let rear = -1;

function enqueue() {
  const nilaiInput = document.getElementById('nilaiInput').value;
  if (nilaiInput !== '') {
    queue.push(parseInt(nilaiInput));
    rear++;
    document.getElementById('message').innerText = `Nilai ${nilaiInput} berhasil ditambahkan ke antrian.`;
    document.getElementById('nilaiInput').value = '';
  } else {
    alert('Masukkan nilai terlebih dahulu!');
  }
}

function dequeue() {
  if (front > rear) {
    document.getElementById('message').innerText = 'Antrian kosong!';
  } else {
    const removed = queue.shift();
    rear--;
    document.getElementById('message').innerText = `Nilai ${removed} dihapus dari antrian.`;
  }
}

function showQueue() {
  const indexRow = document.getElementById('indexRow');
  const valueRow = document.getElementById('valueRow');
  
  // Bersihkan baris sebelumnya
  indexRow.innerHTML = '<td>Index</td>';
  valueRow.innerHTML = '<td>Isi</td>';
  
  // Menambahkan kolom secara dinamis sesuai data antrian
  for (let i = 0; i < queue.length; i++) {
    const indexCell = document.createElement('td');
    indexCell.innerText = front + i + 1; // Menampilkan nomor indeks
    indexRow.appendChild(indexCell);

    const valueCell = document.createElement('td');
    valueCell.innerText = queue[i]; // Menampilkan nilai pada antrian
    valueRow.appendChild(valueCell);
  }

  // Menampilkan posisi front dan rear
  document.getElementById('indexFront').innerText = `Index Front = ${front + 1}`;
  document.getElementById('indexRear').innerText = `Index Rear = ${rear + 1}`;
  
  // Tampilkan popup
  document.getElementById('popup').style.display = 'block';
}

function showCount() {
  document.getElementById('message').innerText = `Jumlah antrian saat ini: ${queue.length}`;
}

function closePopup() {
  document.getElementById('popup').style.display = 'none';
}
