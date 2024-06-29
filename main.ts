import inquirer from "inquirer";
import {differenceInSeconds} from "date-fns"

const res = await inquirer.prompt({
    name:"userinput",
    type:"number",
    message:"please enter the amount of seconds",
    validate:(input) =>{
        if(isNaN(input)){
            return"please enter a vailid number"
        }else if(input> 60){
            return "seconds must be within 60"
        }else{
            return true;
        }
    }
    
});
let input = res.userinput

function startTime(val : number){
    const intTime = new Date().setSeconds(new Date(). getSeconds() + val);
    const intervalTime = new Date(intTime);
    setInterval((() => {
        const currTime = new Date()
        const timDiff = differenceInSeconds(intervalTime, currTime);

        if(timDiff<= 0){
            console.log ("timer is expired");
            process.exit()     
        }
        const min = Math.floor((timDiff%(3600 * 24))/ 3600)
        const sec =Math.floor(timDiff%60)
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`);
    }), 1000)
}
startTime(input)