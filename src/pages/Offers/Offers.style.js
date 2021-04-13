import styled from "styled-components";

export const OffersContainer = styled.div`
  display: grid;
  margin-top: 24px;

  @media (min-width: 1349px) {
    grid-template-columns: 10% 70%;
  }

  @media (min-width: 1400px) {
    grid-template-columns: 15% 75%;
  }
`;

export const Filters = styled.div``;

export const OfferHotel = styled.section`
  display: grid;
  grid-template-columns: 25% 51% 20%;
  grid-gap: 2%;
  min-height: 198px;
  padding: 24px;
  margin-bottom: 24px;
  border-radius: 12px;
  box-shadow: 0px 0px 8px rgba(80, 80, 80, 0.1);
`;

export const HotelInfo = styled.div`
  p {
    margin: 8px 0;
  }
`;

export const Price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;

  & {
    font-size: 12px;
  }

  & span {
    margin-bottom: 16px;
    font-size: 24px;
    font-weight: 800;

    &::before {
      content: "$ ";
      font-size: 16px;
    }
    &::after {
      content: "with Taxes";
      display: block;
      text-align: right;
      font-weight: 500;
      font-size: 12px;
    }
  }
}`
