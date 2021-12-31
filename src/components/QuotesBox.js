import { useState, useEffect } from "react";
import Quotes from "../quotes.json";
import QuoteAuthor from "./QuoteAuthor";
import QuoteButton from "./QuoteButton";
import QuoteText from "./QuoteText";
/* import QuoteCard from "./QuoteCard"; */

const QuotesBox = () => {
  // Array de Colores
  const colors = [
    "#cd853f",
    "#443aa5",
    "#f08080",
    "#522e63",
    "#7d832e",
    "#c29033",
    "#da6934",
    "#2279bc",
    "#992d5f",
    "#722424",
  ];

  // Funcion
  const getQuoteRandom = () => Math.floor(Math.random() * Quotes.length);

  const getColorRandom = () => Math.floor(Math.random() * colors.length);

  // State
  const [quote, setQuote] = useState(Quotes[getQuoteRandom()]);
  const [color, setColor] = useState(colors[getColorRandom()]);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  //Funciones
  const handleNextQuote = () => {
    setQuote(Quotes[getQuoteRandom()]);
    setColor(colors[getColorRandom()]);
  };

  return (
    <div className="quote-container">
      <div className="quote-card">
        <QuoteText quote={quote.quote} color={color} />
        <QuoteAuthor author={quote.author} color={color} />
        <QuoteButton handleNextQuote={handleNextQuote} color={color} />
        <i className="fas fa-quote-left fa-quote" style={{ color }}></i>
      </div>
    </div>
  );
};

export default QuotesBox;
