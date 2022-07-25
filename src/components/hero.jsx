// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

import nothing from "../images/nothing.png";

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseFirestore";



function Hero() {

    const [imgArr,setImgArr] = useState([]);

    useEffect(() => {
        getDoc(doc(db,"banners","banners")).then((data) => {
            const fetchedData = data.data();
            console.log(fetchedData);

            setImgArr(fetchedData.banners);

        }).catch((error) => {
            console.log(error);
        })
    },[])

    return ( 
        <div className="w-full">
            <Swiper
                spaceBetween={30}
                effect={"fade"}
                navigation={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay,EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    { 
                        imgArr.length <= 0 ? <img src={nothing} alt="thor poster" /> : <img src={imgArr[0]} alt="banner"/>
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        imgArr.length <= 0 ? <img src={nothing} alt="minions poster" /> : <img src={imgArr[1]} alt="banner"/>
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        imgArr.length <= 0 ? <img src={nothing} alt="kabbadi poster"/> : <img src={imgArr[2]} alt="banner" />
                    }
                </SwiperSlide>
                <SwiperSlide>
                    {
                        imgArr.length <= 0 ? <img src={nothing} alt="kabbadi poster"/> : <img src={imgArr[3]} alt="banner" />
                    }
                </SwiperSlide>
            </Swiper>
        </div>
     );
}

export default Hero;