
import{BrowserRouter,Link,Route,Routes} from 'react-router-dom';
import Homescreen from "./Screens/Homescreen";
import Productscreen from './Screens/Productscreen';

function App() {
  return (
    <BrowserRouter>
       <div className="App">
      <header>
        <Link to="/"><span id="logo">Myshop.com</span></Link>
        <ul >
          <li><Link to="/">Home</Link></li>
          <li><Link to="#product">Products</Link></li>
          <li><Link>About</Link></li>
        </ul>  
      </header>
      <main>
         
          <Routes>
            <Route path="/" element={<Homescreen />} />
            <Route path="/product/:slug" element={<Productscreen />} />
          </Routes>
      </main>
    </div>
    </BrowserRouter>
 
  );
}

export default App;
