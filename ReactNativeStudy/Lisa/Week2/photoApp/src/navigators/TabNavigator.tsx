import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp, ParamListBase} from '@react-navigation/native';

import AddPhoto from 'screens/AddPhoto';
import Home from 'screens/Home';
import Settings from 'screens/Settings';
import AddPhotoButton from 'components/atoms/AddPhotoButton';
import SvgIcons from 'assets/icons/SvgIcons';
import {TabMenu} from 'constants/navigator/menu';
import {TabBarLabel, TabTitle} from 'constants/navigator/title';
import {theme} from 'styles/theme';
import {typoStyles} from 'styles/typo';
import {TabParamList} from 'types/navigator';

const Tab = createBottomTabNavigator<TabParamList>();

const getTabBarIcon = (routeName: string, focused: boolean) => {
  const iconColor = focused ? 'gradient_100' : 'gray_400';

  return (
    <>
      {routeName === 'Home' && <SvgIcons.HomeIcon fill={iconColor} />}
      {routeName === 'Settings' && <SvgIcons.SettingIcon fill={iconColor} />}
    </>
  );
};

const screenOptions = ({route}: {route: RouteProp<ParamListBase, string>}) => ({
  tabBarIcon: ({focused}: {focused: boolean}) =>
    getTabBarIcon(route.name, focused),
  tabBarActiveTintColor: theme.palette.gradient_100,
  tabBarInactiveTintColor: theme.palette.gray_400,
  tabBarStyle: {
    display: route.name === 'AddPhoto' ? ('none' as const) : ('flex' as const),
    height: 49,
    paddingTop: 6,
    paddingBottom: 6,
    backgroundColor: theme.palette.gray_900,
    borderTopWidth: 1,
    borderTopColor: theme.palette.gray_600,
  },
  headerStyle: {
    backgroundColor: theme.palette.gray_900,
    height: 74,
    borderBottomColor: theme.palette.gray_900,
  },
  headerTitleStyle: {
    fontSize: typoStyles.typo.heading.fontSize,
    lineHeight: typoStyles.typo.heading.lineHeight,
    color: theme.palette.gradient_100,
  },
  headerTitleContainerStyle: {
    paddingVertical: 20,
    paddingHorizontal: 18,
  },
});

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name={TabMenu.Home}
        component={Home}
        options={{
          title: TabTitle.Home,
          tabBarLabel: TabBarLabel.Home,
          headerShadowVisible: false,
        }}
      />
      <Tab.Screen
        name={TabMenu.AddPhoto}
        component={AddPhoto}
        options={{
          title: TabTitle.AddPhoto,
          headerShadowVisible: false,
          tabBarButton: () => <AddPhotoButton />,
        }}
      />
      <Tab.Screen
        name={TabMenu.Settings}
        component={Settings}
        options={{
          title: TabTitle.Settings,
          tabBarLabel: TabBarLabel.Settings,
          headerShadowVisible: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
