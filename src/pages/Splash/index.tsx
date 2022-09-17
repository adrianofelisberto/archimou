import {useNavigation} from '@react-navigation/native';
import {useEffect} from 'react';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import backgroundImage from '../../assets/background.png';
import {Background} from './styles';
import {getUserNode} from '../../service';
import {acc} from 'react-native-reanimated';

export const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(handleAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const handleAuthStateChanged = async (
    firebaseUser: FirebaseAuthTypes.User | null,
  ) => {
    const {displayName, uid, photoURL} = firebaseUser ?? {
      displayName: '',
      uid: '',
      photoURL: '',
    };

    const user = {displayName, uid, photoURL};
    if (!user) {
      navigation.navigate('Login');
    } else {
      const userNode = await getUserNode(user.uid);
      console.log({userNode});

      if (!userNode) {
        navigation.navigate('Register', {
          user,
        });
      } else {
        navigation.navigate('Home', {
          node: userNode,
        });
      }
    }
  };

  return <Background source={backgroundImage} />;
};
