/**功能点1：若用户未登录，则跳转到登录页面（产品列表页）**/
if(!sessionStorage['loginUid']){
  location.href = 'productlist.html';
}

/**功能点2：异步请求页头和页尾，修改页头中的欢迎消息**/
$('#header').load('data/header.php',function(){
  $('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
});
$('#footer').load('data/footer.php');

/**功能点3：根据用户编号，异步请求其购物车中内容**/
$.ajax({
  type: 'GET',
  url: 'data/6_cart_detail_list.php',
  data: {uid: sessionStorage['loginUid']},
  success: function(list){
    console.log('开始处理订单商品信息');
    console.log(list);
    var html = '';
    var sum = 0;  //所有商品的总金额
    $.each(list, function(i,p){
      sum += p.price * p.count; //计算总金额
      html += `
      <div class="goods-item">
        <div class="p-img">
          <a target="_blank" href=""><img src="${p.pic}"></a>
        </div>
        <div class="p-name">
          <a href="" target="_blank">${p.pname}</a>
        </div>
        <div class="p-price">
          <strong class="jd-price">￥${p.price}</strong>
          <span class="p-num">x${p.count}</span>
          <span class="p-state">有货</span>
        </div>
      </div>
      `;
    });
    $('.goods-items').html(html); //修改商品列表
    $('.price-num').html('￥'+sum.toFixed(2)); //修改总金额
  }
});