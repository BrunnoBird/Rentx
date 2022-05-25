//Função criada pois o iOS possui uma diferença de um dia a menos ao selecionar uma data.
import { addDays } from 'date-fns';
import { Platform } from 'react-native';

export function getPlatformDate(date: Date) {
  if(Platform.OS === 'ios') {
    return addDays(date, 1);
  } else {
    return date;
  }
}