const goals = require("./db.json")
let goalId = 5

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A good time to finish up old tasks.", "A hunch is creativity trying to tell you something.", "A person of words and not deeds is like a garden full of weeds.", "A smile is your personal welcome mat.", "A soft voice may be awfully persuasive.", "Advice, when most needed, is least heeded.", "All the effort you are making will ultimately pay off."];

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },
    deleteGoal: (req, res) => {
        let index = goals.findIndex(elem => elem.id === +req.params.id)
        houses.splice(index, 1)
        res.status(200).send(goals)
    },
    createGoal: (req, res) => {
        let newestGoal = {
        "id": goalId,
        "newGoal": require.body.newGoal
        }

        goals.push(newHouse)
        res.status(200).send(goals)
        goalId++
    },
    updateGoal: (req, res) => {
        let {id} = req.params
       let {type} = req.body

        let index = houses.findIndex(elem => elem.id === +id)
        
    }
}