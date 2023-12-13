import { FlatList } from "react-native";
import { Text } from "react-native-svg";

import { useGetSearchResults } from "../api/search";
import { useSearchStore } from "../store/searchStore";

import VideoItem from "./VideoItem";
import { useEffect } from "react";

function SearchResultList() {
    const query = useSearchStore(state => state.search);
    const deleteSearch = useSearchStore(state => state.deleteSearch);

    const { searchResults,
        isLoading,
        error,
        fetchNextPage,
        hasNextPage
    } = useGetSearchResults(query);

    const loadNextPageData = () => {
        if (hasNextPage) {
            fetchNextPage();
        }
    }

    useEffect(() => {
        return deleteSearch;
    }, []);

    if (isLoading) {
        return <Text>로딩중</Text>
    }

    return (
        <FlatList
            data={searchResults}
            renderItem={({ item }) => <VideoItem videoInfo={item} />}
            keyExtractor={(_, index) => index.toString()}
            onEndReached={loadNextPageData}
            onEndReachedThreshold={0.5}
            refreshing={isLoading}
        />
    )
}

export default SearchResultList;
