import React, {useMemo} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import useFetchGET from '../hooks/useFetchGet';
import Config from 'react-native-config';
import colors from '../constants/color';
import VideoItem from '../components/VideoItem';

const Home = () => {
  const apiUrl = useMemo(
    () =>
      `${Config.YOUTUBE_API}//videos?part=snippet&chart=mostPopular&maxResults=25&key=${Config.YOUTUBE_API_KEY}`,
    [],
  );
  const {data, isLoading, error} = useFetchGET({url: apiUrl});

  return (
    <View>
      <ScrollView>
        <Text style={styles.popularVideo}>인기 동영상</Text>
        {isLoading && <Text>로딩중</Text>}
        {!isLoading &&
          data &&
          data.items.map(item => <VideoItem item={item} />)}
        {error && <Text>에러 발생</Text>}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  popularVideo: {
    color: colors.red,
    fontSize: 15,
    fontWeight: '600',
    padding: 10,
  },
});

export default Home;
