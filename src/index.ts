import { Reader } from './Reader'

const leitor = new Reader()

const main = async () => {
  const data = leitor.read('./src/JogosQueZerei.csv')
  console.log(data)
}

main()
