window.onload = function () {

    /********************移入自动下拉购物车********************************/
    var cart = document.querySelector('.cart');
    var hiddOne = item1.children[0];
    var cartImg = document.querySelector('.cart img');

    cart.onmouseover = function () {
        hiddOne.style.display = 'block';
        hiddOne.style.height = '0px';
        hiddOne.style.overflow = 'hidden';
        cart.style.background = 'white';
        cart.style.color = '#ff6700';
        cart.style.borderRadius = '3px';
        var imgSrc = cartImg.getAttribute('src');
        cartImg.src = imgSrc.replace(/8/, '6');
        var timer = setInterval(function () {
            hiddOne.style.height = hiddOne.offsetHeight + 100 + 'px';
            var t = parseInt(hiddOne.style.height);
            if (t >= 80) {
                clearInterval(timer);
            }
        }, 100);
    }
    cart.onmouseout = function () {
        hiddOne.style.display = 'none';
        cart.style = '';
        var imgSrc = cartImg.getAttribute('src');
        cartImg.src = imgSrc.replace(/6/, '8');
    }
    hiddOne.onmouseover = function () {
        hiddOne.style.display = 'block';
        cart.style.background = 'white';
        cart.style.color = '#ff6700';
        cart.style.borderRadius = '3px';
        var imgSrc = cartImg.getAttribute('src');
        cartImg.src = imgSrc.replace(/8/, '6');
    }
    hiddOne.onmouseout = function () {
        hiddOne.style.display = 'none';
        cart.style.background = '#424242';
        cart.style.color = '#b0b0b0';
        var imgSrc = cartImg.getAttribute('src');
        cartImg.src = imgSrc.replace(/6/, '8');
    }
    /**************************点击显示下拉*************************************/
    //搜索框鼠标点击事件
    var inputOne = document.querySelector('.first-sec-inputone');
    var allInput = document.querySelector('.first-sec-input');
    var hiddTwo = document.querySelector('.hidd-two');
    var aMi = document.querySelector('.first-sec-input-a');
    //console.log(aMi);
    inputOne.onfocus = function () {
        allInput.style.borderColor = '#ff6700';
        hiddTwo.style.display = 'block';
        aMi.style.display = 'none';
    }
    inputOne.onblur = function () {
        allInput.style.borderColor = 'none';
        hiddTwo.style.display = 'none';
        aMi.style.display = 'block';
    }




/***********************横向手动轮播***************************************/
    var leftBtn = document.querySelector('.leftbtn');
    var rightBtn = document.querySelector('.rightbtn');
    var picLi = document.querySelectorAll('.cut li');
    var picUl = document.querySelector('.cut');
    var currentLeft = parseInt(picUl.style.left);
    //console.log(rightBtn);
    //向右移动的按钮
    var length = picLi.length;
    var picImg = document.querySelector('.cut img');
    //console.log(picImg);
    leftBtn.onclick = function(){
        //console.log(picUl.offsetLeft);
       currentLeft += 1170;
        //console.log(currentLeft);
        if(currentLeft >= 0){
            currentLeft = 0;
        }
        picUl.style.left = currentLeft + 'px';
    }
    //向左移动的按钮
    rightBtn.onclick = function(){
        currentLeft -= 1170;
        console.log(currentLeft);
        if(currentLeft <= -3510){
            currentLeft = -3510;
        }
        picUl.style.left = currentLeft + 'px';
    }

    /*********************TAB切换**************************************/

    var hot = document.querySelector('.hot');
    var tv = document.querySelector('.tv');
    var com = document.querySelector('.com');
    var hom = document.querySelector('.hom');
    var homeTv = document.querySelector('.fifth-sec-hometv');
    var homeMv = document.querySelector('.fifth-sec-homemv');
    var homeCom = document.querySelector('.fifth-sec-homecom');
    var homeHom = document.querySelector('.fifth-sec-homehom');
    //console.log(homeTv);
    hot.onmouseover = function () {
        homeTv.style.display = 'block';
        homeMv.style.display = 'none';
        homeCom.style.display = 'none';
        homeHom.style.display = 'none';
        hot.style.color = '#ff6700';
        hot.style.borderBottom = 'block';
    }
    tv.onmouseover = function () {
        homeTv.style.display = 'none';
        homeMv.style.display = 'block';
        homeCom.style.display = 'none';
        homeHom.style.display = 'none';
        hot.style.color = 'black';
        hot.style.borderBottom = 'none';
    }
    com.onmouseover = function () {
        homeTv.style.display = 'none';
        homeMv.style.display = 'none';
        homeCom.style.display = 'block';
        homeHom.style.display = 'none';
        hot.style.color = 'black';
        hot.style.borderBottom = 'none';
    }
    hom.onmouseover = function () {
        homeTv.style.display = 'none';
        homeMv.style.display = 'none';
        homeCom.style.display = 'none';
        homeHom.style.display = 'block';
        hot.style.color = 'black';
        hot.style.borderBottom = 'none';
    }
    /********************TAB切换2***********************************/

    var powerOne = document.querySelector('.power1');
    var powerTwo = document.querySelector('.power2');
    var powerThree = document.querySelector('.power3');
    var powerFour = document.querySelector('.power4');
    var powerFive = document.querySelector('.power5');
    //console.log(powerOne);
    var sixOne = document.querySelector('.sixth-sec-hometv');
    var sixTwo = document.querySelector('.sixth-sec-hometv1');
    var sixThree = document.querySelector('.sixth-sec-hometv2');
    var sixFour = document.querySelector('.sixth-sec-hometv3');
    var sixFive = document.querySelector('.sixth-sec-hometv4');
    //console.log(sixOne);
    powerOne.onmouseover = function () {
        sixOne.style.display = 'block';
        sixTwo.style.display = 'none';
        sixThree.style.display = 'none';
        sixFour.style.display = 'none';
        sixFive.style.display = 'none';
        powerOne.style.color = '#ff6700';
        powerOne.style.borderBottom = 'block';
    }
    powerTwo.onmouseover = function () {
        sixOne.style.display = 'none';
        sixTwo.style.display = 'block';
        sixThree.style.display = 'none';
        sixFour.style.display = 'none';
        sixFive.style.display = 'none';
        powerOne.style.color = 'black';
        powerOne.style.borderBottom = 'none';
    }
    powerThree.onmouseover = function () {
        sixOne.style.display = 'none';
        sixTwo.style.display = 'none';
        sixThree.style.display = 'block';
        sixFour.style.display = 'none';
        sixFive.style.display = 'none';
        powerOne.style.color = 'black';
        powerOne.style.borderBottom = 'none';
    }
    powerFour.onmouseover = function () {
        sixOne.style.display = 'none';
        sixTwo.style.display = 'none';
        sixThree.style.display = 'none';
        sixFour.style.display = 'block';
        sixFive.style.display = 'none';
        powerOne.style.color = 'black';
        powerOne.style.borderBottom = 'none';
    }
    powerFive.onmouseover = function () {
        sixOne.style.display = 'none';
        sixTwo.style.display = 'none';
        sixThree.style.display = 'none';
        sixFour.style.display = 'none';
        sixFive.style.display = 'block';
        powerOne.style.color = 'black';
        powerOne.style.borderBottom = 'none';
    }

/*******************调用cut函数***************************************/
    //a 是lis
    //b 是ul
    //c 是lis.length
    function cut(a,b,c,d) {
        for(var i = 0;i < c; i++){
            a[i].style = '';
            b[i].style = '';
        }
        a[d].style.color = '#ff6700';
        a[d].style.borderColor = '#ff6700';
        b[d].style.display = 'block';
    }

    //搭配

    var seventh_sec_lis,seventh_sec_ul,seventh_sec_lis_len;
    seventh_sec_lis = document.querySelectorAll('.seventh-sec .seventh-sec-top ul li');
    seventh_sec_ul = document.querySelectorAll('.seventh-sec .seventh-sec-hometv');

   // console.log(seventh_sec_lis);

    for(var i = 0; i < 4; i++){
        seventh_sec_lis[i].index = i;
        seventh_sec_lis[i].onmouseover = function () {
          cut(seventh_sec_lis, seventh_sec_ul, 4, this.index);
        }
    }
    /*******************配件**************************************/

    var eighth_sec_lis,eighth_sec_ul,eighth_sec_lis_len;
    eighth_sec_lis = document.querySelectorAll('.eighth-sec .eighth-sec-top ul li');
    eighth_sec_ul = document.querySelectorAll('.eighth-sec .eighth-sec-hometv');

    //console.log(eighth_sec_lis);

    for(var i = 0; i < 4; i++){
        eighth_sec_lis[i].index = i;
        eighth_sec_lis[i].onmouseover = function () {
           cut(eighth_sec_lis, eighth_sec_ul, 4, this.index);
        }
    }
/************************周边**********************************/
var ninth_sec_lis,ninth_sec_ul,ninth_sec_lis_len;
    ninth_sec_lis = document.querySelectorAll('.ninth-sec .ninth-sec-top ul li');
    ninth_sec_ul = document.querySelectorAll('.ninth-sec .ninth-sec-hometv');

    //console.log(ninth_sec_lis);

    for(var i = 0; i < 5; i++){
        ninth_sec_lis[i].index = i;
        ninth_sec_lis[i].onmouseover = function () {
            cut(ninth_sec_lis, ninth_sec_ul, 5, this.index);
        }
    }
    /***********************************************/
    var second_sec_lis,second_sec_ul,second_sec_lis_len;
    second_sec_lis = document.querySelectorAll('.first-sec-ul li');
    second_sec_ul = document.querySelectorAll('.setup ul');

    //console.log(second_sec_lis);

    for(var i = 0; i < 8; i++){
        second_sec_lis[i].index = i;
        second_sec_lis[i].onmouseover = function () {
            cut(second_sec_lis, second_sec_ul, 8, this.index);
        }
    }

    for(var i = 0; i < 8; i++){
        second_sec_lis[i].index = i;
        second_sec_lis[i].onmouseout = function () {
            second_sec_ul[this.index].style.display = 'none';
        }
    }
/***************************LEFT tab切换************************************************/
    var secondLis,secondUl,secondLisLen;
    secondLis = document.querySelectorAll('.second-sec-ul li');
    hiddThree = document.querySelectorAll('.hidd-three ul');

    console.log(secondLis);

    for(var i = 0; i < 10; i++){
        secondLis[i].index = i;
        secondLis[i].onmouseover = function () {
            cut(secondLis, hiddThree, 10, this.index);
        }
    }

    for(var i = 0; i < 10; i++){
        secondLis[i].index = i;
        secondLis[i].onmouseout = function () {
            hiddThree[this.index].style.display = 'none';
        }
    }




    /**************************轮播图********************************************/
    //var listOne = document.querySelector('.second-sec-list a:nth-child(1)');
    //var secImgone =document.querySelector('.second-sec-img img:nth-child(1)');
    var list =document.querySelectorAll('.second-sec-list a');
    var secImg = document.querySelectorAll('.second-sec-img img');


    for(var i = 0; i < 5; i++){
        list[i].index = i;
        list[i].onclick = function () {
            for(var j = 0; j < 5; j++){
                list[j].className = '';
                secImg[j].style.opacity = '0';
                secImg[j].style.zIndex = '1';
            }
            list[this.index].className = 'active';
            console.log(this.index);
            secImg[this.index].style.opacity = '1';
            secImg[this.index].style.zIndex = '-1';

        }
    }
/*********************小米闪购********************************/
    //小米闪购倒计时
    var e_h = document.querySelector('#e-h');
    var e_m = document.querySelector('#e-m');
    var e_s = document.querySelector('#e-s');
    var time = 1800;
    //console.log(e_h);
    //console.log(e_m);
    //console.log(e_s);
    var timer = setInterval(updateTime,1000);

    function updateTime() {
        time--;
        //console.log(time);
        var h = parseInt(time / 3600) ;
        var m = parseInt(time / 60 % 60);
        var s = parseInt(time % 60);

        if(time < 0){
            clearInterval(timer);
        }

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        e_h.innerHTML = h;
        e_m.innerHTML = m;
        e_s.innerHTML = s;
    }

    //小米闪购倒计时
    var h = document.querySelector('#hour');
    var m = document.querySelector('#m');
    var s = document.querySelector('#s');
    var time = 600;
    //console.log(h);
    //console.log(m);
    //console.log(s);
    var timer = setInterval(updateTime,1000);

    function updateTime() {
        time-=0.5;
        console.log(time);
        var hh = parseInt(time / 3600) ;
        var mm = parseInt(time / 60 % 60);
        var ss = parseInt(time % 60);

        if(time < 0){
            clearInterval(timer);
        }

        hh = hh < 10 ? '0' + hh : hh;
        mm = mm < 10 ? '0' + mm : mm;
        ss = ss < 10 ? '0' + ss : ss;

        h.innerHTML = hh;
        m.innerHTML = mm;
        s.innerHTML = ss;
    }


}
