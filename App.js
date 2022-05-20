import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import styled from "styled-components";
import Card from './components/Card';
import { NotificationIcon } from './components/Icons';
import Logo from './components/Logo';


export default function App() {
  return (
    <Container>
    <SafeAreaView>
    <ScrollView style={{ height: "100%" }}>
      <TitleBar>
        <Avatar source={require('./assets/avatar.jpg')} />
        <Title>Welcome back,</Title>
        <Name>Astrid</Name>
        <NotificationIcon 
          style={{ position: "absolute", right: 20, top: 5}}
        />
      </TitleBar>
      <ScrollView 
      style={{ flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30}} 
      horizontal={true}
      showsHorizontalScrollIndicator={false}>
      {logos.map((logo, index) => (
        <Logo key={index} image={logo.image} text={logo.text} />
      ))}
      </ScrollView>
      <Subtitle>Continue Learning</Subtitle>
      <ScrollView 
      horizontal={true} 
      style={{ paddingBottom: 30, paddingRight: 20}} 
      showsHorizontalScrollIndicator={false}>
        {
          cards.map((card, index) => (
            <Card 
              key={index}
              title={card.title}
              image={card.image}
              caption={card.caption}
              logo={card.logo}
              subtitle={card.subtitle}
            />
        ))}
      </ScrollView>
    </ScrollView>
    </SafeAreaView>
    </Container>
  );
}

const Subtitle = styled.Text`
  color: #b8bece;
  font-weight: 600;
  font-size: 15px;
  margin-left: 20px;
  margin-top: 20px;
  text-transform: uppercase;
`;

const Container = styled.View`
  flex: 1;
  background-color: #f0f3f5;
`;

const Title = styled.Text`
  font-size: 16px;
  color: #b8bece;
  font-weight: 500;
`;

const Name = styled.Text`
  font-size: 20px;
  color: #3c4560;
  font-weight: bold;
`;

const TitleBar = styled.View`
  width: 100%;
  margin-top: 50px;
  padding-left: 80px;
`;

const Avatar = styled.Image`
  width: 44px;
  height: 44px;
  background: black;
  border-radius: 22px;
  margin-left: 20px;
  position: absolute;
  top: 0;
  left: 0;
`;

const logos = [
  {
    image: require("./assets/docker.png"),
    text: "Docker"
  },
  {
    image: require("./assets/c-sharp.png"),
    text: "C#"
  },
  {
    image: require("./assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("./assets/js.png"),
    text: "JavaScript"
  },
  {
    image: require("./assets/nodejs.png"),
    text: "Node.js"
  },
  {
    image: require("./assets/my-sql.png"),
    text: "Mysql"
  }
];

const cards =[
  {
    title: "Styled Components",
    image: require('./assets/background2.jpg'),
    caption: "React Native",
    logo: require('./assets/logo-react.png'),
    subtitle: "5 of 12 sections"
  },
  {
    title: "Built-in Types",
    image: require('./assets/background5.jpg'),
    caption: "C#",
    logo: require('./assets/c-sharp.png'),
    subtitle: "2 of 10 sections"
  },
  {
    title: "Arrow Function Expressions",
    image: require('./assets/background4.jpg'),
    caption: "JavaScript",
    logo: require('./assets/js.png'),
    subtitle: "7 of 10 sections"
  }
];
