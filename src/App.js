import React, { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
const url = 'https://type.fit/api/quotes';

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [isDisplay, setIsDisplay] = useState(false);

  const fetchQuotes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuotes(data);
  };
  useEffect(() => {
    fetchQuotes();
  }, []);

  const changeQuote = () => {
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);
    setIsDisplay(true);
  };

  const removeQuote = () => {
    setIsDisplay(false);
    setQuote(null);
  };
  return (
    <>
      {quote ? (
        <div className='quote'>
          <p>"{quote.text}"</p>
          <h4>-{quote.author}-</h4>
        </div>
      ) : null}
      <div className='btns'>
        <button className='btn' onClick={() => changeQuote()}>
          {isDisplay ? 'Change quote' : 'Display quote'}
        </button>
        {isDisplay ? (
          <button className='btn' onClick={() => removeQuote()}>
            Remove quote
          </button>
        ) : null}
      </div>
      <div className='todo-app'>
        <TodoList></TodoList>
      </div>
    </>
  );
}

export default App;
