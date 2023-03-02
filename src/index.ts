import { HtmlParser } from './classes/HtmlParser'
import { Processor } from './classes/Processor'
import { Reader } from './classes/Reader'
import { Table } from './classes/Table'
import { Writer } from './classes/Writer'

const reader = new Reader()
const writer = new Writer()

const main = async () => {
  const data = reader.read('./src/JogosQueZerei.csv')
  const processedData = Processor.process(data)
  const users = new Table(processedData)

  const html = await HtmlParser.parse(users)

  writer.write(Date.now().toString(), html)

  // const palavra = 'gabriel.xmls'
  // console.log(palavra.split('.'))
}

main()
