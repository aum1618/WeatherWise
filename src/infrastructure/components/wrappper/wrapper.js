import { SafeAreaView } from "react-native";
import styled from "styled-components";

export const Wrapper = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.bg.secondary};
  height: 100%;
  width: 100%;
`;
