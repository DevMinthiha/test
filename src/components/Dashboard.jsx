import React from "react";
import Navbar from "./Navbar";
import Stats from "./Stats";
import Carosel from "./Carosel";
import Footer from "./Footer";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Stats />
      <div className="flex justify-center items-center gap-10">
        <div className="flex-1">
          <h1 className="text-6xl">DevShop</h1>
          <p className="tracking-wider leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odit
            fuga excepturi doloremque vitae, laudantium, quis repellendus
            consequuntur soluta velit error ut officiis dolorem, nisi voluptates
            beatae dolores minus distinctio? Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ut deleniti necessitatibus nesciunt fuga earum voluptatibus laudantium nam dolor expedita commodi, amet atque non ipsam, provident fugit dolores modi neque!
          </p>
        </div>
        <iframe
          src="https://embed.lottiefiles.com/animation/30826"
          className="w-1/2 h-[500px] mx-auto mb-5 rounded"
        ></iframe>
      </div>
      <Carosel />
      <Footer />
    </div>
  );
};

export default Dashboard;
