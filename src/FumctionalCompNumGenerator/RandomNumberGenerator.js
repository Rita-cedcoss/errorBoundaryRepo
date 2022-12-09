import React, { useState } from 'react'

const RandomNumberGenerator = () => {
     const[randomNum,setRandomNum]=useState(5);
    const RandomNumGenerator=()=>{
        let minNumber=1;
        let maxNumber=20;
        let rand=minNumber+Math.random()*(maxNumber-minNumber);
        setRandomNum(rand);
    }
    if(randomNum<5)
    {
        throw new Error("Number is less than 5!");
    }
    return (
    <div>
        <p>{randomNum}</p>
        <button onClick={RandomNumGenerator}>RandomNumberGnerator</button>
    </div>
  )
}

export default RandomNumberGenerator