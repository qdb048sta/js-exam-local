import React from 'react';
import { Input, Rate } from 'antd';

const { TextArea } = Input;

const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;
const RfTextArea = ({ input, ...custom }) => (
  <TextArea {...input} {...custom} />
);
const RfSummary = fields => [
  <Rate {...fields.rate.tech.input} />,
  <Rate {...fields.rate.complete.input} />,
  <Input {...fields.text.input} type="text" placeholder="Write Summary ..." />,
];

export { RfTextArea, RfInput, RfSummary };
