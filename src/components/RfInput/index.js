import React from 'react';
import { Input, Rate } from 'antd';

const { TextArea } = Input;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;
const RfTextArea = ({ input, label, meta: { touched, error } }) => (
  <div>
    <TextArea {...input} />
    {touched && error && <span>{error}</span>}
  </div>
);
// const RfSummary = fields => (
//   <React.Fragment>
//     {/* Technical Skill <Rate {...fields.rate.tech.input} tooltips={desc} />
//     <br />
//     Completeness <Rate {...fields.rate.complete.input} tooltips={desc} /> */}
//     <TextArea
//       {...fields.text.input}
//       type="text"
//       placeholder="Write Summary ..."
//     />
//   </React.Fragment>
// );

const RfRate = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <label>{label}</label>
    <div>
      <Rate {...input} tooltips={desc} type={type} />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export { RfTextArea, RfInput, RfRate };
