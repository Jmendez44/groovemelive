import React from "react";
import axios from "axios"

export const ArtistCards = () => {
  const fauxCards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      {fauxCards.map((x) => (
        <div className="card">this is card {x}</div>
      ))}
    </>
  );
};
