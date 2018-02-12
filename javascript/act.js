//界面载入进度条
$("<progress></progress>").insertAfter($(".deng")).attr("max","100");

$("header").ready(function(){
    $("progress").attr("value","20");
});
$("#myCarousel").ready(function(){
    $("progress").attr("value","50");
});
$(".main").ready(function(){
    $("progress").attr("value","80");
});
$("footer").ready(function(){
    $("progress").attr("value","100").fadeOut(1000);

});

//首页文章隐藏
$(function() {
    if($("#myCarousel").length){
        $("section:gt(4)").css("display","none");
    }
});

//加入收藏
//未实现


//白天、夜间模式
$(function() {
    $(".slider-v1").click(function () {
        $("body").toggleClass("night");
        $("aside .intro").toggleClass("nights");
        $("section,.tab").unbind().toggleClass("nights");
        $(".page-header,.detail-article,.breadcrumb").unbind().toggleClass("nightss");
    });
});


//微信图标显示
$(function() {
    $(".contact li:first").hover(function () {
        $(".weixin").css("display","block");
    },function () {
        $(".weixin").css("display","none");
    });
});

 // 返回顶部滑动效果
 $(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {           
            $('#board').fadeIn();
        } else {
            $('#board').fadeOut();
        }
    });
    $('#goTop').click(function() {
        $('body,html').animate({ scrollTop: 0 }, 500);
    });
});

//图片模态效果
$(function(){
    $("#myCarousel img").click(function(){
        var src=$(this).attr("src");
        var alt=$(this).attr("alt");
        $(".modal").children("img")
        .attr({"src":src,"alt":alt})
        .end()
        .show();
        $(".modal").children(".caption").text(alt);
    });
    $(".close").click(function(){
        $(this).parent().hide();
    });
});

//简易点赞功能,没什么用
$(function() {
    var zan= $(".good span:last").text();
        $(".good").click(function(){
            var newzan=$(".good span:last").text();
            if (newzan==zan) {
               newzan++; 
               $(this).css({"backgroundColor":"#FFA500","color":"#fff"});
            }
             else{
                newzan--;
                $(this).css({"backgroundColor":"#fff","color":"#FFA500"});
             }
              $(".good span:last").text(newzan);
        });
});

//全部文章页面特效
$(function() {
    var $a=$(".breadcrumb li:eq(1)").text();
    if($a=="全部"){

    //标签个数自动计算
    var jsc=$(".javascript-content").length;
    var jqc=$(".jquery-content").length;
    var htc=$(".html-content").length;
    var csc=$(".css-content").length;
    var otc=$(".other-content").length;
    var all=jsc+jqc+htc+csc+otc;
    var $lei=$("aside .summary .btn a");  
    $lei.each(function(){
        var lei=$(this).text();
        switch(lei)
        {
        case ("JavaScript"):
            $(this).siblings().text(jsc);
            break;
        case ("HTML"):
             $(this).siblings().text(htc);
            break;
         case ("CSS"):
             $(this).siblings().text(csc);
            break;
        case ("JQuery"):
             $(this).siblings().text(jqc);
            break;
         case ("全部"):
             $(this).siblings().text(all);
            break;
         case ("其他"):
             $(this).siblings().text(otc);
            break;
        default:
           
        }
     });

    //标签点击返回响应的内容 
      $(".html-btn").click(function(){
        $(".html-content").siblings().css("display","none").end().css("display","block");
        $(".breadcrumb a:last").replaceWith("<a>HTML</a>");
         return false;
    });  
    $(".css-btn").click(function(){ 
       $(".css-content").siblings().css("display","none").end().css("display","block");
       $(".breadcrumb a:last").replaceWith("<a>CSS</a>");
       return false;
    });  
    $(".jquery-btn").click(function(){
       $(".jquery-content").siblings().css("display","none").end().css("display","block");
       $(".breadcrumb a:last").replaceWith("<a>JQuery</a>");
       return false;
    }); 
     $(".javascript-btn").click(function(){
       $(".javascript-content").siblings().css("display","none").end().css("display","block");
       $(".breadcrumb a:last").replaceWith("<a>JavaScript</a>");
       return false;
    });  
     $(".other-btn").click(function(){
       $(".other-content").siblings().css("display","none").end().css("display","block");
       $(".breadcrumb a:last").replaceWith("<a>其他</a>");
       return false;
    }); 

     //自动分页导航
    $("section:gt(4)").css("display","none");
    var section_length=$("section:visible").length;
        section_length/=5;
        var fy_number=Math.ceil(section_length);

    $(".pagination li").click(function(){
        $(this).addClass("active").siblings().removeClass("active");
        var fy=$(this).text();
            fy=fy-0;
        switch(fy){
            case 1:
                    $("section:lt(5)").css("display","block");
                     $("section:gt(4)").css("display","none");
                    break;
             case 2 :  
                    $("section:gt(4):lt(10)").css("display","block");
                     $("section:gt(9)").css("display","none");
                     $("section:lt(5)").css("display","none");
                     break;        
        }
    });
       
 } 
});

