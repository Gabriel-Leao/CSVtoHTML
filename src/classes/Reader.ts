import { readFileSync, writeFileSync } from 'fs'
import { parse } from 'node-xlsx'
import { Delete } from './Delete'

export class Reader {
  readCSV(filePath: string) {
    try {
      return readFileSync(filePath, 'utf-8')
    } catch (error: any) {
      return 'Arquivo não encontrado!'
    }
  }

  readXLSX(filePath: string) {
    const obj = parse(filePath, {
      dateNF: 'dd/mm/yyyy',
      cellDates: true,
    })
    const rows: any = []
    let writeStr = ''

    for (let i = 0; i < obj.length; i++) {
      let sheet = obj[i]
      //loop through all rows in the sheet
      for (let j = 0; j < sheet['data'].length; j++) {
        //add the row to the rows array
        rows.push(sheet['data'][j])
      }
    }

    //creates the csv string to write it to a file
    for (let i = 0; i < rows.length; i++) {
      writeStr += rows[i].join(',') + '\n'
    }

    const treatedContent = writeStr.replace(/(^[ \t]*\n)/gm, '').trim()
    const fileName = __dirname + Date.now() + '.csv'

    writeFileSync(fileName, treatedContent)
    const data = this.readCSV(fileName)
    Delete.delete(fileName)
    return data
  }
}
