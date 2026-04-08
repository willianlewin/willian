document.getElementById('tampilkanBtn').onclick = function () {
	var nama = document.getElementById('nama').value.trim();
	if (nama == "") {
		nama = "(Mohon di isi)";
	}
	var ender = "";
	var radios = document.getElementsByName('gender');
	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			gender = radios[i].value;
			break;
		}
	}
	if (gender === "") {
		gender = "mohon di isi";
	}
	var umurCheck = document.getElementsByName('umur');
	var umurList = [];
	for (var i = 0; i < umurCheck.length; i++) {
		if (umurCheck[i].checked) {
			umurList.push(umurCheck[i].value);
		}
	}
	var umur = umurList.length > 0 ? umurList.join(", ") : "mohon di isi";
	var tingkatRadio = document.getElementsByName('tingkatan');
	var tingkatan = "";
	for (var i = 0; i < tingkatRadio.length; i++) {
		if (tingkatRadio[i].checked) {
			tingkatan = tingkatRadio[i].value;
			break;
		}
	}

	if (tingkatan === "") {
		tingkatan = "mohon di isi";
	}
	var setuju = document.getElementById('setuju').checked ? "ya" : "tidak";
	var hasil = "Nama: " + nama +"\nGender: " + gender +"\nUmur: " + umur +"\nTingkatan: " + tingkatan +"\nPersetujuan: " + setuju;
	document.getElementById('show').innerText = hasil;
}
document.getElementById('okBtn').onclick = function () {
	document.getElementById('tampilkanBtn').click();
}
document.getElementById('clearBtn').onclick = function () {
	document.getElementById('nama').value = "";
	var gender = document.getElementsByName('gender');
	for (var i = 0; i < gender.length; i++) {
		gender[i].checked = false;
	}
	var umur = document.getElementsByName('umur');
	for (var i = 0; i < umur.length; i++) {
		umur[i].checked = false;
	}
	var tingkat = document.getElementsByName('tingkatan');
	for (var i = 0; i < tingkat.length; i++) {
		tingkat[i].checked = false;
	}
	document.getElementById('setuju').checked = false;
	document.getElementById('show').innerText = "tampilan data";
}