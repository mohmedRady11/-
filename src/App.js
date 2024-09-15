
import React, { useEffect, useState } from "react";
import Payar from "./Payar/Payar";

function CnaMo() {


  const [prayartime,setprayartime]=useState({})
  const [datetime,setdatetime]=useState("")
  const [city,setcity]=useState("Cairo")

   let date_ = new Date();

  const citise = [
  {name:"القاهرة" , value:"Cairo"},
  {name:"الاسكندرية" , value:"Alexandria"},
  {name:"الجيزه" , value:"Giza"},
  {name:"المنصورة" , value:"Mansoura"},
  {name:"اسوان" , value:"Aswan"},
  {name:"الاقصر" , value:"Luxor"},
  {name:"كفرالشيخ" , value:"Kafr El Sheikh"},
]

useEffect(() => {
    const fetchPayarTime = async () => {
      try {
        const response = await fetch(`https://api.aladhan.com/v1/timingsByCity/${date_.getDate()}-${date_.getMonth()+1}-${date_.getFullYear()}?date=03-09-2024&city=${city}&country=EG`)
        const data_prayar = await response.json()

        setprayartime(data_prayar.data.timings)
        setdatetime(data_prayar.data.date.gregorian.date)
        console.log(city)
        
      } catch(error) {
        console.error(error)
      }
    }
  fetchPayarTime();
},[city])
  
  
  // const formaitTims = (time) => {
  //   if (!time) {
  //     return "00:00"
  //   }

  //   let [hours, minutes] = time.split(":").map(Number)
  //   const perd = hours >= 12 ? "PM" : "AM";
  //   hours = hours % 12 || 12;
  //   return `${hours} ${minutes < 10 ? "0" + minutes : minutes} ${perd}`
  // }
  
  return (
    <>
      <div className="contaner">
        <div className="contaner-date">
          <div className="top-date">
            <div className="sec1">
              <h3>المدينة</h3>
            <select onChange={(e)=>{setcity(e.target.value)}}>
                {citise.map((city_ ) => (
                  <option key={city_.value} value={city_.value}>{city_.name}</option>
                ))}
            </select>
            </div>
            <div className="sec2">
              <h3>التاريخ</h3>
              <h4>{datetime}</h4>
            </div>
            </div>
            <Payar name="الفجر :" time={prayartime.Fajr} />
            <Payar name="الظهر :" time={prayartime.Dhuhr} />
            <Payar name="العصر :" time={prayartime.Asr} />
            <Payar name="المغرب :" time={prayartime.Maghrib} />
            <Payar name="العشاء :" time={prayartime.Isha} />
        </div>
      </div>
      <div className="footer"><h2>Create By Mohmed Rady<span>&copy;</span></h2></div>

  </>
)
}

export default CnaMo;
