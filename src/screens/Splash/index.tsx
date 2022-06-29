import React, { useEffect } from 'react';
import BrandSvg from '../../assets/brand.svg';
import LogoSvg from '../../assets/logo.svg';

import Animated,
{
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  interpolate,
  Extrapolate,
  runOnJS
} from 'react-native-reanimated';

import {
  Container
} from './styles';
import { useNavigation } from '@react-navigation/native';

export function Splash() {
  const navigation = useNavigation();
  const splashAnimation = useSharedValue(0);

  const brandStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 50], //steps da etapas da minha animação
        [1, 0], //Qual valor vai ser retornado quando tiver no step da animação acima
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [0, -50],
            Extrapolate.CLAMP //coloca-se para nunca passar do valor limite
          )
        }
      ]
    }
  });

  const logoStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(splashAnimation.value,
        [0, 25, 50], //steps da etapas da minha animação
        [0, .3, 1], //Qual valor vai ser retornado quando tiver no step da animação acima
      ),
      transform: [
        {
          translateX: interpolate(splashAnimation.value,
            [0, 50],
            [-50, 0],
            Extrapolate.CLAMP //coloca-se para nunca passar do valor limite
          )
        }
      ]
    }
  });

  function startApp() {
    navigation.navigate('Home');
  }

  useEffect(() => {
    splashAnimation.value = withTiming(
      50, //valor maximo  que quero a animação
      { duration: 5000 }, // duração da animação
      () => {
        //callback para executar quandoa animação acabar
        'worklet' //worklet -> indico que quero devolver para a MAIN thread o callback, pois as animações ocorrem em uma Thread separada
        runOnJS(startApp)(); //executo a função dentro do rnOnJS para que ela execute a função no JS e não de animação
      }
    );
  }, []);

  return (
    <Container>
      <Animated.View style={[brandStyle, { position: 'absolute' }]}>
        <BrandSvg width={80} height={80} />
      </Animated.View>

      <Animated.View style={[logoStyle, { position: 'absolute' }]}>
        <LogoSvg width={180} height={20} />
      </Animated.View>
    </Container>
  );
}