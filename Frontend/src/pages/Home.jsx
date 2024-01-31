//import React from "react";
import SearchBar from "../components/SearchBar";
import BookImage from "../assets/image-29.png";
import MenuBar from "../components/MenuBar";
import ContactBar from "../components/ContactBar";

const handleSearch = (query) => {
  console.log("Suche nach:", query);
};

const Home = () => {

  return (
    <div className="bg-[#ffeed94c]">
      <MenuBar />
      <SearchBar onSearch={handleSearch} />
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
