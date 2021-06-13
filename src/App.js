
import Form from './components/form/Form'
import DataList from './components/datalist/datalist'
import Index from './components/index/index'
import './App.scss';


function App() {
  return (
    <div className="App">
      <div className="sections">
      <Index/>
      <Form/>
      <DataList/>
      </div>
      
    </div>
  );
}

export default App;
