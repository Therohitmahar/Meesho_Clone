import React, { useContext, useEffect, useState } from "react";
import Card from "./card";
import "./cardList.css";
import { productContext } from "../Context/productInfo.context";

const CardList = () => {
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const infoContext = useContext(productContext);
  function handleNext() {
    setPage(2);
  }

  function handlePrev() {
    setPage(1);
  }
  const fetchInfo = async () => {
    try {
      const response = await fetch(
        `https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=10&page=${page}`
      );
      const data = await response.json();
      setInfo(data);
      console.log(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, [page]);

  return (
    <div className="card-holder">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {info.map((item) => (
            <Card
              id={item.id}
              key={item.id}
              title={item.title}
              price={item.price}
              image={item.image}
              rating={item.rating}
            />
          ))}
          <div className="pagination">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CardList;
