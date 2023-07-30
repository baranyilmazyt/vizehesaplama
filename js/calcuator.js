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

  if (ogrOrtalama >= 0 && ogrOrtalama <= 30) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " DD - KALDINIZ";
  } else if (ogrOrtalama >= 31 && ogrOrtalama <= 49) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " DC - KOŞULLU";
  } else if (ogrOrtalama >= 50 && ogrOrtalama <= 84) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " CC - GEÇTİNİZ";
  } else if (ogrOrtalama >= 85 && ogrOrtalama <= 100) {
    document.getElementById("sonuc").textContent = "Not ortalamanız: " + ogrOrtalama + " AA - GEÇTİNİZ";
  }
}
