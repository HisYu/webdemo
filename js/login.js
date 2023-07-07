function ajax(method,url,func,params){
    const xhr = new XMLHttpRequest()
    xhr.open(method,'http://finalShop.lzaly.cn'+ url)
    if(method === 'post'){
        xhr.setRequestHeader('Content-Type','application/json')
    }
    xhr.send(JSON.stringify(params))
    xhr.onreadystatechange = function () {
        if (xhr.status===200 && xhr.readyState === 4) {
            const data =JSON.parse(xhr.responseText)
            func(data);
        }
    }
}




// 登录
function login(){
   let id = document.getElementById('inputid').value;
   let pwd =document.getElementById('password').value;

    ajax('post','/user/login',data =>{
        console.log(data);
        if (data.msg === 'success') {
            alert('登录成功')
            sessionStorage.setItem('user',data.data.id);
            location.replace("./shouye.html");
        }
      else  if(id=== ''){
            alert('用户名不能为空')
        }
        else if(pwd===''){
            alert('密码不能为空')
        }
        else{
            alert('用户名或密码错误')
        }
    }, {
        username: id,
        password: pwd
      });
    }

    //注册
function register(){
    let id = document.getElementById('inputid').value;
    let pwd =document.getElementById('password').value;
   
    ajax('post','/user/register',data =>{
        console.log(data);
        if (data.msg === 'success') {
            alert('注册成功')}
             else  if(id=== ''){
            alert('用户名不能为空')
        }
        else if(pwd===''){
            alert('密码不能为空')
        }
        else{
            alert('未知错误')
        }
    },{
            "username": id,
            "password": pwd  
    });
}