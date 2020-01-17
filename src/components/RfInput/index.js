import React from 'react';
import { Input, Rate, Icon, Tooltip, Row, Col } from 'antd';
import { rateTips } from './constants';

const { TextArea } = Input;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;

const RfTextArea = ({ input, label, meta: { touched, error } }) => (
  <div>
    <TextArea {...input} />
  </div>
);

const RfRate = ({ input, label, type, meta: { touched, error } }) => (
  <Row type="flex" align="middle">
    <Col span={5}>
      <label>{label}</label>
    </Col>
    <Col span={2}>
      <Tooltip title={rateTips[label]} placement="right">
        <Icon type="info-circle" />
      </Tooltip>
    </Col>
    <Col span={8}>
      <Rate {...input} tooltips={desc} type={type} />
    </Col>
    <Col span={9}>{touched && error && <span>{error}</span>}</Col>
  </Row>
);

export { RfTextArea, RfInput, RfRate };
