import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
  background-color: #1d1f31;
`;

export const ContentImg = styled.View`
  width: 100%;
  height: 300px;
  align-items: center;
  justify-content: center;
`;

export const ContentIconEdit = styled.View`
  width: 100%;
  align-items: flex-end;
`;

export const ButtonEdit = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  background-color: #b1b1b1;
`;

export const ContentInfo = styled.View`
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

export const ImageCharacter = styled.Image`
  width: 250px;
  height: 100%;
  border-radius: 20px;
`;

export const TextDescription = styled.Text`
  color: #fff;
  font-size: 14px;
  text-align: center;
`;

export const TextName = styled.Text`
  color: #fff;
  font-size: 14px;
`;

export const TextTitle = styled.Text`
  color: #aaa;
  font-size: 14px;
  margin-top: 10px;
`;

export const ContentGallery = styled.View`
  flex: 1;
`;
