/**功能点1：为“提交”按钮绑定事件监听**/
$('.bt-submit').click(function(){
  //表单序列化
  var data = $('#form-register').serialize();
  //console.log(data);  //k=v&k=v

  //发起异步AJAX请求
  $.ajax({
    type: 'POST',
    url: 'data/8_register.php',
    data: data,
    success: function(obj){
      if(obj.code<0){
        alert('注册失败！错误原因：'+obj.msg);
      }else {
        alert('注册成功！3s后将自动跳转到登录页面...')
        setTimeout(function(){
          location.href = 'productlist.html';
        }, 3000);
      }
    },
    error: function(){
      alert('异步请求有误！请检查响应消息！')
    }
  });
});