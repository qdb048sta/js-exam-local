import React from 'react';
import { Input, Rate, Icon, Tooltip } from 'antd';
import { rateTips } from './constants';

const { TextArea } = Input;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;

const RfTextArea = ({ input, label, meta: { touched, error } }) => (
  <div>
    <TextArea {...input} />
    {touched && error && <span>{error}</span>}
  </div>
);

const RfRate = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <Tooltip title={rateTips[label]} placement="right">
      <Icon type="info-circle" />
    </Tooltip>
    <div>
      <Rate {...input} tooltips={desc} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export { RfTextArea, RfInput, RfRate };
