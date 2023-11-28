import {TouchableOpacity} from 'react-native';
import styled from 'styled-components';
import {useNavigation} from '@react-navigation/native';

import AddIcon from 'assets/icons/AddIcon';
import {useRecoilValue} from 'recoil';
import {colorState} from 'libs/store/color';

const BottomTabFloatingButton = () => {
  const navigation = useNavigation();
  const colorData = useRecoilValue(colorState);

  return (
    <StyledButtonWrapper
      onPress={() => {
        navigation.navigate('AddTodo');
      }}>
      <AddIcon fill={colorData.color} />
    </StyledButtonWrapper>
  );
};

export default BottomTabFloatingButton;

const StyledButtonWrapper = styled(TouchableOpacity)`
  position: absolute;
  left: 50%;
  margin-left: -25px;
  bottom: 6px;
`;
