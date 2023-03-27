document.addEventListener('keydown',(e)=>{
    if(e.key =='enter'){console.log(e.key); change();}
})
function now( x , y)
{
    document.querySelector('#p1').src = `photo/dice${x}.png`
    document.querySelector('#p2').src = `photo/dice${y}.png`
}


 function change() {
    var player1  = document.querySelector('#player1').value;
    var player2  = document.querySelector('#player2').value;
    var x=Math.floor(Math.random()*6+1);
    var y=Math.floor(Math.random()*6+1);
    document.getElementsByTagName("button")[0].innerHTML="CONTINUE";
    if(x==y)
    {
        document.getElementsByTagName("h1")[0].innerHTML="DRAW";
        now(x,y);
    }
    else{
        let pia;
        x>y ? pia = player1 : pia = player2;
        document.getElementsByTagName("h1")[0].innerHTML=`<img id="flag" src="photo/flag2 (1).png" alt="">${pia} Wins`;
        now(x,y) 
    }
 }

 document.querySelector('#edit').addEventListener('click',()=>{
     let x = document.getElementById('player1').value;
     let y = document.getElementById('player2').value;
     document.querySelector('#p01').innerHTML = x;
     document.querySelector('#p02').innerHTML = y;


 })
