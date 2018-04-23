/**
 * Created by Administrator on 2016/7/5.
 */
window .onload=function(){
    //顶部右边导航栏我的欢go网
    var mygo=document.getElementById("mygo");
    var myGo1=document.getElementById("myGo1");
    mygo.onmouseover=function(){
        mygo.style.borderLeft="1px solid gray";
        mygo.style.borderRight="1px solid gray";
        mygo.style.backgroundColor="white";
        myGo1.style.backgroundColor="white";
        myGo1.style.display="block";
    };
    mygo.onmouseout=function(){
        myGo1.style.display="none";
        mygo.style.backgroundColor="#fafafa";
        mygo.style.borderLeft="none";
        mygo.style.borderRight="none";
    };

    //顶部右边导航栏消费者帮助中心
    var cusHelp=document.getElementById("cusHelp");
    var customerHelp=document.getElementById("customer-help");
    cusHelp.onmouseover=function(){
        cusHelp.style.borderLeft="1px solid gray";
        cusHelp.style.borderRight="1px solid gray";
        cusHelp.style.backgroundColor="white";
        customerHelp.style.backgroundColor="white";
        customerHelp.style.display="block";
    };
    cusHelp.onmouseout=function(){
        customerHelp.style.display="none";
        cusHelp.style.borderLeft="none";
        cusHelp.style.borderRight="none";
        cusHelp.style.backgroundColor="#fafafa";
    };

    //顶部右边导航栏欢go客户端
    var customer=document.getElementById("customer");
    var customerPhoto=document.getElementById("customer-photo");
    customer.onmouseover=function(){
        customerPhoto.style.display="block";
    };
    customer.onmouseout=function(){
        customerPhoto.style.display="none";
    };

    //窗帘效果
    var chuanglian=document.getElementById("head-ad");
    var divHeight=chuanglian.offsetHeight;
    var showDiv=function(){
        if(divHeight<65)
        {
            divHeight++;
            chuanglian.style.height=divHeight+"px";
        }
        else
        {
            clearInterval(time);
        }
        if(divHeight>25)
        {
            adShut.style.display="block";
        }
    };
    var time=setInterval(showDiv,20);

    var adShut=document.getElementById("head-ad-content");
    adShut.onclick=function(){
        var closeDiv=function(){
            if(divHeight>0)
            {
                divHeight--;
                chuanglian.style.height=divHeight+"px";
            }
            else
            {
                clearInterval(time1);
            }
            if(divHeight<25)
            {
                adShut.style.display="none";
            }
        };
        var time1=setInterval(closeDiv,20);
    };

    //城市切换
    var city=document.getElementById("city");
    var cityTab=document.getElementById("cityTab");
    city.onmouseover=function(){
        cityTab.style.display="block";
    };
    city.onmouseout=function(){
        cityTab.style.display="none";
    };

    //搜索栏切换
    var searchProduct=document.getElementById("search-product");
    var searchHelp=document.getElementById("search-help");
    var searchContent=document.getElementById("search-content");
    searchProduct.onmouseover=function(){
        searchProduct.style.cursor="pointer";
    };
    searchProduct.onclick=function(){
        searchProduct.style.backgroundColor="#FF8201";
        searchProduct.style.color="white";
        searchHelp.style.backgroundColor="white";
        searchHelp.style.color="#ABABAB";
        searchContent.value="无线上网卡";
    };
    searchHelp.onmouseover=function(){
        searchHelp.style.cursor="pointer";
    };
    searchHelp.onclick=function(){
        searchHelp.style.backgroundColor="#FF8201";
        searchHelp.style.color="white";
        searchProduct.style.backgroundColor ="white";
        searchProduct.style.color ="#ABABAB";
        searchContent.value=" ";
    };

    //搜索框
    searchContent.onclick=function(){
        searchContent.value=" ";
        searchContent.style.outline="none";
    };

    //导航栏
   var amove=document.getElementsByClassName("a-move");
    for(var i=0;i<amove.length;i++)
    {
        amove[i].onmouseover=function(){
            this.style.borderLeft="5px solid white";
            this.style.fontWeight="bold";
        };
        amove[i].onmouseout=function(){
            this.style.borderLeft="0px solid white";
            this.style.fontWeight="normal";
        };
    }

    //图片轮播
    var imgs=document.getElementsByName("imgs");
    var imgBtn=document.getElementsByName("imgs-btn");
    var index=0;
    var show=function(){
        for(var i=0;i<imgs.length;i++)
        {
            if(index==i)
            {
                imgs[index].style.display="block";
                imgBtn[i].style.backgroundColor="#fff";
                imgBtn[i].style.color ="#fff";
            }
            else
            {
                imgs[i].style.display="none";
                imgBtn[i].style.backgroundColor="#e5e5e5";
                imgBtn[i].style.color ="#e5e5e5";
            }
        }
        if(index==imgs.length-1)
        {
            index=0;
        }
        else
        {
            index++;
        }
    };
    var stopTime=setInterval(show,2000);
    for(var i=0;i<imgs.length;i++)
    {
        imgs[i].onmouseover=function(){
            clearInterval(stopTime);
        };
        imgs[i].onmouseout=function(){
            stopTime=setInterval(show,2000);
        };
    }
    for(var i=0;i<imgBtn.length;i++)
    {
        imgBtn[i].onclick=function(){
            this.style.backgroundColor="red";
            index=this.value-1;
            show();
        };
        imgBtn[i].onmouseover=function(){
            this.style.cursor="pointer";
        };
    }

    //产品及服务
    var one=document.getElementById("one");
    var oneContent=document.getElementById("one-content");
    one.onmouseover=function(){
        one.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        one.style.backgroundRepeat="no-repeat";
        one.style.backgroundPosition="0px -95px";
        one.style.backgroundColor="white";
        oneContent.style.display="block";
    };
    one.onmouseout=function(){
        one.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        one.style.backgroundRepeat="no-repeat";
        one.style.backgroundPosition="0px -40px";
        one.style.backgroundColor="#EEF3FA";
        oneContent.style.display="none";
    };
    oneContent.onmouseover=function(){
        one.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        one.style.backgroundRepeat="no-repeat";
        one.style.backgroundPosition="0px -95px";
        one.style.backgroundColor="white";
        oneContent.style.display="block";
    };
    oneContent.onmouseout=function(){
        one.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        one.style.backgroundRepeat="no-repeat";
        one.style.backgroundPosition="0px -40px";
        one.style.backgroundColor="#EEF3FA";
        oneContent.style.display="none";
    };
    var two=document.getElementById("two");
    var twoContent=document.getElementById("two-content");
    two.onmouseover=function(){
        two.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        two.style.backgroundRepeat="no-repeat";
        two.style.backgroundPosition="0px -205px";
        two.style.backgroundColor="white";
        twoContent.style.display="block";
    };
    two.onmouseout=function(){
        two.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        two.style.backgroundRepeat="no-repeat";
        two.style.backgroundPosition="0px -150px";
        two.style.backgroundColor="#EEF3FA";
        twoContent.style.display="none";
    };
    twoContent.onmouseover=function(){
        two.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        two.style.backgroundRepeat="no-repeat";
        two.style.backgroundPosition="0px -205px";
        two.style.backgroundColor="white";
        twoContent.style.display="block";
    };
    twoContent.onmouseout=function(){
        two.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        two.style.backgroundRepeat="no-repeat";
        two.style.backgroundPosition="0px -150px";
        two.style.backgroundColor="#EEF3FA";
        twoContent.style.display="none";
    };
    var three=document.getElementById("three");
    var threeContent=document.getElementById("three-content");
    three.onmouseover=function(){
        three.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        three.style.backgroundRepeat="no-repeat";
        three.style.backgroundPosition="0px -315px";
        three.style.backgroundColor="white";
        threeContent.style.display="block";
    };
    three.onmouseout=function(){
        three.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        three.style.backgroundRepeat="no-repeat";
        three.style.backgroundPosition="0px -260px";
        three.style.backgroundColor="#EEF3FA";
        threeContent.style.display="none";
    };
    threeContent.onmouseover=function(){
        three.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        three.style.backgroundRepeat="no-repeat";
        three.style.backgroundPosition="0px -315px";
        three.style.backgroundColor="white";
        threeContent.style.display="block";
    };
    threeContent.onmouseout=function(){
        three.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        three.style.backgroundRepeat="no-repeat";
        three.style.backgroundPosition="0px -260px";
        three.style.backgroundColor="#EEF3FA";
        threeContent.style.display="none";
    };
    var four=document.getElementById("four");
    var fourContent=document.getElementById("four-content");
    four.onmouseover=function(){
        four.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        four.style.backgroundRepeat="no-repeat";
        four.style.backgroundPosition="0px -425px";
        four.style.backgroundColor="white";
        fourContent.style.display="block";
    };
    four.onmouseout=function(){
        four.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        four.style.backgroundRepeat="no-repeat";
        four.style.backgroundPosition="0px -370px";
        four.style.backgroundColor="#EEF3FA";
        fourContent.style.display="none";
    };
    fourContent.onmouseover=function(){
        four.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        four.style.backgroundRepeat="no-repeat";
        four.style.backgroundPosition="0px -425px";
        four.style.backgroundColor="white";
        fourContent.style.display="block";
    };
    fourContent.onmouseout=function(){
        four.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        four.style.backgroundRepeat="no-repeat";
        four.style.backgroundPosition="0px -370px";
        four.style.backgroundColor="#EEF3FA";
        fourContent.style.display="none";
    };
    var five=document.getElementById("five");
    var fiveContent=document.getElementById("five-content");
    five.onmouseover=function(){
        five.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        five.style.backgroundRepeat="no-repeat";
        five.style.backgroundPosition="0px -535px";
        five.style.backgroundColor="white";
        fiveContent.style.display="block";
    };
    five.onmouseout=function(){
        five.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        five.style.backgroundRepeat="no-repeat";
        five.style.backgroundPosition="0px -480px";
        five.style.backgroundColor="#EEF3FA";
        fiveContent.style.display="none";
    };
    fiveContent.onmouseover=function(){
        five.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        five.style.backgroundRepeat="no-repeat";
        five.style.backgroundPosition="0px -535px";
        five.style.backgroundColor="white";
        fiveContent.style.display="block";
    };
    fiveContent.onmouseout=function(){
        five.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        five.style.backgroundRepeat="no-repeat";
        five.style.backgroundPosition="0px -480px";
        five.style.backgroundColor="#EEF3FA";
        fiveContent.style.display="none";
    };
    var six=document.getElementById("six");
    var sixContent=document.getElementById("six-content");
    six.onmouseover=function(){
        six.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        six.style.backgroundRepeat="no-repeat";
        six.style.backgroundPosition="0px -645px";
        six.style.backgroundColor="white";
        sixContent.style.display="block";
    };
    six.onmouseout=function(){
        six.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        six.style.backgroundRepeat="no-repeat";
        six.style.backgroundPosition="0px -590px";
        six.style.backgroundColor="#EEF3FA";
        sixContent.style.display="none";
    };
    sixContent.onmouseover=function(){
        six.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        six.style.backgroundRepeat="no-repeat";
        six.style.backgroundPosition="0px -645px";
        six.style.backgroundColor="white";
        sixContent.style.display="block";
    };
    sixContent.onmouseout=function(){
        six.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        six.style.backgroundRepeat="no-repeat";
        six.style.backgroundPosition="0px -590px";
        six.style.backgroundColor="#EEF3FA";
        sixContent.style.display="none";
    };
    var seven=document.getElementById("seven");
    var sevenContent=document.getElementById("seven-content");
    seven.onmouseover=function(){
        seven.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        seven.style.backgroundRepeat="no-repeat";
        seven.style.backgroundPosition="0px -755px";
        seven.style.backgroundColor="white";
        sevenContent.style.display="block";
    };
    seven.onmouseout=function(){
        seven.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        seven.style.backgroundRepeat="no-repeat";
        seven.style.backgroundPosition="0px -700px";
        seven.style.backgroundColor="#EEF3FA";
        sevenContent.style.display="none";
    };
    sevenContent.onmouseover=function(){
        seven.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        seven.style.backgroundRepeat="no-repeat";
        seven.style.backgroundPosition="0px -755px";
        seven.style.backgroundColor="white";
        sevenContent.style.display="block";
    };
    sevenContent.onmouseout=function(){
        seven.style.backgroundImage="url('../images/icon-189-indexv2.png')";
        seven.style.backgroundRepeat="no-repeat";
        seven.style.backgroundPosition="0px -700px";
        seven.style.backgroundColor="#EEF3FA";
        sevenContent.style.display="none";
    };

    //欢享服务和超值购切换
    var share=document.getElementById("photo-top-left");
    var brought=document.getElementById("photo-top-right");
    var shareContent1=document.getElementById("photo-top-leftContent1");
    var broughtContent1=document.getElementById("photo-top-rightContent1");
    share.onmouseover=function(){
        share.style.cursor="pointer";
        broughtContent1.style.display="none";
        shareContent1.style.display ="block";
        share.style.backgroundImage="url('../images/icon-fn1.png')";
        share.style.backgroundPosition="-5px 5px";
        share.style.color="#FFAD00";
        brought.style.backgroundImage="url('../images/icon-fn2.png')";
        brought.style.backgroundPosition="-5px 0px";
        brought.style.color="gray";
    };
    brought.onmouseover=function(){
        brought.style.cursor="pointer";
        brought.style.backgroundImage="url('../images/icon-fn2.png')";
        brought.style.backgroundPosition="-5px -35px";
        brought.style.color="#FFAD00";
        shareContent1.style.display="none";
        broughtContent1.style.display="block";
        share.style.backgroundImage="url('../images/icon-fn1.png')";
        share.style.backgroundPosition="-5px -32px";
        share.style.color="gray";
    };

    //手机 流量 宽带 固话切换效果
    var shouji=document.getElementById("shouji");
    var liuliang=document.getElementById("liuliang");
    var kuandai=document.getElementById("kuandai");
    var guhua=document.getElementById("guhua");
    var chongzhi=document.getElementById("chongzhi");
    var haoma=document.getElementById("haoma");
    var haoma1=document.getElementById("haoma1");
    var jine=document.getElementById("jine");
    shouji.onclick=function(){
        shouji.style.color="orange";
        liuliang.style.color ="gray";
        kuandai.style.color ="gray";
        guhua.style.color ="gray";
        chongzhi.style.display="block";
        haoma.style.display ="block";
        haoma1.style.display ="none";
        jine.style.display ="block";
    };
    liuliang.onclick =function(){
        liuliang.style.color ="orange";
        shouji.style.color ="gray";
        kuandai.style.color ="gray";
        guhua.style.color ="gray";
        chongzhi.style.display="block";
        haoma.style.display ="block";
        haoma1.style.display ="none";
        jine.style.display ="none";
    };
    kuandai.onclick=function(){
        kuandai.style.color ="orange";
        shouji.style.color ="gray";
        liuliang.style.color ="gray";
        guhua.style.color ="gray";
        chongzhi.style.display="block";
        haoma.style.display ="block";
        haoma1.style.display ="none";
        jine.style.display ="block";
    };
    guhua.onclick=function(){
        guhua.style.color ="orange";
        shouji.style.color ="gray";
        liuliang.style.color ="gray";
        kuandai.style.color ="gray";
        chongzhi.style.display="block";
        haoma.style.display ="none";
        haoma1.style.display ="block";
        jine.style.display ="block";
    };

    //银行卡充值和卡密充值切换效果
    var idCard=document.getElementById("idCard");
    var idPwd=document.getElementById("idPwd");
    var yinhang=document.getElementById("yinhang");
    var kami=document.getElementById("kami");
    idCard.onclick =function(){
        yinhang.style.color ="orange";
        kami.style.color ="gray";
    };
    idPwd.onclick =function(){
        yinhang.style.color ="gray";
        kami.style.color ="orange";
    };
    //跑马灯
    var photoBottom=document.getElementById("photo-bottom-right");
    var information1=document.getElementById("information1");
    var information2=document.getElementById("information2");
    var move=function(){
        if(photoBottom.scrollLeft<information1.offsetWidth)
        {
            photoBottom.scrollLeft++;
        }
        else
        {
            photoBottom.scrollLeft=0;
        }
    };
    var clearTime=setInterval(move,20);
    var gonggao=document.getElementsByName("gonggao");
    for(var i=0;i<gonggao.length;i++)
    {
        gonggao[i].onmouseover =function(){
            clearInterval(clearTime);
            this.style.color="orange";
        };
        gonggao[i].onmouseout=function(){
            clearTime=setInterval (move,20);
            this.style.color="gray";
        };
    }

    //图片移动
    var jkmove=document.getElementById("jk-left-middle");
    jkmove.onmouseover =function(){
        jkmove.style.backgroundPosition="-5px 25px";
    };
    jkmove.onmouseout =function(){
       jkmove.style.backgroundPosition="10px 25px";
    };
    var klmove=document.getElementById("kl-left-middle");
    klmove.onmouseover=function(){
        klmove.style.backgroundPosition="-5px 25px";
    };
    klmove.onmouseout=function(){
        klmove.style.backgroundPosition="10px 25px";
    };
    var swmove=document.getElementById("sw-left-middle");
    swmove.onmouseover=function(){
        swmove.style.backgroundPosition="-5px 25px";
    };
    swmove.onmouseout=function(){
        swmove.style.backgroundPosition="10px 25px";
    };
    var xymove=document.getElementById("xy-left-middle");
    xymove.onmouseover=function(){
        xymove.style.backgroundPosition="-5px 25px";
    };
    xymove.onmouseout=function(){
        xymove.style.backgroundPosition="10px 25px";
    };
    var cjmove=document.getElementById("cj-left-middle");
    cjmove.onmouseover=function(){
        cjmove.style.backgroundPosition="-5px 25px";
    };
    cjmove.onmouseout=function(){
        cjmove.style.backgroundPosition="10px 25px";
    };
    var cxmove=document.getElementById("cx-left-middle");
    cxmove.onmouseover=function(){
        cxmove.style.backgroundPosition="-5px 25px";
    };
    cxmove.onmouseout=function(){
        cxmove.style.backgroundPosition="10px 25px";
    };
    var photoMove=document.getElementsByName("move");
    for(var i=0;i<photoMove.length;i++)
    {
        photoMove[i].onmouseover=function(){
            this.style.marginLeft="-10px";
        };
        photoMove[i].onmouseout=function(){
            this.style.marginLeft="0px";
        }
    }

    //底部欢go网和合作伙伴的切换
    var goLeft=document.getElementById("go-left");
    var goRight=document.getElementById("go-right");
    var leftContent=document.getElementById("go-left-content");
    var rightContent=document.getElementById("go-right-content");
    goLeft.onclick=function(){
        goLeft.style.fontWeight="bold";
        leftContent.style.display="block";
        rightContent.style.display="none";
        goRight.style.fontWeight="normal";
    };
    goRight.onclick=function(){
        goRight.style.fontWeight="bold";
        rightContent.style.display="block";
        leftContent.style.display="none";
        goLeft.style.fontWeight="normal";
    }
};