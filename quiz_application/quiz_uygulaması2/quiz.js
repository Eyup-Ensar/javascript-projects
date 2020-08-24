function olustur(soru, siklar, cevap, sayac) {
    this.soru = soru;
    this.siklar = siklar;
    this.cevap = cevap;
    this.sayac = 0;
}

var buton0 = new olustur('en hızlı hayvan nedir?', ['aslan', 'çita', 'kanguru', 'leopar'], 'çita');
var buton1 = new olustur('en büyük gezegen hangisidir ?', ['satürn', 'uranüs', 'jüpiter', 'dünya'], 'jüpiter');
var buton2 = new olustur('en köklü türk tv kanalı hangisidir ?', ['atv', 'flashtv', 'kanald', 'trt'], 'trt');
var buton3 = new olustur('en kalabalık ülke hangisidir ?', ['hindistan', 'amerika', 'çin', 'rusya'], 'çin');
var btn_dizi = [buton0, buton1, buton2, buton3];
//question id al
var question_al = document.getElementById('question');
var buton_al = document.getElementsByClassName('button');
var point_al = document.getElementsByClassName('sayac');

question_print();


function question_print() {
    question_al.innerHTML = btn_dizi[1].soru;
}


islem();

function islem() {
    for (var i = 0; i < buton_al.length; i++) {
        gonder('btn' + i);
    }
}

function gonder(id) {
    var btn = document.getElementById(id);
    var sayac = -1;
    btn.onclick = function() {
        sayac++;
        if (sayac > 3) {
            sayac = 0;
        }
        for (var i = 0; i < buton_al.length; i++) {
            buton_al[i].textContent = btn_dizi[sayac].siklar[i];
            console.log(sayac);
        }
    }
}