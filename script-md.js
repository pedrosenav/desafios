const fs = require('fs')
const { text } = require('stream/consumers')

const desafios_dir = __dirname
const readme_file = __dirname + '/README.md'

const header = `# Desafios HTML e CSS\nMinhas soluções de desafios do curso de HTML5 e CSS3 do @cursoemvideo\n`

fs.writeFile(readme_file, header, (err) => {
	if (err) console.log(err)
})

const addLink = (file, i, path) => {
	fs.appendFileSync(path, `\n[Desafio ${i}](./${file})`, (err) => {
		if (err) console.log(err)
	})
}

const readREADME = (path) => {
	return new Promise((resolve, reject) => {
		fs.readdir(path, (err, content) => resolve(content))
	})
}

readREADME(desafios_dir)
	.then((files) => {
		return files.filter((file) => /d\d{3}/.test(file))
	})
	.then((desafios) => {
		desafios.forEach((desafio, i) => {
			addLink(desafio, i + 1, readme_file)
		})
	})
	.catch((err) => console.log(err))
