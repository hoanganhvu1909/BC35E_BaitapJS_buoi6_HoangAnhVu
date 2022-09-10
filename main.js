/**
 * bài 1
 */
function baitap1() {
    var i = 0;
    var S = 0;
    while (S < 10000) {
        i++;
        S = S + i;
    }
    var result = "số nguyên dương nhỏ nhất: " + i;
    document.getElementById("showInfoBaitap1").innerHTML = result;
};

/**
 * bài 2
 */
function tinhTong() {
    var x = document.getElementById("x").value;
    var n = document.getElementById("n").value;
    var s = 0;
    var t = 1;
    var i = 1;

    for (i = 1; i <= n; i++) {
        t = x ** i;
        s += t;
    }
    var result = "Kết quả tính tổng là: " + s;
    document.getElementById("showInfoTinhtong").innerHTML = result;
};

/**
 * bài 3
 */
function baiTap3() {
    var a = 1;
    var n = document.getElementById("numN").value;
    for (i = 1; i <= n; i++) {
        a = a * i;

    }
    var result = "Kết quả là: " + a;
    document.getElementById("showInfoTinhluythua").innerHTML = result;
}

/**
 * bài 4:
 */

function baiTap4() {
    document.getElementById("kq").style.display = "block";
    for (i = 0; i < the.length; i++) {
        if ((i + 1) % 2 == 0) {
            the[i].style.background = "red";
        }
        else {
            the[i].style.background = "blue";
        }
    }
}

/**
 * bài 5
 */
function baiTap5() {
    var thamso = document.getElementById("thamSo").value;
    document.getElementById("showInfoThamso").innerHTML = songuyento(thamso);
    document.getElementById("showInfoDayso").innerHTML = indayso(thamso);
}
function songuyento(thamso) {
    var textSoNT = "";
    if (thamso === 1) {
        return (textSoNT = thamso + " không phải là số nguyên tố")
    }

    for (var i = 2; i < thamso; i++) {
        if (thamso % i === 0) {
            return (textSoNT = thamso + " không phải là số nguyên tố");
        }
    }

    return (textSoNT = thamso + " là số nguyên tố");
};

function indayso(thamso) {
    var dayso = [];
    for (j = 2; j < thamso; j++) {
        if (songuyento(j) === `${j} là số nguyên tố`) {
            dayso.push(j);
        }
    }
    return "Các số nguyên tố nhỏ hơn: " + thamso + " là: " + dayso;
}

