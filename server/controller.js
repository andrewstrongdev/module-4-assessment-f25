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
    }
}