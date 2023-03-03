import { unlinkSync } from 'fs'

export class Delete {
  static delete(filePath: string) {
    unlinkSync(filePath)
  }
}
