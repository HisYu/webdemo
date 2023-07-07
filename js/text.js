function ajax(options){
    const xhr = new XMLHttpRequest()
    xhr.open(options.type,'http://finalShop.lzaly.cn' + options.url)
    if(options.type === 'post' || options.type === 'put' || options.type === 'delete' || options.type===''){
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.send(JSON.stringify(options.data))
}else{
    xhr.send()
}
    xhr.onreadystatechange = function() {
    if(xhr.readyState === 4 && xhr.status === 200){
        options.success(JSON.parse(xhr.responseText))
}
}
}