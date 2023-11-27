import "./home.css"
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setUsername } from '../../store/slices/user.slice';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const inputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const username = inputRef.current.value;
    if (username !== "") {
      dispatch(setUsername(username));
      navigate("/pokemons")
    } else {
      alert("Please, write down a proper username");
    }
  }
  
  return <main id='home'>
    <header>
      <h1>Hello Trainer!</h1>
      <h2>To start, tell me your name</h2>
    </header>

    <form onSubmit={handleSubmit} className='simpleForm'>
      <input
        type="text"
        placeholder='Your name...'
        name="username"
        ref={inputRef}
      />
      <button>Start</button>
    </form>
  </main>
};

export default Home;