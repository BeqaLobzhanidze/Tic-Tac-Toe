import React,{useState,useEffect} from 'react'
import './style.css'
import Gamerules from './components/gamerules/Gamerules';
import Sacdeli from './components/gamerules/Sacdeli'
const App = () => {
    const [sigrdze, setsigrdze] = useState(0);
    const [sigane, setsigane] = useState(0);
    const [miyolebit, setmiyolebit] = useState(0);
    const [display , setDisplay] = useState(true);

    const [game, setgame] = useState([]);
    var temp = new Array(sigrdze*sigane);
    useEffect(() => {
        temp.fill('');
        setgame([...temp]);
    }, [sigrdze,sigane])
    
    return (
      display ? <Gamerules 
              setsigane={setsigane} 
              sigrdze={sigrdze}
              sigane={sigane}
              miyolebit={miyolebit}
              setsigrdze={setsigrdze} 
              setmiyolebit={setmiyolebit} 
              setDisplay={setDisplay}
              display={display}
          /> : <Sacdeli 
                game={game} 
                sigrdze={sigrdze} 
                sigane={sigane} 
                setgame={setgame} 
                miyolebit={miyolebit}
                setDisplay={setDisplay}
                display={display}
                setsigane={setsigane}
                setsigrdze={setsigrdze}
                setmiyolebit={setmiyolebit}
          />
    )
}

export default App