//子页面导航条特效
$(function() {
    if ($(".page-header").length) {
        var tt=document.title;
            $tt=tt;
        $(window).scroll(function() {
            var before=$(window).scrollTop();
            if(before>170){
                if( !$(".article-header").length){
                    $(".navbar-header").append("<h1>"+$tt+"</h1>")
                    .children("h1").addClass("article-header"); 
                }
                $(".article-header").css("display","block");
                $("nav.navbar").height("51");
                $(window).scroll(function(){
                    var after=$(window).scrollTop();
                    if(before>after){
                        $("nav.navbar").stop().animate({scrollTop: '0px'}, "fast","linear");
                        before = after;
                    }if (before<after) {
                        $("nav.navbar").stop().animate({scrollTop: '55px'}, "fast","linear");
                        before = after;
                    }
                 } );
            }else{
                 $(".article-header").css("display","none");
                 before=null;
            }
        }); 
    }
    $("#example-navbar-collapse li").hover(function(){
        $(".article-header").css("display","none");
        $("nav.navbar").css("overflow","visible");
    },function(){
        $("nav.navbar").css("overflow","auto");
    });
    $(".navbar-toggle").click(function(){
        if(!$(".article-header").length){
            $("nav.navbar").height("auto");
        }else{
            $(".article-header").css("display","none");
            $("nav.navbar").height("auto");
        }
        
        
    });
 });



//日历代码
$(function() {
    //必要的数据
    //今天的年 月 日 ；本月的总天数；本月第一天是周几？？？
    var iNow=0;
    function run(n) {
        var oDate = new Date(); //定义时间
        oDate.setMonth(oDate.getMonth()+n);//设置月份
        var year = oDate.getFullYear(); //年
        var month = oDate.getMonth(); //月
        var today = oDate.getDate(); //日

        //计算本月有多少天
        var allDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];

        //判断闰年
        if(month == 1) {
            if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                allDay = 29;
            }
        }
        //时间调整到本月第一天
        oDate.setDate(1);
        //读取本月第一天是星期几
        var week = oDate.getDay(); 
        $(".dateList").empty();
        //插入空白
        for(var i = 0; i < week; i++) {
            $(".dateList").append("<li></li>");
        }
        //日期插入到dateList
        for( i = 1; i <= allDay; i++) {
            $(".dateList").append("<li>" + i + "</li>");
        }
        //标记颜色
        $(".dateList li").each(function(i, elm){
            var val = $(this).text();
            if (n==0) {
                if(val<today){
                    $(this).addClass('pastday');
                }else if(val==today){
                    $(this).addClass('tday');
                }else if(i%7==0  ||  i%7==6   ){
                    $(this).addClass('weekend');
                }
            }else if(n<0){
                $(this).addClass('pastday');
            }else if(i%7==0  ||  i%7==6   ){
                $(this).addClass('weekend');
            }
        });
        //定义标题日期
        $("#calendar h4").text(year + "年" + (month + 1) + "月");
    }

    run(iNow);
    $(".lastMonth").click(function(){
        iNow--;
        run(iNow);
    });
    $(".nextMonth").click(function(){
        iNow++;
        run(iNow);
    });
});

//留言板打开
$(function() {
    $(".message").next().click(function(){
        var $liuyan = $(this).children("b");
        $(this).siblings(".message-form").slideToggle(function () {
         var dis=$(this).css("display");
         if(dis=="none"){
            $liuyan.text("立即留言");
        }else{
            $liuyan.text("取消");
        }  
        });
    });
    $(".message-form .submit").click(function(){

        alert("留言板功能待完善");
       /* var newday = new Date();
        var $newday = newday.toLocaleDateString();
        $.ajax({
            url: "http://localhost/message.php" ,
            type:"POST",
            data:{
                name: $("#fname").val(), 
               
            },
            dataType:"json",
            success: function(data) {
                if (data.success) { 
                    alert(data.msg);
                } else {
                    $("#searchResult").html("出现错误：" + data.msg);
                }  
            },
            error: function(jqXHR){     
               alert("发生错误：" + jqXHR.status);  
            }
        });*/

    });

});