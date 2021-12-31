const QuoteButton = ({ handleNextQuote, color }) => {
  // Styles
  const styles = {
    backgroundColor: color,
  };

  return (
    <button className="quote-btn" onClick={handleNextQuote} style={styles}>
      {">>"}
    </button>
  );
};

export default QuoteButton;
