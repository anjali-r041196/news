$(document).ready(function(){
    $.ajax({
        type:"GET",
        url:"https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=b47872b378544aa1bbe8128555a7a542",
        success:function(data){
            
            var f=data.articles;
           console.log(f);
var output="<table class='table'><thead><tr><th>title</th><th>description</th><th>read me</th><th>image</th></tr></thead>"
            for(var j in f){
output +="<tr><td>" +f[j].title+"</td>"
output +="<td>" +f[j].description+"</td>"
output +="<td><A Href=" +f[j].url+">readme</A></td>"
output +="<td><img src="+f[j].urlToImage+" style=width:50px;height:50px></td></tr>"
            }


            

            output +="</table>"   ;                         
            $(".result").html(output);








            
        }
    })
})