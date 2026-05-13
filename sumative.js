document.getElementById("formRegister").style.display = "none";

function ubahHero(judul, deskripsi) {
	document.getElementById("judulHero").innerText = judul;
	document.getElementById("deskripsiHero").innerText = deskripsi;
}

function showProduk(menu) {

	document.getElementById("produk").style.display = "flex";
	document.getElementById("formRegister").style.display = "none";

	var cards = document.querySelectorAll(".produk .card");

	for (var i = 0; i < cards.length; i++) {
		cards[i].style.display = "none";
	}

	document.getElementById(menu).style.display = "block";

	ubahHero(
		"Menu " + menu,
		"Makanan dan minuman favorit tersedia di sini"
	);
}

function showForm() {

	document.getElementById("produk").style.display = "none";
	document.getElementById("formRegister").style.display = "block";

	ubahHero(
		"Register Akun",
		"Daftarkan akun untuk mulai berbelanja"
	);
}

function kembaliHome() {

	document.getElementById("produk").style.display = "none";
	document.getElementById("formRegister").style.display = "none";

	ubahHero(
		"Selamat Datang di E-Commerce Makanan",
		"Pesan makanan dan minuman favoritmu dengan mudah"
	);
}

document.getElementById("tampilkanBtn").onclick = function () {

	var nama = document.getElementById("nama").value;
	var email = document.getElementById("email").value;

	var gender = "";
	var radios = document.getElementsByName("gender");

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			gender = radios[i].value;
		}
	}

	var setuju =
	document.getElementById("setuju").checked ? "Ya" : "Tidak";

	document.getElementById("show").innerText =
		"Nama : " + nama +
		"\nEmail : " + email +
		"\nGender : " + gender +
		"\nSetuju : " + setuju;
};
