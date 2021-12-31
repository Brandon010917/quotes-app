const QuoteAuthor = ({ author, color }) => {
  // Styles
  const styles = {
    color,
  };

  return (
    <h4 className="quote-author" style={styles}>
      --{author}
    </h4>
  );
};

export default QuoteAuthor;
