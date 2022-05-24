import React from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch){
  return {
    updateName: name => dispatch({
      type: "UPDATE_NAME",
      name: name
    })
  };
}

class Avatar extends React.Component {
  state = {
    photo: "https://p43.f3.n0.cdn.getcloudapp.com/items/E0uyWXWn/6022c365-4332-4ae7-b22c-a3fc23690b7b.jpg?source=viewer&v=4aadcdbdffe209bbd523530a75351afd"
  };

componentDidMount() {
  fetch("https://uinames.com/api/?ext")
    .then(response => response.json())
    .then(response => {
      console.log(response);
      
      this.setState({
        photo: response.photo
      });

      this.props.updateName(response.name);
    });
}

  render() {
    return (
      <Image source={{ uri: this.state.photo }} />
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;