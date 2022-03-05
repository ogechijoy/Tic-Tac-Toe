import React , {useEffect, useState} from 'react';
import Button from '../Component/button';
import './Tictactoe.css';

const Game = () =>{
    const [placeholder, setPlaceholder] = useState("Player 1's turn");
    const[holdFirstValue, setHoldFirstValue] = useState ('X');
    const[status, setStatus] = useState (false);
    const[disable, setDisable] = useState(false);
    const [btnText, setBtnText] = useState({
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: '',
        value6: '',
        value7: '',
        value8: '',
        value9: '',
    })
    const handleChange = () => {

    }
    const onClickChanges = (userValue) =>{
        if (status || btnText[userValue] !== '') return;

        if (holdFirstValue === 'X'){ 
            setBtnText({...btnText,[userValue]: 'X'})
            setPlaceholder("Player 2's turn");
            setHoldFirstValue('O');
            // setStatus(true);
            // setDisable(true);
        }
        else{
            setBtnText({...btnText, [userValue]: 'O'})
            setPlaceholder("Player 1's turn");
            setHoldFirstValue('X');
            // setStatus(true);
            // setDisable(true);
        }
        // const checkDraw = (tie) =>{
           
    }
const check =() => {
    checkWinner('value1', 'value2', 'value3')
    checkWinner('value4', 'value5', 'value6')
    checkWinner('value7', 'value8', 'value9')
    checkWinner('value1', 'value4', 'value7')
    checkWinner('value2', 'value5', 'value8')
    checkWinner('value3', 'value6', 'value9')
    checkWinner('value1', 'value5', 'value9')
    checkWinner('value3', 'value5', 'value7')
}
    const checkWinner =(one, two, three) =>{
        if (btnText[one]=== 'X' && btnText[two] === 'X' && btnText[three] === 'X'){
            setPlaceholder("Player 1 won")
            setStatus(true);
            // setDisable(true);
        }
        else if(btnText[one]=== 'O' && btnText[two] === 'O' && btnText[three] === 'O'){
            setPlaceholder("Player 2 won");
            setStatus(true);
            // setDisable(true);
        }
    }
    const handleRestart = () =>{
        setPlaceholder("Player 1's turn");
        setHoldFirstValue('X');
        setStatus(false);
        setDisable(false);
        setBtnText({
            value1: '',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '',
            value7: '',
            value8: '',
            value9: '',
        })
    }
    // const checkDraw = (tie) =>{
    //     if({...btnText}!== '')
    //     setPlaceholder('Draw');
    // }
    // useEffect(effect: React.EffectCallback, deps?: React.DependencyList)
    useEffect(()=>{
        check();
        // checkDraw();
        if((placeholder === "Player 1 won")||(placeholder === "Player 2 won")){
            setDisable(true);
        }
    },[placeholder, btnText, disable])
    // useEffect(()=>{
    //     if(btnText!== '')
    //     setPlaceholder('Draw');
    // },[btnText])
    
    return (
        <div className = 'container'>
            <div className='header'>
                <h1>Tic-Tac-Toe Game</h1>
            </div>
            <input type='text' className ='input1' value= {placeholder} onChange={()=>handleChange()}/>
            <div className ='btnRow'>
                <Button className= 'btn1' btnText= {btnText.value1} onClick={()=>onClickChanges('value1')} disabled ={disable}/>
                <Button className= 'btn1' btnText= {btnText.value2} onClick={()=>onClickChanges('value2')} disabled ={disable}/>
                <Button className= 'btn1' btnText= {btnText.value3} onClick={()=>onClickChanges('value3')} disabled ={disable}/>
            </div>
            <div className ='btnRow'>
                <Button className= 'btn1' btnText= {btnText.value4} onClick={()=>onClickChanges('value4')} disabled ={disable}/>
                <Button className= 'btn1' btnText= {btnText.value5} onClick={()=>onClickChanges('value5')} disabled ={disable}/>
                <Button className= 'btn1' btnText= {btnText.value6} onClick={()=>onClickChanges('value6')} disabled ={disable}/>
            </div>
            <div className ='btnRow'>
                <Button className= 'btn1' btnText={btnText.value7} onClick={()=>onClickChanges('value7')} disabled ={disable}/>
                <Button className= 'btn1' btnText={btnText.value8} onClick={()=>onClickChanges('value8')} disabled ={disable}/>
                <Button className= 'btn1' btnText={btnText.value9} onClick={()=>onClickChanges('value9')} disabled ={disable}/>
            </div>
            <Button className = 'btn2' btnText ='Restart' onClick={()=>handleRestart()}/>
        </div>
    )
} 
export default Game;