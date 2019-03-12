import React, { Component } from 'react';

import { transform } from '@babel/standalone';

import { message } from 'antd';

import debouncedRunCode from 'utils/runCode';

import ReactPage from './ReactPage';
import JavaScriptPage from './JavaScriptPage';

import ControlWidget from './ControlWidget';

import { connect } from 'react-redux';
import {
  createQuestionAction,
  updateQuestionAction,
  deleteQuestionAction,
  fetchQuestionList,
  fetchQuestion,
} from '../../redux/question/actions';

const getPageComponent = args => {
  switch (args.categoryIndex) {
    case 1: {
      return <ReactPage {...args} />;
    }
    default: {
      return <JavaScriptPage {...args} />;
    }
  }
};

class Page extends Component {
  state = {
    categoryIndex: 0,
    name: '',
    tags: [],
    code: '',
    compiledCode: '',
    test: '',
    id: null,
    questionIndex: 0,
    isLoading: false,
  };

  async componentDidMount() {
    await this.getQuestionList();
    if (this.props.type === 'edit') {
      const { compiledCode } = this.state;
      this.setState({ isLoading: true });
      debouncedRunCode({ code: compiledCode, onTapeUpdate: this.addTape });
      await this.onChangeQuestion(0);
      this.setState({ isLoading: false });
    }
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.currentTab !== this.props.currentTab) {
      if (nextProps.currentTab === 'edit') {
        const { compiledCode } = this.state;
        this.setState({ isLoading: true });
        debouncedRunCode({ code: compiledCode, onTapeUpdate: this.addTape });
      } else {
        this.setState({
          name: '',
          tags: [],
          code: '',
          compiledCode: '',
          test: '',
          id: null,
        });
      }
    }
    return true;
  }

  onChangeCategory = async index => {
    this.setState({ categoryIndex: index }, async () => {
      await this.getQuestionList();
      await this.onChangeQuestion(0);
    });
  };

  getQuestionList = async () => {
    const { categoryIndex } = this.state;
    await this.props.actions.fetchQuestionList(
      categoryIndex === 0 ? 'javascript' : 'react',
    );
  };

  onChangeQuestion = async questionIndex => {
    const { id } = this.props.question.list[questionIndex];
    this.setState({ isLoading: true, questionIndex });
    await this.props.actions.fetchQuestion(id);
    const { tags, content: code, test } = this.props.question;
    this.setState({
      tags,
      code,
      test,
      isLoading: false,
      id,
    });
  };

  onSubmit = async () => {
    const { categoryIndex, tags, name, code: content, test, id } = this.state;
    this.setState({ isLoading: true });
    if (this.props.type === 'add') {
      let isQuestionExist = this.props.question.list.find(
        question => question.name === name,
      );

      if (!isQuestionExist) {
        // Submit question
        await this.onCreateQuestion({
          tags,
          name,
          content,
          test,
          type: categoryIndex === 0 ? 'javascript' : 'react',
        });

        this.setState({
          name: '',
          tags: [],
          code: '',
          test: '',
        });
      } else {
        message.error('Question: ' + name + ' is already exists.');
      }
    } else {
      await this.onUpdateQuestion({
        id,
        tags,
        content,
        test,
      });
    }
    this.setState({ isLoading: false });
  };

  onCreateQuestion = async data => {
    try {
      await this.props.actions.createQuestionAction(data);
      message.success(`Successfully add the question "${data.name}"!`, 0.5);
    } catch (e) {
      message.error(e.errors[0].message);
    }
  };

  onUpdateQuestion = async data => {
    try {
      await this.props.actions.updateQuestionAction(data);
      message.success('Successfully edited!', 0.5);
    } catch (e) {
      message.error(e);
    }
  };

  onDelete = async () => {
    const { id } = this.state;
    this.setState({ isLoading: true });
    try {
      await this.props.actions.deleteQuestionAction({
        input: {
          id,
        },
      });
      message.success('Successfully deleted!');
    } catch (e) {
      message.error(e);
    }
    await this.onChangeQuestion(0);
    this.setState({ isLoading: false });
  };

  compileCode = () => {
    const { test, code } = this.state;
    const fullCode = `${code} ${test}`;
    try {
      const { code: compiledCode } = transform(fullCode, {
        presets: [
          'es2015',
          ['stage-2', { decoratorsBeforeExport: true }],
          'react',
        ],
        plugins: ['proposal-object-rest-spread'],
      });
      this.setState({ compiledCode });
    } catch (e) {
      console.log('Compile code error!');
    }
  };

  handleCodeChange = newCode => {
    this.setState({ code: newCode }, this.compileCode);
  };

  handleTestChange = newTest => {
    this.setState({ test: newTest }, this.compileCode);
  };

  onTagUpdate = tags => {
    this.setState({ tags });
  };

  onSync = async () => {
    const { categoryIndex } = this.state;
    this.setState({ isLoading: true });
    await this.props.actions.fetchQuestionList(
      categoryIndex === 0 ? 'javascript' : 'react',
    );
    this.setState({ isLoading: false });
  };

  render() {
    const { categoryIndex, name, code, test, questionIndex } = this.state;
    return (
      <React.Fragment>
        <ControlWidget
          type={this.props.type}
          currentInputName={name}
          onChangeName={questionName => this.setState({ name: questionName })}
          onSubmit={this.onSubmit}
          onDelete={this.onDelete}
          onChangeCategory={this.onChangeCategory}
          onChangeQuestion={this.onChangeQuestion}
          onSync={this.onSync}
          categoryIndex={categoryIndex}
          questionIndex={questionIndex}
          questionList={this.props.question.list}
          disableSubmit={!name || !code || !test}
        />
        {getPageComponent({
          categoryIndex,
          onSubmit: this.onSubmit,
          onChangeCategory: this.onChangeCategory,
          handleCodeChange: this.handleCodeChange,
          handleTestChange: this.handleTestChange,
          onTagUpdate: this.onTagUpdate,
          ...this.state,
        })}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.question,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: {
      createQuestionAction: async type => {
        await dispatch(createQuestionAction(type));
      },
      updateQuestionAction: async id => {
        await dispatch(updateQuestionAction(id));
      },
      deleteQuestionAction: async type => {
        await dispatch(deleteQuestionAction(type));
      },
      fetchQuestion: async id => {
        await dispatch(fetchQuestion(id));
      },
      fetchQuestionList: async type => {
        await dispatch(fetchQuestionList(type));
      },
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Page);
