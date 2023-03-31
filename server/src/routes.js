//////Importar Controladores/////////
const AuthenticationController = require('./controllers/AuthenticationController')
//const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const SongsController = require('./controllers/SongsController')
const TestController = require('./controllers/TestController')
const HorasController = require('./controllers/HorasController')
const Upload = require('./controllers/Upload')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './uploads',
    filename: function (req, file, cb) {
        cb(null, 'excel' + '-' + Date.now() + '.xlsx')
      }
})
const upload = multer({ storage: storage })

module.exports = (app) => {
    app.get("/", (req, res) =>{
        res.send("Esta es la api")
    })
    app.post('/register',
    //AuthenticationControllerPolicy.register,
    AuthenticationController.register,
    )
    app.post('/login',
    //AuthenticationControllerPolicy.register,
    AuthenticationController.login,
    )
    app.get('/browse',
    SongsController.index,
    )
    app.post('/browse',
    SongsController.post,
    )
    app.get('/test',
    TestController.obtRutas,
    )
    app.post('/test',
    TestController.insRutas,
    )
    app.post('/upload', upload.single('file'),
    Upload.subirExcel,
    )
    app.get('/horas',
    HorasController.obtHoras,
    )
    app.get('/horas2',
    HorasController.obtHorasHoy,
    )
    app.post('/horas',
    HorasController.insHoras,
    )
    
    
}