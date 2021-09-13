var server = require('./config/server')

var bancodedados = require('./config/bancodedados')

var app = server.app
var porta = server.porta

var conexao = bancodedados.conexao
var documentos = bancodedados.documentos

app.set('view engine',"ejs")

//abrir o form.ejs
app.get('/',(req,res)=>{
    res.render("form")
})

//gravar as informjacoes do formulario form.ejs
app.post('/gravar',(req,res)=>{
    var dados = req.body

    conexao()

    new documentos({
        mensagem:dados.mensagem,
        nome:dados.nome,
        cargo:dados.cargo
    }).save()
    res.send('informações enviadas!')
})

app.listen(porta)