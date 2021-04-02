import React from 'react'

const Gamerules = ({setsigrdze,setsigane,setmiyolebit,setDisplay,display , sigrdze , sigane , miyolebit}) => {
    
    const changeDisplay =()=> {
        setDisplay(!display)
    }
    return (
        <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" , flexDirection:"column" , height:"100vh" , backgroundColor:"#C5CACE"}}>
            <h1 style={{marginBottom:"30px"}}>Tic Tac Toe</h1>
            <div>Choose Rows</div>
            <input type="number" min = "3" max ="40" onChange={(e)=>setsigrdze(e.target.value)} style={{display:'block'}} placeholder='Rows' />
            <div style={{marginTop:"15px"}}>Choose Columns</div>
            <input type="number" min = "3" max = "40" onChange={(e)=>setsigane(e.target.value)} style={{display:'block'}} placeholder='Columns' />
            <div style={{marginTop:"15px"}}>Winning Streak</div>
            <input type="number" min = "3" onChange={(e)=>setmiyolebit(e.target.value)} style={{display:'block'}} placeholder='Winning Streak' />
            <button onClick={changeDisplay} style={{marginTop:"10px", cursor:"pointer" , fontSize:"15px" , padding:"5px"}} disabled = {(sigrdze === 0 || sigane === 0 || miyolebit === 0) ? true : false} >Start Game</button>
            
        </div>
    )
}

export default Gamerules
