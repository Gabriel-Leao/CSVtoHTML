import { writeFileSync } from 'fs'

export class Writer {
  write(fileName: string, data: string) {
    try {
      writeFileSync(fileName + '.html', data)
      return `Arquivo ${fileName} criado com sucesso!`
    } catch (error) {
      return `Não foi possível criar o arquivo ${fileName}.`
    }
  }
}
