import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';
import { View, Image, Text } from 'react-native';

import api from '../../assets/api';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyImg from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then((res) => {
      const { total } = res.data;

      setTotalConnections(total);
    });
  }, []);

  function navigateToGiveClasses() {
    navigate('GiveClasses');
  }

  function navigateToStudyPages() {
    navigate('Study');
  }

  return (
    <View style={styles.container}>
      <Image style={styles.banner} source={landingImg} />

      <Text style={styles.title}>
        Seja bem-vindo, {'\n'}
        <Text style={styles.titleBold}> o que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={navigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyImg} />
          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={navigateToGiveClasses}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />
          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <Text style={styles.totalConnections}>
        Total de {totalConnections} conexões já realizadas{' '}
        <Image source={heartIcon} />
      </Text>
    </View>
  );
}

export default Landing;
