import React from 'react';
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar } from 'react-native';
import styled from "styled-components";
import Card from '../components/Card';
import Course from '../components/Course';
import { NotificationIcon } from '../components/Icons';
import Logo from '../components/Logo';
import Menu from '../components/Menu';
import { connect } from "react-redux";
import Avatar from '../components/Avatar';

function mapStateToProps(state) {
  return { action: state.action, name: state.name }
}

function mapDispatchToProps(dispatch) {
  return {
    openMenu: () => dispatch({
      type: "OPEN_MENU"
    })
  }
}

class HomeScreen extends React.Component {
  state = {
    scale: new Animated.Value(1),
    opacity: new Animated.Value(1)
  };

  componentDidMount() {
    StatusBar.setBarStyle("dark-content", true);
  }

  componentDidUpdate() {
    this.toggleMenu()
  }
  
  toggleMenu = () => {
    if(this.props.action == "openMenu") {
      Animated.timing(this.state.scale, {
        toValue: 0.9,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 0.5
      }).start();

      StatusBar.setBarStyle("light-content", true);
    }

    if(this.props.action == "closeMenu") {
      Animated.timing(this.state.scale, {
        toValue: 1,
        duration: 300,
        easing: Easing.in()
      }).start();
      Animated.spring(this.state.opacity, {
        toValue: 1
      }).start();

      StatusBar.setBarStyle("dark-content", true);
    }
  }

  render() {
    return (
      <RootView>
        <Menu />
        <AnimatedContainer style={{ transform: [{ scale: this.state.scale }], opacity: this.state.opacity }}>
          <SafeAreaView>
            <ScrollView style={{ height: "100%" }}>
              <TitleBar>
                <TouchableOpacity 
                  onPress={this.props.openMenu}
                  style={{ position: "absolute", top: 0, left: 20 }}
                >
                  <Avatar />
                </TouchableOpacity>
                <Title>Welcome back,</Title>
                <Name>{this.props.name}</Name>
                <NotificationIcon style={{ position: "absolute", right: 20, top: 5}} />
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
                   <TouchableOpacity key={index} onPress={() => {
                     this.props.navigation.push("Section");
                   }}>
                   <Card 
                     title={card.title}
                     image={card.image}
                     caption={card.caption}
                     logo={card.logo}
                     subtitle={card.subtitle}
                   />
                   </TouchableOpacity>
               ))}
            </ScrollView>
            <Subtitle>Popular Courses</Subtitle>
            {courses.map((course, index) => (
              <Course
                key={index}
                image={course.image}
                title={course.title}
                subtitle={course.subtitle}
                logo={course.logo}
                author={course.author}
                avatar={course.avatar}
                caption={course.caption}
              />
            ))}
          </ScrollView>
        </SafeAreaView>
      </AnimatedContainer>
    </RootView>
  )};
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

const RootView = styled.View`
  background: black;
  flex: 1;
`;

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
  border-radius: 10px;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

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

const logos = [
  {
    image: require("../assets/docker.png"),
    text: "Docker"
  },
  {
    image: require("../assets/c-sharp.png"),
    text: "C#"
  },
  {
    image: require("../assets/logo-react.png"),
    text: "React"
  },
  {
    image: require("../assets/js.png"),
    text: "JavaScript"
  },
  {
    image: require("../assets/nodejs.png"),
    text: "Node.js"
  },
  {
    image: require("../assets/my-sql.png"),
    text: "Mysql"
  }
];

const cards =[
  {
    title: "Styled Components",
    image: require('../assets/background2.jpg'),
    caption: "React Native",
    logo: require('../assets/logo-react.png'),
    subtitle: "5 of 12 sections"
  },
  {
    title: "Built-in Types",
    image: require('../assets/background5.jpg'),
    caption: "C#",
    logo: require('../assets/c-sharp.png'),
    subtitle: "2 of 10 sections"
  },
  {
    title: "Arrow Function Expressions",
    image: require('../assets/background4.jpg'),
    caption: "JavaScript",
    logo: require('../assets/js.png'),
    subtitle: "7 of 10 sections"
  }
];

const courses = [
  {
    title: "Prototype in InVision Studio",
    subtitle: "10 sections",
    image: require("../assets/background13.jpg"),
    logo: require("../assets/logo-studio.png"),
    author: "Meng To",
    avatar: require("../assets/avatar.jpg"),
    caption: "Complete guide to designing a site using a collaborative design tool"
  }
];
