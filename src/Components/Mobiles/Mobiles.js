import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import "./Mobiles.css";
import Card from 'react-bootstrap/Card';
import { Button } from "@mui/material";
import Apple_iphone_14_pro from "../../Images/phone images/Apple-iphone-14-pro-max-128gb-Deep-Purple-Front-Back-View.png";
import Samsung_galaxy_s23_ultra from "../../Images/phone images/Samsung-galaxy-s23-ultra-5g-green-512gb-12gb-ram-Front-Back.png";
import apple_iphone_14_yellow from "../../Images/phone images/apple-iphone-14-yellow-128gb-front-back-view.png";
import oneplus_nord from "../../Images/phone images/oneplus-nord-ce-3-5g-gray-shimmer-256gb-8gb-ram-front-view.png";
import Realme_11_pro from "../../Images/phone images/Realme-11-pro-plus-5g-astral-black-256gb-12gb-ram-Front-Back-View.png";
import Redmi_note_12_5g from "../../Images/phone images/Redmi-note-12-5g-frosted-green-128gb-6gb-ram-Front-Back-View.png";
import Samsung_galaxy_a54_5g from "../../Images/phone images/Samsung-galaxy-a54-5g-awesome-lime-128gb-8gb-ram-Front-Back.png";
import Vivo_y100a_5g_metal from "../../Images/phone images/Vivo-y100a-5g-metal-black-128gb-8gb-ram-Front-Back-View.png";
import oppo_reno_10_pro from "../../Images/phone images/oppo-reno-10-pro-plus-5g-glossy-purple-256gb-12gb-ram-front-and-back-view.png";
import tecno_camon_20_pro from "../../Images/phone images/tecno-camon-20-pro-5g-serenity-blue-128gb-8gb-ram-front-and-back-view.png";
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";


export default function Mobiles({ mode, setMode }) { 
    const navigate=useNavigate();

  let [data,setData] = useState([
    {
      url: Apple_iphone_14_pro,
      title: "Apple iPhone 14 Pro Max ( Deep Purple,128GB )",
      varient: "( Deep Purple,128GB )",
      price: "₹ 1,39,900",
      oprice: "₹ 1,39,900",
      percent: null,
    },
    {
      url: Samsung_galaxy_s23_ultra,
      title: "Samsung Galaxy S23 Ultra 5G ( Green,12GB-512GB )",
      varient: "( Green,12GB-512GB )",
      price: "₹ 1,34,999",
      oprice: "₹ 1,61,999",
      percent: "17% OFF",
    },
    {
      url: apple_iphone_14_yellow,
      title: "Apple iPhone 14 ( Yellow, 128GB )",
      varient: "( Yellow, 128GB )",
      price: "₹ 74,900",
      oprice: "₹ 79,900",
      percent: "6% OFF",
    },
    {
      url: oneplus_nord,
      title: "OnePlus Nord CE 3 5G ( Gray Shimmer, 8GB-128GB )",
      varient: "( Gray Shimmer, 8GB-128GB )",
      price: "₹ 26,999",
      oprice: "₹ 26,999",
      percent: null,
    },
    {
      url: Samsung_galaxy_a54_5g,
      title: "Samsung Galaxy A54 5G ( Awesome Lime, 8GB-128GB)",
      varient: "( Awesome Lime, 8GB-128GB )",
      price: "₹ 38,999",
      oprice: "₹ 40,169",
      percent: "3% OFF",
    },
    {
      url: oppo_reno_10_pro,
      title: "Oppo Reno 10 Pro Plus 5G ( Glossy Purple, 12GB-256GB )",
      varient: "( Glossy Purple, 12GB-256GB )",
      price: "₹ 54,999",
      oprice: "₹ 55,999",
      percent: "2% OFF",
    },
    {
      url: Redmi_note_12_5g,
      title: "Redmi Note 12 5G ( Frosted Green,6GB-128GB )",
      varient: "( Frosted Green,6GB-128GB )",
      price: "₹ 18,999",
      oprice: "₹ 21,999",
      percent: "14% OFF",
    },
    {
      url: Realme_11_pro,
      title: "Realme 11 Pro Plus 5G ( Astral Black,12GB-256GB )",
      varient: "( Astral Black,12GB-256GB )",
      price: "₹ 29,999",
      oprice: "₹ 32,999",
      percent: "9% OFF",
    },
    {
      url: tecno_camon_20_pro,
      title: "Tecno Camon 20 Pro 5G ( Serenity Blue,8GB-128GB )",
      varient: "( Serenity Blue,8GB-128GB )",
      price: "₹ 19,999",
      oprice: "₹ 22,999",
      percent: "13% OFF",
    },
    {
      url: Vivo_y100a_5g_metal,
      title: "Vivo Y100A 5G ( Metal Black, 8GB-128GB )",
      varient: "( Metal Black, 8GB-128GB )",
      price: "₹ 23,999",
      oprice: "₹ 29,999",
      percent: "20% OFF",
    },
  ]
) 
console.log(data)
  const deleteMobile = async (id) => { 

    let Ddata= data.filter( (da)=>data.indexOf(da)===id.idx ) 
    console.log( Ddata[0]);
    
    let Alist= data.filter((dat)=>dat!==Ddata[0])
    console.log( Alist);

    setData(Alist)

    // let data = await axios.delete(`${url}/movies/deleteMovieReview/${id}`);
    // console.log(data);
    // toast.error(data.data.message);
    // getMovies();
  };

  return (
    <div className="Mobiles">
      <Navbar mode={mode} setMode={setMode} />
      <div className="mobiles-outer"> 
      {data.map((data, idx) => {
                return (
                  <Card
                    key={idx}
                    style={{ width: "203px" }}
                    className="main-carouselcards"
                  >
                    <div style={{ textAlign: "center" }}>
                      <Card.Img
                        style={{ width: "150px", height: "150px" }}
                        variant="top"
                        src={data.url}
                      />
                    </div>
                    <Card.Body
                      style={{ padding: "5px" }}
                      className="main-carouselcardsbody"
                    >
                      <Card.Text className="main-cardtitle">{data.title}</Card.Text>
                      <Card.Text className="main-cardvarient">
                        {data.varient}
                      </Card.Text>

                      <Card.Text className="main-cardprice">{data.price}</Card.Text>
                      <div className="main-oprice-per">
                        {data.price !== data.oprice ? (
                          <Card.Text className="main-cardoprice">
                            {data.oprice}
                          </Card.Text>
                        ) : (
                          ""
                        )}
                        <Card.Text className="main-cardpercent">
                          {data.percent}
                        </Card.Text>
                      </div>
                     <div className="btns"> 
                      <Button className="buy-btn" style={{backgroundColor:mode? "#ff9c07":""}} variant="contained" onClick={()=>navigate("/mobiles/buy")}>Buy</Button>
                      <Button className="buy-btn" style={{backgroundColor:mode? "red":""}} variant="contained" onClick={()=>deleteMobile({idx})}>Delete</Button>

                     </div>
                    </Card.Body>
                  </Card>
                );
              })} 
      </div>
      <Footer mode={mode}/>
    </div>
  );
}
