import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@voyage/artigas-ds'
import Loader from "../../Components/Loader"
import Rating from '../../components/Rating'

import { OffersContainer, OfferHotel, Filters, Price, HotelInfo } from './Offers.style'
import hotelImg from '../../images/novohotel.jpg'

const toCurrency = (number) => {
  const convertedCurrency = new Intl.NumberFormat("en-US").format(number);
  return convertedCurrency;
};

const Offers = () => {
  let { destino, ida, volta, adultos } = useParams();

  const [ loader, setLoader ] = useState('idle')
  const [ hotelOffer, setHotelOffer] = useState([]);

  const nightQuantity = (checkIn, checkOut) => {
    const date1 = new Date(checkOut)
    const date2 =  new Date(checkIn)

    const difference = date1.getTime() - date2.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));

    return days
  }


  useEffect(() => {

    const getHotelsUrl = `https://voyageecom.herokuapp.com/hotels?cityCode=${destino}&adults=${adultos}&roomQuantity=1&checkInDate=${ida}&checkOutDate=${volta}`
    setLoader('loading')
    axios
      .get(getHotelsUrl)
      .then((res) => {
        window.localStorage.setItem('hotelz', JSON.stringify(res.data))
        setHotelOffer(res.data);

      })
      .finally(() => {
        setLoader('idle')
      });

  }, [])


  const handleClick = (event, id) => {
    event.preventDefault();
    const selectedHotelOffer = hotelOffer.filter((hotel) => hotel.offers[0].id === id)
    dispatchEvent(
      new CustomEvent("@voyage-hotel-app-hotelOffer", {
        detail: selectedHotelOffer,
      })
    );
  }

  if (loader === 'loading') return (
    <OffersContainer className="container">
      <Loader />
    </OffersContainer>
  )

  return (
    <OffersContainer className="container">
      <Filters>
        <h2>Filter</h2>
      </Filters>
      <div>
      {
        hotelOffer.map(({ hotel, offers }, index) => (
          <OfferHotel key={index}>
            <div>
              <img src={hotelImg} alt={hotel.name} />
            </div>
            <HotelInfo>
              <h2>{hotel.name}</h2>
              <Rating rateNumber={hotel.rating} />

              <p>{hotel.hotelDistance.distance}
              {hotel.hotelDistance.distanceUnit} from downtown</p>
              <p>{offers[0].room.typeEstimated.beds} {offers[0].room.typeEstimated.bedType} bads</p>
            </HotelInfo>
            <Price>
              <p>{ nightQuantity(offers[0].checkInDate, offers[0].checkOutDate) } nights, { offers[0].guests.adults } adults</p>

              <span>{toCurrency(offers[0].price.total)}</span>
            <Button onClick={(e) => handleClick(e, offers[0].id)}>Continue</Button>
            </Price>
          </OfferHotel>
        ))
      }
      </div>
    </OffersContainer>
  )
}

export default Offers
