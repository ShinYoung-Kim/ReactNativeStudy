import {YOUTUBE_TRENDING_API} from '@env';
import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getTrendingVideos = async () => {
  const response = await axios.get(YOUTUBE_TRENDING_API);
  return response.data;
};

export const useGetTrendingVideos = () => {
  const {
    isSuccess: isGetTrendingVideosSuccess,
    isLoading: isGetTrendingVideosLoading,
    data,
  } = useQuery({
    queryKey: ['trending'],
    queryFn: getTrendingVideos,
  });

  return {
    isGetTrendingVideosSuccess,
    isGetTrendingVideosLoading,
    data,
  };
};
