import React from "react";
import Routes from './components/Router'

const hhh = [{
  "type": "hotel-offers",
  "hotel": {
    "type": "hotel",
    "hotelId": "RTSAOPCT",
    "chainCode": "RT",
    "dupeId": "700040137",
    "name": "Mercure Sao Paulo Central Towers Hotel",
    "rating": "4",
    "cityCode": "SAO",
    "latitude": -23.56449,
    "longitude": -46.64159,
    "hotelDistance": {
      "distance": 1.8,
      "distanceUnit": "KM"
    },
    "address": {
      "lines": [
        "RUA MTO. CARDIM, 407",
        "PARAISO"
      ],
      "postalCode": "1323000",
      "cityName": "SAO PAULO",
      "countryCode": "BR",
      "stateCode": "SP"
    },
    "contact": {
      "phone": "55/11/28537000",
      "fax": "55/11/28537088",
      "email": "h3626-re@accor.com.br"
    },
    "description": {
      "lang": "en",
      "text": "The Mercure São Paulo Central Towers hotel is in a prime spot between Avenida Paulista and Avenida 23 de Maio, close to the city's main theaters: Abril, Imprensa and Raul Cortez. The hotel is located within easy reach of the Bela Vista district with its traditional Italian restaurants, including Roperto, Famiglia Mancini and Speranza, and it is also close to several hospitals: Beneficência Portuguesa, Santa Catarina, Sirio Libanes and Oswaldo Cruz."
    },
    "amenities": [
      "ELEVATOR",
      "VALET_PARKING",
      "INTERNET_SERVICES",
      "PARKING",
      "120_AC",
      "WHEELCHAIR_ACCESSIBLE_PUBLIC_AREA",
      "WIRELESS_CONNECTIVITY",
      "EXPRESS_CHECK_IN",
      "EXPRESS_CHECK_OUT",
      "24_HOUR_FRONT_DESK",
      "GARAGE_PARKING",
      "SMOKE_DETECTOR",
      "FIRE_SAFETY",
      "EMERGENCY_BACKUP_GENERATOR",
      "FIRE_DETECTORS",
      "EMERGENCY_LIGHTING",
      "MULTILINGUAL_STAFF",
      "RESTAURANT",
      "PHOTOCOPIER",
      "MEETING_FACILITIES",
      "MEETING_ROOMS",
      "BUSINESS_CENTER",
      "AUDIO-VISUAL_EQUIPMENT",
      "HIGH_SPEED_INTERNET_IN_ROOM",
      "SHOWER",
      "WAKEUP_SERVICE",
      "WI-FI_IN_ROOM",
      "DIRECT_DIAL_PHONE",
      "HAIR_DRYER",
      "CABLE_TELEVISION",
      "TELEVISION",
      "SATELLITE_TV",
      "AIR_CONDITIONING",
      "FREE_NEWSPAPER",
      "SAFE",
      "BEACH"
    ],
    "media": [
      {
        "uri": "http://uat.multimediarepository.testing.amadeus.com/cmr/retrieve/hotel/97646B030D844592914223C8770DEF92",
        "category": "EXTERIOR"
      }
    ]
  },
  "available": true,
  "offers": [
    {
      "id": "5I4KQ9LDKI",
      "checkInDate": "2021-04-02",
      "checkOutDate": "2021-04-03",
      "rateCode": "3KD",
      "rateFamilyEstimated": {
        "code": "PRO",
        "type": "P"
      },
      "commission": {
        "amount": "0",
        "percentage": "0"
      },
      "room": {
        "type": "B2T",
        "typeEstimated": {
          "category": "RESIDENTIAL_APPARTMENT",
          "beds": 2,
          "bedType": "TWIN"
        },
        "description": {
          "text": "SAVER - 1-Room only\nThe hotel do not accept check.~\nStandard Apartment with twin beds"
        }
      },
      "guests": {
        "adults": 2
      },
      "price": {
        "currency": "BRL",
        "base": "150.00",
        "total": "172.50",
        "variations": {
          "average": {
            "base": "150.00"
          },
          "changes": [
            {
              "startDate": "2021-04-02",
              "endDate": "2021-04-03",
              "base": "150.00"
            }
          ]
        }
      },
      "policies": {
        "deposit": {
          "acceptedPayments": {
            "creditCards": [
              "AX",
              "CA",
              "DC",
              "EC",
              "IK",
              "VI"
            ],
            "methods": [
              "CREDIT_CARD"
            ]
          }
        },
        "paymentType": "deposit"
      }
    }
  ],
  "self": "https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?hotelId=RTSAOPCT&adults=2&roomQuantity=1"
}]

export default function Root(props) {
  const handleClick = (event) => {
    // console.log(event);
    // const selectedOffer = flightOffer.filter((flight) => flight.id === id);
    dispatchEvent(
      new CustomEvent("hotelOffer", {
        detail: hhh,
      })
    );
  };

  return (
      <>
      <section>HHH</section>
      <button onClick={(e) => handleClick(e)}>Enviar</button>
      <Routes />
      </>
    );
}
