var dt= require('./export1');



 var http = require('http');
 var url = require('url')

 console.log('oi tudo certo');

 http.createServer(function(req,res)
 {
    //obter dados da url enviada 
    var sendUrl = url.parse(req.url, true).query

   res.writeHead(200,
    {'Content-Type': 'text/html;Charset=utf-8'})
  res.end('<h1>Alo turma</h1>'+dt.obterData()+'<br><h1> Data local</h1>'+
  'Url enviada = '+ sendUrl.ano);
  
}).listen(80);