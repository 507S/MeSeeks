import React, { useState } from "react";
import Card from "./Card";
import data from "./data";
import "./Profile.css";

const UserServices = () => {
  const [profileName, setProfileName] = useState("");
  const [profileCell, setProfileCell] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [profileEmail, setProfileEmail] = useState("");

  const characters = data.map((character) => {
    return (
      <Card
        hoverable
        name={character.name}
        from={character.from}
        type={character.type}
        weapon={character.weapon}
        img={character.img}
      />
    );
  });

  // const profileData = async () => {
  //   try {
  //   //   const res = await axios.get("https://randomuser.me/api/");
  //   //   setProfileCell(res.data.results[0].cell);
  //   //   setProfileEmail(res.data.results[0].email);
  //   //   setProfileImage(res.data.results[0].picture.large);
  //   //   setProfileName(
  //   //     `${res.data.results[0].name.first} ${res.data.results[0].name.last}`
  //   //   );
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   profileData();
  // }, []);

  return <div>{characters}</div>;
};

export default UserServices;
