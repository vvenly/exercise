if(!sessionStorage['loginUid']){//如果内存中没有读取到Uid,则返回登录页面
	location.href='productlist.html';
}
$(function(){
	$("#jd_header").load("data/jd_header.php", function () {
		$('#welcome').html('欢迎回来：'+sessionStorage['loginUname']);
	});
	$('#jd_footer').load("data/jd_footer.php");
});

/*功能点3：页面加载完成后，异步请求当前登录用户购物车内容*/
$(function(){
	var userId=sessionStorage['loginUid'];
	$.ajax({
		type:'GET',
		url:'data/cart_detail_list.php',
		data:{'uid':userId},
		success:function(data){
			console.log('开始处理响应数据');
			console.log(data);
			var html='';
			$.each(data,function(i,p){
				html+=`
					 <tr>
							<td>
							<input type="checkbox"/>
							<input type="hidden" value="${p.did}">
							<div><img src="${p.pic}"></div>
							</td>
							<td><a href="">${p.pname}</a></td>
							<td>${p.price}</td>
							<td>
							<button>-</button><input type="text" value="${p.count}"/><button>+</button>
							</td>
							<td><span>${p.price*p.count}</span></td>
							<td><a class="btn" href="${p.did}">删除</a></td>
					 </tr>`;
			});
			$('#cart tbody').html(html);
		},
		error:function(){
			alert('页面加载失败');
		}
	});
});
/*功能点4：点击"删除按钮" 异步删除购物车中的该商品**/
//$('#tbodyList').on('click','a:contains("删除")',function(e){
//	e.preventDefault();
//	var did=$(this).attr('href');
//	var that=this;
//	console.log(did);
//	$.ajax({
//		type:'POST',
//		url:'data/7.cart_detail_delete.php?did='+did,
//		success:function(data){
//			console.log('开始处理响应数据');
//			console.log(data);
//			if(data.code<0){
//				alert('购买记录删除失败！原因：'+data.msg);
//			}else{
//				alert('购买记录删除成功');
//				$(that).parent().parent().remove();
//			}
//		},
//		error:function(){
//			alert('删除失败！请检查');
//		}
//	});
//});