import { Image, View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";

import { useDate } from "../hooks/useDate";

import BackgroundContainer from "../component/atom/BackgroundContainer";
import Header from "../component/molcule/Header";
import { HomeStackParamList } from "../navigation/HomeStack";

type ImageDetailProps = StackScreenProps<HomeStackParamList, 'ImageDetailStackScreen'>;

function ImageDetail({ route }: ImageDetailProps) {
    const { image } = route.params;
    const { getDateFormat } = useDate();
    const title = getDateFormat(image.date);

    return (
        <BackgroundContainer>
            <Header title={title} isBackButton />
            <View
                style={{
                    flex: 1,
                    width: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Image source={{ uri: image.uri }} style={{
                    width: '100%',
                    maxHeight: 515,
                    resizeMode: 'contain',
                    alignSelf: 'center',
                    height: '100%',
                    marginTop: 60,
                }} />
            </View>
        </BackgroundContainer>
    )
}

export default ImageDetail;
