export class Table {
  header: string[]
  games: string[]

  constructor(array: any[]) {
    this.header = array[0]
    array.shift()
    this.games = array
  }

  get gamesCount() {
    return this.games.length
  }

  get columnsCount() {
    return this.header.length
  }
}
