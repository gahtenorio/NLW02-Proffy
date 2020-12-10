import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { View, ImageBackground, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import giveClassesBgImg from '../../assets/images/give-classes-background.png';

import styles from './styles';

function GiveClasses() {
  const { goBack } = useNavigation();

  function navigateBack() {
    goBack();
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="contain"
        source={giveClassesBgImg}
        style={styles.content}
      >
        <Text style={styles.title}>Quer ser um Proffy?</Text>
        <Text style={styles.description}>
          Para começar, você precisa se cadastrar como professor na nossa
          plataforma web
        </Text>
      </ImageBackground>

      <RectButton onPress={navigateBack} style={styles.okButton}>
        <Text style={styles.okButtonText}>Tudo bem</Text>
      </RectButton>
    </View>
  );
}

export default GiveClasses;
