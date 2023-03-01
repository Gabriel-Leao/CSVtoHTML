import { renderFile } from 'ejs'

interface ITable {
  header: string[]
  games: string[]
}

export class HtmlParser {
  static async parse(table: ITable) {
    return await renderFile('./src/table.ejs', {
      header: table.header,
      games: table.games,
    })
  }
}
