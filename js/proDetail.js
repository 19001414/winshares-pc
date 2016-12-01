/**
 * Created by Administrator on 2016/11/25.
 */
//商品详情展示页
$.ajax({
    type:'POST',
    url:'http://api.winshares.cn/api/goods/index',
    data:'',
    dataType:'json',
    success:function (data) {
        //console.log(data['data'][1])
        //如果返回成功，则选择数据，将数据填充到前端页面
        var good_id = getCookie('goodid')
        console.log(good_id)
        if(data['status']){
            var productDetail = data['data'];
            $.each(productDetail,function(key,value){
                if(value['goods_id'] == good_id){
                    //console.log('我已经取得很大进步了')
                    $('.bd').append("<div class='showDiv'>" +
                            "<a href='#'>" +
                        "<img src='http://api.winshares.cn/"+value['imageurllist'][0]+"' alt=''>"+
                        "</a>"+
                        "</div>"+
                    "<div class='showDiv'>" +
                    "<a href='#'>" +
                    "<img src='http://api.winshares.cn/"+value['imageurllist'][1]+"' alt=''>"+
                    "</a>"+
                    "</div>"+
                    "<div class='showDiv'>" +
                    "<a href='#'>" +
                    "<img src='http://api.winshares.cn/"+value['imageurllist'][2]+"' alt=''>"+
                    "</a>"+
                    "</div>")
                    //console.log(value['imageurllist'])
                    $('.hd>ul').append(
                        "<li>" +
                        "<a href='#'>" +
                        "<img src='http://api.winshares.cn/"+value['imageurllist'][0]+"' alt=''>"+
                        "<span class='mark'></span>"+
                        "</a>" +
                        "</li>"+
                        "<li>" +
                        "<a href='#'>" +
                        "<img src='http://api.winshares.cn/"+value['imageurllist'][1]+"' alt=''>"+
                        "<span class='mark'></span>"+
                        "</a>" +
                        "</li>"+
                        "<li>" +
                        "<a href='#'>" +
                        "<img src='http://api.winshares.cn/"+value['imageurllist'][2]+"' alt=''>"+
                        "<span class='mark'></span>"+
                        "</a>" +
                        "</li>"
                    )
                    $('.pname').html(value['goods_name'])
                    $('.number').html(value['shop_price'])
                    $('.original').html('￥'+value['market_price'])
                    $('.desc').html(value['goods_remark'])
                }
            })

        }

    },
    error:function(err){
        console.log(err)
    }
})

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');    //把cookie分割成组
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];                      //取得字符串
        while (c.charAt(0)==' ') {          //判断一下字符串有没有前导空格
            c = c.substring(1,c.length);      //有的话，从第二位开始取
        }
        if (c.indexOf(nameEQ) == 0) {       //如果含有我们要的name
            return unescape(c.substring(nameEQ.length,c.length));    //解码并截取我们要值
        }
    }
    return false;
}
//获得动态元素
// jQuery(".foucebox").slide({
//     effect: "fold", autoPlay: true, delayTime: 300, startFun: function (i) {
//         jQuery(".foucebox .showDiv").eq(i).find("h2").css({display: "none", bottom: 0}).animate({
//             opacity: "show",
//             bottom: "60px"
//         }, 300);
//         jQuery(".foucebox .showDiv").eq(i).find("p").css({display: "none", bottom: 0}).animate({
//             opacity: "show",
//             bottom: "10px"
//         }, 300);
//     }
// });
// $('.foucebox').on('click','.hd li',function(i){
//     console.log('1111')
//     $(this).eq(i).addClass('on')
// })
