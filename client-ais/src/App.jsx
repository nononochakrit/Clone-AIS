import { useState } from 'react'
import './App.css'
import Consumers from './Consumers'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  console.log('app')
  return (
    <>
      <Consumers></Consumers>

    </>
  )
}
export default App
