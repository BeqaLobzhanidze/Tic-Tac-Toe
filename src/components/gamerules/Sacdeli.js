import React,{ useState } from 'react'
import "../../App.css"


const Sacdeli = ({game,sigrdze,setgame,miyolebit,sigane , setDisplay , display , setsigrdze , setsigane , setmiyolebit}) => {
    var size=100/sigrdze;
    var temp=[...game];
    var winIndexArray = [];
    const [boolean, setboolean] = useState(true);
    const [winmessage , setWinMessage] = useState(false);
    const [winningSymbol , setWinningSymbol] = useState("");
    const [drawmessage , setdrawMessage] = useState(false);
    
    const checkLeft=(index)=>{
        if(index%sigrdze===0){
            return 1
        }else{
            return 0
        }
    }
    const checkRight=(index)=>{
        if((Number(index)+1)%sigrdze===0){
            return 1
        }else{
            return 0
        }
    }
    const checkTop=(index)=>{
        // console.log(index);
        // console.log(sigrdze);
        if(Number(index)<sigrdze){
            return 1
        }else{
            return 0
        }
    }
    const checkBottom=(index)=>{
        if(index<sigrdze*sigane && index>=sigrdze*sigane-sigrdze){
            return 1
        }else{
            return 0
        }
    }
    const checkNumber=(index)=>{
        vertical(index);
        horizontal(index);
        nMainDiagonal(index);
        MainDiagonal(index);
    }
  
    const horizontal=(index)=>{
        var counter=1;
        var symbol=boolean? "X":"0";
        let array = [];
        for(let i=1;i<=miyolebit;i++){
            if(checkRight(Number(index)+i-1)===1){
                break;
            }else{
                if(temp[Number(index)+i]===symbol){
                    counter++;
                    array.push(Number(index)+i);
                }else{
                    break;
                }
            }
            
        }
        for(let i=1;i<=miyolebit;i++){
            if(checkLeft(Number(index)-i+1)===1){
                break
            }else{
                if(temp[Number(index)-i]===symbol){
                    counter++;  
                    array.push(Number(index)-i)
                }else{
                    break;
                }
            }
        }

        if(counter >= miyolebit){
            array.push(Number(index))
            setWinMessage(true)
            setWinningSymbol(symbol)
            winIndexArray = array;
        }
    }
    
    const vertical=(index)=>{
        var counter=1;
        var symbol=boolean? "X":"0";
        let array = [];
        for(let i=1,k=Number(sigrdze);i<=miyolebit;i++,k+=Number(sigrdze)){
            if(checkBottom(Number(index)+k-Number(sigrdze))===1){
                break;
            }else{
                if(temp[Number(index)+k]===symbol){
                    counter++;  
                    array.push(Number(index)+k);
                }else{
                    break;
                }
            }
        }
        for(let i=1,k=Number(sigrdze);i<=miyolebit;i++,k+=Number(sigrdze)){
            
            if(checkTop(Number(index)-k+Number(sigrdze))===1){
                break
            }else{
                if(temp[Number(index)-k]===symbol){
                    counter++;  
                    array.push(Number(index)-k)
                }else{
                    break;
                }
            }
        }
        if(counter >= miyolebit){
            array.push(Number(index));
            setWinMessage(true);
            setWinningSymbol(symbol);
            winIndexArray = array;
        }
    }

    const nMainDiagonal=(index)=>{
        var counter=1;
        var symbol=boolean? "X":"0";
        let array = [];
        for(let i=1,k=Number(sigrdze)+1;i<=miyolebit;i++,k+=Number(sigrdze)+1){
            if(checkBottom(Number(index)+k-Number(sigrdze)-1)===1 ||checkRight(Number(index)+k-Number(sigrdze)-1)===1){
                break;
            }else{
                if(temp[Number(index)+k]===symbol){
                    counter++;  
                    array.push(Number(index)+k);
                    
                }else{
                    break;
                }
            }
        }
        for(let i=1,k=Number(sigrdze)+1;i<=miyolebit;i++,k+=Number(sigrdze)+1){
            
            if(checkTop(Number(index)-k+Number(sigrdze)+1)===1 || checkLeft(Number(index)-k+Number(sigrdze)+1)===1){
                break;
            }else{
                if(temp[Number(index)-k]===symbol){
                    counter++;  
                    array.push(Number(index)-k)
                }else{
                    break;
                }
            }
        }
        if(counter >= miyolebit){
            array.push(Number(index));
            setWinMessage(true);
            setWinningSymbol(symbol);
            winIndexArray = array;
        }
    }

    const MainDiagonal=(index)=>{
        var counter=1;
        var symbol=boolean? "X":"0";
        let array = [];
        for(let i=1,k=Number(sigrdze)-1;i<=miyolebit;i++,k+=Number(sigrdze)-1){
            if(checkBottom(Number(index)+k-Number(sigrdze)+1)===1 ||checkLeft(Number(index)+k-Number(sigrdze)+1)===1){
                break;
            }else{
                if(temp[Number(index)+k]===symbol){
                    counter++;  
                    array.push(Number(index)+k);
                }else{
                    break;
                }
            }
        }
        for(let i=1,k=Number(sigrdze)-1;i<=miyolebit;i++,k+=Number(sigrdze)-1){
            
            if(checkTop(Number(index)-k+Number(sigrdze)-1)===1 || checkRight(Number(index)-k+Number(sigrdze)-1)===1){
                break
            }else{
                if(temp[Number(index)-k]===symbol){
                    counter++;  
                    array.push(Number(index)-k)
                }else{
                    break;
                }
            }
        }
        if(counter >= miyolebit){
            array.push(Number(index));
            setWinMessage(true);
            setWinningSymbol(symbol);
            winIndexArray = array;
        }
    }

    const clickhandler=(e)=>{
        
        if(boolean){
            if(temp[e.target.value] === ""){
                temp[e.target.value]="X";
                setboolean(!boolean);
            }
        }else{
            if(temp[e.target.value] === ""){
                  temp[e.target.value]="0";
                 setboolean(!boolean);
            }
        }
        setgame(temp);
        checkNumber(e.target.value);

        var draw = temp.filter(item => item === "")
        if(draw.length === 0) {
            setdrawMessage(true);
        } 
        for(let i = 0 ; i < winIndexArray.length ; i++){
            document.querySelector(`.gameth${winIndexArray[i]}`).classList.add("win")
        }

    }

    const changeDisplay = () => {
        setDisplay(!display);
        setsigrdze(0);
        setsigane(0);
        setmiyolebit(0);
        setdrawMessage(false);
    }
    return (
        <div style={{width:"100%"  ,height:"auto", display:"flex" , justifyContent: "center" , alignItems: "center" , flexDirection:"column"}}>
            <h1 style={{fontSize:"35px" , marginBottom:"10px" , marginTop: "15px"}}>Tic Tac Toe</h1>
        <div style={{width:"90%",display:'flex',flexWrap:'wrap' }} >
            {game.map((item,index)=><button disabled = {(winmessage) ? true : false} className={`gameth${index}`} style={{  width:`${size}%`,height:`${4*size}px`,border: "2px solid black" , fontSize:`${2*size}px` , cursor: "pointer"}} value={index} onClick={clickhandler} >{item}</button>)}
        </div>
        {!drawmessage ? <>
        {winmessage? 
        <div style={{textAlign: "center"}}>
        <div style={{marginTop:"10px" , fontSize:"35px"}}>Win Goes too {winningSymbol}</div>
        <button style={{ marginTop: "5px" ,cursor:"pointer" , fontSize:"15px" , padding:"5px"}} onClick={changeDisplay}>Play Again</button> 
        </div>
         : <div style={{textAlign: "center" , marginTop: "10px" , fontSize: "35px"}}>Good Luck</div>}
        </> : <div style={{fontSize:"35px"}} >Draw</div>}
        </div>
    )
}

export default Sacdeli
