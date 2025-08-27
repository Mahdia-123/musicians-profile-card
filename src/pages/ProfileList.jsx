import React from "react";
import { Link, Outlet } from "react-router-dom";
import { musician } from "./Musician";
import "./ProfileList.css";

export default function ProfilesList() {
  return (
    <div className="container">
      {musician.map((m) => (
        <div key={m.id} className="profiles-card">
          <a href={m.img}>
            <img src={m.img} alt={m.alt} className="img-fluid" />
          </a>
          <h2>Name: {m.name}</h2>
          <h3>Profession: {m.profession}</h3>
          <h4>Nick Name: {m.nickName}</h4>
          <p>Net Worth: {m.netWorth}</p>
          <Link to={`/profilesCard/${m.id}`}>View Details</Link>
        </div>
      ))}
      <Outlet />
    </div>
  );
}
