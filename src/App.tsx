import React , {createContext, FC} from 'react';
import Person from './components/Person/Person';
import Use from './components/Use/Use';
 

interface appContextInterface {
  name: string ;
  roll: number ;
  
}

const nameList = [
  {
    name:'ashik',
    roll:45
  },
  {
    name:'sen',
    roll:34
  },
  {
    name:'razz',
    roll:54
  }
]

const appContext = createContext <appContextInterface | null>(null)

const App:FC = () =>  {
  const nam : string = 'ashik';

  const contextValue : appContextInterface = {
    name:'ashik',
    roll:34,
    

  }

  
  return (
    <appContext.Provider value ={contextValue}>
      <div className="App">
        {nam}
      <Person name='bitu' roll={20} ></Person>
      <Use user={nameList}></Use>
    </div>


    </appContext.Provider>
   
  );
}

export default App;
