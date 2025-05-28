import React, { useState } from 'react';
import "./CardModal.css"
import { IconButton, Typography, Button, Stack } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CloseIcon from '@mui/icons-material/Close';
import InfoIcon from "@mui/icons-material/Info";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";


function CartModal({setCardModal,data,cardModal }) {
  const [count, setCount] = useState(1);
  const [activeColorIndex, setActiveColorIndex] = useState(null);
  const [activeSizeIndex, setActiveSizeIndex] = useState(null);
  const [mainimage, setMainImage] = useState(null);

  const colors = ["#000", "#f00", "#0f0"];
  const sizes = ["L", "X", "XL"];

const [modalData,setModalData]=useState(data?.results?.filter((item)=>item?.id==cardModal))



  return (
    <>
      <div className="cartModal">
        <div className="container" style={{ position: "relative" }}>
          <IconButton
            sx={{
              position: 'absolute',
              top: 10,
              right: 10,
              color: '#fff',
              backgroundColor: '#00000099',
              '&:hover': { backgroundColor: '#000000cc' }
            }}
          onClick={()=>{
            setCardModal(false)
          }}
          >
            <CloseIcon />
          </IconButton>

          <div className="cartModal_imgs">
            <div className="cardModal_img01">
        
            {modalData[0]?.images.map((item, index) => (
              <img
                key={index}
                onClick={() => setMainImage(item?.image)}
                src={item?.image}
                alt=""
              />
            ))}
            </div>
            <div className="modal_Imgs">
            <img className="main_image" src={mainimage ?mainimage :modalData[0]?.images[0].image } alt="" />
            </div>
          </div>

          <div className="cartModal_text">
            <h1>
            {modalData[0]?.name}
            </h1>

            <h3>Colors</h3>
            <div className="colors">
              {colors.map((color, index) => (
                <span
                  key={index}
                  onClick={() => setActiveColorIndex(index)}
                  className={activeColorIndex === index ? "active" : ""}
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>

            <h3>Size</h3>
            <div className="size">
              {sizes.map((size, index) => (
                <span
                  key={index}
                  onClick={() => setActiveSizeIndex(index)}
                  className={activeSizeIndex === index ? "active" : ""}
                >
                  {size}
                </span>
              ))}
            </div>

            <div className="count_money">
              <div className="counts" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <IconButton
                  onClick={() => setCount((prev) => Math.max(prev - 1, 1))}
                  color="primary"
                >
                  <RemoveIcon />
                </IconButton>

                <Typography variant="h6">{count}</Typography>

                <IconButton
                  onClick={() => setCount((prev) => prev + 1)}
                  color="primary"
                >
                  <AddIcon />
                </IconButton>
              </div>

              <div className="price">
                ${100 * count}
              </div>
            </div>

            <div className="CartModal_addCart">
  <Stack direction="row" spacing={2} mt={3}>
    <Button
      variant="outlined"
      color="red"
      size="large"
      startIcon={<InfoIcon />}
      sx={{
        textTransform: "none",
        borderRadius: "12px",
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "primary.light",
          color: "#fff",
          boxShadow: 3,
        },
      }}
    >
      To‘liq ma'lumotni ko‘rish
    </Button>
    <Button
      variant="contained"
      color=""
      size="large"
      endIcon={<ShoppingCartIcon />}
      sx={{
        textTransform: "none",
        borderRadius: "12px",
        boxShadow: 2,
        transition: "all 0.3s ease",
        ":hover": {
          backgroundColor: "primary.dark",
          transform: "scale(1.05)",
          color:"white"
        },
        ":active": {
          transform: "scale(0.98)",
          boxShadow: 1,
        },
      }}
    >
      Savatga qo‘shish
    </Button>
  </Stack>
</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartModal;