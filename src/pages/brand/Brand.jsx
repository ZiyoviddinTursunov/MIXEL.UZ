import React, { useEffect, useState } from "react";
import "./Brand.css";
import { LuChevronRight } from "react-icons/lu";
import { TbCoins } from "react-icons/tb";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { CiGrid2H, CiGrid41 } from "react-icons/ci";
import { getToken } from "../service/token";
import { baseURL } from "../../config";
import { useParams } from "react-router-dom";

function Brand() {
  const [verticalCard, setVerticalCard] = useState(true);
  const [view, setView] = React.useState("list");
  const { id } = useParams();
  const [brandName, setBrandName] = useState(null);

  const handleViewChange = (event, nextView) => {
    setView(nextView);
  };

  const getBrand = () => {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${getToken()}`);

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(`${baseURL}/brands/${id}/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setBrandName(result);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getBrand();
  }, [id]);

  return (
    <div className="brands">
      <div className="container">
        <div className="extra_info">
          <p>
            <span>
              Главная <LuChevronRight />
            </span>
            <span>
              {brandName?.name} <LuChevronRight />
            </span>
            <span>
              Телефоны и гаджеты <LuChevronRight />
            </span>
          </p>
          <p>Товаров 24 / 249</p>
        </div>

        <div className="ctgry_main_info">
          <h3>{brandName?.name}</h3>
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
                <ToggleButton
                  onClick={() => {
                    setVerticalCard(true);
                  }}
                  value="list"
                  aria-label="list"
                >
                  <CiGrid41 className="coin" />
                </ToggleButton>
                <ToggleButton
                  onClick={() => {
                    setVerticalCard(false);
                  }}
                  value="module"
                  aria-label="module"
                >
                  <CiGrid2H className="coin" />
                </ToggleButton>
              </ToggleButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brand;
