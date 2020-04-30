var board=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,160];
const player1_Button=document.getElementById('player-1');
const player2_Button=document.getElementById('player-2');

class player{
    constructor(name,position,money){
        this.name=name;
        this.money=money;
        this.position=position;
    }
    rollDice(){
        let pos=Math.floor(Math.random()*6)+1;
        console.log(pos);
        this.updatePosition(pos);
    }
    updatePosition(pos){
        this.position+=pos;
        console.log(this.position);
        this.updateMoney();
    }
    updateMoney(){
        if(this.position<board.length)
        this.money-= board[this.position];
        else{
            this.position%=5;
            this.money-=board[this.position]
        }
        console.log(player1);
        console.log(player2);
    }
}

let player1=new player("FACEPrep",0,1000);
let player2=new player("ProGrad",1,1000);

player1_Button.addEventListener('click',function(){
    player1.rollDice();
},false);
player2_Button.addEventListener('click',function(){
    player2.rollDice();
},false);