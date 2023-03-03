import PromptSync from 'prompt-sync'
import { HtmlParser } from './classes/HtmlParser'
import { Processor } from './classes/Processor'
import { Reader } from './classes/Reader'
import { Table } from './classes/Table'
import { Writer } from './classes/Writer'

const reader = new Reader()
const writer = new Writer()
const prompt = PromptSync()

const convert = async () => {
  const filePath = prompt(
    'Passe o caminho do arquivo csv ou xlsx que você gostaria de converter: '
  )
  const extension = filePath.split('.').slice(-1).toString().toLocaleLowerCase()
  let data

  if (extension == 'csv') {
    data = reader.readCSV(filePath)
  } else if (extension == 'xlsx') {
    data = reader.readXLSX(filePath)
  } else {
    throw new Error('Formato de arquivo não suportado!')
  }

  const processedData = Processor.process(data)
  const users = new Table(processedData)
  const html = await HtmlParser.parse(users)
  const fileName = Date.now().toString()

  writer.write(fileName, html)
}

convert()
