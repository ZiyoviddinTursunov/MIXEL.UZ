import React, { useEffect, useState } from "react";
import "./Category.css";
import { LuChevronRight } from "react-icons/lu";
import { TbCoins } from "react-icons/tb";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { pink } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useParams } from "react-router-dom";
import Card from "../../components/cards/Card";
import CategoryCards from "../../components/categoryCards/CategoryCards";
import { getToken } from "../service/token";

function Category({ data, likedData, getData }) {
  const { id } = useParams();
  const [categoryData, setCategoryData] = useState(null);


const categoryFilter=()=>{
  const myHeaders = new Headers();
myHeaders.append("Authorization", `Bearer ${getToken()}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch(`https://abzzvx.pythonanywhere.com/products/?category=${id}\n`, requestOptions)
  .then((response) => response.json())
  .then((result) => {

    setCategoryData(result?.results)

  })
  .catch((error) => console.error(error));
}

useEffect(()=>{
  categoryFilter()
},[id])

  const [verticalCard,setVerticalCard]=useState(true)

  function valuetext(value) {
    return `${value}°C`;
  }

  const [view, setView] = React.useState("list");
  const handleViewChange = (event, nextView) => {
    setView(nextView);
  };

  const [value, setValue] = React.useState([20, 37]);
  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <div className="categories">
      <div className="container">
        <div className="extra_info">
          <p>
            <span>
              Главная <LuChevronRight />
            </span>
            <span>
              Телефоны, планшеты <LuChevronRight />
            </span>
            <span>
              Телефоны и гаджеты <LuChevronRight />
            </span>
          </p>
          <p>Товаров 24 / 249</p>
        </div>

        <div className="ctgry_main_info">
          <h3>{categoryData[0]?.category_name}</h3>
          <div className="ctgry_ordering">
            <div>
              <span>
                <TbCoins className="coin" />
                По цене
              </span>
              <span>
                <RiBarChartHorizontalLine className="coin" />
                По популярности
              </span>
            </div>
            <div>
              <ToggleButtonGroup
                className="ToggleButtonGroup"
                orientation="horizontal"
                value={view}
                exclusive
                onChange={handleViewChange}
              >
                <ToggleButton onClick={()=>{
                      setVerticalCard(true)
                  
                }} value="list" aria-label="list">
                  <CiGrid41 className="coin" />
                </ToggleButton>
                <ToggleButton onClick={()=>{
                 setVerticalCard(false)
                  
                }} value="module" aria-label="module">
                  <CiGrid2H className="coin" />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>

        <div className="categoryMenu">
          <div className="features">
            <div className="features_info">
              <div>
                <h5 className="feature_title">Price (uzs)</h5>
                <div className="price_div">
                  <span> from 100 000</span>
                  <span>until 20 000 000</span>
                </div>
                <Box sx={{ width: 230 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    min={10000}
                    max={5000000}
                    onChange={handleSliderChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                  />
                </Box>
              </div>

              <div>
                <h5 className="feature_title">Brand</h5>
                <ul>
                  <li>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                    <label htmlFor="">LG (30)</label>
                  </li>
                  <li>
                    <Checkbox
                      {...label}
                      defaultChecked
                      sx={{
                        color: pink[800],
                        "&.Mui-checked": {
                          color: pink[600],
                        },
                      }}
                    />
                    <label htmlFor="">LG (30)</label>
                  </li>
                </ul>
              </div>

              <Stack spacing={2} direction="row">
                <Button variant="contained">Apply</Button>
              </Stack>
            </div>
          </div>
          <div className="categoryCard">
           
          {
verticalCard ?   categoryData?.map((item,i)=>{
  return <Card key={i} item={item} likedData={likedData}
  getData={getData}/>
}) :categoryData?.map((item,i) => {
  return (
    <CategoryCards key={i}
      likedData={likedData}
      getData={getData}
      item={item}
    />
  );
})


          }

       
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
