import React,{useEffect, useState ,useRef} from 'react'
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Dashboard() {

  const dataObject=[
    {src:"../../images/proc-i9.jpg" ,name:"Intel Core i9-13900K 3.0GHz Up To 5.8GHz",price:"Rp 9.085.000"},
    {src:"../../images/headset-dareu.jpg" ,name:"Dareu Miracle EH-925S DM Gaming Headset",price:"Rp 460.000"},
    {src:"../../images/psu-bequiet.jpg" ,name:"be quiet! SYSTEM POWER 9 400W - 80+ Bronze Certified",price:"Rp 706.000"},
    {src:"../../images/mobo-asrock.jpg" ,name:"Asrock Z790 Steel Legend WIFI (LGA1700, Z790, DDR5, USB3.2 Type-C, SATA3)",price:"Rp 5.535.000"},
    {src:"../../images/monitor-samsung.jpg" ,name:'SAMSUNG 27" S27AG32 Odyssey G3 FHD Gaming Monitor 165Hz',price:"Rp 3.020.000"},
  ]

  const dataSlider=[
    "../../banner/banner.jpg",
    "../../banner/banner2.jpg",
    "../../banner/banner3.jpg",
    "../../banner/banner4.jpg",
  ]
  const [currentBanner, setCurrentBanner] = useState(0);

  return (
    <div className="z-0">
      <p className="text-gray-700 text-3xl mb-5 ml-16 font-bold pt-50">HOT ITEM</p>
      <div>
      <Carousel
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={3000}
          className="grid col-1 bg-white h-90 shadow-xl ml-16 mb-16"
          selectedItem={currentBanner}
          onChange={(index) => setCurrentBanner(index)}
        >
          {dataSlider.map((banner, index) => (
            <div key={index}>
              <img src={banner} alt={`Banner ${index}`} />
            </div>
          ))}
        </Carousel>
        </div>
      {/* <div className='w-full select-none relative'> */}
      {/* 
      <div className="grid col-1 bg-white h-90 shadow-xl ml-16 mb-16">
        <img src={dataSlider[0]} alt=""/>
      </div>

      <div className="absolute w-full top-1/2 translate-y-1/2 px-3 flex justify-between items-center">
        <button onClick={}>Previous</button>
        <button onClick={}>Next</button>

      </div> */}

      {/* </div> */}

      {/* <div className="grid col-1 bg-white h-90 shadow-xl ml-16 mb-16">
                <img
                  src="../../banner/banner.jpg"
                  className="rounded border-2 shadow-sm"
                  alt="profile picture"
                />
      </div> */}
      
      <div className="grid lg:grid-cols-5 lg:grid-rows-5 gap-5 mb-16 ml-16">
        {
          (dataObject || []).map((data)=>

          <div className="rounded-b-lg shadow-xl hover:scale-110 transition-all duration-500 cursor-pointer">
          <img
            src= {data.src}
            className="p-1"
            alt="profile picture"
          />
          <div className="text-xs text-center">
            <p className="font-semibold truncate m-1">{data.name}</p>
            <p className="mb-1 mt-3 text-green-600 font-extrabold">{data.price}</p>
          </div>
          
      </div>

          )
        }
      </div>
    </div>
  )
}

export default Dashboard
