import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { musician } from "./Musician";

export default function ProfilesCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const selectedMusician = musician.find((m) => m.id === id);

  if (!selectedMusician)
    return (
      <div>
        <h2>Musician Not Found</h2>
        <button onClick={() => navigate(-1)}>Go Back</button>
      </div>
    );

  return (
    <div
      className="profile-card"
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        minWidth: "150px",
        maxWidth: "400px",
        margin: "1rem auto",
        textAlign: "center",
      }}
    >
      <a href={selectedMusician.img}>
        <img
          src={selectedMusician.img}
          alt={selectedMusician.alt}
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </a>
      <h2>Name: {selectedMusician.name}</h2>
      <h3>Profession: {selectedMusician.profession}</h3>
      <h4>Nick Name: {selectedMusician.nickName}</h4>
      <p>Net Worth: {selectedMusician.netWorth}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
}
