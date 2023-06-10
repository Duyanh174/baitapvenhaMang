// BAITAP1 
function getElement(selector) {
    return document.querySelector(selector)
}


getElement('#btnThemSo').onclick = function getNumber() {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    console.log("arrString: ", nums);


    getElement('#chuoiCacSo').innerHTML = 'Mảng của bạn là: ' + arrString;
}

// BAITAP1 
getElement('#btnSoDuong').onclick = function () {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    // console.log(nums.length);
    var total = 0
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        if (value > 0) {
            total += value
        }

    }
    getElement('#tongCacSoDuong').innerHTML = 'Tổng các số dương là: ' + total;
}
//BAITAP2
getElement('#btnDemSoDuong').onclick = function () {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    // console.log(nums.length);
    var total = []
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var numberLength = []
        if (value > 0) {
            numberLength += value;
            total.push(value);
        }
        console.log(total.length);
    }
    getElement('#demCacSoDuong').innerHTML = 'số lượng số dương là: ' + total.length;
}


//BAI TAP 3
getElement('#btnSonhoNhat').onclick = function () {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    var min = nums[0]

    var total = 0
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        if (value < min) {
            min = value;
            total = i
        }

    }
    getElement('#soNhoNhat').innerHTML = 'Số nhỏ nhất là: ' + min;
}

// BAI TAP 4
getElement('#btnSoDuongNhoNhat').onclick = function () {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    var min = nums[0]

    var total = 0
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        if (value < min && value > 0) {
            min = value;
            total = i
        }

    }
    getElement('#soDuongNhoNhat').innerHTML = 'Số dương nhỏ nhất là: ' + min;
}

//BAI TAP 5
getElement('#btnSoChanCuoiCung').onclick = function () {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    var soChan = 0;

    // var total = 0
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        if (value % 2 === 0) {
            soChan = value;
            getElement('#soChanCuoiCung').innerHTML = 'Số chẵn cuối cùng: ' + soChan;
            return
        }

    }

    getElement('#soChanCuoiCung').innerHTML = '-1 '
}

//BAITAP 6
// function thayDoi(a,b){
//     // var nhapSo = getElement('#numbers').value;
//     // var arrString =  nhapSo.split(',');

//     // function toNumber(value){
//     //     return Number(value);
//     // }
//     // var nums = arrString.map(toNumber)
//     var e = nums[a];
//     nums[a] = nums[b];
//     nums[b] = e
//     return e
// }


getElement('#btnDoiCho').onclick = function thayDoi() {
    function thayDoi(a, b) {
        var nhapSo = getElement('#numbers').value;
        var arrString = nhapSo.split(',');

        function toNumber(value) {
            return Number(value);
        }
        var nums = arrString.map(toNumber)
        var e = nums[a];

        nums[a] = nums[b];

        nums[b] = e

        getElement('#doiChoMang').innerHTML = 'mảng sau khi đổi là: ' + nums;
        return

    }

    var viTri1 = getElement('#soThuNhat').value;
    var viTri2 = getElement('#soThuHai').value;


    var swapNums = thayDoi(viTri1, viTri2)
    // var getNums = getElement('#numbers').value;
    //     var arrString =  getNums.split(',');

    //     function toNumber(value){
    //         return Number(value);
    //     }
    //     var nums2 = arrString.map(toNumber)

    // var area1 = []
    // var area2 = []
    // for (var i = 0 ; i < nums2.length; i++  ){
    //     var value = nums2[i];
    //     // var numberLength = []
    //     if (value > 0 ){
    //         area1 = nums2[viTri2]
    //         area2 = nums2[viTri1]
    //     }


    // }


    // // var nhapSo = getElement('#numbers').value;
    // // var arrString =  nhapSo.split(',');

    // // function toNumber(value){
    // //     return Number(value);
    // // }
    // var nums = arrString.map(toNumber)
    // console.log(nums(viTri1))
    // ;
    // console.log(nums(viTri2));
    // console.log(nums.length);
}


// BAI TAP 7 

getElement('#btnSoTangDan').onclick = function () {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)


    // var total = 0
    for (var i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                var tangDan = nums[i];
                nums[i] = nums[j];
                nums[j] = tangDan
            }
        }
    }
    // console.log(nums);
    getElement('#soTangDan').innerHTML = nums;
}

//BAI TAP 8


getElement('#btnSoNguyenTo').onclick = function () {

    function soNguyenTo(n) {
        var SNT = 1
        if (n < 2) return SNT = 0;



        for (var i = 2; i < n; i++) {
            if (n % i === 0) {
                SNT = 0;
                break

            }
        }
        return SNT
    }
    
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)


    var total = [];
    for (var i = 0; i < nums.length; i++) {
        if (soNguyenTo(nums[i]) === 1) {
            total.push(nums[i])
            getElement('#soNguyenTo').innerHTML = 'Số nguyên tố đầu tiên là: ' + total[0];
            break
        } else{
            getElement('#soNguyenTo').innerHTML = '-1' 

        }
        
    }

    


}
// BAI TAP 9 
getElement('#btnThemSo1').onclick = function getNumber() {
    var nhapSo = getElement('#getNumbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    console.log("arrString: ", nums);
    
    getElement('#chuoiCacSo1').innerHTML = 'Mảng của bạn là: ' + arrString;
}
getElement('#btnSoNguyen').onclick = function getNumber() {
    var nhapSo = getElement('#getNumbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    
    
    var total = []
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var numberLength = []
        if ( value % 1 == 0 ) {
            numberLength += value;
            total.push(value);
        }
        console.log(total.length);
    }
    getElement('#soNguyen').innerHTML = 'Mảng của bạn là: ' + total.length;



}

//BAI TAP 10
getElement('#btnSoSanh').onclick = function () {
    var nhapSo = getElement('#numbers').value;
    var arrString = nhapSo.split(',');

    function toNumber(value) {
        return Number(value);
    }
    var nums = arrString.map(toNumber)
    // console.log(nums.length);
    var soDuong = []
    var soAm = []
    for (var i = 0; i < nums.length; i++) {
        var value = nums[i];
        var numberLength = []
        if (value > 0) {
            numberLength += value;
            soDuong.push(value);
        }else if (value < 0) {
            numberLength += value;
            soAm.push(value);
        }
        // else if (soDuong.length < soAm.length){
        //     console.log('<');
        // }
            
    }
    // getElement('#demCacSoDuong').innerHTML = 'số lượng số dương là: ' + total.length;
}
