import { readFile, writeFile, writeFileSync } from 'fs'

writeFile(`./src/hello.txt`, 'Hello, World!', (error) => {
  if (error) {
    console.log(error)
  }
})

readFile(`./src/hello.txt`, { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.log(error)
  }
  console.log(data)
})

const modifyJson = (user: string, pass: string) => {
  readFile('./src/user.json', { encoding: 'utf-8' }, (err, data) => {
    if (err) {
      console.log(err)
    } else {
      const content: { name: string; password: string } = JSON.parse(data)

      content.name = user
      content.password = pass

      writeFile('./src/user.json', JSON.stringify(content), (err) => {
        if (err) {
          console.log(err)
        }
      })
    }
  })
}

modifyJson('Magic Lion', 'arroz and beans')
