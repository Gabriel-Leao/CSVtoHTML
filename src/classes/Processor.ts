export class Processor {
  static process(data: any) {
    const lines = data.split('\r\n')
    const rows: string[] = []

    lines.forEach((row: any) => {
      const separatedLine = row.split(',')
      rows.push(separatedLine)
    })

    return rows
  }
}
