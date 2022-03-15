import React from 'react';
import { StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Logo from '../../assets/logo.svg';

import { Car } from '../../components/Car';

import {
 Container,
 Header,
 HeaderContent,
 TotalCars,
 CarList,
} from './styles';

export function Home(){
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'Ao dia',
      price: 120,
    },
    thumbnail: 'https://www.vhv.rs/dpng/d/467-4670174_audi-png-picture-audi-cars-png-hd-transparent.png'
  }

 return (
  <Container>
    <StatusBar 
      barStyle="light-content"
      backgroundColor={"transparent"}
      translucent
    />
    <Header>
      <HeaderContent>
        <Logo 
          width={RFValue(108)}
          height={RFValue(12)}
        />
        <TotalCars>
          Total de 12 carros
        </TotalCars>
      </HeaderContent>
    </Header>

    <CarList 
      data={[1,2,3,4,5,6,7,8,9]}
      keyExtractor={item => String(item)}
      renderItem={({ item }) => <Car data={carData}/> }
    />
  </Container>
  );
}