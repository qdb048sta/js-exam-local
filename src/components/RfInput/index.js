import React from 'react';
import { Input, Rate } from 'antd';

const { TextArea } = Input;

const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;
const RfTextArea = ({ input, ...custom }) => (
  <TextArea {...input} {...custom} />
);
const RfSummary = fields => (
  <React.Fragment>
    Technical Skill <Rate {...fields.rate.tech.input} />
    <br />
    Completeness <Rate {...fields.rate.complete.input} />
    <TextArea
      {...fields.text.input}
      type="text"
      placeholder="Write Summary ..."
    />
  </React.Fragment>
);

export { RfTextArea, RfInput, RfSummary };
