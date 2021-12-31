const QuoteText = ({ quote, color }) => {
  // Styles
  const styles = {
    color,
  };

  return (
    <p className="quote-text" style={styles}>
      {quote}
    </p>
  );
};

export default QuoteText;
