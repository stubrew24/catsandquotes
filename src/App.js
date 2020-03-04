import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { apiRequest } from './store/actions';

function App() {

  const {catImageUrl, quoteText} = useSelector(state => state)
  const dispatch = useDispatch()

  const handleClick = () => dispatch(apiRequest())

  useEffect(() => {
    dispatch(apiRequest())
  }, [])

  return (
    <div className="container">
      <h1>Cats + Quotes</h1>
      <div className="row">
        <img src={catImageUrl} alt="A cat"/>
      </div>
      <blockquote>{quoteText}</blockquote>
      <button onClick={handleClick}>Gimme more...</button>
    </div>
  );
}

export default App;
