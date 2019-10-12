import fs from 'fs'

export default (req, res) => {
  fs.readdirSync('.')
  res.send('asdf')
}
