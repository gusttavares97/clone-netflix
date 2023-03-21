import './App.css';
import Row from './componetes/Row';
import categories from './api';


function App() {
  return <div className='App'>
    {/*navebar*/}
        {/*destaques*/}
          {/*em alta*/}
          {categories.map((category, index) =>{
            return<Row 
            key={index}
            title={category.title}
            path={category.path}
            />

          })}

  </div>
  ;
}

export default App;
