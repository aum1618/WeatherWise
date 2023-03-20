import { SafeAreaView } from "react-native";
import styled from "styled-components";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  height: 100%;
  width: 100%;
  display: flex;
  
`;
