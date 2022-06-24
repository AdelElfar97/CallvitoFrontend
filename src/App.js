import React, { useMemo, useState, useEffect } from "react";
import Tabel from "./components/Tabel";
import AddForm from "./components/AddForm";
import Searchbar from "./components/Searchbar";
import "./styles.css";
import Header from "./components/Header";

export default function App() {
  return (
    <>
    <Header/>
    <AddForm />

      <Searchbar />
      <Tabel />
    </>
  );
}
