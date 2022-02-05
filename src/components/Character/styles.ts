import styled from 'styled-components/native';

export const ContainerItem = styled.View`
  flex: 1;
  height: 100px;
  padding: 10px;
`;

export const Content = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  border-radius: 20px;
  border: 1px solid #b1b1b1;
`;

export const ContentImg = styled.View`
  width: 90px;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

export const ContentCenter = styled.View`
  flex: 1;
  flex-direction: column;
`;

export const ContentText = styled.View`
  flex: 1;
  margin-left: 20px;
  justify-content: center;
`;

export const ImageCharacter = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 35px;
`;

export const TextName = styled.Text`
  color: #fff;
`;

export const TextDescription = styled.Text`
  color: #fff;
  font-size: 10px;
  margin-top: 7px;
`;
