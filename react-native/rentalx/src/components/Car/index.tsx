import React from 'react';

import GasolineSVG from '../../assets/gasoline.svg';
import audiPNG from '../../assets/audi.png';
import { ICarProps } from './types';

import {
  Container,
  Details,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from './styles';

const Car: React.FC<ICarProps> = ({ data, ...rest }) => {
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>

        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSVG />
          </Type>
        </About>
      </Details>

      <CarImage source={audiPNG} resizeMode="contain" />
    </Container>
  );
};

export default Car;