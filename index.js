window.onload=function () {
    let imgs=document.querySelectorAll(".banner .imgs img");
    let dots=document.querySelectorAll(".banner .pager ul li");
    let banner=document.querySelector(".banner .container");
    let btnleft=document.querySelector(".banner .btnleft");
    let btnright=document.querySelector(".banner .btnright");
    // console.log(btnright);
    imgs[0].style.opacity=1;
    dots[0].classList.add("active");
    let flag=true;
    let current=next=0;
    let t=setInterval(move,2000);
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }
        imgs[next].style.opacity=0;
        animate(imgs[current],{opacity:0});
        animate(imgs[next],{opacity:1},function () {
            flag=true;
        });
        dots[current].classList.remove("active");
        dots[next].classList.add("active");
        current=next;
    }
    function movel() {
        next--;
        if(next==-1){
            next=imgs.length-1;
        }
        imgs[next].style.opacity=0;
        animate(imgs[current],{opacity:0});
        animate(imgs[next],{opacity:1},function () {
            flag=true;
        });
        dots[current].classList.remove("active");
        dots[next].classList.add("active");
        current=next;
    }
    banner.onmouseenter=function () {
        clearInterval(t);
    };
    banner.onmouseleave=function () {
        t=setInterval(move,2000);
    };
    btnleft.onclick=function () {
        if(flag==false){
            return;
        }
        flag=false;
        movel();
    };
    btnright.onclick=function () {
        if(flag==false){
            return;
        }
        flag=false;
        move();
    };
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function () {
            for(let j=0;j<dots.length;j++){
                dots[j].classList.remove("active");
                imgs[j].style.opacity=0;
            }
            dots[i].classList.add("active");
            imgs[i].style.opacity=1;
            current=next=i;
        }
    }

    let lis=document.querySelector(".contento ul li");
    let book=document.querySelectorAll(".contento ul li .book .ab");
    let dot=document.querySelectorAll(".contento ul li .pages .ctrile");
    let left=document.querySelector(".contento ul li .control-left");
    let right=document.querySelector(".contento ul li .control-right");
    let widtha=parseInt(getComputedStyle(lis,null).width);
    console.log(book);
    function frist(book,dot,left,right,widtha){
        book[0].style.left=0;
        dot[0].classList.add("activd");
        let p_flag=true;
        let now=down=0;
        // let tt=setInterval(moveLeft,2000);
        function moveR() {
            down++;
            if(down==book.length){
                down=0;
            }
            book[down].style.left=`${widtha}px`;
            animate(book[now],{left:-widtha});
            animate(book[down],{left:0},function () {
                p_flag=true;
            });
            dot[now].classList.remove("activd");
            dot[down].classList.add("activd");
            now=down;
        }
        function moveLeft() {
            down--;
            if(down==-1){
                down=book.length-1;
            }
            book[down].style.left=`-${widtha}px`;
            animate(book[now],{left:widtha});
            animate(book[down],{left:0},function () {
                p_flag=true;
            });
            dot[now].classList.remove("activd");
            dot[down].classList.add("activd");
            now=down;
        }
        left.onclick=function () {
            if(p_flag==false){
                return;
            }
            p_flag=false;
            if(down==0){
                p_flag=true;
                return;
            }
            moveLeft();
        };
        right.onclick = function () {
            if (p_flag == false) {
                return;
            }
            p_flag = false;
            if (down == book.length - 1) {
                p_flag = true;
                return;
            }
            moveR();
        };
        for(let i=0;i<dot.length;i++){
            dot[i].onclick=function () {
                for(let j=0;j<dot.length;j++){
                    dot[j].classList.remove("activd");
                    book[j].style.left=`${widtha}px`;
                }
                dot[i].classList.add("activd");
                book[i].style.left=0;
                now=down=i;
            }
        }
    }
    frist(book,dot,left,right,widtha);
    let book1=document.querySelectorAll(".contento ul li .book.ll .abc");
    let dot2=document.querySelectorAll(".contento ul li .ctrile.ll");
    let left1=document.querySelector(".contento ul li .control-left.ll");
    let right1=document.querySelector(".contento ul li .control-right.ll");
    console.log(right1);
    frist(book1,dot2,left1,right1,widtha);
    let book2=document.querySelectorAll(".contento ul li .book.bb .abcd");
    let dot3=document.querySelectorAll(".contento ul li .ctrile.bb");
    let left2=document.querySelector(".contento ul li .control-left.bb");
    let right2=document.querySelector(".contento ul li .control-right.bb");
    console.log(book2,dot3,left2,right2);
    frist(book2,dot3,left2,right2,widtha);
    let book3=document.querySelectorAll(".contento ul li .book.nn .adcde");
    let dot4=document.querySelectorAll(".contento ul li .ctrile.nn");
    let left3=document.querySelector(".contento ul li .control-left.nn");
    let right3=document.querySelector(".contento ul li .control-right.nn");
    console.log(book3,dot4,left3,right3);
    frist(book3,dot4,left3,right3,widtha);
    //////////////////////////////////////////////////
    let Btnl=document.querySelector(".xm-plain-box .more .before i");
    let Btnr=document.querySelector(".xm-plain-box .more .after i");
    let list1=document.querySelector(".xm-plain-box .bottom ul .list");
    // let loo=document.querySelector(".xm-plain-box .bottom li");
    // let wwh=parseInt(getComputedStyle(loo,null).width);
    let wh=parseInt(getComputedStyle(list1,null).width)/2;
    // console.log(Btnl,Btnr,list1,wh);
    let time1=0;
    Btnr.onclick=function () {
        time1++;
        if(time1==2){
            time1=1;
        }
        list1.style.transform=`translate(${-wh*time1}px)`;
    };
    Btnl.onclick=function () {
        time1--;
        if(time1==-1){
            time1=0;
        }
        list1.style.transform=`translate(${-wh*time1}px)`;
    };















    /////////////////////////////////////////////////////////
    let btnl=document.querySelector(".box-hd .top .liftlight .before i");
    let btnr=document.querySelector(".box-hd .top .liftlight .after i");
    let listx=document.querySelector(".box-hd .bottom ul");
    let w=parseInt(getComputedStyle(listx,null).width)/3;
    console.log(btnl,btnr,listx,w);
    let times=0;
    btnr.onclick=function () {
        times++;
        if(times==3){
            times=2;
        }
        listx.style.transform=`translate(${-w*times}px)`;
    };
    btnl.onclick=function () {
        times--;
        if(times==-1){
            times=0;
        }
        listx.style.transform=`translate(${-w*times}px)`;
    }
};