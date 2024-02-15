//Get all the DOM elements 
const gamecontainer = document.querySelector(".container"),
    userResult = document.querySelector(".user_result img"),
    cpuResult = document.querySelector(".cpu_result img"),
    result = document.querySelector(".result"),
    optionImages = document.querySelectorAll(".option_image");

console.log(gamecontainer,userResult,cpuResult,result,optionImages);

//Loop through each option image element
optionImages.forEach((image,index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");

        userResult.src = cpuResult.src = "image/default.jpeg";
        result.textContent = "Here we go.."

        //Loop through each option image element
        optionImages.forEach((image2,index2)=>{
            //If current index doesn't matches the clicked index
            //Remove the "active" class from the other option image
            index !== index2 && image2.classList.remove("active");
        }) 


        gamecontainer.classList.add("start")
        
        
        //Set the timeout to delay the result calculation 
        let time = setTimeout(()=>{
            gamecontainer.classList.remove("start")
            //get the source of the clicked option image
            let imagesrc = e.target.querySelector("img").src;
            //Set the user image to the clicked option 
            userResult.src = imagesrc;
            // console.log(imagesrc);

            //Generate the random number between 0 to 2
            let randomnum = Math.floor(Math.random()*3);
            // console.log(randomnum);
            
            //Create an array of cpu image option 
            let cpuimage = ["image/rock.png","image/paper.png","image/scissor.png"];
            cpuResult.src = cpuimage[randomnum];

            //Assign a letter to the cpu option (R=Rock, P=Paper, S=Scissor)
            let cpuValue = ["R","P","S"][randomnum];
            
            //Assign a letter value to the clicked option (based on index)
            let userValue = ["R","P","S"][index];
            // console.log(userValue,cpuValue);

            //create an object with all possible outcomes to win lose or draw
            let outcome={
                RR:"Draw",
                RP:"Cpu",
                RS:"User",
                PP:"Draw",
                PR:"User",
                PS:"Cpu",
                SS:"Draw",
                SP:"User",
                SR:"Cpu",
            }
            
            //look up the outcome values based on user and cpu options 
            let outComeValue=outcome[userValue+cpuValue];

            //Display the result
            result.textContent = userValue===cpuValue ? "Match Draw opps.." :`${outComeValue} Won..!!`;
            // console.log(outComeValue);
        },2500)
    })
})
