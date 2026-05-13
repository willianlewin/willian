document.getElementById("produk").style.display = "none";
document.getElementById("syaratBox").style.display = "none";

// ================= FORM =================
document.getElementById('tampilkanBtn').onclick = function () {

	var nama = document.getElementById('nama').value.trim();
	if (nama == "") nama = "(Mohon di isi)";

	var gender = "";
	var radios = document.getElementsByName('gender');
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			gender = radios[i].value;
		}
	}

	var umurCheck = document.getElementsByName('umur');
	var umurList = [];
	for (var i = 0; i < umurCheck.length; i++) {
		if (umurCheck[i].checked) {
			umurList.push(umurCheck[i].value);
		}
	}

	var tingkatRadio = document.getElementsByName('tingkatan');
	var tingkatan = "";
	for (var i = 0; i < tingkatRadio.length; i++) {
		if (tingkatRadio[i].checked) {
			tingkatan = tingkatRadio[i].value;
		}
	}

	var setuju = document.getElementById('setuju').checked ? "ya" : "tidak";

	document.getElementById('show').innerText =
		"Nama: " + nama +
		"\nGender: " + (gender || "mohon di isi") +
		"\nUmur: " + (umurList.join(", ") || "mohon di isi") +
		"\nTingkatan: " + (tingkatan || "mohon di isi") +
		"\nPersetujuan: " + setuju;
};

// tombol OK
document.getElementById('okBtn').onclick = function () {
	document.getElementById('tampilkanBtn').click();
};

// tombol CLEAR
document.getElementById('clearBtn').onclick = function () {
	location.reload();
};

// ================= HERO =================
function ubahHero(judul, deskripsi) {
	document.getElementById("judulHero").innerText = judul;
	document.getElementById("deskripsiHero").innerText = deskripsi;
}

// ================= PRODUK =================
function showProduk(level) {

	document.getElementById("formPendaftaran").style.display = "none";
	document.getElementById("syaratBox").style.display = "none";
	document.getElementById("produk").style.display = "flex";

	var cards = document.querySelectorAll(".produk .card");
	for (var i = 0; i < cards.length; i++) {
		cards[i].style.display = "none";
	}

	document.getElementById(level).style.display = "block";

	// 🔥 UBAH HERO
	if (level === "sd") {
		ubahHero("Biaya Pendaftaran SD", "Informasi biaya masuk Sekolah Dasar");
	} else if (level === "smp") {
		ubahHero("Biaya Pendaftaran SMP", "Informasi biaya masuk Sekolah Menengah Pertama");
	} else if (level === "sma") {
		ubahHero("Biaya Pendaftaran SMA", "Informasi biaya masuk Sekolah Menengah Atas");
	}
}

// ================= SYARAT =================
function showSyarat(level) {

	document.getElementById("formPendaftaran").style.display = "none";
	document.getElementById("produk").style.display = "none";
	document.getElementById("syaratBox").style.display = "flex";

	var cards = document.querySelectorAll("#syaratBox .card");
	for (var i = 0; i < cards.length; i++) {
		cards[i].style.display = "none";
	}

	document.getElementById("syarat-" + level).style.display = "block";

	
	if (level === "sd") {
		ubahHero("Syarat Masuk SD", "Persyaratan masuk Sekolah Dasar");
	} else if (level === "smp") {
		ubahHero("Syarat Masuk SMP", "Persyaratan masuk Sekolah Menengah Pertama");
	} else if (level === "sma") {
		ubahHero("Syarat Masuk SMA", "Persyaratan masuk Sekolah Menengah Atas");
	}
}


function kembaliForm() {
	document.getElementById("formPendaftaran").style.display = "block";
	document.getElementById("produk").style.display = "none";
	document.getElementById("syaratBox").style.display = "none";


	ubahHero(
		"Selamat Datang di Website Pendaftaran",
		"Sekolah terbaik untuk masa depan yang cerah"
	);
}