import styled from 'styled-components/native';

export const Container = styled.View`
 flex: 1;
 background-color: ${({ theme }) => theme.colors.background_secondary };
`;

export const Header = styled.SafeAreaView`
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
`;