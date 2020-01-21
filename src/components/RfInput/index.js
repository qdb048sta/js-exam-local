import React from 'react';
import { Input, Rate, Icon, Tooltip, Tag, Row, Col } from 'antd';
import { rateTips } from './constants';

const { TextArea } = Input;
const { CheckableTag } = Tag;
const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const RfInput = ({ input, ...custom }) => <Input {...input} {...custom} />;

const RfTextArea = ({ input, label, meta: { touched, error } }) => (
  <div>
    <TextArea {...input} rows={3} placeholder="Write your opinion..." />
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

class CheckTagGroup extends React.Component {
  checkTagGroup() {
    let { input, options } = this.props;

    return options.map((option, index) => {
      return (
        <span className="checkTag" key={index}>
          <label>
            <CheckableTag
              checked={input.value.indexOf(option.name) !== -1}
              value={option.name}
              onChange={checked => {
                const newValue = [...input.value];
                if (checked) {
                  newValue.push(option.name);
                } else {
                  newValue.splice(newValue.indexOf(option.name), 1);
                }
                return input.onChange(newValue);
              }}
              style={{ border: '1px solid' }}
            >
              {option.name}
            </CheckableTag>
          </label>
        </span>
      );
    });
  }
  render() {
    return <span>{this.checkTagGroup()}</span>;
  }
}

export { RfTextArea, RfInput, RfRate, CheckTagGroup };
