import { useState, useEffect } from 'react';

const useCounter = (forwards = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('setInterval: ', counter);
      if (forwards) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }
    }, 1000);
    console.log('useEffect only runs once > upon mount.');
    return () => {
      console.log('clearInterval runs');
      clearInterval(interval); 
    }
  }, [forwards]);

  return counter;
}

export default useCounter;