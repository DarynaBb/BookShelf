//import React from "react";
import SearchBar from "../components/SearchBar";
import BookImage from "../assets/image-29.png";
import MenuBar from "../components/MenuBar";
import { useNavigate } from "react-router-dom";
import ContactBar from "../components/ContactBar";

const handleSearch = (query) => {
  console.log("Suche nach:", query);
};

const Home = () => {
  const navigate=useNavigate()
  const handle=()=> {
    navigate("/myAccount")
  }
  return (
    <div className="bg-[#ffeed94c]">
      <MenuBar />
      <SearchBar onSearch={handleSearch} />
<button onClick={handle}>click here</button>
      <div className="text-center">
        <img
          src={BookImage}
          alt="Book"
          style={{ width: "100%", maxWidth: "800px", margin: "auto" }}
        />
      </div>
      <ContactBar />
    </div>
  );
};

export default Home;
