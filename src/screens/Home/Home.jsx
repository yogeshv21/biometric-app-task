import {View, Text, AppState, Button, TouchableOpacity} from 'react-native';
import React, {useEffect, useRef, useState} from 'react';
import {Styles} from './style';
import {COLORS, _} from '../../theme';
import TouchID from 'react-native-touch-id';

const Home = () => {
  const [biometryType, setBiometryType] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState();

  useEffect(() => {
    const username = 'Yogesh';
    const UUID = 'ihiefhoeoebf9e989k';
    TouchID.isSupported()
      .then(biometryType => {
        console.log(biometryType);

        if (biometryType === 'FaceID') {
          setBiometryType('FaceID');
        } else {
          setBiometryType('TouchID');
        }
      })
      .catch(error => {
        console.log(error);
      });
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        authenticate()
      }

      appState.current = nextAppState;
      if(appState.current == "background"){
        setIsLogin(false)
      }
      setAppStateVisible(appState.current);
      console.log('AppState', appState.current);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const username = 'Yogesh';
    const UUID = 'ihiefhoeoebf9e989k';
    if (UUID && username)
      TouchID.isSupported()
        .then(biometryType => {
          console.log(biometryType);

          if (biometryType === 'FaceID') {
            setBiometryType('FaceID');
          } else {
            setBiometryType('TouchID');
          }
        })
        .catch(error => {
          console.log(error);
        });
  }, []);

  useEffect(() => {
    if (biometryType === 'FaceID' || biometryType === 'TouchID') {
      if (!isLogin) {
        authenticate();
      }
    }
  }, [biometryType]);

  const authenticate = () => {
    const optionalConfigObject = {
      title: 'Biometric',
      imageColor: '#B69377',
      imageErrorColor: '#B69377',
      sensorDescription: 'Touch sensor',
      sensorErrorDescription: 'Authentication Failed',
      fallbackLabel: 'Show Passcode',
      unifiedErrors: false,
      passcodeFallback: true,
    };
    TouchID.authenticate(
      'App Name Require TouchID for Verification ',
      optionalConfigObject,
    )
      .then(success => {
        if (success) {
          setIsLogin(true);
        }
      })
      .catch(() => {});
  };

  if (appStateVisible == 'background') {
    return <View style={Styles.container}></View>;
  }

  return (
    <>
      {isLogin ? (
        <View style={[Styles.container, _['flex-center']]}>
          <Text style={[_['h1'], {color: COLORS.green}]}>
            Log In Successfully
          </Text>
        </View>
      ) : (
        <View style={[Styles.container]}>
          <Text style={[_['h1'], {color: COLORS.red}]}>
            Authentication Faild
          </Text>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => authenticate()}
            style={[Styles.btn, _['flex-center']]}>
            <Text style={[_['h2'], {color: COLORS.white}]}>Try Again</Text>
          </TouchableOpacity>
        </View>
      )}
    </>
  );
};

export default Home;
