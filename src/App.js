import './App.css';
import Row from './componetes/Row';
import categories from './api';
import Banner from './componetes/Banner';


function App() {
  return <div className='App'>
    {/*navebar*/}
        {/*destaques*/}
          <Banner/>
          {categories.map((category, index) =>{
            return<Row 
            key={index}
            title={category.title}
            path={category.path}
            islargue={category.islargue}
            />

          })}

  </div>
  ;
}

export default App;
