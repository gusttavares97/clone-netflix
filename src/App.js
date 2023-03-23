import './App.css';
import Row from './componetes/Row';
import categories from './api';
import Banner from './componetes/Banner';
import Nav from './componetes/Nav' 

function App() {
  return <div className='App'>
          <Nav />
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
