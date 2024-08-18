import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HelpCards.css';

function HelpCards({ searchTerm }) {
  const [cardData, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/cards')
      .then(response => {
        if (response.data.success) {
          setData(response.data.data);
        } else {
          setError(response.data.message);
        }
        setLoading(false);
        setError(null);
      })
      .catch(error => {
        setError(error);
        console.log(error)
        setLoading(false);
      });
  }, [cardData]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className='error'>Error: {error.message}</p>;

  const filteredCards = searchTerm
    ? cardData.filter(card =>
        card.title.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()) )
    : cardData; 

  return (filteredCards.length !=0?
    <div className="help-cards"> 
      {filteredCards.map((card, index) => (
        <div key={index} className="card">
          <h3>{card.title}</h3>
          <hr className="underline" />
          <p>{card.description}</p>
        </div>
      ))}
    </div>
    : <div className='error'><p>{`${searchTerm} does not exist `}</p></div>
  );
}

export default HelpCards;
