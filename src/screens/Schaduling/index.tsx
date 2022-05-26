import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import { format } from 'date-fns';

import { CarDTO } from '../../dtos/CarDTO';
import { BackButton } from '../../components/BackButton';
import { Button } from '../../components/Button';

import ArrowSvg from '../../assets/arrow.svg';
import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValueContainer,
  DateValue,
  Content,
  Footer,
} from './styles';
import { Calendar, generateInterval, MarkedDateProps } from '../../components/Calendar';
import { DateData } from 'react-native-calendars';

import { useNavigation, useRoute } from '@react-navigation/native';
import { getPlatformDate } from '../../utils/getPlatformDate';
interface RentalPeriod {
  start: number;
  startFormatted: string;
  end: number;
  endFormatted: string;
}
interface Params {
  car: CarDTO
}

export function Schaduling() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DateData>({} as DateData)
  const [markedDates, setMarkedDates] = useState<MarkedDateProps>({} as MarkedDateProps)
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const { car } = route.params as Params;

  function handleConfirmReltal() {
    if(!rentalPeriod.start || !rentalPeriod.end) {
      Alert.alert("Selecione o intervalo para alugar");
    } else {
      navigation.navigate("SchedulingDetails", {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }

  function handleBack() {
    navigation.goBack();
  }

  function handleChangeDate(date: DateData) {
    let start = !lastSelectedDate.timestamp ? date : lastSelectedDate;
    let end = date;

    if (start.timestamp > end.timestamp) {
      start = end;
      end = start;
    }

    setLastSelectedDate(end);

    const interval = generateInterval(start, end);
    setMarkedDates(interval);

    const firstDate = Object.keys(interval)[0];
    const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

    setRentalPeriod({
      start: start.timestamp,
      end: end.timestamp,
      startFormatted: format(getPlatformDate(new Date(firstDate)), 'dd/MM/yyyy'),
      endFormatted: format(getPlatformDate(new Date(endDate)), 'dd/MM/yyyy')
    })
  }

  return (
    <Container>
      <Header>
        <StatusBar
          barStyle="light-content"
          translucent
          backgroundColor="transparent"
        />
        <BackButton
          onPress={handleBack}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma{'\n'}
          data de início e{'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValueContainer selected={!rentalPeriod.startFormatted}>
              <DateValue>{rentalPeriod.startFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValueContainer selected={!rentalPeriod.endFormatted}>
              <DateValue>{rentalPeriod.endFormatted}</DateValue>
            </DateValueContainer>
          </DateInfo>
        </RentalPeriod>

      </Header>

      <Content>
        <Calendar
          markedDates={markedDates}
          onDayPress={handleChangeDate}
        />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmReltal} />
      </Footer>
    </Container>
  );
}