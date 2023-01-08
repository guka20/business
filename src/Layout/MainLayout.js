import React from "react";
import { Footer, Navbar } from ".";
export const MainLayout = ({ children }) => {
  return (
    <main className="layout">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
