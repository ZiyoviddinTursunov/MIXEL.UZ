import React, { useEffect, useState } from "react";
import "./Home.css";
import Card from "../../components/cards/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";
import { HiH1 } from "react-icons/hi2";
import { baseURL } from "../../config";

function Home({ categoryInfo, brands, data }) {
  const [galery, setGalery] = useState(null);

  const getGalery = () => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(`${baseURL}/galary/`, requestOptions)
      .then((response) => response.json())
      .then((result) => {

        setGalery(result.results);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getGalery();
  }, []);

  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero_slider">
            <Swiper
             
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              {galery?.map((item) => {
                return (
                  <SwiperSlide>
                    <img src={item.image} alt="" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
      <main>
        <section>
          <div className="container">
            <div className="section1_nav">
              <h3>Горящие предложения</h3>
              <button>
                Посмотреть все <GoArrowRight />
              </button>
            </div>
            <div className="cards01">
              {data?.results.map((item,index) => {
                return <Card key={index}  item={item} />;
              })}
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="container">
            <h3>Популярные категории</h3>
            <div className="boxCategorys">
              <Swiper
                slidesPerView={4}
               
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
              >
                {categoryInfo?.results?.map((item) => {
                  return (
                    <SwiperSlide>
                      <div className="boxCategory">
                        <h4>{item.name}</h4>
                        <img src={item.image} alt="" />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </section>

        <section className="setion3">
          <div className="container">
            <div className="product-card3">
              <div className="product-info">
                <h2>Apple iPhone X 64 ГБ</h2>
                <p className="product-description">
                  Совершенно новый дисплей Super Retina с диагональю 5,8 дюйма,
                  который удобно лежит в руке и потрясающие выглядит, — это и
                  есть iPhone X.
                </p>
              </div>

              <div className="product-image">
                <img src="/imgs/892 1.png" alt="iPhone X" />
              </div>

              <div className="product-price-section">
                <p className="product-price">1 250 900 Сум</p>
                <p className="product-old-price">2 220 900 Сум</p>
                <button className="product-button">Показать еще</button>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="section1_nav">
              <h3>Товары дешевле:</h3>
              <button>
                Посмотреть все <GoArrowRight />
              </button>
            </div>
            <div className="cards01">
              {data?.results.slice(0, 10).map((item,index) => {
                return <Card key={index} item={item} />;
              })}
            </div>
          </div>
        </section>
        <section className="section5">
          <div className="container">
            <div className="section1_nav">
              <h3>Рекомендуем</h3>
              <button>
                Посмотреть все <GoArrowRight />
              </button>
            </div>
            <div className="divCard5">
              <img src="/imgs/newHotRus 1.png" alt="" />
              <div className="cards02">
                {data?.results.slice(6, 12).map((item,index) => {
                  return <Card key={index} item={item} />;
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="section6">
          <div className="container">
            <Swiper
              slidesPerView={5}
             
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              navigation={true}
              modules={[Autoplay, Navigation]}
              className="mySwiper"
            >
              {brands?.results?.map((item,index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="brendBox">
                      {item.image ? (
                        <img src={item.image} alt="" />
                      ) : (
                        <h1>{item.name}</h1>
                      )}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
