import React from 'react';

import { Accessory } from '../../components/Accessory';
import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
 Container,
 Header,
 Content,
 Details,
 Description,
 Brand,
 Name,
 Rent,
 Period,
 Price,
 About,
 Accessories,
 Footer,
} from './styles';

export function CarDetails(){
 return (
  <Container>
    <Header>
      <BackButton onPress={() => {}}/>
    </Header>

    <ImageSlider 
      imagesUrl={['https://www.vhv.rs/dpng/d/467-4670174_audi-png-picture-audi-cars-png-hd-transparent.png']}
    />

    <Content>
      <Details>
        <Description>
          <Brand>Lamborguini</Brand>
          <Name>Huracan</Name>
        </Description>

        <Rent>
          <Period>Ao dia</Period>
          <Price>R$ 580</Price>
        </Rent>
      </Details>

      <Accessories>
        <Accessory name="380Km/h" icon={speedSvg}/>
        <Accessory name="3.2s" icon={accelerationSvg}/>
        <Accessory name="800 HP" icon={forceSvg}/>
        <Accessory name="Gasolina" icon={gasolineSvg}/>
        <Accessory name="Auto" icon={exchangeSvg}/>
        <Accessory name="People" icon={peopleSvg}/>
      </Accessories>

      <About>
        Este é automóvel desportivo. Surgiu do lendário touro de lide indultado na praça Real Maestranza de Sevilla.
        É um belíssimo carro para quem gosta de acelerar.
      </About>
    </Content>

    <Footer>
      <Button title='Confirmar' onPress={() => {}}/>
    </Footer>

  </Container>
  );
}