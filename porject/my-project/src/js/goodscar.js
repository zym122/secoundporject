

function realconsole() {

    var goods = [
        {
            imgurl: 'https://z12.tuanimg.com/imagev2/trade/800x800.8710d3065d248549363a483709e33b57.380x380.jpg',
            title: ' 小香风阔腿裤套装女2019新款时尚早初秋季夏两件套洋气减龄裤装潮',
            originalprice: '￥53.47',
            presentprice: '28.80',
            price: '28.80',
            stock: 10
        },
        {
            imgurl: 'https://z12.tuanimg.com/imagev2/trade/800x800.6046e60171bd65e29d00952fbc467c4b.380x380.jpg',
            title: ' 毛衣新款韩版圆领套头前短后长针织衫宽松显瘦包芯纱打底衫女',
            originalprice: '￥78.00',
            presentprice: '39.00',
            price: '39.00',
            stock: 12
        },
        {
            imgurl: 'https://z12.tuanimg.com/imagev2/trade/800x800.e6119f602853ee94437c267dfe328e24.380x380.jpg',
            title: ' 阔太太连衣裙2019新款秋装女装中长款拼接韩版显瘦长袖打底a字裙',
            originalprice: '￥52.00',
            presentprice: '26.00',
            price: '26.00',
            stock: 20
        }
    ];
    var conten = document.getElementById('conten');
    var html = goods.map(function (item) {
        return `<div class="s-con">
                    <input type="checkbox" class="goods-checkb">
                    <div class="msg">
                        <img src="${item.imgurl}" alt="">
                        <p>${item.title}</p>
                    </div>
                    <div class="unit-price">
                        <p><del>${item.originalprice}</del></p>
                        <div class="jg"><p class="jiage"></p></div>
                    </div>
                    <div class="price">
                        
                        <p class="xiaoji">${item.price}</p>
                    </div>
                    <div class="operation">
                        <a href="###">移入收藏夹</a>
                        <a href="###" class="del">删除</a>
                    </div>
                </div>`;
    }).join('');
    conten.innerHTML = html; //数据渲染

    function changeNum2(num, num2) {
        var kucun = goodNum[num2].dataset.kucun;//获取库存
        // console.log(kucun);
        if (num < 1) {//最小
            num = 1;
        } else if (num >= kucun) {//最大数，不能超过库存量
            num = kucun;
        }
        goodNum[num2].value = num;
        //小计==数量 * 单价
        xiaoji[num2].innerHTML = (num * jiage[num2].innerHTML).toFixed(2);
        total();//数量变化，总价和总数量要跟着变
    }
    //加减
    var cur = conten.getElementsByClassName('cur');//减
    var add = conten.getElementsByClassName('add');//加
    var goodNum = conten.getElementsByClassName('textnum');//拿到数量
    var xiaoji = conten.getElementsByClassName('xiaoji');//小计
    var jiage = conten.getElementsByClassName('jiage');//价格
    var del = conten.getElementsByClassName('del');//删除
    var scon = conten.getElementsByClassName('s-con');//删除
    var bottomCheckb = document.getElementById('bottom-checkb');//全选按钮
    var goodsCheckb = document.getElementsByClassName('goods-checkb');//单个选择按钮 
    var jianshu = document.querySelector('.jianshu');
    var zongjia = document.querySelector('.zongjia');
    var btn = document.querySelector('.btn');
    var dels = document.querySelector('.dels');
    for (i = 0; i < cur.length; i++) {
        cur[i].index = i;
        add[i].index = i;
        goodNum[i].index = i;
        del[i].index = i;
        cur[i].onclick = function () {//减
            var num = goodNum[this.index].value;
            num--;
            changeNum2(num, this.index);
        }
        add[i].onclick = function () {//加
            var num = goodNum[this.index].value;
            num++;
            changeNum2(num, this.index);
        }
        goodNum[i].oninput = function () {//如果手动输入数据
            var num = this.value;
            changeNum2(num, this.index);
        }
        del[i].onclick = function () {//删除
            // var res = confirm('您确定要删除这行吗？');
            // if (res) {
                // newarr.sort(function (a, b) {
                //     return a - b; //a-b为升序，b-a为降序
                // });
                conten.removeChild(scon[this.index]);//删除父节点中的scon
            // }
            for (i = 0; i < scon.length; i++) {
                del[i].index = i;
            }
            total();
        }
    }
    bottomCheckb.onclick = function () {
        for (var i = 0; i < goodsCheckb.length; i++) {
            goodsCheckb[i].checked = bottomCheckb.checked;
        }
        total();
    }
    function ischeckall() {
        var num = 0;
        var arr = [];
        for (var i = 0; i < goodsCheckb.length; i++) {
            if (goodsCheckb[i].checked) {
                num++;
                arr.push(i);
            }
        }
        if (num == goodsCheckb.length && num != 0) {
            bottomCheckb.checked = true;
        } else {
            bottomCheckb.checked = false;
        }
        return arr;
    }
    function total() {
        var arr = ischeckall();
        var sum = '';
        var priceAll = 0;
        arr.forEach(function (item) {
            sum = '';
            priceAll += xiaoji[item].innerHTML * 1;
        });

        // console.log(arr);

        jianshu.innerHTML = sum;
        zongjia.innerHTML = priceAll.toFixed(2);
        if (arr.length) {
            btn.className = 'bg1';
        } else {
            btn.className = 'btn';
        }
    }
    for (var i = 0; i < goodsCheckb.length; i++) {
        goodsCheckb[i].onclick = function () {
            total();
        }
    }
    dels.onclick = function () {
        var arr = ischeckall().reverse();
        // var res = confirm('您确定要删除选中的行吗？');
        // if (res) {
            arr.forEach(function (item) {
                conten.removeChild(scon[item]);
            });
            total();
        // }
    }
}
export {
    realconsole
}