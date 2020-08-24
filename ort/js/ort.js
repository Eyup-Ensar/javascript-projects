//sondan sil
var sil = document.querySelector('#remove');
var table = document.querySelector('table');
sil.addEventListener('click', function(e) {
    e.preventDefault();
    if (table.lastElementChild.className === 'tr') {
        table.lastElementChild.remove();
    }
})


//sondan ekle


const ekle = document.querySelector('#create');
ekle.addEventListener('click', function(e) {
    e.preventDefault();
    var li_limit = document.querySelectorAll('.tr');
    const created_tr = document.createElement('tr');
    created_tr.className = 'tr';
    created_tr.innerHTML = '<td><select>' +
        '<option value="0">ders giriniz</option>' +
        // '<option value="1">ders giriniz</option>'+
        // '<option value="2">ders giriniz</option>'+
        // '<option value="3">ders giriniz</option>'+
        // '<option value="4">ders giriniz</option>'+
        '</select></td>' +
        '<td><input type="text" class="txt" maxlength="5"></td>' +
        '<td><select class="sc">' +
        '<option value="2">2</option>' +
        '<option value="0">0</option>' +
        '<option value="1">1</option>' +
        '<option value="3">3</option>' +
        '<option value="4">4</option>' +
        '<option value="5">5</option>' +
        '<option value="6">6</option>' +
        '<option value="7">7</option>' +
        '<option value="8">8</option>' +
        '<option value="9">9</option>' +
        '<option value="10">10</option>' +
        '<option value="11">11</option>' +
        '<option value="12">12</option>' +
        '<option value="13">13</option>' +
        '<option value="14">14</option>' +
        '<option value="15">15</option>' +
        '<option value="16">16</option>' +
        '<option value="17">17</option>' +
        '<option value="18">18</option>' +
        '<option value="19">19</option>' +
        '</select></td>';
    if (li_limit.length < 15) {
        table.appendChild(created_tr);
    }
    //console.log(li_limit.length);
    //console.log(created_tr);
});
var hesap = document.querySelector('.account');

setInterval(function() {
    var inpVal = document.querySelectorAll('.txt');
    var scVal = document.querySelectorAll('.sc');
    var total = 0,
        i,
        scCarp = 1,
        scTotal = 0,
        total = 0,
        ort = 0;
    var yaz = document.querySelector('.yazdir');
    for (i = 0; i < inpVal.length; i++) {
        var val = inpVal[i].value;
        if (val != "" && val != " " && val != "  " && val != "   ") {
            val = Number(val);
            if (typeof val === 'number') {
                if (val >= 0 && val <= 100) {
                    scCarp = scVal[i].value * inpVal[i].value;
                    total += scCarp;
                    scTotal += Number(scVal[i].value);
                    ort = total / scTotal;
                }
            }
        }
    }
    yaz.innerHTML = ort.toFixed(2);
    //console.log(ort);
}, 1000)

// setInterval(function() {
//     var sayac = 0;
//     var inpVal = document.querySelectorAll('.txt');
//     for (i = 0; i < inpVal.length; i++) {
//         if (inpVal[i].value != "") {
//             sayac++;
//             var v = inpVal[i].value;
//             if (v < 0 || v > 100) {
//                 inpVal[i].parentElement.style.borderBottomColor = "red";
//             } else if (v.length == 0) {
//                 inpVal[i].parentElement.style.borderBottomColor = "DeepSkyBlue";
//             } else {
//                 inpVal[i].parentElement.style.borderBottomColor = "DeepSkyBlue";
//             }
//         }
//     }
// }, 1000)

document.querySelector('.btn-hesap').addEventListener('click', function(e) {
    e.preventDefault();
})