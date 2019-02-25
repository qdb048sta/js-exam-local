import React from 'react';
import { Input } from 'antd';

const { TextArea } = Input;

const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;
const RfTextArea = ({ input, ...custom }) => (
  <TextArea {...input} {...custom} />
);

export { RfTextArea, RfInput };
