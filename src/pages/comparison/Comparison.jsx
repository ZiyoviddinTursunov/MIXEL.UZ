import React from "react";
import "./Comparison.css";
import { IoMdClose } from "react-icons/io";
import { alpha, styled } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
import Switch from "@mui/material/Switch";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { FaBalanceScale, FaHeart } from "react-icons/fa";
import { Checkbox } from "@mui/material";
import { FaCartShopping } from "react-icons/fa6";
import Card from "../../components/cards/Card";

function Comparison({ comparison }) {



  
  const PinkSwitch = styled(Switch)(({ theme }) => ({
    "& .MuiSwitch-switchBase.Mui-checked": {
      color: pink[600],
      "&:hover": {
        backgroundColor: alpha(pink[600], theme.palette.action.hoverOpacity),
      },
    },
    "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
      backgroundColor: pink[600],
    },
  }));

  const label = { inputProps: { "aria-label": "Color switch demo" } };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div className="Comparison">
      <div className="container">
        <span> Главная &gt; Сравнить</span>
        <div className="comparison-nav">
          <h3>Product comparison</h3>
          <div className="comparsion-menu">
            <div className="button-menu">
              <Stack direction="row" spacing={1}>
                <Chip
                  label="Смартфоны 5"
                  onClick={handleClick}
                  onDelete={handleDelete}
                />
                <Chip
                  label="Clickable Deletable"
                  variant="outlined"
                  onClick={handleClick}
                  onDelete={handleDelete}
                />
              </Stack>
            </div>

            <Button
              className="comparsionPlus"
              variant="contained"
              disableElevation
            >
              Add products
            </Button>
          </div>
          <span className="differences">
            {" "}
            <PinkSwitch {...label} defaultChecked /> Only differences
          </span>
        </div>

        <div className="comparsion-hero">
          <div className="comparsion-cards">
      
              <div className="card">
                <div className="cart_main_info">
                  <div className="card-image">
                    <img src="/public/imgs/cardImg.png" alt="" />
                  </div>
                  <div className="product-price">
                    <span>12200 сум/мес</span>
                    <h5>5000 сум</h5>
                  </div>
                  <div className="product-title">
                    <h5>title</h5>
                  </div>
                </div>
                <div className="product-menu">
                  <button>
                    {" "}
                    <Checkbox
                      {...label}
                      icon={<FaCartShopping />}
                      checkedIcon={<FaCartShopping color="var(--red)" />}
                    />
                  </button>
                  <span className="borderLeft">|</span>
                  <button>
                    {" "}
                    <Checkbox
                      {...label}
                      icon={<FaHeart />}
                      checkedIcon={<FaHeart color="var(--red)" />}
                    />
                  </button>
                  <button>
                    <span className="borderLeft">|</span>{" "}
                    <Checkbox
                      {...label}
                      icon={<FaBalanceScale />}
                      checkedIcon={<FaBalanceScale color="var(--red)" />}
                    />
                  </button>
                </div>
              </div>
           
          </div>


          <div className="info">
  {/* chiqadigan malumotlar kiritish joyi           */}
            <div className="infoDiv">
              <div className="type">
                <span>Type</span>
                <p>malumot</p>
              </div>
              <div className="type">
                <span>Type</span>
                <p>malumot</p>
              </div>
              <div className="type">
                <span>Type</span>
                <p>malumot</p>
              </div>
            </div>

          </div>



        </div>
      </div>
    </div>
  );
}

export default Comparison;
