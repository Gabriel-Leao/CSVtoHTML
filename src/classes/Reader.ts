import { readFileSync } from 'fs'

export class Reader {
  read(filePath: string) {
    try {
      return readFileSync(filePath, 'utf-8')
    } catch (error: any) {
      return 'Arquivo não encontrado!'
    }
  }
}
