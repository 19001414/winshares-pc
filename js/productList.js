/**
 * Created by Administrator on 2016/11/25.
 */
/*接入后端写入商品列表*/
$.ajax({
    type:'POST',
    url:'http://api.winshares.cn/api/goods/index',
    data:'',
    dataType:'json',
    success:function (data) {
        //console.log(data['data'][1]['goods_content'])
        //如果返回成功，则选择数据，将数据填充到前端页面
        if(data['status']){
            //console.log(data['data'][0]['goods_name'])
            var productList = data['data']
            // $.each(productList[1],function(key,value){
            //     $('#product').append('<li></li>')
            // })
            $.each(productList,function (key, value) {
               //console.log(value)
                $('#product').append("<li>"+
                    "<div class='item-img col-sm-12 col-md-5'>" +
                    "<a href='http://127.0.0.1/winshares-pc/html/productDetail.html?id="+value['goods_id']+"'>"+
                    "<img src='http://api.winshares.cn/"+value['original_img']+"' alt=''>"+
                    "</a>"+
                    "</div>"+
                    "<div class='item-info col-sm-12 col-md-7'>" +
                    "<div class='info'><p class='pname text-left'>"+value['goods_name']+"</p></div>"+
                    "<div class='description'><p class='text-left'>"+value['goods_remark']+"</p></div>"+
                    "<div class='buy'><p class='pnumber'><span class='support'>"+'商品剩余：'+value['store_count']+"</span></p><span><span class='unit'></span><span class='price'>"+value['cost_price']+"</span></span></div>"+
                    "</div>"+
                    "</li>")
            })
        }
    },
    error:function(err){
        console.log(err)
    }
})
$('#product').on('click','a',function(e){
    //e.preventDefault()
    value = $(this).attr('href').split('?')[1].substr('3')
    console.log(value)
    setCookie('goodid',value,1)
    console.log(value+'存入cookie成功')
})
function setCookie(goodid, value, iDay){
    var oDate=new Date();

    oDate.setDate(oDate.getDate()+iDay);

    document.cookie=goodid+'='+encodeURIComponent(value)+';expires='+oDate;
}
//如果登录成功、显示用户名称等


