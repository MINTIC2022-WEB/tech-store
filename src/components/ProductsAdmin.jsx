import React, { useState } from "react";
import "../styles/ProductsAdmin.css";
import ProductContainer from "./ProductContainer";
import { Button, Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import data from "../products.json";
import { Link, useNavigate } from "react-router-dom";

const ProductsAdmin = () => {
  let history = useNavigate();

  const handleDelete = (id) => {
    let index = data
      .map(function (e) {
        return e.id;
      })
      .indexOf(id);

    data.splice(index, 1);
    history("/products-admin");
  };

  const [products, setProducts] = useState(data);
  return (
    <ProductContainer>
      <div className="container">
        <Link className="d-grid gap-2" to="createproduct">
          <button className="btn btn-success">Nuevo</button>
        </Link>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Description</th>
            <th scope="col">Discount</th>
            <th scope="col">Stock</th>
          </tr>
        </thead>

        <tbody>
          {data.map((product, index) => {
            return (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                <td>{product.discount}%</td>
                <td>{product.stock}</td>
                <td>
                  <Link to={"/editproduct"}>
                    <button
                      className="btn btn-primary"
                      onClick={() => alert(product.id)}
                    >
                      Edit
                    </button>{" "}
                    {"  "}
                  </Link>

                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </ProductContainer>
  );
};

export { ProductsAdmin };
