import React from "react";
import styled from 'styled-components';

const Logo = props => (
    <Wrapper>
    <Container>
        <Image source={props.image} resizeMode="contain"/>
        <Text>{props.text}</Text>
    </Container>
    </Wrapper>
);

export default Logo

const Wrapper = styled.View`
    margin-right: 12px;
`;

const Container = styled.View `
    flex-direction: row;
    background: white;
    height: 60px;
    padding: 12px 16px;
    border-radius: 10px;
    box-shadow: 0 5px 10px rgba(0,0,0, 0.4);
    align-items: center;
    margin-right: 10px;
`;

const Image = styled.Image`
    width: 36px;
    height: 36px;
`;

const Text = styled.Text`
    font-weight: 600;
    font-size: 17px;
    margin-left: 8px;
`;