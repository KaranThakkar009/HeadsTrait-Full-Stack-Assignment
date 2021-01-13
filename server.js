const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cors());

//default route
app.get('/',(req,res) => res.status(200).send({
    message: 'server is running...'
}));


const writeTextToFileAsync = async(contentToWrite) => {
    fs.writeFile('./client/src/contactDetails.json',contentToWrite,(err) => {
        console.log(contentToWrite);
        if(err){
            console.log(err);
        }else{
            console.log("Done writing to file...");
        }
    } );
}

app.post('/write',async(req,res,next) => {
    const requestContent = JSON.stringify(req.body,null,2);
    await writeTextToFileAsync(requestContent);
});


if(process.env.NODE_ENV==='production'){
    app.use(express.static('client/build'));
}

//404 route
app.use((req,res,next) => res.status(404).send({
    message: 'could not find specified route...'
}));

//run server
app.listen(port,() => {
    console.log(
        `
        !!! server is running
        !!! listening for incoming requests on port $(port)
        !!! http://localhost:5000
        `
    )
});
