/**
 * Created by Administrator on 2016/11/28.
 */
//添加通用头部标签
$(function () {
    $('#header').load('header.html')

})

//将表单数据传递给后端
$('#comfirm-btn').on('click',function (e) {
    e.preventDefault()
    //进行ajax操作
    var data = $('#bug_page .buy-table form').serialize()
    console.log(data)
    $.ajax({
        type:'post',
        url:'',
        data:data,
        success:function(){

        },
        error:function () {

        }
    })
})
//点击弹出新增收货地址
$('#addAdress').on('click',function () {
    var pop = $('#adressPop').css('display')
    $('.submit-btn-web').css('display','block')
    $('.edit-address').css('display','none')
    //console.log(pop)
    if(pop == 'none'){
        $('#adressPop').fadeIn()
    }
})
//点击取消隐藏地址栏
$('.cancle').on('click',function () {
    $('#adressPop').fadeOut()
})
//点击选中地址
$('#editAddress li').click(function () {
    if($(this)){}
})
//点击关闭错误弹框
$('#err-alert .close').on('click',function () {
    $('#err-alert').fadeOut()
})
//点击保存地址提交地址信息
$('.submit-btn-web').on('click',function () {
    var province =$('#province2').val();
    var city = $('#city2').val();
    var district = $('#district2').val();
    var textarea = $('textarea').val();
    var postcode = $('input[name=postcode]').val();
    var uname =$('input[name=uname]').val();
    var uphone = $('input[name=uphone]').val();
    var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
    //console.log(textarea)
    if(uname == ""){
        $('#err-alert').show().find('p').html('请输入收货人姓名')
        $('#err-alert').delay(2000).hide(100)
    }else if(!myreg.test(uphone)){
        $('#err-alert').show().find('p').html('请输入正确的电话号码')
        $('#err-alert').delay(2000).hide(100)
    }else if(! /^[0-9][0-9]{5}$/.test(postcode)){
        $('#err-alert').show().find('p').html('请输入正确的邮编')
        $('#err-alert').delay(2000).hide(100)
    }else if(province ==''|| city =='' || district ==''|| textarea ==''){
        $('#err-alert').show().find('p').html('请选择收货地址')
        $('#err-alert').delay(2000).hide(100)
    }
    else{
        $('#adressPop').fadeOut()
        var addressInfo = $('.address-form').serialize()

        //localStorage.setItem('Info',JSON.stringify(addressInfo))
        //console.log(addressInfo)
        // addressInfo = window.localStorage
        // addressInfo['province'] = province;
        // addressInfo['city'] = city;
        // addressInfo['district'] = district;
        // addressInfo['textarea'] = textarea;
        // addressInfo['postcode'] = postcode;
        // addressInfo['uname'] = uname;
        // addressInfo['uphone'] = uphone;
        // $.ajax({
        //     type:'POST',
        //     url:'',
        //     data:addressInfo,
        //     success:function (data) {
        //         console.log(data)
        //     },
        //     error:function(err){
        //         console.log(err)
        //     }
        // })
        //将地址信息显示到页面上
         $('#editAddress').find('ul.addressList').append("<li><div class='name'><p>"+uname+"</p></div><div class='place'><p>"+province+city+district+textarea+"</p></div><div class='phone'><span>"+uphone+"</span><div class='opate'><span class='edit'>编辑</span> <span style='margin: 0 5px'>|</span> <span class='detele'>删除</span></div></div></li>")
        // var t = '';
        // t +="<li><div class='name'><p>"+uname+"</p></div><div class='place'><p>"+province+city+district+textarea+"</p></div><div class='phone'><span>"+uphone+"</span><div class='opate'><span class='edit'>编辑</span> <span style='margin: 0 5px'>|</span> <span class='detele'>删除</span></div></div></li>"
        // $('#editAddress ul.addressList').html(t)
        //编辑地址
        $('#editAddress ul.addressList').on('click','.edit',function () {
            $('#adressPop').fadeIn()
            $('.submit-btn-web').css('display','none')
            $('.edit-address').css('display','block').click(function(){
                //修改当前地址信息
                $('#adressPop').fadeOut()
            })
        })

    }
})
//删除地址
$('#editAddress').on('click','.detele',function () {
    var index = $(this).parent().parent().parent().index()
    console.log(index)
    $('#editAddress>ul>li').eq(index).remove()
    localStorage.clear()
})
//选中地址
$('#editAddress').click(function () {

})
//获得cookie值
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
//通过传入id值获得相应的商品购买页面
$.ajax({
    type:'POST',
    url:'http://api.winshares.cn/api/goods/index',
    data:'',
    dataType:'json',
    success:function (data) {
        //console.log(data)
        var good_id = getCookie('goodid');
        //console.log(good_id)
        if(data['status']){
            var buyDetail = data['data'];
            //console.log(buyDetail)
            $.each(buyDetail,function(key,value){
                if(value['goods_id'] == good_id){
                    console.log('传入id与取得cookie保存值一致')
                    $('.buy-table tbody tr td').eq(0).html(value['goods_name'])
                    $('.buy-table tbody tr td').eq(1).html(value['cost_price'])
                    $('.buy-table tbody tr td').eq(3).find('span').text(value['cost_price'])
                    $('.total-price').text(value['cost_price'])
                    //点击增加购物数量
                    var num = $('.center-input').val()
                    var total = parseInt($('.total-price').text())
                    //console.log(total)
                    var price = parseInt($('.price').text())
                    //console.log(price)
                    $('.add').click(function(){
                        num = parseInt(num) +1;
                        total =parseInt(price * num)
                        $('.buy-table tbody tr td').eq(3).find('span').text(total)
                        //console.log(total)
                        $('.center-input').val(num)
                        $('.total-price').html(total).attr('name',total)
                    })
                    //点击减少购物数量
                    $('.add-off').click(function () {
                        if(num){
                            num = parseInt(num) -1;
                            total = price * num;
                            $('.center-input').val(num)
                            $('.total-price').html(total).attr('name',total)
                        }
                    })
                }
            })
        }
    }
})