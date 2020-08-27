const express= require('express'); 
const cors = require('cors');
const db = require('monk')(process.env.MONGO_URI || 'localhost/woofer');
const Filter = require('bad-words');
const rateLimit = require('express-rate-limit');


const app = express();


//const db = monk('localhost/woofer');
const woofs = db.get('woofs');
const filter = new Filter();

app.use(cors());
app.use(express.json());

app.get('/', (req,res) => {
    res.json({
        message: 'Woof! 🐩'
    });
});

app.get('/woofs',(req,res) => {
    woofs
        .find()
        .then(woofs =>{
            res.json(woofs);
        });
});

function isValidWoof(woof){
    return woof.name && woof.name.toString().trim() !== '' && 
        woof.content && woof.content.toString().trim() !== '';
}

app.use(rateLimit({
    windowMs: 30 *60 * 1000,
    max : 1
}));

app.post('/woofs',(req,res) =>{ 
    //console.log(woofs);
    if (isValidWoof(req.body)){
        const woof = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };
        
        woofs 
            .insert(woof)
            .then(createdWoof => {
                res.json(createdWoof);
            });
    

    } else {
        res.status(422);
        res.json({
            message : 'Hey! Name and content are required'
        });
    }
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');

});