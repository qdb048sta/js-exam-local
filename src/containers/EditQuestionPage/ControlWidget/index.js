import React from 'react';
import PageControlBar from 'components/PageControlBar';
import CategorySelector from 'components/Selectors/CategorySelector';
import QuestionSelector from 'components/Selectors/QuestionSelector';

import { Button, Input, Popconfirm } from 'antd';

const InputGroup = Input.Group;

const ControlWidget = ({
  type,
  categoryIndex,
  questionIndex,
  onChangeName,
  onSubmit,
  onDelete,
  onChangeCategory,
  onChangeQuestion,
  onSync,
  questionList,
  disableSubmit,
}) => (
  <PageControlBar>
    <div>
      

      {type === 'add' && 
        <InputGroup compact>
          <CategorySelector
            onChange={onChangeCategory}
            categoryIndex={categoryIndex}
          />
          <Input
            placeholder="Question name"
            onChange={e => onChangeName(e.target.value)}
            style={{ width: 200, marginRight: 5 }}
          />
          <Button
            type="primary"
            onClick={onSubmit}
            disabled={disableSubmit}
          >
            Add
          </Button>
        </InputGroup>
      }

      {type !== 'add' &&
        <InputGroup compact>
          <QuestionSelector
            onChange={onChangeQuestion}
            questionIndex={questionIndex}
            list={questionList}
          />
          <Button type="primary" onClick={onSubmit} style={{ marginRight: 5, marginLeft: 5 }}>
            Save
          </Button>

          <Popconfirm 
            placement="bottom" 
            title="Are you sure to delete the question?" 
            onConfirm={onDelete}
            okType="danger"
            okText="Delete it" 
            cancelText="No"
          >
            <Button type="danger" icon="delete">
              Delete
            </Button>
          </Popconfirm>
        </InputGroup>
      }
    </div>
  </PageControlBar>
);

export default ControlWidget;
