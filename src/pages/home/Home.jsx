import React from "react";
import "./Home.css";

import Card from "../../components/cards/Card";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";

function Home() {
  return (
    <>
      <div className="hero">
        <div className="container">
          <div className="hero_slider">
            <Swiper
              loop={true}
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
              <SwiperSlide>
                <img src="/imgs/75huylFjILwQmN7lrs89 1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/75huylFjILwQmN7lrs89 1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/75huylFjILwQmN7lrs89 1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/75huylFjILwQmN7lrs89 1.png" alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="/imgs/75huylFjILwQmN7lrs89 1.png" alt="" />
              </SwiperSlide>
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </section>

        <section className="section2">
          <div className="container">
            <h3>Популярные категории</h3>
            <div className="boxCategorys">
              <Swiper
                slidesPerView={4}
                loop={true}
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
                <SwiperSlide>
                  <div className="boxCategory">
                    <h4>Компьютеры</h4>
                    <img
                      src="https://abzzvx.pythonanywhere.com/media/images/camputer.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="boxCategory">
                    <h4>Компьютеры</h4>
                    <img
                      src="https://abzzvx.pythonanywhere.com/media/images/camputer.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="boxCategory">
                    <h4>Компьютеры</h4>
                    <img
                      src="https://abzzvx.pythonanywhere.com/media/images/camputer.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="boxCategory">
                    <h4>Компьютеры</h4>
                    <img
                      src="https://abzzvx.pythonanywhere.com/media/images/camputer.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="boxCategory">
                    <h4>Компьютеры</h4>
                    <img
                      src="https://abzzvx.pythonanywhere.com/media/images/camputer.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="boxCategory">
                    <h4>Компьютеры</h4>
                    <img
                      src="https://abzzvx.pythonanywhere.com/media/images/camputer.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="boxCategory">
                    <h4>Компьютеры</h4>
                    <img
                      src="https://abzzvx.pythonanywhere.com/media/images/camputer.png"
                      alt=""
                    />
                  </div>
                </SwiperSlide>
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
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
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
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </div>
          </div>
        </section>
        <section className="section6">
          <div className="container">
            <Swiper
              slidesPerView={5}
              loop={true}
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
              <SwiperSlide>
                <div className="brendBox">
                  <img src="/imgs/brend1.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="brendBox">
                  <img src="/imgs/brend2.svg" alt="" />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="brendBox">
                  <img src="/imgs/brend3.svg" alt="" />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="brendBox">
                  <img src="/imgs/brend4.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brendBox">
                  <img src="/imgs/brend5.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brendBox">
                  <img src="/imgs/brend1.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="brendBox">
                  <img src="/imgs/brend2.svg" alt="" />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <div className="brendBox">
                  <img src="/imgs/brend3.svg" alt="" />
                </div>{" "}
              </SwiperSlide>
              <SwiperSlide>
                <div className="brendBox">
                  <img src="/imgs/brend4.svg" alt="" />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="brendBox">
                  <img src="/imgs/brend5.svg" alt="" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
