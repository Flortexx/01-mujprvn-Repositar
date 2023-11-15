"use strict"

const log = (v) => console.log(v);

function checkResult(){
       const arr = [   
       "Jdu ven",
       "jdu nakoupit potraviny",
       "venku je zima",
       "vyhrali jsme nejvetší ligu ve fotbale",
       "dneska jsem pryč",
       "prijet ke me",
       "mas ten domaci ukol",
       "Kdybych neuspěl, dnes bych se věnoval hraní Minecraftu.",
       "Cíl člověka, který je poháněn chamtivostí, je jediný: sestavování trojúhelníků.",
       "Zkázou lidstva jsou mé desáté narozeniny."

    ]

    const random1 = arr[(Math.floor(Math.random() * (arr.length)))];

    console.log(random1);  
    
    document.getElementById("outputGen").innerHTML = random1

}





