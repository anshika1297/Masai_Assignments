import React from 'react';


function App() {
  const [counter, setCount] = React.useState(0);
  const [ifprime, setIsPrime] = React.useState(false);
  const [ifodd, setIsOdd] = React.useState(false);

  
  const checkPrime = (num) =>{
    if (num < 2) {
      return false;
    }
  
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
  
    return true;
  } 

  React.useEffect(() => {
    setIsPrime(checkPrime(counter));
    setIsOdd(counter % 2 !== 0);
  }, [counter]);

  return (
    <div>
      <div>
        <button data-testid="minusonebtn" disabled={counter===0} onClick={()=>setCount(counter-1)}></button>
        <button data-testid="plusonebtn"  onClick={()=>setCount(counter+1)}></button>
      <div>
        <button data-testid="resetbtn" onClick={()=>setCount(0)}></button>
      </div>
      </div>
      <span data-testid="counter">{counter}</span>
      <div>
        <span data-testid="odd-or-even">{ifodd ? 'Odd' : 'Even'}</span>
        <span data-testid="is-prime">{ifprime ? 'true' : 'false'}</span>
      </div>
    </div>
  );

}

export default App;

