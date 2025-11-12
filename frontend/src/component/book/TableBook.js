import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import toast from 'react-hot-toast';

export default function Book()
{
  const position = [51.505, -0.09];
  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    persons: "",
    date: "",
  });
 
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    console.log(data)

    const {name,phone,email,persons,date} = data

    if(name && phone && email && persons && date){
      const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/bookTable`,{
        method : "POST",
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify(data)
      })
  
      const fetchRes =  await fetchData.json()
  
      console.log(fetchRes)
      toast(fetchRes.message)

      setData(()=>{
        return{
          name : "",
          phone : "",
          email : "",
          persons : "",
          date : ""
        }
      })
    }
    else{
      toast("Enter required Fields")
    }
  }
return(
<section class="book_section layout_padding">
<div class="container">
  <div class="heading_container">
    <h2>
      Book A Table
    </h2>
  </div>
  <div class="row">
    <div class="col-md-6">
      <div class="form_container">
        <form action="" onSubmit={handleSubmit}>
          <div>
          <input
            type={"text"}
            id="name"
            name="name"
            class="form-control"
            value={data.firstName}
            onChange={handleOnChange}
          />
          </div>
          <div>
          <input
            type={"text"}
            id="phone"
            name="phone"
            class="form-control"
            value={data.firstName}
            onChange={handleOnChange}
          />
          </div>
          <div>
          <input
            type={"email"}
            id="email"
            name="email"
            class="form-control"
            value={data.firstName}
            onChange={handleOnChange}
          />
          </div>
          <div>
            <select class="form-control nice-select wide" id='persons' name='persons' onChange={handleOnChange} value={data.persons}>
              <option value="" >
                How many persons?
              </option>
              <option value="2">
                2
              </option>
              <option value="3">
                3
              </option>
              <option value="4">
                4
              </option>
              <option value="5">
                5
              </option>
            </select>
          </div>
          <div>
            <input type="date" class="form-control" id='date' name='date' onChange={handleOnChange} value={data.date}/>
          </div>
          <div class="btn_box">
            <button>
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="col-md-6">
      <div class="map_container ">
        <div id="googleMap">
        <MapContainer center={position} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
)
}