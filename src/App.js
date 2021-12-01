
import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  // const title='Welcome to the new blog';
  // const likes=50;
  // const person={name:'supreet',age:30};
  // const link="http://www.yahoo.com";
  
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
        {/* <h1>App component</h1> */}
        {/* <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>my age is {person.age}</p>
        <p>{100000}</p>
        <p>{[1,2,3,4,5]}</p>
        <p>{Math.random() *10}</p>
        <a href="http://www.google.com">Google site</a>
        <p>hello</p>
        <a href={link}>Yahoo site</a> */}
      </div>
    </div>
  );
}

export default App;







