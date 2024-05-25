import React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

export default function CardProductHome({ product }) {
  return (
    <div className="container-card-swiper">
      <div
        data-aos="fade-right"
        data-aos-duration="800"
        data-aos-once="tue"
        className="custom-card"
      >
        <div className="img-box">
          <img src={product.picture} alt="" />
        </div>
        <div className="custom-content">
          <h2>{product.title}</h2>
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating
              precision={0.5}
              name="read-only"
              value={product.rate}
              readOnly
              size="small"
            />
          </Box>
          <p className=" line-clamp-2">{product.description}</p>
          <Link to={"/Product/" + product._id}>
            <input type="button" value="Read More" />
          </Link>
        </div>
      </div>
    </div>
  );
}
