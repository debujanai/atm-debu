import inquirer from "inquirer";

let myBalance = 50000;
let myPin = 9898;

let credentials = await inquirer.prompt([
    {
        name: "atmPin",
        type: "number",
        message: "Please Enter your Pin: ",


    }

]);

if (credentials.atmPin == myPin){
    console.log("Your Pin is correct")
    let options = await inquirer.prompt([
        {
            name:"choice",
            type: "list",
            message:"Select your option:",
            choices:["Withdraw","Check Balance"]
        }
    
    ]);
    
    
    
    if (options.choice === "Withdraw"){
        let amount = await inquirer.prompt([
            {
                name:"money",
                type:"number",
                message:"Enter Amount"
            }
        ]);
        if (amount.money > myBalance){
            console.log("Insufficient Balance")
        }
        else {
        myBalance = myBalance - amount.money;
        console.log("Deducted amount: " + amount.money + "\n New Balance: "+ myBalance);
        }
    }
    if (options.choice === "Check Balance"){
        console.log("Your Current Balance: " + myBalance);
    }
}
else{
    console.log("Incorrect Pin")
}
