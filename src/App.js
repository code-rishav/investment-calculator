
import Table from './components/table/table'
import Form from './components/InvenstmentInput/form'
import Header from './components/Header/header';
import { useState } from 'react';
function App() {

  const [userInput,setUserInput] = useState(null);
  
  const calculateHandler = (userInput) =>{
    setUserInput(userInput);
  }
  
  const yearlyData = [];
  if(userInput){
    
    let currentSavings = +userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!

        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
  }
    // do something with yearlyData ...
  };

  return (
    <div>
      <Header></Header>
      <Form calculate={calculateHandler}></Form>
      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}
      {userInput ? <Table data={yearlyData } initialInvestment={userInput['current-savings']} ></Table> : <>No Result calculated.</>}
    </div>
  );
}

export default App;
