import React from 'react';
import { Input, Rate, Icon, Tooltip, Tag, Row, Col } from 'antd';
import { rateTips } from './constants';

const { TextArea } = Input;
const { CheckableTag } = Tag;
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

const RfTag = ({ input, label, type, meta: { touched, error } }) => (
  <div>
    <CheckableTag {...input} />
  </div>
);

class CheckboxGroup extends React.Component {
  checkboxGroup() {
    let { label, required, options, input, meta } = this.props;
    return options.map((option, index) => {
      return (
        <div className="checkbox" key={index}>
          <label>
            <input
              type="checkbox"
              name={`${input.name}[${index}]`}
              value={option.name}
              checked={input.value.indexOf(option.name) !== -1}
              onChange={event => {
                const newValue = [...input.value];
                if (event.target.checked) {
                  newValue.push(option.name);
                } else {
                  newValue.splice(newValue.indexOf(option.name), 1);
                }
                return input.onChange(newValue);
              }}
            />
            {option.name}
          </label>
        </div>
      );
    });
  }
  render() {
    return <div>{this.checkboxGroup()}</div>;
  }
}

export { RfTextArea, RfInput, RfRate, CheckboxGroup };
