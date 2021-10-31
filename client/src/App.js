import React, { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // const result = await axios("https://demo.johnmogi/api/albums");
      const res = await fetch("https://demo.johnmogi/api/albums");
      const json = await res.json();
      setData(json);
    };
    fetchData();
  });

  return (
    <ul>
      {data.map((item) => (
        <li key={item._id}>
          <a href={item.url}>{item.albumName}</a>
        </li>
      ))}
    </ul>
  );
}

export default App;
