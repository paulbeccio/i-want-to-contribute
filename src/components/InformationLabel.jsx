import React, { PropTypes } from 'react';
import { Row, Panel, Col, Label } from 'react-bootstrap';
import BsSpecialLabel from './BsSpecialLabel';
import '../styles/information-label.css';

const quickInfoPropTypes = {
  level: PropTypes.string
};

export default class InformationLabel extends React.Component {
  static propTypes = quickInfoPropTypes;
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.data != null) {
      return (
        <span className='information-label'>
          <BsSpecialLabel level={this.props.level} color={this.props.color}>
            <strong>{ this.props.children }{ this.props.data }</strong>
          </BsSpecialLabel>
        </span>
      );
    } else {
      return null;
    }
  }
}