import React from 'react';
import styled from 'styled-components';
import { Animated, TouchableOpacity, Dimensions } from 'react-native';
import { CloseIcon, SettingsIcon, BillingIcon, CompassIcon, LogoutIcon } from './Icons';
import MenuItem from './MenuItem';

const screenHeight = Dimensions.get("window").height;

class Menu extends React.Component{
    state ={
        top: new Animated.Value(screenHeight)
    };

    componentDidMount() {
        Animated.spring(this.state.top, {
            toValue: 0
        }).start();
    };

    toggleMenu = () => {
        Animated.spring(this.state.top, {
            toValue: screenHeight
        }).start();
    };

    render() {
        return (
            <AnimatedContainer style={{ top: this.state.top }}>
                <Cover>
                    <Image source={require('../assets/background2.jpg')} />
                    <Title>Meng To</Title>
                    <Subtitle>Designer at Design+Code</Subtitle>
                </Cover>
                <TouchableOpacity 
                    onPress={this.toggleMenu} 
                    style={{ 
                        position:"absolute", 
                        top: 120, 
                        left: "50%", 
                        marginLeft: -22, 
                        zIndex: 1 
                    }}
                >
                    <CloseView>
                        <CloseIcon />
                    </CloseView>
                </TouchableOpacity>
                <Content>
                    <MenuView>
                        <SettingsIcon />
                        <BillingIcon />
                        <CompassIcon />
                        <LogoutIcon />
                    </MenuView>
                    <MenuContent>
                        {textMenu.map((menu, index) => (
                        <MenuItem
                            key={index}
                            title={menu.title}
                            text={menu.text}
                        />
                    ))}
                </MenuContent>
                </Content>
            </AnimatedContainer>
        )
    }
}

export default Menu;

const MenuView = styled.View`
    height: 305px;
    justify-content: space-between;
    top: 16px;
`;

const MenuContent = styled.View`

`;

const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`;

const Title = styled.Text`
    color: white;
    font-size: 24px;
    font-weight: 600;
`;

const Subtitle = styled.Text`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 8px;
`;

const CloseView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: white;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`;

const Container = styled.View`
    position: absolute;
    background: white;
    width: 100%;
    height: 100%;
    z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container)

const Cover = styled.View`
    height: 142px;
    background: black;
    justify-content: center;
    align-items: center;
`;

const Content = styled.View`
    height: ${screenHeight};
    background: #f0f3f5;
    padding: 50px;
    flex-direction: row;
    justify-items: center;
`;

const textMenu = [
    {
        title: "Account",
        text: "settings"
    },
    {
        title: "Billing",
        text: "payments"
    },
    {
        title: "Learn React",
        text: "start course"
    },
    {
        title: "Log out",
        text: "see you soon!"
    },
]