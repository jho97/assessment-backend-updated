let compliment = require('./database.json')
let globalId = compliment[compliment.length - 1].id + 1

module.exports = {
    getCompliment: (req, res) => {
        res.status(200).send(compliment)
    },
    addCompliment: (req, res) => {
        const {compliment} = req.body
        let newCompliment = {compliment, id:globalId}
        compliment.push(newCompliment)
        res.status(200).send(compliment)
    },
    updateCompliment: (req, res) => {
        const {id} = re.params
        const {compliment} = req.body
        let updateComp = {compliment, id}
        let index = compliment.findIndex(comp => comp.id === +id)
        compliment.splice(index, 1, updateComp)
        res.status(200).send(compliment)
    },
    deleteCompliment: (req, res) => {
        const {id} = req.params
        let index = compliment.findIndex(comp => comp.id === +id)
        compliment.splice(this.index, 1, updateComp)
        res.status(200).send(compliment)
    }
}



    // choose random compliment
    // {   
    //     let randomIndex = Math.floor(Math.random() * compliments.length);
    //     let randomCompliment = compliments[randomIndex];  
    //     res.status(200).send(randomCompliment);  
    // },


// const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar.", ];
