import {NavigationProp, RouteProp} from '@react-navigation/native';
import SvgIcons from 'assets/icons/SvgIcons';
import {StackMenu, TabMenu} from 'constants/navigator/menu';
import {useDate} from 'libs/hooks/useDate';
import useNavigator from 'libs/hooks/useNavigator';
import {useLayoutEffect} from 'react';
import {ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {theme} from 'styles/theme';
import {RootStackParamList} from 'types/navigator';
import {getScreenSize} from 'utils/getScreenSize';

const {screenWidth} = getScreenSize();

export type PhotoDetailRouteProp = RouteProp<
  RootStackParamList,
  StackMenu.PhotoDetail
>;

const PhotoDetail = ({
  navigation,
  route,
}: {
  navigation: NavigationProp<RootStackParamList>;
  route: PhotoDetailRouteProp;
}) => {
  const {tabNavigation} = useNavigator();
  const {formatDate} = useDate(route.params.date);

  const handlePressHeaderLeftButton = () => {
    tabNavigation.navigate(TabMenu.Home);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: formatDate(),
      headerStyle: {
        backgroundColor: theme.palette.gray_900,
        paddingHorizontal: 20,
      },
      headerTitleAlign: 'center' as const,
      headerTitleStyle: {
        color: theme.palette.gradient_100,
      },
      headerLeft: () => (
        <TouchableOpacity onPress={handlePressHeaderLeftButton}>
          <SvgIcons.ArrowBackIcon fill={'gradient_100'} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, route]);

  return (
    <ScrollView style={photoDetailStyle.container}>
      <Image source={{uri: route.params.path}} style={photoDetailStyle.image} />
    </ScrollView>
  );
};

export default PhotoDetail;

const photoDetailStyle = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  image: {
    marginTop: 50,
    marginBottom: 190,
    height: screenWidth * 1.31,
  },
});
