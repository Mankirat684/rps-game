

let humanScore = 0
let compScore = 0

function playRound(humanchoice, CompChoice) {
  console.log("Your Choice :" , humanchoice )
  console.log("Comp Choice :" , CompChoice )
    if (humanchoice == "rock" && CompChoice == "paper" || humanchoice == "paper" && CompChoice == "scissors" || humanchoice == "scissors" && CompChoice == "rock" ) {
      compScore++
     return "loss"
    }else if( humanchoice == CompChoice ){
        
      return "draw"
    } else if(CompChoice == "rock" && humanchoice == "paper" || CompChoice == "paper" && humanchoice == "scissors" || CompChoice == "scissors" && humanchoice == "rock" ) {
      humanScore++ 
      return "win" 
    }else{
      return "check spellings"
    }
  }
  
   function playGame(){

    for(let i = 1;i < 6; i++ ) {
      console.log("Round :", i)
      function rdm() {
        return Math.random();
       }
     
     let n = rdm();
     
     function getCompChoice(){
      if(n < 0.33) {
        return "rock"
     } else if (n > 0.66) {
       return "scissors"
     }else {
       return "paper"
          }
      }
      let c = prompt("pick") 


let actualChoice = c.toLowerCase()

// making human choice case insensitive

function gethumanchoice(){
  return actualChoice
}
      let CompChoice = getCompChoice()
      let humanchoice = gethumanchoice()
     console.log(playRound(humanchoice, CompChoice))
     console.log("humanScore :" , humanScore)
     console.log("compScore :" , compScore)

    }
    if(humanScore>compScore){
      console.log("you win")
    }else if (humanScore === compScore){
      console.log("tied")
    }else {
      console.log("you lose")
    }
 }
 
playGame()

  




















