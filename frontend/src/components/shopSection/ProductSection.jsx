import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import CardProduct from "../CardProduct/CardProduct";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "2px solid rgb(110, 53, 110)",
  "&:hover": {
    backgroundColor: " rgba(65, 11, 65, 0.29)",
  },

  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "35%",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function ProductSection({}) {
  const [selectedCateg, setSelectedCateg] = useState("men");
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/product")
      .then((res) => {
        if (res.data && res.data.product && Array.isArray(res.data.product)) {
          console.log(res.data.product);
          setProduct(res.data.product);
          setAllProducts(res.data.product);
        } else {
          console.error(
            "Format de données invalide : les données du produit sont absentes ou incorrectes"
          );
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la requête vers l'API :", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log(product);

  return (
    <main>
      <section className="partie-produit-home">
        <div className="w-11/12 flex justify-between items-center">
          <h2 className="text-3xl sm:text-2xl lg:text-2xl font-bold">
            Products
          </h2>
          {/* <div className="line-container"></div> */}

          <Search
            data-aos="slide-down"
            data-aos-duration="800"
            data-aos-once="tue"
            allProducts={allProducts}
            setProduct={setProduct}
            sx={{
              color: "white",
              borderRadius: 22,
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: " rgb(110, 53, 110)" }} />
            </SearchIconWrapper>
            <StyledInputBase
              value={inputValue}
              onChange={(event) => {
                setInputValue(event.target.value);
                //ou l'equivalant :
                // function search inputvalue(event){
                //set inputvalue(vent.target.value);}]
                //onchage=(inputvalue)
                setProduct(
                  allProducts.filter((e) =>
                    e.title
                      .toLowerCase()
                      .includes(event.target.value.toLowerCase())
                  )
                );
              }}
              sx={{ color: "black" }}
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <div className="action-product">
            <input
              onClick={() => {
                setSelectedCateg("All");
                setProduct(allProducts);
              }}
              style={
                selectedCateg == "All"
                  ? {
                      borderBottom: "2px solid purple",
                      width: "100%",
                    }
                  : null
              }
              type="button"
              value="All"
            />
            <input
              onClick={() => {
                setSelectedCateg("men");
                setProduct(allProducts.filter((e) => e.category === "men"));
              }}
              style={
                selectedCateg == "men"
                  ? {
                      borderBottom: "2px solid purple",
                      width: "100%",
                    }
                  : null
              }
              type="button"
              value="men"
            />
            <input
              onClick={() => {
                setSelectedCateg("woman");
                setProduct(allProducts.filter((e) => e.category === "woman"));
              }}
              style={
                selectedCateg == "woman"
                  ? {
                      borderBottom: "2px solid purple",
                      width: "100%",
                    }
                  : null
              }
              type="button"
              value="woman"
            />
            <input
              onClick={() => {
                setSelectedCateg("kid");
                setProduct(allProducts.filter((e) => e.category === "kid"));
              }}
              style={
                selectedCateg == "kid"
                  ? {
                      borderBottom: "2px solid purple",
                      width: "100%",
                    }
                  : null
              }
              type="button"
              value="kid"
            />
          </div>
        </div>
        <div className="productCountent">
          {loading ? (
            <CircularProgress />
          ) : (
            <CardProduct
              products={product || []}
              bgColor={"bg-gradient-to-r to-[#ff69b4ba] from-[#320432]"}
            />

            // <CardProduit
            //   bgColor={"bg-gradient-to-r to-[#ff69b4ba] from-[#320432]"}
            // />
          )}
        </div>
      </section>
    </main>
  );
}
