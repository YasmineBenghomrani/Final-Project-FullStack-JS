import axios from "axios";
import React, { useEffect, useState } from "react";
import Test from "../components/test";
import ListProduct from "../components/ListProduct/ListProduct";

export default function AddProduct() {
  const [showAddProduct, setShowAddProduct] = useState(true);
  const [showProductList, setShowProductList] = useState(false);
  const [product, setProduct] = useState([]);

  const handleAddProductClick = () => {
    setShowAddProduct(true);
    setShowProductList(false);
  };

  const handleProductListClick = () => {
    setShowAddProduct(false);
    setShowProductList(true);
  };
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    qte: "",
    category: "men",
    picture: "",
    rate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here you can perform form submission logic, like sending data to server
    console.log("Form submitted:", formData);
    // Reset form fields after submission
    setFormData({
      title: "",
      description: "",
      price: "",
      qte: "",
      category: "men",
      picture: "",
      rate: "",
    });

    // Send request
    try {
      const res = await axios.post("http://localhost:8000/product", formData, {
        headers: {
          Authorization: localStorage.getItem("accessToken"),
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get("http://localhost:8000/products", {
          headers: {
            Authorization: localStorage.getItem("accessToken"),
          },
        });
        setProduct(res.data.product);
      } catch (error) {
        console.error("Erreur lors de la requête vers l'API :", error);
      }
    };

    axios
      .get("http://localhost:8000/product")
      .then((res) => {
        setProduct(res.data.product);
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers l'API :", error);
      })
      .finally(() => {});

    fetchProducts();
  }, []);

  return (
    <div className="max-w-md mx-auto bg-white rounded-md p-8 mt-24">
      <h2
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        className="text-2xl font-semibold mb-6"
      >
        Add Product
      </h2>
      <div className="div-tabs">
        <div className="tabs">
          <input
            type="radio"
            name="tabs"
            id="addProduct"
            checked={showAddProduct}
            onChange={handleAddProductClick}
          />
          <label className="tab" htmlFor="addProduct">
            add Product
          </label>
          <input
            type="radio"
            name="tabs"
            id="list"
            checked={showProductList}
            onChange={handleProductListClick}
          />
          <label className="tab" htmlFor="list">
            Product List
          </label>
          <span className="slider"></span>
        </div>
      </div>
      {showAddProduct && (
        <form
          data-aos="fade"
          data-aos-duration="800"
          data-aos-once="tue"
          data-aos-delay="200"
          onSubmit={handleSubmit}
          className="max-w-md mx-auto"
        >
          <div className="relative z-0 w-full mb-5 ">
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="title"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Title
            </label>
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm text-gray-500 font-normal mb-2"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border text-sm text-gray-900 bg-transparent border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="price"
                className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                id="qte"
                name="qte"
                value={formData.qte}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="qte"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Quantity
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="number"
                id="rate"
                name="rate"
                value={formData.rate}
                onChange={handleChange}
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                pattern="[0-5]+(\.[0-9]{1})?"
                title="Please enter a number between 0 and 5 with at most one decimal place"
                placeholder=" "
                required
              />
              <label
                htmlFor="rate"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Rating (Stars)
              </label>
            </div>
            <div className="relative z-0 w-full mb-5 group">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="block py-2.5 px-0 w-full text-sm  text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              >
                <option value="men">Men</option>
                <option value="woman">Woman</option>
                <option value="kid">Kid</option>
              </select>
              <label
                htmlFor="category"
                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                category
              </label>
            </div>
          </div>
          <div className="relative z-0 w-full mb-5 ">
            <input
              type="url"
              id="picture"
              name="picture"
              value={formData.picture}
              onChange={handleChange}
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="picture"
              className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Picture
            </label>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Add Product
            </button>
          </div>
        </form>
      )}
      <div className="flex items-center justify-center  ">
        {showProductList && <ListProduct products={product || []} />}
      </div>
    </div>
  );
}
