import './App.css';

function App() {
  return (
    <>
    <div className="App">
      <header className='App-header1'>
        <img src='logo.png' className="App-logo1" alt="logo"></img>

      </header>
      

    </div>
    <div className='App'>
      <img src='logo1.jpg' className="App-logo2" alt="logo"></img>
    </div>
    <div className='App'>
      <h2>Hello, Thanks For Visiting</h2>
      
    </div>
    <div className='App'>
    <p>Please help us improve our cafe services by filling in our feedback form. Thank you!</p>
    </div>
    <div className='App'>
      <h2>How often do you visit here?</h2>
      

    </div>
    <div className='App'>
      <select>
        <option>Regularly</option>
      </select>
      

    </div>
    <div className='App'>
      <h2>Quality of the food</h2>

    </div>
    <div className='App'>
      <img src='Frame 42.png'></img>

    </div>
    <div className='App'>
      <h2>Service Quality</h2>


    </div>
    <div className='App'>
      <img src='Frame 42 (1).png'></img>
    </div>
    <div className='App'>
      <h2>Overall Experience</h2>

    </div>
    <div className='App'>
      <img src='Frame 42.jpg'></img>

    </div>
    <div className='App'>
      <h2>Would you recommend our restaurant to others?</h2>

    </div>
    <div className='App'>
      <label>Yes</label>
      <input type='radio' disabled></input>
      <label>No</label>
      <input type='radio' disabled></input>

    </div>
    <div className='App'>
      <h2>Your suggestions to improve</h2>
    </div>
    <div className='App'>
      <textarea rows={10} cols={50}></textarea>
    </div>
    <div className='App'>
      <input type='checkbox'></input>
      <h3>Receive personal follow up to your feedback
      </h3>
    </div>
    <div className='App'>
      <button className='button'>SUBMIT FEEDBACK</button>
    </div>
    
    </>
  );
}

export default App;
