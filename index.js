var server = require('./config/server')

var bancodedados = require('./config/bancodedados')

var app = server.app
var porta = server.porta

var conexao = bancodedados.conexao
var documentos = bancodedados.documentos

app.get('/',(req,res)=>{
    conexao()

    new documentos({
        mensagem:'teste 09092021',
        nome:'teste 11h46',
        cargo:'teste de conexao'
    }).save()
    res.send('informações enviadas!')
})

app.listen(porta)