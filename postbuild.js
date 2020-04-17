const zipFolder = require('zip-folder')
const mv = require('mv')
const fs = require('fs')

const folderName  = 'react-netsuite-demo'
fs.mkdirSync(`./${folderName}`)

mv('build', `./${folderName}/${folderName}`, function(err,succ){
  if (err) 
    console.log(err)
    else {
      zipFolder(`./${folderName}`, `./${folderName}.zip`, function(err) {
        if(err) {
            console.log('oh no!', err);
        } else {
          console.log('file zipped successfully')
        }
      })
    }
})


