/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';

const Link = styled.h1`
  font-size: 16px;
  font-weight: normal;
`;

class Back extends React.PureComponent {
  render() {
    return (
      <Link onClick={this.handleClick.bind(this)}>
        🔙 {this.props.children || 'Volver'}
      </Link>
    );
  }

  handleClick() {
    const { path, history } = this.props;
    if (path) {
      history.push(path);
    } else {
      history.goBack();
    }
  }
}

export default withRouter(Back);
