import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./main/Main";
import Products from "./admin/Products";
import ProductCreate from "./admin/ProductCreate";
import ProductEdit from "./admin/ProductEdit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" component={Main} />
        <Route path="/admin/products" component={Products} />
        <Route path="/admin/products/create" component={ProductCreate} />
        <Route path="/admin/products/:id/edit" component={ProductEdit} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
