

let boxs = document.querySelectorAll(".box");
// console.log(boxs);

let resetbttn = document.querySelector("#restbttn");
// console.log(resetbttn);

let turno = true;

let winningpatterns = [[0,1,2] , [0,3,6] , [0,4,8] , [1,4,7] , [2,5,8] , [2,4,6] , [3,4,5] , [6,7,8]];
// console.log(winningpatterns);

let thirdhaeding = document.querySelector(".heading3");
// console.log(thirdhaeding);

let rstbttn = document.querySelector("#restbttn");
// console.log(rstbttn);

    let user1 = prompt("Enter the first player name ")

    let user2 = prompt(" enter the second player")

    function usersdetails(name) {
         return name;
    }

    // usersdetails(user1);



boxs.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("click ho chuka hu");
       
        if (turno) {
            box.innerText = "0" ;
            turno = false;
        }else{
            box.innerText = "X" ;
            turno = true;
        }
        
        box.disabled  = true;

        checkwinner();
         
    })
})

let checkwinner = () =>{
    for (let pattern of winningpatterns) {
        // console.log(pattern[0] , pattern[1] , pattern[2]);
        // console.log(boxs[pattern[0]].innerText, boxs[pattern[1]],

        let pos1 = boxs[pattern[0]].innerText ;

        let pos2 = boxs[pattern[1]].innerText ;

        let pos3 = boxs[pattern[2]].innerText ; 

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            
            if (pos1 === pos2 && pos2 === pos3) {

                console.log("winner");

                wincelb(pos1 , usersdetails(user1));
                
            
            }
        }    
    }
}

let wincelb = (maal ,maal2)=>{
    thirdhaeding.innerText = `congratulation you are winner ${maal} ${maal2} `

    // console.log();
    disabledbox ();
  

}

let disabledbox = ()=>{
    for (let box of boxs) {
        box.disabled = true;

        console.log();
        
        
    }
}



rstbttn.addEventListener("click",(event)=>{
    for (let box of boxs) {
        
        // box.innerText = " ";
        // console.log(box);
        // console.log(event);
        

    }
})

