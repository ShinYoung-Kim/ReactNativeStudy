import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screen/Home";
import Search from "../screen/Search";
import Detail from "../screen/Detail";
import { COLOR } from "../constant/color";
import SearchBar from "../component/SearchBar";

const Stack = createStackNavigator();

function HomeStackNavigation() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLOR.Gray900,
                },
                headerTintColor: COLOR.White,
                // headerShown: false,
            }}
        >
            <Stack.Screen name="HomeStack" component={Home} />
            <Stack.Screen name="SearchStack" component={Search} />
            <Stack.Screen name="DetailStack" component={Detail} />
        </Stack.Navigator>
    );
}

export default HomeStackNavigation;
