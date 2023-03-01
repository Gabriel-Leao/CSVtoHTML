import { HtmlParser } from './classes/HtmlParser'
import { Processor } from './classes/Processor'
import { Reader } from './classes/Reader'
import { Table } from './classes/Table'

const leitor = new Reader()

const main = async () => {
  const data = leitor.read('./src/JogosQueZerei.csv')
  const processedData = Processor.process(data)
  const users = new Table(processedData)

  const html = await HtmlParser.parse(users)
  console.log(html)

  // const palavra = 'gabriel.xmls'
  // console.log(palavra.split('.'))
}

main()
