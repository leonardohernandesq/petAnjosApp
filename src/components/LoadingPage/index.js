import React from 'react';
import { View, Image, StyleSheet, ImageBackground } from 'react-native';

export default function LoadingPage() {
 return (
    <View style={styles.containerLoading}>
        <ImageBackground resizeMode="contain" source={require('../../img/Open.jpg')} style={styles.Image}>        
            <Image
            source={require('../../img/logo-anjos.png')}
            style={styles.ImageLogo}
            />
            <Image
            source={require('../../img/logo-pet.png')}
            style={styles.ImageLogoPet}
            />
        </ImageBackground>
  </View>
  );
}

const styles = StyleSheet.create({
    containerLoading: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      
    },
    Image: {
        flex: 1,
        height:'100%',
        width:'100%',
        justifyContent: 'center',
        alignItems:'center'
    },
    ImageLogo:{
        width:'50%',
        resizeMode:'contain',
        position:'absolute',
        top:20
    },
    ImageLogoPet:{
        width:'50%',
        resizeMode:'contain',
        position:'absolute',
        top:100
    }

  })