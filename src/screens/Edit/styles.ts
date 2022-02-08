import styled from 'styled-components/native';

export const ContainerDetail = styled.View`
  flex: 1;
  padding: 20px;
  background-color: #1d1f31;
`;

export const Label = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 25px 0px 5px 5px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #00875f;
  padding: 20px;
  align-items: center;
  justify-content: center;
  margin: 50px 0px;
  border-radius: 30px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const Content = styled.SafeAreaView`
  margin-top: 30px;
  flex: 1;
`;

export const TextArea = styled.TextInput`
  flex: 1;
  background-color: #0f131b;
  padding: 20px;
  border-radius: 15px;
  color: #fff;
`;
