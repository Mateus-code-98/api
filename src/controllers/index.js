const hello = (req, res, next) => {
    res.json({ message: "OK, foda-se!" })
}

const uploadFile = (req, res, next) => {
    const { filename, path: caminho } = req.file
    res.json({ filename, path: caminho })
}

const createPDF = async (req, res, next) => {
    const pdf = require("html-pdf")
    const path = require("path");
    const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp')
    const ejs = require("ejs")
    const htmlFolder = path.resolve(__dirname, '..', 'pdf')
    ejs.renderFile(`${htmlFolder}\\index.ejs`, (err, html) => {
        if (err) {
            console.log(err)
        } else {
            pdf.create(html, { format: "A4" }).toFile(`${tmpFolder}\\meuPau.pdf`, (err, resu) => {
                if (err) {
                    console.log(err)
                } else {
                    return res.json({filename:"meuPau.pdf"})
                }
            })
        }
    })


}
module.exports = { hello, uploadFile, createPDF }