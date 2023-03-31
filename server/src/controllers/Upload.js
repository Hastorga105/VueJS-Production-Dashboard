const xlsxFile = require('read-excel-file/node')
const xl = require('excel4node')
const fs = require('fs-extra')

module.exports = {
    
    async subirExcel (req, res){
        res.json({ file: req.file})
        /*try {
            let file = req.files.file
            fs.ensureDirSync('../docs')
            file.mv(`../docs/${file.name}`)
            console.log("Subiendo el archivo")
        } catch (err){
            console.log(err)
        }*/
    }, 
}