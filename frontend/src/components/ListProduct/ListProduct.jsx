import { Rating } from "@mui/material";
import React from "react";
import { useState, useEffect } from "react";

export default function ListProduct({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(4);

  const [showNotification, setShowNotification] = useState(false);
  const [productToDelete, setProductToDelete] = useState(null);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / productsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleDeleteConfirmation = (product) => {
    setProductToDelete(product);
  };

  const handleDelete = () => {
    // Supprimer le produit ici (vous devez implémenter cette fonctionnalité)
    // Après avoir supprimé le produit, vous pouvez afficher la notification
    setShowNotification(true);
    setProductToDelete(null);
  };

  const handleCloseNotification = () => {
    setShowNotification(false);
  };

  return (
    <div>
      <div className="relative overflow-hidden sm:overflow-x-auto shadow-md sm:rounded-lg w-[72vw] my-8  ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-16 py-3">
                <span className="sr-only">Image</span>
              </th>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Quantity
              </th>
              <th scope="col" className="px-6 py-3">
                Rating
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr
                key={product.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="p-3">
                  <div className="w-24 h-24 ">
                    <img
                      src={product.picture}
                      className="w-full h-full max-w-full border border-none rounded-md"
                      alt={product.title}
                    />
                  </div>
                </td>
                <th
                  scope="row"
                  className="px-6 py-4 font-bold text-gray-600 whitespace-nowrap"
                >
                  {product.title}
                </th>
                <td className=" px-6 py-4">
                  <div>
                    <p className="line-clamp-2 text-xs">
                      {product.description}
                    </p>
                  </div>
                </td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.qte}</td>
                <td className="px-2 py-4">
                  <Rating
                    precision={0.5}
                    name="read-only"
                    value={product.rate}
                    readOnly
                    size="small"
                  />
                </td>
                <td className="px-6 py-4 ">
                  <input
                    onClick={() => handleDeleteConfirmation(product)}
                    type="button"
                    value="Delete"
                    className="font-medium text-red-600 cursor-pointer border rounded-md border-red-600 p-2"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {productToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <p>Êtes-vous sûr de vouloir supprimer ce produit ?</p>
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={handleDelete}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
              >
                Oui
              </button>
              <button
                onClick={() => setProductToDelete(null)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Non
              </button>
            </div>
          </div>
        </div>
      )}

      {showNotification && (
        <div className="fixed bottom-0 right-0 m-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          Produit supprimé avec succès!
          <button onClick={handleCloseNotification} className="ml-4 text-white">
            Fermer
          </button>
        </div>
      )}

      <nav
        className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 mb-4 md:mb-0 block w-full md:inline md:w-auto">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {indexOfFirstProduct + 1}-
            {indexOfLastProduct > products.length
              ? products.length
              : indexOfLastProduct}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">{products.length}</span>
        </span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <a
                href="#"
                className={`flex items-center justify-center px-3 h-8 leading-tight ${
                  currentPage === pageNumber
                    ? "text-blue-600 border bg-blue-50"
                    : "text-gray-500 border bg-white"
                } border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700`}
                onClick={() => handlePageClick(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
