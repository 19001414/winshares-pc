/**
 * Created by Administrator on 2016/11/29.
 */
function tplProductItem(e) {
    var t, n = [];
    return function() {
        var i = e;
        if ("number" == typeof i.length)
            for (var r = 0, a = i.length; a > r; r++) {
                var s = i[r];
                switch (n.push("<li><a" + jade.attr("href", "/product/" + s.product_id, !0, !1) + ' target="_blank"><div class="item-img col-sm-12 col-md-5">'),
                s.product_image && n.push("<img" + jade.attr("src", "" + (s.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + "/>"),
                    n.push('</div><div class="item-info col-sm-12 col-md-7"><div class="info"><p class="name">' + jade.escape(null == (t = s.name) ? "" : t) + '</p></div><div class="description"><p>' + jade.escape(null == (t = s.short_description) ? "" : t) + '</p></div><div class="buy"><p class="number">'),
                    s.sell_state) {
                    case 1:
                        switch (s.storage_state) {
                            case 1:
                                n.push("<span>供应充足</span>");
                                break;
                            case .8:
                                n.push("<span>供应充足</span>");
                                break;
                            case 2:
                                n.push("<span>供应正常</span>");
                                break;
                            case .2:
                                n.push("<span>供应正常</span>");
                                break;
                            case .8:
                                n.push("<span>供应正常</span>");
                                break;
                            case 3:
                                s.left_count && n.push("<span>仅剩" + jade.escape(null == (t = s.left_count) ? "" : t) + "份</span>");
                                break;
                            case 0:
                                n.push("<span>供应紧张</span>");
                                break;
                            case .2:
                                n.push("<span>供应紧张</span>")
                        }
                        break;
                    case 2:
                        n.push("<span>尚未开售</span>");
                        break;
                    case 3:
                        n.push("<span>已售完</span>");
                        break;
                    case 4:
                        n.push("<span>已结束</span>");
                        break;
                    case 5:
                        n.push("<span>已下架</span>")
                }
                n.push("</p><span>"),
                    s.show_entity_name ? n.push('<span class="unit">/' + jade.escape(null == (t = s.show_entity_name) ? "" : t) + "</span>") : n.push('<span class="unit">/' + jade.escape(null == (t = s.entity_name) ? "" : t) + "</span>"),
                    n.push('<span class="price">' + jade.escape(null == (t = s.price) ? "" : t) + "元</span></span></div></div></a></li>")
            }
        else {
            var a = 0;
            for (var r in i) {
                a++;
                var s = i[r];
                switch (n.push("<li><a" + jade.attr("href", "/product/" + s.product_id, !0, !1) + ' target="_blank"><div class="item-img col-sm-12 col-md-5">'),
                s.product_image && n.push("<img" + jade.attr("src", "" + (s.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + "/>"),
                    n.push('</div><div class="item-info col-sm-12 col-md-7"><div class="info"><p class="name">' + jade.escape(null == (t = s.name) ? "" : t) + '</p></div><div class="description"><p>' + jade.escape(null == (t = s.short_description) ? "" : t) + '</p></div><div class="buy"><p class="number">'),
                    s.sell_state) {
                    case 1:
                        switch (s.storage_state) {
                            case 1:
                                n.push("<span>供应充足</span>");
                                break;
                            case .8:
                                n.push("<span>供应充足</span>");
                                break;
                            case 2:
                                n.push("<span>供应正常</span>");
                                break;
                            case .2:
                                n.push("<span>供应正常</span>");
                                break;
                            case .8:
                                n.push("<span>供应正常</span>");
                                break;
                            case 3:
                                s.left_count && n.push("<span>仅剩" + jade.escape(null == (t = s.left_count) ? "" : t) + "份</span>");
                                break;
                            case 0:
                                n.push("<span>供应紧张</span>");
                                break;
                            case .2:
                                n.push("<span>供应紧张</span>")
                        }
                        break;
                    case 2:
                        n.push("<span>尚未开售</span>");
                        break;
                    case 3:
                        n.push("<span>已售完</span>");
                        break;
                    case 4:
                        n.push("<span>已结束</span>");
                        break;
                    case 5:
                        n.push("<span>已下架</span>")
                }
                n.push("</p><span>"),
                    s.show_entity_name ? n.push('<span class="unit">/' + jade.escape(null == (t = s.show_entity_name) ? "" : t) + "</span>") : n.push('<span class="unit">/' + jade.escape(null == (t = s.entity_name) ? "" : t) + "</span>"),
                    n.push('<span class="price">' + jade.escape(null == (t = s.price) ? "" : t) + "元</span></span></div></div></a></li>")
            }
        }
    }
        .call(this),
        n.join("")
}
function tplAddressPopup(e) {
    var t, n = [];
    return n.push('<div class="popup address-popup"><div class="overlayer"></div><div class="popup-content address-content">'),
        e.addresseeone ? n.push('<div class="head">修改收货地址</div>') : n.push('<div class="head">新增收货地址</div>'),
        e.addresseeone ? (n.push('<form method="post" action="/order/address/update"><div class="group"><label>所在地区</label><div class="address"><div id="seleteProvince" class="province"><span class="seleted">' + jade.escape(null == (t = e.addresseeone.province_name) ? "" : t) + '</span><ul id="allprovince">'),
            function() {
                var i = e.info;
                if ("number" == typeof i.length)
                    for (var r = 0, a = i.length; a > r; r++) {
                        var s = i[r];
                        n.push("<li" + jade.attr("code", "" + s.province_id, !0, !1) + ">" + jade.escape(null == (t = s.province_name) ? "" : t) + "</li>")
                    }
                else {
                    var a = 0;
                    for (var r in i) {
                        a++;
                        var s = i[r];
                        n.push("<li" + jade.attr("code", "" + s.province_id, !0, !1) + ">" + jade.escape(null == (t = s.province_name) ? "" : t) + "</li>")
                    }
                }
            }
                .call(this),
            n.push('</ul><input id="province_id" type="hidden" name="province_id"' + jade.attr("value", "" + e.addresseeone.province_id, !0, !1) + '/></div><div id="seleteCity" class="allcity"><span class="seleted">' + jade.escape(null == (t = e.addresseeone.city_name) ? "" : t) + '</span><ul id="allcity"></ul><input id="city_id" type="hidden" name="city_id"' + jade.attr("value", "" + e.addresseeone.city_id, !0, !1) + '/></div><div id="seleteDistrict" class="district"><span class="seleted">' + jade.escape(null == (t = e.addresseeone.district_name) ? "" : t) + '</span><ul id="alldistrict"></ul><input id="district_id" type="hidden" name="district_id"' + jade.attr("value", "" + e.addresseeone.district_id, !0, !1) + '/></div></div></div><div class="group"><label>详细地址</label><textarea name="detail_address" required="required">' + jade.escape(null == (t = e.addresseeone.detail_address) ? "" : t) + '</textarea></div><div class="group"><label>邮政编码</label><input type="text" name="zip_code"' + jade.attr("value", "" + e.addresseeone.zip_code, !0, !1) + ' required="required"/></div><div class="group"><label>收货人姓名</label><input type="text" name="addressee"' + jade.attr("value", "" + e.addresseeone.addressee, !0, !1) + ' required="required"/></div><div class="group"><label>收货人手机</label><input type="text" name="phone"' + jade.attr("value", "" + e.addresseeone.phone, !0, !1) + ' required="required"/></div><div class="group"><label style="position:relative;top:-10px">默认地址</label>'),
            e.addresseeone.is_default ? n.push('<input type="checkbox" name="is_default" checked="checked"/>') : n.push('<input type="checkbox" name="is_default"/>'),
            n.push('</div><input type="hidden" name="address_id"' + jade.attr("value", "" + e.addresseeone.id, !0, !1) + ' required="required"/><div class="group"><input id="saveAddress" type="submit" value="保存地址" name="address" style="display:none" class="confirm"/><div class="submit-button-web">保存地址</div><a class="btn cancle">取消</a></div></form>')) : (n.push('<form method="post" action="/order/address/add"><div class="group"><label>所在地区</label><div class="address"><div id="seleteProvince" class="province"><span class="seleted">省级行政区</span><ul id="allprovince">'),
            function() {
                var i = e.info;
                if ("number" == typeof i.length)
                    for (var r = 0, a = i.length; a > r; r++) {
                        var s = i[r];
                        n.push("<li" + jade.attr("code", "" + s.province_id, !0, !1) + ">" + jade.escape(null == (t = s.province_name) ? "" : t) + "</li>")
                    }
                else {
                    var a = 0;
                    for (var r in i) {
                        a++;
                        var s = i[r];
                        n.push("<li" + jade.attr("code", "" + s.province_id, !0, !1) + ">" + jade.escape(null == (t = s.province_name) ? "" : t) + "</li>")
                    }
                }
            }
                .call(this),
            n.push('</ul><input id="province_id" type="hidden" name="province_id"/></div><div id="seleteCity" class="allcity"><span class="seleted">市级行政区</span><ul id="allcity"></ul><input id="city_id" type="hidden" name="city_id"/></div><div id="seleteDistrict" class="district"><span class="seleted">县/区</span><ul id="alldistrict"></ul><input id="district_id" type="hidden" name="district_id"/></div></div></div><div class="group"><label>详细地址</label><textarea name="detail_address"></textarea></div><div class="group"><label>邮政编码</label><input type="text" name="zip_code"/></div><div class="group"><label>收货人姓名</label><input type="text" name="addressee"/></div><div class="group"><label>收货人手机</label><input type="text" name="phone"/></div><div class="group"><label style="position:relative;top:-10px">默认地址</label><input type="checkbox" name="is_default"/></div><div class="group"><input id="saveAddress" type="submit" value="保存地址" name="address" style="display:none" class="confirm"/><div class="submit-button-web">保存地址</div><a class="btn cancle">取消</a></div></form>')),
        n.push("</div></div>"),
        n.join("")
}
function tplErrorTip(e) {
    var t, n = [];
    return n.push('<div class="error-tip"><div class="text">' + jade.escape(null == (t = e) ? "" : t) + "</div></div>"),
        n.join("")
}
function tplHomePagePopup(e) {
    var t, n = [], i = e || {};
    return function(i, r, a) {
        (function() {
                var s = e.content;
                if ("number" == typeof s.length)
                    for (var o = 0, l = s.length; l > o; o++) {
                        var c = s[o];
                        switch (c.type) {
                            case "product":
                                switch (n.push('<li class="product"><a' + jade.attr("href", "/product/" + c.product_id, !0, !1) + ' target="_blank"><div>'),
                                c.product_image && n.push("<img" + jade.attr("src", "" + (c.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + ' class="lazy"/>'),
                                    n.push('</div><div><div class="info"><p class="name">' + jade.escape(null == (t = c.name) ? "" : t) + '</p></div><div class="description">'),
                                c.area && n.push('<span class="area">' + jade.escape(null == (t = c.area) ? "" : t) + "</span>"),
                                    n.push("<span>" + jade.escape(null == (t = c.short_description) ? "" : t) + '</span></div><div class="buy"><p class="number">'),
                                    c.sell_state) {
                                    case 1:
                                        switch (c.storage_state) {
                                            case 1:
                                                n.push("<span>供应充足</span>");
                                                break;
                                            case .8:
                                                n.push("<span>供应充足</span>");
                                                break;
                                            case 2:
                                                n.push("<span>供应正常</span>");
                                                break;
                                            case .2:
                                                n.push("<span>供应正常</span>");
                                                break;
                                            case .8:
                                                n.push("<span>供应正常</span>");
                                                break;
                                            case 3:
                                                c.left_count && n.push("<span>仅剩" + jade.escape(null == (t = c.left_count) ? "" : t) + "份</span>");
                                                break;
                                            case 0:
                                                n.push("<span>供应紧张</span>");
                                                break;
                                            case .2:
                                                n.push("<span>供应紧张</span>")
                                        }
                                        break;
                                    case 2:
                                        n.push("<span>尚未开售</span>");
                                        break;
                                    case 3:
                                        n.push("<span>已售完</span>");
                                        break;
                                    case 4:
                                        n.push("<span>已结束</span>");
                                        break;
                                    case 5:
                                        n.push("<span>已下架</span>")
                                }
                                n.push("</p><span>"),
                                    c.show_entity_name ? n.push('<span class="unit">/' + jade.escape(null == (t = c.show_entity_name) ? "" : t) + "</span>") : n.push('<span class="unit">/' + jade.escape(null == (t = c.entity_name) ? "" : t) + "</span>"),
                                    n.push('<span class="price">' + jade.escape(null == (t = c.price / 100) ? "" : t) + '元</span></span></div></div><div class="clear"></div></a></li>');
                                break;
                            case "banner":
                                n.push('<li class="banner">'),
                                "" != i && (n.push('<div class="swiper-container"><div class="swiper-wrapper">'),
                                i.banner_list && function() {
                                    var e = i.banner_list;
                                    if ("number" == typeof e.length)
                                        for (var t = 0, r = e.length; r > t; t++) {
                                            var a = e[t];
                                            n.push('<div class="swiper-slide">'),
                                                4 == a.redirect_type ? n.push("<a" + jade.attr("href", "" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>') : 2 == a.redirect_type && n.push("<a" + jade.attr("href", "/product/" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>'),
                                                n.push("</div>")
                                        }
                                    else {
                                        var r = 0;
                                        for (var t in e) {
                                            r++;
                                            var a = e[t];
                                            n.push('<div class="swiper-slide">'),
                                                4 == a.redirect_type ? n.push("<a" + jade.attr("href", "" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>') : 2 == a.redirect_type && n.push("<a" + jade.attr("href", "/product/" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>'),
                                                n.push("</div>")
                                        }
                                    }
                                }
                                    .call(this),
                                    n.push("</div></div>")),
                                    n.push("</li>");
                                break;
                            case "product_group":
                                n.push('<li class="product-group">'),
                                r && (n.push('<div class="title"><p class="name">' + jade.escape(null == (t = r.group_name) ? "" : t) + '</p><p class="sub-name">' + jade.escape(null == (t = r.sub_title) ? "" : t) + '</p></div><div class="product-group-div"><div' + jade.attr("style", "width:" + r.width + "px", !0, !1) + ' class="product-group-list">'),
                                    function() {
                                        var e = r.product_list;
                                        if ("number" == typeof e.length)
                                            for (var i = 0, a = e.length; a > i; i++) {
                                                var s = e[i];
                                                if (n.push("<a" + jade.attr("href", "/product/" + s.product_id, !0, !1) + ' class="product-item"><div class="img"><img' + jade.attr("src", "" + (s.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + '/></div><div class="name">' + jade.escape(null == (t = s.name) ? "" : t) + '</div><div class="price">' + jade.escape(null == (t = s.price / 100) ? "" : t) + "/" + jade.escape(null == (t = s.entity_name) ? "" : t) + '</div><div class="info">'),
                                                        s.product_message)
                                                    switch (s.product_message.message_type) {
                                                        case "text":
                                                            n.push("" + jade.escape(null == (t = s.product_message.message) ? "" : t));
                                                            break;
                                                        case "bussiness_area":
                                                            n.push("" + jade.escape(null == (t = s.area) ? "" : t))
                                                    }
                                                n.push("</div></a>")
                                            }
                                        else {
                                            var a = 0;
                                            for (var i in e) {
                                                a++;
                                                var s = e[i];
                                                if (n.push("<a" + jade.attr("href", "/product/" + s.product_id, !0, !1) + ' class="product-item"><div class="img"><img' + jade.attr("src", "" + (s.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + '/></div><div class="name">' + jade.escape(null == (t = s.name) ? "" : t) + '</div><div class="price">' + jade.escape(null == (t = s.price / 100) ? "" : t) + "/" + jade.escape(null == (t = s.entity_name) ? "" : t) + '</div><div class="info">'),
                                                        s.product_message)
                                                    switch (s.product_message.message_type) {
                                                        case "text":
                                                            n.push("" + jade.escape(null == (t = s.product_message.message) ? "" : t));
                                                            break;
                                                        case "bussiness_area":
                                                            n.push("" + jade.escape(null == (t = s.area) ? "" : t))
                                                    }
                                                n.push("</div></a>")
                                            }
                                        }
                                    }
                                        .call(this),
                                    n.push('</div></div><div class="footer"><a' + jade.attr("href", "/productgroup/" + a.city_id + "/" + r.group_id + "/0", !0, !1) + ">更多推荐</a></div>")),
                                    n.push("</li>")
                        }
                    }
                else {
                    var l = 0;
                    for (var o in s) {
                        l++;
                        var c = s[o];
                        switch (c.type) {
                            case "product":
                                switch (n.push('<li class="product"><a' + jade.attr("href", "/product/" + c.product_id, !0, !1) + ' target="_blank"><div>'),
                                c.product_image && n.push("<img" + jade.attr("src", "" + (c.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + ' class="lazy"/>'),
                                    n.push('</div><div><div class="info"><p class="name">' + jade.escape(null == (t = c.name) ? "" : t) + '</p></div><div class="description">'),
                                c.area && n.push('<span class="area">' + jade.escape(null == (t = c.area) ? "" : t) + "</span>"),
                                    n.push("<span>" + jade.escape(null == (t = c.short_description) ? "" : t) + '</span></div><div class="buy"><p class="number">'),
                                    c.sell_state) {
                                    case 1:
                                        switch (c.storage_state) {
                                            case 1:
                                                n.push("<span>供应充足</span>");
                                                break;
                                            case .8:
                                                n.push("<span>供应充足</span>");
                                                break;
                                            case 2:
                                                n.push("<span>供应正常</span>");
                                                break;
                                            case .2:
                                                n.push("<span>供应正常</span>");
                                                break;
                                            case .8:
                                                n.push("<span>供应正常</span>");
                                                break;
                                            case 3:
                                                c.left_count && n.push("<span>仅剩" + jade.escape(null == (t = c.left_count) ? "" : t) + "份</span>");
                                                break;
                                            case 0:
                                                n.push("<span>供应紧张</span>");
                                                break;
                                            case .2:
                                                n.push("<span>供应紧张</span>")
                                        }
                                        break;
                                    case 2:
                                        n.push("<span>尚未开售</span>");
                                        break;
                                    case 3:
                                        n.push("<span>已售完</span>");
                                        break;
                                    case 4:
                                        n.push("<span>已结束</span>");
                                        break;
                                    case 5:
                                        n.push("<span>已下架</span>")
                                }
                                n.push("</p><span>"),
                                    c.show_entity_name ? n.push('<span class="unit">/' + jade.escape(null == (t = c.show_entity_name) ? "" : t) + "</span>") : n.push('<span class="unit">/' + jade.escape(null == (t = c.entity_name) ? "" : t) + "</span>"),
                                    n.push('<span class="price">' + jade.escape(null == (t = c.price / 100) ? "" : t) + '元</span></span></div></div><div class="clear"></div></a></li>');
                                break;
                            case "banner":
                                n.push('<li class="banner">'),
                                "" != i && (n.push('<div class="swiper-container"><div class="swiper-wrapper">'),
                                i.banner_list && function() {
                                    var e = i.banner_list;
                                    if ("number" == typeof e.length)
                                        for (var t = 0, r = e.length; r > t; t++) {
                                            var a = e[t];
                                            n.push('<div class="swiper-slide">'),
                                                4 == a.redirect_type ? n.push("<a" + jade.attr("href", "" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>') : 2 == a.redirect_type && n.push("<a" + jade.attr("href", "/product/" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>'),
                                                n.push("</div>")
                                        }
                                    else {
                                        var r = 0;
                                        for (var t in e) {
                                            r++;
                                            var a = e[t];
                                            n.push('<div class="swiper-slide">'),
                                                4 == a.redirect_type ? n.push("<a" + jade.attr("href", "" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>') : 2 == a.redirect_type && n.push("<a" + jade.attr("href", "/product/" + a.destination, !0, !1) + "><img" + jade.attr("src", "" + (a.cover + "?imageView2/1/w/1080/h/810"), !0, !1) + ' class="image0"/></a>'),
                                                n.push("</div>")
                                        }
                                    }
                                }
                                    .call(this),
                                    n.push("</div></div>")),
                                    n.push("</li>");
                                break;
                            case "product_group":
                                n.push('<li class="product-group">'),
                                r && (n.push('<div class="title"><p class="name">' + jade.escape(null == (t = r.group_name) ? "" : t) + '</p><p class="sub-name">' + jade.escape(null == (t = r.sub_title) ? "" : t) + '</p></div><div class="product-group-div"><div' + jade.attr("style", "width:" + r.width + "px", !0, !1) + ' class="product-group-list">'),
                                    function() {
                                        var e = r.product_list;
                                        if ("number" == typeof e.length)
                                            for (var i = 0, a = e.length; a > i; i++) {
                                                var s = e[i];
                                                if (n.push("<a" + jade.attr("href", "/product/" + s.product_id, !0, !1) + ' class="product-item"><div class="img"><img' + jade.attr("src", "" + (s.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + '/></div><div class="name">' + jade.escape(null == (t = s.name) ? "" : t) + '</div><div class="price">' + jade.escape(null == (t = s.price / 100) ? "" : t) + "/" + jade.escape(null == (t = s.entity_name) ? "" : t) + '</div><div class="info">'),
                                                        s.product_message)
                                                    switch (s.product_message.message_type) {
                                                        case "text":
                                                            n.push("" + jade.escape(null == (t = s.product_message.message) ? "" : t));
                                                            break;
                                                        case "bussiness_area":
                                                            n.push("" + jade.escape(null == (t = s.area) ? "" : t))
                                                    }
                                                n.push("</div></a>")
                                            }
                                        else {
                                            var a = 0;
                                            for (var i in e) {
                                                a++;
                                                var s = e[i];
                                                if (n.push("<a" + jade.attr("href", "/product/" + s.product_id, !0, !1) + ' class="product-item"><div class="img"><img' + jade.attr("src", "" + (s.product_image + "?imageView2/1/w/360/h/270"), !0, !1) + '/></div><div class="name">' + jade.escape(null == (t = s.name) ? "" : t) + '</div><div class="price">' + jade.escape(null == (t = s.price / 100) ? "" : t) + "/" + jade.escape(null == (t = s.entity_name) ? "" : t) + '</div><div class="info">'),
                                                        s.product_message)
                                                    switch (s.product_message.message_type) {
                                                        case "text":
                                                            n.push("" + jade.escape(null == (t = s.product_message.message) ? "" : t));
                                                            break;
                                                        case "bussiness_area":
                                                            n.push("" + jade.escape(null == (t = s.area) ? "" : t))
                                                    }
                                                n.push("</div></a>")
                                            }
                                        }
                                    }
                                        .call(this),
                                    n.push('</div></div><div class="footer"><a' + jade.attr("href", "/productgroup/" + a.city_id + "/" + r.group_id + "/0", !0, !1) + ">更多推荐</a></div>")),
                                    n.push("</li>")
                        }
                    }
                }
            }
        ).call(this)
    }
        .call(this, "banner"in i ? i.banner : "undefined" != typeof banner ? banner : void 0, "group"in i ? i.group : "undefined" != typeof group ? group : void 0, "cityInfo"in i ? i.cityInfo : "undefined" != typeof cityInfo ? cityInfo : void 0),
        n.join("")
}
function sendCode(e) {
    var t = 60
        , n = $("input[name=open_platform_uid]").val();
    if (n || (n = $("input[name=wap_open_platform_uid]").val()),
            !n)
        return void alert("手机号码不能为空");
    var i = /^\d{11}$/;
    return i.test(n) ? ("register" == $(this).attr("sendtype") ? $.get("/user/checkPhoneNumber/" + n).then(function(e) {
        "HAD" == e.state ? ($(".display").css("display", "block"),
            $(".display").html(e.error_msg)) : ($(".display").css("display", "none"),
            !function n(e) {
                0 === t ? ($(".send").html("获取验证码"),
                    $(".send").bind("click", sendCode)) : ($(".send").unbind("click"),
                    t--,
                    setTimeout(function() {
                        n(e)
                    }, 1e3),
                    $(".send").html('<span style="color:#2c3038;font-size:13px">' + t + "秒重新发送</span>"))
            }(this))
    }) : ($.get("/user/register/send/" + n).then(function(e) {}),
        !function r(e) {
            0 === t ? ($(".send").html("获取验证码"),
                $(".send").bind("click", sendCode)) : ($(".send").unbind("click"),
                $(".display").css("display", "none"),
                t--,
                setTimeout(function() {
                    r(e)
                }, 1e3),
                $(".send").html(t + "秒后重试"))
        }(this)),
        !1) : void alert("手机号错误")
}
!function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
        : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = "length"in e && e.length
            , n = re.type(e);
        return "function" === n || re.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function i(e, t, n) {
        if (re.isFunction(t))
            return re.grep(e, function(e, i) {
                return !!t.call(e, i, e) !== n
            });
        if (t.nodeType)
            return re.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (pe.test(t))
                return re.filter(t, e, n);
            t = re.filter(t, e)
        }
        return re.grep(e, function(e) {
            return re.inArray(e, t) >= 0 !== n
        })
    }
    function r(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);return e
    }
    function a(e) {
        var t = be[e] = {};
        return re.each(e.match(we) || [], function(e, n) {
            t[n] = !0
        }),
            t
    }
    function s() {
        fe.addEventListener ? (fe.removeEventListener("DOMContentLoaded", o, !1),
            e.removeEventListener("load", o, !1)) : (fe.detachEvent("onreadystatechange", o),
            e.detachEvent("onload", o))
    }
    function o() {
        (fe.addEventListener || "load" === event.type || "complete" === fe.readyState) && (s(),
            re.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var i = "data-" + t.replace(Se, "-$1").toLowerCase();
            if (n = e.getAttribute(i),
                "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Ce.test(n) ? re.parseJSON(n) : n
                } catch (r) {}
                re.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function c(e) {
        var t;
        for (t in e)
            if (("data" !== t || !re.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function d(e, t, n, i) {
        if (re.acceptData(e)) {
            var r, a, s = re.expando, o = e.nodeType, l = o ? re.cache : e, c = o ? e[s] : e[s] && s;
            if (c && l[c] && (i || l[c].data) || void 0 !== n || "string" != typeof t)
                return c || (c = o ? e[s] = X.pop() || re.guid++ : s),
                l[c] || (l[c] = o ? {} : {
                    toJSON: re.noop
                }),
                "object" != typeof t && "function" != typeof t || (i ? l[c] = re.extend(l[c], t) : l[c].data = re.extend(l[c].data, t)),
                    a = l[c],
                i || (a.data || (a.data = {}),
                    a = a.data),
                void 0 !== n && (a[re.camelCase(t)] = n),
                    "string" == typeof t ? (r = a[t],
                    null == r && (r = a[re.camelCase(t)])) : r = a,
                    r
        }
    }
    function u(e, t, n) {
        if (re.acceptData(e)) {
            var i, r, a = e.nodeType, s = a ? re.cache : e, o = a ? e[re.expando] : re.expando;
            if (s[o]) {
                if (t && (i = n ? s[o] : s[o].data)) {
                    re.isArray(t) ? t = t.concat(re.map(t, re.camelCase)) : t in i ? t = [t] : (t = re.camelCase(t),
                        t = t in i ? [t] : t.split(" ")),
                        r = t.length;
                    for (; r--; )
                        delete i[t[r]];
                    if (n ? !c(i) : !re.isEmptyObject(i))
                        return
                }
                (n || (delete s[o].data,
                    c(s[o]))) && (a ? re.cleanData([e], !0) : ne.deleteExpando || s != s.window ? delete s[o] : s[o] = null )
            }
        }
    }
    function p() {
        return !0
    }
    function h() {
        return !1
    }
    function f() {
        try {
            return fe.activeElement
        } catch (e) {}
    }
    function m(e) {
        var t = Le.split("|")
            , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function v(e, t) {
        var n, i, r = 0, a = typeof e.getElementsByTagName !== Te ? e.getElementsByTagName(t || "*") : typeof e.querySelectorAll !== Te ? e.querySelectorAll(t || "*") : void 0;
        if (!a)
            for (a = [],
                     n = e.childNodes || e; null != (i = n[r]); r++)
                !t || re.nodeName(i, t) ? a.push(i) : re.merge(a, v(i, t));
        return void 0 === t || t && re.nodeName(e, t) ? re.merge([e], a) : a
    }
    function g(e) {
        Me.test(e.type) && (e.defaultChecked = e.checked)
    }
    function y(e, t) {
        return re.nodeName(e, "table") && re.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function w(e) {
        return e.type = (null !== re.find.attr(e, "type")) + "/" + e.type,
            e
    }
    function b(e) {
        var t = Ve.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
            e
    }
    function _(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++)
            re._data(n, "globalEval", !t || re._data(t[i], "globalEval"))
    }
    function x(e, t) {
        if (1 === t.nodeType && re.hasData(e)) {
            var n, i, r, a = re._data(e), s = re._data(t, a), o = a.events;
            if (o) {
                delete s.handle,
                    s.events = {};
                for (n in o)
                    for (i = 0,
                             r = o[n].length; r > i; i++)
                        re.event.add(t, n, o[n][i])
            }
            s.data && (s.data = re.extend({}, s.data))
        }
    }
    function T(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
                !ne.noCloneEvent && t[re.expando]) {
                r = re._data(t);
                for (i in r.events)
                    re.removeEvent(t, i, r.handle);
                t.removeAttribute(re.expando)
            }
            "script" === n && t.text !== e.text ? (w(t).text = e.text,
                b(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ne.html5Clone && e.innerHTML && !re.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Me.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : "input" !== n && "textarea" !== n || (t.defaultValue = e.defaultValue)
        }
    }
    function C(t, n) {
        var i, r = re(n.createElement(t)).appendTo(n.body), a = e.getDefaultComputedStyle && (i = e.getDefaultComputedStyle(r[0])) ? i.display : re.css(r[0], "display");
        return r.detach(),
            a
    }
    function S(e) {
        var t = fe
            , n = Ze[e];
        return n || (n = C(e, t),
        "none" !== n && n || (Qe = (Qe || re("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
            t = (Qe[0].contentWindow || Qe[0].contentDocument).document,
            t.write(),
            t.close(),
            n = C(e, t),
            Qe.detach()),
            Ze[e] = n),
            n
    }
    function k(e, t) {
        return {
            get: function() {
                var n = e();
                if (null != n)
                    return n ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function A(e, t) {
        if (t in e)
            return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = pt.length; r--; )
            if (t = pt[r] + n,
                t in e)
                return t;
        return i
    }
    function E(e, t) {
        for (var n, i, r, a = [], s = 0, o = e.length; o > s; s++)
            i = e[s],
            i.style && (a[s] = re._data(i, "olddisplay"),
                n = i.style.display,
                t ? (a[s] || "none" !== n || (i.style.display = ""),
                "" === i.style.display && Ee(i) && (a[s] = re._data(i, "olddisplay", S(i.nodeName)))) : (r = Ee(i),
                (n && "none" !== n || !r) && re._data(i, "olddisplay", r ? n : re.css(i, "display"))));
        for (s = 0; o > s; s++)
            i = e[s],
            i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? a[s] || "" : "none"));
        return e
    }
    function $(e, t, n) {
        var i = lt.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function M(e, t, n, i, r) {
        for (var a = n === (i ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > a; a += 2)
            "margin" === n && (s += re.css(e, n + Ae[a], !0, r)),
                i ? ("content" === n && (s -= re.css(e, "padding" + Ae[a], !0, r)),
                "margin" !== n && (s -= re.css(e, "border" + Ae[a] + "Width", !0, r))) : (s += re.css(e, "padding" + Ae[a], !0, r),
                "padding" !== n && (s += re.css(e, "border" + Ae[a] + "Width", !0, r)));
        return s
    }
    function O(e, t, n) {
        var i = !0
            , r = "width" === t ? e.offsetWidth : e.offsetHeight
            , a = et(e)
            , s = ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, a);
        if (0 >= r || null == r) {
            if (r = tt(e, t, a),
                (0 > r || null == r) && (r = e.style[t]),
                    it.test(r))
                return r;
            i = s && (ne.boxSizingReliable() || r === e.style[t]),
                r = parseFloat(r) || 0
        }
        return r + M(e, t, n || (s ? "border" : "content"), i, a) + "px"
    }
    function N(e, t, n, i, r) {
        return new N.prototype.init(e,t,n,i,r)
    }
    function P() {
        return setTimeout(function() {
            ht = void 0
        }),
            ht = re.now()
    }
    function I(e, t) {
        var n, i = {
            height: e
        }, r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t)
            n = Ae[r],
                i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
            i
    }
    function D(e, t, n) {
        for (var i, r = (wt[t] || []).concat(wt["*"]), a = 0, s = r.length; s > a; a++)
            if (i = r[a].call(n, t, e))
                return i
    }
    function L(e, t, n) {
        var i, r, a, s, o, l, c, d, u = this, p = {}, h = e.style, f = e.nodeType && Ee(e), m = re._data(e, "fxshow");
        n.queue || (o = re._queueHooks(e, "fx"),
        null == o.unqueued && (o.unqueued = 0,
                l = o.empty.fire,
                o.empty.fire = function() {
                    o.unqueued || l()
                }
        ),
            o.unqueued++,
            u.always(function() {
                u.always(function() {
                    o.unqueued--,
                    re.queue(e, "fx").length || o.empty.fire()
                })
            })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
            c = re.css(e, "display"),
            d = "none" === c ? re._data(e, "olddisplay") || S(e.nodeName) : c,
        "inline" === d && "none" === re.css(e, "float") && (ne.inlineBlockNeedsLayout && "inline" !== S(e.nodeName) ? h.zoom = 1 : h.display = "inline-block")),
        n.overflow && (h.overflow = "hidden",
        ne.shrinkWrapBlocks() || u.always(function() {
            h.overflow = n.overflow[0],
                h.overflowX = n.overflow[1],
                h.overflowY = n.overflow[2]
        }));
        for (i in t)
            if (r = t[i],
                    mt.exec(r)) {
                if (delete t[i],
                        a = a || "toggle" === r,
                    r === (f ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    f = !0
                }
                p[i] = m && m[i] || re.style(e, i)
            } else
                c = void 0;
        if (re.isEmptyObject(p))
            "inline" === ("none" === c ? S(e.nodeName) : c) && (h.display = c);
        else {
            m ? "hidden"in m && (f = m.hidden) : m = re._data(e, "fxshow", {}),
            a && (m.hidden = !f),
                f ? re(e).show() : u.done(function() {
                    re(e).hide()
                }),
                u.done(function() {
                    var t;
                    re._removeData(e, "fxshow");
                    for (t in p)
                        re.style(e, t, p[t])
                });
            for (i in p)
                s = D(f ? m[i] : 0, i, u),
                i in m || (m[i] = s.start,
                f && (s.end = s.start,
                    s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function j(e, t) {
        var n, i, r, a, s;
        for (n in e)
            if (i = re.camelCase(n),
                    r = t[i],
                    a = e[n],
                re.isArray(a) && (r = a[1],
                    a = e[n] = a[0]),
                n !== i && (e[i] = a,
                    delete e[n]),
                    s = re.cssHooks[i],
                s && "expand"in s) {
                a = s.expand(a),
                    delete e[i];
                for (n in a)
                    n in e || (e[n] = a[n],
                        t[n] = r)
            } else
                t[i] = r
    }
    function B(e, t, n) {
        var i, r, a = 0, s = yt.length, o = re.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (r)
                return !1;
            for (var t = ht || P(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, a = 1 - i, s = 0, l = c.tweens.length; l > s; s++)
                c.tweens[s].run(a);
            return o.notifyWith(e, [c, a, n]),
                1 > a && l ? n : (o.resolveWith(e, [c]),
                    !1)
        }, c = o.promise({
            elem: e,
            props: re.extend({}, t),
            opts: re.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: ht || P(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = re.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                    i
            },
            stop: function(t) {
                var n = 0
                    , i = t ? c.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    c.tweens[n].run(1);
                return t ? o.resolveWith(e, [c, t]) : o.rejectWith(e, [c, t]),
                    this
            }
        }), d = c.props;
        for (j(d, c.opts.specialEasing); s > a; a++)
            if (i = yt[a].call(c, e, d, c.opts))
                return i;
        return re.map(d, D, c),
        re.isFunction(c.opts.start) && c.opts.start.call(e, c),
            re.fx.timer(re.extend(l, {
                elem: e,
                anim: c,
                queue: c.opts.queue
            })),
            c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function R(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
                t = "*");
            var i, r = 0, a = t.toLowerCase().match(we) || [];
            if (re.isFunction(n))
                for (; i = a[r++]; )
                    "+" === i.charAt(0) ? (i = i.slice(1) || "*",
                        (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function F(e, t, n, i) {
        function r(o) {
            var l;
            return a[o] = !0,
                re.each(e[o] || [], function(e, o) {
                    var c = o(t, n, i);
                    return "string" != typeof c || s || a[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c),
                        r(c),
                        !1)
                }),
                l
        }
        var a = {}
            , s = e === Wt;
        return r(t.dataTypes[0]) || !a["*"] && r("*")
    }
    function H(e, t) {
        var n, i, r = re.ajaxSettings.flatOptions || {};
        for (i in t)
            void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
        return n && re.extend(!0, e, n),
            e
    }
    function z(e, t, n) {
        for (var i, r, a, s, o = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
        if (r)
            for (s in o)
                if (o[s] && o[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0]in n)
            a = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== l[0] && l.unshift(a),
            n[a]) : void 0
    }
    function W(e, t, n, i) {
        var r, a, s, o, l, c = {}, d = e.dataTypes.slice();
        if (d[1])
            for (s in e.converters)
                c[s.toLowerCase()] = e.converters[s];
        for (a = d.shift(); a; )
            if (e.responseFields[a] && (n[e.responseFields[a]] = t),
                !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                    l = a,
                    a = d.shift())
                if ("*" === a)
                    a = l;
                else if ("*" !== l && l !== a) {
                    if (s = c[l + " " + a] || c["* " + a],
                            !s)
                        for (r in c)
                            if (o = r.split(" "),
                                o[1] === a && (s = c[l + " " + o[0]] || c["* " + o[0]])) {
                                s === !0 ? s = c[r] : c[r] !== !0 && (a = o[0],
                                    d.unshift(o[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (u) {
                                return {
                                    state: "parsererror",
                                    error: s ? u : "No conversion from " + l + " to " + a
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function G(e, t, n, i) {
        var r;
        if (re.isArray(t))
            re.each(t, function(t, r) {
                n || Vt.test(e) ? i(e, r) : G(e + "[" + ("object" == typeof r ? t : "") + "]", r, n, i)
            });
        else if (n || "object" !== re.type(t))
            i(e, t);
        else
            for (r in t)
                G(e + "[" + r + "]", t[r], n, i)
    }
    function q() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function U() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function V(e) {
        return re.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var X = []
        , Y = X.slice
        , K = X.concat
        , J = X.push
        , Q = X.indexOf
        , Z = {}
        , ee = Z.toString
        , te = Z.hasOwnProperty
        , ne = {}
        , ie = "1.11.3"
        , re = function(e, t) {
        return new re.fn.init(e,t)
    }
        , ae = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , se = /^-ms-/
        , oe = /-([\da-z])/gi
        , le = function(e, t) {
        return t.toUpperCase()
    };
    re.fn = re.prototype = {
        jquery: ie,
        constructor: re,
        selector: "",
        length: 0,
        toArray: function() {
            return Y.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : Y.call(this)
        },
        pushStack: function(e) {
            var t = re.merge(this.constructor(), e);
            return t.prevObject = this,
                t.context = this.context,
                t
        },
        each: function(e, t) {
            return re.each(this, e, t)
        },
        map: function(e) {
            return this.pushStack(re.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(Y.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
                , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null )
        },
        push: J,
        sort: X.sort,
        splice: X.splice
    },
        re.extend = re.fn.extend = function() {
            var e, t, n, i, r, a, s = arguments[0] || {}, o = 1, l = arguments.length, c = !1;
            for ("boolean" == typeof s && (c = s,
                s = arguments[o] || {},
                o++),
                 "object" == typeof s || re.isFunction(s) || (s = {}),
                 o === l && (s = this,
                     o--); l > o; o++)
                if (null != (r = arguments[o]))
                    for (i in r)
                        e = s[i],
                            n = r[i],
                        s !== n && (c && n && (re.isPlainObject(n) || (t = re.isArray(n))) ? (t ? (t = !1,
                            a = e && re.isArray(e) ? e : []) : a = e && re.isPlainObject(e) ? e : {},
                            s[i] = re.extend(c, a, n)) : void 0 !== n && (s[i] = n));
            return s
        }
        ,
        re.extend({
            expando: "jQuery" + (ie + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isFunction: function(e) {
                return "function" === re.type(e)
            },
            isArray: Array.isArray || function(e) {
                return "array" === re.type(e)
            }
            ,
            isWindow: function(e) {
                return null != e && e == e.window
            },
            isNumeric: function(e) {
                return !re.isArray(e) && e - parseFloat(e) + 1 >= 0
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            isPlainObject: function(e) {
                var t;
                if (!e || "object" !== re.type(e) || e.nodeType || re.isWindow(e))
                    return !1;
                try {
                    if (e.constructor && !te.call(e, "constructor") && !te.call(e.constructor.prototype, "isPrototypeOf"))
                        return !1
                } catch (n) {
                    return !1
                }
                if (ne.ownLast)
                    for (t in e)
                        return te.call(e, t);
                for (t in e)
                    ;
                return void 0 === t || te.call(e, t)
            },
            type: function(e) {
                return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Z[ee.call(e)] || "object" : typeof e
            },
            globalEval: function(t) {
                t && re.trim(t) && (e.execScript || function(t) {
                        e.eval.call(e, t);
                    }
                )(t)
            },
            camelCase: function(e) {
                return e.replace(se, "ms-").replace(oe, le)
            },
            nodeName: function(e, t) {
                return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(e, t, i) {
                var r, a = 0, s = e.length, o = n(e);
                if (i) {
                    if (o)
                        for (; s > a && (r = t.apply(e[a], i),
                        r !== !1); a++)
                            ;
                    else
                        for (a in e)
                            if (r = t.apply(e[a], i),
                                r === !1)
                                break
                } else if (o)
                    for (; s > a && (r = t.call(e[a], a, e[a]),
                    r !== !1); a++)
                        ;
                else
                    for (a in e)
                        if (r = t.call(e[a], a, e[a]),
                            r === !1)
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(ae, "")
            },
            makeArray: function(e, t) {
                var i = t || [];
                return null != e && (n(Object(e)) ? re.merge(i, "string" == typeof e ? [e] : e) : J.call(i, e)),
                    i
            },
            inArray: function(e, t, n) {
                var i;
                if (t) {
                    if (Q)
                        return Q.call(t, e, n);
                    for (i = t.length,
                             n = n ? 0 > n ? Math.max(0, i + n) : n : 0; i > n; n++)
                        if (n in t && t[n] === e)
                            return n
                }
                return -1
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; n > i; )
                    e[r++] = t[i++];
                if (n !== n)
                    for (; void 0 !== t[i]; )
                        e[r++] = t[i++];
                return e.length = r,
                    e
            },
            grep: function(e, t, n) {
                for (var i, r = [], a = 0, s = e.length, o = !n; s > a; a++)
                    i = !t(e[a], a),
                    i !== o && r.push(e[a]);
                return r
            },
            map: function(e, t, i) {
                var r, a = 0, s = e.length, o = n(e), l = [];
                if (o)
                    for (; s > a; a++)
                        r = t(e[a], a, i),
                        null != r && l.push(r);
                else
                    for (a in e)
                        r = t(e[a], a, i),
                        null != r && l.push(r);
                return K.apply([], l)
            },
            guid: 1,
            proxy: function(e, t) {
                var n, i, r;
                return "string" == typeof t && (r = e[t],
                    t = e,
                    e = r),
                    re.isFunction(e) ? (n = Y.call(arguments, 2),
                        i = function() {
                            return e.apply(t || this, n.concat(Y.call(arguments)))
                        }
                        ,
                        i.guid = e.guid = e.guid || re.guid++,
                        i) : void 0
            },
            now: function() {
                return +new Date
            },
            support: ne
        }),
        re.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
            Z["[object " + t + "]"] = t.toLowerCase()
        });
    var ce = function(e) {
        function t(e, t, n, i) {
            var r, a, s, o, l, c, u, h, f, m;
            if ((t ? t.ownerDocument || t : F) !== N && O(t),
                    t = t || N,
                    n = n || [],
                    o = t.nodeType,
                "string" != typeof e || !e || 1 !== o && 9 !== o && 11 !== o)
                return n;
            if (!i && I) {
                if (11 !== o && (r = ye.exec(e)))
                    if (s = r[1]) {
                        if (9 === o) {
                            if (a = t.getElementById(s),
                                !a || !a.parentNode)
                                return n;
                            if (a.id === s)
                                return n.push(a),
                                    n
                        } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && B(t, a) && a.id === s)
                            return n.push(a),
                                n
                    } else {
                        if (r[2])
                            return Q.apply(n, t.getElementsByTagName(e)),
                                n;
                        if ((s = r[3]) && _.getElementsByClassName)
                            return Q.apply(n, t.getElementsByClassName(s)),
                                n
                    }
                if (_.qsa && (!D || !D.test(e))) {
                    if (h = u = R,
                            f = t,
                            m = 1 !== o && e,
                        1 === o && "object" !== t.nodeName.toLowerCase()) {
                        for (c = S(e),
                                 (u = t.getAttribute("id")) ? h = u.replace(be, "\\$&") : t.setAttribute("id", h),
                                 h = "[id='" + h + "'] ",
                                 l = c.length; l--; )
                            c[l] = h + p(c[l]);
                        f = we.test(e) && d(t.parentNode) || t,
                            m = c.join(",")
                    }
                    if (m)
                        try {
                            return Q.apply(n, f.querySelectorAll(m)),
                                n
                        } catch (v) {} finally {
                            u || t.removeAttribute("id")
                        }
                }
            }
            return A(e.replace(le, "$1"), t, n, i)
        }
        function n() {
            function e(n, i) {
                return t.push(n + " ") > x.cacheLength && delete e[t.shift()],
                    e[n + " "] = i
            }
            var t = [];
            return e
        }
        function i(e) {
            return e[R] = !0,
                e
        }
        function r(e) {
            var t = N.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                    t = null
            }
        }
        function a(e, t) {
            for (var n = e.split("|"), i = e.length; i--; )
                x.attrHandle[n[i]] = t
        }
        function s(e, t) {
            var n = t && e
                , i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || V) - (~e.sourceIndex || V);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function o(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function c(e) {
            return i(function(t) {
                return t = +t,
                    i(function(n, i) {
                        for (var r, a = e([], n.length, t), s = a.length; s--; )
                            n[r = a[s]] && (n[r] = !(i[r] = n[r]))
                    })
            })
        }
        function d(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function u() {}
        function p(e) {
            for (var t = 0, n = e.length, i = ""; n > t; t++)
                i += e[t].value;
            return i
        }
        function h(e, t, n) {
            var i = t.dir
                , r = n && "parentNode" === i
                , a = z++;
            return t.first ? function(t, n, a) {
                for (; t = t[i]; )
                    if (1 === t.nodeType || r)
                        return e(t, n, a)
            }
                : function(t, n, s) {
                var o, l, c = [H, a];
                if (s) {
                    for (; t = t[i]; )
                        if ((1 === t.nodeType || r) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[i]; )
                        if (1 === t.nodeType || r) {
                            if (l = t[R] || (t[R] = {}),
                                (o = l[i]) && o[0] === H && o[1] === a)
                                return c[2] = o[2];
                            if (l[i] = c,
                                    c[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function f(e) {
            return e.length > 1 ? function(t, n, i) {
                for (var r = e.length; r--; )
                    if (!e[r](t, n, i))
                        return !1;
                return !0
            }
                : e[0]
        }
        function m(e, n, i) {
            for (var r = 0, a = n.length; a > r; r++)
                t(e, n[r], i);
            return i
        }
        function v(e, t, n, i, r) {
            for (var a, s = [], o = 0, l = e.length, c = null != t; l > o; o++)
                (a = e[o]) && (n && !n(a, i, r) || (s.push(a),
                c && t.push(o)));
            return s
        }
        function g(e, t, n, r, a, s) {
            return r && !r[R] && (r = g(r)),
            a && !a[R] && (a = g(a, s)),
                i(function(i, s, o, l) {
                    var c, d, u, p = [], h = [], f = s.length, g = i || m(t || "*", o.nodeType ? [o] : o, []), y = !e || !i && t ? g : v(g, p, e, o, l), w = n ? a || (i ? e : f || r) ? [] : s : y;
                    if (n && n(y, w, o, l),
                            r)
                        for (c = v(w, h),
                                 r(c, [], o, l),
                                 d = c.length; d--; )
                            (u = c[d]) && (w[h[d]] = !(y[h[d]] = u));
                    if (i) {
                        if (a || e) {
                            if (a) {
                                for (c = [],
                                         d = w.length; d--; )
                                    (u = w[d]) && c.push(y[d] = u);
                                a(null , w = [], c, l)
                            }
                            for (d = w.length; d--; )
                                (u = w[d]) && (c = a ? ee(i, u) : p[d]) > -1 && (i[c] = !(s[c] = u))
                        }
                    } else
                        w = v(w === s ? w.splice(f, w.length) : w),
                            a ? a(null , s, w, l) : Q.apply(s, w)
                })
        }
        function y(e) {
            for (var t, n, i, r = e.length, a = x.relative[e[0].type], s = a || x.relative[" "], o = a ? 1 : 0, l = h(function(e) {
                return e === t
            }, s, !0), c = h(function(e) {
                return ee(t, e) > -1
            }, s, !0), d = [function(e, n, i) {
                var r = !a && (i || n !== E) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i));
                return t = null ,
                    r
            }
            ]; r > o; o++)
                if (n = x.relative[e[o].type])
                    d = [h(f(d), n)];
                else {
                    if (n = x.filter[e[o].type].apply(null , e[o].matches),
                            n[R]) {
                        for (i = ++o; r > i && !x.relative[e[i].type]; i++)
                            ;
                        return g(o > 1 && f(d), o > 1 && p(e.slice(0, o - 1).concat({
                                value: " " === e[o - 2].type ? "*" : ""
                            })).replace(le, "$1"), n, i > o && y(e.slice(o, i)), r > i && y(e = e.slice(i)), r > i && p(e))
                    }
                    d.push(n)
                }
            return f(d)
        }
        function w(e, n) {
            var r = n.length > 0
                , a = e.length > 0
                , s = function(i, s, o, l, c) {
                var d, u, p, h = 0, f = "0", m = i && [], g = [], y = E, w = i || a && x.find.TAG("*", c), b = H += null == y ? 1 : Math.random() || .1, _ = w.length;
                for (c && (E = s !== N && s); f !== _ && null != (d = w[f]); f++) {
                    if (a && d) {
                        for (u = 0; p = e[u++]; )
                            if (p(d, s, o)) {
                                l.push(d);
                                break
                            }
                        c && (H = b)
                    }
                    r && ((d = !p && d) && h--,
                    i && m.push(d))
                }
                if (h += f,
                    r && f !== h) {
                    for (u = 0; p = n[u++]; )
                        p(m, g, s, o);
                    if (i) {
                        if (h > 0)
                            for (; f--; )
                                m[f] || g[f] || (g[f] = K.call(l));
                        g = v(g)
                    }
                    Q.apply(l, g),
                    c && !i && g.length > 0 && h + n.length > 1 && t.uniqueSort(l)
                }
                return c && (H = b,
                    E = y),
                    m
            };
            return r ? i(s) : s
        }
        var b, _, x, T, C, S, k, A, E, $, M, O, N, P, I, D, L, j, B, R = "sizzle" + 1 * new Date, F = e.document, H = 0, z = 0, W = n(), G = n(), q = n(), U = function(e, t) {
            return e === t && (M = !0),
                0
        }, V = 1 << 31, X = {}.hasOwnProperty, Y = [], K = Y.pop, J = Y.push, Q = Y.push, Z = Y.slice, ee = function(e, t) {
            for (var n = 0, i = e.length; i > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", ie = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", re = ie.replace("w", "w#"), ae = "\\[" + ne + "*(" + ie + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", se = ":(" + ie + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ae + ")*)|.*)\\)|)", oe = new RegExp(ne + "+","g"), le = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), ce = new RegExp("^" + ne + "*," + ne + "*"), de = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ue = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), pe = new RegExp(se), he = new RegExp("^" + re + "$"), fe = {
            ID: new RegExp("^#(" + ie + ")"),
            CLASS: new RegExp("^\\.(" + ie + ")"),
            TAG: new RegExp("^(" + ie.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ae),
            PSEUDO: new RegExp("^" + se),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, me = /^(?:input|select|textarea|button)$/i, ve = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ye = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, we = /[+~]/, be = /'|\\/g, _e = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), xe = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, Te = function() {
            O()
        };
        try {
            Q.apply(Y = Z.call(F.childNodes), F.childNodes),
                Y[F.childNodes.length].nodeType
        } catch (Ce) {
            Q = {
                apply: Y.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                }
                    : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        _ = t.support = {},
            C = t.isXML = function(e) {
                var t = e && (e.ownerDocument || e).documentElement;
                return t ? "HTML" !== t.nodeName : !1
            }
            ,
            O = t.setDocument = function(e) {
                var t, n, i = e ? e.ownerDocument || e : F;
                return i !== N && 9 === i.nodeType && i.documentElement ? (N = i,
                    P = i.documentElement,
                    n = i.defaultView,
                n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Te, !1) : n.attachEvent && n.attachEvent("onunload", Te)),
                    I = !C(i),
                    _.attributes = r(function(e) {
                        return e.className = "i",
                            !e.getAttribute("className")
                    }),
                    _.getElementsByTagName = r(function(e) {
                        return e.appendChild(i.createComment("")),
                            !e.getElementsByTagName("*").length
                    }),
                    _.getElementsByClassName = ge.test(i.getElementsByClassName),
                    _.getById = r(function(e) {
                        return P.appendChild(e).id = R,
                        !i.getElementsByName || !i.getElementsByName(R).length
                    }),
                    _.getById ? (x.find.ID = function(e, t) {
                            if ("undefined" != typeof t.getElementById && I) {
                                var n = t.getElementById(e);
                                return n && n.parentNode ? [n] : []
                            }
                        }
                            ,
                            x.filter.ID = function(e) {
                                var t = e.replace(_e, xe);
                                return function(e) {
                                    return e.getAttribute("id") === t
                                }
                            }
                    ) : (delete x.find.ID,
                            x.filter.ID = function(e) {
                                var t = e.replace(_e, xe);
                                return function(e) {
                                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                                    return n && n.value === t
                                }
                            }
                    ),
                    x.find.TAG = _.getElementsByTagName ? function(e, t) {
                        return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : _.qsa ? t.querySelectorAll(e) : void 0
                    }
                        : function(e, t) {
                        var n, i = [], r = 0, a = t.getElementsByTagName(e);
                        if ("*" === e) {
                            for (; n = a[r++]; )
                                1 === n.nodeType && i.push(n);
                            return i
                        }
                        return a
                    }
                    ,
                    x.find.CLASS = _.getElementsByClassName && function(e, t) {
                            return I ? t.getElementsByClassName(e) : void 0
                        }
                    ,
                    L = [],
                    D = [],
                (_.qsa = ge.test(i.querySelectorAll)) && (r(function(e) {
                    P.appendChild(e).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && D.push("[*^$]=" + ne + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || D.push("\\[" + ne + "*(?:value|" + te + ")"),
                    e.querySelectorAll("[id~=" + R + "-]").length || D.push("~="),
                    e.querySelectorAll(":checked").length || D.push(":checked"),
                    e.querySelectorAll("a#" + R + "+*").length || D.push(".#.+[+~]")
                }),
                    r(function(e) {
                        var t = i.createElement("input");
                        t.setAttribute("type", "hidden"),
                            e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length && D.push("name" + ne + "*[*^$|!~]?="),
                        e.querySelectorAll(":enabled").length || D.push(":enabled", ":disabled"),
                            e.querySelectorAll("*,:x"),
                            D.push(",.*:")
                    })),
                (_.matchesSelector = ge.test(j = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function(e) {
                    _.disconnectedMatch = j.call(e, "div"),
                        j.call(e, "[s!='']:x"),
                        L.push("!=", se)
                }),
                    D = D.length && new RegExp(D.join("|")),
                    L = L.length && new RegExp(L.join("|")),
                    t = ge.test(P.compareDocumentPosition),
                    B = t || ge.test(P.contains) ? function(e, t) {
                        var n = 9 === e.nodeType ? e.documentElement : e
                            , i = t && t.parentNode;
                        return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
                    }
                        : function(e, t) {
                        if (t)
                            for (; t = t.parentNode; )
                                if (t === e)
                                    return !0;
                        return !1
                    }
                    ,
                    U = t ? function(e, t) {
                        if (e === t)
                            return M = !0,
                                0;
                        var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                        return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                            1 & n || !_.sortDetached && t.compareDocumentPosition(e) === n ? e === i || e.ownerDocument === F && B(F, e) ? -1 : t === i || t.ownerDocument === F && B(F, t) ? 1 : $ ? ee($, e) - ee($, t) : 0 : 4 & n ? -1 : 1)
                    }
                        : function(e, t) {
                        if (e === t)
                            return M = !0,
                                0;
                        var n, r = 0, a = e.parentNode, o = t.parentNode, l = [e], c = [t];
                        if (!a || !o)
                            return e === i ? -1 : t === i ? 1 : a ? -1 : o ? 1 : $ ? ee($, e) - ee($, t) : 0;
                        if (a === o)
                            return s(e, t);
                        for (n = e; n = n.parentNode; )
                            l.unshift(n);
                        for (n = t; n = n.parentNode; )
                            c.unshift(n);
                        for (; l[r] === c[r]; )
                            r++;
                        return r ? s(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
                    }
                    ,
                    i) : N
            }
            ,
            t.matches = function(e, n) {
                return t(e, null , null , n)
            }
            ,
            t.matchesSelector = function(e, n) {
                if ((e.ownerDocument || e) !== N && O(e),
                        n = n.replace(ue, "='$1']"),
                    _.matchesSelector && I && (!L || !L.test(n)) && (!D || !D.test(n)))
                    try {
                        var i = j.call(e, n);
                        if (i || _.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return i
                    } catch (r) {}
                return t(n, N, null , [e]).length > 0
            }
            ,
            t.contains = function(e, t) {
                return (e.ownerDocument || e) !== N && O(e),
                    B(e, t)
            }
            ,
            t.attr = function(e, t) {
                (e.ownerDocument || e) !== N && O(e);
                var n = x.attrHandle[t.toLowerCase()]
                    , i = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
                return void 0 !== i ? i : _.attributes || !I ? e.getAttribute(t) : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
            }
            ,
            t.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            t.uniqueSort = function(e) {
                var t, n = [], i = 0, r = 0;
                if (M = !_.detectDuplicates,
                        $ = !_.sortStable && e.slice(0),
                        e.sort(U),
                        M) {
                    for (; t = e[r++]; )
                        t === e[r] && (i = n.push(r));
                    for (; i--; )
                        e.splice(n[i], 1)
                }
                return $ = null ,
                    e
            }
            ,
            T = t.getText = function(e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += T(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += T(t);
                return n
            }
            ,
            x = t.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: fe,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(_e, xe),
                            e[3] = (e[3] || e[4] || e[5] || "").replace(_e, xe),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                            e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                            "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                                e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                                e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                            e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && pe.test(n) && (t = S(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                            e[2] = n.slice(0, t)),
                            e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(_e, xe).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                            : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                                return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                            })
                    },
                    ATTR: function(e, n, i) {
                        return function(r) {
                            var a = t.attr(r, e);
                            return null == a ? "!=" === n : n ? (a += "",
                                "=" === n ? a === i : "!=" === n ? a !== i : "^=" === n ? i && 0 === a.indexOf(i) : "*=" === n ? i && a.indexOf(i) > -1 : "$=" === n ? i && a.slice(-i.length) === i : "~=" === n ? (" " + a.replace(oe, " ") + " ").indexOf(i) > -1 : "|=" === n ? a === i || a.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(e, t, n, i, r) {
                        var a = "nth" !== e.slice(0, 3)
                            , s = "last" !== e.slice(-4)
                            , o = "of-type" === t;
                        return 1 === i && 0 === r ? function(e) {
                            return !!e.parentNode
                        }
                            : function(t, n, l) {
                            var c, d, u, p, h, f, m = a !== s ? "nextSibling" : "previousSibling", v = t.parentNode, g = o && t.nodeName.toLowerCase(), y = !l && !o;
                            if (v) {
                                if (a) {
                                    for (; m; ) {
                                        for (u = t; u = u[m]; )
                                            if (o ? u.nodeName.toLowerCase() === g : 1 === u.nodeType)
                                                return !1;
                                        f = m = "only" === e && !f && "nextSibling"
                                    }
                                    return !0
                                }
                                if (f = [s ? v.firstChild : v.lastChild],
                                    s && y) {
                                    for (d = v[R] || (v[R] = {}),
                                             c = d[e] || [],
                                             h = c[0] === H && c[1],
                                             p = c[0] === H && c[2],
                                             u = h && v.childNodes[h]; u = ++h && u && u[m] || (p = h = 0) || f.pop(); )
                                        if (1 === u.nodeType && ++p && u === t) {
                                            d[e] = [H, h, p];
                                            break
                                        }
                                } else if (y && (c = (t[R] || (t[R] = {}))[e]) && c[0] === H)
                                    p = c[1];
                                else
                                    for (; (u = ++h && u && u[m] || (p = h = 0) || f.pop()) && ((o ? u.nodeName.toLowerCase() !== g : 1 !== u.nodeType) || !++p || (y && ((u[R] || (u[R] = {}))[e] = [H, p]),
                                    u !== t)); )
                                        ;
                                return p -= r,
                                p === i || p % i === 0 && p / i >= 0
                            }
                        }
                    },
                    PSEUDO: function(e, n) {
                        var r, a = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                        return a[R] ? a(n) : a.length > 1 ? (r = [e, e, "", n],
                                x.setFilters.hasOwnProperty(e.toLowerCase()) ? i(function(e, t) {
                                    for (var i, r = a(e, n), s = r.length; s--; )
                                        i = ee(e, r[s]),
                                            e[i] = !(t[i] = r[s])
                                }) : function(e) {
                                    return a(e, 0, r)
                                }
                        ) : a
                    }
                },
                pseudos: {
                    not: i(function(e) {
                        var t = []
                            , n = []
                            , r = k(e.replace(le, "$1"));
                        return r[R] ? i(function(e, t, n, i) {
                            for (var a, s = r(e, null , i, []), o = e.length; o--; )
                                (a = s[o]) && (e[o] = !(t[o] = a))
                        }) : function(e, i, a) {
                            return t[0] = e,
                                r(t, null , a, n),
                                t[0] = null ,
                                !n.pop()
                        }
                    }),
                    has: i(function(e) {
                        return function(n) {
                            return t(e, n).length > 0
                        }
                    }),
                    contains: i(function(e) {
                        return e = e.replace(_e, xe),
                            function(t) {
                                return (t.textContent || t.innerText || T(t)).indexOf(e) > -1
                            }
                    }),
                    lang: i(function(e) {
                        return he.test(e || "") || t.error("unsupported lang: " + e),
                            e = e.replace(_e, xe).toLowerCase(),
                            function(t) {
                                var n;
                                do
                                    if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === e || 0 === n.indexOf(e + "-");
                                while ((t = t.parentNode) && 1 === t.nodeType);return !1
                            }
                    }),
                    target: function(t) {
                        var n = e.location && e.location.hash;
                        return n && n.slice(1) === t.id
                    },
                    root: function(e) {
                        return e === P
                    },
                    focus: function(e) {
                        return e === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: function(e) {
                        return e.disabled === !1
                    },
                    disabled: function(e) {
                        return e.disabled === !0
                    },
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        e.selected === !0
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !x.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ve.test(e.nodeName)
                    },
                    input: function(e) {
                        return me.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: c(function() {
                        return [0]
                    }),
                    last: c(function(e, t) {
                        return [t - 1]
                    }),
                    eq: c(function(e, t, n) {
                        return [0 > n ? n + t : n]
                    }),
                    even: c(function(e, t) {
                        for (var n = 0; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: c(function(e, t) {
                        for (var n = 1; t > n; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; --i >= 0; )
                            e.push(i);
                        return e
                    }),
                    gt: c(function(e, t, n) {
                        for (var i = 0 > n ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    })
                }
            },
            x.pseudos.nth = x.pseudos.eq;
        for (b in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[b] = o(b);
        for (b in {
            submit: !0,
            reset: !0
        })
            x.pseudos[b] = l(b);
        return u.prototype = x.filters = x.pseudos,
            x.setFilters = new u,
            S = t.tokenize = function(e, n) {
                var i, r, a, s, o, l, c, d = G[e + " "];
                if (d)
                    return n ? 0 : d.slice(0);
                for (o = e,
                         l = [],
                         c = x.preFilter; o; ) {
                    i && !(r = ce.exec(o)) || (r && (o = o.slice(r[0].length) || o),
                        l.push(a = [])),
                        i = !1,
                    (r = de.exec(o)) && (i = r.shift(),
                        a.push({
                            value: i,
                            type: r[0].replace(le, " ")
                        }),
                        o = o.slice(i.length));
                    for (s in x.filter)
                        !(r = fe[s].exec(o)) || c[s] && !(r = c[s](r)) || (i = r.shift(),
                            a.push({
                                value: i,
                                type: s,
                                matches: r
                            }),
                            o = o.slice(i.length));
                    if (!i)
                        break
                }
                return n ? o.length : o ? t.error(e) : G(e, l).slice(0)
            }
            ,
            k = t.compile = function(e, t) {
                var n, i = [], r = [], a = q[e + " "];
                if (!a) {
                    for (t || (t = S(e)),
                             n = t.length; n--; )
                        a = y(t[n]),
                            a[R] ? i.push(a) : r.push(a);
                    a = q(e, w(r, i)),
                        a.selector = e
                }
                return a
            }
            ,
            A = t.select = function(e, t, n, i) {
                var r, a, s, o, l, c = "function" == typeof e && e, u = !i && S(e = c.selector || e);
                if (n = n || [],
                    1 === u.length) {
                    if (a = u[0] = u[0].slice(0),
                        a.length > 2 && "ID" === (s = a[0]).type && _.getById && 9 === t.nodeType && I && x.relative[a[1].type]) {
                        if (t = (x.find.ID(s.matches[0].replace(_e, xe), t) || [])[0],
                                !t)
                            return n;
                        c && (t = t.parentNode),
                            e = e.slice(a.shift().value.length)
                    }
                    for (r = fe.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r],
                        !x.relative[o = s.type]); )
                        if ((l = x.find[o]) && (i = l(s.matches[0].replace(_e, xe), we.test(a[0].type) && d(t.parentNode) || t))) {
                            if (a.splice(r, 1),
                                    e = i.length && p(a),
                                    !e)
                                return Q.apply(n, i),
                                    n;
                            break
                        }
                }
                return (c || k(e, u))(i, t, !I, n, we.test(e) && d(t.parentNode) || t),
                    n
            }
            ,
            _.sortStable = R.split("").sort(U).join("") === R,
            _.detectDuplicates = !!M,
            O(),
            _.sortDetached = r(function(e) {
                return 1 & e.compareDocumentPosition(N.createElement("div"))
            }),
        r(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || a("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        _.attributes && r(function(e) {
            return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || a("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        r(function(e) {
            return null == e.getAttribute("disabled")
        }) || a(te, function(e, t, n) {
            var i;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (i = e.getAttributeNode(t)) && i.specified ? i.value : null
        }),
            t
    }(e);
    re.find = ce,
        re.expr = ce.selectors,
        re.expr[":"] = re.expr.pseudos,
        re.unique = ce.uniqueSort,
        re.text = ce.getText,
        re.isXMLDoc = ce.isXML,
        re.contains = ce.contains;
    var de = re.expr.match.needsContext
        , ue = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , pe = /^.[^:#\[\.,]*$/;
    re.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? re.find.matchesSelector(i, e) ? [i] : [] : re.find.matches(e, re.grep(t, function(e) {
                return 1 === e.nodeType
            }))
    }
        ,
        re.fn.extend({
            find: function(e) {
                var t, n = [], i = this, r = i.length;
                if ("string" != typeof e)
                    return this.pushStack(re(e).filter(function() {
                        for (t = 0; r > t; t++)
                            if (re.contains(i[t], this))
                                return !0
                    }));
                for (t = 0; r > t; t++)
                    re.find(e, i[t], n);
                return n = this.pushStack(r > 1 ? re.unique(n) : n),
                    n.selector = this.selector ? this.selector + " " + e : e,
                    n
            },
            filter: function(e) {
                return this.pushStack(i(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(i(this, e || [], !0))
            },
            is: function(e) {
                return !!i(this, "string" == typeof e && de.test(e) ? re(e) : e || [], !1).length
            }
        });
    var he, fe = e.document, me = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ve = re.fn.init = function(e, t) {
            var n, i;
            if (!e)
                return this;
            if ("string" == typeof e) {
                if (n = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null , e, null ] : me.exec(e),
                    !n || !n[1] && t)
                    return !t || t.jquery ? (t || he).find(e) : this.constructor(t).find(e);
                if (n[1]) {
                    if (t = t instanceof re ? t[0] : t,
                            re.merge(this, re.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : fe, !0)),
                        ue.test(n[1]) && re.isPlainObject(t))
                        for (n in t)
                            re.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
                    return this
                }
                if (i = fe.getElementById(n[2]),
                    i && i.parentNode) {
                    if (i.id !== n[2])
                        return he.find(e);
                    this.length = 1,
                        this[0] = i
                }
                return this.context = fe,
                    this.selector = e,
                    this
            }
            return e.nodeType ? (this.context = this[0] = e,
                this.length = 1,
                this) : re.isFunction(e) ? "undefined" != typeof he.ready ? he.ready(e) : e(re) : (void 0 !== e.selector && (this.selector = e.selector,
                this.context = e.context),
                re.makeArray(e, this))
        }
        ;
    ve.prototype = re.fn,
        he = re(fe);
    var ge = /^(?:parents|prev(?:Until|All))/
        , ye = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    re.extend({
        dir: function(e, t, n) {
            for (var i = [], r = e[t]; r && 9 !== r.nodeType && (void 0 === n || 1 !== r.nodeType || !re(r).is(n)); )
                1 === r.nodeType && i.push(r),
                    r = r[t];
            return i
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    }),
        re.fn.extend({
            has: function(e) {
                var t, n = re(e, this), i = n.length;
                return this.filter(function() {
                    for (t = 0; i > t; t++)
                        if (re.contains(this, n[t]))
                            return !0
                })
            },
            closest: function(e, t) {
                for (var n, i = 0, r = this.length, a = [], s = de.test(e) || "string" != typeof e ? re(e, t || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && re.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
                return this.pushStack(a.length > 1 ? re.unique(a) : a)
            },
            index: function(e) {
                return e ? "string" == typeof e ? re.inArray(this[0], re(e)) : re.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(re.unique(re.merge(this.get(), re(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        re.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return re.dir(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return re.dir(e, "parentNode", n)
            },
            next: function(e) {
                return r(e, "nextSibling")
            },
            prev: function(e) {
                return r(e, "previousSibling")
            },
            nextAll: function(e) {
                return re.dir(e, "nextSibling")
            },
            prevAll: function(e) {
                return re.dir(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return re.dir(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return re.dir(e, "previousSibling", n)
            },
            siblings: function(e) {
                return re.sibling((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return re.sibling(e.firstChild)
            },
            contents: function(e) {
                return re.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : re.merge([], e.childNodes)
            }
        }, function(e, t) {
            re.fn[e] = function(n, i) {
                var r = re.map(this, t, n);
                return "Until" !== e.slice(-5) && (i = n),
                i && "string" == typeof i && (r = re.filter(i, r)),
                this.length > 1 && (ye[e] || (r = re.unique(r)),
                ge.test(e) && (r = r.reverse())),
                    this.pushStack(r)
            }
        });
    var we = /\S+/g
        , be = {};
    re.Callbacks = function(e) {
        e = "string" == typeof e ? be[e] || a(e) : re.extend({}, e);
        var t, n, i, r, s, o, l = [], c = !e.once && [], d = function(a) {
            for (n = e.memory && a,
                     i = !0,
                     s = o || 0,
                     o = 0,
                     r = l.length,
                     t = !0; l && r > s; s++)
                if (l[s].apply(a[0], a[1]) === !1 && e.stopOnFalse) {
                    n = !1;
                    break
                }
            t = !1,
            l && (c ? c.length && d(c.shift()) : n ? l = [] : u.disable())
        }, u = {
            add: function() {
                if (l) {
                    var i = l.length;
                    !function a(t) {
                        re.each(t, function(t, n) {
                            var i = re.type(n);
                            "function" === i ? e.unique && u.has(n) || l.push(n) : n && n.length && "string" !== i && a(n)
                        })
                    }(arguments),
                        t ? r = l.length : n && (o = i,
                            d(n))
                }
                return this
            },
            remove: function() {
                return l && re.each(arguments, function(e, n) {
                    for (var i; (i = re.inArray(n, l, i)) > -1; )
                        l.splice(i, 1),
                        t && (r >= i && r--,
                        s >= i && s--)
                }),
                    this
            },
            has: function(e) {
                return e ? re.inArray(e, l) > -1 : !(!l || !l.length)
            },
            empty: function() {
                return l = [],
                    r = 0,
                    this
            },
            disable: function() {
                return l = c = n = void 0,
                    this
            },
            disabled: function() {
                return !l
            },
            lock: function() {
                return c = void 0,
                n || u.disable(),
                    this
            },
            locked: function() {
                return !c
            },
            fireWith: function(e, n) {
                return !l || i && !c || (n = n || [],
                    n = [e, n.slice ? n.slice() : n],
                    t ? c.push(n) : d(n)),
                    this
            },
            fire: function() {
                return u.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!i
            }
        };
        return u
    }
        ,
        re.extend({
            Deferred: function(e) {
                var t = [["resolve", "done", re.Callbacks("once memory"), "resolved"], ["reject", "fail", re.Callbacks("once memory"), "rejected"], ["notify", "progress", re.Callbacks("memory")]]
                    , n = "pending"
                    , i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var e = arguments;
                        return re.Deferred(function(n) {
                            re.each(t, function(t, a) {
                                var s = re.isFunction(e[t]) && e[t];
                                r[a[1]](function() {
                                    var e = s && s.apply(this, arguments);
                                    e && re.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === i ? n.promise() : this, s ? [e] : arguments)
                                })
                            }),
                                e = null
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? re.extend(e, i) : i
                    }
                }
                    , r = {};
                return i.pipe = i.then,
                    re.each(t, function(e, a) {
                        var s = a[2]
                            , o = a[3];
                        i[a[1]] = s.add,
                        o && s.add(function() {
                            n = o
                        }, t[1 ^ e][2].disable, t[2][2].lock),
                            r[a[0]] = function() {
                                return r[a[0] + "With"](this === r ? i : this, arguments),
                                    this
                            }
                            ,
                            r[a[0] + "With"] = s.fireWith
                    }),
                    i.promise(r),
                e && e.call(r, r),
                    r
            },
            when: function(e) {
                var t, n, i, r = 0, a = Y.call(arguments), s = a.length, o = 1 !== s || e && re.isFunction(e.promise) ? s : 0, l = 1 === o ? e : re.Deferred(), c = function(e, n, i) {
                    return function(r) {
                        n[e] = this,
                            i[e] = arguments.length > 1 ? Y.call(arguments) : r,
                            i === t ? l.notifyWith(n, i) : --o || l.resolveWith(n, i)
                    }
                };
                if (s > 1)
                    for (t = new Array(s),
                             n = new Array(s),
                             i = new Array(s); s > r; r++)
                        a[r] && re.isFunction(a[r].promise) ? a[r].promise().done(c(r, i, a)).fail(l.reject).progress(c(r, n, t)) : --o;
                return o || l.resolveWith(i, a),
                    l.promise()
            }
        });
    var _e;
    re.fn.ready = function(e) {
        return re.ready.promise().done(e),
            this
    }
        ,
        re.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(e) {
                e ? re.readyWait++ : re.ready(!0)
            },
            ready: function(e) {
                if (e === !0 ? !--re.readyWait : !re.isReady) {
                    if (!fe.body)
                        return setTimeout(re.ready);
                    re.isReady = !0,
                    e !== !0 && --re.readyWait > 0 || (_e.resolveWith(fe, [re]),
                    re.fn.triggerHandler && (re(fe).triggerHandler("ready"),
                        re(fe).off("ready")))
                }
            }
        }),
        re.ready.promise = function(t) {
            if (!_e)
                if (_e = re.Deferred(),
                    "complete" === fe.readyState)
                    setTimeout(re.ready);
                else if (fe.addEventListener)
                    fe.addEventListener("DOMContentLoaded", o, !1),
                        e.addEventListener("load", o, !1);
                else {
                    fe.attachEvent("onreadystatechange", o),
                        e.attachEvent("onload", o);
                    var n = !1;
                    try {
                        n = null == e.frameElement && fe.documentElement
                    } catch (i) {}
                    n && n.doScroll && !function r() {
                        if (!re.isReady) {
                            try {
                                n.doScroll("left")
                            } catch (e) {
                                return setTimeout(r, 50)
                            }
                            s(),
                                re.ready()
                        }
                    }()
                }
            return _e.promise(t)
        }
    ;
    var xe, Te = "undefined";
    for (xe in re(ne))
        break;
    ne.ownLast = "0" !== xe,
        ne.inlineBlockNeedsLayout = !1,
        re(function() {
            var e, t, n, i;
            n = fe.getElementsByTagName("body")[0],
            n && n.style && (t = fe.createElement("div"),
                i = fe.createElement("div"),
                i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                n.appendChild(i).appendChild(t),
            typeof t.style.zoom !== Te && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
                ne.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
            e && (n.style.zoom = 1)),
                n.removeChild(i))
        }),
        function() {
            var e = fe.createElement("div");
            if (null == ne.deleteExpando) {
                ne.deleteExpando = !0;
                try {
                    delete e.test
                } catch (t) {
                    ne.deleteExpando = !1
                }
            }
            e = null
        }(),
        re.acceptData = function(e) {
            var t = re.noData[(e.nodeName + " ").toLowerCase()]
                , n = +e.nodeType || 1;
            return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
        }
    ;
    var Ce = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , Se = /([A-Z])/g;
    re.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? re.cache[e[re.expando]] : e[re.expando],
            !!e && !c(e)
        },
        data: function(e, t, n) {
            return d(e, t, n)
        },
        removeData: function(e, t) {
            return u(e, t)
        },
        _data: function(e, t, n) {
            return d(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return u(e, t, !0)
        }
    }),
        re.fn.extend({
            data: function(e, t) {
                var n, i, r, a = this[0], s = a && a.attributes;
                if (void 0 === e) {
                    if (this.length && (r = re.data(a),
                        1 === a.nodeType && !re._data(a, "parsedAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && (i = s[n].name,
                            0 === i.indexOf("data-") && (i = re.camelCase(i.slice(5)),
                                l(a, i, r[i])));
                        re._data(a, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof e ? this.each(function() {
                    re.data(this, e)
                }) : arguments.length > 1 ? this.each(function() {
                    re.data(this, e, t)
                }) : a ? l(a, e, re.data(a, e)) : void 0
            },
            removeData: function(e) {
                return this.each(function() {
                    re.removeData(this, e)
                })
            }
        }),
        re.extend({
            queue: function(e, t, n) {
                var i;
                return e ? (t = (t || "fx") + "queue",
                    i = re._data(e, t),
                n && (!i || re.isArray(n) ? i = re._data(e, t, re.makeArray(n)) : i.push(n)),
                i || []) : void 0
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = re.queue(e, t)
                    , i = n.length
                    , r = n.shift()
                    , a = re._queueHooks(e, t)
                    , s = function() {
                    re.dequeue(e, t)
                };
                "inprogress" === r && (r = n.shift(),
                    i--),
                r && ("fx" === t && n.unshift("inprogress"),
                    delete a.stop,
                    r.call(e, s, a)),
                !i && a && a.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return re._data(e, n) || re._data(e, n, {
                        empty: re.Callbacks("once memory").add(function() {
                            re._removeData(e, t + "queue"),
                                re._removeData(e, n)
                        })
                    })
            }
        }),
        re.fn.extend({
            queue: function(e, t) {
                var n = 2;
                return "string" != typeof e && (t = e,
                    e = "fx",
                    n--),
                    arguments.length < n ? re.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                        var n = re.queue(this, e, t);
                        re._queueHooks(this, e),
                        "fx" === e && "inprogress" !== n[0] && re.dequeue(this, e)
                    })
            },
            dequeue: function(e) {
                return this.each(function() {
                    re.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, i = 1, r = re.Deferred(), a = this, s = this.length, o = function() {
                    --i || r.resolveWith(a, [a])
                };
                for ("string" != typeof e && (t = e,
                    e = void 0),
                         e = e || "fx"; s--; )
                    n = re._data(a[s], e + "queueHooks"),
                    n && n.empty && (i++,
                        n.empty.add(o));
                return o(),
                    r.promise(t)
            }
        });
    var ke = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , Ae = ["Top", "Right", "Bottom", "Left"]
        , Ee = function(e, t) {
        return e = t || e,
        "none" === re.css(e, "display") || !re.contains(e.ownerDocument, e)
    }
        , $e = re.access = function(e, t, n, i, r, a, s) {
        var o = 0
            , l = e.length
            , c = null == n;
        if ("object" === re.type(n)) {
            r = !0;
            for (o in n)
                re.access(e, t, o, n[o], !0, a, s)
        } else if (void 0 !== i && (r = !0,
            re.isFunction(i) || (s = !0),
            c && (s ? (t.call(e, i),
                t = null ) : (c = t,
                    t = function(e, t, n) {
                        return c.call(re(e), n)
                    }
            )),
                t))
            for (; l > o; o++)
                t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
        return r ? e : c ? t.call(e) : l ? t(e[0], n) : a
    }
        , Me = /^(?:checkbox|radio)$/i;
    !function() {
        var e = fe.createElement("input")
            , t = fe.createElement("div")
            , n = fe.createDocumentFragment();
        if (t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                ne.leadingWhitespace = 3 === t.firstChild.nodeType,
                ne.tbody = !t.getElementsByTagName("tbody").length,
                ne.htmlSerialize = !!t.getElementsByTagName("link").length,
                ne.html5Clone = "<:nav></:nav>" !== fe.createElement("nav").cloneNode(!0).outerHTML,
                e.type = "checkbox",
                e.checked = !0,
                n.appendChild(e),
                ne.appendChecked = e.checked,
                t.innerHTML = "<textarea>x</textarea>",
                ne.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue,
                n.appendChild(t),
                t.innerHTML = "<input type='radio' checked='checked' name='t'/>",
                ne.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked,
                ne.noCloneEvent = !0,
            t.attachEvent && (t.attachEvent("onclick", function() {
                ne.noCloneEvent = !1
            }),
                t.cloneNode(!0).click()),
            null == ne.deleteExpando) {
            ne.deleteExpando = !0;
            try {
                delete t.test
            } catch (i) {
                ne.deleteExpando = !1
            }
        }
    }(),
        function() {
            var t, n, i = fe.createElement("div");
            for (t in {
                submit: !0,
                change: !0,
                focusin: !0
            })
                n = "on" + t,
                (ne[t + "Bubbles"] = n in e) || (i.setAttribute(n, "t"),
                    ne[t + "Bubbles"] = i.attributes[n].expando === !1);
            i = null
        }();
    var Oe = /^(?:input|select|textarea)$/i
        , Ne = /^key/
        , Pe = /^(?:mouse|pointer|contextmenu)|click/
        , Ie = /^(?:focusinfocus|focusoutblur)$/
        , De = /^([^.]*)(?:\.(.+)|)$/;
    re.event = {
        global: {},
        add: function(e, t, n, i, r) {
            var a, s, o, l, c, d, u, p, h, f, m, v = re._data(e);
            if (v) {
                for (n.handler && (l = n,
                    n = l.handler,
                    r = l.selector),
                     n.guid || (n.guid = re.guid++),
                     (s = v.events) || (s = v.events = {}),
                     (d = v.handle) || (d = v.handle = function(e) {
                         return typeof re === Te || e && re.event.triggered === e.type ? void 0 : re.event.dispatch.apply(d.elem, arguments)
                     }
                         ,
                         d.elem = e),
                         t = (t || "").match(we) || [""],
                         o = t.length; o--; )
                    a = De.exec(t[o]) || [],
                        h = m = a[1],
                        f = (a[2] || "").split(".").sort(),
                    h && (c = re.event.special[h] || {},
                        h = (r ? c.delegateType : c.bindType) || h,
                        c = re.event.special[h] || {},
                        u = re.extend({
                            type: h,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && re.expr.match.needsContext.test(r),
                            namespace: f.join(".")
                        }, l),
                    (p = s[h]) || (p = s[h] = [],
                        p.delegateCount = 0,
                    c.setup && c.setup.call(e, i, f, d) !== !1 || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))),
                    c.add && (c.add.call(e, u),
                    u.handler.guid || (u.handler.guid = n.guid)),
                        r ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                        re.event.global[h] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var a, s, o, l, c, d, u, p, h, f, m, v = re.hasData(e) && re._data(e);
            if (v && (d = v.events)) {
                for (t = (t || "").match(we) || [""],
                         c = t.length; c--; )
                    if (o = De.exec(t[c]) || [],
                            h = m = o[1],
                            f = (o[2] || "").split(".").sort(),
                            h) {
                        for (u = re.event.special[h] || {},
                                 h = (i ? u.delegateType : u.bindType) || h,
                                 p = d[h] || [],
                                 o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 l = a = p.length; a--; )
                            s = p[a],
                            !r && m !== s.origType || n && n.guid !== s.guid || o && !o.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(a, 1),
                            s.selector && p.delegateCount--,
                            u.remove && u.remove.call(e, s));
                        l && !p.length && (u.teardown && u.teardown.call(e, f, v.handle) !== !1 || re.removeEvent(e, h, v.handle),
                            delete d[h])
                    } else
                        for (h in d)
                            re.event.remove(e, h + t[c], n, i, !0);
                re.isEmptyObject(d) && (delete v.handle,
                    re._removeData(e, "events"))
            }
        },
        trigger: function(t, n, i, r) {
            var a, s, o, l, c, d, u, p = [i || fe], h = te.call(t, "type") ? t.type : t, f = te.call(t, "namespace") ? t.namespace.split(".") : [];
            if (o = d = i = i || fe,
                3 !== i.nodeType && 8 !== i.nodeType && !Ie.test(h + re.event.triggered) && (h.indexOf(".") >= 0 && (f = h.split("."),
                    h = f.shift(),
                    f.sort()),
                    s = h.indexOf(":") < 0 && "on" + h,
                    t = t[re.expando] ? t : new re.Event(h,"object" == typeof t && t),
                    t.isTrigger = r ? 2 : 3,
                    t.namespace = f.join("."),
                    t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null ,
                    t.result = void 0,
                t.target || (t.target = i),
                    n = null == n ? [t] : re.makeArray(n, [t]),
                    c = re.event.special[h] || {},
                r || !c.trigger || c.trigger.apply(i, n) !== !1)) {
                if (!r && !c.noBubble && !re.isWindow(i)) {
                    for (l = c.delegateType || h,
                         Ie.test(l + h) || (o = o.parentNode); o; o = o.parentNode)
                        p.push(o),
                            d = o;
                    d === (i.ownerDocument || fe) && p.push(d.defaultView || d.parentWindow || e)
                }
                for (u = 0; (o = p[u++]) && !t.isPropagationStopped(); )
                    t.type = u > 1 ? l : c.bindType || h,
                        a = (re._data(o, "events") || {})[t.type] && re._data(o, "handle"),
                    a && a.apply(o, n),
                        a = s && o[s],
                    a && a.apply && re.acceptData(o) && (t.result = a.apply(o, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = h,
                    !r && !t.isDefaultPrevented() && (!c._default || c._default.apply(p.pop(), n) === !1) && re.acceptData(i) && s && i[h] && !re.isWindow(i)) {
                    d = i[s],
                    d && (i[s] = null ),
                        re.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) {}
                    re.event.triggered = void 0,
                    d && (i[s] = d)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = re.event.fix(e);
            var t, n, i, r, a, s = [], o = Y.call(arguments), l = (re._data(this, "events") || {})[e.type] || [], c = re.event.special[e.type] || {};
            if (o[0] = e,
                    e.delegateTarget = this,
                !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
                for (s = re.event.handlers.call(this, e, l),
                         t = 0; (r = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = r.elem,
                             a = 0; (i = r.handlers[a++]) && !e.isImmediatePropagationStopped(); )
                        e.namespace_re && !e.namespace_re.test(i.namespace) || (e.handleObj = i,
                            e.data = i.data,
                            n = ((re.event.special[i.origType] || {}).handle || i.handler).apply(r.elem, o),
                        void 0 !== n && (e.result = n) === !1 && (e.preventDefault(),
                            e.stopPropagation()));
                return c.postDispatch && c.postDispatch.call(this, e),
                    e.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, s = [], o = t.delegateCount, l = e.target;
            if (o && l.nodeType && (!e.button || "click" !== e.type))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                                 a = 0; o > a; a++)
                            i = t[a],
                                n = i.selector + " ",
                            void 0 === r[n] && (r[n] = i.needsContext ? re(n, this).index(l) >= 0 : re.find(n, this, null , [l]).length),
                            r[n] && r.push(i);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return o < t.length && s.push({
                elem: this,
                handlers: t.slice(o)
            }),
                s
        },
        fix: function(e) {
            if (e[re.expando])
                return e;
            var t, n, i, r = e.type, a = e, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Pe.test(r) ? this.mouseHooks : Ne.test(r) ? this.keyHooks : {}),
                     i = s.props ? this.props.concat(s.props) : this.props,
                     e = new re.Event(a),
                     t = i.length; t--; )
                n = i[t],
                    e[n] = a[n];
            return e.target || (e.target = a.srcElement || fe),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
                e.metaKey = !!e.metaKey,
                s.filter ? s.filter(e, a) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                    e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, i, r, a = t.button, s = t.fromElement;
                return null == e.pageX && null != t.clientX && (i = e.target.ownerDocument || fe,
                    r = i.documentElement,
                    n = i.body,
                    e.pageX = t.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0),
                    e.pageY = t.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
                e.which || void 0 === a || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0),
                    e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== f() && this.focus)
                        try {
                            return this.focus(),
                                !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return re.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                        !1) : void 0
                },
                _default: function(e) {
                    return re.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = re.extend(new re.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? re.event.trigger(r, null , t) : re.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
        re.removeEvent = fe.removeEventListener ? function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n, !1)
        }
            : function(e, t, n) {
            var i = "on" + t;
            e.detachEvent && (typeof e[i] === Te && (e[i] = null ),
                e.detachEvent(i, n))
        }
        ,
        re.Event = function(e, t) {
            return this instanceof re.Event ? (e && e.type ? (this.originalEvent = e,
                this.type = e.type,
                this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? p : h) : this.type = e,
            t && re.extend(this, t),
                this.timeStamp = e && e.timeStamp || re.now(),
                void (this[re.expando] = !0)) : new re.Event(e,t)
        }
        ,
        re.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = p,
                e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = p,
                e && (e.stopPropagation && e.stopPropagation(),
                    e.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = p,
                e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        re.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, t) {
            re.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function(e) {
                    var n, i = this, r = e.relatedTarget, a = e.handleObj;
                    return r && (r === i || re.contains(i, r)) || (e.type = a.origType,
                        n = a.handler.apply(this, arguments),
                        e.type = t),
                        n
                }
            }
        }),
    ne.submitBubbles || (re.event.special.submit = {
        setup: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                    , n = re.nodeName(t, "input") || re.nodeName(t, "button") ? t.form : void 0;
                n && !re._data(n, "submitBubbles") && (re.event.add(n, "submit._submit", function(e) {
                    e._submit_bubble = !0
                }),
                    re._data(n, "submitBubbles", !0))
            })
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble,
            this.parentNode && !e.isTrigger && re.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return re.nodeName(this, "form") ? !1 : void re.event.remove(this, "._submit")
        }
    }),
    ne.changeBubbles || (re.event.special.change = {
        setup: function() {
            return Oe.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (re.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }),
                re.event.add(this, "click._change", function(e) {
                    this._just_changed && !e.isTrigger && (this._just_changed = !1),
                        re.event.simulate("change", this, e, !0)
                })),
                !1) : void re.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Oe.test(t.nodeName) && !re._data(t, "changeBubbles") && (re.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || re.event.simulate("change", this.parentNode, e, !0)
                }),
                    re._data(t, "changeBubbles", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return re.event.remove(this, "._change"),
                !Oe.test(this.nodeName)
        }
    }),
    ne.focusinBubbles || re.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            re.event.simulate(t, e.target, re.event.fix(e), !0)
        };
        re.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this
                    , r = re._data(i, t);
                r || i.addEventListener(e, n, !0),
                    re._data(i, t, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                    , r = re._data(i, t) - 1;
                r ? re._data(i, t, r) : (i.removeEventListener(e, n, !0),
                    re._removeData(i, t))
            }
        }
    }),
        re.fn.extend({
            on: function(e, t, n, i, r) {
                var a, s;
                if ("object" == typeof e) {
                    "string" != typeof t && (n = n || t,
                        t = void 0);
                    for (a in e)
                        this.on(a, t, n, e[a], r);
                    return this
                }
                if (null == n && null == i ? (i = t,
                        n = t = void 0) : null == i && ("string" == typeof t ? (i = n,
                        n = void 0) : (i = n,
                        n = t,
                        t = void 0)),
                    i === !1)
                    i = h;
                else if (!i)
                    return this;
                return 1 === r && (s = i,
                    i = function(e) {
                        return re().off(e),
                            s.apply(this, arguments)
                    }
                    ,
                    i.guid = s.guid || (s.guid = re.guid++)),
                    this.each(function() {
                        re.event.add(this, e, i, n, t)
                    })
            },
            one: function(e, t, n, i) {
                return this.on(e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    return i = e.handleObj,
                        re(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                if ("object" == typeof e) {
                    for (r in e)
                        this.off(r, t, e[r]);
                    return this
                }
                return t !== !1 && "function" != typeof t || (n = t,
                    t = void 0),
                n === !1 && (n = h),
                    this.each(function() {
                        re.event.remove(this, e, n, t)
                    })
            },
            trigger: function(e, t) {
                return this.each(function() {
                    re.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                return n ? re.event.trigger(e, t, n, !0) : void 0
            }
        });
    var Le = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video"
        , je = / jQuery\d+="(?:null|\d+)"/g
        , Be = new RegExp("<(?:" + Le + ")[\\s/>]","i")
        , Re = /^\s+/
        , Fe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , He = /<([\w:]+)/
        , ze = /<tbody/i
        , We = /<|&#?\w+;/
        , Ge = /<(?:script|style|link)/i
        , qe = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Ue = /^$|\/(?:java|ecma)script/i
        , Ve = /^true\/(.*)/
        , Xe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Ye = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ne.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }
        , Ke = m(fe)
        , Je = Ke.appendChild(fe.createElement("div"));
    Ye.optgroup = Ye.option,
        Ye.tbody = Ye.tfoot = Ye.colgroup = Ye.caption = Ye.thead,
        Ye.th = Ye.td,
        re.extend({
            clone: function(e, t, n) {
                var i, r, a, s, o, l = re.contains(e.ownerDocument, e);
                if (ne.html5Clone || re.isXMLDoc(e) || !Be.test("<" + e.nodeName + ">") ? a = e.cloneNode(!0) : (Je.innerHTML = e.outerHTML,
                        Je.removeChild(a = Je.firstChild)),
                        !(ne.noCloneEvent && ne.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || re.isXMLDoc(e)))
                    for (i = v(a),
                             o = v(e),
                             s = 0; null != (r = o[s]); ++s)
                        i[s] && T(r, i[s]);
                if (t)
                    if (n)
                        for (o = o || v(e),
                                 i = i || v(a),
                                 s = 0; null != (r = o[s]); s++)
                            x(r, i[s]);
                    else
                        x(e, a);
                return i = v(a, "script"),
                i.length > 0 && _(i, !l && v(e, "script")),
                    i = o = r = null ,
                    a
            },
            buildFragment: function(e, t, n, i) {
                for (var r, a, s, o, l, c, d, u = e.length, p = m(t), h = [], f = 0; u > f; f++)
                    if (a = e[f],
                        a || 0 === a)
                        if ("object" === re.type(a))
                            re.merge(h, a.nodeType ? [a] : a);
                        else if (We.test(a)) {
                            for (o = o || p.appendChild(t.createElement("div")),
                                     l = (He.exec(a) || ["", ""])[1].toLowerCase(),
                                     d = Ye[l] || Ye._default,
                                     o.innerHTML = d[1] + a.replace(Fe, "<$1></$2>") + d[2],
                                     r = d[0]; r--; )
                                o = o.lastChild;
                            if (!ne.leadingWhitespace && Re.test(a) && h.push(t.createTextNode(Re.exec(a)[0])),
                                    !ne.tbody)
                                for (a = "table" !== l || ze.test(a) ? "<table>" !== d[1] || ze.test(a) ? 0 : o : o.firstChild,
                                         r = a && a.childNodes.length; r--; )
                                    re.nodeName(c = a.childNodes[r], "tbody") && !c.childNodes.length && a.removeChild(c);
                            for (re.merge(h, o.childNodes),
                                     o.textContent = ""; o.firstChild; )
                                o.removeChild(o.firstChild);
                            o = p.lastChild
                        } else
                            h.push(t.createTextNode(a));
                for (o && p.removeChild(o),
                     ne.appendChecked || re.grep(v(h, "input"), g),
                         f = 0; a = h[f++]; )
                    if ((!i || -1 === re.inArray(a, i)) && (s = re.contains(a.ownerDocument, a),
                            o = v(p.appendChild(a), "script"),
                        s && _(o),
                            n))
                        for (r = 0; a = o[r++]; )
                            Ue.test(a.type || "") && n.push(a);
                return o = null ,
                    p
            },
            cleanData: function(e, t) {
                for (var n, i, r, a, s = 0, o = re.expando, l = re.cache, c = ne.deleteExpando, d = re.event.special; null != (n = e[s]); s++)
                    if ((t || re.acceptData(n)) && (r = n[o],
                            a = r && l[r])) {
                        if (a.events)
                            for (i in a.events)
                                d[i] ? re.event.remove(n, i) : re.removeEvent(n, i, a.handle);
                        l[r] && (delete l[r],
                            c ? delete n[o] : typeof n.removeAttribute !== Te ? n.removeAttribute(o) : n[o] = null ,
                            X.push(r))
                    }
            }
        }),
        re.fn.extend({
            text: function(e) {
                return $e(this, function(e) {
                    return void 0 === e ? re.text(this) : this.empty().append((this[0] && this[0].ownerDocument || fe).createTextNode(e))
                }, null , e, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.appendChild(e)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = y(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            remove: function(e, t) {
                for (var n, i = e ? re.filter(e, this) : this, r = 0; null != (n = i[r]); r++)
                    t || 1 !== n.nodeType || re.cleanData(v(n)),
                    n.parentNode && (t && re.contains(n.ownerDocument, n) && _(v(n, "script")),
                        n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++) {
                    for (1 === e.nodeType && re.cleanData(v(e, !1)); e.firstChild; )
                        e.removeChild(e.firstChild);
                    e.options && re.nodeName(e, "select") && (e.options.length = 0)
                }
                return this
            },
            clone: function(e, t) {
                return e = null == e ? !1 : e,
                    t = null == t ? e : t,
                    this.map(function() {
                        return re.clone(this, e, t)
                    })
            },
            html: function(e) {
                return $e(this, function(e) {
                    var t = this[0] || {}
                        , n = 0
                        , i = this.length;
                    if (void 0 === e)
                        return 1 === t.nodeType ? t.innerHTML.replace(je, "") : void 0;
                    if ("string" == typeof e && !Ge.test(e) && (ne.htmlSerialize || !Be.test(e)) && (ne.leadingWhitespace || !Re.test(e)) && !Ye[(He.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = e.replace(Fe, "<$1></$2>");
                        try {
                            for (; i > n; n++)
                                t = this[n] || {},
                                1 === t.nodeType && (re.cleanData(v(t, !1)),
                                    t.innerHTML = e);
                            t = 0
                        } catch (r) {}
                    }
                    t && this.empty().append(e)
                }, null , e, arguments.length)
            },
            replaceWith: function() {
                var e = arguments[0];
                return this.domManip(arguments, function(t) {
                    e = this.parentNode,
                        re.cleanData(v(this)),
                    e && e.replaceChild(t, this)
                }),
                    e && (e.length || e.nodeType) ? this : this.remove()
            },
            detach: function(e) {
                return this.remove(e, !0)
            },
            domManip: function(e, t) {
                e = K.apply([], e);
                var n, i, r, a, s, o, l = 0, c = this.length, d = this, u = c - 1, p = e[0], h = re.isFunction(p);
                if (h || c > 1 && "string" == typeof p && !ne.checkClone && qe.test(p))
                    return this.each(function(n) {
                        var i = d.eq(n);
                        h && (e[0] = p.call(this, n, i.html())),
                            i.domManip(e, t)
                    });
                if (c && (o = re.buildFragment(e, this[0].ownerDocument, !1, this),
                        n = o.firstChild,
                    1 === o.childNodes.length && (o = n),
                        n)) {
                    for (a = re.map(v(o, "script"), w),
                             r = a.length; c > l; l++)
                        i = o,
                        l !== u && (i = re.clone(i, !0, !0),
                        r && re.merge(a, v(i, "script"))),
                            t.call(this[l], i, l);
                    if (r)
                        for (s = a[a.length - 1].ownerDocument,
                                 re.map(a, b),
                                 l = 0; r > l; l++)
                            i = a[l],
                            Ue.test(i.type || "") && !re._data(i, "globalEval") && re.contains(s, i) && (i.src ? re._evalUrl && re._evalUrl(i.src) : re.globalEval((i.text || i.textContent || i.innerHTML || "").replace(Xe, "")));
                    o = n = null
                }
                return this
            }
        }),
        re.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, t) {
            re.fn[e] = function(e) {
                for (var n, i = 0, r = [], a = re(e), s = a.length - 1; s >= i; i++)
                    n = i === s ? this : this.clone(!0),
                        re(a[i])[t](n),
                        J.apply(r, n.get());
                return this.pushStack(r)
            }
        });
    var Qe, Ze = {};
    !function() {
        var e;
        ne.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, i;
            return n = fe.getElementsByTagName("body")[0],
                n && n.style ? (t = fe.createElement("div"),
                    i = fe.createElement("div"),
                    i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(i).appendChild(t),
                typeof t.style.zoom !== Te && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
                    t.appendChild(fe.createElement("div")).style.width = "5px",
                    e = 3 !== t.offsetWidth),
                    n.removeChild(i),
                    e) : void 0
        }
    }();
    var et, tt, nt = /^margin/, it = new RegExp("^(" + ke + ")(?!px)[a-z%]+$","i"), rt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (et = function(t) {
            return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null ) : e.getComputedStyle(t, null )
        }
            ,
            tt = function(e, t, n) {
                var i, r, a, s, o = e.style;
                return n = n || et(e),
                    s = n ? n.getPropertyValue(t) || n[t] : void 0,
                n && ("" !== s || re.contains(e.ownerDocument, e) || (s = re.style(e, t)),
                it.test(s) && nt.test(t) && (i = o.width,
                    r = o.minWidth,
                    a = o.maxWidth,
                    o.minWidth = o.maxWidth = o.width = s,
                    s = n.width,
                    o.width = i,
                    o.minWidth = r,
                    o.maxWidth = a)),
                    void 0 === s ? s : s + ""
            }
    ) : fe.documentElement.currentStyle && (et = function(e) {
            return e.currentStyle
        }
            ,
            tt = function(e, t, n) {
                var i, r, a, s, o = e.style;
                return n = n || et(e),
                    s = n ? n[t] : void 0,
                null == s && o && o[t] && (s = o[t]),
                it.test(s) && !rt.test(t) && (i = o.left,
                    r = e.runtimeStyle,
                    a = r && r.left,
                a && (r.left = e.currentStyle.left),
                    o.left = "fontSize" === t ? "1em" : s,
                    s = o.pixelLeft + "px",
                    o.left = i,
                a && (r.left = a)),
                    void 0 === s ? s : s + "" || "auto"
            }
    ),
        function() {
            function t() {
                var t, n, i, r;
                n = fe.getElementsByTagName("body")[0],
                n && n.style && (t = fe.createElement("div"),
                    i = fe.createElement("div"),
                    i.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
                    n.appendChild(i).appendChild(t),
                    t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    a = s = !1,
                    l = !0,
                e.getComputedStyle && (a = "1%" !== (e.getComputedStyle(t, null ) || {}).top,
                    s = "4px" === (e.getComputedStyle(t, null ) || {
                            width: "4px"
                        }).width,
                    r = t.appendChild(fe.createElement("div")),
                    r.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    r.style.marginRight = r.style.width = "0",
                    t.style.width = "1px",
                    l = !parseFloat((e.getComputedStyle(r, null ) || {}).marginRight),
                    t.removeChild(r)),
                    t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                    r = t.getElementsByTagName("td"),
                    r[0].style.cssText = "margin:0;border:0;padding:0;display:none",
                    o = 0 === r[0].offsetHeight,
                o && (r[0].style.display = "",
                    r[1].style.display = "none",
                    o = 0 === r[0].offsetHeight),
                    n.removeChild(i))
            }
            var n, i, r, a, s, o, l;
            n = fe.createElement("div"),
                n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                r = n.getElementsByTagName("a")[0],
                i = r && r.style,
            i && (i.cssText = "float:left;opacity:.5",
                ne.opacity = "0.5" === i.opacity,
                ne.cssFloat = !!i.cssFloat,
                n.style.backgroundClip = "content-box",
                n.cloneNode(!0).style.backgroundClip = "",
                ne.clearCloneStyle = "content-box" === n.style.backgroundClip,
                ne.boxSizing = "" === i.boxSizing || "" === i.MozBoxSizing || "" === i.WebkitBoxSizing,
                re.extend(ne, {
                    reliableHiddenOffsets: function() {
                        return null == o && t(),
                            o
                    },
                    boxSizingReliable: function() {
                        return null == s && t(),
                            s
                    },
                    pixelPosition: function() {
                        return null == a && t(),
                            a
                    },
                    reliableMarginRight: function() {
                        return null == l && t(),
                            l
                    }
                }))
        }(),
        re.swap = function(e, t, n, i) {
            var r, a, s = {};
            for (a in t)
                s[a] = e.style[a],
                    e.style[a] = t[a];
            r = n.apply(e, i || []);
            for (a in t)
                e.style[a] = s[a];
            return r
        }
    ;
    var at = /alpha\([^)]*\)/i
        , st = /opacity\s*=\s*([^)]*)/
        , ot = /^(none|table(?!-c[ea]).+)/
        , lt = new RegExp("^(" + ke + ")(.*)$","i")
        , ct = new RegExp("^([+-])=(" + ke + ")","i")
        , dt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , ut = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , pt = ["Webkit", "O", "Moz", "ms"];
    re.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = tt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ne.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = re.camelCase(t), l = e.style;
                if (t = re.cssProps[o] || (re.cssProps[o] = A(l, o)),
                        s = re.cssHooks[t] || re.cssHooks[o],
                    void 0 === n)
                    return s && "get"in s && void 0 !== (r = s.get(e, !1, i)) ? r : l[t];
                if (a = typeof n,
                    "string" === a && (r = ct.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(re.css(e, t)),
                        a = "number"),
                    null != n && n === n && ("number" !== a || re.cssNumber[o] || (n += "px"),
                    ne.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                        !(s && "set"in s && void 0 === (n = s.set(e, n, i)))))
                    try {
                        l[t] = n
                    } catch (c) {}
            }
        },
        css: function(e, t, n, i) {
            var r, a, s, o = re.camelCase(t);
            return t = re.cssProps[o] || (re.cssProps[o] = A(e.style, o)),
                s = re.cssHooks[t] || re.cssHooks[o],
            s && "get"in s && (a = s.get(e, !0, n)),
            void 0 === a && (a = tt(e, t, i)),
            "normal" === a && t in ut && (a = ut[t]),
                "" === n || n ? (r = parseFloat(a),
                    n === !0 || re.isNumeric(r) ? r || 0 : a) : a
        }
    }),
        re.each(["height", "width"], function(e, t) {
            re.cssHooks[t] = {
                get: function(e, n, i) {
                    return n ? ot.test(re.css(e, "display")) && 0 === e.offsetWidth ? re.swap(e, dt, function() {
                        return O(e, t, i)
                    }) : O(e, t, i) : void 0
                },
                set: function(e, n, i) {
                    var r = i && et(e);
                    return $(e, n, i ? M(e, t, i, ne.boxSizing && "border-box" === re.css(e, "boxSizing", !1, r), r) : 0)
                }
            }
        }),
    ne.opacity || (re.cssHooks.opacity = {
        get: function(e, t) {
            return st.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
                , i = e.currentStyle
                , r = re.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
                , a = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === re.trim(a.replace(at, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || i && !i.filter) || (n.filter = at.test(a) ? a.replace(at, r) : a + " " + r)
        }
    }),
        re.cssHooks.marginRight = k(ne.reliableMarginRight, function(e, t) {
            return t ? re.swap(e, {
                display: "inline-block"
            }, tt, [e, "marginRight"]) : void 0
        }),
        re.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(e, t) {
            re.cssHooks[e + t] = {
                expand: function(n) {
                    for (var i = 0, r = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                        r[e + Ae[i] + t] = a[i] || a[i - 2] || a[0];
                    return r
                }
            },
            nt.test(e) || (re.cssHooks[e + t].set = $)
        }),
        re.fn.extend({
            css: function(e, t) {
                return $e(this, function(e, t, n) {
                    var i, r, a = {}, s = 0;
                    if (re.isArray(t)) {
                        for (i = et(e),
                                 r = t.length; r > s; s++)
                            a[t[s]] = re.css(e, t[s], !1, i);
                        return a
                    }
                    return void 0 !== n ? re.style(e, t, n) : re.css(e, t)
                }, e, t, arguments.length > 1)
            },
            show: function() {
                return E(this, !0)
            },
            hide: function() {
                return E(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    Ee(this) ? re(this).show() : re(this).hide()
                })
            }
        }),
        re.Tween = N,
        N.prototype = {
            constructor: N,
            init: function(e, t, n, i, r, a) {
                this.elem = e,
                    this.prop = n,
                    this.easing = r || "swing",
                    this.options = t,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = a || (re.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = N.propHooks[this.prop];
                return e && e.get ? e.get(this) : N.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = N.propHooks[this.prop];
                return this.options.duration ? this.pos = t = re.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                    this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : N.propHooks._default.set(this),
                    this
            }
        },
        N.prototype.init.prototype = N.prototype,
        N.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = re.css(e.elem, e.prop, ""),
                        t && "auto" !== t ? t : 0) : e.elem[e.prop]
                },
                set: function(e) {
                    re.fx.step[e.prop] ? re.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[re.cssProps[e.prop]] || re.cssHooks[e.prop]) ? re.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
                }
            }
        },
        N.propHooks.scrollTop = N.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        re.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }
        },
        re.fx = N.prototype.init,
        re.fx.step = {};
    var ht, ft, mt = /^(?:toggle|show|hide)$/, vt = new RegExp("^(?:([+-])=|)(" + ke + ")([a-z%]*)$","i"), gt = /queueHooks$/, yt = [L], wt = {
        "*": [function(e, t) {
            var n = this.createTween(e, t)
                , i = n.cur()
                , r = vt.exec(t)
                , a = r && r[3] || (re.cssNumber[e] ? "" : "px")
                , s = (re.cssNumber[e] || "px" !== a && +i) && vt.exec(re.css(n.elem, e))
                , o = 1
                , l = 20;
            if (s && s[3] !== a) {
                a = a || s[3],
                    r = r || [],
                    s = +i || 1;
                do
                    o = o || ".5",
                        s /= o,
                        re.style(n.elem, e, s + a);
                while (o !== (o = n.cur() / i) && 1 !== o && --l)
            }
            return r && (s = n.start = +s || +i || 0,
                n.unit = a,
                n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
                n
        }
        ]
    };
    re.Animation = re.extend(B, {
        tweener: function(e, t) {
            re.isFunction(e) ? (t = e,
                e = ["*"]) : e = e.split(" ");
            for (var n, i = 0, r = e.length; r > i; i++)
                n = e[i],
                    wt[n] = wt[n] || [],
                    wt[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? yt.unshift(e) : yt.push(e)
        }
    }),
        re.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? re.extend({}, e) : {
                complete: n || !n && t || re.isFunction(e) && e,
                duration: e,
                easing: n && t || t && !re.isFunction(t) && t
            };
            return i.duration = re.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in re.fx.speeds ? re.fx.speeds[i.duration] : re.fx.speeds._default,
            null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    re.isFunction(i.old) && i.old.call(this),
                    i.queue && re.dequeue(this, i.queue)
                }
                ,
                i
        }
        ,
        re.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(Ee).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(e, t, n, i) {
                var r = re.isEmptyObject(e)
                    , a = re.speed(t, n, i)
                    , s = function() {
                    var t = B(this, re.extend({}, e), a);
                    (r || re._data(this, "finish")) && t.stop(!0)
                };
                return s.finish = s,
                    r || a.queue === !1 ? this.each(s) : this.queue(a.queue, s)
            },
            stop: function(e, t, n) {
                var i = function(e) {
                    var t = e.stop;
                    delete e.stop,
                        t(n)
                };
                return "string" != typeof e && (n = t,
                    t = e,
                    e = void 0),
                t && e !== !1 && this.queue(e || "fx", []),
                    this.each(function() {
                        var t = !0
                            , r = null != e && e + "queueHooks"
                            , a = re.timers
                            , s = re._data(this);
                        if (r)
                            s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s)
                                s[r] && s[r].stop && gt.test(r) && i(s[r]);
                        for (r = a.length; r--; )
                            a[r].elem !== this || null != e && a[r].queue !== e || (a[r].anim.stop(n),
                                t = !1,
                                a.splice(r, 1));
                        !t && n || re.dequeue(this, e)
                    })
            },
            finish: function(e) {
                return e !== !1 && (e = e || "fx"),
                    this.each(function() {
                        var t, n = re._data(this), i = n[e + "queue"], r = n[e + "queueHooks"], a = re.timers, s = i ? i.length : 0;
                        for (n.finish = !0,
                                 re.queue(this, e, []),
                             r && r.stop && r.stop.call(this, !0),
                                 t = a.length; t--; )
                            a[t].elem === this && a[t].queue === e && (a[t].anim.stop(!0),
                                a.splice(t, 1));
                        for (t = 0; s > t; t++)
                            i[t] && i[t].finish && i[t].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        re.each(["toggle", "show", "hide"], function(e, t) {
            var n = re.fn[t];
            re.fn[t] = function(e, i, r) {
                return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(I(t, !0), e, i, r)
            }
        }),
        re.each({
            slideDown: I("show"),
            slideUp: I("hide"),
            slideToggle: I("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, t) {
            re.fn[e] = function(e, n, i) {
                return this.animate(t, e, n, i)
            }
        }),
        re.timers = [],
        re.fx.tick = function() {
            var e, t = re.timers, n = 0;
            for (ht = re.now(); n < t.length; n++)
                e = t[n],
                e() || t[n] !== e || t.splice(n--, 1);
            t.length || re.fx.stop(),
                ht = void 0
        }
        ,
        re.fx.timer = function(e) {
            re.timers.push(e),
                e() ? re.fx.start() : re.timers.pop()
        }
        ,
        re.fx.interval = 13,
        re.fx.start = function() {
            ft || (ft = setInterval(re.fx.tick, re.fx.interval))
        }
        ,
        re.fx.stop = function() {
            clearInterval(ft),
                ft = null
        }
        ,
        re.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        re.fn.delay = function(e, t) {
            return e = re.fx ? re.fx.speeds[e] || e : e,
                t = t || "fx",
                this.queue(t, function(t, n) {
                    var i = setTimeout(t, e);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
        }
        ,
        function() {
            var e, t, n, i, r;
            t = fe.createElement("div"),
                t.setAttribute("className", "t"),
                t.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
                i = t.getElementsByTagName("a")[0],
                n = fe.createElement("select"),
                r = n.appendChild(fe.createElement("option")),
                e = t.getElementsByTagName("input")[0],
                i.style.cssText = "top:1px",
                ne.getSetAttribute = "t" !== t.className,
                ne.style = /top/.test(i.getAttribute("style")),
                ne.hrefNormalized = "/a" === i.getAttribute("href"),
                ne.checkOn = !!e.value,
                ne.optSelected = r.selected,
                ne.enctype = !!fe.createElement("form").enctype,
                n.disabled = !0,
                ne.optDisabled = !r.disabled,
                e = fe.createElement("input"),
                e.setAttribute("value", ""),
                ne.input = "" === e.getAttribute("value"),
                e.value = "t",
                e.setAttribute("type", "radio"),
                ne.radioValue = "t" === e.value
        }();
    var bt = /\r/g;
    re.fn.extend({
        val: function(e) {
            var t, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = re.isFunction(e),
                        this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = i ? e.call(this, n, re(this).val()) : e,
                                null == r ? r = "" : "number" == typeof r ? r += "" : re.isArray(r) && (r = re.map(r, function(e) {
                                    return null == e ? "" : e + ""
                                })),
                                t = re.valHooks[this.type] || re.valHooks[this.nodeName.toLowerCase()],
                            t && "set"in t && void 0 !== t.set(this, r, "value") || (this.value = r))
                        });
                if (r)
                    return t = re.valHooks[r.type] || re.valHooks[r.nodeName.toLowerCase()],
                        t && "get"in t && void 0 !== (n = t.get(r, "value")) ? n : (n = r.value,
                            "string" == typeof n ? n.replace(bt, "") : null == n ? "" : n)
            }
        }
    }),
        re.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = re.find.attr(e, "value");
                        return null != t ? t : re.trim(re.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n, i = e.options, r = e.selectedIndex, a = "select-one" === e.type || 0 > r, s = a ? null : [], o = a ? r + 1 : i.length, l = 0 > r ? o : a ? r : 0; o > l; l++)
                            if (n = i[l],
                                (n.selected || l === r) && (ne.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !re.nodeName(n.parentNode, "optgroup"))) {
                                if (t = re(n).val(),
                                        a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, a = re.makeArray(t), s = r.length; s--; )
                            if (i = r[s],
                                re.inArray(re.valHooks.option.get(i), a) >= 0)
                                try {
                                    i.selected = n = !0
                                } catch (o) {
                                    i.scrollHeight
                                }
                            else
                                i.selected = !1;
                        return n || (e.selectedIndex = -1),
                            r
                    }
                }
            }
        }),
        re.each(["radio", "checkbox"], function() {
            re.valHooks[this] = {
                set: function(e, t) {
                    return re.isArray(t) ? e.checked = re.inArray(re(e).val(), t) >= 0 : void 0
                }
            },
            ne.checkOn || (re.valHooks[this].get = function(e) {
                    return null === e.getAttribute("value") ? "on" : e.value
                }
            )
        });
    var _t, xt, Tt = re.expr.attrHandle, Ct = /^(?:checked|selected)$/i, St = ne.getSetAttribute, kt = ne.input;
    re.fn.extend({
        attr: function(e, t) {
            return $e(this, re.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                re.removeAttr(this, e)
            })
        }
    }),
        re.extend({
            attr: function(e, t, n) {
                var i, r, a = e.nodeType;
                if (e && 3 !== a && 8 !== a && 2 !== a)
                    return typeof e.getAttribute === Te ? re.prop(e, t, n) : (1 === a && re.isXMLDoc(e) || (t = t.toLowerCase(),
                        i = re.attrHooks[t] || (re.expr.match.bool.test(t) ? xt : _t)),
                        void 0 === n ? i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = re.find.attr(e, t),
                            null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                            n) : void re.removeAttr(e, t))
            },
            removeAttr: function(e, t) {
                var n, i, r = 0, a = t && t.match(we);
                if (a && 1 === e.nodeType)
                    for (; n = a[r++]; )
                        i = re.propFix[n] || n,
                            re.expr.match.bool.test(n) ? kt && St || !Ct.test(n) ? e[i] = !1 : e[re.camelCase("default-" + n)] = e[i] = !1 : re.attr(e, n, ""),
                            e.removeAttribute(St ? n : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!ne.radioValue && "radio" === t && re.nodeName(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                                t
                        }
                    }
                }
            }
        }),
        xt = {
            set: function(e, t, n) {
                return t === !1 ? re.removeAttr(e, n) : kt && St || !Ct.test(n) ? e.setAttribute(!St && re.propFix[n] || n, n) : e[re.camelCase("default-" + n)] = e[n] = !0,
                    n
            }
        },
        re.each(re.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var n = Tt[t] || re.find.attr;
            Tt[t] = kt && St || !Ct.test(t) ? function(e, t, i) {
                var r, a;
                return i || (a = Tt[t],
                    Tt[t] = r,
                    r = null != n(e, t, i) ? t.toLowerCase() : null ,
                    Tt[t] = a),
                    r
            }
                : function(e, t, n) {
                return n ? void 0 : e[re.camelCase("default-" + t)] ? t.toLowerCase() : null
            }
        }),
    kt && St || (re.attrHooks.value = {
        set: function(e, t, n) {
            return re.nodeName(e, "input") ? void (e.defaultValue = t) : _t && _t.set(e, t, n)
        }
    }),
    St || (_t = {
        set: function(e, t, n) {
            var i = e.getAttributeNode(n);
            return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(n)),
                i.value = t += "",
                "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
        Tt.id = Tt.name = Tt.coords = function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && "" !== i.value ? i.value : null
        }
        ,
        re.valHooks.button = {
            get: function(e, t) {
                var n = e.getAttributeNode(t);
                return n && n.specified ? n.value : void 0
            },
            set: _t.set
        },
        re.attrHooks.contenteditable = {
            set: function(e, t, n) {
                _t.set(e, "" === t ? !1 : t, n)
            }
        },
        re.each(["width", "height"], function(e, t) {
            re.attrHooks[t] = {
                set: function(e, n) {
                    return "" === n ? (e.setAttribute(t, "auto"),
                        n) : void 0
                }
            }
        })),
    ne.style || (re.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var At = /^(?:input|select|textarea|button|object)$/i
        , Et = /^(?:a|area)$/i;
    re.fn.extend({
        prop: function(e, t) {
            return $e(this, re.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = re.propFix[e] || e,
                this.each(function() {
                    try {
                        this[e] = void 0,
                            delete this[e]
                    } catch (t) {}
                })
        }
    }),
        re.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(e, t, n) {
                var i, r, a, s = e.nodeType;
                if (e && 3 !== s && 8 !== s && 2 !== s)
                    return a = 1 !== s || !re.isXMLDoc(e),
                    a && (t = re.propFix[t] || t,
                        r = re.propHooks[t]),
                        void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = re.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : At.test(e.nodeName) || Et.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            }
        }),
    ne.hrefNormalized || re.each(["href", "src"], function(e, t) {
        re.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ne.optSelected || (re.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
                null
        }
    }),
        re.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            re.propFix[this.toLowerCase()] = this
        }),
    ne.enctype || (re.propFix.enctype = "encoding");
    var $t = /[\t\r\n\f]/g;
    re.fn.extend({
        addClass: function(e) {
            var t, n, i, r, a, s, o = 0, l = this.length, c = "string" == typeof e && e;
            if (re.isFunction(e))
                return this.each(function(t) {
                    re(this).addClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(we) || []; l > o; o++)
                    if (n = this[o],
                            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : " ")) {
                        for (a = 0; r = t[a++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = re.trim(i),
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, a, s, o = 0, l = this.length, c = 0 === arguments.length || "string" == typeof e && e;
            if (re.isFunction(e))
                return this.each(function(t) {
                    re(this).removeClass(e.call(this, t, this.className))
                });
            if (c)
                for (t = (e || "").match(we) || []; l > o; o++)
                    if (n = this[o],
                            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace($t, " ") : "")) {
                        for (a = 0; r = t[a++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        s = e ? re.trim(i) : "",
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : re.isFunction(e) ? this.each(function(n) {
                re(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n)
                    for (var t, i = 0, r = re(this), a = e.match(we) || []; t = a[i++]; )
                        r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else
                    n !== Te && "boolean" !== n || (this.className && re._data(this, "__className__", this.className),
                        this.className = this.className || e === !1 ? "" : re._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace($t, " ").indexOf(t) >= 0)
                    return !0;
            return !1
        }
    }),
        re.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
            re.fn[t] = function(e, n) {
                return arguments.length > 0 ? this.on(t, null , e, n) : this.trigger(t)
            }
        }),
        re.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            },
            bind: function(e, t, n) {
                return this.on(e, null , t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null , t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        });
    var Mt = re.now()
        , Ot = /\?/
        , Nt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    re.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, i = null , r = re.trim(t + "");
        return r && !re.trim(r.replace(Nt, function(e, t, r, a) {
            return n && t && (i = 0),
                0 === i ? e : (n = r || t,
                    i += !a - !r,
                    "")
        })) ? Function("return " + r)() : re.error("Invalid JSON: " + t)
    }
        ,
        re.parseXML = function(t) {
            var n, i;
            if (!t || "string" != typeof t)
                return null ;
            try {
                e.DOMParser ? (i = new DOMParser,
                    n = i.parseFromString(t, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"),
                    n.async = "false",
                    n.loadXML(t))
            } catch (r) {
                n = void 0
            }
            return n && n.documentElement && !n.getElementsByTagName("parsererror").length || re.error("Invalid XML: " + t),
                n
        }
    ;
    var Pt, It, Dt = /#.*$/, Lt = /([?&])_=[^&]*/, jt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Bt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Rt = /^(?:GET|HEAD)$/, Ft = /^\/\//, Ht = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, zt = {}, Wt = {}, Gt = "*/".concat("*");
    try {
        It = location.href
    } catch (qt) {
        It = fe.createElement("a"),
            It.href = "",
            It = It.href
    }
    Pt = Ht.exec(It.toLowerCase()) || [],
        re.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: It,
                type: "GET",
                isLocal: Bt.test(Pt[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Gt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": re.parseJSON,
                    "text xml": re.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? H(H(e, re.ajaxSettings), t) : H(re.ajaxSettings, e)
            },
            ajaxPrefilter: R(zt),
            ajaxTransport: R(Wt),
            ajax: function(e, t) {
                function n(e, t, n, i) {
                    var r, d, g, y, b, x = t;
                    2 !== w && (w = 2,
                    o && clearTimeout(o),
                        c = void 0,
                        s = i || "",
                        _.readyState = e > 0 ? 4 : 0,
                        r = e >= 200 && 300 > e || 304 === e,
                    n && (y = z(u, _, n)),
                        y = W(u, y, _, r),
                        r ? (u.ifModified && (b = _.getResponseHeader("Last-Modified"),
                        b && (re.lastModified[a] = b),
                            b = _.getResponseHeader("etag"),
                        b && (re.etag[a] = b)),
                            204 === e || "HEAD" === u.type ? x = "nocontent" : 304 === e ? x = "notmodified" : (x = y.state,
                                d = y.data,
                                g = y.error,
                                r = !g)) : (g = x,
                        !e && x || (x = "error",
                        0 > e && (e = 0))),
                        _.status = e,
                        _.statusText = (t || x) + "",
                        r ? f.resolveWith(p, [d, x, _]) : f.rejectWith(p, [_, x, g]),
                        _.statusCode(v),
                        v = void 0,
                    l && h.trigger(r ? "ajaxSuccess" : "ajaxError", [_, u, r ? d : g]),
                        m.fireWith(p, [_, x]),
                    l && (h.trigger("ajaxComplete", [_, u]),
                    --re.active || re.event.trigger("ajaxStop")))
                }
                "object" == typeof e && (t = e,
                    e = void 0),
                    t = t || {};
                var i, r, a, s, o, l, c, d, u = re.ajaxSetup({}, t), p = u.context || u, h = u.context && (p.nodeType || p.jquery) ? re(p) : re.event, f = re.Deferred(), m = re.Callbacks("once memory"), v = u.statusCode || {}, g = {}, y = {}, w = 0, b = "canceled", _ = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; t = jt.exec(s); )
                                    d[t[1].toLowerCase()] = t[2];
                            t = d[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return 2 === w ? s : null
                    },
                    setRequestHeader: function(e, t) {
                        var n = e.toLowerCase();
                        return w || (e = y[n] = y[n] || e,
                            g[e] = t),
                            this
                    },
                    overrideMimeType: function(e) {
                        return w || (u.mimeType = e),
                            this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (2 > w)
                                for (t in e)
                                    v[t] = [v[t], e[t]];
                            else
                                _.always(e[_.status]);
                        return this
                    },
                    abort: function(e) {
                        var t = e || b;
                        return c && c.abort(t),
                            n(0, t),
                            this
                    }
                };
                if (f.promise(_).complete = m.add,
                        _.success = _.done,
                        _.error = _.fail,
                        u.url = ((e || u.url || It) + "").replace(Dt, "").replace(Ft, Pt[1] + "//"),
                        u.type = t.method || t.type || u.method || u.type,
                        u.dataTypes = re.trim(u.dataType || "*").toLowerCase().match(we) || [""],
                    null == u.crossDomain && (i = Ht.exec(u.url.toLowerCase()),
                        u.crossDomain = !(!i || i[1] === Pt[1] && i[2] === Pt[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Pt[3] || ("http:" === Pt[1] ? "80" : "443")))),
                    u.data && u.processData && "string" != typeof u.data && (u.data = re.param(u.data, u.traditional)),
                        F(zt, u, t, _),
                    2 === w)
                    return _;
                l = re.event && u.global,
                l && 0 === re.active++ && re.event.trigger("ajaxStart"),
                    u.type = u.type.toUpperCase(),
                    u.hasContent = !Rt.test(u.type),
                    a = u.url,
                u.hasContent || (u.data && (a = u.url += (Ot.test(a) ? "&" : "?") + u.data,
                    delete u.data),
                u.cache === !1 && (u.url = Lt.test(a) ? a.replace(Lt, "$1_=" + Mt++) : a + (Ot.test(a) ? "&" : "?") + "_=" + Mt++)),
                u.ifModified && (re.lastModified[a] && _.setRequestHeader("If-Modified-Since", re.lastModified[a]),
                re.etag[a] && _.setRequestHeader("If-None-Match", re.etag[a])),
                (u.data && u.hasContent && u.contentType !== !1 || t.contentType) && _.setRequestHeader("Content-Type", u.contentType),
                    _.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + Gt + "; q=0.01" : "") : u.accepts["*"]);
                for (r in u.headers)
                    _.setRequestHeader(r, u.headers[r]);
                if (u.beforeSend && (u.beforeSend.call(p, _, u) === !1 || 2 === w))
                    return _.abort();
                b = "abort";
                for (r in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    _[r](u[r]);
                if (c = F(Wt, u, t, _)) {
                    _.readyState = 1,
                    l && h.trigger("ajaxSend", [_, u]),
                    u.async && u.timeout > 0 && (o = setTimeout(function() {
                        _.abort("timeout")
                    }, u.timeout));
                    try {
                        w = 1,
                            c.send(g, n)
                    } catch (x) {
                        if (!(2 > w))
                            throw x;
                        n(-1, x)
                    }
                } else
                    n(-1, "No Transport");
                return _
            },
            getJSON: function(e, t, n) {
                return re.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return re.get(e, void 0, t, "script")
            }
        }),
        re.each(["get", "post"], function(e, t) {
            re[t] = function(e, n, i, r) {
                return re.isFunction(n) && (r = r || i,
                    i = n,
                    n = void 0),
                    re.ajax({
                        url: e,
                        type: t,
                        dataType: r,
                        data: n,
                        success: i
                    })
            }
        }),
        re._evalUrl = function(e) {
            return re.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        re.fn.extend({
            wrapAll: function(e) {
                if (re.isFunction(e))
                    return this.each(function(t) {
                        re(this).wrapAll(e.call(this, t))
                    });
                if (this[0]) {
                    var t = re(e, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && t.insertBefore(this[0]),
                        t.map(function() {
                            for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                                e = e.firstChild;
                            return e
                        }).append(this)
                }
                return this
            },
            wrapInner: function(e) {
                return re.isFunction(e) ? this.each(function(t) {
                    re(this).wrapInner(e.call(this, t))
                }) : this.each(function() {
                    var t = re(this)
                        , n = t.contents();
                    n.length ? n.wrapAll(e) : t.append(e)
                })
            },
            wrap: function(e) {
                var t = re.isFunction(e);
                return this.each(function(n) {
                    re(this).wrapAll(t ? e.call(this, n) : e)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    re.nodeName(this, "body") || re(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        re.expr.filters.hidden = function(e) {
            return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ne.reliableHiddenOffsets() && "none" === (e.style && e.style.display || re.css(e, "display"))
        }
        ,
        re.expr.filters.visible = function(e) {
            return !re.expr.filters.hidden(e)
        }
    ;
    var Ut = /%20/g
        , Vt = /\[\]$/
        , Xt = /\r?\n/g
        , Yt = /^(?:submit|button|image|reset|file)$/i
        , Kt = /^(?:input|select|textarea|keygen)/i;
    re.param = function(e, t) {
        var n, i = [], r = function(e, t) {
            t = re.isFunction(t) ? t() : null == t ? "" : t,
                i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = re.ajaxSettings && re.ajaxSettings.traditional),
            re.isArray(e) || e.jquery && !re.isPlainObject(e))
            re.each(e, function() {
                r(this.name, this.value)
            });
        else
            for (n in e)
                G(n, e[n], t, r);
        return i.join("&").replace(Ut, "+")
    }
        ,
        re.fn.extend({
            serialize: function() {
                return re.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = re.prop(this, "elements");
                    return e ? re.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !re(this).is(":disabled") && Kt.test(this.nodeName) && !Yt.test(e) && (this.checked || !Me.test(e))
                }).map(function(e, t) {
                    var n = re(this).val();
                    return null == n ? null : re.isArray(n) ? re.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Xt, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Xt, "\r\n")
                    }
                }).get()
            }
        }),
        re.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && q() || U()
        }
            : q;
    var Jt = 0
        , Qt = {}
        , Zt = re.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in Qt)
            Qt[e](void 0, !0)
    }),
        ne.cors = !!Zt && "withCredentials"in Zt,
        Zt = ne.ajax = !!Zt,
    Zt && re.ajaxTransport(function(e) {
        if (!e.crossDomain || ne.cors) {
            var t;
            return {
                send: function(n, i) {
                    var r, a = e.xhr(), s = ++Jt;
                    if (a.open(e.type, e.url, e.async, e.username, e.password),
                            e.xhrFields)
                        for (r in e.xhrFields)
                            a[r] = e.xhrFields[r];
                    e.mimeType && a.overrideMimeType && a.overrideMimeType(e.mimeType),
                    e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        void 0 !== n[r] && a.setRequestHeader(r, n[r] + "");
                    a.send(e.hasContent && e.data || null ),
                        t = function(n, r) {
                            var o, l, c;
                            if (t && (r || 4 === a.readyState))
                                if (delete Qt[s],
                                        t = void 0,
                                        a.onreadystatechange = re.noop,
                                        r)
                                    4 !== a.readyState && a.abort();
                                else {
                                    c = {},
                                        o = a.status,
                                    "string" == typeof a.responseText && (c.text = a.responseText);
                                    try {
                                        l = a.statusText
                                    } catch (d) {
                                        l = ""
                                    }
                                    o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = c.text ? 200 : 404
                                }
                            c && i(o, l, c, a.getAllResponseHeaders())
                        }
                        ,
                        e.async ? 4 === a.readyState ? setTimeout(t) : a.onreadystatechange = Qt[s] = t : t()
                },
                abort: function() {
                    t && t(void 0, !0)
                }
            }
        }
    }),
        re.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(e) {
                    return re.globalEval(e),
                        e
                }
            }
        }),
        re.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET",
                e.global = !1)
        }),
        re.ajaxTransport("script", function(e) {
            if (e.crossDomain) {
                var t, n = fe.head || re("head")[0] || fe.documentElement;
                return {
                    send: function(i, r) {
                        t = fe.createElement("script"),
                            t.async = !0,
                        e.scriptCharset && (t.charset = e.scriptCharset),
                            t.src = e.url,
                            t.onload = t.onreadystatechange = function(e, n) {
                                (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null ,
                                t.parentNode && t.parentNode.removeChild(t),
                                    t = null ,
                                n || r(200, "success"))
                            }
                            ,
                            n.insertBefore(t, n.firstChild)
                    },
                    abort: function() {
                        t && t.onload(void 0, !0)
                    }
                }
            }
        });
    var en = []
        , tn = /(=)\?(?=&|$)|\?\?/;
    re.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = en.pop() || re.expando + "_" + Mt++;
            return this[e] = !0,
                e
        }
    }),
        re.ajaxPrefilter("json jsonp", function(t, n, i) {
            var r, a, s, o = t.jsonp !== !1 && (tn.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && tn.test(t.data) && "data");
            return o || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = re.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
                o ? t[o] = t[o].replace(tn, "$1" + r) : t.jsonp !== !1 && (t.url += (Ot.test(t.url) ? "&" : "?") + t.jsonp + "=" + r),
                t.converters["script json"] = function() {
                    return s || re.error(r + " was not called"),
                        s[0]
                }
                ,
                t.dataTypes[0] = "json",
                a = e[r],
                e[r] = function() {
                    s = arguments
                }
                ,
                i.always(function() {
                    e[r] = a,
                    t[r] && (t.jsonpCallback = n.jsonpCallback,
                        en.push(r)),
                    s && re.isFunction(a) && a(s[0]),
                        s = a = void 0
                }),
                "script") : void 0
        }),
        re.parseHTML = function(e, t, n) {
            if (!e || "string" != typeof e)
                return null ;
            "boolean" == typeof t && (n = t,
                t = !1),
                t = t || fe;
            var i = ue.exec(e)
                , r = !n && [];
            return i ? [t.createElement(i[1])] : (i = re.buildFragment([e], t, r),
            r && r.length && re(r).remove(),
                re.merge([], i.childNodes))
        }
    ;
    var nn = re.fn.load;
    re.fn.load = function(e, t, n) {
        if ("string" != typeof e && nn)
            return nn.apply(this, arguments);
        var i, r, a, s = this, o = e.indexOf(" ");
        return o >= 0 && (i = re.trim(e.slice(o, e.length)),
            e = e.slice(0, o)),
            re.isFunction(t) ? (n = t,
                t = void 0) : t && "object" == typeof t && (a = "POST"),
        s.length > 0 && re.ajax({
            url: e,
            type: a,
            dataType: "html",
            data: t
        }).done(function(e) {
            r = arguments,
                s.html(i ? re("<div>").append(re.parseHTML(e)).find(i) : e)
        }).complete(n && function(e, t) {
                s.each(n, r || [e.responseText, t, e])
            }
        ),
            this
    }
        ,
        re.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            re.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        re.expr.filters.animated = function(e) {
            return re.grep(re.timers, function(t) {
                return e === t.elem
            }).length
        }
    ;
    var rn = e.document.documentElement;
    re.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, s, o, l, c, d = re.css(e, "position"), u = re(e), p = {};
            "static" === d && (e.style.position = "relative"),
                o = u.offset(),
                a = re.css(e, "top"),
                l = re.css(e, "left"),
                c = ("absolute" === d || "fixed" === d) && re.inArray("auto", [a, l]) > -1,
                c ? (i = u.position(),
                    s = i.top,
                    r = i.left) : (s = parseFloat(a) || 0,
                    r = parseFloat(l) || 0),
            re.isFunction(t) && (t = t.call(e, n, o)),
            null != t.top && (p.top = t.top - o.top + s),
            null != t.left && (p.left = t.left - o.left + r),
                "using"in t ? t.using.call(e, p) : u.css(p)
        }
    },
        re.fn.extend({
            offset: function(e) {
                if (arguments.length)
                    return void 0 === e ? this : this.each(function(t) {
                        re.offset.setOffset(this, e, t)
                    });
                var t, n, i = {
                    top: 0,
                    left: 0
                }, r = this[0], a = r && r.ownerDocument;
                if (a)
                    return t = a.documentElement,
                        re.contains(t, r) ? (typeof r.getBoundingClientRect !== Te && (i = r.getBoundingClientRect()),
                            n = V(a),
                        {
                            top: i.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                            left: i.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                        }) : i
            },
            position: function() {
                if (this[0]) {
                    var e, t, n = {
                        top: 0,
                        left: 0
                    }, i = this[0];
                    return "fixed" === re.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(),
                        t = this.offset(),
                    re.nodeName(e[0], "html") || (n = e.offset()),
                        n.top += re.css(e[0], "borderTopWidth", !0),
                        n.left += re.css(e[0], "borderLeftWidth", !0)),
                    {
                        top: t.top - n.top - re.css(i, "marginTop", !0),
                        left: t.left - n.left - re.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent || rn; e && !re.nodeName(e, "html") && "static" === re.css(e, "position"); )
                        e = e.offsetParent;
                    return e || rn
                })
            }
        }),
        re.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, t) {
            var n = /Y/.test(t);
            re.fn[e] = function(i) {
                return $e(this, function(e, i, r) {
                    var a = V(e);
                    return void 0 === r ? a ? t in a ? a[t] : a.document.documentElement[i] : e[i] : void (a ? a.scrollTo(n ? re(a).scrollLeft() : r, n ? r : re(a).scrollTop()) : e[i] = r)
                }, e, i, arguments.length, null )
            }
        }),
        re.each(["top", "left"], function(e, t) {
            re.cssHooks[t] = k(ne.pixelPosition, function(e, n) {
                return n ? (n = tt(e, t),
                    it.test(n) ? re(e).position()[t] + "px" : n) : void 0
            })
        }),
        re.each({
            Height: "height",
            Width: "width"
        }, function(e, t) {
            re.each({
                padding: "inner" + e,
                content: t,
                "": "outer" + e
            }, function(n, i) {
                re.fn[i] = function(i, r) {
                    var a = arguments.length && (n || "boolean" != typeof i)
                        , s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return $e(this, function(t, n, i) {
                        var r;
                        return re.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement,
                            Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === i ? re.css(t, n, s) : re.style(t, n, i, s)
                    }, t, a ? i : void 0, a, null )
                }
            })
        }),
        re.fn.size = function() {
            return this.length
        }
        ,
        re.fn.andSelf = re.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return re
    });
    var an = e.jQuery
        , sn = e.$;
    return re.noConflict = function(t) {
        return e.$ === re && (e.$ = sn),
        t && e.jQuery === re && (e.jQuery = an),
            re
    }
        ,
    typeof t === Te && (e.jQuery = e.$ = re),
        re
}),
    function(e) {
        "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
    }(function(e) {
        function t(e) {
            return o.raw ? e : encodeURIComponent(e)
        }
        function n(e) {
            return o.raw ? e : decodeURIComponent(e)
        }
        function i(e) {
            return t(o.json ? JSON.stringify(e) : String(e))
        }
        function r(e) {
            0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return e = decodeURIComponent(e.replace(s, " ")),
                    o.json ? JSON.parse(e) : e
            } catch (t) {}
        }
        function a(t, n) {
            var i = o.raw ? t : r(t);
            return e.isFunction(n) ? n(i) : i
        }
        var s = /\+/g
            , o = e.cookie = function(r, s, l) {
                if (void 0 !== s && !e.isFunction(s)) {
                    if (l = e.extend({}, o.defaults, l),
                        "number" == typeof l.expires) {
                        var c = l.expires
                            , d = l.expires = new Date;
                        d.setTime(+d + 864e5 * c)
                    }
                    return document.cookie = [t(r), "=", i(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
                }
                for (var u = r ? void 0 : {}, p = document.cookie ? document.cookie.split("; ") : [], h = 0, f = p.length; f > h; h++) {
                    var m = p[h].split("=")
                        , v = n(m.shift())
                        , g = m.join("=");
                    if (r && r === v) {
                        u = a(g, s);
                        break
                    }
                    r || void 0 === (g = a(g)) || (u[v] = g)
                }
                return u
            }
            ;
        o.defaults = {},
            e.removeCookie = function(t, n) {
                return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
                    expires: -1
                })),
                    !e.cookie(t))
            }
    }),
    function(e, t, n) {
        "use strict";
        "undefined" != typeof module && module.exports ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t[e] = n()
    }("Fingerprint2", this, function() {
        "use strict";
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
                var n;
                if (null == this)
                    throw new TypeError("'this' is null or undefined");
                var i = Object(this)
                    , r = i.length >>> 0;
                if (0 === r)
                    return -1;
                var a = +t || 0;
                if (Math.abs(a) === 1 / 0 && (a = 0),
                    a >= r)
                    return -1;
                for (n = Math.max(a >= 0 ? a : r - Math.abs(a), 0); r > n; ) {
                    if (n in i && i[n] === e)
                        return n;
                    n++
                }
                return -1
            }
        );
        var e = function(e) {
            var t = {
                swfContainerId: "fingerprintjs2",
                swfPath: "flash/compiled/FontList.swf",
                detectScreenOrientation: !0,
                sortPluginsFor: [/palemoon/i]
            };
            this.options = this.extend(e, t),
                this.nativeForEach = Array.prototype.forEach,
                this.nativeMap = Array.prototype.map
        };
        return e.prototype = {
            extend: function(e, t) {
                if (null == e)
                    return t;
                for (var n in e)
                    null != e[n] && t[n] !== e[n] && (t[n] = e[n]);
                return t
            },
            log: function(e) {
                window.console && console.log(e)
            },
            get: function(e) {
                var t = [];
                t = this.userAgentKey(t),
                    t = this.languageKey(t),
                    t = this.colorDepthKey(t),
                    t = this.screenResolutionKey(t),
                    t = this.timezoneOffsetKey(t),
                    t = this.sessionStorageKey(t),
                    t = this.localStorageKey(t),
                    t = this.indexedDbKey(t),
                    t = this.addBehaviorKey(t),
                    t = this.openDatabaseKey(t),
                    t = this.cpuClassKey(t),
                    t = this.platformKey(t),
                    t = this.doNotTrackKey(t),
                    t = this.pluginsKey(t),
                    t = this.canvasKey(t),
                    t = this.webglKey(t),
                    t = this.adBlockKey(t),
                    t = this.hasLiedLanguagesKey(t),
                    t = this.hasLiedResolutionKey(t),
                    t = this.hasLiedOsKey(t),
                    t = this.hasLiedBrowserKey(t),
                    t = this.touchSupportKey(t);
                var n = this;
                this.fontsKey(t, function(t) {
                    var i = [];
                    n.each(t, function(e) {
                        var t = e.value;
                        "undefined" != typeof e.value.join && (t = e.value.join(";")),
                            i.push(t)
                    });
                    var r = n.x64hash128(i.join("~~~"), 31);
                    return e(r, t)
                })
            },
            userAgentKey: function(e) {
                return this.options.excludeUserAgent || e.push({
                    key: "user_agent",
                    value: this.getUserAgent()
                }),
                    e
            },
            getUserAgent: function() {
                return navigator.userAgent
            },
            languageKey: function(e) {
                return this.options.excludeLanguage || e.push({
                    key: "language",
                    value: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage
                }),
                    e
            },
            colorDepthKey: function(e) {
                return this.options.excludeColorDepth || e.push({
                    key: "color_depth",
                    value: screen.colorDepth
                }),
                    e
            },
            screenResolutionKey: function(e) {
                return this.options.excludeScreenResolution ? e : this.getScreenResolution(e)
            },
            getScreenResolution: function(e) {
                var t, n;
                return t = this.options.detectScreenOrientation && screen.height > screen.width ? [screen.height, screen.width] : [screen.width, screen.height],
                "undefined" != typeof t && e.push({
                    key: "resolution",
                    value: t
                }),
                screen.availWidth && screen.availHeight && (n = this.options.detectScreenOrientation ? screen.availHeight > screen.availWidth ? [screen.availHeight, screen.availWidth] : [screen.availWidth, screen.availHeight] : [screen.availHeight, screen.availWidth]),
                "undefined" != typeof n && e.push({
                    key: "available_resolution",
                    value: n
                }),
                    e
            },
            timezoneOffsetKey: function(e) {
                return this.options.excludeTimezoneOffset || e.push({
                    key: "timezone_offset",
                    value: (new Date).getTimezoneOffset()
                }),
                    e
            },
            sessionStorageKey: function(e) {
                return !this.options.excludeSessionStorage && this.hasSessionStorage() && e.push({
                    key: "session_storage",
                    value: 1
                }),
                    e
            },
            localStorageKey: function(e) {
                return !this.options.excludeSessionStorage && this.hasLocalStorage() && e.push({
                    key: "local_storage",
                    value: 1
                }),
                    e
            },
            indexedDbKey: function(e) {
                return !this.options.excludeIndexedDB && this.hasIndexedDB() && e.push({
                    key: "indexed_db",
                    value: 1
                }),
                    e
            },
            addBehaviorKey: function(e) {
                return document.body && !this.options.excludeAddBehavior && document.body.addBehavior && e.push({
                    key: "add_behavior",
                    value: 1
                }),
                    e
            },
            openDatabaseKey: function(e) {
                return !this.options.excludeOpenDatabase && window.openDatabase && e.push({
                    key: "open_database",
                    value: 1
                }),
                    e
            },
            cpuClassKey: function(e) {
                return this.options.excludeCpuClass || e.push({
                    key: "cpu_class",
                    value: this.getNavigatorCpuClass()
                }),
                    e
            },
            platformKey: function(e) {
                return this.options.excludePlatform || e.push({
                    key: "navigator_platform",
                    value: this.getNavigatorPlatform()
                }),
                    e
            },
            doNotTrackKey: function(e) {
                return this.options.excludeDoNotTrack || e.push({
                    key: "do_not_track",
                    value: this.getDoNotTrack()
                }),
                    e
            },
            canvasKey: function(e) {
                return !this.options.excludeCanvas && this.isCanvasSupported() && e.push({
                    key: "canvas",
                    value: this.getCanvasFp()
                }),
                    e
            },
            webglKey: function(e) {
                return this.options.excludeWebGL ? ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting per excludeWebGL configuration option"),
                    e) : this.isWebGlSupported() ? (e.push({
                    key: "webgl",
                    value: this.getWebglFp()
                }),
                    e) : ("undefined" == typeof NODEBUG && this.log("Skipping WebGL fingerprinting because it is not supported in this browser"),
                    e)
            },
            adBlockKey: function(e) {
                return this.options.excludeAdBlock || e.push({
                    key: "adblock",
                    value: this.getAdBlock()
                }),
                    e
            },
            hasLiedLanguagesKey: function(e) {
                return this.options.excludeHasLiedLanguages || e.push({
                    key: "has_lied_languages",
                    value: this.getHasLiedLanguages()
                }),
                    e
            },
            hasLiedResolutionKey: function(e) {
                return this.options.excludeHasLiedResolution || e.push({
                    key: "has_lied_resolution",
                    value: this.getHasLiedResolution()
                }),
                    e
            },
            hasLiedOsKey: function(e) {
                return this.options.excludeHasLiedOs || e.push({
                    key: "has_lied_os",
                    value: this.getHasLiedOs()
                }),
                    e
            },
            hasLiedBrowserKey: function(e) {
                return this.options.excludeHasLiedBrowser || e.push({
                    key: "has_lied_browser",
                    value: this.getHasLiedBrowser()
                }),
                    e
            },
            fontsKey: function(e, t) {
                return this.options.excludeJsFonts ? this.flashFontsKey(e, t) : this.jsFontsKey(e, t)
            },
            flashFontsKey: function(e, t) {
                return this.options.excludeFlashFonts ? ("undefined" == typeof NODEBUG && this.log("Skipping flash fonts detection per excludeFlashFonts configuration option"),
                    t(e)) : this.hasSwfObjectLoaded() ? this.hasMinFlashInstalled() ? "undefined" == typeof this.options.swfPath ? ("undefined" == typeof NODEBUG && this.log("To use Flash fonts detection, you must pass a valid swfPath option, skipping Flash fonts enumeration"),
                    t(e)) : void this.loadSwfAndDetectFonts(function(n) {
                    e.push({
                        key: "swf_fonts",
                        value: n.join(";")
                    }),
                        t(e)
                }) : ("undefined" == typeof NODEBUG && this.log("Flash is not installed, skipping Flash fonts enumeration"),
                    t(e)) : ("undefined" == typeof NODEBUG && this.log("Swfobject is not detected, Flash fonts enumeration is skipped"),
                    t(e))
            },
            jsFontsKey: function(e, t) {
                var n = this;
                return setTimeout(function() {
                    var i = ["monospace", "sans-serif", "serif"]
                        , r = "mmmmmmmmmmlli"
                        , a = "72px"
                        , s = document.getElementsByTagName("body")[0]
                        , o = document.createElement("span");
                    o.style.fontSize = a,
                        o.innerHTML = r;
                    var l = {}
                        , c = {};
                    for (var d in i)
                        o.style.fontFamily = i[d],
                            s.appendChild(o),
                            l[i[d]] = o.offsetWidth,
                            c[i[d]] = o.offsetHeight,
                            s.removeChild(o);
                    var u = function(e) {
                        var t = !1;
                        for (var n in i) {
                            o.style.fontFamily = e + "," + i[n],
                                s.appendChild(o);
                            var r = o.offsetWidth !== l[i[n]] || o.offsetHeight !== c[i[n]];
                            s.removeChild(o),
                                t = t || r
                        }
                        return t
                    }
                        , p = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"]
                        , h = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                    n.options.extendedJsFonts && (p = p.concat(h));
                    for (var f = [], m = 0, v = p.length; v > m; m++)
                        u(p[m]) && f.push(p[m]);
                    e.push({
                        key: "js_fonts",
                        value: f
                    }),
                        t(e)
                }, 1)
            },
            pluginsKey: function(e) {
                return this.options.excludePlugins || (this.isIE() ? e.push({
                    key: "ie_plugins",
                    value: this.getIEPlugins()
                }) : e.push({
                    key: "regular_plugins",
                    value: this.getRegularPlugins()
                })),
                    e
            },
            getRegularPlugins: function() {
                for (var e = [], t = 0, n = navigator.plugins.length; n > t; t++)
                    e.push(navigator.plugins[t]);
                return this.pluginsShouldBeSorted() && (e = e.sort(function(e, t) {
                    return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
                })),
                    this.map(e, function(e) {
                        var t = this.map(e, function(e) {
                            return [e.type, e.suffixes].join("~")
                        }).join(",");
                        return [e.name, e.description, t].join("::")
                    }, this)
            },
            getIEPlugins: function() {
                if (window.ActiveXObject) {
                    var e = ["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"];
                    return this.map(e, function(e) {
                        try {
                            return new ActiveXObject(e),
                                e
                        } catch (t) {
                            return null
                        }
                    })
                }
                return []
            },
            pluginsShouldBeSorted: function() {
                for (var e = !1, t = 0, n = this.options.sortPluginsFor.length; n > t; t++) {
                    var i = this.options.sortPluginsFor[t];
                    if (navigator.userAgent.match(i)) {
                        e = !0;
                        break
                    }
                }
                return e
            },
            touchSupportKey: function(e) {
                return this.options.excludeTouchSupport || e.push({
                    key: "touch_support",
                    value: this.getTouchSupport()
                }),
                    e
            },
            hasSessionStorage: function() {
                try {
                    return !!window.sessionStorage
                } catch (e) {
                    return !0
                }
            },
            hasLocalStorage: function() {
                try {
                    return !!window.localStorage
                } catch (e) {
                    return !0
                }
            },
            hasIndexedDB: function() {
                return !!window.indexedDB
            },
            getNavigatorCpuClass: function() {
                return navigator.cpuClass ? navigator.cpuClass : "unknown"
            },
            getNavigatorPlatform: function() {
                return navigator.platform ? navigator.platform : "unknown"
            },
            getDoNotTrack: function() {
                return navigator.doNotTrack ? navigator.doNotTrack : "unknown"
            },
            getTouchSupport: function() {
                var e = 0
                    , t = !1;
                "undefined" != typeof navigator.maxTouchPoints ? e = navigator.maxTouchPoints : "undefined" != typeof navigator.msMaxTouchPoints && (e = navigator.msMaxTouchPoints);
                try {
                    document.createEvent("TouchEvent"),
                        t = !0
                } catch (n) {}
                var i = "ontouchstart"in window;
                return [e, t, i]
            },
            getCanvasFp: function() {
                var e = []
                    , t = document.createElement("canvas");
                t.width = 2e3,
                    t.height = 200,
                    t.style.display = "inline";
                var n = t.getContext("2d");
                return n.rect(0, 0, 10, 10),
                    n.rect(2, 2, 6, 6),
                    e.push("canvas winding:" + (n.isPointInPath(5, 5, "evenodd") === !1 ? "yes" : "no")),
                    n.textBaseline = "alphabetic",
                    n.fillStyle = "#f60",
                    n.fillRect(125, 1, 62, 20),
                    n.fillStyle = "#069",
                    this.options.dontUseFakeFontInCanvas ? n.font = "11pt Arial" : n.font = "11pt no-real-font-123",
                    n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15),
                    n.fillStyle = "rgba(102, 204, 0, 0.7)",
                    n.font = "18pt Arial",
                    n.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45),
                    n.globalCompositeOperation = "multiply",
                    n.fillStyle = "rgb(255,0,255)",
                    n.beginPath(),
                    n.arc(50, 50, 50, 0, 2 * Math.PI, !0),
                    n.closePath(),
                    n.fill(),
                    n.fillStyle = "rgb(0,255,255)",
                    n.beginPath(),
                    n.arc(100, 50, 50, 0, 2 * Math.PI, !0),
                    n.closePath(),
                    n.fill(),
                    n.fillStyle = "rgb(255,255,0)",
                    n.beginPath(),
                    n.arc(75, 100, 50, 0, 2 * Math.PI, !0),
                    n.closePath(),
                    n.fill(),
                    n.fillStyle = "rgb(255,0,255)",
                    n.arc(75, 75, 75, 0, 2 * Math.PI, !0),
                    n.arc(75, 75, 25, 0, 2 * Math.PI, !0),
                    n.fill("evenodd"),
                    e.push("canvas fp:" + t.toDataURL()),
                    e.join("~")
            },
            getWebglFp: function() {
                var e, t = function(t) {
                    return e.clearColor(0, 0, 0, 1),
                        e.enable(e.DEPTH_TEST),
                        e.depthFunc(e.LEQUAL),
                        e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT),
                    "[" + t[0] + ", " + t[1] + "]"
                }, n = function(e) {
                    var t, n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                    return n ? (t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT),
                    0 === t && (t = 2),
                        t) : null
                };
                if (e = this.getWebglCanvas(),
                        !e)
                    return null ;
                var i = []
                    , r = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"
                    , a = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"
                    , s = e.createBuffer();
                e.bindBuffer(e.ARRAY_BUFFER, s);
                var o = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                e.bufferData(e.ARRAY_BUFFER, o, e.STATIC_DRAW),
                    s.itemSize = 3,
                    s.numItems = 3;
                var l = e.createProgram()
                    , c = e.createShader(e.VERTEX_SHADER);
                e.shaderSource(c, r),
                    e.compileShader(c);
                var d = e.createShader(e.FRAGMENT_SHADER);
                return e.shaderSource(d, a),
                    e.compileShader(d),
                    e.attachShader(l, c),
                    e.attachShader(l, d),
                    e.linkProgram(l),
                    e.useProgram(l),
                    l.vertexPosAttrib = e.getAttribLocation(l, "attrVertex"),
                    l.offsetUniform = e.getUniformLocation(l, "uniformOffset"),
                    e.enableVertexAttribArray(l.vertexPosArray),
                    e.vertexAttribPointer(l.vertexPosAttrib, s.itemSize, e.FLOAT, !1, 0, 0),
                    e.uniform2f(l.offsetUniform, 1, 1),
                    e.drawArrays(e.TRIANGLE_STRIP, 0, s.numItems),
                null != e.canvas && i.push(e.canvas.toDataURL()),
                    i.push("extensions:" + e.getSupportedExtensions().join(";")),
                    i.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))),
                    i.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))),
                    i.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)),
                    i.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")),
                    i.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)),
                    i.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)),
                    i.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)),
                    i.push("webgl max anisotropy:" + n(e)),
                    i.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),
                    i.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)),
                    i.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)),
                    i.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)),
                    i.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)),
                    i.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)),
                    i.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)),
                    i.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)),
                    i.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),
                    i.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)),
                    i.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))),
                    i.push("webgl red bits:" + e.getParameter(e.RED_BITS)),
                    i.push("webgl renderer:" + e.getParameter(e.RENDERER)),
                    i.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)),
                    i.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)),
                    i.push("webgl vendor:" + e.getParameter(e.VENDOR)),
                    i.push("webgl version:" + e.getParameter(e.VERSION)),
                    e.getShaderPrecisionFormat ? (i.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision),
                        i.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin),
                        i.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax),
                        i.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision),
                        i.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin),
                        i.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax),
                        i.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision),
                        i.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin),
                        i.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax),
                        i.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision),
                        i.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin),
                        i.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax),
                        i.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision),
                        i.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin),
                        i.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax),
                        i.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision),
                        i.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin),
                        i.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax),
                        i.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision),
                        i.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin),
                        i.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax),
                        i.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision),
                        i.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin),
                        i.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax),
                        i.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision),
                        i.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin),
                        i.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax),
                        i.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision),
                        i.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin),
                        i.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax),
                        i.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision),
                        i.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin),
                        i.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax),
                        i.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision),
                        i.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin),
                        i.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax),
                        i.join("~")) : ("undefined" == typeof NODEBUG && this.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"),
                        i.join("~"))
            },
            getAdBlock: function() {
                var e = document.createElement("div");
                e.setAttribute("id", "ads");
                try {
                    return document.body.appendChild(e),
                        !document.getElementById("ads")
                } catch (t) {
                    return !1
                }
            },
            getHasLiedLanguages: function() {
                if ("undefined" != typeof navigator.languages)
                    try {
                        var e = navigator.languages[0].substr(0, 2);
                        if (e !== navigator.language.substr(0, 2))
                            return !0
                    } catch (t) {
                        return !0
                    }
                return !1
            },
            getHasLiedResolution: function() {
                return screen.width < screen.availWidth ? !0 : screen.height < screen.availHeight
            },
            getHasLiedOs: function() {
                var e, t = navigator.userAgent.toLowerCase(), n = navigator.oscpu, i = navigator.platform.toLowerCase();
                e = t.indexOf("windows phone") >= 0 ? "Windows Phone" : t.indexOf("win") >= 0 ? "Windows" : t.indexOf("android") >= 0 ? "Android" : t.indexOf("linux") >= 0 ? "Linux" : t.indexOf("iphone") >= 0 || t.indexOf("ipad") >= 0 ? "iOS" : t.indexOf("mac") >= 0 ? "Mac" : "Other";
                var r;
                if (r = "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0,
                    r && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e)
                    return !0;
                if ("undefined" != typeof n) {
                    if (n = n.toLowerCase(),
                        n.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e)
                        return !0;
                    if (n.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e)
                        return !0;
                    if (n.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e)
                        return !0;
                    if (0 === n.indexOf("win") && 0 === n.indexOf("linux") && n.indexOf("mac") >= 0 && "other" !== e)
                        return !0
                }
                return i.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e ? !0 : (i.indexOf("linux") >= 0 || i.indexOf("android") >= 0 || i.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e ? !0 : (i.indexOf("mac") >= 0 || i.indexOf("ipad") >= 0 || i.indexOf("ipod") >= 0 || i.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e ? !0 : 0 === i.indexOf("win") && 0 === i.indexOf("linux") && i.indexOf("mac") >= 0 && "other" !== e ? !0 : "undefined" == typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e
            },
            getHasLiedBrowser: function() {
                var e, t = navigator.userAgent.toLowerCase(), n = navigator.productSub;
                if (e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("chrome") >= 0 ? "Chrome" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : "Other",
                    ("Chrome" === e || "Safari" === e || "Opera" === e) && "20030107" !== n)
                    return !0;
                var i = eval.toString().length;
                if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e)
                    return !0;
                if (39 === i && "Internet Explorer" !== e && "Other" !== e)
                    return !0;
                if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e)
                    return !0;
                var r;
                try {
                    throw "a"
                } catch (a) {
                    try {
                        a.toSource(),
                            r = !0
                    } catch (s) {
                        r = !1
                    }
                }
                return !(!r || "Firefox" === e || "Other" === e)
            },
            isCanvasSupported: function() {
                var e = document.createElement("canvas");
                return !(!e.getContext || !e.getContext("2d"))
            },
            isWebGlSupported: function() {
                if (!this.isCanvasSupported())
                    return !1;
                var e, t = document.createElement("canvas");
                try {
                    e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                } catch (n) {
                    e = !1
                }
                return !!window.WebGLRenderingContext && !!e
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName ? !0 : !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
            },
            hasSwfObjectLoaded: function() {
                return "undefined" != typeof window.swfobject
            },
            hasMinFlashInstalled: function() {
                return swfobject.hasFlashPlayerVersion("9.0.0")
            },
            addFlashDivNode: function() {
                var e = document.createElement("div");
                e.setAttribute("id", this.options.swfContainerId),
                    document.body.appendChild(e)
            },
            loadSwfAndDetectFonts: function(e) {
                var t = "___fp_swf_loaded";
                window[t] = function(t) {
                    e(t)
                }
                ;
                var n = this.options.swfContainerId;
                this.addFlashDivNode();
                var i = {
                    onReady: t
                }
                    , r = {
                    allowScriptAccess: "always",
                    menu: "false"
                };
                swfobject.embedSWF(this.options.swfPath, n, "1", "1", "9.0.0", !1, i, r, {})
            },
            getWebglCanvas: function() {
                var e = document.createElement("canvas")
                    , t = null ;
                try {
                    t = e.getContext("webgl") || e.getContext("experimental-webgl")
                } catch (n) {}
                return t || (t = null ),
                    t
            },
            each: function(e, t, n) {
                if (null !== e)
                    if (this.nativeForEach && e.forEach === this.nativeForEach)
                        e.forEach(t, n);
                    else if (e.length === +e.length) {
                        for (var i = 0, r = e.length; r > i; i++)
                            if (t.call(n, e[i], i, e) === {})
                                return
                    } else
                        for (var a in e)
                            if (e.hasOwnProperty(a) && t.call(n, e[a], a, e) === {})
                                return
            },
            map: function(e, t, n) {
                var i = [];
                return null == e ? i : this.nativeMap && e.map === this.nativeMap ? e.map(t, n) : (this.each(e, function(e, r, a) {
                    i[i.length] = t.call(n, e, r, a)
                }),
                    i)
            },
            x64Add: function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] + t[3],
                    n[2] += n[3] >>> 16,
                    n[3] &= 65535,
                    n[2] += e[2] + t[2],
                    n[1] += n[2] >>> 16,
                    n[2] &= 65535,
                    n[1] += e[1] + t[1],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[0] += e[0] + t[0],
                    n[0] &= 65535,
                    [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            x64Multiply: function(e, t) {
                e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]],
                    t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                var n = [0, 0, 0, 0];
                return n[3] += e[3] * t[3],
                    n[2] += n[3] >>> 16,
                    n[3] &= 65535,
                    n[2] += e[2] * t[3],
                    n[1] += n[2] >>> 16,
                    n[2] &= 65535,
                    n[2] += e[3] * t[2],
                    n[1] += n[2] >>> 16,
                    n[2] &= 65535,
                    n[1] += e[1] * t[3],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[1] += e[2] * t[2],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[1] += e[3] * t[1],
                    n[0] += n[1] >>> 16,
                    n[1] &= 65535,
                    n[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0],
                    n[0] &= 65535,
                    [n[0] << 16 | n[1], n[2] << 16 | n[3]]
            },
            x64Rotl: function(e, t) {
                return t %= 64,
                    32 === t ? [e[1], e[0]] : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32,
                        [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
            },
            x64LeftShift: function(e, t) {
                return t %= 64,
                    0 === t ? e : 32 > t ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
            },
            x64Xor: function(e, t) {
                return [e[0] ^ t[0], e[1] ^ t[1]]
            },
            x64Fmix: function(e) {
                return e = this.x64Xor(e, [0, e[0] >>> 1]),
                    e = this.x64Multiply(e, [4283543511, 3981806797]),
                    e = this.x64Xor(e, [0, e[0] >>> 1]),
                    e = this.x64Multiply(e, [3301882366, 444984403]),
                    e = this.x64Xor(e, [0, e[0] >>> 1])
            },
            x64hash128: function(e, t) {
                e = e || "",
                    t = t || 0;
                for (var n = e.length % 16, i = e.length - n, r = [0, t], a = [0, t], s = [0, 0], o = [0, 0], l = [2277735313, 289559509], c = [1291169091, 658871167], d = 0; i > d; d += 16)
                    s = [255 & e.charCodeAt(d + 4) | (255 & e.charCodeAt(d + 5)) << 8 | (255 & e.charCodeAt(d + 6)) << 16 | (255 & e.charCodeAt(d + 7)) << 24, 255 & e.charCodeAt(d) | (255 & e.charCodeAt(d + 1)) << 8 | (255 & e.charCodeAt(d + 2)) << 16 | (255 & e.charCodeAt(d + 3)) << 24],
                        o = [255 & e.charCodeAt(d + 12) | (255 & e.charCodeAt(d + 13)) << 8 | (255 & e.charCodeAt(d + 14)) << 16 | (255 & e.charCodeAt(d + 15)) << 24, 255 & e.charCodeAt(d + 8) | (255 & e.charCodeAt(d + 9)) << 8 | (255 & e.charCodeAt(d + 10)) << 16 | (255 & e.charCodeAt(d + 11)) << 24],
                        s = this.x64Multiply(s, l),
                        s = this.x64Rotl(s, 31),
                        s = this.x64Multiply(s, c),
                        r = this.x64Xor(r, s),
                        r = this.x64Rotl(r, 27),
                        r = this.x64Add(r, a),
                        r = this.x64Add(this.x64Multiply(r, [0, 5]), [0, 1390208809]),
                        o = this.x64Multiply(o, c),
                        o = this.x64Rotl(o, 33),
                        o = this.x64Multiply(o, l),
                        a = this.x64Xor(a, o),
                        a = this.x64Rotl(a, 31),
                        a = this.x64Add(a, r),
                        a = this.x64Add(this.x64Multiply(a, [0, 5]), [0, 944331445]);
                switch (s = [0, 0],
                    o = [0, 0],
                    n) {
                    case 15:
                        o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 14)], 48));
                    case 14:
                        o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 13)], 40));
                    case 13:
                        o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 12)], 32));
                    case 12:
                        o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 11)], 24));
                    case 11:
                        o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 10)], 16));
                    case 10:
                        o = this.x64Xor(o, this.x64LeftShift([0, e.charCodeAt(d + 9)], 8));
                    case 9:
                        o = this.x64Xor(o, [0, e.charCodeAt(d + 8)]),
                            o = this.x64Multiply(o, c),
                            o = this.x64Rotl(o, 33),
                            o = this.x64Multiply(o, l),
                            a = this.x64Xor(a, o);
                    case 8:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 7)], 56));
                    case 7:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 6)], 48));
                    case 6:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 5)], 40));
                    case 5:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 4)], 32));
                    case 4:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 3)], 24));
                    case 3:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 2)], 16));
                    case 2:
                        s = this.x64Xor(s, this.x64LeftShift([0, e.charCodeAt(d + 1)], 8));
                    case 1:
                        s = this.x64Xor(s, [0, e.charCodeAt(d)]),
                            s = this.x64Multiply(s, l),
                            s = this.x64Rotl(s, 31),
                            s = this.x64Multiply(s, c),
                            r = this.x64Xor(r, s)
                }
                return r = this.x64Xor(r, [0, e.length]),
                    a = this.x64Xor(a, [0, e.length]),
                    r = this.x64Add(r, a),
                    a = this.x64Add(a, r),
                    r = this.x64Fmix(r),
                    a = this.x64Fmix(a),
                    r = this.x64Add(r, a),
                    a = this.x64Add(a, r),
                ("00000000" + (r[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (r[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8)
            }
        },
            e.VERSION = "1.0.3",
            e
    }),
    !function(e) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = e();
        else if ("function" == typeof define && define.amd)
            define([], e);
        else {
            var t;
            "undefined" != typeof window ? t = window : "undefined" != typeof global ? t = global : "undefined" != typeof self && (t = self),
                t.jade = e()
        }
    }(function() {
        return function e(t, n, i) {
            function r(s, o) {
                if (!n[s]) {
                    if (!t[s]) {
                        var l = "function" == typeof require && require;
                        if (!o && l)
                            return l(s, !0);
                        if (a)
                            return a(s, !0);
                        var c = new Error("Cannot find module '" + s + "'");
                        throw c.code = "MODULE_NOT_FOUND",
                            c
                    }
                    var d = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(d.exports, function(e) {
                        var n = t[s][1][e];
                        return r(n ? n : e)
                    }, d, d.exports, e, t, n, i)
                }
                return n[s].exports
            }
            for (var a = "function" == typeof require && require, s = 0; s < i.length; s++)
                r(i[s]);
            return r
        }({
            1: [function(e, t, n) {
                "use strict";
                function i(e) {
                    return null != e && "" !== e
                }
                function r(e) {
                    return (Array.isArray(e) ? e.map(r) : e && "object" == typeof e ? Object.keys(e).filter(function(t) {
                        return e[t]
                    }) : [e]).filter(i).join(" ")
                }
                n.merge = function a(e, t) {
                    if (1 === arguments.length) {
                        for (var n = e[0], r = 1; r < e.length; r++)
                            n = a(n, e[r]);
                        return n
                    }
                    var s = e["class"]
                        , o = t["class"];
                    (s || o) && (s = s || [],
                        o = o || [],
                    Array.isArray(s) || (s = [s]),
                    Array.isArray(o) || (o = [o]),
                        e["class"] = s.concat(o).filter(i));
                    for (var l in t)
                        "class" != l && (e[l] = t[l]);
                    return e
                }
                    ,
                    n.joinClasses = r,
                    n.cls = function(e, t) {
                        for (var i = [], a = 0; a < e.length; a++)
                            t && t[a] ? i.push(n.escape(r([e[a]]))) : i.push(r(e[a]));
                        var s = r(i);
                        return s.length ? ' class="' + s + '"' : ""
                    }
                    ,
                    n.style = function(e) {
                        return e && "object" == typeof e ? Object.keys(e).map(function(t) {
                            return t + ":" + e[t]
                        }).join(";") : e
                    }
                    ,
                    n.attr = function(e, t, i, r) {
                        return "style" === e && (t = n.style(t)),
                            "boolean" == typeof t || null == t ? t ? " " + (r ? e : e + '="' + e + '"') : "" : 0 == e.indexOf("data") && "string" != typeof t ? (-1 !== JSON.stringify(t).indexOf("&") && console.warn("Since Jade 2.0.0, ampersands (`&`) in data attributes will be escaped to `&amp;`"),
                            t && "function" == typeof t.toISOString && console.warn("Jade will eliminate the double quotes around dates in ISO form after 2.0.0"),
                            " " + e + "='" + JSON.stringify(t).replace(/'/g, "&apos;") + "'") : i ? (t && "function" == typeof t.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"),
                            " " + e + '="' + n.escape(t) + '"') : (t && "function" == typeof t.toISOString && console.warn("Jade will stringify dates in ISO form after 2.0.0"),
                            " " + e + '="' + t + '"')
                    }
                    ,
                    n.attrs = function(e, t) {
                        var i = []
                            , a = Object.keys(e);
                        if (a.length)
                            for (var s = 0; s < a.length; ++s) {
                                var o = a[s]
                                    , l = e[o];
                                "class" == o ? (l = r(l)) && i.push(" " + o + '="' + l + '"') : i.push(n.attr(o, l, !1, t))
                            }
                        return i.join("")
                    }
                    ,
                    n.escape = function(e) {
                        var t = String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                        return t === "" + e ? e : t
                    }
                    ,
                    n.rethrow = function s(t, n, i, r) {
                        if (!(t instanceof Error))
                            throw t;
                        if (!("undefined" == typeof window && n || r))
                            throw t.message += " on line " + i,
                                t;
                        try {
                            r = r || e("fs").readFileSync(n, "utf8")
                        } catch (a) {
                            s(t, null , i)
                        }
                        var o = 3
                            , l = r.split("\n")
                            , c = Math.max(i - o, 0)
                            , d = Math.min(l.length, i + o)
                            , o = l.slice(c, d).map(function(e, t) {
                            var n = t + c + 1;
                            return (n == i ? "  > " : "    ") + n + "| " + e
                        }).join("\n");
                        throw t.path = n,
                            t.message = (n || "Jade") + ":" + i + "\n" + o + "\n\n" + t.message,
                            t
                    }
            }
                , {
                    fs: 2
                }],
            2: [function(e, t, n) {}
                , {}]
        }, {}, [1])(1)
    }),
    !function(e) {
        function t(e, t, n) {
            var i = parseInt(e.css("top"), 10);
            if ("left" == t) {
                var r = "-" + this.image_wrapper_height + "px";
                e.css("top", this.image_wrapper_height + "px")
            } else {
                var r = this.image_wrapper_height + "px";
                e.css("top", "-" + this.image_wrapper_height + "px")
            }
            return n && (n.css("bottom", "-" + n[0].offsetHeight + "px"),
                n.animate({
                    bottom: 0
                }, 2 * this.settings.animation_speed)),
            this.current_description && this.current_description.animate({
                bottom: "-" + this.current_description[0].offsetHeight + "px"
            }, 2 * this.settings.animation_speed),
            {
                old_image: {
                    top: r
                },
                new_image: {
                    top: i
                }
            }
        }
        function n(e, t, n) {
            var i = parseInt(e.css("left"), 10);
            if ("left" == t) {
                var r = "-" + this.image_wrapper_width + "px";
                e.css("left", this.image_wrapper_width + "px")
            } else {
                var r = this.image_wrapper_width + "px";
                e.css("left", "-" + this.image_wrapper_width + "px")
            }
            return n && (n.css("bottom", "-" + n[0].offsetHeight + "px"),
                n.animate({
                    bottom: 0
                }, 2 * this.settings.animation_speed)),
            this.current_description && this.current_description.animate({
                bottom: "-" + this.current_description[0].offsetHeight + "px"
            }, 2 * this.settings.animation_speed),
            {
                old_image: {
                    left: r
                },
                new_image: {
                    left: i
                }
            }
        }
        function i(e, t, n) {
            var i = e.width()
                , r = e.height()
                , a = parseInt(e.css("left"), 10)
                , s = parseInt(e.css("top"), 10);
            return e.css({
                width: 0,
                height: 0,
                top: this.image_wrapper_height / 2,
                left: this.image_wrapper_width / 2
            }),
            {
                old_image: {
                    width: 0,
                    height: 0,
                    top: this.image_wrapper_height / 2,
                    left: this.image_wrapper_width / 2
                },
                new_image: {
                    width: i,
                    height: r,
                    top: s,
                    left: a
                }
            }
        }
        function r(e, t, n) {
            return e.css("opacity", 0),
            {
                old_image: {
                    opacity: 0
                },
                new_image: {
                    opacity: 1
                }
            }
        }
        function a(e, t, n) {
            return e.css("opacity", 0),
            {
                old_image: {
                    opacity: 0
                },
                new_image: {
                    opacity: 1
                },
                speed: 0
            }
        }
        function s(e, t) {
            this.init(e, t)
        }
        function o(e, t) {
            this.init(e, t)
        }
        e.fn.adGallery = function(t) {
            var n = {
                loader_image: "",
                start_at_index: 0,
                description_wrapper: !1,
                thumb_opacity: .7,
                animate_first_image: !1,
                animation_speed: 400,
                width: !1,
                height: !1,
                display_next_and_prev: !0,
                display_back_and_forward: !0,
                scroll_jump: 0,
                slideshow: {
                    enable: !0,
                    autostart: !1,
                    speed: 5e3,
                    start_label: "Start",
                    stop_label: "Stop",
                    stop_on_scroll: !0,
                    countdown_prefix: "(",
                    countdown_sufix: ")",
                    onStart: !1,
                    onStop: !1
                },
                effect: "slide-hori",
                enable_keyboard_move: !0,
                cycle: !0,
                callbacks: {
                    init: !1,
                    afterImageVisible: !1,
                    beforeImageVisible: !1
                }
            }
                , i = e.extend(!1, n, t);
            t && t.slideshow && (i.slideshow = e.extend(!1, n.slideshow, t.slideshow)),
            i.slideshow.enable || (i.slideshow.autostart = !1);
            var r = [];
            return e(this).each(function() {
                var e = new s(this,i);
                r[r.length] = e
            }),
                r
        }
            ,
            s.prototype = {
                wrapper: !1,
                image_wrapper: !1,
                gallery_info: !1,
                nav: !1,
                loader: !1,
                preloads: !1,
                thumbs_wrapper: !1,
                scroll_back: !1,
                scroll_forward: !1,
                next_link: !1,
                prev_link: !1,
                slideshow: !1,
                image_wrapper_width: 0,
                image_wrapper_height: 0,
                current_index: 0,
                current_image: !1,
                current_description: !1,
                nav_display_width: 0,
                settings: !1,
                images: !1,
                in_transition: !1,
                animations: !1,
                init: function(t, n) {
                    var i = this;
                    this.wrapper = e(t),
                        this.settings = n,
                        this.setupElements(),
                        this.setupAnimations(),
                        this.settings.width ? (this.image_wrapper_width = this.settings.width,
                            this.image_wrapper.width(this.settings.width),
                            this.wrapper.width(this.settings.width)) : this.image_wrapper_width = this.image_wrapper.width(),
                        this.settings.height ? (this.image_wrapper_height = this.settings.height,
                            this.image_wrapper.height(this.settings.height)) : this.image_wrapper_height = this.image_wrapper.height(),
                        this.nav_display_width = this.nav.width(),
                        this.current_index = 0,
                        this.current_image = !1,
                        this.current_description = !1,
                        this.in_transition = !1,
                        this.findImages(),
                    this.settings.display_next_and_prev && this.initNextAndPrev();
                    var r = function(e) {
                        return i.nextImage(e)
                    };
                    this.slideshow = new o(r,this.settings.slideshow),
                        this.controls.append(this.slideshow.create()),
                        this.settings.slideshow.enable ? this.slideshow.enable() : this.slideshow.disable(),
                    this.settings.display_back_and_forward && this.initBackAndForward(),
                    this.settings.enable_keyboard_move && this.initKeyEvents();
                    var a = parseInt(this.settings.start_at_index, 10);
                    window.location.hash && 0 === window.location.hash.indexOf("#ad-image") && (a = window.location.hash.replace(/[^0-9]+/g, ""),
                    1 * a != a && (a = this.settings.start_at_index)),
                        this.loading(!0),
                        this.showImage(a, function() {
                            i.settings.slideshow.autostart && (i.preloadImage(a + 1),
                                i.slideshow.start())
                        }),
                        this.fireCallback(this.settings.callbacks.init)
                },
                setupAnimations: function() {
                    this.animations = {
                        "slide-vert": t,
                        "slide-hori": n,
                        resize: i,
                        fade: r,
                        none: a
                    }
                },
                setupElements: function() {
                    this.controls = this.wrapper.find(".ad-controls"),
                        this.gallery_info = e('<p class="ad-info"></p>'),
                        this.controls.append(this.gallery_info),
                        this.image_wrapper = this.wrapper.find(".ad-image-wrapper"),
                        this.image_wrapper.empty(),
                        this.nav = this.wrapper.find(".ad-nav"),
                        this.thumbs_wrapper = this.nav.find(".ad-thumbs"),
                        this.preloads = e('<div class="ad-preloads"></div>'),
                        this.loader = e('<img class="ad-loader" src="' + this.settings.loader_image + '">'),
                        this.image_wrapper.append(this.loader),
                        this.loader.hide(),
                        e(document.body).append(this.preloads)
                },
                loading: function(e) {
                    e ? this.loader.show() : this.loader.hide()
                },
                addAnimation: function(t, n) {
                    e.isFunction(n) && (this.animations[t] = n)
                },
                findImages: function() {
                    var t = this;
                    this.images = [];
                    var n = 0
                        , i = 0
                        , r = this.thumbs_wrapper.find("a")
                        , a = r.length;
                    this.settings.thumb_opacity < 1 && r.find("img").css("opacity", this.settings.thumb_opacity),
                        r.each(function(r) {
                            var a = e(this)
                                , s = a.attr("href")
                                , o = a.find("img");
                            t.isImageLoaded(o[0]) ? (n += o[0].parentNode.parentNode.offsetWidth,
                                i++) : o.load(function() {
                                n += this.parentNode.parentNode.offsetWidth,
                                    i++
                            }),
                                a.addClass("ad-thumb" + r),
                                a.click(function() {
                                    return t.showImage(r),
                                        t.slideshow.stop(),
                                        !1
                                }).hover(function() {
                                    !e(this).is(".ad-active") && t.settings.thumb_opacity < 1 && e(this).find("img").fadeTo(300, 1),
                                        t.preloadImage(r)
                                }, function() {
                                    !e(this).is(".ad-active") && t.settings.thumb_opacity < 1 && e(this).find("img").fadeTo(300, t.settings.thumb_opacity)
                                });
                            var a = !1;
                            o.data("ad-link") ? a = o.data("ad-link") : o.attr("longdesc") && o.attr("longdesc").length && (a = o.attr("longdesc"));
                            var l = !1;
                            o.data("ad-desc") ? l = o.data("ad-desc") : o.attr("alt") && o.attr("alt").length && (l = o.attr("alt"));
                            var c = !1;
                            o.data("ad-title") ? c = o.data("ad-title") : o.attr("title") && o.attr("title").length && (c = o.attr("title")),
                                t.images[r] = {
                                    thumb: o.attr("src"),
                                    image: s,
                                    error: !1,
                                    preloaded: !1,
                                    desc: l,
                                    title: c,
                                    size: !1,
                                    link: a
                                }
                        });
                    var s = setInterval(function() {
                        if (a == i) {
                            n -= 100;
                            var e = t.nav.find(".ad-thumb-list");
                            e.css("width", n + "px");
                            for (var r = 1, o = e.height(); 201 > r && (e.css("width", n + r + "px"),
                            o == e.height()); )
                                o = e.height(),
                                    r++;
                            clearInterval(s)
                        }
                    }, 100)
                },
                initKeyEvents: function() {
                    var t = this;
                    e(document).keydown(function(e) {
                        39 == e.keyCode ? (t.nextImage(),
                            t.slideshow.stop()) : 37 == e.keyCode && (t.prevImage(),
                            t.slideshow.stop())
                    })
                },
                initNextAndPrev: function() {
                    this.next_link = e('<div class="ad-next"><div class="ad-next-image"></div></div>'),
                        this.prev_link = e('<div class="ad-prev"><div class="ad-prev-image"></div></div>'),
                        this.image_wrapper.append(this.next_link),
                        this.image_wrapper.append(this.prev_link);
                    var t = this;
                    this.prev_link.add(this.next_link).mouseover(function(n) {
                        e(this).css("height", t.image_wrapper_height),
                            e(this).find("div").show()
                    }).mouseout(function(t) {
                        e(this).find("div").hide()
                    }).click(function() {
                        return e(this).is(".ad-next") ? (t.nextImage(),
                            t.slideshow.stop()) : (t.prevImage(),
                            t.slideshow.stop()),
                            !1
                    }).find("div").css("opacity", .7)
                },
                initBackAndForward: function() {
                    var t = this;
                    this.scroll_forward = e('<div class="ad-forward"></div>'),
                        this.scroll_back = e('<div class="ad-back"></div>'),
                        this.nav.append(this.scroll_forward),
                        this.nav.prepend(this.scroll_back);
                    var n = 0
                        , i = !1;
                    e(this.scroll_back).add(this.scroll_forward).click(function() {
                        var n = t.nav_display_width - 50;
                        if (t.settings.scroll_jump > 0)
                            var n = t.settings.scroll_jump;
                        if (e(this).is(".ad-forward"))
                            var i = t.thumbs_wrapper.scrollLeft() + n;
                        else
                            var i = t.thumbs_wrapper.scrollLeft() - n;
                        return t.settings.slideshow.stop_on_scroll && t.slideshow.stop(),
                            t.thumbs_wrapper.animate({
                                scrollLeft: i + "px"
                            }),
                            !1
                    }).css("opacity", .6).hover(function() {
                        var r = "left";
                        e(this).is(".ad-forward") && (r = "right"),
                            i = setInterval(function() {
                                n++,
                                n > 30 && t.settings.slideshow.stop_on_scroll && t.slideshow.stop();
                                var e = t.thumbs_wrapper.scrollLeft() + 1;
                                "left" == r && (e = t.thumbs_wrapper.scrollLeft() - 1),
                                    t.thumbs_wrapper.scrollLeft(e)
                            }, 10),
                            e(this).css("opacity", 1)
                    }, function() {
                        n = 0,
                            clearInterval(i),
                            e(this).css("opacity", .6)
                    })
                },
                _afterShow: function() {
                    this.gallery_info.html(this.current_index + 1 + " / " + this.images.length),
                    this.settings.cycle || (this.prev_link.show().css("height", this.image_wrapper_height),
                        this.next_link.show().css("height", this.image_wrapper_height),
                    this.current_index == this.images.length - 1 && this.next_link.hide(),
                    0 == this.current_index && this.prev_link.hide()),
                        this.fireCallback(this.settings.callbacks.afterImageVisible)
                },
                _getContainedImageSize: function(e, t) {
                    if (t > this.image_wrapper_height) {
                        var n = e / t;
                        t = this.image_wrapper_height,
                            e = this.image_wrapper_height * n
                    }
                    if (e > this.image_wrapper_width) {
                        var n = t / e;
                        e = this.image_wrapper_width,
                            t = this.image_wrapper_width * n
                    }
                    return {
                        width: e,
                        height: t
                    }
                },
                _centerImage: function(e, t, n) {
                    if (e.css("top", "0px"),
                        n < this.image_wrapper_height) {
                        var i = this.image_wrapper_height - n;
                        e.css("top", i / 2 + "px")
                    }
                    if (e.css("left", "0px"),
                        t < this.image_wrapper_width) {
                        var i = this.image_wrapper_width - t;
                        e.css("left", i / 2 + "px")
                    }
                },
                _getDescription: function(t) {
                    var n = !1;
                    if (t.desc.length || t.title.length) {
                        var i = "";
                        t.title.length && (i = '<strong class="ad-description-title">' + t.title + "</strong>");
                        var n = "";
                        t.desc.length && (n = "<span>" + t.desc + "</span>"),
                            n = e('<p class="ad-image-description">' + i + n + "</p>");
                    }
                    return n
                },
                showImage: function(e, t) {
                    if (this.images[e] && !this.in_transition) {
                        var n = this
                            , i = this.images[e];
                        this.in_transition = !0,
                            i.preloaded ? this._showWhenLoaded(e, t) : (this.loading(!0),
                                this.preloadImage(e, function() {
                                    n.loading(!1),
                                        n._showWhenLoaded(e, t)
                                }))
                    }
                },
                _showWhenLoaded: function(t, n) {
                    if (this.images[t]) {
                        var i = this
                            , r = this.images[t]
                            , a = e(document.createElement("div")).addClass("ad-image")
                            , s = e(new Image).attr("x-src", r.image);
                        if (r.link) {
                            var o = e('<a href="' + r.link + '" target="_blank"></a>');
                            o.append(s),
                                a.append(o)
                        } else
                            a.append(s);
                        this.image_wrapper.prepend(a);
                        var l = this._getContainedImageSize(r.size.width, r.size.height);
                        s.attr("width", l.width),
                            s.attr("height", l.height),
                            a.css({
                                width: l.width + "px",
                                height: l.height + "px"
                            }),
                            this._centerImage(a, l.width, l.height);
                        var c = this._getDescription(r, a);
                        if (c)
                            if (this.settings.description_wrapper)
                                this.settings.description_wrapper.append(c);
                            else {
                                a.append(c);
                                var d = l.width - parseInt(c.css("padding-left"), 10) - parseInt(c.css("padding-right"), 10);
                                c.css("width", d + "px")
                            }
                        this.highLightThumb(this.nav.find(".ad-thumb" + t));
                        var u = "right";
                        if (this.current_index < t && (u = "left"),
                                this.fireCallback(this.settings.callbacks.beforeImageVisible),
                            this.current_image || this.settings.animate_first_image) {
                            var p = this.settings.animation_speed
                                , h = "swing"
                                , f = this.animations[this.settings.effect].call(this, a, u, c);
                            if ("undefined" != typeof f.speed && (p = f.speed),
                                "undefined" != typeof f.easing && (h = f.easing),
                                    this.current_image) {
                                var m = this.current_image
                                    , v = this.current_description;
                                m.animate(f.old_image, p, h, function() {
                                    m.remove(),
                                    v && v.remove()
                                })
                            }
                            a.animate(f.new_image, p, h, function() {
                                i.current_index = t,
                                    i.current_image = a,
                                    i.current_description = c,
                                    i.in_transition = !1,
                                    i._afterShow(),
                                    i.fireCallback(n)
                            })
                        } else
                            this.current_index = t,
                                this.current_image = a,
                                i.current_description = c,
                                this.in_transition = !1,
                                i._afterShow(),
                                this.fireCallback(n)
                    }
                },
                nextIndex: function() {
                    if (this.current_index == this.images.length - 1) {
                        if (!this.settings.cycle)
                            return !1;
                        var e = 0
                    } else
                        var e = this.current_index + 1;
                    return e
                },
                nextImage: function(e) {
                    var t = this.nextIndex();
                    return t === !1 ? !1 : (this.preloadImage(t + 1),
                        this.showImage(t, e),
                        !0)
                },
                prevIndex: function() {
                    if (0 == this.current_index) {
                        if (!this.settings.cycle)
                            return !1;
                        var e = this.images.length - 1
                    } else
                        var e = this.current_index - 1;
                    return e
                },
                prevImage: function(e) {
                    var t = this.prevIndex();
                    return t === !1 ? !1 : (this.preloadImage(t - 1),
                        this.showImage(t, e),
                        !0)
                },
                preloadAll: function() {
                    function e() {
                        n < t.images.length && (n++,
                            t.preloadImage(n, e))
                    }
                    var t = this
                        , n = 0;
                    t.preloadImage(n, e)
                },
                preloadImage: function(t, n) {
                    if (this.images[t]) {
                        var i = this.images[t];
                        if (this.images[t].preloaded)
                            this.fireCallback(n);
                        else {
                            var r = e(new Image);
                            if (r.attr("src", i.image),
                                    this.isImageLoaded(r[0]))
                                i.preloaded = !0,
                                    i.size = {
                                        width: r[0].width,
                                        height: r[0].height
                                    },
                                    this.fireCallback(n);
                            else {
                                this.preloads.append(r);
                                var a = this;
                                r.load(function() {
                                    i.preloaded = !0,
                                        i.size = {
                                            width: this.width,
                                            height: this.height
                                        },
                                        a.fireCallback(n)
                                }).error(function() {
                                    i.error = !0,
                                        i.preloaded = !1,
                                        i.size = !1
                                })
                            }
                        }
                    }
                },
                isImageLoaded: function(e) {
                    return "undefined" == typeof e.complete || e.complete ? "undefined" == typeof e.naturalWidth || 0 != e.naturalWidth : !1
                },
                highLightThumb: function(e) {
                    this.thumbs_wrapper.find(".ad-active").removeClass("ad-active"),
                        e.addClass("ad-active"),
                    this.settings.thumb_opacity < 1 && (this.thumbs_wrapper.find("a:not(.ad-active) img").fadeTo(300, this.settings.thumb_opacity),
                        e.find("img").fadeTo(300, 1));
                    var t = e[0].parentNode.offsetLeft;
                    t -= this.nav_display_width / 2 - e[0].offsetWidth / 2,
                        this.thumbs_wrapper.animate({
                            scrollLeft: t + "px"
                        })
                },
                fireCallback: function(t) {
                    e.isFunction(t) && t.call(this)
                }
            },
            o.prototype = {
                start_link: !1,
                stop_link: !1,
                countdown: !1,
                controls: !1,
                settings: !1,
                nextimage_callback: !1,
                enabled: !1,
                running: !1,
                countdown_interval: !1,
                init: function(e, t) {
                    this.nextimage_callback = e,
                        this.settings = t
                },
                create: function() {
                    this.start_link = e('<span class="ad-slideshow-start">' + this.settings.start_label + "</span>"),
                        this.stop_link = e('<span class="ad-slideshow-stop">' + this.settings.stop_label + "</span>"),
                        this.countdown = e('<span class="ad-slideshow-countdown"></span>'),
                        this.controls = e('<div class="ad-slideshow-controls"></div>'),
                        this.controls.append(this.start_link).append(this.stop_link).append(this.countdown),
                        this.countdown.hide();
                    var t = this;
                    return this.start_link.click(function() {
                        t.start()
                    }),
                        this.stop_link.click(function() {
                            t.stop()
                        }),
                        e(document).keydown(function(e) {
                            83 == e.keyCode && (t.running ? t.stop() : t.start())
                        }),
                        this.controls
                },
                disable: function() {
                    this.enabled = !1,
                        this.stop(),
                        this.controls.hide()
                },
                enable: function() {
                    this.enabled = !0,
                        this.controls.show()
                },
                toggle: function() {
                    this.enabled ? this.disable() : this.enable()
                },
                start: function() {
                    if (this.running || !this.enabled)
                        return !1;
                    return this.running = !0,
                        this.controls.addClass("ad-slideshow-running"),
                        this._next(),
                        this.fireCallback(this.settings.onStart),
                        !0
                },
                stop: function() {
                    return this.running ? (this.running = !1,
                        this.countdown.hide(),
                        this.controls.removeClass("ad-slideshow-running"),
                        clearInterval(this.countdown_interval),
                        this.fireCallback(this.settings.onStop),
                        !0) : !1
                },
                _next: function() {
                    var e = this
                        , t = this.settings.countdown_prefix
                        , n = this.settings.countdown_sufix;
                    clearInterval(e.countdown_interval),
                        this.countdown.show().html(t + this.settings.speed / 1e3 + n);
                    var i = 0;
                    this.countdown_interval = setInterval(function() {
                        if (i += 1e3,
                            i >= e.settings.speed) {
                            var r = function() {
                                e.running && e._next(),
                                    i = 0
                            };
                            e.nextimage_callback(r) || e.stop(),
                                i = 0
                        }
                        var a = parseInt(e.countdown.text().replace(/[^0-9]/g, ""), 10);
                        a--,
                        a > 0 && e.countdown.html(t + a + n)
                    }, 1e3)
                },
                fireCallback: function(t) {
                    e.isFunction(t) && t.call(this)
                }
            }
    }(jQuery),
    !function(e, t) {
        function n(e, t) {
            return typeof e === t
        }
        function i() {
            var e, t, i, r, a, o, c;
            for (var u in s) {
                if (e = [],
                        t = s[u],
                    t.name && (e.push(t.name.toLowerCase()),
                    t.options && t.options.aliases && t.options.aliases.length))
                    for (i = 0; i < t.options.aliases.length; i++)
                        e.push(t.options.aliases[i].toLowerCase());
                for (r = n(t.fn, "function") ? t.fn() : t.fn,
                         a = 0; a < e.length; a++)
                    o = e[a],
                        c = o.split("."),
                        1 === c.length ? l[c[0]] = r : 2 === c.length && (!l[c[0]] || l[c[0]]instanceof Boolean || (l[c[0]] = new Boolean(l[c[0]])),
                            l[c[0]][c[1]] = r),
                        d.push((r ? "" : "no-") + c.join("-"))
            }
        }
        function r(e) {
            var t = u.className
                , n = l._config.classPrefix || "";
            if (l._config.enableJSClass) {
                var i = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
                t = t.replace(i, "$1" + n + "js$2")
            }
            l._config.enableClasses && (t += " " + n + e.join(" " + n),
                u.className = t)
        }
        function a(e, t) {
            if ("object" == typeof e)
                for (var n in e)
                    c(e, n) && a(n, e[n]);
            else {
                e = e.toLowerCase();
                var i = e.split(".")
                    , s = l[i[0]];
                if (2 == i.length && (s = s[i[1]]),
                    "undefined" != typeof s)
                    return l;
                t = "function" == typeof t ? t() : t,
                    1 == i.length ? l[i[0]] = t : 2 == i.length && (!l[i[0]] || l[i[0]]instanceof Boolean || (l[i[0]] = new Boolean(l[i[0]])),
                        l[i[0]][i[1]] = t),
                    r([(t && 0 != t ? "" : "no-") + i.join("-")]),
                    l._trigger(e, t)
            }
            return l
        }
        var s = []
            , o = {
            _version: "v3.0.0pre",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, t) {
                var n = this;
                setTimeout(function() {
                    t(n[e])
                }, 0)
            },
            addTest: function(e, t, n) {
                s.push({
                    name: e,
                    fn: t,
                    options: n
                })
            },
            addAsyncTest: function(e) {
                s.push({
                    name: null ,
                    fn: e
                })
            }
        }
            , l = function() {};
        l.prototype = o,
            l = new l;
        var c, d = [];
        !function() {
            var e = {}.hasOwnProperty;
            c = n(e, "undefined") || n(e.call, "undefined") ? function(e, t) {
                return t in e && n(e.constructor.prototype[t], "undefined")
            }
                : function(t, n) {
                return e.call(t, n)
            }
        }();
        var u = t.documentElement;
        o._l = {},
            o.on = function(e, t) {
                this._l[e] || (this._l[e] = []),
                    this._l[e].push(t),
                l.hasOwnProperty(e) && setTimeout(function() {
                    l._trigger(e, l[e])
                }, 0)
            }
            ,
            o._trigger = function(e, t) {
                if (this._l[e]) {
                    var n = this._l[e];
                    setTimeout(function() {
                        var e, i;
                        for (e = 0; e < n.length; e++)
                            (i = n[e])(t)
                    }, 0),
                        delete this._l[e]
                }
            }
            ,
            l._q.push(function() {
                o.addTest = a
            }),
            l.addAsyncTest(function() {
                function e(e, t, n) {
                    function i(t) {
                        var i = "load" === t.type ? 1 == r.width : !1
                            , s = "webp" === e;
                        a(e, s ? new Boolean(i) : i),
                        n && n(t)
                    }
                    var r = new Image;
                    r.onerror = i,
                        r.onload = i,
                        r.src = t
                }
                var t = [{
                    uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                    name: "webp"
                }, {
                    uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                    name: "webp.alpha"
                }, {
                    uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                    name: "webp.animation"
                }, {
                    uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                    name: "webp.lossless"
                }]
                    , n = t.shift();
                e(n.name, n.uri, function(n) {
                    if ("load" === n.type)
                        for (var i = 0; i < t.length; i++)
                            e(t[i].name, t[i].uri)
                })
            }),
            l.addTest("localstorage", function() {
                var e = "modernizr";
                try {
                    return localStorage.setItem(e, e),
                        localStorage.removeItem(e),
                        !0
                } catch (t) {
                    return !1
                }
            }),
            i(),
            delete o.addTest,
            delete o.addAsyncTest;
        for (var p = 0; p < l._q.length; p++)
            l._q[p]();
        e.Modernizr = l
    }(this, document),
    function e(t, n, i) {
        function r(s, o) {
            if (!n[s]) {
                if (!t[s]) {
                    var l = "function" == typeof require && require;
                    if (!o && l)
                        return l(s, !0);
                    if (a)
                        return a(s, !0);
                    var c = new Error("Cannot find module '" + s + "'");
                    throw c.code = "MODULE_NOT_FOUND",
                        c
                }
                var d = n[s] = {
                    exports: {}
                };
                t[s][0].call(d.exports, function(e) {
                    var n = t[s][1][e];
                    return r(n ? n : e)
                }, d, d.exports, e, t, n, i)
            }
            return n[s].exports
        }
        for (var a = "function" == typeof require && require, s = 0; s < i.length; s++)
            r(i[s]);
        return r
    }({
        1: [function(e, t, n) {
            "use strict";
            window.ENJOY = window.ENJOY || {};
            var i = window.ENJOY;
            i.querystring = e("qs").parse(("undefined" != typeof window ? location.search : "").slice(1))
        }
            , {
                qs: 2
            }],
        2: [function(e, t, n) {
            "use strict";
            var i = e("./stringify")
                , r = e("./parse");
            t.exports = {
                stringify: i,
                parse: r
            }
        }
            , {
                "./parse": 3,
                "./stringify": 4
            }],
        3: [function(e, t, n) {
            "use strict";
            var i = e("./utils")
                , r = {
                delimiter: "&",
                depth: 5,
                arrayLimit: 20,
                parameterLimit: 1e3,
                strictNullHandling: !1,
                plainObjects: !1,
                allowPrototypes: !1,
                allowDots: !1,
                decoder: i.decode
            }
                , a = function(e, t) {
                for (var n = {}, i = e.split(t.delimiter, t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit), r = 0; r < i.length; ++r) {
                    var a = i[r]
                        , s = -1 === a.indexOf("]=") ? a.indexOf("=") : a.indexOf("]=") + 1;
                    if (-1 === s)
                        n[t.decoder(a)] = "",
                        t.strictNullHandling && (n[t.decoder(a)] = null );
                    else {
                        var o = t.decoder(a.slice(0, s))
                            , l = t.decoder(a.slice(s + 1));
                        Object.prototype.hasOwnProperty.call(n, o) ? n[o] = [].concat(n[o]).concat(l) : n[o] = l
                    }
                }
                return n
            }
                , s = function l(e, t, n) {
                if (!e.length)
                    return t;
                var i, r = e.shift();
                if ("[]" === r)
                    i = [],
                        i = i.concat(l(e, t, n));
                else {
                    i = n.plainObjects ? Object.create(null ) : {};
                    var a = "[" === r[0] && "]" === r[r.length - 1] ? r.slice(1, r.length - 1) : r
                        , s = parseInt(a, 10);
                    !isNaN(s) && r !== a && String(s) === a && s >= 0 && n.parseArrays && s <= n.arrayLimit ? (i = [],
                        i[s] = l(e, t, n)) : i[a] = l(e, t, n)
                }
                return i
            }
                , o = function(e, t, n) {
                if (e) {
                    var i = n.allowDots ? e.replace(/\.([^\.\[]+)/g, "[$1]") : e
                        , r = /^([^\[\]]*)/
                        , a = /(\[[^\[\]]*\])/g
                        , o = r.exec(i)
                        , l = [];
                    if (o[1]) {
                        if (!n.plainObjects && Object.prototype.hasOwnProperty(o[1]) && !n.allowPrototypes)
                            return;
                        l.push(o[1])
                    }
                    for (var c = 0; null !== (o = a.exec(i)) && c < n.depth; )
                        c += 1,
                        (n.plainObjects || !Object.prototype.hasOwnProperty(o[1].replace(/\[|\]/g, "")) || n.allowPrototypes) && l.push(o[1]);
                    return o && l.push("[" + i.slice(o.index) + "]"),
                        s(l, t, n)
                }
            };
            t.exports = function(e, t) {
                var n = t || {};
                if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)
                    throw new TypeError("Decoder has to be a function.");
                if (n.delimiter = "string" == typeof n.delimiter || i.isRegExp(n.delimiter) ? n.delimiter : r.delimiter,
                        n.depth = "number" == typeof n.depth ? n.depth : r.depth,
                        n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : r.arrayLimit,
                        n.parseArrays = n.parseArrays !== !1,
                        n.decoder = "function" == typeof n.decoder ? n.decoder : r.decoder,
                        n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : r.allowDots,
                        n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : r.plainObjects,
                        n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : r.allowPrototypes,
                        n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : r.parameterLimit,
                        n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : r.strictNullHandling,
                    "" === e || null === e || "undefined" == typeof e)
                    return n.plainObjects ? Object.create(null ) : {};
                for (var s = "string" == typeof e ? a(e, n) : e, l = n.plainObjects ? Object.create(null ) : {}, c = Object.keys(s), d = 0; d < c.length; ++d) {
                    var u = c[d]
                        , p = o(u, s[u], n);
                    l = i.merge(l, p, n)
                }
                return i.compact(l)
            }
        }
            , {
                "./utils": 5
            }],
        4: [function(e, t, n) {
            "use strict";
            var i = e("./utils")
                , r = {
                brackets: function(e) {
                    return e + "[]"
                },
                indices: function(e, t) {
                    return e + "[" + t + "]"
                },
                repeat: function(e) {
                    return e
                }
            }
                , a = {
                delimiter: "&",
                strictNullHandling: !1,
                skipNulls: !1,
                encode: !0,
                encoder: i.encode
            }
                , s = function o(e, t, n, r, a, s, l, c, d) {
                var u = e;
                if ("function" == typeof l)
                    u = l(t, u);
                else if (u instanceof Date)
                    u = u.toISOString();
                else if (null === u) {
                    if (r)
                        return s ? s(t) : t;
                    u = ""
                }
                if ("string" == typeof u || "number" == typeof u || "boolean" == typeof u || i.isBuffer(u))
                    return s ? [s(t) + "=" + s(u)] : [t + "=" + String(u)];
                var p = [];
                if ("undefined" == typeof u)
                    return p;
                var h;
                if (Array.isArray(l))
                    h = l;
                else {
                    var f = Object.keys(u);
                    h = c ? f.sort(c) : f
                }
                for (var m = 0; m < h.length; ++m) {
                    var v = h[m];
                    a && null === u[v] || (p = Array.isArray(u) ? p.concat(o(u[v], n(t, v), n, r, a, s, l, c, d)) : p.concat(o(u[v], t + (d ? "." + v : "[" + v + "]"), n, r, a, s, l, c, d)))
                }
                return p
            };
            t.exports = function(e, t) {
                var n, i, o = e, l = t || {}, c = "undefined" == typeof l.delimiter ? a.delimiter : l.delimiter, d = "boolean" == typeof l.strictNullHandling ? l.strictNullHandling : a.strictNullHandling, u = "boolean" == typeof l.skipNulls ? l.skipNulls : a.skipNulls, p = "boolean" == typeof l.encode ? l.encode : a.encode, h = p ? "function" == typeof l.encoder ? l.encoder : a.encoder : null , f = "function" == typeof l.sort ? l.sort : null , m = "undefined" == typeof l.allowDots ? !1 : l.allowDots;
                if (null !== l.encoder && void 0 !== l.encoder && "function" != typeof l.encoder)
                    throw new TypeError("Encoder has to be a function.");
                "function" == typeof l.filter ? (i = l.filter,
                    o = i("", o)) : Array.isArray(l.filter) && (n = i = l.filter);
                var v = [];
                if ("object" != typeof o || null === o)
                    return "";
                var g;
                g = l.arrayFormat in r ? l.arrayFormat : "indices"in l ? l.indices ? "indices" : "repeat" : "indices";
                var y = r[g];
                n || (n = Object.keys(o)),
                f && n.sort(f);
                for (var w = 0; w < n.length; ++w) {
                    var b = n[w];
                    u && null === o[b] || (v = v.concat(s(o[b], b, y, d, u, h, i, f, m)))
                }
                return v.join(c)
            }
        }
            , {
                "./utils": 5
            }],
        5: [function(e, t, n) {
            "use strict";
            var i = function() {
                for (var e = new Array(256), t = 0; 256 > t; ++t)
                    e[t] = "%" + ((16 > t ? "0" : "") + t.toString(16)).toUpperCase();
                return e
            }();
            n.arrayToObject = function(e, t) {
                for (var n = t.plainObjects ? Object.create(null ) : {}, i = 0; i < e.length; ++i)
                    "undefined" != typeof e[i] && (n[i] = e[i]);
                return n
            }
                ,
                n.merge = function(e, t, i) {
                    if (!t)
                        return e;
                    if ("object" != typeof t) {
                        if (Array.isArray(e))
                            e.push(t);
                        else {
                            if ("object" != typeof e)
                                return [e, t];
                            e[t] = !0
                        }
                        return e
                    }
                    if ("object" != typeof e)
                        return [e].concat(t);
                    var r = e;
                    return Array.isArray(e) && !Array.isArray(t) && (r = n.arrayToObject(e, i)),
                        Object.keys(t).reduce(function(e, r) {
                            var a = t[r];
                            return Object.prototype.hasOwnProperty.call(e, r) ? e[r] = n.merge(e[r], a, i) : e[r] = a,
                                e
                        }, r)
                }
                ,
                n.decode = function(e) {
                    try {
                        return decodeURIComponent(e.replace(/\+/g, " "))
                    } catch (t) {
                        return e
                    }
                }
                ,
                n.encode = function(e) {
                    if (0 === e.length)
                        return e;
                    for (var t = "string" == typeof e ? e : String(e), n = "", r = 0; r < t.length; ++r) {
                        var a = t.charCodeAt(r);
                        45 === a || 46 === a || 95 === a || 126 === a || a >= 48 && 57 >= a || a >= 65 && 90 >= a || a >= 97 && 122 >= a ? n += t.charAt(r) : 128 > a ? n += i[a] : 2048 > a ? n += i[192 | a >> 6] + i[128 | 63 & a] : 55296 > a || a >= 57344 ? n += i[224 | a >> 12] + i[128 | a >> 6 & 63] + i[128 | 63 & a] : (r += 1,
                            a = 65536 + ((1023 & a) << 10 | 1023 & t.charCodeAt(r)),
                            n += i[240 | a >> 18] + i[128 | a >> 12 & 63] + i[128 | a >> 6 & 63] + i[128 | 63 & a])
                    }
                    return n
                }
                ,
                n.compact = function(e, t) {
                    if ("object" != typeof e || null === e)
                        return e;
                    var i = t || []
                        , r = i.indexOf(e);
                    if (-1 !== r)
                        return i[r];
                    if (i.push(e),
                            Array.isArray(e)) {
                        for (var a = [], s = 0; s < e.length; ++s)
                            e[s] && "object" == typeof e[s] ? a.push(n.compact(e[s], i)) : "undefined" != typeof e[s] && a.push(e[s]);
                        return a
                    }
                    for (var o = Object.keys(e), l = 0; l < o.length; ++l) {
                        var c = o[l];
                        e[c] = n.compact(e[c], i)
                    }
                    return e
                }
                ,
                n.isRegExp = function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                }
                ,
                n.isBuffer = function(e) {
                    return null === e || "undefined" == typeof e ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                }
        }
            , {}]
    }, {}, [1]),
    !function() {
        "use strict";
        function e(e) {
            e.fn.swiper = function(t) {
                var i;
                return e(this).each(function() {
                    var e = new n(this,t);
                    i || (i = e)
                }),
                    i
            }
        }
        var t, n = function(e, i) {
            function r() {
                return "horizontal" === g.params.direction
            }
            function a(e) {
                return Math.floor(e)
            }
            function s() {
                g.autoplayTimeoutId = setTimeout(function() {
                    g.params.loop ? (g.fixLoop(),
                        g._slideNext()) : g.isEnd ? i.autoplayStopOnLast ? g.stopAutoplay() : g._slideTo(0) : g._slideNext()
                }, g.params.autoplay)
            }
            function o(e, n) {
                var i = t(e.target);
                if (!i.is(n))
                    if ("string" == typeof n)
                        i = i.parents(n);
                    else if (n.nodeType) {
                        var r;
                        return i.parents().each(function(e, t) {
                            t === n && (r = n)
                        }),
                            r ? n : void 0
                    }
                return 0 === i.length ? void 0 : i[0]
            }
            function l(e, t) {
                t = t || {};
                var n = window.MutationObserver || window.WebkitMutationObserver
                    , i = new n(function(e) {
                        e.forEach(function(e) {
                            g.onResize(!0),
                                g.emit("onObserverUpdate", g, e)
                        })
                    }
                );
                i.observe(e, {
                    attributes: "undefined" == typeof t.attributes ? !0 : t.attributes,
                    childList: "undefined" == typeof t.childList ? !0 : t.childList,
                    characterData: "undefined" == typeof t.characterData ? !0 : t.characterData
                }),
                    g.observers.push(i)
            }
            function c(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = e.keyCode || e.charCode;
                if (!g.params.allowSwipeToNext && (r() && 39 === t || !r() && 40 === t))
                    return !1;
                if (!g.params.allowSwipeToPrev && (r() && 37 === t || !r() && 38 === t))
                    return !1;
                if (!(e.shiftKey || e.altKey || e.ctrlKey || e.metaKey || document.activeElement && document.activeElement.nodeName && ("input" === document.activeElement.nodeName.toLowerCase() || "textarea" === document.activeElement.nodeName.toLowerCase()))) {
                    if (37 === t || 39 === t || 38 === t || 40 === t) {
                        var n = !1;
                        if (g.container.parents(".swiper-slide").length > 0 && 0 === g.container.parents(".swiper-slide-active").length)
                            return;
                        var i = {
                            left: window.pageXOffset,
                            top: window.pageYOffset
                        }
                            , a = window.innerWidth
                            , s = window.innerHeight
                            , o = g.container.offset();
                        g.rtl && (o.left = o.left - g.container[0].scrollLeft);
                        for (var l = [[o.left, o.top], [o.left + g.width, o.top], [o.left, o.top + g.height], [o.left + g.width, o.top + g.height]], c = 0; c < l.length; c++) {
                            var d = l[c];
                            d[0] >= i.left && d[0] <= i.left + a && d[1] >= i.top && d[1] <= i.top + s && (n = !0)
                        }
                        if (!n)
                            return
                    }
                    r() ? ((37 === t || 39 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    (39 === t && !g.rtl || 37 === t && g.rtl) && g.slideNext(),
                    (37 === t && !g.rtl || 39 === t && g.rtl) && g.slidePrev()) : ((38 === t || 40 === t) && (e.preventDefault ? e.preventDefault() : e.returnValue = !1),
                    40 === t && g.slideNext(),
                    38 === t && g.slidePrev())
                }
            }
            function d(e) {
                e.originalEvent && (e = e.originalEvent);
                var t = g.mousewheel.event
                    , n = 0;
                if (e.detail)
                    n = -e.detail;
                else if ("mousewheel" === t)
                    if (g.params.mousewheelForceToAxis)
                        if (r()) {
                            if (!(Math.abs(e.wheelDeltaX) > Math.abs(e.wheelDeltaY)))
                                return;
                            n = e.wheelDeltaX
                        } else {
                            if (!(Math.abs(e.wheelDeltaY) > Math.abs(e.wheelDeltaX)))
                                return;
                            n = e.wheelDeltaY
                        }
                    else
                        n = e.wheelDelta;
                else if ("DOMMouseScroll" === t)
                    n = -e.detail;
                else if ("wheel" === t)
                    if (g.params.mousewheelForceToAxis)
                        if (r()) {
                            if (!(Math.abs(e.deltaX) > Math.abs(e.deltaY)))
                                return;
                            n = -e.deltaX
                        } else {
                            if (!(Math.abs(e.deltaY) > Math.abs(e.deltaX)))
                                return;
                            n = -e.deltaY
                        }
                    else
                        n = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? -e.deltaX : -e.deltaY;
                if (g.params.mousewheelInvert && (n = -n),
                        g.params.freeMode) {
                    var i = g.getWrapperTranslate() + n * g.params.mousewheelSensitivity;
                    if (i > 0 && (i = 0),
                        i < g.maxTranslate() && (i = g.maxTranslate()),
                            g.setWrapperTransition(0),
                            g.setWrapperTranslate(i),
                            g.updateProgress(),
                            g.updateActiveIndex(),
                        g.params.freeModeSticky && (clearTimeout(g.mousewheel.timeout),
                            g.mousewheel.timeout = setTimeout(function() {
                                g.slideReset()
                            }, 300)),
                        0 === i || i === g.maxTranslate())
                        return
                } else {
                    if ((new window.Date).getTime() - g.mousewheel.lastScrollTime > 60)
                        if (0 > n)
                            if (g.isEnd && !g.params.loop || g.animating) {
                                if (g.params.mousewheelReleaseOnEdges)
                                    return !0
                            } else
                                g.slideNext();
                        else if (g.isBeginning && !g.params.loop || g.animating) {
                            if (g.params.mousewheelReleaseOnEdges)
                                return !0
                        } else
                            g.slidePrev();
                    g.mousewheel.lastScrollTime = (new window.Date).getTime()
                }
                return g.params.autoplay && g.stopAutoplay(),
                    e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    !1
            }
            function u(e, n) {
                e = t(e);
                var i, a, s;
                i = e.attr("data-swiper-parallax") || "0",
                    a = e.attr("data-swiper-parallax-x"),
                    s = e.attr("data-swiper-parallax-y"),
                    a || s ? (a = a || "0",
                        s = s || "0") : r() ? (a = i,
                        s = "0") : (s = i,
                        a = "0"),
                    a = a.indexOf("%") >= 0 ? parseInt(a, 10) * n + "%" : a * n + "px",
                    s = s.indexOf("%") >= 0 ? parseInt(s, 10) * n + "%" : s * n + "px",
                    e.transform("translate3d(" + a + ", " + s + ",0px)")
            }
            function p(e) {
                return 0 !== e.indexOf("on") && (e = e[0] !== e[0].toUpperCase() ? "on" + e[0].toUpperCase() + e.substring(1) : "on" + e),
                    e
            }
            if (!(this instanceof n))
                return new n(e,i);
            var h = {
                direction: "horizontal",
                touchEventsTarget: "container",
                initialSlide: 0,
                speed: 300,
                autoplay: !1,
                autoplayDisableOnInteraction: !0,
                iOSEdgeSwipeDetection: !1,
                iOSEdgeSwipeThreshold: 20,
                freeMode: !1,
                freeModeMomentum: !0,
                freeModeMomentumRatio: 1,
                freeModeMomentumBounce: !0,
                freeModeMomentumBounceRatio: 1,
                freeModeSticky: !1,
                setWrapperSize: !1,
                virtualTranslate: !1,
                effect: "slide",
                coverflow: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: !0
                },
                cube: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                },
                fade: {
                    crossFade: !1
                },
                parallax: !1,
                scrollbar: null ,
                scrollbarHide: !0,
                keyboardControl: !1,
                mousewheelControl: !1,
                mousewheelReleaseOnEdges: !1,
                mousewheelInvert: !1,
                mousewheelForceToAxis: !1,
                mousewheelSensitivity: 1,
                hashnav: !1,
                spaceBetween: 0,
                slidesPerView: 1,
                slidesPerColumn: 1,
                slidesPerColumnFill: "column",
                slidesPerGroup: 1,
                centeredSlides: !1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0,
                roundLengths: !1,
                touchRatio: 1,
                touchAngle: 45,
                simulateTouch: !0,
                shortSwipes: !0,
                longSwipes: !0,
                longSwipesRatio: .5,
                longSwipesMs: 300,
                followFinger: !0,
                onlyExternal: !1,
                threshold: 0,
                touchMoveStopPropagation: !0,
                pagination: null ,
                paginationElement: "span",
                paginationClickable: !1,
                paginationHide: !1,
                paginationBulletRender: null ,
                resistance: !0,
                resistanceRatio: .85,
                nextButton: null ,
                prevButton: null ,
                watchSlidesProgress: !1,
                watchSlidesVisibility: !1,
                grabCursor: !1,
                preventClicks: !0,
                preventClicksPropagation: !0,
                slideToClickedSlide: !1,
                lazyLoading: !1,
                lazyLoadingInPrevNext: !1,
                lazyLoadingOnTransitionStart: !1,
                preloadImages: !0,
                updateOnImagesReady: !0,
                loop: !1,
                loopAdditionalSlides: 0,
                loopedSlides: null ,
                control: void 0,
                controlInverse: !1,
                controlBy: "slide",
                allowSwipeToPrev: !0,
                allowSwipeToNext: !0,
                swipeHandler: null ,
                noSwiping: !0,
                noSwipingClass: "swiper-no-swiping",
                slideClass: "swiper-slide",
                slideActiveClass: "swiper-slide-active",
                slideVisibleClass: "swiper-slide-visible",
                slideDuplicateClass: "swiper-slide-duplicate",
                slideNextClass: "swiper-slide-next",
                slidePrevClass: "swiper-slide-prev",
                wrapperClass: "swiper-wrapper",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
                buttonDisabledClass: "swiper-button-disabled",
                paginationHiddenClass: "swiper-pagination-hidden",
                observer: !1,
                observeParents: !1,
                a11y: !1,
                prevSlideMessage: "Previous slide",
                nextSlideMessage: "Next slide",
                firstSlideMessage: "This is the first slide",
                lastSlideMessage: "This is the last slide",
                paginationBulletMessage: "Go to slide {{index}}",
                runCallbacksOnInit: !0
            }
                , f = i && i.virtualTranslate;
            i = i || {};
            for (var m in h)
                if ("undefined" == typeof i[m])
                    i[m] = h[m];
                else if ("object" == typeof i[m])
                    for (var v in h[m])
                        "undefined" == typeof i[m][v] && (i[m][v] = h[m][v]);
            var g = this;
            if (g.version = "3.1.0",
                    g.params = i,
                    g.classNames = [],
                "undefined" != typeof t && "undefined" != typeof Dom7 && (t = Dom7),
                ("undefined" != typeof t || (t = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7)) && (g.$ = t,
                    g.container = t(e),
                0 !== g.container.length)) {
                if (g.container.length > 1)
                    return void g.container.each(function() {
                        new n(this,i)
                    });
                g.container[0].swiper = g,
                    g.container.data("swiper", g),
                    g.classNames.push("swiper-container-" + g.params.direction),
                g.params.freeMode && g.classNames.push("swiper-container-free-mode"),
                g.support.flexbox || (g.classNames.push("swiper-container-no-flexbox"),
                    g.params.slidesPerColumn = 1),
                (g.params.parallax || g.params.watchSlidesVisibility) && (g.params.watchSlidesProgress = !0),
                ["cube", "coverflow"].indexOf(g.params.effect) >= 0 && (g.support.transforms3d ? (g.params.watchSlidesProgress = !0,
                    g.classNames.push("swiper-container-3d")) : g.params.effect = "slide"),
                "slide" !== g.params.effect && g.classNames.push("swiper-container-" + g.params.effect),
                "cube" === g.params.effect && (g.params.resistanceRatio = 0,
                    g.params.slidesPerView = 1,
                    g.params.slidesPerColumn = 1,
                    g.params.slidesPerGroup = 1,
                    g.params.centeredSlides = !1,
                    g.params.spaceBetween = 0,
                    g.params.virtualTranslate = !0,
                    g.params.setWrapperSize = !1),
                "fade" === g.params.effect && (g.params.slidesPerView = 1,
                    g.params.slidesPerColumn = 1,
                    g.params.slidesPerGroup = 1,
                    g.params.watchSlidesProgress = !0,
                    g.params.spaceBetween = 0,
                "undefined" == typeof f && (g.params.virtualTranslate = !0)),
                g.params.grabCursor && g.support.touch && (g.params.grabCursor = !1),
                    g.wrapper = g.container.children("." + g.params.wrapperClass),
                g.params.pagination && (g.paginationContainer = t(g.params.pagination),
                g.params.paginationClickable && g.paginationContainer.addClass("swiper-pagination-clickable")),
                    g.rtl = r() && ("rtl" === g.container[0].dir.toLowerCase() || "rtl" === g.container.css("direction")),
                g.rtl && g.classNames.push("swiper-container-rtl"),
                g.rtl && (g.wrongRTL = "-webkit-box" === g.wrapper.css("display")),
                g.params.slidesPerColumn > 1 && g.classNames.push("swiper-container-multirow"),
                g.device.android && g.classNames.push("swiper-container-android"),
                    g.container.addClass(g.classNames.join(" ")),
                    g.translate = 0,
                    g.progress = 0,
                    g.velocity = 0,
                    g.lockSwipeToNext = function() {
                        g.params.allowSwipeToNext = !1
                    }
                    ,
                    g.lockSwipeToPrev = function() {
                        g.params.allowSwipeToPrev = !1
                    }
                    ,
                    g.lockSwipes = function() {
                        g.params.allowSwipeToNext = g.params.allowSwipeToPrev = !1
                    }
                    ,
                    g.unlockSwipeToNext = function() {
                        g.params.allowSwipeToNext = !0
                    }
                    ,
                    g.unlockSwipeToPrev = function() {
                        g.params.allowSwipeToPrev = !0
                    }
                    ,
                    g.unlockSwipes = function() {
                        g.params.allowSwipeToNext = g.params.allowSwipeToPrev = !0
                    }
                    ,
                g.params.grabCursor && (g.container[0].style.cursor = "move",
                    g.container[0].style.cursor = "-webkit-grab",
                    g.container[0].style.cursor = "-moz-grab",
                    g.container[0].style.cursor = "grab"),
                    g.imagesToLoad = [],
                    g.imagesLoaded = 0,
                    g.loadImage = function(e, t, n, i) {
                        function r() {
                            i && i()
                        }
                        var a;
                        e.complete && n ? r() : t ? (a = new window.Image,
                            a.onload = r,
                            a.onerror = r,
                            a.src = t) : r()
                    }
                    ,
                    g.preloadImages = function() {
                        function e() {
                            "undefined" != typeof g && null !== g && (void 0 !== g.imagesLoaded && g.imagesLoaded++,
                            g.imagesLoaded === g.imagesToLoad.length && (g.params.updateOnImagesReady && g.update(),
                                g.emit("onImagesReady", g)))
                        }
                        g.imagesToLoad = g.container.find("img");
                        for (var t = 0; t < g.imagesToLoad.length; t++)
                            g.loadImage(g.imagesToLoad[t], g.imagesToLoad[t].currentSrc || g.imagesToLoad[t].getAttribute("src"), !0, e)
                    }
                    ,
                    g.autoplayTimeoutId = void 0,
                    g.autoplaying = !1,
                    g.autoplayPaused = !1,
                    g.startAutoplay = function() {
                        return "undefined" != typeof g.autoplayTimeoutId ? !1 : g.params.autoplay ? g.autoplaying ? !1 : (g.autoplaying = !0,
                            g.emit("onAutoplayStart", g),
                            void s()) : !1
                    }
                    ,
                    g.stopAutoplay = function(e) {
                        g.autoplayTimeoutId && (g.autoplayTimeoutId && clearTimeout(g.autoplayTimeoutId),
                            g.autoplaying = !1,
                            g.autoplayTimeoutId = void 0,
                            g.emit("onAutoplayStop", g))
                    }
                    ,
                    g.pauseAutoplay = function(e) {
                        g.autoplayPaused || (g.autoplayTimeoutId && clearTimeout(g.autoplayTimeoutId),
                            g.autoplayPaused = !0,
                            0 === e ? (g.autoplayPaused = !1,
                                s()) : g.wrapper.transitionEnd(function() {
                                g && (g.autoplayPaused = !1,
                                    g.autoplaying ? s() : g.stopAutoplay())
                            }))
                    }
                    ,
                    g.minTranslate = function() {
                        return -g.snapGrid[0]
                    }
                    ,
                    g.maxTranslate = function() {
                        return -g.snapGrid[g.snapGrid.length - 1]
                    }
                    ,
                    g.updateContainerSize = function() {
                        var e, t;
                        e = "undefined" != typeof g.params.width ? g.params.width : g.container[0].clientWidth,
                            t = "undefined" != typeof g.params.height ? g.params.height : g.container[0].clientHeight,
                        0 === e && r() || 0 === t && !r() || (e = e - parseInt(g.container.css("padding-left"), 10) - parseInt(g.container.css("padding-right"), 10),
                            t = t - parseInt(g.container.css("padding-top"), 10) - parseInt(g.container.css("padding-bottom"), 10),
                            g.width = e,
                            g.height = t,
                            g.size = r() ? g.width : g.height)
                    }
                    ,
                    g.updateSlidesSize = function() {
                        g.slides = g.wrapper.children("." + g.params.slideClass),
                            g.snapGrid = [],
                            g.slidesGrid = [],
                            g.slidesSizesGrid = [];
                        var e, t = g.params.spaceBetween, n = -g.params.slidesOffsetBefore, i = 0, s = 0;
                        "string" == typeof t && t.indexOf("%") >= 0 && (t = parseFloat(t.replace("%", "")) / 100 * g.size),
                            g.virtualSize = -t,
                            g.slides.css(g.rtl ? {
                                marginLeft: "",
                                marginTop: ""
                            } : {
                                marginRight: "",
                                marginBottom: ""
                            });
                        var o;
                        g.params.slidesPerColumn > 1 && (o = Math.floor(g.slides.length / g.params.slidesPerColumn) === g.slides.length / g.params.slidesPerColumn ? g.slides.length : Math.ceil(g.slides.length / g.params.slidesPerColumn) * g.params.slidesPerColumn);
                        var l, c = g.params.slidesPerColumn, d = o / c, u = d - (g.params.slidesPerColumn * d - g.slides.length);
                        for (e = 0; e < g.slides.length; e++) {
                            l = 0;
                            var p = g.slides.eq(e);
                            if (g.params.slidesPerColumn > 1) {
                                var h, f, m;
                                "column" === g.params.slidesPerColumnFill ? (f = Math.floor(e / c),
                                    m = e - f * c,
                                (f > u || f === u && m === c - 1) && ++m >= c && (m = 0,
                                    f++),
                                    h = f + m * o / c,
                                    p.css({
                                        "-webkit-box-ordinal-group": h,
                                        "-moz-box-ordinal-group": h,
                                        "-ms-flex-order": h,
                                        "-webkit-order": h,
                                        order: h
                                    })) : (m = Math.floor(e / d),
                                    f = e - m * d),
                                    p.css({
                                        "margin-top": 0 !== m && g.params.spaceBetween && g.params.spaceBetween + "px"
                                    }).attr("data-swiper-column", f).attr("data-swiper-row", m)
                            }
                            "none" !== p.css("display") && ("auto" === g.params.slidesPerView ? (l = r() ? p.outerWidth(!0) : p.outerHeight(!0),
                            g.params.roundLengths && (l = a(l))) : (l = (g.size - (g.params.slidesPerView - 1) * t) / g.params.slidesPerView,
                            g.params.roundLengths && (l = a(l)),
                                r() ? g.slides[e].style.width = l + "px" : g.slides[e].style.height = l + "px"),
                                g.slides[e].swiperSlideSize = l,
                                g.slidesSizesGrid.push(l),
                                g.params.centeredSlides ? (n = n + l / 2 + i / 2 + t,
                                0 === e && (n = n - g.size / 2 - t),
                                Math.abs(n) < .001 && (n = 0),
                                s % g.params.slidesPerGroup === 0 && g.snapGrid.push(n),
                                    g.slidesGrid.push(n)) : (s % g.params.slidesPerGroup === 0 && g.snapGrid.push(n),
                                    g.slidesGrid.push(n),
                                    n = n + l + t),
                                g.virtualSize += l + t,
                                i = l,
                                s++)
                        }
                        g.virtualSize = Math.max(g.virtualSize, g.size) + g.params.slidesOffsetAfter;
                        var v;
                        if (g.rtl && g.wrongRTL && ("slide" === g.params.effect || "coverflow" === g.params.effect) && g.wrapper.css({
                                width: g.virtualSize + g.params.spaceBetween + "px"
                            }),
                            (!g.support.flexbox || g.params.setWrapperSize) && g.wrapper.css(r() ? {
                                width: g.virtualSize + g.params.spaceBetween + "px"
                            } : {
                                height: g.virtualSize + g.params.spaceBetween + "px"
                            }),
                            g.params.slidesPerColumn > 1 && (g.virtualSize = (l + g.params.spaceBetween) * o,
                                g.virtualSize = Math.ceil(g.virtualSize / g.params.slidesPerColumn) - g.params.spaceBetween,
                                g.wrapper.css({
                                    width: g.virtualSize + g.params.spaceBetween + "px"
                                }),
                                g.params.centeredSlides)) {
                            for (v = [],
                                     e = 0; e < g.snapGrid.length; e++)
                                g.snapGrid[e] < g.virtualSize + g.snapGrid[0] && v.push(g.snapGrid[e]);
                            g.snapGrid = v
                        }
                        if (!g.params.centeredSlides) {
                            for (v = [],
                                     e = 0; e < g.snapGrid.length; e++)
                                g.snapGrid[e] <= g.virtualSize - g.size && v.push(g.snapGrid[e]);
                            g.snapGrid = v,
                            Math.floor(g.virtualSize - g.size) > Math.floor(g.snapGrid[g.snapGrid.length - 1]) && g.snapGrid.push(g.virtualSize - g.size)
                        }
                        0 === g.snapGrid.length && (g.snapGrid = [0]),
                        0 !== g.params.spaceBetween && g.slides.css(r() ? g.rtl ? {
                            marginLeft: t + "px"
                        } : {
                            marginRight: t + "px"
                        } : {
                            marginBottom: t + "px"
                        }),
                        g.params.watchSlidesProgress && g.updateSlidesOffset()
                    }
                    ,
                    g.updateSlidesOffset = function() {
                        for (var e = 0; e < g.slides.length; e++)
                            g.slides[e].swiperSlideOffset = r() ? g.slides[e].offsetLeft : g.slides[e].offsetTop
                    }
                    ,
                    g.updateSlidesProgress = function(e) {
                        if ("undefined" == typeof e && (e = g.translate || 0),
                            0 !== g.slides.length) {
                            "undefined" == typeof g.slides[0].swiperSlideOffset && g.updateSlidesOffset();
                            var t = -e;
                            g.rtl && (t = e),
                                g.container[0].getBoundingClientRect(),
                                r() ? "left" : "top",
                                r() ? "right" : "bottom",
                                g.slides.removeClass(g.params.slideVisibleClass);
                            for (var n = 0; n < g.slides.length; n++) {
                                var i = g.slides[n]
                                    , a = (t - i.swiperSlideOffset) / (i.swiperSlideSize + g.params.spaceBetween);
                                if (g.params.watchSlidesVisibility) {
                                    var s = -(t - i.swiperSlideOffset)
                                        , o = s + g.slidesSizesGrid[n]
                                        , l = s >= 0 && s < g.size || o > 0 && o <= g.size || 0 >= s && o >= g.size;
                                    l && g.slides.eq(n).addClass(g.params.slideVisibleClass)
                                }
                                i.progress = g.rtl ? -a : a
                            }
                        }
                    }
                    ,
                    g.updateProgress = function(e) {
                        "undefined" == typeof e && (e = g.translate || 0);
                        var t = g.maxTranslate() - g.minTranslate();
                        0 === t ? (g.progress = 0,
                            g.isBeginning = g.isEnd = !0) : (g.progress = (e - g.minTranslate()) / t,
                            g.isBeginning = g.progress <= 0,
                            g.isEnd = g.progress >= 1),
                        g.isBeginning && g.emit("onReachBeginning", g),
                        g.isEnd && g.emit("onReachEnd", g),
                        g.params.watchSlidesProgress && g.updateSlidesProgress(e),
                            g.emit("onProgress", g, g.progress)
                    }
                    ,
                    g.updateActiveIndex = function() {
                        var e, t, n, i = g.rtl ? g.translate : -g.translate;
                        for (t = 0; t < g.slidesGrid.length; t++)
                            "undefined" != typeof g.slidesGrid[t + 1] ? i >= g.slidesGrid[t] && i < g.slidesGrid[t + 1] - (g.slidesGrid[t + 1] - g.slidesGrid[t]) / 2 ? e = t : i >= g.slidesGrid[t] && i < g.slidesGrid[t + 1] && (e = t + 1) : i >= g.slidesGrid[t] && (e = t);
                        (0 > e || "undefined" == typeof e) && (e = 0),
                            n = Math.floor(e / g.params.slidesPerGroup),
                        n >= g.snapGrid.length && (n = g.snapGrid.length - 1),
                        e !== g.activeIndex && (g.snapIndex = n,
                            g.previousIndex = g.activeIndex,
                            g.activeIndex = e,
                            g.updateClasses())
                    }
                    ,
                    g.updateClasses = function() {
                        g.slides.removeClass(g.params.slideActiveClass + " " + g.params.slideNextClass + " " + g.params.slidePrevClass);
                        var e = g.slides.eq(g.activeIndex);
                        if (e.addClass(g.params.slideActiveClass),
                                e.next("." + g.params.slideClass).addClass(g.params.slideNextClass),
                                e.prev("." + g.params.slideClass).addClass(g.params.slidePrevClass),
                            g.bullets && g.bullets.length > 0) {
                            g.bullets.removeClass(g.params.bulletActiveClass);
                            var n;
                            g.params.loop ? (n = Math.ceil(g.activeIndex - g.loopedSlides) / g.params.slidesPerGroup,
                            n > g.slides.length - 1 - 2 * g.loopedSlides && (n -= g.slides.length - 2 * g.loopedSlides),
                            n > g.bullets.length - 1 && (n -= g.bullets.length)) : n = "undefined" != typeof g.snapIndex ? g.snapIndex : g.activeIndex || 0,
                                g.paginationContainer.length > 1 ? g.bullets.each(function() {
                                    t(this).index() === n && t(this).addClass(g.params.bulletActiveClass)
                                }) : g.bullets.eq(n).addClass(g.params.bulletActiveClass)
                        }
                        g.params.loop || (g.params.prevButton && (g.isBeginning ? (t(g.params.prevButton).addClass(g.params.buttonDisabledClass),
                        g.params.a11y && g.a11y && g.a11y.disable(t(g.params.prevButton))) : (t(g.params.prevButton).removeClass(g.params.buttonDisabledClass),
                        g.params.a11y && g.a11y && g.a11y.enable(t(g.params.prevButton)))),
                        g.params.nextButton && (g.isEnd ? (t(g.params.nextButton).addClass(g.params.buttonDisabledClass),
                        g.params.a11y && g.a11y && g.a11y.disable(t(g.params.nextButton))) : (t(g.params.nextButton).removeClass(g.params.buttonDisabledClass),
                        g.params.a11y && g.a11y && g.a11y.enable(t(g.params.nextButton)))))
                    }
                    ,
                    g.updatePagination = function() {
                        if (g.params.pagination && g.paginationContainer && g.paginationContainer.length > 0) {
                            for (var e = "", t = g.params.loop ? Math.ceil((g.slides.length - 2 * g.loopedSlides) / g.params.slidesPerGroup) : g.snapGrid.length, n = 0; t > n; n++)
                                e += g.params.paginationBulletRender ? g.params.paginationBulletRender(n, g.params.bulletClass) : "<" + g.params.paginationElement + ' class="' + g.params.bulletClass + '"></' + g.params.paginationElement + ">";
                            g.paginationContainer.html(e),
                                g.bullets = g.paginationContainer.find("." + g.params.bulletClass),
                            g.params.paginationClickable && g.params.a11y && g.a11y && g.a11y.initPagination()
                        }
                    }
                    ,
                    g.update = function(e) {
                        function t() {
                            i = Math.min(Math.max(g.translate, g.maxTranslate()), g.minTranslate()),
                                g.setWrapperTranslate(i),
                                g.updateActiveIndex(),
                                g.updateClasses()
                        }
                        if (g.updateContainerSize(),
                                g.updateSlidesSize(),
                                g.updateProgress(),
                                g.updatePagination(),
                                g.updateClasses(),
                            g.params.scrollbar && g.scrollbar && g.scrollbar.set(),
                                e) {
                            var n, i;
                            g.controller && g.controller.spline && (g.controller.spline = void 0),
                                g.params.freeMode ? t() : (n = ("auto" === g.params.slidesPerView || g.params.slidesPerView > 1) && g.isEnd && !g.params.centeredSlides ? g.slideTo(g.slides.length - 1, 0, !1, !0) : g.slideTo(g.activeIndex, 0, !1, !0),
                                n || t())
                        }
                    }
                    ,
                    g.onResize = function(e) {
                        var t = g.params.allowSwipeToPrev
                            , n = g.params.allowSwipeToNext;
                        if (g.params.allowSwipeToPrev = g.params.allowSwipeToNext = !0,
                                g.updateContainerSize(),
                                g.updateSlidesSize(),
                            ("auto" === g.params.slidesPerView || g.params.freeMode || e) && g.updatePagination(),
                            g.params.scrollbar && g.scrollbar && g.scrollbar.set(),
                            g.controller && g.controller.spline && (g.controller.spline = void 0),
                                g.params.freeMode) {
                            var i = Math.min(Math.max(g.translate, g.maxTranslate()), g.minTranslate());
                            g.setWrapperTranslate(i),
                                g.updateActiveIndex(),
                                g.updateClasses()
                        } else
                            g.updateClasses(),
                                ("auto" === g.params.slidesPerView || g.params.slidesPerView > 1) && g.isEnd && !g.params.centeredSlides ? g.slideTo(g.slides.length - 1, 0, !1, !0) : g.slideTo(g.activeIndex, 0, !1, !0);
                        g.params.allowSwipeToPrev = t,
                            g.params.allowSwipeToNext = n
                    }
                ;
                var y = ["mousedown", "mousemove", "mouseup"];
                window.navigator.pointerEnabled ? y = ["pointerdown", "pointermove", "pointerup"] : window.navigator.msPointerEnabled && (y = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]),
                    g.touchEvents = {
                        start: g.support.touch || !g.params.simulateTouch ? "touchstart" : y[0],
                        move: g.support.touch || !g.params.simulateTouch ? "touchmove" : y[1],
                        end: g.support.touch || !g.params.simulateTouch ? "touchend" : y[2]
                    },
                (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && ("container" === g.params.touchEventsTarget ? g.container : g.wrapper).addClass("swiper-wp8-" + g.params.direction),
                    g.initEvents = function(e) {
                        var n = e ? "off" : "on"
                            , r = e ? "removeEventListener" : "addEventListener"
                            , a = "container" === g.params.touchEventsTarget ? g.container[0] : g.wrapper[0]
                            , s = g.support.touch ? a : document
                            , o = !!g.params.nested;
                        g.browser.ie ? (a[r](g.touchEvents.start, g.onTouchStart, !1),
                            s[r](g.touchEvents.move, g.onTouchMove, o),
                            s[r](g.touchEvents.end, g.onTouchEnd, !1)) : (g.support.touch && (a[r](g.touchEvents.start, g.onTouchStart, !1),
                            a[r](g.touchEvents.move, g.onTouchMove, o),
                            a[r](g.touchEvents.end, g.onTouchEnd, !1)),
                        !i.simulateTouch || g.device.ios || g.device.android || (a[r]("mousedown", g.onTouchStart, !1),
                            document[r]("mousemove", g.onTouchMove, o),
                            document[r]("mouseup", g.onTouchEnd, !1))),
                            window[r]("resize", g.onResize),
                        g.params.nextButton && (t(g.params.nextButton)[n]("click", g.onClickNext),
                        g.params.a11y && g.a11y && t(g.params.nextButton)[n]("keydown", g.a11y.onEnterKey)),
                        g.params.prevButton && (t(g.params.prevButton)[n]("click", g.onClickPrev),
                        g.params.a11y && g.a11y && t(g.params.prevButton)[n]("keydown", g.a11y.onEnterKey)),
                        g.params.pagination && g.params.paginationClickable && (t(g.paginationContainer)[n]("click", "." + g.params.bulletClass, g.onClickIndex),
                        g.params.a11y && g.a11y && t(g.paginationContainer)[n]("keydown", "." + g.params.bulletClass, g.a11y.onEnterKey)),
                        (g.params.preventClicks || g.params.preventClicksPropagation) && a[r]("click", g.preventClicks, !0)
                    }
                    ,
                    g.attachEvents = function(e) {
                        g.initEvents()
                    }
                    ,
                    g.detachEvents = function() {
                        g.initEvents(!0)
                    }
                    ,
                    g.allowClick = !0,
                    g.preventClicks = function(e) {
                        g.allowClick || (g.params.preventClicks && e.preventDefault(),
                        g.params.preventClicksPropagation && g.animating && (e.stopPropagation(),
                            e.stopImmediatePropagation()))
                    }
                    ,
                    g.onClickNext = function(e) {
                        e.preventDefault(),
                        (!g.isEnd || g.params.loop) && g.slideNext()
                    }
                    ,
                    g.onClickPrev = function(e) {
                        e.preventDefault(),
                        (!g.isBeginning || g.params.loop) && g.slidePrev()
                    }
                    ,
                    g.onClickIndex = function(e) {
                        e.preventDefault();
                        var n = t(this).index() * g.params.slidesPerGroup;
                        g.params.loop && (n += g.loopedSlides),
                            g.slideTo(n)
                    }
                    ,
                    g.updateClickedSlide = function(e) {
                        var n = o(e, "." + g.params.slideClass)
                            , i = !1;
                        if (n)
                            for (var r = 0; r < g.slides.length; r++)
                                g.slides[r] === n && (i = !0);
                        if (!n || !i)
                            return g.clickedSlide = void 0,
                                void (g.clickedIndex = void 0);
                        if (g.clickedSlide = n,
                                g.clickedIndex = t(n).index(),
                            g.params.slideToClickedSlide && void 0 !== g.clickedIndex && g.clickedIndex !== g.activeIndex) {
                            var a, s = g.clickedIndex;
                            if (g.params.loop)
                                if (a = t(g.clickedSlide).attr("data-swiper-slide-index"),
                                    s > g.slides.length - g.params.slidesPerView)
                                    g.fixLoop(),
                                        s = g.wrapper.children("." + g.params.slideClass + '[data-swiper-slide-index="' + a + '"]').eq(0).index(),
                                        setTimeout(function() {
                                            g.slideTo(s)
                                        }, 0);
                                else if (s < g.params.slidesPerView - 1) {
                                    g.fixLoop();
                                    var l = g.wrapper.children("." + g.params.slideClass + '[data-swiper-slide-index="' + a + '"]');
                                    s = l.eq(l.length - 1).index(),
                                        setTimeout(function() {
                                            g.slideTo(s)
                                        }, 0)
                                } else
                                    g.slideTo(s);
                            else
                                g.slideTo(s)
                        }
                    }
                ;
                var w, b, _, x, T, C, S, k, A, E = "input, select, textarea, button", $ = Date.now(), M = [];
                g.animating = !1,
                    g.touches = {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    };
                var O, N;
                if (g.onTouchStart = function(e) {
                        if (e.originalEvent && (e = e.originalEvent),
                                O = "touchstart" === e.type,
                            O || !("which"in e) || 3 !== e.which) {
                            if (g.params.noSwiping && o(e, "." + g.params.noSwipingClass))
                                return void (g.allowClick = !0);
                            if (!g.params.swipeHandler || o(e, g.params.swipeHandler)) {
                                var n = g.touches.currentX = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX
                                    , i = g.touches.currentY = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY;
                                if (!(g.device.ios && g.params.iOSEdgeSwipeDetection && n <= g.params.iOSEdgeSwipeThreshold)) {
                                    if (w = !0,
                                            b = !1,
                                            x = void 0,
                                            N = void 0,
                                            g.touches.startX = n,
                                            g.touches.startY = i,
                                            _ = Date.now(),
                                            g.allowClick = !0,
                                            g.updateContainerSize(),
                                            g.swipeDirection = void 0,
                                        g.params.threshold > 0 && (S = !1),
                                        "touchstart" !== e.type) {
                                        var r = !0;
                                        t(e.target).is(E) && (r = !1),
                                        document.activeElement && t(document.activeElement).is(E) && document.activeElement.blur(),
                                        r && e.preventDefault()
                                    }
                                    g.emit("onTouchStart", g, e)
                                }
                            }
                        }
                    }
                        ,
                        g.onTouchMove = function(e) {
                            if (e.originalEvent && (e = e.originalEvent),
                                    !(O && "mousemove" === e.type || e.preventedByNestedSwiper)) {
                                if (g.params.onlyExternal)
                                    return g.allowClick = !1,
                                        void (w && (g.touches.startX = g.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                            g.touches.startY = g.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                            _ = Date.now()));
                                if (O && document.activeElement && e.target === document.activeElement && t(e.target).is(E))
                                    return b = !0,
                                        void (g.allowClick = !1);
                                if (g.emit("onTouchMove", g, e),
                                        !(e.targetTouches && e.targetTouches.length > 1)) {
                                    if (g.touches.currentX = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX,
                                            g.touches.currentY = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY,
                                        "undefined" == typeof x) {
                                        var n = 180 * Math.atan2(Math.abs(g.touches.currentY - g.touches.startY), Math.abs(g.touches.currentX - g.touches.startX)) / Math.PI;
                                        x = r() ? n > g.params.touchAngle : 90 - n > g.params.touchAngle
                                    }
                                    if (x && g.emit("onTouchMoveOpposite", g, e),
                                        "undefined" == typeof N && g.browser.ieTouch && (g.touches.currentX !== g.touches.startX || g.touches.currentY !== g.touches.startY) && (N = !0),
                                            w) {
                                        if (x)
                                            return void (w = !1);
                                        if (N || !g.browser.ieTouch) {
                                            g.allowClick = !1,
                                                g.emit("onSliderMove", g, e),
                                                e.preventDefault(),
                                            g.params.touchMoveStopPropagation && !g.params.nested && e.stopPropagation(),
                                            b || (i.loop && g.fixLoop(),
                                                C = g.getWrapperTranslate(),
                                                g.setWrapperTransition(0),
                                            g.animating && g.wrapper.trigger("webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"),
                                            g.params.autoplay && g.autoplaying && (g.params.autoplayDisableOnInteraction ? g.stopAutoplay() : g.pauseAutoplay()),
                                                A = !1,
                                            g.params.grabCursor && (g.container[0].style.cursor = "move",
                                                g.container[0].style.cursor = "-webkit-grabbing",
                                                g.container[0].style.cursor = "-moz-grabbin",
                                                g.container[0].style.cursor = "grabbing")),
                                                b = !0;
                                            var a = g.touches.diff = r() ? g.touches.currentX - g.touches.startX : g.touches.currentY - g.touches.startY;
                                            a *= g.params.touchRatio,
                                            g.rtl && (a = -a),
                                                g.swipeDirection = a > 0 ? "prev" : "next",
                                                T = a + C;
                                            var s = !0;
                                            if (a > 0 && T > g.minTranslate() ? (s = !1,
                                                g.params.resistance && (T = g.minTranslate() - 1 + Math.pow(-g.minTranslate() + C + a, g.params.resistanceRatio))) : 0 > a && T < g.maxTranslate() && (s = !1,
                                                g.params.resistance && (T = g.maxTranslate() + 1 - Math.pow(g.maxTranslate() - C - a, g.params.resistanceRatio))),
                                                s && (e.preventedByNestedSwiper = !0),
                                                !g.params.allowSwipeToNext && "next" === g.swipeDirection && C > T && (T = C),
                                                !g.params.allowSwipeToPrev && "prev" === g.swipeDirection && T > C && (T = C),
                                                    g.params.followFinger) {
                                                if (g.params.threshold > 0) {
                                                    if (!(Math.abs(a) > g.params.threshold || S))
                                                        return void (T = C);
                                                    if (!S)
                                                        return S = !0,
                                                            g.touches.startX = g.touches.currentX,
                                                            g.touches.startY = g.touches.currentY,
                                                            T = C,
                                                            void (g.touches.diff = r() ? g.touches.currentX - g.touches.startX : g.touches.currentY - g.touches.startY)
                                                }
                                                (g.params.freeMode || g.params.watchSlidesProgress) && g.updateActiveIndex(),
                                                g.params.freeMode && (0 === M.length && M.push({
                                                    position: g.touches[r() ? "startX" : "startY"],
                                                    time: _
                                                }),
                                                    M.push({
                                                        position: g.touches[r() ? "currentX" : "currentY"],
                                                        time: (new window.Date).getTime()
                                                    })),
                                                    g.updateProgress(T),
                                                    g.setWrapperTranslate(T)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        ,
                        g.onTouchEnd = function(e) {
                            if (e.originalEvent && (e = e.originalEvent),
                                    g.emit("onTouchEnd", g, e),
                                    w) {
                                g.params.grabCursor && b && w && (g.container[0].style.cursor = "move",
                                    g.container[0].style.cursor = "-webkit-grab",
                                    g.container[0].style.cursor = "-moz-grab",
                                    g.container[0].style.cursor = "grab");
                                var n = Date.now()
                                    , i = n - _;
                                if (g.allowClick && (g.updateClickedSlide(e),
                                        g.emit("onTap", g, e),
                                    300 > i && n - $ > 300 && (k && clearTimeout(k),
                                        k = setTimeout(function() {
                                            g && (g.params.paginationHide && g.paginationContainer.length > 0 && !t(e.target).hasClass(g.params.bulletClass) && g.paginationContainer.toggleClass(g.params.paginationHiddenClass),
                                                g.emit("onClick", g, e))
                                        }, 300)),
                                    300 > i && 300 > n - $ && (k && clearTimeout(k),
                                        g.emit("onDoubleTap", g, e))),
                                        $ = Date.now(),
                                        setTimeout(function() {
                                            g && (g.allowClick = !0)
                                        }, 0),
                                    !w || !b || !g.swipeDirection || 0 === g.touches.diff || T === C)
                                    return void (w = b = !1);
                                w = b = !1;
                                var r;
                                if (r = g.params.followFinger ? g.rtl ? g.translate : -g.translate : -T,
                                        g.params.freeMode) {
                                    if (r < -g.minTranslate())
                                        return void g.slideTo(g.activeIndex);
                                    if (r > -g.maxTranslate())
                                        return void g.slideTo(g.slides.length < g.snapGrid.length ? g.snapGrid.length - 1 : g.slides.length - 1);
                                    if (g.params.freeModeMomentum) {
                                        if (M.length > 1) {
                                            var a = M.pop()
                                                , s = M.pop()
                                                , o = a.position - s.position
                                                , l = a.time - s.time;
                                            g.velocity = o / l,
                                                g.velocity = g.velocity / 2,
                                            Math.abs(g.velocity) < .02 && (g.velocity = 0),
                                            (l > 150 || (new window.Date).getTime() - a.time > 300) && (g.velocity = 0)
                                        } else
                                            g.velocity = 0;
                                        M.length = 0;
                                        var c = 1e3 * g.params.freeModeMomentumRatio
                                            , d = g.velocity * c
                                            , u = g.translate + d;
                                        g.rtl && (u = -u);
                                        var p, h = !1, f = 20 * Math.abs(g.velocity) * g.params.freeModeMomentumBounceRatio;
                                        if (u < g.maxTranslate())
                                            g.params.freeModeMomentumBounce ? (u + g.maxTranslate() < -f && (u = g.maxTranslate() - f),
                                                p = g.maxTranslate(),
                                                h = !0,
                                                A = !0) : u = g.maxTranslate();
                                        else if (u > g.minTranslate())
                                            g.params.freeModeMomentumBounce ? (u - g.minTranslate() > f && (u = g.minTranslate() + f),
                                                p = g.minTranslate(),
                                                h = !0,
                                                A = !0) : u = g.minTranslate();
                                        else if (g.params.freeModeSticky) {
                                            var m, v = 0;
                                            for (v = 0; v < g.snapGrid.length; v += 1)
                                                if (g.snapGrid[v] > -u) {
                                                    m = v;
                                                    break
                                                }
                                            u = Math.abs(g.snapGrid[m] - u) < Math.abs(g.snapGrid[m - 1] - u) || "next" === g.swipeDirection ? g.snapGrid[m] : g.snapGrid[m - 1],
                                            g.rtl || (u = -u)
                                        }
                                        if (0 !== g.velocity)
                                            c = Math.abs(g.rtl ? (-u - g.translate) / g.velocity : (u - g.translate) / g.velocity);
                                        else if (g.params.freeModeSticky)
                                            return void g.slideReset();
                                        g.params.freeModeMomentumBounce && h ? (g.updateProgress(p),
                                            g.setWrapperTransition(c),
                                            g.setWrapperTranslate(u),
                                            g.onTransitionStart(),
                                            g.animating = !0,
                                            g.wrapper.transitionEnd(function() {
                                                g && A && (g.emit("onMomentumBounce", g),
                                                    g.setWrapperTransition(g.params.speed),
                                                    g.setWrapperTranslate(p),
                                                    g.wrapper.transitionEnd(function() {
                                                        g && g.onTransitionEnd()
                                                    }))
                                            })) : g.velocity ? (g.updateProgress(u),
                                            g.setWrapperTransition(c),
                                            g.setWrapperTranslate(u),
                                            g.onTransitionStart(),
                                        g.animating || (g.animating = !0,
                                            g.wrapper.transitionEnd(function() {
                                                g && g.onTransitionEnd()
                                            }))) : g.updateProgress(u),
                                            g.updateActiveIndex()
                                    }
                                    return void ((!g.params.freeModeMomentum || i >= g.params.longSwipesMs) && (g.updateProgress(),
                                        g.updateActiveIndex()))
                                }
                                var y, x = 0, S = g.slidesSizesGrid[0];
                                for (y = 0; y < g.slidesGrid.length; y += g.params.slidesPerGroup)
                                    "undefined" != typeof g.slidesGrid[y + g.params.slidesPerGroup] ? r >= g.slidesGrid[y] && r < g.slidesGrid[y + g.params.slidesPerGroup] && (x = y,
                                        S = g.slidesGrid[y + g.params.slidesPerGroup] - g.slidesGrid[y]) : r >= g.slidesGrid[y] && (x = y,
                                        S = g.slidesGrid[g.slidesGrid.length - 1] - g.slidesGrid[g.slidesGrid.length - 2]);
                                var E = (r - g.slidesGrid[x]) / S;
                                if (i > g.params.longSwipesMs) {
                                    if (!g.params.longSwipes)
                                        return void g.slideTo(g.activeIndex);
                                    "next" === g.swipeDirection && g.slideTo(E >= g.params.longSwipesRatio ? x + g.params.slidesPerGroup : x),
                                    "prev" === g.swipeDirection && g.slideTo(E > 1 - g.params.longSwipesRatio ? x + g.params.slidesPerGroup : x)
                                } else {
                                    if (!g.params.shortSwipes)
                                        return void g.slideTo(g.activeIndex);
                                    "next" === g.swipeDirection && g.slideTo(x + g.params.slidesPerGroup),
                                    "prev" === g.swipeDirection && g.slideTo(x)
                                }
                            }
                        }
                        ,
                        g._slideTo = function(e, t) {
                            return g.slideTo(e, t, !0, !0)
                        }
                        ,
                        g.slideTo = function(e, t, n, i) {
                            "undefined" == typeof n && (n = !0),
                            "undefined" == typeof e && (e = 0),
                            0 > e && (e = 0),
                                g.snapIndex = Math.floor(e / g.params.slidesPerGroup),
                            g.snapIndex >= g.snapGrid.length && (g.snapIndex = g.snapGrid.length - 1);
                            var a = -g.snapGrid[g.snapIndex];
                            g.params.autoplay && g.autoplaying && (i || !g.params.autoplayDisableOnInteraction ? g.pauseAutoplay(t) : g.stopAutoplay()),
                                g.updateProgress(a);
                            for (var s = 0; s < g.slidesGrid.length; s++)
                                -Math.floor(100 * a) >= Math.floor(100 * g.slidesGrid[s]) && (e = s);
                            return !g.params.allowSwipeToNext && a < g.translate && a < g.minTranslate() ? !1 : !g.params.allowSwipeToPrev && a > g.translate && a > g.maxTranslate() && (g.activeIndex || 0) !== e ? !1 : ("undefined" == typeof t && (t = g.params.speed),
                                g.previousIndex = g.activeIndex || 0,
                                g.activeIndex = e,
                                a === g.translate ? (g.updateClasses(),
                                    !1) : (g.updateClasses(),
                                    g.onTransitionStart(n),
                                    r() ? a : 0,
                                    r() ? 0 : a,
                                    0 === t ? (g.setWrapperTransition(0),
                                        g.setWrapperTranslate(a),
                                        g.onTransitionEnd(n)) : (g.setWrapperTransition(t),
                                        g.setWrapperTranslate(a),
                                    g.animating || (g.animating = !0,
                                        g.wrapper.transitionEnd(function() {
                                            g && g.onTransitionEnd(n)
                                        }))),
                                    !0))
                        }
                        ,
                        g.onTransitionStart = function(e) {
                            "undefined" == typeof e && (e = !0),
                            g.lazy && g.lazy.onTransitionStart(),
                            e && (g.emit("onTransitionStart", g),
                            g.activeIndex !== g.previousIndex && g.emit("onSlideChangeStart", g))
                        }
                        ,
                        g.onTransitionEnd = function(e) {
                            g.animating = !1,
                                g.setWrapperTransition(0),
                            "undefined" == typeof e && (e = !0),
                            g.lazy && g.lazy.onTransitionEnd(),
                            e && (g.emit("onTransitionEnd", g),
                            g.activeIndex !== g.previousIndex && g.emit("onSlideChangeEnd", g)),
                            g.params.hashnav && g.hashnav && g.hashnav.setHash()
                        }
                        ,
                        g.slideNext = function(e, t, n) {
                            return g.params.loop ? g.animating ? !1 : (g.fixLoop(),
                                g.container[0].clientLeft,
                                g.slideTo(g.activeIndex + g.params.slidesPerGroup, t, e, n)) : g.slideTo(g.activeIndex + g.params.slidesPerGroup, t, e, n)
                        }
                        ,
                        g._slideNext = function(e) {
                            return g.slideNext(!0, e, !0)
                        }
                        ,
                        g.slidePrev = function(e, t, n) {
                            return g.params.loop ? g.animating ? !1 : (g.fixLoop(),
                                g.container[0].clientLeft,
                                g.slideTo(g.activeIndex - 1, t, e, n)) : g.slideTo(g.activeIndex - 1, t, e, n)
                        }
                        ,
                        g._slidePrev = function(e) {
                            return g.slidePrev(!0, e, !0)
                        }
                        ,
                        g.slideReset = function(e, t, n) {
                            return g.slideTo(g.activeIndex, t, e)
                        }
                        ,
                        g.setWrapperTransition = function(e, t) {
                            g.wrapper.transition(e),
                            "slide" !== g.params.effect && g.effects[g.params.effect] && g.effects[g.params.effect].setTransition(e),
                            g.params.parallax && g.parallax && g.parallax.setTransition(e),
                            g.params.scrollbar && g.scrollbar && g.scrollbar.setTransition(e),
                            g.params.control && g.controller && g.controller.setTransition(e, t),
                                g.emit("onSetTransition", g, e)
                        }
                        ,
                        g.setWrapperTranslate = function(e, t, n) {
                            var i = 0
                                , a = 0
                                , s = 0;
                            r() ? i = g.rtl ? -e : e : a = e,
                            g.params.virtualTranslate || g.wrapper.transform(g.support.transforms3d ? "translate3d(" + i + "px, " + a + "px, " + s + "px)" : "translate(" + i + "px, " + a + "px)"),
                                g.translate = r() ? i : a,
                            t && g.updateActiveIndex(),
                            "slide" !== g.params.effect && g.effects[g.params.effect] && g.effects[g.params.effect].setTranslate(g.translate),
                            g.params.parallax && g.parallax && g.parallax.setTranslate(g.translate),
                            g.params.scrollbar && g.scrollbar && g.scrollbar.setTranslate(g.translate),
                            g.params.control && g.controller && g.controller.setTranslate(g.translate, n),
                                g.emit("onSetTranslate", g, g.translate)
                        }
                        ,
                        g.getTranslate = function(e, t) {
                            var n, i, r, a;
                            return "undefined" == typeof t && (t = "x"),
                                g.params.virtualTranslate ? g.rtl ? -g.translate : g.translate : (r = window.getComputedStyle(e, null ),
                                    window.WebKitCSSMatrix ? a = new window.WebKitCSSMatrix("none" === r.webkitTransform ? "" : r.webkitTransform) : (a = r.MozTransform || r.OTransform || r.MsTransform || r.msTransform || r.transform || r.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"),
                                        n = a.toString().split(",")),
                                "x" === t && (i = window.WebKitCSSMatrix ? a.m41 : parseFloat(16 === n.length ? n[12] : n[4])),
                                "y" === t && (i = window.WebKitCSSMatrix ? a.m42 : parseFloat(16 === n.length ? n[13] : n[5])),
                                g.rtl && i && (i = -i),
                                i || 0)
                        }
                        ,
                        g.getWrapperTranslate = function(e) {
                            return "undefined" == typeof e && (e = r() ? "x" : "y"),
                                g.getTranslate(g.wrapper[0], e)
                        }
                        ,
                        g.observers = [],
                        g.initObservers = function() {
                            if (g.params.observeParents)
                                for (var e = g.container.parents(), t = 0; t < e.length; t++)
                                    l(e[t]);
                            l(g.container[0], {
                                childList: !1
                            }),
                                l(g.wrapper[0], {
                                    attributes: !1
                                })
                        }
                        ,
                        g.disconnectObservers = function() {
                            for (var e = 0; e < g.observers.length; e++)
                                g.observers[e].disconnect();
                            g.observers = []
                        }
                        ,
                        g.createLoop = function() {
                            g.wrapper.children("." + g.params.slideClass + "." + g.params.slideDuplicateClass).remove();
                            var e = g.wrapper.children("." + g.params.slideClass);
                            "auto" !== g.params.slidesPerView || g.params.loopedSlides || (g.params.loopedSlides = e.length),
                                g.loopedSlides = parseInt(g.params.loopedSlides || g.params.slidesPerView, 10),
                                g.loopedSlides = g.loopedSlides + g.params.loopAdditionalSlides,
                            g.loopedSlides > e.length && (g.loopedSlides = e.length);
                            var n, i = [], r = [];
                            for (e.each(function(n, a) {
                                var s = t(this);
                                n < g.loopedSlides && r.push(a),
                                n < e.length && n >= e.length - g.loopedSlides && i.push(a),
                                    s.attr("data-swiper-slide-index", n)
                            }),
                                     n = 0; n < r.length; n++)
                                g.wrapper.append(t(r[n].cloneNode(!0)).addClass(g.params.slideDuplicateClass));
                            for (n = i.length - 1; n >= 0; n--)
                                g.wrapper.prepend(t(i[n].cloneNode(!0)).addClass(g.params.slideDuplicateClass))
                        }
                        ,
                        g.destroyLoop = function() {
                            g.wrapper.children("." + g.params.slideClass + "." + g.params.slideDuplicateClass).remove(),
                                g.slides.removeAttr("data-swiper-slide-index")
                        }
                        ,
                        g.fixLoop = function() {
                            var e;
                            g.activeIndex < g.loopedSlides ? (e = g.slides.length - 3 * g.loopedSlides + g.activeIndex,
                                e += g.loopedSlides,
                                g.slideTo(e, 0, !1, !0)) : ("auto" === g.params.slidesPerView && g.activeIndex >= 2 * g.loopedSlides || g.activeIndex > g.slides.length - 2 * g.params.slidesPerView) && (e = -g.slides.length + g.activeIndex + g.loopedSlides,
                                e += g.loopedSlides,
                                g.slideTo(e, 0, !1, !0))
                        }
                        ,
                        g.appendSlide = function(e) {
                            if (g.params.loop && g.destroyLoop(),
                                "object" == typeof e && e.length)
                                for (var t = 0; t < e.length; t++)
                                    e[t] && g.wrapper.append(e[t]);
                            else
                                g.wrapper.append(e);
                            g.params.loop && g.createLoop(),
                            g.params.observer && g.support.observer || g.update(!0)
                        }
                        ,
                        g.prependSlide = function(e) {
                            g.params.loop && g.destroyLoop();
                            var t = g.activeIndex + 1;
                            if ("object" == typeof e && e.length) {
                                for (var n = 0; n < e.length; n++)
                                    e[n] && g.wrapper.prepend(e[n]);
                                t = g.activeIndex + e.length
                            } else
                                g.wrapper.prepend(e);
                            g.params.loop && g.createLoop(),
                            g.params.observer && g.support.observer || g.update(!0),
                                g.slideTo(t, 0, !1)
                        }
                        ,
                        g.removeSlide = function(e) {
                            g.params.loop && (g.destroyLoop(),
                                g.slides = g.wrapper.children("." + g.params.slideClass));
                            var t, n = g.activeIndex;
                            if ("object" == typeof e && e.length) {
                                for (var i = 0; i < e.length; i++)
                                    t = e[i],
                                    g.slides[t] && g.slides.eq(t).remove(),
                                    n > t && n--;
                                n = Math.max(n, 0)
                            } else
                                t = e,
                                g.slides[t] && g.slides.eq(t).remove(),
                                n > t && n--,
                                    n = Math.max(n, 0);
                            g.params.loop && g.createLoop(),
                            g.params.observer && g.support.observer || g.update(!0),
                                g.params.loop ? g.slideTo(n + g.loopedSlides, 0, !1) : g.slideTo(n, 0, !1)
                        }
                        ,
                        g.removeAllSlides = function() {
                            for (var e = [], t = 0; t < g.slides.length; t++)
                                e.push(t);
                            g.removeSlide(e)
                        }
                        ,
                        g.effects = {
                            fade: {
                                setTranslate: function() {
                                    for (var e = 0; e < g.slides.length; e++) {
                                        var t = g.slides.eq(e)
                                            , n = t[0].swiperSlideOffset
                                            , i = -n;
                                        g.params.virtualTranslate || (i -= g.translate);
                                        var a = 0;
                                        r() || (a = i,
                                            i = 0);
                                        var s = g.params.fade.crossFade ? Math.max(1 - Math.abs(t[0].progress), 0) : 1 + Math.min(Math.max(t[0].progress, -1), 0);
                                        t.css({
                                            opacity: s
                                        }).transform("translate3d(" + i + "px, " + a + "px, 0px)")
                                    }
                                },
                                setTransition: function(e) {
                                    if (g.slides.transition(e),
                                        g.params.virtualTranslate && 0 !== e) {
                                        var t = !1;
                                        g.slides.transitionEnd(function() {
                                            if (!t && g) {
                                                t = !0,
                                                    g.animating = !1;
                                                for (var e = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], n = 0; n < e.length; n++)
                                                    g.wrapper.trigger(e[n])
                                            }
                                        })
                                    }
                                }
                            },
                            cube: {
                                setTranslate: function() {
                                    var e, n = 0;
                                    g.params.cube.shadow && (r() ? (e = g.wrapper.find(".swiper-cube-shadow"),
                                    0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'),
                                        g.wrapper.append(e)),
                                        e.css({
                                            height: g.width + "px"
                                        })) : (e = g.container.find(".swiper-cube-shadow"),
                                    0 === e.length && (e = t('<div class="swiper-cube-shadow"></div>'),
                                        g.container.append(e))));
                                    for (var i = 0; i < g.slides.length; i++) {
                                        var a = g.slides.eq(i)
                                            , s = 90 * i
                                            , o = Math.floor(s / 360);
                                        g.rtl && (s = -s,
                                            o = Math.floor(-s / 360));
                                        var l = Math.max(Math.min(a[0].progress, 1), -1)
                                            , c = 0
                                            , d = 0
                                            , u = 0;
                                        i % 4 === 0 ? (c = 4 * -o * g.size,
                                            u = 0) : (i - 1) % 4 === 0 ? (c = 0,
                                            u = 4 * -o * g.size) : (i - 2) % 4 === 0 ? (c = g.size + 4 * o * g.size,
                                            u = g.size) : (i - 3) % 4 === 0 && (c = -g.size,
                                            u = 3 * g.size + 4 * g.size * o),
                                        g.rtl && (c = -c),
                                        r() || (d = c,
                                            c = 0);
                                        var p = "rotateX(" + (r() ? 0 : -s) + "deg) rotateY(" + (r() ? s : 0) + "deg) translate3d(" + c + "px, " + d + "px, " + u + "px)";
                                        if (1 >= l && l > -1 && (n = 90 * i + 90 * l,
                                            g.rtl && (n = 90 * -i - 90 * l)),
                                                a.transform(p),
                                                g.params.cube.slideShadows) {
                                            var h = a.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top")
                                                , f = a.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                            0 === h.length && (h = t('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'),
                                                a.append(h)),
                                            0 === f.length && (f = t('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'),
                                                a.append(f)),
                                                a[0].progress,
                                            h.length && (h[0].style.opacity = -a[0].progress),
                                            f.length && (f[0].style.opacity = a[0].progress)
                                        }
                                    }
                                    if (g.wrapper.css({
                                            "-webkit-transform-origin": "50% 50% -" + g.size / 2 + "px",
                                            "-moz-transform-origin": "50% 50% -" + g.size / 2 + "px",
                                            "-ms-transform-origin": "50% 50% -" + g.size / 2 + "px",
                                            "transform-origin": "50% 50% -" + g.size / 2 + "px"
                                        }),
                                            g.params.cube.shadow)
                                        if (r())
                                            e.transform("translate3d(0px, " + (g.width / 2 + g.params.cube.shadowOffset) + "px, " + -g.width / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + g.params.cube.shadowScale + ")");
                                        else {
                                            var m = Math.abs(n) - 90 * Math.floor(Math.abs(n) / 90)
                                                , v = 1.5 - (Math.sin(2 * m * Math.PI / 360) / 2 + Math.cos(2 * m * Math.PI / 360) / 2)
                                                , y = g.params.cube.shadowScale
                                                , w = g.params.cube.shadowScale / v
                                                , b = g.params.cube.shadowOffset;
                                            e.transform("scale3d(" + y + ", 1, " + w + ") translate3d(0px, " + (g.height / 2 + b) + "px, " + -g.height / 2 / w + "px) rotateX(-90deg)")
                                        }
                                    var _ = g.isSafari || g.isUiWebView ? -g.size / 2 : 0;
                                    g.wrapper.transform("translate3d(0px,0," + _ + "px) rotateX(" + (r() ? 0 : n) + "deg) rotateY(" + (r() ? -n : 0) + "deg)")
                                },
                                setTransition: function(e) {
                                    g.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e),
                                    g.params.cube.shadow && !r() && g.container.find(".swiper-cube-shadow").transition(e)
                                }
                            },
                            coverflow: {
                                setTranslate: function() {
                                    for (var e = g.translate, n = r() ? -e + g.width / 2 : -e + g.height / 2, i = r() ? g.params.coverflow.rotate : -g.params.coverflow.rotate, a = g.params.coverflow.depth, s = 0, o = g.slides.length; o > s; s++) {
                                        var l = g.slides.eq(s)
                                            , c = g.slidesSizesGrid[s]
                                            , d = l[0].swiperSlideOffset
                                            , u = (n - d - c / 2) / c * g.params.coverflow.modifier
                                            , p = r() ? i * u : 0
                                            , h = r() ? 0 : i * u
                                            , f = -a * Math.abs(u)
                                            , m = r() ? 0 : g.params.coverflow.stretch * u
                                            , v = r() ? g.params.coverflow.stretch * u : 0;
                                        Math.abs(v) < .001 && (v = 0),
                                        Math.abs(m) < .001 && (m = 0),
                                        Math.abs(f) < .001 && (f = 0),
                                        Math.abs(p) < .001 && (p = 0),
                                        Math.abs(h) < .001 && (h = 0);
                                        var y = "translate3d(" + v + "px," + m + "px," + f + "px)  rotateX(" + h + "deg) rotateY(" + p + "deg)";
                                        if (l.transform(y),
                                                l[0].style.zIndex = -Math.abs(Math.round(u)) + 1,
                                                g.params.coverflow.slideShadows) {
                                            var w = l.find(r() ? ".swiper-slide-shadow-left" : ".swiper-slide-shadow-top")
                                                , b = l.find(r() ? ".swiper-slide-shadow-right" : ".swiper-slide-shadow-bottom");
                                            0 === w.length && (w = t('<div class="swiper-slide-shadow-' + (r() ? "left" : "top") + '"></div>'),
                                                l.append(w)),
                                            0 === b.length && (b = t('<div class="swiper-slide-shadow-' + (r() ? "right" : "bottom") + '"></div>'),
                                                l.append(b)),
                                            w.length && (w[0].style.opacity = u > 0 ? u : 0),
                                            b.length && (b[0].style.opacity = -u > 0 ? -u : 0)
                                        }
                                    }
                                    if (g.browser.ie) {
                                        var _ = g.wrapper[0].style;
                                        _.perspectiveOrigin = n + "px 50%"
                                    }
                                },
                                setTransition: function(e) {
                                    g.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                                }
                            }
                        },
                        g.lazy = {
                            initialImageLoaded: !1,
                            loadImageInSlide: function(e, n) {
                                if ("undefined" != typeof e && ("undefined" == typeof n && (n = !0),
                                    0 !== g.slides.length)) {
                                    var i = g.slides.eq(e)
                                        , r = i.find(".swiper-lazy:not(.swiper-lazy-loaded):not(.swiper-lazy-loading)");
                                    !i.hasClass("swiper-lazy") || i.hasClass("swiper-lazy-loaded") || i.hasClass("swiper-lazy-loading") || r.add(i[0]),
                                    0 !== r.length && r.each(function() {
                                        var e = t(this);
                                        e.addClass("swiper-lazy-loading");
                                        var r = e.attr("data-background")
                                            , a = e.attr("data-src");
                                        g.loadImage(e[0], a || r, !1, function() {
                                            if (r ? (e.css("background-image", "url(" + r + ")"),
                                                    e.removeAttr("data-background")) : (e.attr("src", a),
                                                    e.removeAttr("data-src")),
                                                    e.addClass("swiper-lazy-loaded").removeClass("swiper-lazy-loading"),
                                                    i.find(".swiper-lazy-preloader, .preloader").remove(),
                                                g.params.loop && n) {
                                                var t = i.attr("data-swiper-slide-index");
                                                if (i.hasClass(g.params.slideDuplicateClass)) {
                                                    var s = g.wrapper.children('[data-swiper-slide-index="' + t + '"]:not(.' + g.params.slideDuplicateClass + ")");
                                                    g.lazy.loadImageInSlide(s.index(), !1)
                                                } else {
                                                    var o = g.wrapper.children("." + g.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]');
                                                    g.lazy.loadImageInSlide(o.index(), !1)
                                                }
                                            }
                                            g.emit("onLazyImageReady", g, i[0], e[0])
                                        }),
                                            g.emit("onLazyImageLoad", g, i[0], e[0])
                                    })
                                }
                            },
                            load: function() {
                                var e;
                                if (g.params.watchSlidesVisibility)
                                    g.wrapper.children("." + g.params.slideVisibleClass).each(function() {
                                        g.lazy.loadImageInSlide(t(this).index())
                                    });
                                else if (g.params.slidesPerView > 1)
                                    for (e = g.activeIndex; e < g.activeIndex + g.params.slidesPerView; e++)
                                        g.slides[e] && g.lazy.loadImageInSlide(e);
                                else
                                    g.lazy.loadImageInSlide(g.activeIndex);
                                if (g.params.lazyLoadingInPrevNext)
                                    if (g.params.slidesPerView > 1) {
                                        for (e = g.activeIndex + g.params.slidesPerView; e < g.activeIndex + g.params.slidesPerView + g.params.slidesPerView; e++)
                                            g.slides[e] && g.lazy.loadImageInSlide(e);
                                        for (e = g.activeIndex - g.params.slidesPerView; e < g.activeIndex; e++)
                                            g.slides[e] && g.lazy.loadImageInSlide(e)
                                    } else {
                                        var n = g.wrapper.children("." + g.params.slideNextClass);
                                        n.length > 0 && g.lazy.loadImageInSlide(n.index());
                                        var i = g.wrapper.children("." + g.params.slidePrevClass);
                                        i.length > 0 && g.lazy.loadImageInSlide(i.index())
                                    }
                            },
                            onTransitionStart: function() {
                                g.params.lazyLoading && (g.params.lazyLoadingOnTransitionStart || !g.params.lazyLoadingOnTransitionStart && !g.lazy.initialImageLoaded) && g.lazy.load()
                            },
                            onTransitionEnd: function() {
                                g.params.lazyLoading && !g.params.lazyLoadingOnTransitionStart && g.lazy.load()
                            }
                        },
                        g.scrollbar = {
                            set: function() {
                                if (g.params.scrollbar) {
                                    var e = g.scrollbar;
                                    e.track = t(g.params.scrollbar),
                                        e.drag = e.track.find(".swiper-scrollbar-drag"),
                                    0 === e.drag.length && (e.drag = t('<div class="swiper-scrollbar-drag"></div>'),
                                        e.track.append(e.drag)),
                                        e.drag[0].style.width = "",
                                        e.drag[0].style.height = "",
                                        e.trackSize = r() ? e.track[0].offsetWidth : e.track[0].offsetHeight,
                                        e.divider = g.size / g.virtualSize,
                                        e.moveDivider = e.divider * (e.trackSize / g.size),
                                        e.dragSize = e.trackSize * e.divider,
                                        r() ? e.drag[0].style.width = e.dragSize + "px" : e.drag[0].style.height = e.dragSize + "px",
                                        e.track[0].style.display = e.divider >= 1 ? "none" : "",
                                    g.params.scrollbarHide && (e.track[0].style.opacity = 0)
                                }
                            },
                            setTranslate: function() {
                                if (g.params.scrollbar) {
                                    var e, t = g.scrollbar, n = (g.translate || 0,
                                        t.dragSize);
                                    e = (t.trackSize - t.dragSize) * g.progress,
                                        g.rtl && r() ? (e = -e,
                                            e > 0 ? (n = t.dragSize - e,
                                                e = 0) : -e + t.dragSize > t.trackSize && (n = t.trackSize + e)) : 0 > e ? (n = t.dragSize + e,
                                            e = 0) : e + t.dragSize > t.trackSize && (n = t.trackSize - e),
                                        r() ? (t.drag.transform(g.support.transforms3d ? "translate3d(" + e + "px, 0, 0)" : "translateX(" + e + "px)"),
                                            t.drag[0].style.width = n + "px") : (t.drag.transform(g.support.transforms3d ? "translate3d(0px, " + e + "px, 0)" : "translateY(" + e + "px)"),
                                            t.drag[0].style.height = n + "px"),
                                    g.params.scrollbarHide && (clearTimeout(t.timeout),
                                        t.track[0].style.opacity = 1,
                                        t.timeout = setTimeout(function() {
                                            t.track[0].style.opacity = 0,
                                                t.track.transition(400)
                                        }, 1e3))
                                }
                            },
                            setTransition: function(e) {
                                g.params.scrollbar && g.scrollbar.drag.transition(e)
                            }
                        },
                        g.controller = {
                            LinearSpline: function(e, t) {
                                this.x = e,
                                    this.y = t,
                                    this.lastIndex = e.length - 1;
                                var n, i;
                                this.x.length,
                                    this.interpolate = function(e) {
                                        return e ? (i = r(this.x, e),
                                            n = i - 1,
                                        (e - this.x[n]) * (this.y[i] - this.y[n]) / (this.x[i] - this.x[n]) + this.y[n]) : 0
                                    }
                                ;
                                var r = function() {
                                    var e, t, n;
                                    return function(i, r) {
                                        for (t = -1,
                                                 e = i.length; e - t > 1; )
                                            i[n = e + t >> 1] <= r ? t = n : e = n;
                                        return e
                                    }
                                }()
                            },
                            getInterpolateFunction: function(e) {
                                g.controller.spline || (g.controller.spline = g.params.loop ? new g.controller.LinearSpline(g.slidesGrid,e.slidesGrid) : new g.controller.LinearSpline(g.snapGrid,e.snapGrid))
                            },
                            setTranslate: function(e, t) {
                                function i(t) {
                                    e = t.rtl && "horizontal" === t.params.direction ? -g.translate : g.translate,
                                    "slide" === g.params.controlBy && (g.controller.getInterpolateFunction(t),
                                        a = -g.controller.spline.interpolate(-e)),
                                    a && "container" !== g.params.controlBy || (r = (t.maxTranslate() - t.minTranslate()) / (g.maxTranslate() - g.minTranslate()),
                                        a = (e - g.minTranslate()) * r + t.minTranslate()),
                                    g.params.controlInverse && (a = t.maxTranslate() - a),
                                        t.updateProgress(a),
                                        t.setWrapperTranslate(a, !1, g),
                                        t.updateActiveIndex()
                                }
                                var r, a, s = g.params.control;
                                if (g.isArray(s))
                                    for (var o = 0; o < s.length; o++)
                                        s[o] !== t && s[o]instanceof n && i(s[o]);
                                else
                                    s instanceof n && t !== s && i(s)
                            },
                            setTransition: function(e, t) {
                                function i(t) {
                                    t.setWrapperTransition(e, g),
                                    0 !== e && (t.onTransitionStart(),
                                        t.wrapper.transitionEnd(function() {
                                            a && (t.params.loop && "slide" === g.params.controlBy && t.fixLoop(),
                                                t.onTransitionEnd())
                                        }))
                                }
                                var r, a = g.params.control;
                                if (g.isArray(a))
                                    for (r = 0; r < a.length; r++)
                                        a[r] !== t && a[r]instanceof n && i(a[r]);
                                else
                                    a instanceof n && t !== a && i(a)
                            }
                        },
                        g.hashnav = {
                            init: function() {
                                if (g.params.hashnav) {
                                    g.hashnav.initialized = !0;
                                    var e = document.location.hash.replace("#", "");
                                    if (e)
                                        for (var t = 0, n = 0, i = g.slides.length; i > n; n++) {
                                            var r = g.slides.eq(n)
                                                , a = r.attr("data-hash");
                                            if (a === e && !r.hasClass(g.params.slideDuplicateClass)) {
                                                var s = r.index();
                                                g.slideTo(s, t, g.params.runCallbacksOnInit, !0)
                                            }
                                        }
                                }
                            },
                            setHash: function() {
                                g.hashnav.initialized && g.params.hashnav && (document.location.hash = g.slides.eq(g.activeIndex).attr("data-hash") || "")
                            }
                        },
                        g.disableKeyboardControl = function() {
                            t(document).off("keydown", c)
                        }
                        ,
                        g.enableKeyboardControl = function() {
                            t(document).on("keydown", c)
                        }
                        ,
                        g.mousewheel = {
                            event: !1,
                            lastScrollTime: (new window.Date).getTime()
                        },
                        g.params.mousewheelControl) {
                    try {
                        new window.WheelEvent("wheel"),
                            g.mousewheel.event = "wheel"
                    } catch (P) {}
                    g.mousewheel.event || void 0 === document.onmousewheel || (g.mousewheel.event = "mousewheel"),
                    g.mousewheel.event || (g.mousewheel.event = "DOMMouseScroll")
                }
                g.disableMousewheelControl = function() {
                    return g.mousewheel.event ? (g.container.off(g.mousewheel.event, d),
                        !0) : !1
                }
                    ,
                    g.enableMousewheelControl = function() {
                        return g.mousewheel.event ? (g.container.on(g.mousewheel.event, d),
                            !0) : !1
                    }
                    ,
                    g.parallax = {
                        setTranslate: function() {
                            g.container.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                u(this, g.progress)
                            }),
                                g.slides.each(function() {
                                    var e = t(this);
                                    e.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                        var t = Math.min(Math.max(e[0].progress, -1), 1);
                                        u(this, t)
                                    })
                                })
                        },
                        setTransition: function(e) {
                            "undefined" == typeof e && (e = g.params.speed),
                                g.container.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function() {
                                    var n = t(this)
                                        , i = parseInt(n.attr("data-swiper-parallax-duration"), 10) || e;
                                    0 === e && (i = 0),
                                        n.transition(i)
                                })
                        }
                    },
                    g._plugins = [];
                for (var I in g.plugins) {
                    var D = g.plugins[I](g, g.params[I]);
                    D && g._plugins.push(D)
                }
                return g.callPlugins = function(e) {
                    for (var t = 0; t < g._plugins.length; t++)
                        e in g._plugins[t] && g._plugins[t][e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                }
                    ,
                    g.emitterEventListeners = {},
                    g.emit = function(e) {
                        g.params[e] && g.params[e](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        var t;
                        if (g.emitterEventListeners[e])
                            for (t = 0; t < g.emitterEventListeners[e].length; t++)
                                g.emitterEventListeners[e][t](arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]);
                        g.callPlugins && g.callPlugins(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5])
                    }
                    ,
                    g.on = function(e, t) {
                        return e = p(e),
                        g.emitterEventListeners[e] || (g.emitterEventListeners[e] = []),
                            g.emitterEventListeners[e].push(t),
                            g
                    }
                    ,
                    g.off = function(e, t) {
                        var n;
                        if (e = p(e),
                            "undefined" == typeof t)
                            return g.emitterEventListeners[e] = [],
                                g;
                        if (g.emitterEventListeners[e] && 0 !== g.emitterEventListeners[e].length) {
                            for (n = 0; n < g.emitterEventListeners[e].length; n++)
                                g.emitterEventListeners[e][n] === t && g.emitterEventListeners[e].splice(n, 1);
                            return g
                        }
                    }
                    ,
                    g.once = function(e, t) {
                        e = p(e);
                        var n = function() {
                            t(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4]),
                                g.off(e, n)
                        };
                        return g.on(e, n),
                            g
                    }
                    ,
                    g.a11y = {
                        makeFocusable: function(e) {
                            return e.attr("tabIndex", "0"),
                                e
                        },
                        addRole: function(e, t) {
                            return e.attr("role", t),
                                e
                        },
                        addLabel: function(e, t) {
                            return e.attr("aria-label", t),
                                e
                        },
                        disable: function(e) {
                            return e.attr("aria-disabled", !0),
                                e
                        },
                        enable: function(e) {
                            return e.attr("aria-disabled", !1),
                                e
                        },
                        onEnterKey: function(e) {
                            13 === e.keyCode && (t(e.target).is(g.params.nextButton) ? (g.onClickNext(e),
                                g.a11y.notify(g.isEnd ? g.params.lastSlideMessage : g.params.nextSlideMessage)) : t(e.target).is(g.params.prevButton) && (g.onClickPrev(e),
                                g.a11y.notify(g.isBeginning ? g.params.firstSlideMessage : g.params.prevSlideMessage)),
                            t(e.target).is("." + g.params.bulletClass) && t(e.target)[0].click())
                        },
                        liveRegion: t('<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>'),
                        notify: function(e) {
                            var t = g.a11y.liveRegion;
                            0 !== t.length && (t.html(""),
                                t.html(e))
                        },
                        init: function() {
                            if (g.params.nextButton) {
                                var e = t(g.params.nextButton);
                                g.a11y.makeFocusable(e),
                                    g.a11y.addRole(e, "button"),
                                    g.a11y.addLabel(e, g.params.nextSlideMessage)
                            }
                            if (g.params.prevButton) {
                                var n = t(g.params.prevButton);
                                g.a11y.makeFocusable(n),
                                    g.a11y.addRole(n, "button"),
                                    g.a11y.addLabel(n, g.params.prevSlideMessage)
                            }
                            t(g.container).append(g.a11y.liveRegion)
                        },
                        initPagination: function() {
                            g.params.pagination && g.params.paginationClickable && g.bullets && g.bullets.length && g.bullets.each(function() {
                                var e = t(this);
                                g.a11y.makeFocusable(e),
                                    g.a11y.addRole(e, "button"),
                                    g.a11y.addLabel(e, g.params.paginationBulletMessage.replace(/{{index}}/, e.index() + 1))
                            })
                        },
                        destroy: function() {
                            g.a11y.liveRegion && g.a11y.liveRegion.length > 0 && g.a11y.liveRegion.remove()
                        }
                    },
                    g.init = function() {
                        g.params.loop && g.createLoop(),
                            g.updateContainerSize(),
                            g.updateSlidesSize(),
                            g.updatePagination(),
                        g.params.scrollbar && g.scrollbar && g.scrollbar.set(),
                        "slide" !== g.params.effect && g.effects[g.params.effect] && (g.params.loop || g.updateProgress(),
                            g.effects[g.params.effect].setTranslate()),
                            g.params.loop ? g.slideTo(g.params.initialSlide + g.loopedSlides, 0, g.params.runCallbacksOnInit) : (g.slideTo(g.params.initialSlide, 0, g.params.runCallbacksOnInit),
                            0 === g.params.initialSlide && (g.parallax && g.params.parallax && g.parallax.setTranslate(),
                            g.lazy && g.params.lazyLoading && (g.lazy.load(),
                                g.lazy.initialImageLoaded = !0))),
                            g.attachEvents(),
                        g.params.observer && g.support.observer && g.initObservers(),
                        g.params.preloadImages && !g.params.lazyLoading && g.preloadImages(),
                        g.params.autoplay && g.startAutoplay(),
                        g.params.keyboardControl && g.enableKeyboardControl && g.enableKeyboardControl(),
                        g.params.mousewheelControl && g.enableMousewheelControl && g.enableMousewheelControl(),
                        g.params.hashnav && g.hashnav && g.hashnav.init(),
                        g.params.a11y && g.a11y && g.a11y.init(),
                            g.emit("onInit", g)
                    }
                    ,
                    g.cleanupStyles = function() {
                        g.container.removeClass(g.classNames.join(" ")).removeAttr("style"),
                            g.wrapper.removeAttr("style"),
                        g.slides && g.slides.length && g.slides.removeClass([g.params.slideVisibleClass, g.params.slideActiveClass, g.params.slideNextClass, g.params.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-column").removeAttr("data-swiper-row"),
                        g.paginationContainer && g.paginationContainer.length && g.paginationContainer.removeClass(g.params.paginationHiddenClass),
                        g.bullets && g.bullets.length && g.bullets.removeClass(g.params.bulletActiveClass),
                        g.params.prevButton && t(g.params.prevButton).removeClass(g.params.buttonDisabledClass),
                        g.params.nextButton && t(g.params.nextButton).removeClass(g.params.buttonDisabledClass),
                        g.params.scrollbar && g.scrollbar && (g.scrollbar.track && g.scrollbar.track.length && g.scrollbar.track.removeAttr("style"),
                        g.scrollbar.drag && g.scrollbar.drag.length && g.scrollbar.drag.removeAttr("style"))
                    }
                    ,
                    g.destroy = function(e, t) {
                        g.detachEvents(),
                            g.stopAutoplay(),
                        g.params.loop && g.destroyLoop(),
                        t && g.cleanupStyles(),
                            g.disconnectObservers(),
                        g.params.keyboardControl && g.disableKeyboardControl && g.disableKeyboardControl(),
                        g.params.mousewheelControl && g.disableMousewheelControl && g.disableMousewheelControl(),
                        g.params.a11y && g.a11y && g.a11y.destroy(),
                            g.emit("onDestroy"),
                        e !== !1 && (g = null )
                    }
                    ,
                    g.init(),
                    g
            }
        };
        n.prototype = {
            isSafari: function() {
                var e = navigator.userAgent.toLowerCase();
                return e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0
            }(),
            isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
            isArray: function(e) {
                return "[object Array]" === Object.prototype.toString.apply(e)
            },
            browser: {
                ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
                ieTouch: window.navigator.msPointerEnabled && window.navigator.msMaxTouchPoints > 1 || window.navigator.pointerEnabled && window.navigator.maxTouchPoints > 1
            },
            device: function() {
                var e = navigator.userAgent
                    , t = e.match(/(Android);?[\s\/]+([\d.]+)?/)
                    , n = e.match(/(iPad).*OS\s([\d_]+)/)
                    , i = e.match(/(iPod)(.*OS\s([\d_]+))?/)
                    , r = !n && e.match(/(iPhone\sOS)\s([\d_]+)/);
                return {
                    ios: n || r || i,
                    android: t
                }
            }(),
            support: {
                touch: window.Modernizr && Modernizr.touch === !0 || function() {
                    return !!("ontouchstart"in window || window.DocumentTouch && document instanceof DocumentTouch)
                }(),
                transforms3d: window.Modernizr && Modernizr.csstransforms3d === !0 || function() {
                    var e = document.createElement("div").style;
                    return "webkitPerspective"in e || "MozPerspective"in e || "OPerspective"in e || "MsPerspective"in e || "perspective"in e
                }(),
                flexbox: function() {
                    for (var e = document.createElement("div").style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), n = 0; n < t.length; n++)
                        if (t[n]in e)
                            return !0
                }(),
                observer: function() {
                    return "MutationObserver"in window || "WebkitMutationObserver"in window
                }()
            },
            plugins: {}
        };
        for (var i = ["jQuery", "Zepto", "Dom7"], r = 0; r < i.length; r++)
            window[i[r]] && e(window[i[r]]);
        var a;
        a = "undefined" == typeof Dom7 ? window.Dom7 || window.Zepto || window.jQuery : Dom7,
        a && ("transitionEnd"in a.fn || (a.fn.transitionEnd = function(e) {
                function t(a) {
                    if (a.target === this)
                        for (e.call(this, a),
                                 n = 0; n < i.length; n++)
                            r.off(i[n], t)
                }
                var n, i = ["webkitTransitionEnd", "transitionend", "oTransitionEnd", "MSTransitionEnd", "msTransitionEnd"], r = this;
                if (e)
                    for (n = 0; n < i.length; n++)
                        r.on(i[n], t);
                return this
            }
        ),
        "transform"in a.fn || (a.fn.transform = function(e) {
                for (var t = 0; t < this.length; t++) {
                    var n = this[t].style;
                    n.webkitTransform = n.MsTransform = n.msTransform = n.MozTransform = n.OTransform = n.transform = e
                }
                return this
            }
        ),
        "transition"in a.fn || (a.fn.transition = function(e) {
                "string" != typeof e && (e += "ms");
                for (var t = 0; t < this.length; t++) {
                    var n = this[t].style;
                    n.webkitTransitionDuration = n.MsTransitionDuration = n.msTransitionDuration = n.MozTransitionDuration = n.OTransitionDuration = n.transitionDuration = e
                }
                return this
            }
        )),
            window.Swiper = n
    }(),
    "undefined" != typeof module ? module.exports = window.Swiper : "function" == typeof define && define.amd && define([], function() {
        "use strict";
        return window.Swiper
    }),
    function(e, t) {
        window.touchSlider = function(n) {
            function i(e) {
                _.removeClass(n.currentClass).eq(e).addClass(n.currentClass)
            }
            function r(e, n) {
                var i = h.current;
                i !== e && (e = e !== t ? e : i + 1,
                    C.to(e, {
                        complete: n
                    }))
            }
            function a(e) {
                C.to(h.current + 1, {
                    dirX: 1,
                    complete: e
                })
            }
            function s(e) {
                C.to(h.current - 1, {
                    dirX: -1,
                    complete: e
                })
            }
            function o() {
                E && l()
            }
            function l() {
                return E = !0,
                A || (clearTimeout(k),
                    k = setTimeout(function() {
                        !C.moving && !A && a()
                    }, n.delay)),
                    n.container
            }
            function c() {
                return clearTimeout(k),
                    E = !1,
                    n.container
            }
            function d() {
                var t, n, i, r, a, s, o, l, c, d, p, h, b, _ = e(document), x = !1, T = function(e) {
                    return e.which > 1 ? void 0 : (x && _.triggerHandler(g + "." + u),
                        x = !0,
                        n = !1,
                        t = e.timeStamp,
                        o = h = 0,
                        i = [0, 0, 0, t],
                        e.originalEvent.touches ? void _.one(m, k) : (e.preventDefault(),
                            a = s = e.pageX,
                            d = p = e.pageY,
                            c = w[0].offsetLeft,
                            r = [0, 0, 0, a],
                            _.bind(v, A),
                            _.one(g + "." + u, E),
                            C.moveStart(e),
                            void 0))
                }, k = function(e) {
                    1 === e.originalEvent.touches.length && (a = s = e.pageX = e.originalEvent.touches[0].pageX,
                        d = p = e.pageY = e.originalEvent.touches[0].pageY,
                        l = b = 0,
                        c = new WebKitCSSMatrix(window.getComputedStyle(w[0]).webkitTransform).e,
                        r = [0, 0, 0, a],
                        _.bind(v, A),
                        _.one(g, E),
                        C.moveStart(e))
                }, A = function(t) {
                    var a, c;
                    if (t.originalEvent.touches && f) {
                        if (1 !== t.originalEvent.touches.length)
                            return;
                        if (a = t.pageX = t.originalEvent.touches[0].pageX,
                                c = t.pageY = t.originalEvent.touches[0].pageY,
                                l += Math.abs(a - s),
                                b += Math.abs(c - p),
                            Math.abs(l - b) > 50) {
                            var d = l;
                            l = Math.min(100, Math.max(0, l - b)),
                                b = Math.min(100, Math.max(0, b - d))
                        }
                        if (a === s)
                            return;
                        n || (l > b ? (t.preventDefault(),
                            n = !0) : E(t))
                    } else {
                        if (a = t.pageX,
                                c = t.pageY,
                            a === s)
                            return;
                        e.browser.msie && t.preventDefault()
                    }
                    o += Math.abs(a - s),
                        h += Math.abs(c - p),
                        i.shift(),
                        i.push(t.timeStamp),
                        r.shift(),
                        r.push(a),
                        C.move(t, s),
                        s = a,
                        p = c
                }, E = function(e) {
                    x = !1,
                    e.originalEvent && !e.originalEvent.touches || (e.pageX = s,
                        e.pageY = p),
                        _.unbind(v, A);
                    for (var n = i.length, a = 0, l = 0; --n > 0; )
                        if (i[n - 1]) {
                            var c = r[n] - r[n - 1];
                            a += Math.abs(c) / (i[n] - i[n - 1]),
                            0 !== c && (l = c > 0 ? -1 : 1)
                        }
                    a /= i.length,
                        C.moveEnd(e, a, l, t, o, h),
                        S = !1,
                    o + h > 4 && y.one("click", function(e) {
                        e.preventDefault()
                    })
                };
                y.bind(m, T)
            }
            n = n || {};
            var u = n.namespace || "touchslider"
                , p = e(n.container);
            if (1 !== p.length)
                return void p.each(function() {
                    touchSlider({
                        container: this
                    })
                });
            n = e.extend({
                autoplay: !1,
                delay: 3e3,
                margin: 5,
                viewport: "." + u + "-viewport",
                prev: "." + u + "-prev",
                next: "." + u + "-next",
                pagination: "." + u + "-nav-item",
                currentClass: u + "-nav-item-current",
                duration: 350,
                mouseTouch: !0
            }, n);
            var h = {
                current: 0,
                step: r,
                next: a,
                prev: s,
                start: l,
                stop: c
            }
                , f = "ontouchstart"in window && "WebKitCSSMatrix"in window
                , m = "touchstart"
                , v = "touchmove"
                , g = "touchend"
                , y = e(n.viewport, p)
                , w = n.scroller ? e(n.scroller, p) : y.children()
                , b = w.children()
                , _ = e(n.pagination, p);
            if ("absolute" !== w.css("position")) {
                var x = y.height();
                y.css({
                    height: x,
                    position: "relative"
                }),
                    w.css({
                        position: "absolute",
                        left: 0,
                        height: x,
                        width: 1e5
                    })
            }
            f || (m = "mousedown",
                v = "mousemove",
                g = "mouseup"),
                b.css("position", "absolute");
            var T = f ? function(e, n, i) {
                    return n === t ? new WebKitCSSMatrix(getComputedStyle(e.jquery ? e[0] : e).webkitTransform).e : void e.css({
                        webkitTransitionDuration: i ? i + "ms" : "0",
                        webkitTransform: function(e) {
                            return "translate3d(" + ("number" == typeof n ? n : n.call(this, e)) + "px,0,0)"
                        }
                    })
                }
                    : function(e, n) {
                    return n === t ? parseInt((e.jquery ? e[0] : e).style.left, 10) : void e.css("left", n)
                }
                ;
            f && b.css({
                webkitTransitionProperty: "-webkit-transform",
                webkitTransitionTimingFunction: "cubic-bezier(0,0,0.25,1)"
            }),
                T(b.not(b[0]), 1e4),
                T(b.eq(0), 0);
            var C = function() {
                var r = [0]
                    , a = [0]
                    , s = e.noop;
                return {
                    moving: !1,
                    init: function() {
                        w.bind("webkitTransitionEnd", function() {
                            s()
                        })
                    },
                    to: function(l, c) {
                        c = c || {},
                            l >= b.length ? l = 0 : 0 > l && (l = b.length - 1);
                        var d = n.duration
                            , u = b.eq(l)
                            , p = e.inArray(l, r)
                            , m = 0;
                        if (w.stop(),
                                C.moving = !0,
                                clearTimeout(k),
                            -1 !== p)
                            m = a[p];
                        else {
                            var v, g = b.index(u);
                            if (p = t,
                                -1 === c.dirX)
                                a.unshift(0),
                                    r.unshift(g);
                            else if (1 === c.dirX)
                                a.push(0),
                                    r.push(g);
                            else {
                                for (v = r.length - 1; v >= 0; v--)
                                    if (r[v] < g) {
                                        a.splice(v + 1, 0, 0),
                                            r.splice(v + 1, 0, g),
                                            p = 0;
                                        break
                                    }
                                p === t && (a.unshift(a),
                                    r.unshift(g))
                            }
                            if (p = e.inArray(g, r),
                                0 === p)
                                m = a[1] - (u.outerWidth() + n.margin),
                                    T(u, m),
                                    a[p] = m;
                            else if (p === r.length - 1)
                                m = a[p - 1] + b.eq(r[p - 1]).outerWidth() + n.margin,
                                    T(u, m),
                                    a[p] = m;
                            else {
                                var y = u.outerWidth();
                                u.css("opacity", 0),
                                    m = a[p + 1] - Math.round((y + n.margin) / 2),
                                    a[p] = m,
                                    T(u, m);
                                var _ = m
                                    , x = r.length;
                                for (v = p - 1; v >= 0; v--)
                                    _ -= b.eq(r[v]).outerWidth() + n.margin,
                                        a[v] = _;
                                var S = m;
                                for (v = p + 1; x > v; v++)
                                    S += b.eq(r[v]).outerWidth() + n.margin,
                                        a[v] = S;
                                for (v = 0; x > v; v++)
                                    b.eq(r[v]).animate({
                                        left: a[v]
                                    }, {
                                        duration: d,
                                        queue: !1,
                                        complete: function() {
                                            u.is(this) && u.animate({
                                                opacity: 1
                                            }, d)
                                        }
                                    })
                            }
                        }
                        c.pxInMs && (d = Math.min(Math.max(Math.round(Math.abs(T(w)) / c.pxInMs), 100), d)),
                            s = function() {
                                T(b.not(u), -1e4),
                                    r = [b.index(u)],
                                    a = [m],
                                c.complete && c.complete(),
                                    C.moving = !1,
                                    o()
                            }
                            ,
                            f ? T(w, -m, d) : w.animate({
                                left: -m
                            }, {
                                duration: d,
                                queue: !1,
                                complete: s
                            }),
                            h.current = l,
                            i(l)
                    },
                    stop: function() {
                        f ? T(w, T(w)) : w.stop()
                    },
                    moveStart: function(e) {
                        C.moving = !0,
                            clearTimeout(k),
                            w.stop(),
                            C.startPageX = e.pageX;
                        var t, n = T(w);
                        C.leftCount = n,
                            0 === r[0] ? a[0] + n > 0 && (C.leftCount = n + 3 * (a[0] + n)) : r[r.length - 1] === b.length - 1 && (t = a[r.length - 1] + n,
                            0 > t && (C.leftCount = n + 3 * t))
                    },
                    move: function(e, t) {
                        var i, s, o, l = e.pageX - t, c = T(w), d = b.eq(r[0]), u = r.length - 1, p = b.eq(r[u]);
                        if (C.leftCount += l,
                            l > 0)
                            for (; 0 !== r[0] && c + a[0] + l > n.margin; )
                                i = b.eq(r[0] - 1),
                                    s = a[0] - i.outerWidth() - n.margin,
                                    T(i, s),
                                    a.unshift(s),
                                    r.unshift(r[0] - 1),
                                    u++,
                                    d = i;
                        if ((l > 0 && c + a[0] + l > 0 || 0 > l && c + a[0] > 0) && 0 === r[0] && (o = Math.min(Math.round((C.leftCount + a[0]) / 4), y.innerWidth() / 2),
                                l = o - (c + a[0])),
                            0 > l)
                            for (; !p.is(b.last()) && c + a[u] + l + p.outerWidth() + n.margin < y.innerWidth(); )
                                i = b.eq(r[u] + 1),
                                    s = a[u] + p.outerWidth() + n.margin,
                                    T(i, s),
                                    a.push(s),
                                    r.push(r[u++] + 1),
                                    p = i;
                        (l > 0 && c + a[u] < 0 || 0 > l && c + a[u] + l < 0) && p.is(b.last()) && (o = Math.max(Math.round((C.leftCount + a[u]) / 4), -y.innerWidth() / 2),
                            l = o - (c + a[u])),
                            T(w, c + l)
                    },
                    moveEnd: function(e, t, n, i, s, o) {
                        var l, c = r.length, d = T(w), u = c - 1;
                        if (a[0] + d > 0)
                            u = 0;
                        else if (!(a[r.length - 1] + d < 0)) {
                            l = {
                                pxInMs: t
                            };
                            var p, h, f = c - 1, m = y.innerWidth();
                            for (p = 0; c - 1 > p; p++)
                                if (h = a[p] + b.eq(r[p]).outerWidth() + d,
                                    h > 0 && h > m - (a[p + 1] + d)) {
                                    f = p;
                                    break
                                }
                            if (S)
                                u = f;
                            else {
                                var v = c - 1
                                    , g = Math.round(w.offset().left);
                                for (p = 0; c > p; p++)
                                    if (a[p] + g > e.pageX) {
                                        v = p - 1;
                                        break
                                    }
                                u = f,
                                f === v && e.timeStamp - i < 1e3 && s + o > .05 * Math.sqrt(Math.pow(y.height(), 2) + Math.pow(m, 2)) && (u = Math.max(0, Math.min(c - 1, u + n)))
                            }
                        }
                        u = r[u],
                            C.to(u, l)
                    }
                }
            }();
            if (C.init(),
                    f) {
                var S = !1;
                w.bind("webkitTransitionStart", function() {
                    S = !0
                }),
                    w.bind("webkitTransitionEnd", function() {
                        S = !1
                    })
            }
            var k, A = !1, E = !1;
            y.hover(function() {
                clearTimeout(k),
                    A = !0
            }, function() {
                A = !1,
                    o()
            }),
                _.click(function() {
                    r(_.index(this))
                }),
                e(n.prev, p).click(function() {
                    s()
                }),
                e(n.next, p).click(function() {
                    a()
                }),
            n.mouseTouch && d(),
            n.autoplay && l(),
                p.data(u, h)
        }
            ,
            e.fn.touchSlider = function(e) {
                return e = e || {},
                    e.container = this,
                    touchSlider(e),
                    this
            }
    }(jQuery),
    !function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Vue = t()
    }(this, function() {
        "use strict";
        function e(t, i, r) {
            if (n(t, i))
                return void (t[i] = r);
            if (t._isVue)
                return void e(t._data, i, r);
            var a = t.__ob__;
            if (!a)
                return void (t[i] = r);
            if (a.convert(i, r),
                    a.dep.notify(),
                    a.vms)
                for (var s = a.vms.length; s--; ) {
                    var o = a.vms[s];
                    o._proxy(i),
                        o._digest()
                }
            return r
        }
        function t(e, t) {
            if (n(e, t)) {
                delete e[t];
                var i = e.__ob__;
                if (!i)
                    return void (e._isVue && (delete e._data[t],
                        e._digest()));
                if (i.dep.notify(),
                        i.vms)
                    for (var r = i.vms.length; r--; ) {
                        var a = i.vms[r];
                        a._unproxy(t),
                            a._digest()
                    }
            }
        }
        function n(e, t) {
            return An.call(e, t)
        }
        function i(e) {
            return En.test(e)
        }
        function r(e) {
            var t = (e + "").charCodeAt(0);
            return 36 === t || 95 === t
        }
        function a(e) {
            return null == e ? "" : e.toString()
        }
        function s(e) {
            if ("string" != typeof e)
                return e;
            var t = Number(e);
            return isNaN(t) ? e : t
        }
        function o(e) {
            return "true" === e ? !0 : "false" === e ? !1 : e
        }
        function l(e) {
            var t = e.charCodeAt(0)
                , n = e.charCodeAt(e.length - 1);
            return t !== n || 34 !== t && 39 !== t ? e : e.slice(1, -1)
        }
        function c(e) {
            return e.replace($n, d)
        }
        function d(e, t) {
            return t ? t.toUpperCase() : ""
        }
        function u(e) {
            return e.replace(Mn, "$1-$2").toLowerCase()
        }
        function p(e) {
            return e.replace(On, d)
        }
        function h(e, t) {
            return function(n) {
                var i = arguments.length;
                return i ? i > 1 ? e.apply(t, arguments) : e.call(t, n) : e.call(t)
            }
        }
        function f(e, t) {
            t = t || 0;
            for (var n = e.length - t, i = new Array(n); n--; )
                i[n] = e[n + t];
            return i
        }
        function m(e, t) {
            for (var n = Object.keys(t), i = n.length; i--; )
                e[n[i]] = t[n[i]];
            return e
        }
        function v(e) {
            return null !== e && "object" == typeof e
        }
        function g(e) {
            return Nn.call(e) === Pn
        }
        function y(e, t, n, i) {
            Object.defineProperty(e, t, {
                value: n,
                enumerable: !!i,
                writable: !0,
                configurable: !0
            })
        }
        function w(e, t) {
            var n, i, r, a, s, o = function l() {
                var o = Date.now() - a;
                t > o && o >= 0 ? n = setTimeout(l, t - o) : (n = null ,
                    s = e.apply(r, i),
                n || (r = i = null ))
            };
            return function() {
                return r = this,
                    i = arguments,
                    a = Date.now(),
                n || (n = setTimeout(o, t)),
                    s
            }
        }
        function b(e, t) {
            for (var n = e.length; n--; )
                if (e[n] === t)
                    return n;
            return -1
        }
        function _(e) {
            var t = function n() {
                return n.cancelled ? void 0 : e.apply(this, arguments)
            };
            return t.cancel = function() {
                t.cancelled = !0
            }
                ,
                t
        }
        function x(e, t) {
            return e == t || (v(e) && v(t) ? JSON.stringify(e) === JSON.stringify(t) : !1)
        }
        function T(e) {
            this.size = 0,
                this.limit = e,
                this.head = this.tail = void 0,
                this._keymap = Object.create(null )
        }
        function C() {
            var e, t = Qn.slice(ri, ni).trim();
            if (t) {
                e = {};
                var n = t.match(ui);
                e.name = n[0],
                n.length > 1 && (e.args = n.slice(1).map(S))
            }
            e && (Zn.filters = Zn.filters || []).push(e),
                ri = ni + 1
        }
        function S(e) {
            if (pi.test(e))
                return {
                    value: s(e),
                    dynamic: !1
                };
            var t = l(e)
                , n = t === e;
            return {
                value: n ? e : t,
                dynamic: n
            }
        }
        function k(e) {
            var t = di.get(e);
            if (t)
                return t;
            for (Qn = e,
                     ai = si = !1,
                     oi = li = ci = 0,
                     ri = 0,
                     Zn = {},
                     ni = 0,
                     ii = Qn.length; ii > ni; ni++)
                if (ti = ei,
                        ei = Qn.charCodeAt(ni),
                        ai)
                    39 === ei && 92 !== ti && (ai = !ai);
                else if (si)
                    34 === ei && 92 !== ti && (si = !si);
                else if (124 === ei && 124 !== Qn.charCodeAt(ni + 1) && 124 !== Qn.charCodeAt(ni - 1))
                    null == Zn.expression ? (ri = ni + 1,
                        Zn.expression = Qn.slice(0, ni).trim()) : C();
                else
                    switch (ei) {
                        case 34:
                            si = !0;
                            break;
                        case 39:
                            ai = !0;
                            break;
                        case 40:
                            ci++;
                            break;
                        case 41:
                            ci--;
                            break;
                        case 91:
                            li++;
                            break;
                        case 93:
                            li--;
                            break;
                        case 123:
                            oi++;
                            break;
                        case 125:
                            oi--
                    }
            return null == Zn.expression ? Zn.expression = Qn.slice(0, ni).trim() : 0 !== ri && C(),
                di.put(e, Zn),
                Zn
        }
        function A(e) {
            return e.replace(fi, "\\$&")
        }
        function E() {
            var e = A(xi.delimiters[0])
                , t = A(xi.delimiters[1])
                , n = A(xi.unsafeDelimiters[0])
                , i = A(xi.unsafeDelimiters[1]);
            vi = new RegExp(n + "((?:.|\\n)+?)" + i + "|" + e + "((?:.|\\n)+?)" + t,"g"),
                gi = new RegExp("^" + n + ".*" + i + "$"),
                mi = new T(1e3)
        }
        function $(e) {
            mi || E();
            var t = mi.get(e);
            if (t)
                return t;
            if (!vi.test(e))
                return null ;
            for (var n, i, r, a, s, o, l = [], c = vi.lastIndex = 0; n = vi.exec(e); )
                i = n.index,
                i > c && l.push({
                    value: e.slice(c, i)
                }),
                    r = gi.test(n[0]),
                    a = r ? n[1] : n[2],
                    s = a.charCodeAt(0),
                    o = 42 === s,
                    a = o ? a.slice(1) : a,
                    l.push({
                        tag: !0,
                        value: a.trim(),
                        html: r,
                        oneTime: o
                    }),
                    c = i + n[0].length;
            return c < e.length && l.push({
                value: e.slice(c)
            }),
                mi.put(e, l),
                l
        }
        function M(e, t) {
            return e.length > 1 ? e.map(function(e) {
                return O(e, t)
            }).join("+") : O(e[0], t, !0)
        }
        function O(e, t, n) {
            return e.tag ? e.oneTime && t ? '"' + t.$eval(e.value) + '"' : N(e.value, n) : '"' + e.value + '"'
        }
        function N(e, t) {
            if (yi.test(e)) {
                var n = k(e);
                return n.filters ? "this._applyFilters(" + n.expression + ",null," + JSON.stringify(n.filters) + ",false)" : "(" + e + ")"
            }
            return t ? e : "(" + e + ")"
        }
        function P(e, t, n, i) {
            L(e, 1, function() {
                t.appendChild(e)
            }, n, i)
        }
        function I(e, t, n, i) {
            L(e, 1, function() {
                z(e, t)
            }, n, i)
        }
        function D(e, t, n) {
            L(e, -1, function() {
                G(e)
            }, t, n)
        }
        function L(e, t, n, i, r) {
            var a = e.__v_trans;
            if (!a || !a.hooks && !Gn || !i._isCompiled || i.$parent && !i.$parent._isCompiled)
                return n(),
                    void (r && r());
            var s = t > 0 ? "enter" : "leave";
            a[s](n, r)
        }
        function j(e) {
            return "string" == typeof e && (e = document.querySelector(e)),
                e
        }
        function B(e) {
            if (!e)
                return !1;
            var t = e.ownerDocument.documentElement
                , n = e.parentNode;
            return t === e || t === n || !(!n || 1 !== n.nodeType || !t.contains(n))
        }
        function R(e, t) {
            var n = e.getAttribute(t);
            return null !== n && e.removeAttribute(t),
                n
        }
        function F(e, t) {
            var n = R(e, ":" + t);
            return null === n && (n = R(e, "v-bind:" + t)),
                n
        }
        function H(e, t) {
            return e.hasAttribute(t) || e.hasAttribute(":" + t) || e.hasAttribute("v-bind:" + t)
        }
        function z(e, t) {
            t.parentNode.insertBefore(e, t)
        }
        function W(e, t) {
            t.nextSibling ? z(e, t.nextSibling) : t.parentNode.appendChild(e)
        }
        function G(e) {
            e.parentNode.removeChild(e)
        }
        function q(e, t) {
            t.firstChild ? z(e, t.firstChild) : t.appendChild(e)
        }
        function U(e, t) {
            var n = e.parentNode;
            n && n.replaceChild(t, e)
        }
        function V(e, t, n, i) {
            e.addEventListener(t, n, i)
        }
        function X(e, t, n) {
            e.removeEventListener(t, n)
        }
        function Y(e) {
            var t = e.className;
            return "object" == typeof t && (t = t.baseVal || ""),
                t
        }
        function K(e, t) {
            Rn && !/svg$/.test(e.namespaceURI) ? e.className = t : e.setAttribute("class", t)
        }
        function J(e, t) {
            if (e.classList)
                e.classList.add(t);
            else {
                var n = " " + Y(e) + " ";
                n.indexOf(" " + t + " ") < 0 && K(e, (n + t).trim())
            }
        }
        function Q(e, t) {
            if (e.classList)
                e.classList.remove(t);
            else {
                for (var n = " " + Y(e) + " ", i = " " + t + " "; n.indexOf(i) >= 0; )
                    n = n.replace(i, " ");
                K(e, n.trim())
            }
            e.className || e.removeAttribute("class")
        }
        function Z(e, t) {
            var n, i;
            if (ne(e) && oe(e.content) && (e = e.content),
                    e.hasChildNodes())
                for (ee(e),
                         i = t ? document.createDocumentFragment() : document.createElement("div"); n = e.firstChild; )
                    i.appendChild(n);
            return i
        }
        function ee(e) {
            for (var t; t = e.firstChild,
                te(t); )
                e.removeChild(t);
            for (; t = e.lastChild,
                       te(t); )
                e.removeChild(t)
        }
        function te(e) {
            return e && (3 === e.nodeType && !e.data.trim() || 8 === e.nodeType)
        }
        function ne(e) {
            return e.tagName && "template" === e.tagName.toLowerCase()
        }
        function ie(e, t) {
            var n = xi.debug ? document.createComment(e) : document.createTextNode(t ? " " : "");
            return n.__v_anchor = !0,
                n
        }
        function re(e) {
            if (e.hasAttributes())
                for (var t = e.attributes, n = 0, i = t.length; i > n; n++) {
                    var r = t[n].name;
                    if (Si.test(r))
                        return c(r.replace(Si, ""))
                }
        }
        function ae(e, t, n) {
            for (var i; e !== t; )
                i = e.nextSibling,
                    n(e),
                    e = i;
            n(t)
        }
        function se(e, t, n, i, r) {
            function a() {
                if (o++,
                    s && o >= l.length) {
                    for (var e = 0; e < l.length; e++)
                        i.appendChild(l[e]);
                    r && r()
                }
            }
            var s = !1
                , o = 0
                , l = [];
            ae(e, t, function(e) {
                e === t && (s = !0),
                    l.push(e),
                    D(e, n, a)
            })
        }
        function oe(e) {
            return e && 11 === e.nodeType
        }
        function le(e) {
            if (e.outerHTML)
                return e.outerHTML;
            var t = document.createElement("div");
            return t.appendChild(e.cloneNode(!0)),
                t.innerHTML
        }
        function ce(e, t) {
            var n = e.tagName.toLowerCase()
                , i = e.hasAttributes();
            if (ki.test(n) || Ai.test(n)) {
                if (i)
                    return de(e, t)
            } else {
                if (ge(t, "components", n))
                    return {
                        id: n
                    };
                var r = i && de(e, t);
                if (r)
                    return r
            }
        }
        function de(e, t) {
            var n = e.getAttribute("is");
            if (null != n) {
                if (ge(t, "components", n))
                    return e.removeAttribute("is"),
                    {
                        id: n
                    }
            } else if (n = F(e, "is"),
                null != n)
                return {
                    id: n,
                    dynamic: !0
                }
        }
        function ue(t, i) {
            var r, a, s;
            for (r in i)
                a = t[r],
                    s = i[r],
                    n(t, r) ? v(a) && v(s) && ue(a, s) : e(t, r, s);
            return t
        }
        function pe(e, t) {
            var n = Object.create(e || null );
            return t ? m(n, me(t)) : n
        }
        function he(e) {
            if (e.components)
                for (var t, n = e.components = me(e.components), i = Object.keys(n), r = 0, a = i.length; a > r; r++) {
                    var s = i[r];
                    ki.test(s) || Ai.test(s) || (t = n[s],
                    g(t) && (n[s] = _n.extend(t)))
                }
        }
        function fe(e) {
            var t, n, i = e.props;
            if (In(i))
                for (e.props = {},
                         t = i.length; t--; )
                    n = i[t],
                        "string" == typeof n ? e.props[n] = null : n.name && (e.props[n.name] = n);
            else if (g(i)) {
                var r = Object.keys(i);
                for (t = r.length; t--; )
                    n = i[r[t]],
                    "function" == typeof n && (i[r[t]] = {
                        type: n
                    })
            }
        }
        function me(e) {
            if (In(e)) {
                for (var t, n = {}, i = e.length; i--; ) {
                    t = e[i];
                    var r = "function" == typeof t ? t.options && t.options.name || t.id : t.name || t.id;
                    r && (n[r] = t)
                }
                return n
            }
            return e
        }
        function ve(e, t, i) {
            function r(n) {
                var r = Ei[n] || $i;
                s[n] = r(e[n], t[n], i, n)
            }
            he(t),
                fe(t);
            var a, s = {};
            if (t["extends"] && (e = "function" == typeof t["extends"] ? ve(e, t["extends"].options, i) : ve(e, t["extends"], i)),
                    t.mixins)
                for (var o = 0, l = t.mixins.length; l > o; o++)
                    e = ve(e, t.mixins[o], i);
            for (a in e)
                r(a);
            for (a in t)
                n(e, a) || r(a);
            return s
        }
        function ge(e, t, n, i) {
            if ("string" == typeof n) {
                var r, a = e[t], s = a[n] || a[r = c(n)] || a[r.charAt(0).toUpperCase() + r.slice(1)];
                return s
            }
        }
        function ye() {
            this.id = Mi++,
                this.subs = []
        }
        function we(e) {
            Ii = !1,
                e(),
                Ii = !0
        }
        function be(e) {
            if (this.value = e,
                    this.dep = new ye,
                    y(e, "__ob__", this),
                    In(e)) {
                var t = Dn ? _e : xe;
                t(e, Ni, Pi),
                    this.observeArray(e)
            } else
                this.walk(e)
        }
        function _e(e, t) {
            e.__proto__ = t
        }
        function xe(e, t, n) {
            for (var i = 0, r = n.length; r > i; i++) {
                var a = n[i];
                y(e, a, t[a])
            }
        }
        function Te(e, t) {
            if (e && "object" == typeof e) {
                var i;
                return n(e, "__ob__") && e.__ob__ instanceof be ? i = e.__ob__ : Ii && (In(e) || g(e)) && Object.isExtensible(e) && !e._isVue && (i = new be(e)),
                i && t && i.addVm(t),
                    i
            }
        }
        function Ce(e, t, n) {
            var i = new ye
                , r = Object.getOwnPropertyDescriptor(e, t);
            if (!r || r.configurable !== !1) {
                var a = r && r.get
                    , s = r && r.set
                    , o = Te(n);
                Object.defineProperty(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: function() {
                        var t = a ? a.call(e) : n;
                        if (ye.target && (i.depend(),
                            o && o.dep.depend(),
                                In(t)))
                            for (var r, s = 0, l = t.length; l > s; s++)
                                r = t[s],
                                r && r.__ob__ && r.__ob__.dep.depend();
                        return t
                    },
                    set: function(t) {
                        var r = a ? a.call(e) : n;
                        t !== r && (s ? s.call(e, t) : n = t,
                            o = Te(t),
                            i.notify())
                    }
                })
            }
        }
        function Se(e) {
            e.prototype._init = function(e) {
                e = e || {},
                    this.$el = null ,
                    this.$parent = e.parent,
                    this.$root = this.$parent ? this.$parent.$root : this,
                    this.$children = [],
                    this.$refs = {},
                    this.$els = {},
                    this._watchers = [],
                    this._directives = [],
                    this._uid = Li++,
                    this._isVue = !0,
                    this._events = {},
                    this._eventsCount = {},
                    this._isFragment = !1,
                    this._fragment = this._fragmentStart = this._fragmentEnd = null ,
                    this._isCompiled = this._isDestroyed = this._isReady = this._isAttached = this._isBeingDestroyed = this._vForRemoving = !1,
                    this._unlinkFn = null ,
                    this._context = e._context || this.$parent,
                    this._scope = e._scope,
                    this._frag = e._frag,
                this._frag && this._frag.children.push(this),
                this.$parent && this.$parent.$children.push(this),
                    e = this.$options = ve(this.constructor.options, e, this),
                    this._updateRef(),
                    this._data = {},
                    this._callHook("init"),
                    this._initState(),
                    this._initEvents(),
                    this._callHook("created"),
                e.el && this.$mount(e.el)
            }
        }
        function ke(e) {
            if (void 0 === e)
                return "eof";
            var t = e.charCodeAt(0);
            switch (t) {
                case 91:
                case 93:
                case 46:
                case 34:
                case 39:
                case 48:
                    return e;
                case 95:
                case 36:
                    return "ident";
                case 32:
                case 9:
                case 10:
                case 13:
                case 160:
                case 65279:
                case 8232:
                case 8233:
                    return "ws"
            }
            return t >= 97 && 122 >= t || t >= 65 && 90 >= t ? "ident" : t >= 49 && 57 >= t ? "number" : "else"
        }
        function Ae(e) {
            var t = e.trim();
            return "0" === e.charAt(0) && isNaN(e) ? !1 : i(t) ? l(t) : "*" + t
        }
        function Ee(e) {
            function t() {
                var t = e[d + 1];
                return u === Vi && "'" === t || u === Xi && '"' === t ? (d++,
                    i = "\\" + t,
                    h[Bi](),
                    !0) : void 0
            }
            var n, i, r, a, s, o, l, c = [], d = -1, u = zi, p = 0, h = [];
            for (h[Ri] = function() {
                void 0 !== r && (c.push(r),
                    r = void 0)
            }
                     ,
                     h[Bi] = function() {
                         void 0 === r ? r = i : r += i
                     }
                     ,
                     h[Fi] = function() {
                         h[Bi](),
                             p++
                     }
                     ,
                     h[Hi] = function() {
                         if (p > 0)
                             p--,
                                 u = Ui,
                                 h[Bi]();
                         else {
                             if (p = 0,
                                     r = Ae(r),
                                 r === !1)
                                 return !1;
                             h[Ri]()
                         }
                     }
                ; null != u; )
                if (d++,
                        n = e[d],
                    "\\" !== n || !t()) {
                    if (a = ke(n),
                            l = Ji[u],
                            s = l[a] || l["else"] || Ki,
                        s === Ki)
                        return;
                    if (u = s[0],
                            o = h[s[1]],
                        o && (i = s[2],
                            i = void 0 === i ? n : i,
                        o() === !1))
                        return;
                    if (u === Yi)
                        return c.raw = e,
                            c
                }
        }
        function $e(e) {
            var t = ji.get(e);
            return t || (t = Ee(e),
            t && ji.put(e, t)),
                t
        }
        function Me(e, t) {
            return Be(t).get(e)
        }
        function Oe(t, n, i) {
            var r = t;
            if ("string" == typeof n && (n = Ee(n)),
                !n || !v(t))
                return !1;
            for (var a, s, o = 0, l = n.length; l > o; o++)
                a = t,
                    s = n[o],
                "*" === s.charAt(0) && (s = Be(s.slice(1)).get.call(r, r)),
                    l - 1 > o ? (t = t[s],
                    v(t) || (t = {},
                        e(a, s, t))) : In(t) ? t.$set(s, i) : s in t ? t[s] = i : e(t, s, i);
            return !0
        }
        function Ne(e, t) {
            var n = ur.length;
            return ur[n] = t ? e.replace(ar, "\\n") : e,
            '"' + n + '"'
        }
        function Pe(e) {
            var t = e.charAt(0)
                , n = e.slice(1);
            return tr.test(n) ? e : (n = n.indexOf('"') > -1 ? n.replace(or, Ie) : n,
            t + "scope." + n)
        }
        function Ie(e, t) {
            return ur[t]
        }
        function De(e) {
            ir.test(e),
                ur.length = 0;
            var t = e.replace(sr, Ne).replace(rr, "");
            return t = (" " + t).replace(cr, Pe).replace(or, Ie),
                Le(t)
        }
        function Le(e) {
            try {
                return new Function("scope","return " + e + ";")
            } catch (t) {}
        }
        function je(e) {
            var t = $e(e);
            return t ? function(e, n) {
                Oe(e, t, n)
            }
                : void 0
        }
        function Be(e, t) {
            e = e.trim();
            var n = Zi.get(e);
            if (n)
                return t && !n.set && (n.set = je(n.exp)),
                    n;
            var i = {
                exp: e
            };
            return i.get = Re(e) && e.indexOf("[") < 0 ? Le("scope." + e) : De(e),
            t && (i.set = je(e)),
                Zi.put(e, i),
                i
        }
        function Re(e) {
            return lr.test(e) && !dr.test(e) && "Math." !== e.slice(0, 5)
        }
        function Fe() {
            hr.length = 0,
                fr.length = 0,
                mr = {},
                vr = {},
                gr = !1
        }
        function He() {
            for (var e = !0; e; )
                e = !1,
                    ze(hr),
                    ze(fr),
                    hr.length ? e = !0 : (jn && xi.devtools && jn.emit("flush"),
                        Fe())
        }
        function ze(e) {
            for (var t = 0; t < e.length; t++) {
                var n = e[t]
                    , i = n.id;
                mr[i] = null ,
                    n.run()
            }
            e.length = 0
        }
        function We(e) {
            var t = e.id;
            if (null == mr[t]) {
                var n = e.user ? fr : hr;
                mr[t] = n.length,
                    n.push(e),
                gr || (gr = !0,
                    Yn(He))
            }
        }
        function Ge(e, t, n, i) {
            i && m(this, i);
            var r = "function" == typeof t;
            if (this.vm = e,
                    e._watchers.push(this),
                    this.expression = t,
                    this.cb = n,
                    this.id = ++yr,
                    this.active = !0,
                    this.dirty = this.lazy,
                    this.deps = [],
                    this.newDeps = [],
                    this.depIds = new Kn,
                    this.newDepIds = new Kn,
                    this.prevError = null ,
                    r)
                this.getter = t,
                    this.setter = void 0;
            else {
                var a = Be(t, this.twoWay);
                this.getter = a.get,
                    this.setter = a.set
            }
            this.value = this.lazy ? void 0 : this.get(),
                this.queued = this.shallow = !1
        }
        function qe(e, t) {
            var n = void 0
                , i = void 0;
            t || (t = wr,
                t.clear());
            var r = In(e)
                , a = v(e);
            if (r || a) {
                if (e.__ob__) {
                    var s = e.__ob__.dep.id;
                    if (t.has(s))
                        return;
                    t.add(s)
                }
                if (r)
                    for (n = e.length; n--; )
                        qe(e[n], t);
                else if (a)
                    for (i = Object.keys(e),
                             n = i.length; n--; )
                        qe(e[i[n]], t)
            }
        }
        function Ue(e) {
            return ne(e) && oe(e.content)
        }
        function Ve(e, t) {
            var n = t ? e : e.trim()
                , i = _r.get(n);
            if (i)
                return i;
            var r = document.createDocumentFragment()
                , a = e.match(Cr)
                , s = Sr.test(e);
            if (a || s) {
                var o = a && a[1]
                    , l = Tr[o] || Tr.efault
                    , c = l[0]
                    , d = l[1]
                    , u = l[2]
                    , p = document.createElement("div");
                for (p.innerHTML = d + e + u; c--; )
                    p = p.lastChild;
                for (var h; h = p.firstChild; )
                    r.appendChild(h)
            } else
                r.appendChild(document.createTextNode(e));
            return t || ee(r),
                _r.put(n, r),
                r
        }
        function Xe(e) {
            if (Ue(e))
                return Ve(e.innerHTML);
            if ("SCRIPT" === e.tagName)
                return Ve(e.textContent);
            for (var t, n = Ye(e), i = document.createDocumentFragment(); t = n.firstChild; )
                i.appendChild(t);
            return ee(i),
                i
        }
        function Ye(e) {
            if (!e.querySelectorAll)
                return e.cloneNode();
            var t, n, i, r = e.cloneNode(!0);
            if (kr) {
                var a = r;
                if (Ue(e) && (e = e.content,
                        a = r.content),
                        n = e.querySelectorAll("template"),
                        n.length)
                    for (i = a.querySelectorAll("template"),
                             t = i.length; t--; )
                        i[t].parentNode.replaceChild(Ye(n[t]), i[t])
            }
            if (Ar)
                if ("TEXTAREA" === e.tagName)
                    r.value = e.value;
                else if (n = e.querySelectorAll("textarea"),
                        n.length)
                    for (i = r.querySelectorAll("textarea"),
                             t = i.length; t--; )
                        i[t].value = n[t].value;
            return r
        }
        function Ke(e, t, n) {
            var i, r;
            return oe(e) ? (ee(e),
                t ? Ye(e) : e) : ("string" == typeof e ? n || "#" !== e.charAt(0) ? r = Ve(e, n) : (r = xr.get(e),
            r || (i = document.getElementById(e.slice(1)),
            i && (r = Xe(i),
                xr.put(e, r)))) : e.nodeType && (r = Xe(e)),
                r && t ? Ye(r) : r)
        }
        function Je(e, t, n, i, r, a) {
            this.children = [],
                this.childFrags = [],
                this.vm = t,
                this.scope = r,
                this.inserted = !1,
                this.parentFrag = a,
            a && a.childFrags.push(this),
                this.unlink = e(t, n, i, r, this);
            var s = this.single = 1 === n.childNodes.length && !n.childNodes[0].__v_anchor;
            s ? (this.node = n.childNodes[0],
                this.before = Qe,
                this.remove = Ze) : (this.node = ie("fragment-start"),
                this.end = ie("fragment-end"),
                this.frag = n,
                q(this.node, n),
                n.appendChild(this.end),
                this.before = et,
                this.remove = tt),
                this.node.__v_frag = this
        }
        function Qe(e, t) {
            this.inserted = !0;
            var n = t !== !1 ? I : z;
            n(this.node, e, this.vm),
            B(this.node) && this.callHook(nt)
        }
        function Ze() {
            this.inserted = !1;
            var e = B(this.node)
                , t = this;
            this.beforeRemove(),
                D(this.node, this.vm, function() {
                    e && t.callHook(it),
                        t.destroy()
                })
        }
        function et(e, t) {
            this.inserted = !0;
            var n = this.vm
                , i = t !== !1 ? I : z;
            ae(this.node, this.end, function(t) {
                i(t, e, n)
            }),
            B(this.node) && this.callHook(nt)
        }
        function tt() {
            this.inserted = !1;
            var e = this
                , t = B(this.node);
            this.beforeRemove(),
                se(this.node, this.end, this.vm, this.frag, function() {
                    t && e.callHook(it),
                        e.destroy()
                })
        }
        function nt(e) {
            !e._isAttached && B(e.$el) && e._callHook("attached")
        }
        function it(e) {
            e._isAttached && !B(e.$el) && e._callHook("detached")
        }
        function rt(e, t) {
            this.vm = e;
            var n, i = "string" == typeof t;
            i || ne(t) && !t.hasAttribute("v-if") ? n = Ke(t, !0) : (n = document.createDocumentFragment(),
                n.appendChild(t)),
                this.template = n;
            var r, a = e.constructor.cid;
            if (a > 0) {
                var s = a + (i ? t : le(t));
                r = Mr.get(s),
                r || (r = Pt(n, e.$options, !0),
                    Mr.put(s, r))
            } else
                r = Pt(n, e.$options, !0);
            this.linker = r
        }
        function at(e, t, n) {
            var i = e.node.previousSibling;
            if (i) {
                for (e = i.__v_frag; !(e && e.forId === n && e.inserted || i === t); ) {
                    if (i = i.previousSibling,
                            !i)
                        return;
                    e = i.__v_frag
                }
                return e
            }
        }
        function st(e) {
            var t = e.node;
            if (e.end)
                for (; !t.__vue__ && t !== e.end && t.nextSibling; )
                    t = t.nextSibling;
            return t.__vue__
        }
        function ot(e) {
            for (var t = -1, n = new Array(Math.floor(e)); ++t < e; )
                n[t] = t;
            return n
        }
        function lt(e, t, n, i) {
            return i ? "$index" === i ? e : i.charAt(0).match(/\w/) ? Me(n, i) : n[i] : t || n
        }
        function ct(e, t, n) {
            for (var i, r, a, s = t ? [] : null , o = 0, l = e.options.length; l > o; o++)
                if (i = e.options[o],
                        a = n ? i.hasAttribute("selected") : i.selected) {
                    if (r = i.hasOwnProperty("_value") ? i._value : i.value,
                            !t)
                        return r;
                    s.push(r)
                }
            return s
        }
        function dt(e, t) {
            for (var n = e.length; n--; )
                if (x(e[n], t))
                    return n;
            return -1
        }
        function ut(e, t) {
            var n = t.map(function(e) {
                var t = e.charCodeAt(0);
                return t > 47 && 58 > t ? parseInt(e, 10) : 1 === e.length && (t = e.toUpperCase().charCodeAt(0),
                t > 64 && 91 > t) ? t : Jr[e]
            });
            return n = [].concat.apply([], n),
                function(t) {
                    return n.indexOf(t.keyCode) > -1 ? e.call(this, t) : void 0
                }
        }
        function pt(e) {
            return function(t) {
                return t.stopPropagation(),
                    e.call(this, t)
            }
        }
        function ht(e) {
            return function(t) {
                return t.preventDefault(),
                    e.call(this, t)
            }
        }
        function ft(e) {
            return function(t) {
                return t.target === t.currentTarget ? e.call(this, t) : void 0
            }
        }
        function mt(e) {
            if (na[e])
                return na[e];
            var t = vt(e);
            return na[e] = na[t] = t,
                t
        }
        function vt(e) {
            e = u(e);
            var t = c(e)
                , n = t.charAt(0).toUpperCase() + t.slice(1);
            ia || (ia = document.createElement("div"));
            var i, r = Zr.length;
            if ("filter" !== t && t in ia.style)
                return {
                    kebab: e,
                    camel: t
                };
            for (; r--; )
                if (i = ea[r] + n,
                    i in ia.style)
                    return {
                        kebab: Zr[r] + e,
                        camel: i
                    }
        }
        function gt(e) {
            var t = [];
            if (In(e))
                for (var n = 0, i = e.length; i > n; n++) {
                    var r = e[n];
                    if (r)
                        if ("string" == typeof r)
                            t.push(r);
                        else
                            for (var a in r)
                                r[a] && t.push(a)
                }
            else if (v(e))
                for (var s in e)
                    e[s] && t.push(s);
            return t
        }
        function yt(e, t, n) {
            if (t = t.trim(),
                -1 === t.indexOf(" "))
                return void n(e, t);
            for (var i = t.split(/\s+/), r = 0, a = i.length; a > r; r++)
                n(e, i[r])
        }
        function wt(e, t, n) {
            function i() {
                ++a >= r ? n() : e[a].call(t, i)
            }
            var r = e.length
                , a = 0;
            e[0].call(t, i)
        }
        function bt(e, t, n) {
            for (var r, a, s, o, l, d, p, h = [], f = Object.keys(t), m = f.length; m--; )
                a = f[m],
                    r = t[a] || wa,
                    l = c(a),
                ba.test(l) && (p = {
                    name: a,
                    path: l,
                    options: r,
                    mode: ya.ONE_WAY,
                    raw: null
                },
                    s = u(a),
                null === (o = F(e, s)) && (null !== (o = F(e, s + ".sync")) ? p.mode = ya.TWO_WAY : null !== (o = F(e, s + ".once")) && (p.mode = ya.ONE_TIME)),
                    null !== o ? (p.raw = o,
                        d = k(o),
                        o = d.expression,
                        p.filters = d.filters,
                        i(o) && !d.filters ? p.optimizedLiteral = !0 : p.dynamic = !0,
                        p.parentPath = o) : null !== (o = R(e, s)) && (p.raw = o),
                    h.push(p));
            return _t(h)
        }
        function _t(e) {
            return function(t, i) {
                t._props = {};
                for (var r, a, c, d, p, h = t.$options.propsData, f = e.length; f--; )
                    if (r = e[f],
                            p = r.raw,
                            a = r.path,
                            c = r.options,
                            t._props[a] = r,
                        h && n(h, a) && Tt(t, r, h[a]),
                        null === p)
                        Tt(t, r, void 0);
                    else if (r.dynamic)
                        r.mode === ya.ONE_TIME ? (d = (i || t._context || t).$get(r.parentPath),
                            Tt(t, r, d)) : t._context ? t._bindDir({
                            name: "prop",
                            def: xa,
                            prop: r
                        }, null , null , i) : Tt(t, r, t.$get(r.parentPath));
                    else if (r.optimizedLiteral) {
                        var m = l(p);
                        d = m === p ? o(s(p)) : m,
                            Tt(t, r, d)
                    } else
                        d = c.type !== Boolean || "" !== p && p !== u(r.name) ? p : !0,
                            Tt(t, r, d)
            }
        }
        function xt(e, t, n, i) {
            var r = t.dynamic && Re(t.parentPath)
                , a = n;
            void 0 === a && (a = St(e, t)),
                a = At(t, a);
            var s = a !== n;
            kt(t, a, e) || (a = void 0),
                r && !s ? we(function() {
                    i(a)
                }) : i(a)
        }
        function Tt(e, t, n) {
            xt(e, t, n, function(n) {
                Ce(e, t.path, n)
            })
        }
        function Ct(e, t, n) {
            xt(e, t, n, function(n) {
                e[t.path] = n
            })
        }
        function St(e, t) {
            var i = t.options;
            if (!n(i, "default"))
                return i.type === Boolean ? !1 : void 0;
            var r = i["default"];
            return v(r),
                "function" == typeof r && i.type !== Function ? r.call(e) : r
        }
        function kt(e, t, n) {
            if (!e.options.required && (null === e.raw || null == t))
                return !0;
            var i = e.options
                , r = i.type
                , a = !r
                , s = [];
            if (r) {
                In(r) || (r = [r]);
                for (var o = 0; o < r.length && !a; o++) {
                    var l = Et(t, r[o]);
                    s.push(l.expectedType),
                        a = l.valid
                }
            }
            if (!a)
                return !1;
            var c = i.validator;
            return !c || c(t)
        }
        function At(e, t) {
            var n = e.options.coerce;
            return n ? n(t) : t
        }
        function Et(e, t) {
            var n, i;
            return t === String ? (i = "string",
                n = typeof e === i) : t === Number ? (i = "number",
                n = typeof e === i) : t === Boolean ? (i = "boolean",
                n = typeof e === i) : t === Function ? (i = "function",
                n = typeof e === i) : t === Object ? (i = "object",
                n = g(e)) : t === Array ? (i = "array",
                n = In(e)) : n = e instanceof t,
            {
                valid: n,
                expectedType: i
            }
        }
        function $t(e) {
            Ta.push(e),
            Ca || (Ca = !0,
                Yn(Mt))
        }
        function Mt() {
            for (var e = document.documentElement.offsetHeight, t = 0; t < Ta.length; t++)
                Ta[t]();
            return Ta = [],
                Ca = !1,
                e
        }
        function Ot(e, t, n, i) {
            this.id = t,
                this.el = e,
                this.enterClass = n && n.enterClass || t + "-enter",
                this.leaveClass = n && n.leaveClass || t + "-leave",
                this.hooks = n,
                this.vm = i,
                this.pendingCssEvent = this.pendingCssCb = this.cancel = this.pendingJsCb = this.op = this.cb = null ,
                this.justEntered = !1,
                this.entered = this.left = !1,
                this.typeCache = {},
                this.type = n && n.type;
            var r = this;
            ["enterNextTick", "enterDone", "leaveNextTick", "leaveDone"].forEach(function(e) {
                r[e] = h(r[e], r)
            })
        }
        function Nt(e) {
            if (/svg$/.test(e.namespaceURI)) {
                var t = e.getBoundingClientRect();
                return !(t.width || t.height)
            }
            return !(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        function Pt(e, t, n) {
            var i = n || !t._asComponent ? Ft(e, t) : null
                , r = i && i.terminal || rn(e) || !e.hasChildNodes() ? null : Ut(e.childNodes, t);
            return function(e, t, n, a, s) {
                var o = f(t.childNodes)
                    , l = It(function() {
                    i && i(e, t, n, a, s),
                    r && r(e, o, n, a, s)
                }, e);
                return Lt(e, l)
            }
        }
        function It(e, t) {
            t._directives = [];
            var n = t._directives.length;
            e();
            var i = t._directives.slice(n);
            i.sort(Dt);
            for (var r = 0, a = i.length; a > r; r++)
                i[r]._bind();
            return i
        }
        function Dt(e, t) {
            return e = e.descriptor.def.priority || Ra,
                t = t.descriptor.def.priority || Ra,
                e > t ? -1 : e === t ? 0 : 1
        }
        function Lt(e, t, n, i) {
            function r(r) {
                jt(e, t, r),
                n && i && jt(n, i)
            }
            return r.dirs = t,
                r
        }
        function jt(e, t, n) {
            for (var i = t.length; i--; )
                t[i]._teardown()
        }
        function Bt(e, t, n, i) {
            var r = bt(t, n, e)
                , a = It(function() {
                r(e, i)
            }, e);
            return Lt(e, a)
        }
        function Rt(e, t, n) {
            var i, r, a = t._containerAttrs, s = t._replacerAttrs;
            return 11 !== e.nodeType && (t._asComponent ? (a && n && (i = Zt(a, n)),
            s && (r = Zt(s, t))) : r = Zt(e.attributes, t)),
                t._containerAttrs = t._replacerAttrs = null ,
                function(e, t, n) {
                    var a, s = e._context;
                    s && i && (a = It(function() {
                        i(s, t, null , n)
                    }, s));
                    var o = It(function() {
                        r && r(e, t)
                    }, e);
                    return Lt(e, o, s, a)
                }
        }
        function Ft(e, t) {
            var n = e.nodeType;
            return 1 !== n || rn(e) ? 3 === n && e.data.trim() ? zt(e, t) : null : Ht(e, t)
        }
        function Ht(e, t) {
            if ("TEXTAREA" === e.tagName) {
                var n = $(e.value);
                n && (e.setAttribute(":value", M(n)),
                    e.value = "")
            }
            var i, r = e.hasAttributes(), a = r && f(e.attributes);
            return r && (i = Kt(e, a, t)),
            i || (i = Xt(e, t)),
            i || (i = Yt(e, t)),
            !i && r && (i = Zt(a, t)),
                i
        }
        function zt(e, t) {
            if (e._skip)
                return Wt;
            var n = $(e.wholeText);
            if (!n)
                return null ;
            for (var i = e.nextSibling; i && 3 === i.nodeType; )
                i._skip = !0,
                    i = i.nextSibling;
            for (var r, a, s = document.createDocumentFragment(), o = 0, l = n.length; l > o; o++)
                a = n[o],
                    r = a.tag ? Gt(a, t) : document.createTextNode(a.value),
                    s.appendChild(r);
            return qt(n, s, t)
        }
        function Wt(e, t) {
            G(t)
        }
        function Gt(e, t) {
            function n(t) {
                if (!e.descriptor) {
                    var n = k(e.value);
                    e.descriptor = {
                        name: t,
                        def: ma[t],
                        expression: n.expression,
                        filters: n.filters
                    }
                }
            }
            var i;
            return e.oneTime ? i = document.createTextNode(e.value) : e.html ? (i = document.createComment("v-html"),
                n("html")) : (i = document.createTextNode(" "),
                n("text")),
                i
        }
        function qt(e, t) {
            return function(n, i, r, a) {
                for (var s, o, l, c = t.cloneNode(!0), d = f(c.childNodes), u = 0, p = e.length; p > u; u++)
                    s = e[u],
                        o = s.value,
                    s.tag && (l = d[u],
                        s.oneTime ? (o = (a || n).$eval(o),
                            s.html ? U(l, Ke(o, !0)) : l.data = o) : n._bindDir(s.descriptor, l, r, a));
                U(i, c)
            }
        }
        function Ut(e, t) {
            for (var n, i, r, a = [], s = 0, o = e.length; o > s; s++)
                r = e[s],
                    n = Ft(r, t),
                    i = n && n.terminal || "SCRIPT" === r.tagName || !r.hasChildNodes() ? null : Ut(r.childNodes, t),
                    a.push(n, i);
            return a.length ? Vt(a) : null
        }
        function Vt(e) {
            return function(t, n, i, r, a) {
                for (var s, o, l, c = 0, d = 0, u = e.length; u > c; d++) {
                    s = n[d],
                        o = e[c++],
                        l = e[c++];
                    var p = f(s.childNodes);
                    o && o(t, s, i, r, a),
                    l && l(t, p, i, r, a)
                }
            }
        }
        function Xt(e, t) {
            var n = e.tagName.toLowerCase();
            if (!ki.test(n)) {
                var i = ge(t, "elementDirectives", n);
                return i ? Qt(e, n, "", t, i) : void 0
            }
        }
        function Yt(e, t) {
            var n = ce(e, t);
            if (n) {
                var i = re(e)
                    , r = {
                    name: "component",
                    ref: i,
                    expression: n.id,
                    def: Pa.component,
                    modifiers: {
                        literal: !n.dynamic
                    }
                }
                    , a = function(e, t, n, a, s) {
                    i && Ce((a || e).$refs, i, null ),
                        e._bindDir(r, t, n, a, s)
                };
                return a.terminal = !0,
                    a
            }
        }
        function Kt(e, t, n) {
            if (null !== R(e, "v-pre"))
                return Jt;
            if (e.hasAttribute("v-else")) {
                var i = e.previousElementSibling;
                if (i && i.hasAttribute("v-if"))
                    return Jt
            }
            for (var r, a, s, o, l, c, d, u, p, h, f = 0, m = t.length; m > f; f++)
                r = t[f],
                    a = r.name.replace(ja, ""),
                (l = a.match(La)) && (p = ge(n, "directives", l[1]),
                p && p.terminal && (!h || (p.priority || Fa) > h.priority) && (h = p,
                    d = r.name,
                    o = en(r.name),
                    s = r.value,
                    c = l[1],
                    u = l[2]));
            return h ? Qt(e, c, s, n, h, d, u, o) : void 0
        }
        function Jt() {}
        function Qt(e, t, n, i, r, a, s, o) {
            var l = k(n)
                , c = {
                name: t,
                arg: s,
                expression: l.expression,
                filters: l.filters,
                raw: n,
                attr: a,
                modifiers: o,
                def: r
            };
            "for" !== t && "router-view" !== t || (c.ref = re(e));
            var d = function(e, t, n, i, r) {
                c.ref && Ce((i || e).$refs, c.ref, null ),
                    e._bindDir(c, t, n, i, r)
            };
            return d.terminal = !0,
                d
        }
        function Zt(e, t) {
            function n(e, t, n) {
                var i = n && nn(n)
                    , r = !i && k(a);
                m.push({
                    name: e,
                    attr: s,
                    raw: o,
                    def: t,
                    arg: c,
                    modifiers: d,
                    expression: r && r.expression,
                    filters: r && r.filters,
                    interp: n,
                    hasOneTime: i
                })
            }
            for (var i, r, a, s, o, l, c, d, u, p, h, f = e.length, m = []; f--; )
                if (i = e[f],
                        r = s = i.name,
                        a = o = i.value,
                        p = $(a),
                        c = null ,
                        d = en(r),
                        r = r.replace(ja, ""),
                        p)
                    a = M(p),
                        c = r,
                        n("bind", ma.bind, p);
                else if (Ba.test(r))
                    d.literal = !Ia.test(r),
                        n("transition", Pa.transition);
                else if (Da.test(r))
                    c = r.replace(Da, ""),
                        n("on", ma.on);
                else if (Ia.test(r))
                    l = r.replace(Ia, ""),
                        "style" === l || "class" === l ? n(l, Pa[l]) : (c = l,
                            n("bind", ma.bind));
                else if (h = r.match(La)) {
                    if (l = h[1],
                            c = h[2],
                        "else" === l)
                        continue;
                    u = ge(t, "directives", l, !0),
                    u && n(l, u)
                }
            return m.length ? tn(m) : void 0
        }
        function en(e) {
            var t = Object.create(null )
                , n = e.match(ja);
            if (n)
                for (var i = n.length; i--; )
                    t[n[i].slice(1)] = !0;
            return t
        }
        function tn(e) {
            return function(t, n, i, r, a) {
                for (var s = e.length; s--; )
                    t._bindDir(e[s], n, i, r, a)
            }
        }
        function nn(e) {
            for (var t = e.length; t--; )
                if (e[t].oneTime)
                    return !0
        }
        function rn(e) {
            return "SCRIPT" === e.tagName && (!e.hasAttribute("type") || "text/javascript" === e.getAttribute("type"))
        }
        function an(e, t) {
            return t && (t._containerAttrs = on(e)),
            ne(e) && (e = Ke(e)),
            t && (t._asComponent && !t.template && (t.template = "<slot></slot>"),
            t.template && (t._content = Z(e),
                e = sn(e, t))),
            oe(e) && (q(ie("v-start", !0), e),
                e.appendChild(ie("v-end", !0))),
                e
        }
        function sn(e, t) {
            var n = t.template
                , i = Ke(n, !0);
            if (i) {
                var r = i.firstChild
                    , a = r.tagName && r.tagName.toLowerCase();
                return t.replace ? (e === document.body,
                    i.childNodes.length > 1 || 1 !== r.nodeType || "component" === a || ge(t, "components", a) || H(r, "is") || ge(t, "elementDirectives", a) || r.hasAttribute("v-for") || r.hasAttribute("v-if") ? i : (t._replacerAttrs = on(r),
                        ln(e, r),
                        r)) : (e.appendChild(i),
                    e)
            }
        }
        function on(e) {
            return 1 === e.nodeType && e.hasAttributes() ? f(e.attributes) : void 0
        }
        function ln(e, t) {
            for (var n, i, r = e.attributes, a = r.length; a--; )
                n = r[a].name,
                    i = r[a].value,
                    t.hasAttribute(n) || Ha.test(n) ? "class" === n && !$(i) && (i = i.trim()) && i.split(/\s+/).forEach(function(e) {
                        J(t, e)
                    }) : t.setAttribute(n, i)
        }
        function cn(e, t) {
            if (t) {
                for (var n, i, r = e._slotContents = Object.create(null ), a = 0, s = t.children.length; s > a; a++)
                    n = t.children[a],
                    (i = n.getAttribute("slot")) && (r[i] || (r[i] = [])).push(n);
                for (i in r)
                    r[i] = dn(r[i], t);
                if (t.hasChildNodes()) {
                    var o = t.childNodes;
                    if (1 === o.length && 3 === o[0].nodeType && !o[0].data.trim())
                        return;
                    r["default"] = dn(t.childNodes, t)
                }
            }
        }
        function dn(e, t) {
            var n = document.createDocumentFragment();
            e = f(e);
            for (var i = 0, r = e.length; r > i; i++) {
                var a = e[i];
                !ne(a) || a.hasAttribute("v-if") || a.hasAttribute("v-for") || (t.removeChild(a),
                    a = Ke(a, !0)),
                    n.appendChild(a)
            }
            return n
        }
        function un(e) {
            function t() {}
            function i(e, t) {
                var n = new Ge(t,e,null ,{
                    lazy: !0
                });
                return function() {
                    return n.dirty && n.evaluate(),
                    ye.target && n.depend(),
                        n.value
                }
            }
            Object.defineProperty(e.prototype, "$data", {
                get: function() {
                    return this._data
                },
                set: function(e) {
                    e !== this._data && this._setData(e)
                }
            }),
                e.prototype._initState = function() {
                    this._initProps(),
                        this._initMeta(),
                        this._initMethods(),
                        this._initData(),
                        this._initComputed()
                }
                ,
                e.prototype._initProps = function() {
                    var e = this.$options
                        , t = e.el
                        , n = e.props;
                    t = e.el = j(t),
                        this._propsUnlinkFn = t && 1 === t.nodeType && n ? Bt(this, t, n, this._scope) : null
                }
                ,
                e.prototype._initData = function() {
                    var e = this.$options.data
                        , t = this._data = e ? e() : {};
                    g(t) || (t = {});
                    var i, r, a = this._props, s = Object.keys(t);
                    for (i = s.length; i--; )
                        r = s[i],
                        a && n(a, r) || this._proxy(r);
                    Te(t, this)
                }
                ,
                e.prototype._setData = function(e) {
                    e = e || {};
                    var t = this._data;
                    this._data = e;
                    var i, r, a;
                    for (i = Object.keys(t),
                             a = i.length; a--; )
                        r = i[a],
                        r in e || this._unproxy(r);
                    for (i = Object.keys(e),
                             a = i.length; a--; )
                        r = i[a],
                        n(this, r) || this._proxy(r);
                    t.__ob__.removeVm(this),
                        Te(e, this),
                        this._digest()
                }
                ,
                e.prototype._proxy = function(e) {
                    if (!r(e)) {
                        var t = this;
                        Object.defineProperty(t, e, {
                            configurable: !0,
                            enumerable: !0,
                            get: function() {
                                return t._data[e]
                            },
                            set: function(n) {
                                t._data[e] = n
                            }
                        })
                    }
                }
                ,
                e.prototype._unproxy = function(e) {
                    r(e) || delete this[e]
                }
                ,
                e.prototype._digest = function() {
                    for (var e = 0, t = this._watchers.length; t > e; e++)
                        this._watchers[e].update(!0)
                }
                ,
                e.prototype._initComputed = function() {
                    var e = this.$options.computed;
                    if (e)
                        for (var n in e) {
                            var r = e[n]
                                , a = {
                                enumerable: !0,
                                configurable: !0
                            };
                            "function" == typeof r ? (a.get = i(r, this),
                                a.set = t) : (a.get = r.get ? r.cache !== !1 ? i(r.get, this) : h(r.get, this) : t,
                                a.set = r.set ? h(r.set, this) : t),
                                Object.defineProperty(this, n, a)
                        }
                }
                ,
                e.prototype._initMethods = function() {
                    var e = this.$options.methods;
                    if (e)
                        for (var t in e)
                            this[t] = h(e[t], this)
                }
                ,
                e.prototype._initMeta = function() {
                    var e = this.$options._meta;
                    if (e)
                        for (var t in e)
                            Ce(this, t, e[t])
                }
        }
        function pn(e) {
            function t(e, t) {
                for (var n, i, r, a = t.attributes, s = 0, o = a.length; o > s; s++)
                    n = a[s].name,
                    Wa.test(n) && (n = n.replace(Wa, ""),
                        i = a[s].value,
                    Re(i) && (i += ".apply(this, $arguments)"),
                        r = (e._scope || e._context).$eval(i, !0),
                        r._fromParent = !0,
                        e.$on(n.replace(Wa), r))
            }
            function n(e, t, n) {
                if (n) {
                    var r, a, s, o;
                    for (a in n)
                        if (r = n[a],
                                In(r))
                            for (s = 0,
                                     o = r.length; o > s; s++)
                                i(e, t, a, r[s]);
                        else
                            i(e, t, a, r)
                }
            }
            function i(e, t, n, r, a) {
                var s = typeof r;
                if ("function" === s)
                    e[t](n, r, a);
                else if ("string" === s) {
                    var o = e.$options.methods
                        , l = o && o[r];
                    l && e[t](n, l, a)
                } else
                    r && "object" === s && i(e, t, n, r.handler, r)
            }
            function r() {
                this._isAttached || (this._isAttached = !0,
                    this.$children.forEach(a))
            }
            function a(e) {
                !e._isAttached && B(e.$el) && e._callHook("attached")
            }
            function s() {
                this._isAttached && (this._isAttached = !1,
                    this.$children.forEach(o))
            }
            function o(e) {
                e._isAttached && !B(e.$el) && e._callHook("detached")
            }
            e.prototype._initEvents = function() {
                var e = this.$options;
                e._asComponent && t(this, e.el),
                    n(this, "$on", e.events),
                    n(this, "$watch", e.watch)
            }
                ,
                e.prototype._initDOMHooks = function() {
                    this.$on("hook:attached", r),
                        this.$on("hook:detached", s)
                }
                ,
                e.prototype._callHook = function(e) {
                    this.$emit("pre-hook:" + e);
                    var t = this.$options[e];
                    if (t)
                        for (var n = 0, i = t.length; i > n; n++)
                            t[n].call(this);
                    this.$emit("hook:" + e)
                }
        }
        function hn() {}
        function fn(e, t, n, i, r, a) {
            this.vm = t,
                this.el = n,
                this.descriptor = e,
                this.name = e.name,
                this.expression = e.expression,
                this.arg = e.arg,
                this.modifiers = e.modifiers,
                this.filters = e.filters,
                this.literal = this.modifiers && this.modifiers.literal,
                this._locked = !1,
                this._bound = !1,
                this._listeners = null ,
                this._host = i,
                this._scope = r,
                this._frag = a
        }
        function mn(e) {
            e.prototype._updateRef = function(e) {
                var t = this.$options._ref;
                if (t) {
                    var n = (this._scope || this._context).$refs;
                    e ? n[t] === this && (n[t] = null ) : n[t] = this
                }
            }
                ,
                e.prototype._compile = function(e) {
                    var t = this.$options
                        , n = e;
                    if (e = an(e, t),
                            this._initElement(e),
                        1 !== e.nodeType || null === R(e, "v-pre")) {
                        var i = this._context && this._context.$options
                            , r = Rt(e, t, i);
                        cn(this, t._content);
                        var a, s = this.constructor;
                        t._linkerCachable && (a = s.linker,
                        a || (a = s.linker = Pt(e, t)));
                        var o = r(this, e, this._scope)
                            , l = a ? a(this, e) : Pt(e, t)(this, e);
                        this._unlinkFn = function() {
                            o(),
                                l(!0)
                        }
                            ,
                        t.replace && U(n, e),
                            this._isCompiled = !0,
                            this._callHook("compiled")
                    }
                }
                ,
                e.prototype._initElement = function(e) {
                    oe(e) ? (this._isFragment = !0,
                        this.$el = this._fragmentStart = e.firstChild,
                        this._fragmentEnd = e.lastChild,
                    3 === this._fragmentStart.nodeType && (this._fragmentStart.data = this._fragmentEnd.data = ""),
                        this._fragment = e) : this.$el = e,
                        this.$el.__vue__ = this,
                        this._callHook("beforeCompile")
                }
                ,
                e.prototype._bindDir = function(e, t, n, i, r) {
                    this._directives.push(new fn(e,this,t,n,i,r))
                }
                ,
                e.prototype._destroy = function(e, t) {
                    if (this._isBeingDestroyed)
                        return void (t || this._cleanup());
                    var n, i, r = this, a = function() {
                        !n || i || t || r._cleanup()
                    };
                    e && this.$el && (i = !0,
                        this.$remove(function() {
                            i = !1,
                                a()
                        })),
                        this._callHook("beforeDestroy"),
                        this._isBeingDestroyed = !0;
                    var s, o = this.$parent;
                    for (o && !o._isBeingDestroyed && (o.$children.$remove(this),
                        this._updateRef(!0)),
                             s = this.$children.length; s--; )
                        this.$children[s].$destroy();
                    for (this._propsUnlinkFn && this._propsUnlinkFn(),
                         this._unlinkFn && this._unlinkFn(),
                             s = this._watchers.length; s--; )
                        this._watchers[s].teardown();
                    this.$el && (this.$el.__vue__ = null ),
                        n = !0,
                        a()
                }
                ,
                e.prototype._cleanup = function() {
                    this._isDestroyed || (this._frag && this._frag.children.$remove(this),
                    this._data && this._data.__ob__ && this._data.__ob__.removeVm(this),
                        this.$el = this.$parent = this.$root = this.$children = this._watchers = this._context = this._scope = this._directives = null ,
                        this._isDestroyed = !0,
                        this._callHook("destroyed"),
                        this.$off())
                }
        }
        function vn(e) {
            e.prototype._applyFilters = function(e, t, n, i) {
                var r, a, s, o, l, c, d, u, p;
                for (c = 0,
                         d = n.length; d > c; c++)
                    if (r = n[i ? d - c - 1 : c],
                            a = ge(this.$options, "filters", r.name, !0),
                        a && (a = i ? a.write : a.read || a,
                        "function" == typeof a)) {
                        if (s = i ? [e, t] : [e],
                                l = i ? 2 : 1,
                                r.args)
                            for (u = 0,
                                     p = r.args.length; p > u; u++)
                                o = r.args[u],
                                    s[u + l] = o.dynamic ? this.$get(o.value) : o.value;
                        e = a.apply(this, s)
                    }
                return e
            }
                ,
                e.prototype._resolveComponent = function(t, n) {
                    var i;
                    if (i = "function" == typeof t ? t : ge(this.$options, "components", t, !0))
                        if (i.options)
                            n(i);
                        else if (i.resolved)
                            n(i.resolved);
                        else if (i.requested)
                            i.pendingCallbacks.push(n);
                        else {
                            i.requested = !0;
                            var r = i.pendingCallbacks = [n];
                            i.call(this, function(t) {
                                g(t) && (t = e.extend(t)),
                                    i.resolved = t;
                                for (var n = 0, a = r.length; a > n; n++)
                                    r[n](t)
                            }, function(e) {})
                        }
                }
        }
        function gn(e) {
            function n(e) {
                return JSON.parse(JSON.stringify(e))
            }
            e.prototype.$get = function(e, t) {
                var n = Be(e);
                if (n) {
                    if (t) {
                        var i = this;
                        return function() {
                            i.$arguments = f(arguments);
                            var e = n.get.call(i, i);
                            return i.$arguments = null ,
                                e
                        }
                    }
                    try {
                        return n.get.call(this, this)
                    } catch (r) {}
                }
            }
                ,
                e.prototype.$set = function(e, t) {
                    var n = Be(e, !0);
                    n && n.set && n.set.call(this, this, t)
                }
                ,
                e.prototype.$delete = function(e) {
                    t(this._data, e)
                }
                ,
                e.prototype.$watch = function(e, t, n) {
                    var i, r = this;
                    "string" == typeof e && (i = k(e),
                        e = i.expression);
                    var a = new Ge(r,e,t,{
                        deep: n && n.deep,
                        sync: n && n.sync,
                        filters: i && i.filters,
                        user: !n || n.user !== !1
                    });
                    return n && n.immediate && t.call(r, a.value),
                        function() {
                            a.teardown()
                        }
                }
                ,
                e.prototype.$eval = function(e, t) {
                    if (Ga.test(e)) {
                        var n = k(e)
                            , i = this.$get(n.expression, t);
                        return n.filters ? this._applyFilters(i, null , n.filters) : i
                    }
                    return this.$get(e, t)
                }
                ,
                e.prototype.$interpolate = function(e) {
                    var t = $(e)
                        , n = this;
                    return t ? 1 === t.length ? n.$eval(t[0].value) + "" : t.map(function(e) {
                        return e.tag ? n.$eval(e.value) : e.value
                    }).join("") : e
                }
                ,
                e.prototype.$log = function(e) {
                    var t = e ? Me(this._data, e) : this._data;
                    if (t && (t = n(t)),
                            !e) {
                        var i;
                        for (i in this.$options.computed)
                            t[i] = n(this[i]);
                        if (this._props)
                            for (i in this._props)
                                t[i] = n(this[i])
                    }
                    console.log(t)
                }
        }
        function yn(e) {
            function t(e, t, i, r, a, s) {
                t = n(t);
                var o = !B(t)
                    , l = r === !1 || o ? a : s
                    , c = !o && !e._isAttached && !B(e.$el);
                return e._isFragment ? (ae(e._fragmentStart, e._fragmentEnd, function(n) {
                    l(n, t, e)
                }),
                i && i()) : l(e.$el, t, e, i),
                c && e._callHook("attached"),
                    e
            }
            function n(e) {
                return "string" == typeof e ? document.querySelector(e) : e
            }
            function i(e, t, n, i) {
                t.appendChild(e),
                i && i()
            }
            function r(e, t, n, i) {
                z(e, t),
                i && i()
            }
            function a(e, t, n) {
                G(e),
                n && n()
            }
            e.prototype.$nextTick = function(e) {
                Yn(e, this)
            }
                ,
                e.prototype.$appendTo = function(e, n, r) {
                    return t(this, e, n, r, i, P)
                }
                ,
                e.prototype.$prependTo = function(e, t, i) {
                    return e = n(e),
                        e.hasChildNodes() ? this.$before(e.firstChild, t, i) : this.$appendTo(e, t, i),
                        this
                }
                ,
                e.prototype.$before = function(e, n, i) {
                    return t(this, e, n, i, r, I)
                }
                ,
                e.prototype.$after = function(e, t, i) {
                    return e = n(e),
                        e.nextSibling ? this.$before(e.nextSibling, t, i) : this.$appendTo(e.parentNode, t, i),
                        this
                }
                ,
                e.prototype.$remove = function(e, t) {
                    if (!this.$el.parentNode)
                        return e && e();
                    var n = this._isAttached && B(this.$el);
                    n || (t = !1);
                    var i = this
                        , r = function() {
                        n && i._callHook("detached"),
                        e && e()
                    };
                    if (this._isFragment)
                        se(this._fragmentStart, this._fragmentEnd, this, this._fragment, r);
                    else {
                        var s = t === !1 ? a : D;
                        s(this.$el, this, r)
                    }
                    return this
                }
        }
        function wn(e) {
            function t(e, t, i) {
                var r = e.$parent;
                if (r && i && !n.test(t))
                    for (; r; )
                        r._eventsCount[t] = (r._eventsCount[t] || 0) + i,
                            r = r.$parent
            }
            e.prototype.$on = function(e, n) {
                return (this._events[e] || (this._events[e] = [])).push(n),
                    t(this, e, 1),
                    this
            }
                ,
                e.prototype.$once = function(e, t) {
                    function n() {
                        i.$off(e, n),
                            t.apply(this, arguments)
                    }
                    var i = this;
                    return n.fn = t,
                        this.$on(e, n),
                        this
                }
                ,
                e.prototype.$off = function(e, n) {
                    var i;
                    if (!arguments.length) {
                        if (this.$parent)
                            for (e in this._events)
                                i = this._events[e],
                                i && t(this, e, -i.length);
                        return this._events = {},
                            this
                    }
                    if (i = this._events[e],
                            !i)
                        return this;
                    if (1 === arguments.length)
                        return t(this, e, -i.length),
                            this._events[e] = null ,
                            this;
                    for (var r, a = i.length; a--; )
                        if (r = i[a],
                            r === n || r.fn === n) {
                            t(this, e, -1),
                                i.splice(a, 1);
                            break
                        }
                    return this
                }
                ,
                e.prototype.$emit = function(e) {
                    var t = "string" == typeof e;
                    e = t ? e : e.name;
                    var n = this._events[e]
                        , i = t || !n;
                    if (n) {
                        n = n.length > 1 ? f(n) : n;
                        var r = t && n.some(function(e) {
                                return e._fromParent
                            });
                        r && (i = !1);
                        for (var a = f(arguments, 1), s = 0, o = n.length; o > s; s++) {
                            var l = n[s]
                                , c = l.apply(this, a);
                            c !== !0 || r && !l._fromParent || (i = !0)
                        }
                    }
                    return i
                }
                ,
                e.prototype.$broadcast = function(e) {
                    var t = "string" == typeof e;
                    if (e = t ? e : e.name,
                            this._eventsCount[e]) {
                        var n = this.$children
                            , i = f(arguments);
                        t && (i[0] = {
                            name: e,
                            source: this
                        });
                        for (var r = 0, a = n.length; a > r; r++) {
                            var s = n[r]
                                , o = s.$emit.apply(s, i);
                            o && s.$broadcast.apply(s, i)
                        }
                        return this
                    }
                }
                ,
                e.prototype.$dispatch = function(e) {
                    var t = this.$emit.apply(this, arguments);
                    if (t) {
                        var n = this.$parent
                            , i = f(arguments);
                        for (i[0] = {
                            name: e,
                            source: this
                        }; n; )
                            t = n.$emit.apply(n, i),
                                n = t ? n.$parent : null ;
                        return this
                    }
                }
            ;
            var n = /^hook:/
        }
        function bn(e) {
            function t() {
                this._isAttached = !0,
                    this._isReady = !0,
                    this._callHook("ready")
            }
            e.prototype.$mount = function(e) {
                return this._isCompiled ? void 0 : (e = j(e),
                e || (e = document.createElement("div")),
                    this._compile(e),
                    this._initDOMHooks(),
                    B(this.$el) ? (this._callHook("attached"),
                        t.call(this)) : this.$once("hook:attached", t),
                    this)
            }
                ,
                e.prototype.$destroy = function(e, t) {
                    this._destroy(e, t)
                }
                ,
                e.prototype.$compile = function(e, t, n, i) {
                    return Pt(e, this.$options, !0)(this, e, t, n, i)
                }
        }
        function _n(e) {
            this._init(e)
        }
        function xn(e, t, n) {
            return n = n ? parseInt(n, 10) : 0,
                t = s(t),
                "number" == typeof t ? e.slice(n, n + t) : e
        }
        function Tn(e, t, n) {
            if (e = Xa(e),
                null == t)
                return e;
            if ("function" == typeof t)
                return e.filter(t);
            t = ("" + t).toLowerCase();
            for (var i, r, a, s, o = "in" === n ? 3 : 2, l = Array.prototype.concat.apply([], f(arguments, o)), c = [], d = 0, u = e.length; u > d; d++)
                if (i = e[d],
                        a = i && i.$value || i,
                        s = l.length) {
                    for (; s--; )
                        if (r = l[s],
                            "$key" === r && Sn(i.$key, t) || Sn(Me(a, r), t)) {
                            c.push(i);
                            break
                        }
                } else
                    Sn(i, t) && c.push(i);
            return c
        }
        function Cn(e) {
            function t(e, t, n) {
                var r = i[n];
                return r && ("$key" !== r && (v(e) && "$value"in e && (e = e.$value),
                v(t) && "$value"in t && (t = t.$value)),
                    e = v(e) ? Me(e, r) : e,
                    t = v(t) ? Me(t, r) : t),
                    e === t ? 0 : e > t ? a : -a
            }
            var n = null
                , i = void 0;
            e = Xa(e);
            var r = f(arguments, 1)
                , a = r[r.length - 1];
            "number" == typeof a ? (a = 0 > a ? -1 : 1,
                r = r.length > 1 ? r.slice(0, -1) : r) : a = 1;
            var s = r[0];
            return s ? ("function" == typeof s ? n = function(e, t) {
                return s(e, t) * a
            }
                : (i = Array.prototype.concat.apply([], r),
                    n = function(e, r, a) {
                        return a = a || 0,
                            a >= i.length - 1 ? t(e, r, a) : t(e, r, a) || n(e, r, a + 1)
                    }
            ),
                e.slice().sort(n)) : e
        }
        function Sn(e, t) {
            var n;
            if (g(e)) {
                var i = Object.keys(e);
                for (n = i.length; n--; )
                    if (Sn(e[i[n]], t))
                        return !0
            } else if (In(e)) {
                for (n = e.length; n--; )
                    if (Sn(e[n], t))
                        return !0
            } else if (null != e)
                return e.toString().toLowerCase().indexOf(t) > -1
        }
        function kn(n) {
            function i(e) {
                return new Function("return function " + p(e) + " (options) { this._init(options) }")()
            }
            n.options = {
                directives: ma,
                elementDirectives: Va,
                filters: Ka,
                transitions: {},
                components: {},
                partials: {},
                replace: !0
            },
                n.util = Di,
                n.config = xi,
                n.set = e,
                n["delete"] = t,
                n.nextTick = Yn,
                n.compiler = za,
                n.FragmentFactory = rt,
                n.internalDirectives = Pa,
                n.parsers = {
                    path: Qi,
                    text: wi,
                    template: Er,
                    directive: hi,
                    expression: pr
                },
                n.cid = 0;
            var r = 1;
            n.extend = function(e) {
                e = e || {};
                var t = this
                    , n = 0 === t.cid;
                if (n && e._Ctor)
                    return e._Ctor;
                var a = e.name || t.options.name
                    , s = i(a || "VueComponent");
                return s.prototype = Object.create(t.prototype),
                    s.prototype.constructor = s,
                    s.cid = r++,
                    s.options = ve(t.options, e),
                    s["super"] = t,
                    s.extend = t.extend,
                    xi._assetTypes.forEach(function(e) {
                        s[e] = t[e]
                    }),
                a && (s.options.components[a] = s),
                n && (e._Ctor = s),
                    s
            }
                ,
                n.use = function(e) {
                    if (!e.installed) {
                        var t = f(arguments, 1);
                        return t.unshift(this),
                            "function" == typeof e.install ? e.install.apply(e, t) : e.apply(null , t),
                            e.installed = !0,
                            this
                    }
                }
                ,
                n.mixin = function(e) {
                    n.options = ve(n.options, e)
                }
                ,
                xi._assetTypes.forEach(function(e) {
                    n[e] = function(t, i) {
                        return i ? ("component" === e && g(i) && (i.name = t,
                            i = n.extend(i)),
                            this.options[e + "s"][t] = i,
                            i) : this.options[e + "s"][t]
                    }
                }),
                m(n.transition, Ci)
        }
        var An = Object.prototype.hasOwnProperty
            , En = /^\s?(true|false|-?[\d\.]+|'[^']*'|"[^"]*")\s?$/
            , $n = /-(\w)/g
            , Mn = /([a-z\d])([A-Z])/g
            , On = /(?:^|[-_\/])(\w)/g
            , Nn = Object.prototype.toString
            , Pn = "[object Object]"
            , In = Array.isArray
            , Dn = "__proto__"in {}
            , Ln = "undefined" != typeof window && "[object Object]" !== Object.prototype.toString.call(window)
            , jn = Ln && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
            , Bn = Ln && window.navigator.userAgent.toLowerCase()
            , Rn = Bn && Bn.indexOf("msie 9.0") > 0
            , Fn = Bn && Bn.indexOf("android") > 0
            , Hn = Bn && /(iphone|ipad|ipod|ios)/i.test(Bn)
            , zn = Bn && Bn.indexOf("micromessenger") > 0
            , Wn = void 0
            , Gn = void 0
            , qn = void 0
            , Un = void 0;
        if (Ln && !Rn) {
            var Vn = void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend
                , Xn = void 0 === window.onanimationend && void 0 !== window.onwebkitanimationend;
            Wn = Vn ? "WebkitTransition" : "transition",
                Gn = Vn ? "webkitTransitionEnd" : "transitionend",
                qn = Xn ? "WebkitAnimation" : "animation",
                Un = Xn ? "webkitAnimationEnd" : "animationend"
        }
        var Yn = function() {
            function e() {
                i = !1;
                var e = n.slice(0);
                n = [];
                for (var t = 0; t < e.length; t++)
                    e[t]()
            }
            var t, n = [], i = !1;
            if ("undefined" == typeof MutationObserver || zn && Hn) {
                var r = Ln ? window : "undefined" != typeof global ? global : {};
                t = r.setImmediate || setTimeout
            } else {
                var a = 1
                    , s = new MutationObserver(e)
                    , o = document.createTextNode(a);
                s.observe(o, {
                    characterData: !0
                }),
                    t = function() {
                        a = (a + 1) % 2,
                            o.data = a
                    }
            }
            return function(r, a) {
                var s = a ? function() {
                    r.call(a)
                }
                    : r;
                n.push(s),
                i || (i = !0,
                    t(e, 0))
            }
        }()
            , Kn = void 0;
        "undefined" != typeof Set && Set.toString().match(/native code/) ? Kn = Set : (Kn = function() {
                this.set = Object.create(null )
            }
                ,
                Kn.prototype.has = function(e) {
                    return void 0 !== this.set[e]
                }
                ,
                Kn.prototype.add = function(e) {
                    this.set[e] = 1
                }
                ,
                Kn.prototype.clear = function() {
                    this.set = Object.create(null )
                }
        );
        var Jn = T.prototype;
        Jn.put = function(e, t) {
            var n;
            this.size === this.limit && (n = this.shift());
            var i = this.get(e, !0);
            return i || (i = {
                key: e
            },
                this._keymap[e] = i,
                this.tail ? (this.tail.newer = i,
                    i.older = this.tail) : this.head = i,
                this.tail = i,
                this.size++),
                i.value = t,
                n
        }
            ,
            Jn.shift = function() {
                var e = this.head;
                return e && (this.head = this.head.newer,
                    this.head.older = void 0,
                    e.newer = e.older = void 0,
                    this._keymap[e.key] = void 0,
                    this.size--),
                    e
            }
            ,
            Jn.get = function(e, t) {
                var n = this._keymap[e];
                return void 0 !== n ? n === this.tail ? t ? n : n.value : (n.newer && (n === this.head && (this.head = n.newer),
                    n.newer.older = n.older),
                n.older && (n.older.newer = n.newer),
                    n.newer = void 0,
                    n.older = this.tail,
                this.tail && (this.tail.newer = n),
                    this.tail = n,
                    t ? n : n.value) : void 0
            }
        ;
        var Qn, Zn, ei, ti, ni, ii, ri, ai, si, oi, li, ci, di = new T(1e3), ui = /[^\s'"]+|'[^']*'|"[^"]*"/g, pi = /^in$|^-?\d+/, hi = Object.freeze({
            parseDirective: k
        }), fi = /[-.*+?^${}()|[\]\/\\]/g, mi = void 0, vi = void 0, gi = void 0, yi = /[^|]\|[^|]/, wi = Object.freeze({
            compileRegex: E,
            parseText: $,
            tokensToExp: M
        }), bi = ["{{", "}}"], _i = ["{{{", "}}}"], xi = Object.defineProperties({
            debug: !1,
            silent: !1,
            async: !0,
            warnExpressionErrors: !0,
            devtools: !1,
            _delimitersChanged: !0,
            _assetTypes: ["component", "directive", "elementDirective", "filter", "transition", "partial"],
            _propBindingModes: {
                ONE_WAY: 0,
                TWO_WAY: 1,
                ONE_TIME: 2
            },
            _maxUpdateCount: 100
        }, {
            delimiters: {
                get: function() {
                    return bi
                },
                set: function(e) {
                    bi = e,
                        E()
                },
                configurable: !0,
                enumerable: !0
            },
            unsafeDelimiters: {
                get: function() {
                    return _i
                },
                set: function(e) {
                    _i = e,
                        E()
                },
                configurable: !0,
                enumerable: !0
            }
        }), Ti = void 0, Ci = Object.freeze({
            appendWithTransition: P,
            beforeWithTransition: I,
            removeWithTransition: D,
            applyTransition: L
        }), Si = /^v-ref:/, ki = /^(div|p|span|img|a|b|i|br|ul|ol|li|h1|h2|h3|h4|h5|h6|code|pre|table|th|td|tr|form|label|input|select|option|nav|article|section|header|footer)$/i, Ai = /^(slot|partial|component)$/i, Ei = xi.optionMergeStrategies = Object.create(null );
        Ei.data = function(e, t, n) {
            return n ? e || t ? function() {
                var i = "function" == typeof t ? t.call(n) : t
                    , r = "function" == typeof e ? e.call(n) : void 0;
                return i ? ue(i, r) : r
            }
                : void 0 : t ? "function" != typeof t ? e : e ? function() {
                return ue(t.call(this), e.call(this))
            }
                : t : e
        }
            ,
            Ei.el = function(e, t, n) {
                if (n || !t || "function" == typeof t) {
                    var i = t || e;
                    return n && "function" == typeof i ? i.call(n) : i
                }
            }
            ,
            Ei.init = Ei.created = Ei.ready = Ei.attached = Ei.detached = Ei.beforeCompile = Ei.compiled = Ei.beforeDestroy = Ei.destroyed = Ei.activate = function(e, t) {
                return t ? e ? e.concat(t) : In(t) ? t : [t] : e
            }
            ,
            xi._assetTypes.forEach(function(e) {
                Ei[e + "s"] = pe
            }),
            Ei.watch = Ei.events = function(e, t) {
                if (!t)
                    return e;
                if (!e)
                    return t;
                var n = {};
                m(n, e);
                for (var i in t) {
                    var r = n[i]
                        , a = t[i];
                    r && !In(r) && (r = [r]),
                        n[i] = r ? r.concat(a) : [a]
                }
                return n
            }
            ,
            Ei.props = Ei.methods = Ei.computed = function(e, t) {
                if (!t)
                    return e;
                if (!e)
                    return t;
                var n = Object.create(null );
                return m(n, e),
                    m(n, t),
                    n
            }
        ;
        var $i = function(e, t) {
            return void 0 === t ? e : t
        }
            , Mi = 0;
        ye.target = null ,
            ye.prototype.addSub = function(e) {
                this.subs.push(e)
            }
            ,
            ye.prototype.removeSub = function(e) {
                this.subs.$remove(e)
            }
            ,
            ye.prototype.depend = function() {
                ye.target.addDep(this)
            }
            ,
            ye.prototype.notify = function() {
                for (var e = f(this.subs), t = 0, n = e.length; n > t; t++)
                    e[t].update()
            }
        ;
        var Oi = Array.prototype
            , Ni = Object.create(Oi);
        ["push", "pop", "shift", "unshift", "splice", "sort", "reverse"].forEach(function(e) {
            var t = Oi[e];
            y(Ni, e, function() {
                for (var n = arguments.length, i = new Array(n); n--; )
                    i[n] = arguments[n];
                var r, a = t.apply(this, i), s = this.__ob__;
                switch (e) {
                    case "push":
                        r = i;
                        break;
                    case "unshift":
                        r = i;
                        break;
                    case "splice":
                        r = i.slice(2)
                }
                return r && s.observeArray(r),
                    s.dep.notify(),
                    a
            })
        }),
            y(Oi, "$set", function(e, t) {
                return e >= this.length && (this.length = Number(e) + 1),
                    this.splice(e, 1, t)[0]
            }),
            y(Oi, "$remove", function(e) {
                if (this.length) {
                    var t = b(this, e);
                    return t > -1 ? this.splice(t, 1) : void 0
                }
            });
        var Pi = Object.getOwnPropertyNames(Ni)
            , Ii = !0;
        be.prototype.walk = function(e) {
            for (var t = Object.keys(e), n = 0, i = t.length; i > n; n++)
                this.convert(t[n], e[t[n]])
        }
            ,
            be.prototype.observeArray = function(e) {
                for (var t = 0, n = e.length; n > t; t++)
                    Te(e[t])
            }
            ,
            be.prototype.convert = function(e, t) {
                Ce(this.value, e, t)
            }
            ,
            be.prototype.addVm = function(e) {
                (this.vms || (this.vms = [])).push(e)
            }
            ,
            be.prototype.removeVm = function(e) {
                this.vms.$remove(e)
            }
        ;
        var Di = Object.freeze({
            defineReactive: Ce,
            set: e,
            del: t,
            hasOwn: n,
            isLiteral: i,
            isReserved: r,
            _toString: a,
            toNumber: s,
            toBoolean: o,
            stripQuotes: l,
            camelize: c,
            hyphenate: u,
            classify: p,
            bind: h,
            toArray: f,
            extend: m,
            isObject: v,
            isPlainObject: g,
            def: y,
            debounce: w,
            indexOf: b,
            cancellable: _,
            looseEqual: x,
            isArray: In,
            hasProto: Dn,
            inBrowser: Ln,
            devtools: jn,
            isIE9: Rn,
            isAndroid: Fn,
            isIos: Hn,
            isWechat: zn,
            get transitionProp() {
                return Wn
            },
            get transitionEndEvent() {
                return Gn
            },
            get animationProp() {
                return qn
            },
            get animationEndEvent() {
                return Un
            },
            nextTick: Yn,
            get _Set() {
                return Kn
            },
            query: j,
            inDoc: B,
            getAttr: R,
            getBindAttr: F,
            hasBindAttr: H,
            before: z,
            after: W,
            remove: G,
            prepend: q,
            replace: U,
            on: V,
            off: X,
            setClass: K,
            addClass: J,
            removeClass: Q,
            extractContent: Z,
            trimNode: ee,
            isTemplate: ne,
            createAnchor: ie,
            findRef: re,
            mapNodeRange: ae,
            removeNodeRange: se,
            isFragment: oe,
            getOuterHTML: le,
            mergeOptions: ve,
            resolveAsset: ge,
            checkComponentAttr: ce,
            commonTagRE: ki,
            reservedTagRE: Ai,
            warn: Ti
        })
            , Li = 0
            , ji = new T(1e3)
            , Bi = 0
            , Ri = 1
            , Fi = 2
            , Hi = 3
            , zi = 0
            , Wi = 1
            , Gi = 2
            , qi = 3
            , Ui = 4
            , Vi = 5
            , Xi = 6
            , Yi = 7
            , Ki = 8
            , Ji = [];
        Ji[zi] = {
            ws: [zi],
            ident: [qi, Bi],
            "[": [Ui],
            eof: [Yi]
        },
            Ji[Wi] = {
                ws: [Wi],
                ".": [Gi],
                "[": [Ui],
                eof: [Yi]
            },
            Ji[Gi] = {
                ws: [Gi],
                ident: [qi, Bi]
            },
            Ji[qi] = {
                ident: [qi, Bi],
                0: [qi, Bi],
                number: [qi, Bi],
                ws: [Wi, Ri],
                ".": [Gi, Ri],
                "[": [Ui, Ri],
                eof: [Yi, Ri]
            },
            Ji[Ui] = {
                "'": [Vi, Bi],
                '"': [Xi, Bi],
                "[": [Ui, Fi],
                "]": [Wi, Hi],
                eof: Ki,
                "else": [Ui, Bi]
            },
            Ji[Vi] = {
                "'": [Ui, Bi],
                eof: Ki,
                "else": [Vi, Bi]
            },
            Ji[Xi] = {
                '"': [Ui, Bi],
                eof: Ki,
                "else": [Xi, Bi]
            };
        var Qi = Object.freeze({
            parsePath: $e,
            getPath: Me,
            setPath: Oe
        })
            , Zi = new T(1e3)
            , er = "Math,Date,this,true,false,null,undefined,Infinity,NaN,isNaN,isFinite,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,parseInt,parseFloat"
            , tr = new RegExp("^(" + er.replace(/,/g, "\\b|") + "\\b)")
            , nr = "break,case,class,catch,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,let,return,super,switch,throw,try,var,while,with,yield,enum,await,implements,package,protected,static,interface,private,public"
            , ir = new RegExp("^(" + nr.replace(/,/g, "\\b|") + "\\b)")
            , rr = /\s/g
            , ar = /\n/g
            , sr = /[\{,]\s*[\w\$_]+\s*:|('(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`)|new |typeof |void /g
            , or = /"(\d+)"/g
            , lr = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['.*?'\]|\[".*?"\]|\[\d+\]|\[[A-Za-z_$][\w$]*\])*$/
            , cr = /[^\w$\.](?:[A-Za-z_$][\w$]*)/g
            , dr = /^(?:true|false)$/
            , ur = []
            , pr = Object.freeze({
            parseExpression: Be,
            isSimplePath: Re
        })
            , hr = []
            , fr = []
            , mr = {}
            , vr = {}
            , gr = !1
            , yr = 0;
        Ge.prototype.get = function() {
            this.beforeGet();
            var e, t = this.scope || this.vm;
            try {
                e = this.getter.call(t, t)
            } catch (n) {}
            return this.deep && qe(e),
            this.preProcess && (e = this.preProcess(e)),
            this.filters && (e = t._applyFilters(e, null , this.filters, !1)),
            this.postProcess && (e = this.postProcess(e)),
                this.afterGet(),
                e
        }
            ,
            Ge.prototype.set = function(e) {
                var t = this.scope || this.vm;
                this.filters && (e = t._applyFilters(e, this.value, this.filters, !0));
                try {
                    this.setter.call(t, t, e)
                } catch (n) {}
                var i = t.$forContext;
                if (i && i.alias === this.expression) {
                    if (i.filters)
                        return;
                    i._withLock(function() {
                        t.$key ? i.rawValue[t.$key] = e : i.rawValue.$set(t.$index, e)
                    })
                }
            }
            ,
            Ge.prototype.beforeGet = function() {
                ye.target = this
            }
            ,
            Ge.prototype.addDep = function(e) {
                var t = e.id;
                this.newDepIds.has(t) || (this.newDepIds.add(t),
                    this.newDeps.push(e),
                this.depIds.has(t) || e.addSub(this))
            }
            ,
            Ge.prototype.afterGet = function() {
                ye.target = null ;
                for (var e = this.deps.length; e--; ) {
                    var t = this.deps[e];
                    this.newDepIds.has(t.id) || t.removeSub(this);
                }
                var n = this.depIds;
                this.depIds = this.newDepIds,
                    this.newDepIds = n,
                    this.newDepIds.clear(),
                    n = this.deps,
                    this.deps = this.newDeps,
                    this.newDeps = n,
                    this.newDeps.length = 0
            }
            ,
            Ge.prototype.update = function(e) {
                this.lazy ? this.dirty = !0 : this.sync || !xi.async ? this.run() : (this.shallow = this.queued ? e ? this.shallow : !1 : !!e,
                    this.queued = !0,
                    We(this))
            }
            ,
            Ge.prototype.run = function() {
                if (this.active) {
                    var e = this.get();
                    if (e !== this.value || (v(e) || this.deep) && !this.shallow) {
                        var t = this.value;
                        this.value = e,
                            this.prevError,
                            this.cb.call(this.vm, e, t)
                    }
                    this.queued = this.shallow = !1
                }
            }
            ,
            Ge.prototype.evaluate = function() {
                var e = ye.target;
                this.value = this.get(),
                    this.dirty = !1,
                    ye.target = e
            }
            ,
            Ge.prototype.depend = function() {
                for (var e = this.deps.length; e--; )
                    this.deps[e].depend()
            }
            ,
            Ge.prototype.teardown = function() {
                if (this.active) {
                    this.vm._isBeingDestroyed || this.vm._vForRemoving || this.vm._watchers.$remove(this);
                    for (var e = this.deps.length; e--; )
                        this.deps[e].removeSub(this);
                    this.active = !1,
                        this.vm = this.cb = this.value = null
                }
            }
        ;
        var wr = new Kn
            , br = {
            bind: function() {
                this.attr = 3 === this.el.nodeType ? "data" : "textContent"
            },
            update: function(e) {
                this.el[this.attr] = a(e)
            }
        }
            , _r = new T(1e3)
            , xr = new T(1e3)
            , Tr = {
            efault: [0, "", ""],
            legend: [1, "<fieldset>", "</fieldset>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"]
        };
        Tr.td = Tr.th = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            Tr.option = Tr.optgroup = [1, '<select multiple="multiple">', "</select>"],
            Tr.thead = Tr.tbody = Tr.colgroup = Tr.caption = Tr.tfoot = [1, "<table>", "</table>"],
            Tr.g = Tr.defs = Tr.symbol = Tr.use = Tr.image = Tr.text = Tr.circle = Tr.ellipse = Tr.line = Tr.path = Tr.polygon = Tr.polyline = Tr.rect = [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events"version="1.1">', "</svg>"];
        var Cr = /<([\w:-]+)/
            , Sr = /&#?\w+?;/
            , kr = function() {
            if (Ln) {
                var e = document.createElement("div");
                return e.innerHTML = "<template>1</template>",
                    !e.cloneNode(!0).firstChild.innerHTML
            }
            return !1
        }()
            , Ar = function() {
            if (Ln) {
                var e = document.createElement("textarea");
                return e.placeholder = "t",
                "t" === e.cloneNode(!0).value
            }
            return !1
        }()
            , Er = Object.freeze({
            cloneNode: Ye,
            parseTemplate: Ke
        })
            , $r = {
            bind: function() {
                8 === this.el.nodeType && (this.nodes = [],
                    this.anchor = ie("v-html"),
                    U(this.el, this.anchor))
            },
            update: function(e) {
                e = a(e),
                    this.nodes ? this.swap(e) : this.el.innerHTML = e
            },
            swap: function(e) {
                for (var t = this.nodes.length; t--; )
                    G(this.nodes[t]);
                var n = Ke(e, !0, !0);
                this.nodes = f(n.childNodes),
                    z(n, this.anchor)
            }
        };
        Je.prototype.callHook = function(e) {
            var t, n;
            for (t = 0,
                     n = this.childFrags.length; n > t; t++)
                this.childFrags[t].callHook(e);
            for (t = 0,
                     n = this.children.length; n > t; t++)
                e(this.children[t])
        }
            ,
            Je.prototype.beforeRemove = function() {
                var e, t;
                for (e = 0,
                         t = this.childFrags.length; t > e; e++)
                    this.childFrags[e].beforeRemove(!1);
                for (e = 0,
                         t = this.children.length; t > e; e++)
                    this.children[e].$destroy(!1, !0);
                var n = this.unlink.dirs;
                for (e = 0,
                         t = n.length; t > e; e++)
                    n[e]._watcher && n[e]._watcher.teardown()
            }
            ,
            Je.prototype.destroy = function() {
                this.parentFrag && this.parentFrag.childFrags.$remove(this),
                    this.node.__v_frag = null ,
                    this.unlink()
            }
        ;
        var Mr = new T(5e3);
        rt.prototype.create = function(e, t, n) {
            var i = Ye(this.template);
            return new Je(this.linker,this.vm,i,e,t,n)
        }
        ;
        var Or = 700
            , Nr = 800
            , Pr = 850
            , Ir = 1100
            , Dr = 1500
            , Lr = 1500
            , jr = 1750
            , Br = 2100
            , Rr = 2200
            , Fr = 2300
            , Hr = 0
            , zr = {
            priority: Rr,
            terminal: !0,
            params: ["track-by", "stagger", "enter-stagger", "leave-stagger"],
            bind: function() {
                var e = this.expression.match(/(.*) (?:in|of) (.*)/);
                if (e) {
                    var t = e[1].match(/\((.*),(.*)\)/);
                    t ? (this.iterator = t[1].trim(),
                        this.alias = t[2].trim()) : this.alias = e[1].trim(),
                        this.expression = e[2]
                }
                if (this.alias) {
                    this.id = "__v-for__" + ++Hr;
                    var n = this.el.tagName;
                    this.isOption = ("OPTION" === n || "OPTGROUP" === n) && "SELECT" === this.el.parentNode.tagName,
                        this.start = ie("v-for-start"),
                        this.end = ie("v-for-end"),
                        U(this.el, this.end),
                        z(this.start, this.end),
                        this.cache = Object.create(null ),
                        this.factory = new rt(this.vm,this.el)
                }
            },
            update: function(e) {
                this.diff(e),
                    this.updateRef(),
                    this.updateModel()
            },
            diff: function(e) {
                var t, i, r, a, s, o, l = e[0], c = this.fromObject = v(l) && n(l, "$key") && n(l, "$value"), d = this.params.trackBy, u = this.frags, p = this.frags = new Array(e.length), h = this.alias, f = this.iterator, m = this.start, g = this.end, y = B(m), w = !u;
                for (t = 0,
                         i = e.length; i > t; t++)
                    l = e[t],
                        a = c ? l.$key : null ,
                        s = c ? l.$value : l,
                        o = !v(s),
                        r = !w && this.getCachedFrag(s, t, a),
                        r ? (r.reused = !0,
                            r.scope.$index = t,
                        a && (r.scope.$key = a),
                        f && (r.scope[f] = null !== a ? a : t),
                        (d || c || o) && we(function() {
                            r.scope[h] = s
                        })) : (r = this.create(s, h, t, a),
                            r.fresh = !w),
                        p[t] = r,
                    w && r.before(g);
                if (!w) {
                    var b = 0
                        , _ = u.length - p.length;
                    for (this.vm._vForRemoving = !0,
                             t = 0,
                             i = u.length; i > t; t++)
                        r = u[t],
                        r.reused || (this.deleteCachedFrag(r),
                            this.remove(r, b++, _, y));
                    this.vm._vForRemoving = !1,
                    b && (this.vm._watchers = this.vm._watchers.filter(function(e) {
                        return e.active
                    }));
                    var x, T, C, S = 0;
                    for (t = 0,
                             i = p.length; i > t; t++)
                        r = p[t],
                            x = p[t - 1],
                            T = x ? x.staggerCb ? x.staggerAnchor : x.end || x.node : m,
                            r.reused && !r.staggerCb ? (C = at(r, m, this.id),
                            C === x || C && at(C, m, this.id) === x || this.move(r, T)) : this.insert(r, S++, T, y),
                            r.reused = r.fresh = !1
                }
            },
            create: function(e, t, n, i) {
                var r = this._host
                    , a = this._scope || this.vm
                    , s = Object.create(a);
                s.$refs = Object.create(a.$refs),
                    s.$els = Object.create(a.$els),
                    s.$parent = a,
                    s.$forContext = this,
                    we(function() {
                        Ce(s, t, e)
                    }),
                    Ce(s, "$index", n),
                    i ? Ce(s, "$key", i) : s.$key && y(s, "$key", null ),
                this.iterator && Ce(s, this.iterator, null !== i ? i : n);
                var o = this.factory.create(r, s, this._frag);
                return o.forId = this.id,
                    this.cacheFrag(e, o, n, i),
                    o
            },
            updateRef: function() {
                var e = this.descriptor.ref;
                if (e) {
                    var t, n = (this._scope || this.vm).$refs;
                    this.fromObject ? (t = {},
                        this.frags.forEach(function(e) {
                            t[e.scope.$key] = st(e)
                        })) : t = this.frags.map(st),
                        n[e] = t
                }
            },
            updateModel: function() {
                if (this.isOption) {
                    var e = this.start.parentNode
                        , t = e && e.__v_model;
                    t && t.forceUpdate()
                }
            },
            insert: function(e, t, n, i) {
                e.staggerCb && (e.staggerCb.cancel(),
                    e.staggerCb = null );
                var r = this.getStagger(e, t, null , "enter");
                if (i && r) {
                    var a = e.staggerAnchor;
                    a || (a = e.staggerAnchor = ie("stagger-anchor"),
                        a.__v_frag = e),
                        W(a, n);
                    var s = e.staggerCb = _(function() {
                        e.staggerCb = null ,
                            e.before(a),
                            G(a)
                    });
                    setTimeout(s, r)
                } else {
                    var o = n.nextSibling;
                    o || (W(this.end, n),
                        o = this.end),
                        e.before(o)
                }
            },
            remove: function(e, t, n, i) {
                if (e.staggerCb)
                    return e.staggerCb.cancel(),
                        void (e.staggerCb = null );
                var r = this.getStagger(e, t, n, "leave");
                if (i && r) {
                    var a = e.staggerCb = _(function() {
                        e.staggerCb = null ,
                            e.remove()
                    });
                    setTimeout(a, r)
                } else
                    e.remove()
            },
            move: function(e, t) {
                t.nextSibling || this.end.parentNode.appendChild(this.end),
                    e.before(t.nextSibling, !1)
            },
            cacheFrag: function(e, t, i, r) {
                var a, s = this.params.trackBy, o = this.cache, l = !v(e);
                r || s || l ? (a = lt(i, r, e, s),
                o[a] || (o[a] = t)) : (a = this.id,
                    n(e, a) ? null === e[a] && (e[a] = t) : Object.isExtensible(e) && y(e, a, t)),
                    t.raw = e
            },
            getCachedFrag: function(e, t, n) {
                var i, r = this.params.trackBy, a = !v(e);
                if (n || r || a) {
                    var s = lt(t, n, e, r);
                    i = this.cache[s]
                } else
                    i = e[this.id];
                return i && (i.reused || i.fresh),
                    i
            },
            deleteCachedFrag: function(e) {
                var t = e.raw
                    , i = this.params.trackBy
                    , r = e.scope
                    , a = r.$index
                    , s = n(r, "$key") && r.$key
                    , o = !v(t);
                if (i || s || o) {
                    var l = lt(a, s, t, i);
                    this.cache[l] = null
                } else
                    t[this.id] = null ,
                        e.raw = null
            },
            getStagger: function(e, t, n, i) {
                i += "Stagger";
                var r = e.node.__v_trans
                    , a = r && r.hooks
                    , s = a && (a[i] || a.stagger);
                return s ? s.call(e, t, n) : t * parseInt(this.params[i] || this.params.stagger, 10)
            },
            _preProcess: function(e) {
                return this.rawValue = e,
                    e
            },
            _postProcess: function(e) {
                if (In(e))
                    return e;
                if (g(e)) {
                    for (var t, n = Object.keys(e), i = n.length, r = new Array(i); i--; )
                        t = n[i],
                            r[i] = {
                                $key: t,
                                $value: e[t]
                            };
                    return r
                }
                return "number" != typeof e || isNaN(e) || (e = ot(e)),
                e || []
            },
            unbind: function() {
                if (this.descriptor.ref && ((this._scope || this.vm).$refs[this.descriptor.ref] = null ),
                        this.frags)
                    for (var e, t = this.frags.length; t--; )
                        e = this.frags[t],
                            this.deleteCachedFrag(e),
                            e.destroy()
            }
        }
            , Wr = {
            priority: Br,
            terminal: !0,
            bind: function() {
                var e = this.el;
                if (e.__vue__)
                    this.invalid = !0;
                else {
                    var t = e.nextElementSibling;
                    t && null !== R(t, "v-else") && (G(t),
                        this.elseEl = t),
                        this.anchor = ie("v-if"),
                        U(e, this.anchor)
                }
            },
            update: function(e) {
                this.invalid || (e ? this.frag || this.insert() : this.remove())
            },
            insert: function() {
                this.elseFrag && (this.elseFrag.remove(),
                    this.elseFrag = null ),
                this.factory || (this.factory = new rt(this.vm,this.el)),
                    this.frag = this.factory.create(this._host, this._scope, this._frag),
                    this.frag.before(this.anchor)
            },
            remove: function() {
                this.frag && (this.frag.remove(),
                    this.frag = null ),
                this.elseEl && !this.elseFrag && (this.elseFactory || (this.elseFactory = new rt(this.elseEl._context || this.vm,this.elseEl)),
                    this.elseFrag = this.elseFactory.create(this._host, this._scope, this._frag),
                    this.elseFrag.before(this.anchor))
            },
            unbind: function() {
                this.frag && this.frag.destroy(),
                this.elseFrag && this.elseFrag.destroy()
            }
        }
            , Gr = {
            bind: function() {
                var e = this.el.nextElementSibling;
                e && null !== R(e, "v-else") && (this.elseEl = e)
            },
            update: function(e) {
                this.apply(this.el, e),
                this.elseEl && this.apply(this.elseEl, !e)
            },
            apply: function(e, t) {
                function n() {
                    e.style.display = t ? "" : "none"
                }
                B(e) ? L(e, t ? 1 : -1, n, this.vm) : n()
            }
        }
            , qr = {
            bind: function() {
                var e = this
                    , t = this.el
                    , n = "range" === t.type
                    , i = this.params.lazy
                    , r = this.params.number
                    , a = this.params.debounce
                    , o = !1;
                if (Fn || n || (this.on("compositionstart", function() {
                        o = !0
                    }),
                        this.on("compositionend", function() {
                            o = !1,
                            i || e.listener()
                        })),
                        this.focused = !1,
                    n || i || (this.on("focus", function() {
                        e.focused = !0
                    }),
                        this.on("blur", function() {
                            e.focused = !1,
                            e._frag && !e._frag.inserted || e.rawListener()
                        })),
                        this.listener = this.rawListener = function() {
                            if (!o && e._bound) {
                                var i = r || n ? s(t.value) : t.value;
                                e.set(i),
                                    Yn(function() {
                                        e._bound && !e.focused && e.update(e._watcher.value)
                                    })
                            }
                        }
                        ,
                    a && (this.listener = w(this.listener, a)),
                        this.hasjQuery = "function" == typeof jQuery,
                        this.hasjQuery) {
                    var l = jQuery.fn.on ? "on" : "bind";
                    jQuery(t)[l]("change", this.rawListener),
                    i || jQuery(t)[l]("input", this.listener)
                } else
                    this.on("change", this.rawListener),
                    i || this.on("input", this.listener);
                !i && Rn && (this.on("cut", function() {
                    Yn(e.listener)
                }),
                    this.on("keyup", function(t) {
                        46 !== t.keyCode && 8 !== t.keyCode || e.listener()
                    })),
                (t.hasAttribute("value") || "TEXTAREA" === t.tagName && t.value.trim()) && (this.afterBind = this.listener)
            },
            update: function(e) {
                this.el.value = a(e)
            },
            unbind: function() {
                var e = this.el;
                if (this.hasjQuery) {
                    var t = jQuery.fn.off ? "off" : "unbind";
                    jQuery(e)[t]("change", this.listener),
                        jQuery(e)[t]("input", this.listener)
                }
            }
        }
            , Ur = {
            bind: function() {
                var e = this
                    , t = this.el;
                this.getValue = function() {
                    if (t.hasOwnProperty("_value"))
                        return t._value;
                    var n = t.value;
                    return e.params.number && (n = s(n)),
                        n
                }
                    ,
                    this.listener = function() {
                        e.set(e.getValue())
                    }
                    ,
                    this.on("change", this.listener),
                t.hasAttribute("checked") && (this.afterBind = this.listener)
            },
            update: function(e) {
                this.el.checked = x(e, this.getValue())
            }
        }
            , Vr = {
            bind: function() {
                var e = this
                    , t = this.el;
                this.forceUpdate = function() {
                    e._watcher && e.update(e._watcher.get())
                }
                ;
                var n = this.multiple = t.hasAttribute("multiple");
                this.listener = function() {
                    var i = ct(t, n);
                    i = e.params.number ? In(i) ? i.map(s) : s(i) : i,
                        e.set(i)
                }
                    ,
                    this.on("change", this.listener);
                var i = ct(t, n, !0);
                (n && i.length || !n && null !== i) && (this.afterBind = this.listener),
                    this.vm.$on("hook:attached", this.forceUpdate)
            },
            update: function(e) {
                var t = this.el;
                t.selectedIndex = -1;
                for (var n, i, r = this.multiple && In(e), a = t.options, s = a.length; s--; )
                    n = a[s],
                        i = n.hasOwnProperty("_value") ? n._value : n.value,
                        n.selected = r ? dt(e, i) > -1 : x(e, i)
            },
            unbind: function() {
                this.vm.$off("hook:attached", this.forceUpdate)
            }
        }
            , Xr = {
            bind: function() {
                function e() {
                    var e = n.checked;
                    return e && n.hasOwnProperty("_trueValue") ? n._trueValue : !e && n.hasOwnProperty("_falseValue") ? n._falseValue : e
                }
                var t = this
                    , n = this.el;
                this.getValue = function() {
                    return n.hasOwnProperty("_value") ? n._value : t.params.number ? s(n.value) : n.value
                }
                    ,
                    this.listener = function() {
                        var i = t._watcher.value;
                        if (In(i)) {
                            var r = t.getValue();
                            n.checked ? b(i, r) < 0 && i.push(r) : i.$remove(r)
                        } else
                            t.set(e())
                    }
                    ,
                    this.on("change", this.listener),
                n.hasAttribute("checked") && (this.afterBind = this.listener)
            },
            update: function(e) {
                var t = this.el;
                In(e) ? t.checked = b(e, this.getValue()) > -1 : t.hasOwnProperty("_trueValue") ? t.checked = x(e, t._trueValue) : t.checked = !!e
            }
        }
            , Yr = {
            text: qr,
            radio: Ur,
            select: Vr,
            checkbox: Xr
        }
            , Kr = {
            priority: Nr,
            twoWay: !0,
            handlers: Yr,
            params: ["lazy", "number", "debounce"],
            bind: function() {
                this.checkFilters(),
                this.hasRead && !this.hasWrite;
                var e, t = this.el, n = t.tagName;
                if ("INPUT" === n)
                    e = Yr[t.type] || Yr.text;
                else if ("SELECT" === n)
                    e = Yr.select;
                else {
                    if ("TEXTAREA" !== n)
                        return;
                    e = Yr.text
                }
                t.__v_model = this,
                    e.bind.call(this),
                    this.update = e.update,
                    this._unbind = e.unbind
            },
            checkFilters: function() {
                var e = this.filters;
                if (e)
                    for (var t = e.length; t--; ) {
                        var n = ge(this.vm.$options, "filters", e[t].name);
                        ("function" == typeof n || n.read) && (this.hasRead = !0),
                        n.write && (this.hasWrite = !0)
                    }
            },
            unbind: function() {
                this.el.__v_model = null ,
                this._unbind && this._unbind()
            }
        }
            , Jr = {
            esc: 27,
            tab: 9,
            enter: 13,
            space: 32,
            "delete": [8, 46],
            up: 38,
            left: 37,
            right: 39,
            down: 40
        }
            , Qr = {
            priority: Or,
            acceptStatement: !0,
            keyCodes: Jr,
            bind: function() {
                if ("IFRAME" === this.el.tagName && "load" !== this.arg) {
                    var e = this;
                    this.iframeBind = function() {
                        V(e.el.contentWindow, e.arg, e.handler, e.modifiers.capture)
                    }
                        ,
                        this.on("load", this.iframeBind)
                }
            },
            update: function(e) {
                if (this.descriptor.raw || (e = function() {}
                    ),
                    "function" == typeof e) {
                    this.modifiers.stop && (e = pt(e)),
                    this.modifiers.prevent && (e = ht(e)),
                    this.modifiers.self && (e = ft(e));
                    var t = Object.keys(this.modifiers).filter(function(e) {
                        return "stop" !== e && "prevent" !== e && "self" !== e && "capture" !== e
                    });
                    t.length && (e = ut(e, t)),
                        this.reset(),
                        this.handler = e,
                        this.iframeBind ? this.iframeBind() : V(this.el, this.arg, this.handler, this.modifiers.capture)
                }
            },
            reset: function() {
                var e = this.iframeBind ? this.el.contentWindow : this.el;
                this.handler && X(e, this.arg, this.handler)
            },
            unbind: function() {
                this.reset()
            }
        }
            , Zr = ["-webkit-", "-moz-", "-ms-"]
            , ea = ["Webkit", "Moz", "ms"]
            , ta = /!important;?$/
            , na = Object.create(null )
            , ia = null
            , ra = {
            deep: !0,
            update: function(e) {
                "string" == typeof e ? this.el.style.cssText = e : In(e) ? this.handleObject(e.reduce(m, {})) : this.handleObject(e || {})
            },
            handleObject: function(e) {
                var t, n, i = this.cache || (this.cache = {});
                for (t in i)
                    t in e || (this.handleSingle(t, null ),
                        delete i[t]);
                for (t in e)
                    n = e[t],
                    n !== i[t] && (i[t] = n,
                        this.handleSingle(t, n))
            },
            handleSingle: function(e, t) {
                if (e = mt(e))
                    if (null != t && (t += ""),
                            t) {
                        var n = ta.test(t) ? "important" : "";
                        n ? (t = t.replace(ta, "").trim(),
                            this.el.style.setProperty(e.kebab, t, n)) : this.el.style[e.camel] = t
                    } else
                        this.el.style[e.camel] = ""
            }
        }
            , aa = "http://www.w3.org/1999/xlink"
            , sa = /^xlink:/
            , oa = /^v-|^:|^@|^(?:is|transition|transition-mode|debounce|track-by|stagger|enter-stagger|leave-stagger)$/
            , la = /^(?:value|checked|selected|muted)$/
            , ca = /^(?:draggable|contenteditable|spellcheck)$/
            , da = {
            value: "_value",
            "true-value": "_trueValue",
            "false-value": "_falseValue"
        }
            , ua = {
            priority: Pr,
            bind: function() {
                var e = this.arg
                    , t = this.el.tagName;
                e || (this.deep = !0);
                var n = this.descriptor
                    , i = n.interp;
                i && (n.hasOneTime && (this.expression = M(i, this._scope || this.vm)),
                (oa.test(e) || "name" === e && ("PARTIAL" === t || "SLOT" === t)) && (this.el.removeAttribute(e),
                    this.invalid = !0))
            },
            update: function(e) {
                if (!this.invalid) {
                    var t = this.arg;
                    this.arg ? this.handleSingle(t, e) : this.handleObject(e || {})
                }
            },
            handleObject: ra.handleObject,
            handleSingle: function(e, t) {
                var n = this.el
                    , i = this.descriptor.interp;
                if (this.modifiers.camel && (e = c(e)),
                    !i && la.test(e) && e in n) {
                    var r = "value" === e && null == t ? "" : t;
                    n[e] !== r && (n[e] = r)
                }
                var a = da[e];
                if (!i && a) {
                    n[a] = t;
                    var s = n.__v_model;
                    s && s.listener()
                }
                return "value" === e && "TEXTAREA" === n.tagName ? void n.removeAttribute(e) : void (ca.test(e) ? n.setAttribute(e, t ? "true" : "false") : null != t && t !== !1 ? "class" === e ? (n.__v_trans && (t += " " + n.__v_trans.id + "-transition"),
                    K(n, t)) : sa.test(e) ? n.setAttributeNS(aa, e, t === !0 ? "" : t) : n.setAttribute(e, t === !0 ? "" : t) : n.removeAttribute(e))
            }
        }
            , pa = {
            priority: Dr,
            bind: function() {
                if (this.arg) {
                    var e = this.id = c(this.arg)
                        , t = (this._scope || this.vm).$els;
                    n(t, e) ? t[e] = this.el : Ce(t, e, this.el)
                }
            },
            unbind: function() {
                var e = (this._scope || this.vm).$els;
                e[this.id] === this.el && (e[this.id] = null )
            }
        }
            , ha = {
            bind: function() {}
        }
            , fa = {
            bind: function() {
                var e = this.el;
                this.vm.$once("pre-hook:compiled", function() {
                    e.removeAttribute("v-cloak")
                })
            }
        }
            , ma = {
            text: br,
            html: $r,
            "for": zr,
            "if": Wr,
            show: Gr,
            model: Kr,
            on: Qr,
            bind: ua,
            el: pa,
            ref: ha,
            cloak: fa
        }
            , va = {
            deep: !0,
            update: function(e) {
                e ? "string" == typeof e ? this.setClass(e.trim().split(/\s+/)) : this.setClass(gt(e)) : this.cleanup()
            },
            setClass: function(e) {
                this.cleanup(e);
                for (var t = 0, n = e.length; n > t; t++) {
                    var i = e[t];
                    i && yt(this.el, i, J)
                }
                this.prevKeys = e
            },
            cleanup: function(e) {
                var t = this.prevKeys;
                if (t)
                    for (var n = t.length; n--; ) {
                        var i = t[n];
                        (!e || e.indexOf(i) < 0) && yt(this.el, i, Q)
                    }
            }
        }
            , ga = {
            priority: Lr,
            params: ["keep-alive", "transition-mode", "inline-template"],
            bind: function() {
                this.el.__vue__ || (this.keepAlive = this.params.keepAlive,
                this.keepAlive && (this.cache = {}),
                this.params.inlineTemplate && (this.inlineTemplate = Z(this.el, !0)),
                    this.pendingComponentCb = this.Component = null ,
                    this.pendingRemovals = 0,
                    this.pendingRemovalCb = null ,
                    this.anchor = ie("v-component"),
                    U(this.el, this.anchor),
                    this.el.removeAttribute("is"),
                    this.el.removeAttribute(":is"),
                this.descriptor.ref && this.el.removeAttribute("v-ref:" + u(this.descriptor.ref)),
                this.literal && this.setComponent(this.expression))
            },
            update: function(e) {
                this.literal || this.setComponent(e)
            },
            setComponent: function(e, t) {
                if (this.invalidatePending(),
                        e) {
                    var n = this;
                    this.resolveComponent(e, function() {
                        n.mountComponent(t)
                    })
                } else
                    this.unbuild(!0),
                        this.remove(this.childVM, t),
                        this.childVM = null
            },
            resolveComponent: function(e, t) {
                var n = this;
                this.pendingComponentCb = _(function(i) {
                    n.ComponentName = i.options.name || ("string" == typeof e ? e : null ),
                        n.Component = i,
                        t()
                }),
                    this.vm._resolveComponent(e, this.pendingComponentCb)
            },
            mountComponent: function(e) {
                this.unbuild(!0);
                var t = this
                    , n = this.Component.options.activate
                    , i = this.getCached()
                    , r = this.build();
                n && !i ? (this.waitingFor = r,
                    wt(n, r, function() {
                        t.waitingFor === r && (t.waitingFor = null ,
                            t.transition(r, e))
                    })) : (i && r._updateRef(),
                    this.transition(r, e))
            },
            invalidatePending: function() {
                this.pendingComponentCb && (this.pendingComponentCb.cancel(),
                    this.pendingComponentCb = null )
            },
            build: function(e) {
                var t = this.getCached();
                if (t)
                    return t;
                if (this.Component) {
                    var n = {
                        name: this.ComponentName,
                        el: Ye(this.el),
                        template: this.inlineTemplate,
                        parent: this._host || this.vm,
                        _linkerCachable: !this.inlineTemplate,
                        _ref: this.descriptor.ref,
                        _asComponent: !0,
                        _isRouterView: this._isRouterView,
                        _context: this.vm,
                        _scope: this._scope,
                        _frag: this._frag
                    };
                    e && m(n, e);
                    var i = new this.Component(n);
                    return this.keepAlive && (this.cache[this.Component.cid] = i),
                        i
                }
            },
            getCached: function() {
                return this.keepAlive && this.cache[this.Component.cid]
            },
            unbuild: function(e) {
                this.waitingFor && (this.keepAlive || this.waitingFor.$destroy(),
                    this.waitingFor = null );
                var t = this.childVM;
                return !t || this.keepAlive ? void (t && (t._inactive = !0,
                    t._updateRef(!0))) : void t.$destroy(!1, e)
            },
            remove: function(e, t) {
                var n = this.keepAlive;
                if (e) {
                    this.pendingRemovals++,
                        this.pendingRemovalCb = t;
                    var i = this;
                    e.$remove(function() {
                        i.pendingRemovals--,
                        n || e._cleanup(),
                        !i.pendingRemovals && i.pendingRemovalCb && (i.pendingRemovalCb(),
                            i.pendingRemovalCb = null )
                    })
                } else
                    t && t()
            },
            transition: function(e, t) {
                var n = this
                    , i = this.childVM;
                switch (i && (i._inactive = !0),
                    e._inactive = !1,
                    this.childVM = e,
                    n.params.transitionMode) {
                    case "in-out":
                        e.$before(n.anchor, function() {
                            n.remove(i, t)
                        });
                        break;
                    case "out-in":
                        n.remove(i, function() {
                            e.$before(n.anchor, t)
                        });
                        break;
                    default:
                        n.remove(i),
                            e.$before(n.anchor, t)
                }
            },
            unbind: function() {
                if (this.invalidatePending(),
                        this.unbuild(),
                        this.cache) {
                    for (var e in this.cache)
                        this.cache[e].$destroy();
                    this.cache = null
                }
            }
        }
            , ya = xi._propBindingModes
            , wa = {}
            , ba = /^[$_a-zA-Z]+[\w$]*$/
            , _a = xi._propBindingModes
            , xa = {
            bind: function() {
                var e = this.vm
                    , t = e._context
                    , n = this.descriptor.prop
                    , i = n.path
                    , r = n.parentPath
                    , a = n.mode === _a.TWO_WAY
                    , s = this.parentWatcher = new Ge(t,r,function(t) {
                        Ct(e, n, t)
                    }
                    ,{
                        twoWay: a,
                        filters: n.filters,
                        scope: this._scope
                    });
                if (Tt(e, n, s.value),
                        a) {
                    var o = this;
                    e.$once("pre-hook:created", function() {
                        o.childWatcher = new Ge(e,i,function(e) {
                                s.set(e)
                            }
                            ,{
                                sync: !0
                            })
                    })
                }
            },
            unbind: function() {
                this.parentWatcher.teardown(),
                this.childWatcher && this.childWatcher.teardown()
            }
        }
            , Ta = []
            , Ca = !1
            , Sa = "transition"
            , ka = "animation"
            , Aa = Wn + "Duration"
            , Ea = qn + "Duration"
            , $a = Ln && window.requestAnimationFrame
            , Ma = $a ? function(e) {
            $a(function() {
                $a(e)
            })
        }
            : function(e) {
            setTimeout(e, 50)
        }
            , Oa = Ot.prototype;
        Oa.enter = function(e, t) {
            this.cancelPending(),
                this.callHook("beforeEnter"),
                this.cb = t,
                J(this.el, this.enterClass),
                e(),
                this.entered = !1,
                this.callHookWithCb("enter"),
            this.entered || (this.cancel = this.hooks && this.hooks.enterCancelled,
                $t(this.enterNextTick))
        }
            ,
            Oa.enterNextTick = function() {
                var e = this;
                this.justEntered = !0,
                    Ma(function() {
                        e.justEntered = !1
                    });
                var t = this.enterDone
                    , n = this.getCssTransitionType(this.enterClass);
                this.pendingJsCb ? n === Sa && Q(this.el, this.enterClass) : n === Sa ? (Q(this.el, this.enterClass),
                    this.setupCssCb(Gn, t)) : n === ka ? this.setupCssCb(Un, t) : t()
            }
            ,
            Oa.enterDone = function() {
                this.entered = !0,
                    this.cancel = this.pendingJsCb = null ,
                    Q(this.el, this.enterClass),
                    this.callHook("afterEnter"),
                this.cb && this.cb()
            }
            ,
            Oa.leave = function(e, t) {
                this.cancelPending(),
                    this.callHook("beforeLeave"),
                    this.op = e,
                    this.cb = t,
                    J(this.el, this.leaveClass),
                    this.left = !1,
                    this.callHookWithCb("leave"),
                this.left || (this.cancel = this.hooks && this.hooks.leaveCancelled,
                this.op && !this.pendingJsCb && (this.justEntered ? this.leaveDone() : $t(this.leaveNextTick)))
            }
            ,
            Oa.leaveNextTick = function() {
                var e = this.getCssTransitionType(this.leaveClass);
                if (e) {
                    var t = e === Sa ? Gn : Un;
                    this.setupCssCb(t, this.leaveDone)
                } else
                    this.leaveDone()
            }
            ,
            Oa.leaveDone = function() {
                this.left = !0,
                    this.cancel = this.pendingJsCb = null ,
                    this.op(),
                    Q(this.el, this.leaveClass),
                    this.callHook("afterLeave"),
                this.cb && this.cb(),
                    this.op = null
            }
            ,
            Oa.cancelPending = function() {
                this.op = this.cb = null ;
                var e = !1;
                this.pendingCssCb && (e = !0,
                    X(this.el, this.pendingCssEvent, this.pendingCssCb),
                    this.pendingCssEvent = this.pendingCssCb = null ),
                this.pendingJsCb && (e = !0,
                    this.pendingJsCb.cancel(),
                    this.pendingJsCb = null ),
                e && (Q(this.el, this.enterClass),
                    Q(this.el, this.leaveClass)),
                this.cancel && (this.cancel.call(this.vm, this.el),
                    this.cancel = null )
            }
            ,
            Oa.callHook = function(e) {
                this.hooks && this.hooks[e] && this.hooks[e].call(this.vm, this.el)
            }
            ,
            Oa.callHookWithCb = function(e) {
                var t = this.hooks && this.hooks[e];
                t && (t.length > 1 && (this.pendingJsCb = _(this[e + "Done"])),
                    t.call(this.vm, this.el, this.pendingJsCb))
            }
            ,
            Oa.getCssTransitionType = function(e) {
                if (!(!Gn || document.hidden || this.hooks && this.hooks.css === !1 || Nt(this.el))) {
                    var t = this.type || this.typeCache[e];
                    if (t)
                        return t;
                    var n = this.el.style
                        , i = window.getComputedStyle(this.el)
                        , r = n[Aa] || i[Aa];
                    if (r && "0s" !== r)
                        t = Sa;
                    else {
                        var a = n[Ea] || i[Ea];
                        a && "0s" !== a && (t = ka)
                    }
                    return t && (this.typeCache[e] = t),
                        t
                }
            }
            ,
            Oa.setupCssCb = function(e, t) {
                this.pendingCssEvent = e;
                var n = this
                    , i = this.el
                    , r = this.pendingCssCb = function(a) {
                        a.target === i && (X(i, e, r),
                            n.pendingCssEvent = n.pendingCssCb = null ,
                        !n.pendingJsCb && t && t())
                    }
                    ;
                V(i, e, r)
            }
        ;
        var Na = {
            priority: Ir,
            update: function(e, t) {
                var n = this.el
                    , i = ge(this.vm.$options, "transitions", e);
                e = e || "v",
                    n.__v_trans = new Ot(n,e,i,this.vm),
                t && Q(n, t + "-transition"),
                    J(n, e + "-transition")
            }
        }
            , Pa = {
            style: ra,
            "class": va,
            component: ga,
            prop: xa,
            transition: Na
        }
            , Ia = /^v-bind:|^:/
            , Da = /^v-on:|^@/
            , La = /^v-([^:]+)(?:$|:(.*)$)/
            , ja = /\.[^\.]+/g
            , Ba = /^(v-bind:|:)?transition$/
            , Ra = 1e3
            , Fa = 2e3;
        Jt.terminal = !0;
        var Ha = /[^\w\-:\.]/
            , za = Object.freeze({
            compile: Pt,
            compileAndLinkProps: Bt,
            compileRoot: Rt,
            transclude: an,
            resolveSlots: cn
        })
            , Wa = /^v-on:|^@/;
        fn.prototype._bind = function() {
            var e = this.name
                , t = this.descriptor;
            if (("cloak" !== e || this.vm._isCompiled) && this.el && this.el.removeAttribute) {
                var n = t.attr || "v-" + e;
                this.el.removeAttribute(n)
            }
            var i = t.def;
            if ("function" == typeof i ? this.update = i : m(this, i),
                    this._setupParams(),
                this.bind && this.bind(),
                    this._bound = !0,
                    this.literal)
                this.update && this.update(t.raw);
            else if ((this.expression || this.modifiers) && (this.update || this.twoWay) && !this._checkStatement()) {
                var r = this;
                this.update ? this._update = function(e, t) {
                    r._locked || r.update(e, t)
                }
                    : this._update = hn;
                var a = this._preProcess ? h(this._preProcess, this) : null
                    , s = this._postProcess ? h(this._postProcess, this) : null
                    , o = this._watcher = new Ge(this.vm,this.expression,this._update,{
                    filters: this.filters,
                    twoWay: this.twoWay,
                    deep: this.deep,
                    preProcess: a,
                    postProcess: s,
                    scope: this._scope
                });
                this.afterBind ? this.afterBind() : this.update && this.update(o.value)
            }
        }
            ,
            fn.prototype._setupParams = function() {
                if (this.params) {
                    var e = this.params;
                    this.params = Object.create(null );
                    for (var t, n, i, r = e.length; r--; )
                        t = u(e[r]),
                            i = c(t),
                            n = F(this.el, t),
                            null != n ? this._setupParamWatcher(i, n) : (n = R(this.el, t),
                            null != n && (this.params[i] = "" === n ? !0 : n))
                }
            }
            ,
            fn.prototype._setupParamWatcher = function(e, t) {
                var n = this
                    , i = !1
                    , r = (this._scope || this.vm).$watch(t, function(t, r) {
                    if (n.params[e] = t,
                            i) {
                        var a = n.paramWatchers && n.paramWatchers[e];
                        a && a.call(n, t, r)
                    } else
                        i = !0
                }, {
                    immediate: !0,
                    user: !1
                });
                (this._paramUnwatchFns || (this._paramUnwatchFns = [])).push(r)
            }
            ,
            fn.prototype._checkStatement = function() {
                var e = this.expression;
                if (e && this.acceptStatement && !Re(e)) {
                    var t = Be(e).get
                        , n = this._scope || this.vm
                        , i = function(e) {
                        n.$event = e,
                            t.call(n, n),
                            n.$event = null
                    };
                    return this.filters && (i = n._applyFilters(i, null , this.filters)),
                        this.update(i),
                        !0
                }
            }
            ,
            fn.prototype.set = function(e) {
                this.twoWay && this._withLock(function() {
                    this._watcher.set(e)
                })
            }
            ,
            fn.prototype._withLock = function(e) {
                var t = this;
                t._locked = !0,
                    e.call(t),
                    Yn(function() {
                        t._locked = !1
                    })
            }
            ,
            fn.prototype.on = function(e, t, n) {
                V(this.el, e, t, n),
                    (this._listeners || (this._listeners = [])).push([e, t])
            }
            ,
            fn.prototype._teardown = function() {
                if (this._bound) {
                    this._bound = !1,
                    this.unbind && this.unbind(),
                    this._watcher && this._watcher.teardown();
                    var e, t = this._listeners;
                    if (t)
                        for (e = t.length; e--; )
                            X(this.el, t[e][0], t[e][1]);
                    var n = this._paramUnwatchFns;
                    if (n)
                        for (e = n.length; e--; )
                            n[e]();
                    this.vm = this.el = this._watcher = this._listeners = null
                }
            }
        ;
        var Ga = /[^|]\|[^|]/;
        Se(_n),
            un(_n),
            pn(_n),
            mn(_n),
            vn(_n),
            gn(_n),
            yn(_n),
            wn(_n),
            bn(_n);
        var qa = {
            priority: Fr,
            params: ["name"],
            bind: function() {
                var e = this.params.name || "default"
                    , t = this.vm._slotContents && this.vm._slotContents[e];
                t && t.hasChildNodes() ? this.compile(t.cloneNode(!0), this.vm._context, this.vm) : this.fallback()
            },
            compile: function(e, t, n) {
                if (e && t) {
                    if (this.el.hasChildNodes() && 1 === e.childNodes.length && 1 === e.childNodes[0].nodeType && e.childNodes[0].hasAttribute("v-if")) {
                        var i = document.createElement("template");
                        i.setAttribute("v-else", ""),
                            i.innerHTML = this.el.innerHTML,
                            i._context = this.vm,
                            e.appendChild(i)
                    }
                    var r = n ? n._scope : this._scope;
                    this.unlink = t.$compile(e, n, r, this._frag)
                }
                e ? U(this.el, e) : G(this.el)
            },
            fallback: function() {
                this.compile(Z(this.el, !0), this.vm)
            },
            unbind: function() {
                this.unlink && this.unlink()
            }
        }
            , Ua = {
            priority: jr,
            params: ["name"],
            paramWatchers: {
                name: function(e) {
                    Wr.remove.call(this),
                    e && this.insert(e)
                }
            },
            bind: function() {
                this.anchor = ie("v-partial"),
                    U(this.el, this.anchor),
                    this.insert(this.params.name)
            },
            insert: function(e) {
                var t = ge(this.vm.$options, "partials", e, !0);
                t && (this.factory = new rt(this.vm,t),
                    Wr.insert.call(this))
            },
            unbind: function() {
                this.frag && this.frag.destroy()
            }
        }
            , Va = {
            slot: qa,
            partial: Ua
        }
            , Xa = zr._postProcess
            , Ya = /(\d{3})(?=\d)/g
            , Ka = {
            orderBy: Cn,
            filterBy: Tn,
            limitBy: xn,
            json: {
                read: function(e, t) {
                    return "string" == typeof e ? e : JSON.stringify(e, null , Number(t) || 2)
                },
                write: function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                }
            },
            capitalize: function(e) {
                return e || 0 === e ? (e = e.toString(),
                e.charAt(0).toUpperCase() + e.slice(1)) : ""
            },
            uppercase: function(e) {
                return e || 0 === e ? e.toString().toUpperCase() : ""
            },
            lowercase: function(e) {
                return e || 0 === e ? e.toString().toLowerCase() : ""
            },
            currency: function(e, t, n) {
                if (e = parseFloat(e),
                    !isFinite(e) || !e && 0 !== e)
                    return "";
                t = null != t ? t : "$",
                    n = null != n ? n : 2;
                var i = Math.abs(e).toFixed(n)
                    , r = n ? i.slice(0, -1 - n) : i
                    , a = r.length % 3
                    , s = a > 0 ? r.slice(0, a) + (r.length > 3 ? "," : "") : ""
                    , o = n ? i.slice(-1 - n) : ""
                    , l = 0 > e ? "-" : "";
                return l + t + s + r.slice(a).replace(Ya, "$1,") + o
            },
            pluralize: function(e) {
                var t = f(arguments, 1);
                return t.length > 1 ? t[e % 10 - 1] || t[t.length - 1] : t[0] + (1 === e ? "" : "s")
            },
            debounce: function(e, t) {
                return e ? (t || (t = 300),
                    w(e, t)) : void 0
            }
        };
        return kn(_n),
            _n.version = "1.0.24",
            setTimeout(function() {
                xi.devtools && jn && jn.emit("init", _n)
            }, 0),
            _n
    }),
    function(e, t) {
        function n(e) {
            var t = []
                , i = function(e) {
                return "object" == typeof e && null != e ? n(e) : /^(string|number)$/.test(typeof e) ? '"' + e + '"' : e
            };
            if (e instanceof Array) {
                for (var r in e)
                    t.push(i(e[r]));
                return "[" + t.join(",") + "]"
            }
            for (var r in e)
                t.push('"' + r + '":' + i(e[r]));
            return "{" + t.join(",") + "}"
        }
        function i() {
            var e = (new Date).getTime()
                , t = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(t) {
                var n = (e + 16 * Math.random()) % 16 | 0;
                return e = Math.floor(e / 16),
                    ("x" == t ? n : 7 & n | 8).toString(16)
            });
            return t
        }
        var r = new Date
            , a = "https://action.seriousapps.cn/data/collect?"
            , s = {
            channel: t.cookie("rb_channel"),
            unique_id: "",
            session: "",
            city_channel: t.cookie("rb_city"),
            span_id: "",
            user_id: e.ENJOY_USER && ENJOY_USER.id,
            url: e.location.href,
            referer: document.referrer,
            p_day: r.getFullYear() + "-" + (r.getMonth() + 1) + "-" + r.getDate(),
            timestamp: "",
            ext: {}
        }
            , o = function(e) {
            var i = t.extend(!1, s, e);
            return i.ext && (i.ext = n(i.ext)),
                t.param(i)
        }
            , l = function(e) {
            var n = new Image;
            e = t.extend(!1, s, e),
                e.timestamp = (new Date).getTime(),
            e.ext && (e.ext = t.extend(!1, s.ext, e.ext)),
                n.src = a + o(e)
        };
        (new Fingerprint2).get(function(e) {
            s.unique_id = e
        }),
            e.SPOT = {
                cacheAct: [],
                hook: "spot",
                set_params: function(e) {
                    return t.extend(s, e),
                        this
                },
                act: function(e, t) {
                    if (!s.unique_id)
                        return void this.cacheAct.push({
                            act: e,
                            params: t
                        });
                    if (e)
                        return t = t || {},
                            t.action = e,
                            l(t),
                            this
                },
                act_click: function(e) {
                    return this.act("click", e)
                },
                auto_act_click: function() {
                    var e = this;
                    t("body").on("click", "[" + this.hook + "]", function() {
                        var n = t(this).data("spot");
                        n && e.act_click({
                            ext: {
                                name: n
                            }
                        })
                    })
                }
            },
        "undefined" != typeof spotConfig && e.SPOT.set_params({
            city: spotConfig.city_id
        });
        var c = setInterval(function() {
            s.unique_id && (clearInterval(c),
                e.SPOT.cacheAct.map(function(t) {
                    e.SPOT.act(t.act, t.params)
                }),
                e.SPOT.cacheAct = [])
        }, 50);
        if (!t.cookie("rb_strack")) {
            var d = new Date
                , u = 30;
            d.setTime(d.getTime() + 60 * u * 1e3),
                t.cookie("rb_strack", i(), {
                    expires: d,
                    domain: "ricebook.com"
                })
        }
        e.SPOT.set_params({
            session: t.cookie("rb_strack")
        })
    }(window, $),
    window.utils = function() {
        function e(e) {
            if (n[e])
                return n[e].promise();
            var t = $.Deferred();
            return Modernizr && Modernizr.on ? Modernizr.on(e, function(e) {
                e && "false" === e.toString() && (e = !1),
                    t.resolve(e)
            }) : t.reject(),
                n[e] = t,
                t.promise()
        }
        function t(e) {
            var t = document.createElement("a");
            return t.href = e,
                t
        }
        var n = {};
        return {
            featureDetects: e,
            parseUrl: t
        }
    }(),
    $(document).ready(function() {
        function e() {
            n($(".address-content li .address-info")),
                i($("#chooseProvince")),
                a($("#chooseCity")),
                o($("#chooseDistrict")),
                r($("#chooseProvince")),
                s($("#chooseCity")),
                l($("#chooseDistrict")),
                c($(".edit")),
                d($(".edit-button")),
                u($(".delete-address")),
                p($(".submit-button")),
                h($("input[name=phone]"))
        }
        function t(e, t) {
            var n = $(e(t));
            $("body").append(n),
                setTimeout(function() {
                    n.remove()
                }, 2e3)
        }
        function n(e) {
            e.bind("click", function() {
                var e = $(this).parent().attr("address_id");
                $("input[name=delivery_address_id]").attr("value", e),
                    $('input[name="confirmorder"]').click()
            })
        }
        function i(e) {
            e.bind("click", function() {
                var e = $("#chooseProvince ul")
                    , t = $("#chooseProvince i");
                "none" === e.css("display") ? (e.show(),
                    t.removeClass("fa-angle-down"),
                    t.addClass("fa-angle-up"),
                    $("#chooseCity span").text("选择城市"),
                    $("#chooseDistrict span").text("选择区县")) : (e.hide(),
                    $("#chooseProvince i").addClass("fa-angle-down"),
                    $("#chooseProvince i").removeClass("fa-angle-up"))
            })
        }
        function r(e) {
            e.on({
                click: function() {
                    var e = $("#chooseProvince span")
                        , t = $("#chooseProvince i");
                    e.text($(this).text()),
                        e.css("color", "black"),
                        t.css("color", "black"),
                        t.removeClass("fa-angle-up"),
                        t.addClass("fa-angle-down");
                    var n = $(this).attr("province_id");
                    $("#chooseProvince").attr("province", n);
                    var i = "";
                    return $("#chooseDistrict ul").html(i),
                        $("input[name=province_id]").val(n),
                        $("#chooseProvince ul").hide(),
                        !1
                }
            }, "ul li")
        }
        function a(e) {
            e.bind("click", function() {
                var e = $("#chooseCity ul")
                    , t = $("#chooseCity i");
                "none" === e.css("display") ? (e.show(),
                    t.removeClass("fa-angle-down"),
                    t.addClass("fa-angle-up"),
                    $("#chooseCity span").text("选择城市"),
                    $("#chooseDistrict span").text("选择区县")) : (e.hide(),
                    t.addClass("fa-angle-down"),
                    t.removeClass("fa-angle-up"));
                var n = $("input[name=province_id]").val();
                $.get("/order/getcity/" + n).then(function(e) {
                    var t = "";
                    e.forEach(function(e) {
                        t += '<li city_id="' + e.city_id + '">' + e.city_name + "</li>"
                    }),
                        $("#chooseCity ul").html(t),
                        t = ""
                })
            })
        }
        function s(e) {
            e.on({
                click: function() {
                    $("#chooseCity span").text($(this).text()),
                        $("#chooseCity span").css("color", "black"),
                        $("#chooseCity i").css("color", "black"),
                        $("#chooseCity i").removeClass("fa-angle-up"),
                        $("#chooseCity i").addClass("fa-angle-down");
                    var e = $(this).attr("city_id")
                        , t = "";
                    return $("#chooseDistrict ul").html(t),
                        $("input[name=city_id]").val(e),
                        $("#chooseCity ul").hide(),
                        !1
                }
            }, "ul li")
        }
        function o(e) {
            e.bind("click", function() {
                var e = $("#chooseDistrict ul");
                "none" === e.css("display") ? (e.show(),
                    $("#chooseDistrict i").removeClass("fa-angle-down"),
                    $("#chooseDistrict i").addClass("fa-angle-up")) : (e.hide(),
                    $("#chooseDistrict i").addClass("fa-angle-down"),
                    $("#chooseDistrict i").removeClass("fa-angle-up"));
                var t = $("input[name=city_id]").val()
                    , n = $("input[name=province_id]").val();
                $.get("/order/getDistrict/" + n + "/" + t).then(function(e) {
                    var t = "";
                    e.forEach(function(e) {
                        t += '<li province_id="' + e.province_id + '" city_id="' + e.city_id + '" district_id="' + e.district_id + '" >' + e.district_name + "</li>"
                    }),
                        $("#chooseDistrict ul").html(t),
                        t = ""
                })
            })
        }
        function l(e) {
            e.on({
                click: function() {
                    var e = $(this).attr("province_id");
                    $("input[name=province_id]").attr("value", e);
                    var t = $(this).attr("city_id");
                    $("input[name=city_id]").attr("value", t);
                    var n = $(this).attr("district_id");
                    return $("input[name=district_id]").attr("value", n),
                        $("#chooseDistrict span").text($(this).text()),
                        $("#chooseDistrict span").css("color", "black"),
                        $("#chooseDistrict i").css("color", "black"),
                        $("#chooseDistrict i").removeClass("fa-angle-up"),
                        $("#chooseDistrict i").addClass("fa-angle-down"),
                        $("#chooseDistrict ul").hide(),
                        !1
                }
            }, "ul li")
        }
        function c(e) {
            e.bind("click", function() {
                var e = $(this).parent().attr("address_id");
                $("input[name=delivery_address_id]").attr("value", e),
                    $("#addressListForm").attr("action", "/order/address/edit"),
                    $('input[name="confirmorder"]').click()
            })
        }
        function d(e) {
            e.bind("click", function() {
                $("input[name=delivery_address_id]").val(""),
                    $("#addressListForm").attr("action", "/order/address/edit"),
                    $('input[name="confirmorder"]').click()
            })
        }
        function u(e) {
            e.bind("click", function() {
                $("#remind").show(),
                    $("#backdrop").show(),
                    $("#sure").click(function() {
                        $("input[name=delivery_address_id]").attr("value", ""),
                            $("#deleteForm").attr("action", "/order/address/delete"),
                            $('input[name="submit-button"]').click()
                    }),
                    $("#cancel").click(function() {
                        $("#remind").hide(),
                            $("#backdrop").hide()
                    })
            })
        }
        function p(e) {
            e.bind("click", function() {
                var e = $(".edit-address ul").find(".detail_address").val();
                $("input[name=detail_address]").attr("value", e);
                var n = $("input[name=addressee]").val()
                    , i = $("input[name=phone]").val()
                    , r = $("input[name=zip_code]").val()
                    , a = $("input[name=province_id]").val()
                    , s = $("input[name=city_id]").val()
                    , o = $("input[name=district_id]").val();
                if ("" === n)
                    return void t(tplErrorTip, "请输入联系人");
                var l = /^\d{11}$/;
                if (-1 == i.indexOf("****") && !l.test(i))
                    return void t(tplErrorTip, "请输入正确的手机号");
                var c = /^\d{6}$/;
                return c.test(r) ? "" === a ? void t(tplErrorTip, "请选择正确的省份") : "" === s ? void t(tplErrorTip, "请选择正确的城市") : "" === o ? void t(tplErrorTip, "请选择正确的区/县") : "" === e ? void t(tplErrorTip, "请输入地址") : void $("input[name=submit-button]").click() : void t(tplErrorTip, "请输入正确的邮编")
            })
        }
        function h(e) {
            e.bind("click", function() {
                var e = /^(\d)*$/
                    , t = $("input[name=phone]").val();
                e.test(t) || $("input[name=phone]").val("")
            })
        }
        $(".address-page").length > 0 && e()
    }),
    $(document).ready(function() {
        function e() {
            t($(".forgot-password-div form"))
        }
        function t(e) {
            n(e),
                i($(".send-code"))
        }
        function n() {
            $("#go").bind("click", function() {
                var e = $("input[name=username]").val();
                e && $.get("/user/forgot-password/code/" + e).then(function(t) {
                    1 === t.state ? "@" == e.match(/@/i) ? window.location.href = "http://" + window.location.host + "/user/forgot-password/success" : window.location.href = "http://" + window.location.host + "/user/forgot-password/phone?phone=" + e : 0 === t.state ? $(".tip-nophone").text("手机号或邮箱不存在") : 2 === t.state ? $(".tip-nophone").text(t.text) : window.location.href = "http://" + window.location.host
                })
            })
        }
        function i(e) {
            e.bind("click", function() {
                var e = $("input[name=phone]").val();
                $.get("/user/sendcode/" + e)
            })
        }
        $(".forgot-password-div").length && e()
    }),
    function(e, t) {
        function n(t) {
            var n = t.getBoundingClientRect();
            return n.bottom < -260 || n.right < 0 || n.left > e.innerWidth || n.top > e.innerHeight
        }
        function i(e, t, n) {
            return pageConfig.image_cdn.replacement && Object.keys(pageConfig.image_cdn.replacement).forEach(function(e) {
                t = t.replace(e, pageConfig.image_cdn.replacement[e])
            }),
            n !== !1 && (t += pageConfig.image_cdn.suffix,
                t += e ? pageConfig.image_cdn.type_suffix.webp : pageConfig.image_cdn.type_suffix.jpeg),
                t
        }
        function r(e, n) {
            var r = t(n);
            if (r.attr("x-src")) {
                var a = 0
                    , s = i(e, r.attr("x-src"));
                r.attr("src", s),
                    r.error(function() {
                        if (pageConfig.image_cdn.alternatives && a < pageConfig.image_cdn.alternatives.length) {
                            var e = utils.parseUrl(r.attr("src"))
                                , t = utils.parseUrl(pageConfig.image_cdn.alternatives[a]);
                            e.protocol = t.protocol,
                                e.host = t.host,
                                r.attr("src", e.toString()),
                                a++
                        }
                    })
            }
        }
        function a(e, n) {
            "IMG" === n.nodeName ? s.push(e, n) : t(n).find("img").not(".image0").toArray().forEach(s.push.bind(null , e))
        }
        var s = function() {
            var i = !!document.body.getBoundingClientRect;
            if (i) {
                var r = []
                    , a = function(e, t, i) {
                    return n(t) ? void 0 : (e(t),
                        r.splice(i, 1),
                        !0)
                }
                    , s = function() {
                    var e, t = function() {
                        for (var e = 0; e < r.length; e++)
                            a(r[e].cb, r[e].el, e) && e--
                    };
                    return function() {
                        e && clearTimeout(e),
                            e = setTimeout(t, 100)
                    }
                }();
                t(e).on("scroll resize", s)
            }
            return {
                push: function(e, t) {
                    i ? (r.push({
                        el: t,
                        cb: e
                    }),
                        a(e, t, r.length)) : e(t)
                }
            }
        }();
        utils.featureDetects("webp").then(function(e) {
            var n = r.bind(null , e);
            t(document).bind("DOMNodeInserted", function(e) {
                a(n, e.target)
            }),
                t(document).ready(function() {
                    a(n, document.body)
                }),
                t(document).ready(function() {
                    t("body").find(".image0").toArray().forEach(function(t) {
                        r(e, t)
                    })
                })
        })
    }(window, $),
    $(function(e) {
        var t, n = e(".touchslider"), i = n.find("img"), r = 0;
        i.width(e(document).width()),
            t = setInterval(function() {
                r > 1e4 && clearInterval(t),
                i.height() > 0 && (i.addClass("show"),
                    e(".touchslider-viewport").height(i.height()),
                    n.touchSlider({
                        container: this,
                        duration: 350,
                        delay: 3e3,
                        margin: 5,
                        mouseTouch: !0,
                        namespace: "touchslider",
                        next: ".touchslider-next",
                        pagination: ".touchslider-nav-item",
                        currentClass: "touchslider-nav-item-current",
                        prev: ".touchslider-prev",
                        autoplay: !1,
                        viewport: ".touchslider-viewport"
                    }),
                    clearInterval(t)),
                    ++r
            }, 100)
    }),
    $(function() {
        function e() {
            if (/iP(hone|od|ad)/.test(navigator.platform)) {
                var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
                return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
            }
            return null
        }
        function t() {
            var t = e()
                , n = "enjoyapp://product/detail?id=" + h;
            t && t[0] > 8 ? window.location.href = n : iframe = $("<iframe />").css("display", "none").appendTo("body").attr("src", n),
                $("a.app").attr("href", "https://topic.ricebook.com/topicpage/jump.html?url=" + encodeURIComponent(n))
        }
        function n() {
            SPOT.set_params({
                ext: {
                    product_id: ENJOY_INFO.product_id,
                    product_type: ENJOY_INFO.product_type
                }
            }),
                SPOT.act("PRODUCT", {
                    ext: {
                        like: ENJOY_INFO.favorite_num,
                        light_spot: v
                    }
                }),
                $(".recommend").on("click", "li", function() {
                    SPOT.act("GUESS_U_LIKE", {
                        ext: {
                            pos: $(this).index()
                        }
                    })
                })
        }
        function i() {
            var e = !1
                , t = $(".favo");
            t.on("click", function() {
                if (!e) {
                    e = !0;
                    var n = t.find(".fa")
                        , i = n.hasClass("fa-heart") ? 1 : 0;
                    return SPOT.act("PRODUCT_LIKE", {
                        ext: {
                            status: i ? 0 : 1
                        }
                    }),
                        window.ENJOY_USER && ENJOY_USER.id ? void $.post("/product/setFav", {
                            product_id: ENJOY_INFO.product_id,
                            has_setfav: i
                        }, function(t) {
                            if (e = !1,
                                    t.error)
                                return void window.alert("出错了T_T刷新试试看?");
                            if (t.result.is_success) {
                                var r = $(".favo .num");
                                if (i) {
                                    var a = ~~r.html() - 1;
                                    r.html(a ? a : ""),
                                        n.addClass("fa-heart-o").removeClass("fa-heart")
                                } else
                                    r.html(~~r.html() + 1),
                                        n.removeClass("fa-heart-o").addClass("fa-heart")
                            }
                        }, "json") : void (window.location.href = window.location.protocol + "//" + window.location.host + "/user/login?product_id=" + h)
                }
            })
        }
        function r() {
            var e = $(".image-box")
                , t = e.find("li")
                , n = 600;
            t.parent().width(n * t.length),
                $(".thumbs-image img").on("click", function() {
                    var t = $(this);
                    t.addClass("active").siblings().removeClass("active"),
                        e.stop().animate({
                            scrollLeft: t.index() * n
                        }, 300)
                }).eq(0).click()
        }
        function a() {
            var e = $(".menu-btn")
                , t = $(".menu")
                , n = t.find(".main")
                , i = n.find(".content")
                , r = t.find("img");
            e.on("click", function() {
                return t.addClass("show"),
                    n.css("top", 50),
                    t.css({
                        height: p.height()
                    }),
                    SPOT.act("MENU"),
                    !1
            }),
                t.on("click", function(e) {
                    var i = $(e.target);
                    return (i.hasClass("background") || i.hasClass("close")) && (t.removeClass("show"),
                        n.css("top", 0)),
                        !1
                }),
                r.on("load", function() {
                    if (!m) {
                        var e = n.height()
                            , t = p.height();
                        if (e >= t) {
                            var r = e - t;
                            i.addClass("scroll").height(i.height() - r - 300)
                        }
                    }
                }),
            $('.image0[special="true"]').length > 0 && r.attr("src", $('.image0[special="true"]').attr("x-src").split("?")[0] + "?imageView2/1/w/500/h/300")
        }
        function s() {
            var e = $(".choose-btn");
            if (0 != e.length) {
                var t = $(".sub-mask")
                    , n = ($("body"),
                    $(".sub-product"))
                    , i = n.find(".list")
                    , r = n.find(".choosed")
                    , a = n.find(".close")
                    , s = i.find(".item")
                    , o = function() {
                    return t.removeClass("show"),
                        n.removeClass("show"),
                        !1
                };
                e.on("click", function() {
                    return t.addClass("show"),
                        n.addClass("show"),
                        !1
                }),
                    s.on("click", function() {
                        var t = $(this);
                        if (!t.hasClass("disable"))
                            return t.data("id") != r.data("currentid") && (r.data("currentid", t.data("id")),
                                l(t.data("id")),
                                t.find(".selected .fa").addClass("fa-check").end().siblings().find(".selected .fa").removeClass("fa-check"),
                                r.scrollTop(t.index() * t.outerHeight()),
                                e.find(".spec").html("已选择 『" + t.data("spec") + "』")),
                                !1
                    }),
                    t.on("click", o),
                    a.on("click", o),
                    n.find(".confirm-selection button").on("click", o);
                var c = i.find(".fa-check").parents(".item");
                r.scrollTop(c.index() * c.outerHeight())
            }
        }
        function o() {
            var e = $(".choosed")
                , t = e.find(".list");
            0 != e.length && (e.on("click", ".result", function() {
                t.addClass("show")
            }),
                t.on("click", "p", function() {
                    var n = $(this);
                    return n.hasClass("disable") ? !1 : (e.data("currentid") != n.data("id") && (l($(this).data("id")),
                        e.data("currentid", n.data("id"))),
                        void t.removeClass("show"))
                }).on("mouseleave", function() {
                    t.removeClass("show")
                }))
        }
        function l(e) {
            $.post("/product/getSubProduct", {
                product_id: window.ENJOY_INFO && window.ENJOY_INFO.product_id,
                sub_product_id: e
            }).then(function(t) {
                if (t.error)
                    return void window.alert("出错了T_T刷新试试看?");
                SPOT.act("SUB_PRODUCT_BUTTON", {
                    ext: {
                        subproduct_id: e,
                        subproduct_price: t.price
                    }
                });
                var n = $(".choosed")
                    , i = n.find(".remain");
                n.find(".result .spec").text(t.spec),
                    t.amount <= 10 ? i.show().text("仅剩" + t.amount + "份") : i.hide();
                var r = $(".price")
                    , a = $(".unit")
                    , s = r.find(".original");
                r.find(".number").text(t.price),
                    t.original_price ? s.show().text("￥" + t.original_price) : s.hide(),
                    t.show_entity_name ? a.text("元/" + t.show_entity_name) : t.entity_name ? a.text("元/" + t.entity_name) : a.text("元");
                var o = $(".now");
                if (1 === t.sell_state)
                    o.text("ENJOY NOW").removeClass("disable");
                else {
                    var l = "";
                    switch (t.sell_state) {
                        case 2:
                            l = "尚未开售";
                            break;
                        case 3:
                            l = "已售完";
                            break;
                        case 4:
                            l = "已结束";
                            break;
                        case 5:
                            l = "已下架"
                    }
                    o.text(l).addClass("disable")
                }
                var c = $(".product_info");
                t.postage_info && c.find("input[name=postage_info]").attr("value", t.postage_info),
                    c.find("input[name=sub_product_id]").attr("value", t.sub_product_id).end().find("input[name=price]").attr("value", t.price).end().find("input[name=max]").attr("value", t.max).end().find("input[name=min]").attr("value", t.min).end()
            })
        }
        function c() {
            $(".now").on("click", function() {
                var e = $(this)
                    , t = window.ENJOY_USER && window.ENJOY_USER.id
                    , n = $(".product_info");
                if (!e.hasClass("disable"))
                    if (SPOT.act("ENJOY_NOW", {
                            ext: {
                                product_id: h,
                                subproduct_id: n.find("input[name=sub_product_id]").val(),
                                subproduct_price: n.find("input[name=price]").val(),
                                like: ENJOY_INFO.favorite_num,
                                light_spot: v
                            }
                        }),
                            t) {
                        var i, r = n.find("input[name=product_type]").val();
                        "0" === r && (i = "/order/enjoynow"),
                        "1" === r && (i = "/order/enjoynow/express"),
                            n.attr("action", i),
                            n.find("input[name=submit]").click()
                    } else
                        window.location.href = window.location.protocol + "//" + window.location.host + "/user/login?product_id=" + h
            })
        }
        function d() {
            var e = $(".qrcode")
                , t = e.find(".hints")
                , n = "touchend"
                , i = {
                web: "使用微信扫描二维码，联系在线客服。",
                mobile: "保存二维码图片，微信识别联系客服",
                wx: "长按图片识别二维码，联系微信客服。"
            };
            $(".service").click(function() {
                e.hasClass("show") ? e.removeClass("show") : e.addClass("show"),
                    SPOT.act("CONTACT_SERVICE")
            }),
                m ? (t.html(i.mobile),
                f.match("micromessenger") && t.html(i.wx)) : (n = "click",
                    t.html(i.web)),
                p.on(n, function(t) {
                    return $(t.target).hasClass("service") ? !0 : void e.removeClass("show")
                })
        }
        function u() {
            var e = $(".specification");
            if (e.length > 0) {
                var t = $(".product-info")
                    , n = $(".product-intro");
                n.height() < t.height() && n.height(t.height())
            }
        }
        var p = $(document)
            , h = window.ENJOY_INFO && window.ENJOY_INFO.product_id
            , f = navigator.userAgent.toLowerCase()
            , m = f.match("android|iphone|ipad")
            , v = $(".detail").length;
        $(".product-page").length > 0 && (n(),
            r(),
            m ? (s(),
                t()) : o(),
            c(),
            d(),
            i(),
            a(),
            u())
    }),
    $(document).ready(function() {
        function e() {
            r($(".more")),
                l($(".change-city")),
                l($(".channel-changes")),
                u($(".down-close")),
                c($(".wap-head .wap-name")),
                i($(".enjoy-down a")),
                p($(".product-label-wap ul li a")),
                h($(".ad-image-wrapper")),
                f($(".index-page")),
                m($(".tag")),
                t($(".default-header")),
                x(),
                $(window).bind("scroll", r)
        }
        function t(e) {
            e.css("border-bottom", "none")
        }
        function n(e, t, n) {
            var i = $(e(t));
            n ? $("#product").html(i) : $("#product").append(i)
        }
        function i(e) {
            e.bind("click", function() {
                $.get("/download").then(function(e) {})
            })
        }
        function r() {
            var e = navigator.userAgent.toLowerCase()
                , t = e.match(/(mobile)/);
            t ? s() : a()
        }
        function a() {
            $(document).scrollTop() + $(window).height() > $(document).height() - 150 && ("number" == typeof b.page ? b.page = 1 * b.page + 1 : window.location.href = window.location.protocol + "//" + window.location.host,
                d([b.city_id, b.page, b.label_id]),
                $(window).unbind("scroll"),
            b.page < b.id && setTimeout(function() {
                $(window).bind("scroll", r)
            }, 1e3))
        }
        function s() {
            if ($(document).scrollTop() + $(window).height() > $(document).height() - 150) {
                "number" == typeof _ ? _ = parseInt(_) + 1 : window.location.href = window.location.protocol + "//" + window.location.host;
                var e = $(".home-page-m ul").attr("algo");
                o(_, e),
                    $(window).unbind("scroll"),
                    setTimeout(function() {
                        $(window).bind("scroll", r)
                    }, 1e3)
            }
        }
        function o(e, t) {
            SPOT.act("HOME", {
                ext: {
                    page: e
                }
            }),
                e = parseInt(e),
                $.get("/wap/" + e + "/" + t + "/" + w).then(function(e) {
                    if (e && e.body && e.body.error_code)
                        console.log(e.body.error_code),
                            alert("出错了~刷新试试");
                    else {
                        $(".home-page-m ul").attr("algo", e.homePage.algo);
                        $(".home-page-m ul").append(tplHomePagePopup(e.homePage))
                    }
                })
        }
        function l(e) {
            e.bind("click", function() {
                var t = $(".logo-place-holder .change-city .city")
                    , n = $(".channel-changes ul");
                "none" === t.css("display") ? (t.show(),
                    e.find("i").removeClass("fa-angle-down").addClass("fa-angle-up")) : (t.hide(),
                    e.find("i").removeClass("fa-angle-up").addClass("fa-angle-down")),
                    "none" === n.css("display") ? n.show() : n.hide()
            }),
                $(".logo-place-holder ul li").click(function() {
                    b.channel_id = $(this).attr("channel_id"),
                        window.location.href = window.location.protocol + "//" + window.location.host + "/page/" + b.channel_id + "/0/0"
                }),
                $(".wap-head .channel-changes ul li").click(function() {
                    b.channel_id = $(this).attr("channel_id");
                    var e = $(".index-popup");
                    e.hasClass("active") && e.removeClass("active"),
                        window.location.href = window.location.protocol + "//" + window.location.host + "/page/" + b.channel_id + "/0/0"
                })
        }
        function c(e) {
            e.bind("click", function() {
                var e = $(".preneral")
                    , t = $(".wap-head .order");
                "none" === e.css("display") ? e.show() : e.hide(),
                    "none" === t.css("display") ? t.show() : t.hide()
            })
        }
        function d(e) {
            window.location.href.match("label|page") ? SPOT.act("LABEL", {
                ext: {
                    label_id: y,
                    page: e[1]
                }
            }) : SPOT.act("HOME", {
                ext: {
                    page: e[1]
                }
            }),
                $.get("/innerpage/" + e).then(function(t) {
                    if (t.length > 0) {
                        n(tplProductItem, t),
                            $(".pagination ul li ul li .active").removeClass("active");
                        var i = 1 * e[1]
                            , r = e[0] || 140
                            , a = e[2] || 0
                            , s = "/page/" + r + "/" + a + "/" + i
                            , o = '<li><a class="active" href= ' + s + ">" + (i + 1) + "</a></li>";
                        $(".pagination ul li ul").append(o),
                            o = "";
                        var l = "/page/" + r + "/" + a + "/" + (1 * i - 1)
                            , c = "/page/" + r + "/" + a + "/" + (1 * i + 1);
                        $(".pagination ul .next a").attr("href", c),
                            $(".pagination ul .prev a").attr("href", l)
                    } else
                        $(".pagination ul .next").css("display", "none"),
                            $(".more").css("display", "none")
                })
        }
        function u(e) {
            e.bind("click", function() {
                $(".enjoy-down").hide()
            })
        }
        function p(e) {
            e.bind("click", function() {
                var e = $(".product-label-wap .more_label_list")
                    , t = $(".product-label-wap .dropdown_arrow");
                $(this).parent().hasClass("more_label") && ("none" === e.css("display") ? (e.show(),
                    t.show()) : (e.hide(),
                    t.hide()))
            })
        }
        function h(e) {
            e.bind("click", function() {
                var e = $(this).find(".ad-image").find("img")[0]
                    , t = $("body").find(".gallery-li");
                e = $(e).attr("x-src"),
                    t.each(function(t, n) {
                        var i = $(n).find("a").attr("href")
                            , r = $(n).attr("destination")
                            , a = "";
                        e === i && (a = 7 === r.length ? "http://enjoy.ricebook.com/product/" + r : $(n).attr("destination"),
                            SPOT.act("HOME_PAGE_ITEM", {
                                ext: {
                                    type: "banner",
                                    link: a
                                }
                            }),
                            window.location.href = a)
                    })
            }),
                e.mouseover(function() {
                    $(".ad-next").css("display", "block"),
                        $(".ad-prev").css("display", "block")
                }),
                e.mouseout(function() {
                    $(".ad-next").css("display", "none"),
                        $(".ad-prev").css("display", "none")
                })
        }
        function f(e) {
            e.on({
                click: function() {
                    var e = $(this).attr("destination");
                    window.location.href = e
                }
            }, ".banner-one")
        }
        function m(e) {
            e.bind("click", function() {
                $(".more-tag").hasClass("active") ? ($(".tag i").removeClass("fa-caret-up"),
                    $(".tag i").addClass("fa-caret-down"),
                    $(".more-tag").removeClass("active"),
                    $(".home-page-m").css("display", "block")) : ($(".more-tag").addClass("active"),
                    $(".home-page-m").css("display", "none"),
                    $(".tag i").addClass("fa-caret-up"),
                    $(".tag i").removeClass("fa-caret-down"))
            })
        }
        $("body").scrollTop(0),
            $("#weixin-code").click(function() {
                return $(".weixin-code").addClass("active"),
                    !1
            }),
            $(".close-weixin-popup").click(function() {
                return $(".weixin-code").removeClass("active"),
                    !1
            }),
            $(".download-enjoy").click(function() {
                return $(".user-click").addClass("active"),
                    !1
            }),
            $(".user-click-close").click(function() {
                return $(".user-click").removeClass("active"),
                    $(".weixin-code").removeClass("active"),
                    !1
            }),
            $(".more").click(function() {
                r()
            });
        var v = window.location.href.split("/")
            , g = parseInt(v[v.length - 1]) || 0
            , y = 0
            , w = 140;
        v.length > 4 && (y = v[v.length - 2],
            w = v[v.length - 3]);
        var b = {
            page: 1 * g,
            city_id: 1 * w,
            label_id: 1 * y,
            id: 1 * g + 2
        }
            , _ = 0;
        $(".lazy").height(270 * $(".lazy").width() / 360);
        new Swiper(".swiper-container");
        $(".swiper-slide").on("click", "a", function() {
            SPOT.act("HOME_PAGE_ITEM", {
                ext: {
                    type: "banner",
                    link: $(this).attr("href")
                }
            })
        }),
            $(".group_name").on("click", function() {
                SPOT.act("HOME_PAGE_ITEM", {
                    ext: {
                        type: "label",
                        pos: $(this).index()
                    }
                })
            }),
            $(".product-label").on("click", "li", function() {
                SPOT.act("HOME_PAGE_ITEM", {
                    ext: {
                        type: "label",
                        pos: $(this).index()
                    }
                })
            }),
            $(".product-group-page").on("click", "li", function() {
                SPOT.act("HOME_PAGE_ITEM", {
                    ext: {
                        type: "product",
                        pos: $(this).index()
                    }
                })
            });
        var x = function() {
            "HOME" == ENJOY_INFO.pagename && (SPOT.set_params({
                ext: {
                    label_id: y
                }
            }),
                window.location.href.match("label|page") ? SPOT.act("LABEL", {
                    ext: {
                        label_id: y,
                        page: g
                    }
                }) : SPOT.act("HOME", {
                    ext: {
                        page: g
                    }
                }))
        };
        jQuery(function(e) {
            e(".touchslider_banner").touchSlider({
                container: this,
                duration: 350,
                delay: 3e3,
                margin: 5,
                mouseTouch: !0,
                namespace: "touchslider_banner",
                next: ".touchslider-next",
                pagination: ".touchslider-nav-item",
                currentClass: "touchslider-nav-item-current",
                prev: ".touchslider-prev",
                autoplay: !0,
                viewport: ".touchslider-viewport"
            })
        });
        $(".banner-gallery").adGallery({
            height: 400,
            slideshow: {
                autostart: !1,
                speed: 3e3
            },
            cycle: !0,
            effect: "resize",
            display_next_and_prev: !0,
            callbacks: {
                init: function() {
                    this.preloadAll()
                },
                afterImageVisible: function() {
                    var e = this;
                    this.loading(!0),
                        this.preloadImage(this.current_index + 1, function() {
                            e.loading(!1)
                        }),
                        this.current_index % 2 === 0 ? this.settings.effect = "slide-hori" : this.settings.effect = "fade"
                }
            }
        });
        $(".index-page").length > 0 && e()
    }),
    $(document).ready(function() {
        function initBuy() {
            initBuyForm($(".buy-now-page form"))
        }
        function errorTipOrder(e, t) {
            var n = $(e(t));
            $("body").append(n),
                setTimeout(function() {
                    n.remove()
                }, 2e3)
        }
        function initBuyForm(e) {
            reduceNum(e, $("input[name=num]"), $("input[name=min]").val(), $(".total-price"), $("input[name=product_price]").val()),
                addNum(e, $("input[name=num]"), $("input[name=max]").val(), $(".total-price"), $("input[name=product_price]").val()),
                changeNum(e, $("input[name=num]"), $("input[name=max]").val(), $("input[name=min]").val(), $(".total-price"), $("input[name=product_price]").val()),
                changeNumWap(e, $("input[name=wap_num]"), $("input[name=max]").val(), $("input[name=min]").val(), $(".total-price"), $("input[name=product_price]").val()),
                loginByPhone($("#loginByPhone")),
                closeLoginPopup($(".close-login-popup")),
                setPhone($("#setPhone")),
                closetipPopup($(".tip-close")),
                closeBindPhonePopup($(".close-bindphone-popup")),
                checkOrderPhone($(".wap-sumbit-order .confirmorder")),
                checkOrderAddress($("#web-confirmorder")),
                addAdress($("#addAdress")),
                deleteAdress($("#deleteAdress")),
                changeAdress($("#deleteAdress")),
                editAdress($("#deleteAdress")),
                chooseAddress($("#addAddressWap")),
                orderPageAddress($("#addAddressWap1"))
        }
        function checkOrderPhone(e) {
            e.bind("click", function() {
                $("input").hasClass("wap_totp_code") ? $("input[name=wap_totp_code]").val() && "" !== $("input[name=wap_open_platform_uid]").val() ? $("#confirmorder").click() : errorTipOrder(tplErrorTip, "请输入手机号和验证码") : $("li").hasClass("addAddressWap1") ? errorTipOrder(tplErrorTip, "请先添加收货地址") : $("#confirmorder").click()
            })
        }
        function checkOrderAddress(e) {
            e.bind("click", function() {
                var e = $("input[name=product_type]").val()
                    , t = $("input[name=delivery_address_id]").val();
                return "1" !== e || t ? void $("#confirmorder").click() : (errorTipOrder(tplErrorTip, "请先选择收货地址"),
                    !1)
            })
        }
        function loginByPhone(e) {
            return e.bind("click", function() {
                var e = $("input[name=open_platform_uid]").val()
                    , t = $("input[name=open_platform_token]").val();
                e || (e = $("input[name=wap_open_platform_uid]").val(),
                    t = $("input[name=wap_open_platform_token]").val()),
                    $.get("/user/loginbyphone?account=" + e + "&totp_code=" + t).then(function(e) {
                        return e.user && e.user.body && e.user.body.error_code ? (4030009 == e.user.body.error_code,
                            errorTipOrder(tplErrorTip, "手机号或验证码无效"),
                            !1) : 1 == e.state ? (switchPopup(".order-popup", "active"),
                            switchPopup(".unlogin", "active"),
                            $(".buy-add").append("<tr><td>手机号码</td><td></td><td></td><td>" + e.user.phone + "</td></tr>"),
                            void window.location.reload()) : void 0
                    })
            }),
                !1
        }
        function addNum(e, t, n, i, r) {
            $(".add").bind("click", function() {
                $(".reduce").css("display", "inline-block");
                var e = parseInt(t.prop("value"))
                    , a = parseInt($("input[name=wap_num]").prop("value"));
                if (n > e) {
                    e += 1,
                        a += 1,
                        t.prop("value", e),
                        $("input[name=wap_num]").prop("value", a),
                        postageInfo();
                    var s = 1 * $(".postage-price").attr("price") || 0;
                    i.html(e * r + s)
                } else
                    (e = n) && $(".number-input .add").hide()
            })
        }
        function reduceNum(e, t, n, i, r) {
            $(".reduce").bind("click", function() {
                $(".number-input .add").css("display", "inline-block");
                var e = parseInt(t.prop("value"))
                    , a = parseInt($("input[name=wap_num]").prop("value"));
                if (e > n) {
                    e -= 1,
                        a -= 1,
                        t.prop("value", e),
                        $("input[name=wap_num]").prop("value", a),
                        postageInfo();
                    var s = 1 * $(".postage-price").attr("price") || 0;
                    i.html(e * r + s),
                    a == n && $(".reduce").hide()
                } else
                    (e = n) && $(".reduce").hide()
            })
        }
        function changeNum(e, t, n, i, r, a) {
            t.bind("input propertychange", function() {
                if ($(".reduce").css("display", "inline-block"),
                        $(".number-input .add").css("display", "inline-block"),
                        t.prop("value")) {
                    var e = parseInt(t.prop("value"));
                    if (e >= i && n >= e) {
                        postageInfo();
                        var s = 1 * $(".postage-price").attr("price") || 0;
                        r.html(e * a + s)
                    } else {
                        window.alert("商品数量应在" + i + "-" + n + "内！"),
                            t.prop("value", i),
                            postageInfo();
                        var s = 1 * $(".postage-price").attr("price") || 0;
                        r.html(i * a + s)
                    }
                }
            })
        }
        function changeNumWap(e, t, n, i, r, a) {
            t.bind("input propertychange", function() {
                if ($(".reduce").css("display", "inline-block"),
                        $(".number-input .add").css("display", "inline-block"),
                        t.prop("value")) {
                    var e = parseInt(t.prop("value"));
                    if (e >= i && n >= e) {
                        postageInfo();
                        var s = 1 * $(".postage-price").attr("price") || 0;
                        r.html(e * a + s)
                    } else {
                        window.alert("商品数量应在" + i + "-" + n + "内！"),
                            t.prop("value", i),
                            postageInfo();
                        var s = 1 * $(".postage-price").attr("price") || 0;
                        r.html(i * a + s)
                    }
                }
            })
        }
        function postageInfo() {
            if ($("input[name=postage_info]")) {
                var postage_info = eval("(" + $("input[name=postage_info]").val() + ")"), num = $("input[name=num]").val(), p;
                if (postage_info && postage_info.postage_type) {
                    switch (postage_info.postage_type) {
                        case 1:
                            p = parseInt(postage_info.postage) * parseInt(num);
                            break;
                        case 2:
                            for (var list = postage_info.postage_list, l = list.length, i = 0; l > i; i++) {
                                if (num < list[i].stage || num == list[i].stage) {
                                    p = list[i].postage;
                                    break
                                }
                                if (num > list[l - 1].stage) {
                                    p = list[l - 1].postage;
                                    break
                                }
                            }
                            break;
                        case 3:
                            p = 0;
                            break;
                        default:
                            p = 0
                    }
                    0 == p ? $(".postage-price").html("包邮") : $(".postage-price").html(p + "元"),
                        $(".postage-price").attr("price", p),
                        $("input[name=postage_price]").val(p)
                }
            }
        }
        function setPhone(e) {
            return e.bind("click", function() {
                var e = $("input[name=open_platform_uid]").val()
                    , t = $("input[name=totp_code]").val();
                $.get("/user/setphone?new_mobile_phone=" + e + "&totp_code=" + t).then(function(t) {
                    return 0 === parseInt(t.state) ? (switchPopup(".order-popup", "active"),
                        void $(".buy-add").append("<tr><td>手机号码</td><td></td><td></td><td>" + e + "</td></tr>")) : 1 === parseInt(t.state) ? void $(".error-tip").text(t.text) : void 0
                })
            }),
                !1
        }
        function closeLoginPopup(e) {
            e.bind("click", function() {
                window.history.back(),
                    switchPopup(".order-popup", "active"),
                    switchPopup(".unlogin", "active")
            })
        }
        function closeBindPhonePopup(e) {
            e.bind("click", function() {
                window.history.back(),
                    switchPopup(".order-popup", "active"),
                    switchPopup(".unlogin", "active")
            })
        }
        function closetipPopup(e) {
            e.bind("click", function() {
                $(".order-popup").removeClass("active")
            })
        }
        function switchPopup(e, t) {
            var e = $(e);
            e.hasClass(t) ? e.removeClass(t) : e.addClass(t)
        }
        function addAdress(e) {
            e.bind("click", function() {
                $.get("/order/getprovince").then(function(e) {
                    var t = {};
                    t.info = e,
                        addressPopupTpl(tplAddressPopup, t)
                })
            })
        }
        function addressPopupTpl(e, t) {
            var n = $(e(t));
            $(".buy-now-page").append(n),
                setTimeout(function() {
                    n.addClass("active")
                }, 0),
                n.dismiss = function() {
                    n.removeClass("active"),
                        setTimeout(function() {
                            n.remove()
                        }, 300)
                }
                ,
                n.find(".cancle").click(n.dismiss),
                n.find(".confirm").click(n.dismiss);
            var i = /^\d{11}$/
                , r = /^(\d)*$/;
            return $("input[name=phone]").click(function() {
                var e = $("input[name=phone]").val();
                r.test(e) || $("input[name=phone]").val("")
            }),
                $(".submit-button-web").click(function() {
                    var e = $("input[name=detail_address]").val()
                        , t = $("textarea[name=addressee]").val()
                        , n = $("input[name=phone]").val()
                        , r = $("input[name=zip_code]").val()
                        , a = $("input[name=province_id]").val()
                        , s = $("input[name=city_id]").val()
                        , o = $("input[name=district_id]").val();
                    if ("" === t)
                        return void errorTipOrder(tplErrorTip, "请输入收货人姓名");
                    var l = /^\d{6}$/;
                    return -1 != n.indexOf("****") || i.test(n) ? l.test(r) ? "" === a ? void errorTipOrder(tplErrorTip, "请选择正确的省份") : "" === s ? void errorTipOrder(tplErrorTip, "请选择正确的城市") : "" === o ? void errorTipOrder(tplErrorTip, "请选择正确的区/县") : "" === e ? void errorTipOrder(tplErrorTip, "请输入地址") : ($('input[name="address"]').click(),
                        void setTimeout(function() {
                            $.get("/order/getuseraddress").then(function(e) {
                                var t = "";
                                e.forEach(function(e) {
                                    t += e.is_default ? '<li class="active" id="' + e.id + '"><div class="name"><p class="default">[默认]</p><p>' + e.addressee + '</p><i class="fa fa-check"></i><input type="hidden" name="delivery_address_id" value="' + e.id + '"></div><div class="place">' + e.province_name + " " + e.city_name + " " + e.district_name + " " + e.detail_address + '</div><div class="phone">' + e.phone + '<div class="opate"><span class="edit" id="' + e.id + '">编辑</span><span style="margin:0 5px">|</span><span address_id="' + e.id + '"class="delete">删除</span></div></div></li>' : '<li id="' + e.id + '"><div class="name"><p>' + e.addressee + '</p><i class="fa fa-check"></i></div><div class="place">' + e.province_name + " " + e.city_name + " " + e.district_name + " " + e.detail_address + '</div><div class="phone">' + e.phone + '<div class="opate"><span class="edit" id="' + e.id + '">编辑</span><span style="margin:0 5px">|</span><span address_id="' + e.id + '"class="delete">删除</span></div></div></li>'
                                }),
                                    t += "<input type='hidden' name = 'delivery_address_id' />",
                                    $("#deleteAdress ul").html(t),
                                    t = ""
                            })
                        }, 1e3)) : void errorTipOrder(tplErrorTip, "请输入正确的邮编") : void errorTipOrder(tplErrorTip, "请输入正确的手机号")
                }),
                $("#seleteProvince").click(function() {
                    return $("#allprovince").show(),
                        $("#alldistrict,#allcity").hide(),
                        $("#seleteCity span").html("市级行政区"),
                        $("#seleteDistrict span").html("县/区"),
                        !1
                }),
                $("#seleteCity").click(function() {
                    $("#allcity").show(),
                        $("#alldistrict,#allprovince").hide(),
                        $("#seleteDistrict span").html("县/区");
                    var e = $("input[name=province_id]").val();
                    return $.get("/order/getcity/" + e).then(function(e) {
                        var t = "";
                        e.forEach(function(e) {
                            t += "<li province_id=" + e.province_id + " city_id=" + e.city_id + ">" + e.city_name + "</li>"
                        }),
                            $("#allcity").html(t),
                            t = ""
                    }),
                        !1
                }),
                $("#seleteDistrict").click(function() {
                    $("#alldistrict").show(),
                        $("#allprovince,#allcity").hide();
                    var e = $("input[name=city_id]").val()
                        , t = $("input[name=province_id]").val();
                    return $.get("/order/getdistrict/" + t + "/" + e).then(function(e) {
                        var t = "";
                        e.forEach(function(e) {
                            t += '<li city_id="' + e.city_id + '"province_id="' + e.province_id + '"code="' + e.district_id + '">' + e.district_name + "</li>"
                        }),
                            $("#alldistrict").html(t),
                            t = ""
                    }),
                        !1
                }),
                $("#allprovince li").click(function() {
                    var e = $(this).attr("code")
                        , t = "";
                    return $("#allcity").html(t),
                        $(this).parent().parent().attr("code", $(this).attr("code")),
                        $(this).parent().parent().find(".seleted").text($(this).text()),
                        $("input[name=province_id]").val(e),
                        $("#allprovince").hide(),
                        !1
                }),
                $("#allcity").on({
                    click: function() {
                        var e = $(this).attr("city_id")
                            , t = ($(this).attr("province_id"),
                            "");
                        return $("#alldistrict").html(t),
                            $(this).parent().parent().attr("city_id", $(this).attr("city_id")),
                            $(this).parent().parent().find(".seleted").text($(this).text()),
                            $("input[name=city_id]").val(e),
                            $("#allcity").hide(),
                            !1
                    }
                }, "li"),
                $("#alldistrict").on({
                    click: function() {
                        return $(this).parent().parent().attr("code", $(this).attr("code")),
                            $("#district_id").val($(this).attr("code")),
                            $("#city_id").val($(this).attr("city_id")),
                            $("#province_id").val($(this).attr("province_id")),
                            $(this).parent().parent().find(".seleted").text($(this).text()),
                            $("#alldistrict").hide(),
                            !1
                    }
                }, "li"),
                n
        }
        function deleteAdress(e) {
            e.on({
                click: function() {
                    var e = $(this)
                        , t = e.attr("address_id");
                    return $(".delete-address").addClass("active"),
                        $("#sure").click(function() {
                            $.get("/order/deleteuseraddress/" + t).then(function(t) {
                                t.result && t.result.is_success && (e.parent().parent().parent().remove(),
                                    $('input[name="delivery_address_id"]').val(""),
                                    $(".delete-address").removeClass("active"))
                            })
                        }),
                        $("#cancel").click(function() {
                            $(".delete-address").removeClass("active")
                        }),
                        !1
                }
            }, "ul li .delete")
        }
        function changeAdress(e) {
            e.on({
                click: function() {
                    $(this).siblings().removeClass("active"),
                        $(this).addClass("active"),
                        $('input[name="delivery_address_id"]').val($(this).attr("id"))
                }
            }, "ul li")
        }
        function editAdress(e) {
            e.on({
                click: function() {
                    var e = $(this).attr("id");
                    return $.get("/order/getuseraddress").then(function(t) {
                        var n = {};
                        t.forEach(function(t) {
                            t.id == e && (n.addresseeone = t)
                        }),
                            $.get("/order/getprovince").then(function(e) {
                                n.info = e,
                                    addressPopupTpl(tplAddressPopup, n)
                            })
                    }),
                        !1
                }
            }, "ul li .edit")
        }
        function chooseAddress(e) {
            e.bind("click", function() {
                $("#buyForm").attr("action", "/order/address/list"),
                    $('input[name="confirmorder"]').click()
            })
        }
        function orderPageAddress(e) {
            e.bind("click", function() {
                $("input").hasClass("wap_totp_code") ? $("input[name=wap_totp_code]").val() ? ($("#buyForm").attr("action", "/order/address/add"),
                    $('input[name="confirmorder"]').click()) : errorTipOrder(tplErrorTip, "请输入手机号和验证码") : ($("#buyForm").attr("action", "/order/address/edit"),
                    $('input[name="confirmorder"]').click())
            })
        }
        $(".buy-now-page").length > 0 && initBuy()
    }),
    $(document).ready(function() {
        function e() {
            r($(".goto-exchange")),
                s($(".coupon-list ul")),
                l($(".goto-pay")),
                d($(".order-popup .close")),
                c($(".order-popup #goto-success")),
                a($(".show-coupon")),
                i($(".bank ul li")),
                t(),
                SPOT.act("ORDER_SUBMIT", {
                    ext: {
                        order_id: ENJOY_INFO.order_id
                    }
                })
        }
        function t() {
            $("#web-go-to-buy").on("click", function() {
                SPOT.act("PAY", {
                    ext: {
                        order_id: ENJOY_INFO.order_id,
                        channel: ENJOY_INFO.is_weixin_channel ? "WECHAT" : "ALIPAY"
                    }
                })
            }),
                $("#wap-go-to-buy").on("click", function() {
                    SPOT.act("PAY", {
                        ext: {
                            order_id: ENJOY_INFO.order_id,
                            channel: ENJOY_INFO.is_weixin_channel ? "WECHAT" : "ALIPAY"
                        }
                    })
                })
        }
        function n(e, t) {
            var n = $(e(t));
            $("body").append(n),
                setTimeout(function() {
                    n.remove()
                }, 2e3)
        }
        function i(e) {
            var t = $("#web-go-to-buy").attr("href");
            e.bind("click", function() {
                e.find("span").removeClass("active"),
                    e.find("i").removeClass("active"),
                    $(this).find("span").addClass("active"),
                    $(this).find("i").addClass("active"),
                    $(".tip-alipay-web").html("你选择了<span>" + $(this).find("span").attr("bank-name") + "</span>进行付款"),
                    $("#web-go-to-buy").attr("href", t + "&bank_code=" + $(this).find("span").attr("data-bank-code"))
            })
        }
        function r(e) {
            e.bind("click", function() {
                var e = $("input[name=coupon_code]").val() + "," + $("input[name=product_id]").val()
                    , t = $(".buy-pay-page .temp1_num").text();
                $.get("/order/changecoupon/" + e + "/" + t).then(function(e) {
                    if (e && e.error_code_content)
                        return void n(tplErrorTip, e.error_code_content);
                    n(tplErrorTip, "兑换成功");
                    var t = "";
                    e.info && e.info.forEach(function(e) {
                        t += '<li data-coupon-id="' + e.id + '" data-coupon-amount=' + e.amount + '><div><span class="name">' + e.name + '</span><span class="amount">' + e.amount + '</span><span class="unit">元</span><span class="choose"><i class="fa fa-check-circle"></i></span></div><p>' + e.name + "</p><p>" + e.content + "</p><p>有效期" + e.create_at + "至" + e.expire_at + "</p></li>"
                    }),
                        $(".coupon-list ul").html(t),
                        t = ""
                })
            })
        }
        function a(e) {
            e.bind("click", function() {
                var t = $(".coupon");
                "none" === t.css("display") ? (t.show(),
                    e.find("i").removeClass("fa-angle-down").addClass("fa-angle-up")) : (t.hide(),
                    e.find("i").removeClass("fa-angle-up").addClass("fa-angle-down"))
            })
        }
        function s(e) {
            var t = $(".goto-pay").attr("href");
            e.on({
                click: function() {
                    $("input[name=coupon_id]").val($(this).attr("data-coupon-id")),
                        $(this).addClass("active").siblings().removeClass("active"),
                        $(".coupon-amount").html("- " + $(this).attr("data-coupon-amount") + "元");
                    var e = $(".total_fee").attr("total_fee") - $(this).attr("data-coupon-amount")
                        , n = $("input[name=coupon_id]").val()
                        , i = navigator.userAgent.toLowerCase();
                    i.match(/mobile/) ? i.match(/(micromessenger)/) ? $(".goto-pay").attr("href", t + "&coupon_id=" + n + "&platform=0&coupon_fee=" + $(this).attr("data-coupon-amount")) : $(".goto-pay").attr("href", t + "&coupon_id=" + n + "&platform=0") : $(".goto-pay").attr("href", t + "&coupon_id=" + n + "&platform=1"),
                        n = 0,
                        e > 0 ? $(".confirm-price").html(e) : $(".confirm-price").html("0")
                }
            }, "li")
        }
        function o(e, t) {
            var n = $(e);
            n.hasClass(t) ? n.removeClass(t) : n.addClass(t)
        }
        function l(e) {
            var t = navigator.userAgent.toLowerCase()
                , n = e.attr("href");
            t.match(/mobile/) ? e.attr("href", n + "&platform=0") : e.attr("href", n + "&platform=1"),
                e.bind("click", function() {
                    o(".go-pay-popup", "active")
                })
        }
        function c(e) {
            e.on({
                click: function() {
                    var e = $("input[name=order_id]").val();
                    $.get("/order/getorderstate/" + e).then(function(t) {
                        1 === t.result.order_status ? (SPOT.act("PAY_RECALL", {
                            ext: {
                                order_id: e,
                                status: "SUCCESS"
                            }
                        }),
                            window.location.href = window.location.protocol + "//" + window.location.host + "/order/success?order_id=" + e) : SPOT.act("PAY_RECALL", {
                            ext: {
                                order_id: e,
                                status: "FAILED",
                                message: t.error_msg
                            }
                        })
                    })
                }
            }, e)
        }
        function d(e) {
            e.bind("click", function() {
                o(".order-popup", "active")
            })
        }
        $(".buy-pay-page").length > 0 && e()
    }),
    $(function() {
        var e = $("#phone-number");
        $("#trace-submit").on("click", function() {
            var t = e.val();
            return t ? t.match(/\d+/g) && 11 == t.match(/\d+/g)[0].length ? void $.get("/trace/submitphone/" + [INFO.ORDER_ID, INFO.GROUP_ID, t].join("/"), function(e) {
                e.express_token ? window.location.href = "/trace/detail/" + [INFO.ORDER_ID, INFO.GROUP_ID, e.express_token, 0].join("/") : "4041031" == e.error_code ? alert("您查询的订单货物暂未发出，尚未有相关物流信息！") : alert(e.display_msg)
            }, "json") : void alert("请填入正确的手机号码") : void alert("收件人手机号码不能为空")
        })
    }),
    $(".send").bind("click", sendCode),
    $(".return-item").click(function() {
        history.back()
    }),
    $(".quit").click(function() {
        WB2.logout(function() {})
    }),
    $(document).ready(function() {
        function e() {
            $(".login");
            t($(".order-popup")),
                a($("#loginWithTotp")),
                i($(".register-success")),
                r($("input[name=sure]"))
        }
        function t(e) {
            e.bind("click", function() {
                n($(".order-popup"), "active")
            })
        }
        function n(e, t) {
            var n = $(e);
            n.hasClass(t) ? n.removeClass(t) : n.addClass(t)
        }
        function i(e) {
            e.bind("click", function() {
                e.attr("data-info") && (window.location.href = window.location.protocol + "//" + window.location.host)
            })
        }
        function r(e) {
            e.bind("click", function() {
                var e = $("input[name=phone]").val()
                    , t = $("input[name=totp_code]").val()
                    , n = $("input[name=new_password]").val()
                    , i = $("input[name=confirm_password]").val();
                n != i && alert("两次密码不一致"),
                    $.post("/user/reset-password-phone-web", {
                        mobile_phone: e,
                        totp_code: t,
                        new_password: n
                    }).then(function(e) {
                        e && e.body && e.body.error_code ? 4000002 == e.body.error_code ? alert("手机号错误") : 4030009 == e.body.error_code ? alert("验证码错误") : alert(e.body.error_msg) : window.location.href = window.location.protocol + "//" + window.location.host + "/user/forgot-password/phone/success"
                    })
            })
        }
        function a(e) {
            if (e && e.length) {
                window.vm = new Vue({
                    el: e[0],
                    data: {
                        random: Math.random(),
                        showCaptchaModal: !1,
                        captchaVerifyCode: "",
                        firstTime: !0,
                        failed: !1,
                        phone: "",
                        countdown: 0,
                        totp: "",
                        validating: !1,
                        coupon: sessionStorage.getItem("loginWithCoupon")
                    },
                    init: function() {
                        $(".login-register").removeClass("loading")
                    },
                    computed: {
                        countdownButtonText: function() {
                            return this.countdown < 0 ? "发送中……" : 0 === this.countdown ? this.firstTime ? "获取验证码" : "重新发送" : this.countdown + "秒"
                        },
                        validateCaptchaButtonText: function() {
                            return this.countdown < 0 ? "验证中……" : "确定"
                        }
                    },
                    methods: {
                        changeRandom: function() {
                            this.random = Math.random()
                        },
                        startCountdown: function() {
                            function e() {
                                if (t.countdown = -1 === t.countdown ? 60 : t.countdown - 1,
                                        t.countdown) {
                                    var i = (new Date).valueOf() - n - 1e3 * (60 - t.countdown);
                                    setTimeout(e, 1e3 - i)
                                }
                            }
                            if (-1 !== this.countdown)
                                return !1;
                            var t = this
                                , n = (new Date).valueOf();
                            e()
                        },
                        sendLoginTotp: function() {
                            if (this.countdown)
                                return !1;
                            if (this.countdown = -1,
                                    !/^1\d{10}$/.test(this.phone))
                                return alert("请输入正确的手机号码"),
                                    this.countdown = 0,
                                    !1;
                            this.firstTime = !1;
                            var e = {
                                phone: this.phone
                            };
                            this.captchaVerifyCode && (e.captchaVerifyCode = this.captchaVerifyCode,
                                this.captchaVerifyCode = "");
                            var t = this;
                            return $.ajax("/user/getTotp", {
                                data: e,
                                method: "POST"
                            }).always(function(e) {
                                var n;
                                n = "function" == typeof (e && e.then) ? e.responseJSON : e || {},
                                    "SUCCESS" === n.state ? (t.showCaptchaModal = !1,
                                        t.startCountdown()) : n.captchaVerifyCodeInvalid ? (t.countdown = 0,
                                        "is_right"in n ? (alert("图片验证码错误，请重试"),
                                            t.changeRandom()) : t.promptCaptchaModal()) : (alert("验证码发送错误，请稍后再试"),
                                        location.reload())
                            }),
                                !1
                        },
                        promptCaptchaModal: function(e) {
                            this.captchaVerifyCode = "",
                                this.showCaptchaModal = !0
                        },
                        validateCode: function(e) {
                            if (this.validating)
                                return !1;
                            this.validating = !0;
                            var t = this;
                            return $.post("/user/loginByPhone", {
                                account: this.phone,
                                totp_code: this.totp
                            }, function(e) {
                                t.validating = !1,
                                    e.user && e.user.access_token ? t.loginSucceed() : t.loginFailed()
                            }),
                                !1
                        },
                        loginFailed: function(e) {
                            this.failed = !0
                        },
                        loginSucceed: function(e) {
                            if (!ENJOY.querystring)
                                return location.href = "/",
                                    !1;
                            var t = sessionStorage.getItem("loginWithCoupon");
                            t && (sessionStorage.setItem("couponAutoExchange", t),
                                sessionStorage.removeItem("loginWithCoupon")),
                                ENJOY.querystring.product_id ? location.href = "/product/" + ENJOY.querystring.product_id + "/" : ENJOY.querystring.url ? location.href = ENJOY.querystring.url : location.href = "/"
                        },
                        resetFailed: function() {
                            this.failed = !1
                        }
                    }
                })
            }
        }
        function s() {
            function e(e) {
                /enjoynow/i.test(n) ? "- 新人礼券 -" : e.name;
                $wrapper = $('<div style="width: 100%;height: 100%;background: rgba(0,0,0,0.3);position: fixed;top: 0;left: 0;z-index: 100;"></div>').appendTo("body"),
                    $innerWrapper = $('<div style="left: 50%; width: 0; overflow: visible; position: absolute"></div>').appendTo($wrapper),
                    $fail = $('<div style="width: 300px;left: -150px;position: relative;top: 180px;height: 203px;background: #fff;border-radius: 4px; overview: hidden"><div style="height:63px; background: #f6f8f8; border-radius: 4px 4px 0 0; text-align: center; line-height: 63px; overview: hidden; color: #2c3038; font-size: 18px; font-weight: bold">登录成功</div><div style="padding: 30px 20px 20px">' + (e.tip || "您不满足礼券兑换条件，没有获得礼券。") + "</div></div>").appendTo($innerWrapper),
                    $dismiss = $('<div style="overflow: hidden; text-align: center; margin: 0 20px; height: 40px; line-height: 40px; border: solid 1px #e0e0e0; ">好吧</div>').appendTo($fail),
                    $dismiss.on("click", function() {
                        $wrapper.remove()
                    })
            }
            function t(e, t) {
                var n = /enjoynow/i.test(e) ? "- 新人礼券 -" : t.name;
                $wrapper = $('<div style="width: 100%;height: 100%;background: rgba(0,0,0,0.3);position: fixed;top: 0;left: 0;z-index: 100;"></div>').appendTo("body"),
                    $innerWrapper = $('<div style="left: 50%; width: 0; overflow: visible; position: absolute"></div>').appendTo($wrapper),
                    $success = $('<div style="width: 300px;left: -150px;position: relative;top: 120px;height: 360px;background: #fff;border-radius: 4px; overview: hidden"><div style="height:230px; background: #000; border-radius: 4px 4px 0 0;"><div style="color: #fff; /*width:94px;*/ left: 40px; position: absolute; top: 75px; right: 40px; text-align: center;"><div style="margin-bottom: 5px; line-height: 1.4">' + n + '</div><div style="font-size: 40px; font-weight: bold; line-height: 1">' + t.amount + '元</div></div></div><div style="padding: 20px">登录成功，礼券已经在您的账户中，下单时即可使用~</div></div>').appendTo($innerWrapper),
                    $dismiss = $('<div style="overflow: hidden; text-align: center; margin: 0 20px; height: 40px; line-height: 40px; border: solid 1px #e0e0e0; ">我知道了</div>').appendTo($success),
                    $dismiss.on("click", function() {
                        $wrapper.remove()
                    })
            }
            var n = sessionStorage.getItem("couponAutoExchange");
            n && window.ENJOY_USER && ENJOY_USER.id && "/user/login" !== location.pathname && (sessionStorage.removeItem("couponAutoExchange"),
                $.post("/topic/exchange", {
                    coupon_code: n
                }, function(i) {
                    if (i)
                        if (i.error)
                            e(i);
                        else if (i.length && i[0] && i[0].amount) {
                            var r = {
                                name: i[0].name
                            };
                            r.amount = i.map(function(e) {
                                return parseInt(e.amount) || 0
                            }).reduce(function(e, t) {
                                return e + t
                            }),
                                t(n, r)
                        }
                }),
                window.couponAutoExchangeSucceed = t)
        }
        ENJOY.querystring && ENJOY.querystring.code && sessionStorage.setItem("loginWithCoupon", ENJOY.querystring.code),
        $(".login-register").length > 0 && e(),
            s()
    });
