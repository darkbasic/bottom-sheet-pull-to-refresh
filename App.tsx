/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useCallback, useMemo} from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {
  gestureHandlerRootHOC,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';

const App = () => {
  // variables
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handleRefresh = useCallback(() => {
    console.log('handleRefresh');
  }, []);

  // render
  const renderItem = useCallback(
    ({item}) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    [],
  );
  return (
    <GestureHandlerRootView style={{height: '100%'}}>
      <SafeAreaView style={styles.container}>
        <Text
          style={{
            alignSelf: 'center',
            marginTop: 100,
          }}>
          Test
        </Text>
        <BottomSheet snapPoints={snapPoints}>
          <BottomSheetFlatList
            data={data}
            keyExtractor={i => i}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            refreshing={false}
            onRefresh={handleRefresh}
          />
        </BottomSheet>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
});

export default gestureHandlerRootHOC(App);
