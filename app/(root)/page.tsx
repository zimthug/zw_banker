import HeaderBox from "@/components/HeaderBox";
import React from "react";

function Home() {
  const loggerIn = { firstName: "Tapiwa" };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggerIn?.firstName || "Guest"}
            subtext="Access and manage your accounts and transactions efficiently"
          />
        </header>
      </div>
    </section>
  );
}

export default Home;
