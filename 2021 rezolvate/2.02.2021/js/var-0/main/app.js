function bowdlerize(input, dictionary)
{
        if (typeof input != "string") {
          throw new Error("Input should be a string");
        }
        dictionary.forEach(word => {
          if (typeof word != "string") {
            throw new Error("Invalid dictionary format");
          }
        });
      
        let sentence = input.split(" ");
      
        let censored = input;
      
        dictionary.forEach(wordD => {
          sentence.forEach(wordS => {
              let lowercase = wordS.toLowerCase();
            if (wordD === wordS || wordD === lowercase) {
             
              let newWord = wordS[0]+"*".repeat(wordS.length-2)+wordS[wordS.length-1];
            
              censored = censored.replace(wordS,newWord);
            }
          });
        });
        return censored;
}


const app = {
    bowdlerize
};

module.exports = app;