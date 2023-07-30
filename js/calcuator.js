// function hesapla(){
//     var ort;
//     s1 = parseFloat(document.getElementById('sinav1').value);
//     s2 = parseFloat(document.getElementById('sinav2').value);
//     s3 = parseFloat(document.getElementById('sinav3').value);
//     //Oğuzhan TAŞ Blog uygulaması JavaScript kodları
//     ort=(s1+s2+s3)/3.0;

//     alert(ort)
// }


function hesapla() {
  var ogrVizeNot = parseInt(document.getElementById("vize").value);
  var ogrFinalNot = parseInt(document.getElementById("final").value);

  if (isNaN(ogrVizeNot) || isNaN(ogrFinalNot)) {
    document.getElementById("sonuc").textContent = "Lütfen tüm kutuları doldurduğunuzdan emin olun.";
    return;
  }
  if (ogrVizeNot > 100 || ogrFinalNot > 100) {
    document.getElementById("sonuc").textContent = "Notlar 100'den büyük olamaz.";
    return;
  }

  var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);
  ogrOrtalama = ogrOrtalama.toFixed(2);

  if (ogrOrtalama > '0') {
    document.getElementsByClassName("sonuc")[0].style.display = "block";
    document.getElementsByClassName("temizle")[0].style.display = "block"
  }

  if (ogrOrtalama >= 0 && ogrOrtalama <= 30) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " DD - KALDINIZ";
    document.body.style.background = "red";
  } else if (ogrOrtalama >= 31 && ogrOrtalama <= 49) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " DC - KOŞULLU";
    document.body.style.background = "yellow";
  } else if (ogrOrtalama >= 50 && ogrOrtalama <= 84) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " CC - GEÇTİNİZ";
    document.body.style.background = "green";
  } else if (ogrOrtalama >= 85 && ogrOrtalama <= 100) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " AA - GEÇTİNİZ";
    document.body.style.background = "green";
  }
}

const temizle = () => {
  var ogrVizeNot = parseInt(document.getElementById("vize").value);
  var ogrFinalNot = parseInt(document.getElementById("final").value);
  var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);
  ogrOrtalama = ogrOrtalama.toFixed(2);
  if (ogrOrtalama >= 0 && ogrOrtalama <= 100) {
    parseInt(document.getElementById("vize").value = '');
    parseInt(document.getElementById("final").value = '');
   
    document.body.style.background = "linear-gradient(112deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)"
    document.getElementById("sonuc").textContent = ""
    document.getElementsByClassName("sonuc")[0].style.display = "none";
    document.getElementsByClassName("temizle")[0].style.display = "none"
  }
}

var ogrVizeNot = document.getElementById("vize").value;
var ogrFinalNot = document.getElementById("final").value;
var ogrOrtalama = (ogrVizeNot * 0.3) + (ogrFinalNot * 0.7);
ogrOrtalama = ogrOrtalama.toFixed(0);


if (ogrOrtalama === '0') {
  document.getElementsByClassName("sonuc")[0].style.display = "none";
  document.getElementsByClassName("temizle")[0].style.display = "none"
}