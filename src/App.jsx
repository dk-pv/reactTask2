import { useEffect, useState } from "react";
import "./App.css"

export default function QuotesApp() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => setQuotes(data.quotes.slice(0, 10)))
      .catch((error) => console.error("Error fetching quotes:", error));
  }, []);

  return (
    <div className="">
      <h1 className="head">Quotes</h1>
      {quotes.length > 0 ? (
        quotes.map((quote, index) => (
          <h1 key={index} className="content">{quote.quote}</h1>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

