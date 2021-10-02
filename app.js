import fetch from 'node-fetch'

process.argv.shift()
process.argv.shift() 

const options = {
    headers: {
        cookie: 'hasCookie=true'
    }
};

const response = await fetch('https://codequiz.azurewebsites.net/', options)
                        .then(res => res.text())
                        .then(data =>{
                            let index = data.indexOf(process.argv[0])
                            let paramLen = process.argv[0].length
                            let first = index+paramLen+9
                            let last = data.indexOf("</td>", first)
                            let result = data.substring(first, last)
                            console.log(result)                     
                        })