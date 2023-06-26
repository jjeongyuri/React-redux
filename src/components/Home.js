import './Home.css';
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';


export default function Home(){
    return (
        <>
        <div id="box01">
        <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
                    <img src='./img/box01_pic01.jpg' />
                    <div className='swiperbox'>
                        <h2>EVERY DA
                            <span>ILLY</span>
                        </h2>
                        <p>커피를 넘어 이탈리안 문화를 마시다.</p>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
                    <img src='./img/box01_pic02.jpg' />
                    <div className='swiperbox'>
                        <h2>X1 ANNIVERSARY 1935</h2>
                        <p>이탈리아 예술이 빚어낸 아름다움, 그 순간을 간직하다.</p>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
                    <img src='./img/box01_pic03.jpg' />
                    <div className='swiperbox'>
                        <h2>illy Caffè 가맹점주 모집</h2>
                        <p>정통 이탈리안 커피 라이프 공간<br/>
                           illy Caffè의 오너 바리스타가 되어 보세요.
                        </p>
                    </div>
        </SwiperSlide>
        <SwiperSlide>
                    <img src='./img/box01_pic04.jpg' />
                    <div className='swiperbox'>
                        <h2>공식 인증 마크를 확인하세요!</h2>
                        <p>illycaffe S.p.A에서 한국 독점 파트너사인<br/>
                           일리카페코리아 (주)큐로홀딩스에게만 제공한 인증 마크입니다.
                        </p>
                    </div>
        </SwiperSlide>
      </Swiper>
        </div>
        <div id="box02">
            <Link to={"/"}>
            <img src='../img/box02.gif' alt='머신이미지'/>
            </Link>
            <div className="etc">
              <h2>COFFEE MACHINES</h2>
              <p>
                COFFEE &amp; <br/>
                ESSPRESSO <br/>
                MACHINES
              </p>
              <p>탁월한 디자인과 완벽한 커피의 맛</p>
              <p>
                  <button>제품보기</button>
              </p>
            </div>
        </div>
        </>
    )
}