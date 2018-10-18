exports.post = (req, res) => {
    const files = req.files;

    const fileArr = [];
    for (const key in files) {
        fileArr.push(files[key]);
    }

    fileArr.forEach(file => {
        file.mv(`${__dirname}/../client/src/uploaded-files/${file.name}`, err => {
            if (err) {
                return res.status(500).send(err);
            }
        })
    })
}