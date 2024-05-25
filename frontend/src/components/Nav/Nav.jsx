import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { Collapse, Slide } from "@mui/material";

const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
};
const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = React.useState(
    getWindowDimensions()
  );
  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowDimensions;
};

export default function Nav() {
  const navigate = useNavigate();
  const { width } = useWindowDimensions();
  const [visible, setVisible] = React.useState(width > 768 ? true : false);
  function handleClick() {
    if (width < 768) {
      setVisible(!visible);
    }
  }
  const accessToken = localStorage.getItem("accessToken");
  function logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    navigate("/");
  }
  return (
    <div className="nav-wrapper">
      <div className="nav-bar">
        <Toolbar>
          {width < 768 && (
            <IconButton
              onClick={handleClick}
              size="large"
              edge="start"
              color="default"
            >
              <MenuIcon
                sx={{
                  color: "black",
                }}
              />
            </IconButton>
          )}

          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              color: "black",
              flexGrow: 1,
            }}
          >
            Panelinha
          </Typography>

          {width >= 768 && (
            <Box
              className="box"
              noWrap
              sx={{
                flexGrow: 1,
              }}
            >
              <Link to={"/"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                  }}
                >
                  Shop
                </Button>
              </Link>
              <Link to={"Men"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                  }}
                >
                  Men
                </Button>
              </Link>
              <Link to={"Woman"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                  }}
                >
                  Woman
                </Button>
              </Link>
              <Link to={"Kid"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                  }}
                >
                  Kid
                </Button>
              </Link>
            </Box>
          )}

          {!accessToken ? (
            <Link to={"Login"}>
              <Button
                className="bg-gradient-to-r to-[#ff69b4ba] from-[#320432]"
                sx={{
                  border: "none",
                  borderRadius: 5,
                }}
                variant="contained"
              >
                Login
              </Button>
            </Link>
          ) : (
            <>
              <Link to={"AddProduct"}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit"
                  sx={{ color: "grey", mr: 2 }}
                >
                  <AccountCircle
                    sx={{
                      color: "purple",
                      "&:hover": {
                        color: "purple",
                      },
                    }}
                  />
                </IconButton>
              </Link>
              <Button
                onClick={logout}
                className="bg-gradient-to-r to-[#ff69b4ba] from-[#320432]"
                sx={{
                  border: "none",
                  borderRadius: 5,
                }}
                variant="contained"
              >
                Logout
              </Button>
            </>
          )}
        </Toolbar>
        {width < 768 && (
          <Slide direction="right" in={visible} mountOnEnter unmountOnExit>
            <Box
              className="box"
              sx={{
                display: "block",
                backgroundColor: "white",
                position: "absolute",
                top: "92px",
                borderRadius: "8px",
                border: "1px solid #410b414a",
                zIndex: 1,
                boxShadow: 3,
              }}
            >
              <Link to={"/"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                    width: "100%", // Boutons pleine largeur pour ressembler à un menu mobile
                  }}
                >
                  Shop
                </Button>
              </Link>
              <Link to={"Men"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                    width: "100%",
                  }}
                >
                  Men
                </Button>
              </Link>
              <Link to={"Woman"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                    width: "100%",
                  }}
                >
                  Woman
                </Button>
              </Link>
              <Link to={"Kid"}>
                <Button
                  sx={{
                    color: "black",
                    "&:hover": {
                      color: "purple",
                    },
                    width: "100%",
                  }}
                >
                  Kid
                </Button>
              </Link>
            </Box>
          </Slide>
        )}
      </div>
    </div>
  );
}
