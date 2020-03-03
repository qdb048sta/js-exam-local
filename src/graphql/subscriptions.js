/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateJeUserByJeUserId = /* GraphQL */ `
  subscription OnUpdateJeUserByJeUserId($id: String) {
    onUpdateJEUserByJEUserId(id: $id) {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
    }
  }
`;
export const onUpdateTeamByTeamId = /* GraphQL */ `
  subscription OnUpdateTeamByTeamId($id: String) {
    onUpdateTeamByTeamId(id: $id) {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
  }
`;
export const onUpdateTestByTestId = /* GraphQL */ `
  subscription OnUpdateTestByTestId($id: String) {
    onUpdateTestByTestId(id: $id) {
      id
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      results {
        nextToken
      }
      results {
        items {
          logic
          language
          workwith
          techreview
          perstyreview
          author
          role
        }
        nextToken
      }
      status
      tags
    }
  }
`;
export const onUpdateRoomByRoomId = /* GraphQL */ `
  subscription OnUpdateRoomByRoomId($id: String) {
    onUpdateRoomByRoomId(id: $id) {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onUpdateRecordByRecordId = /* GraphQL */ `
  subscription OnUpdateRecordByRecordId($id: String) {
    onUpdateRecordByRecordId(id: $id) {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      room {
        id
        subjectId
        description
        createTime
        password
      }
    }
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      subjectId
      description
      host {
        id
        name
      }
      createTime
      password
      users {
        nextToken
      }
      currentRecord {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onCreateJeUser = /* GraphQL */ `
  subscription OnCreateJeUser {
    onCreateJEUser {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
    }
  }
`;
export const onUpdateJeUser = /* GraphQL */ `
  subscription OnUpdateJeUser {
    onUpdateJEUser {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
    }
  }
`;
export const onDeleteJeUser = /* GraphQL */ `
  subscription OnDeleteJeUser {
    onDeleteJEUser {
      id
      name
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      hostTest {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      name
      description
      users {
        nextToken
      }
      questionSet {
        nextToken
      }
    }
  }
`;
export const onCreateTest = /* GraphQL */ `
  subscription OnCreateTest {
    onCreateTest {
      id
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      results {
        nextToken
      }
      results {
        items {
          logic
          language
          workwith
          techreview
          perstyreview
          author
          role
        }
        nextToken
      }
      status
      tags
    }
  }
`;
export const onUpdateTest = /* GraphQL */ `
  subscription OnUpdateTest {
    onUpdateTest {
      id
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      results {
        nextToken
      }
      results {
        items {
          logic
          language
          workwith
          techreview
          perstyreview
          author
          role
        }
        nextToken
      }
      status
      tags
    }
  }
`;
export const onDeleteTest = /* GraphQL */ `
  subscription OnDeleteTest {
    onDeleteTest {
      id
      room {
        id
        subjectId
        description
        createTime
        password
      }
      team {
        id
        name
        description
      }
      subjectId
      users {
        nextToken
      }
      host {
        id
        name
      }
      description
      timeBegin
      timeEnd
      records {
        nextToken
      }
      results {
        nextToken
      }
      results {
        items {
          logic
          language
          workwith
          techreview
          perstyreview
          author
          role
        }
        nextToken
      }
      status
      tags
    }
  }
`;
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      room {
        id
        subjectId
        description
        createTime
        password
      }
    }
  }
`;
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      room {
        id
        subjectId
        description
        createTime
        password
      }
    }
  }
`;
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
      id
      subjectId
      syncCode
      interviewer {
        id
        name
      }
      timeBegin
      timeEnd
      status
      comment {
        nextToken
      }
      history {
        nextToken
      }
      ques {
        type
        name
        content
        test
      }
      question {
        id
        type
        name
        content
        test
      }
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      room {
        id
        subjectId
        description
        createTime
        password
      }
    }
  }
`;
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult {
    onCreateResult {
      logic
      language
      workwith
      techreview
      perstyreview
      author
      role
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
    }
  }
`;
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult {
    onUpdateResult {
      logic
      language
      workwith
      techreview
      perstyreview
      author
      role
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
    }
  }
`;
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult {
    onDeleteResult {
      logic
      language
      workwith
      techreview
      perstyreview
      author
      role
      test {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
    }
  }
`;
export const onCreateResult = /* GraphQL */ `
  subscription OnCreateResult {
    onCreateResult {
      logic
      language
      workwith
      techreview
      perstyreview
      author
      role
      test {
        id
        room {
          id
          subjectId
          description
          createTime
          password
        }
        team {
          id
          name
          description
        }
        subjectId
        users {
          nextToken
        }
        host {
          id
          name
        }
        description
        timeBegin
        timeEnd
        records {
          nextToken
        }
        results {
          nextToken
        }
        status
        tags
      }
    }
  }
`;
export const onUpdateResult = /* GraphQL */ `
  subscription OnUpdateResult {
    onUpdateResult {
      logic
      language
      workwith
      techreview
      perstyreview
      author
      role
      test {
        id
        room {
          id
          subjectId
          description
          createTime
          password
        }
        team {
          id
          name
          description
        }
        subjectId
        users {
          nextToken
        }
        host {
          id
          name
        }
        description
        timeBegin
        timeEnd
        records {
          nextToken
        }
        results {
          nextToken
        }
        status
        tags
      }
    }
  }
`;
export const onDeleteResult = /* GraphQL */ `
  subscription OnDeleteResult {
    onDeleteResult {
      logic
      language
      workwith
      techreview
      perstyreview
      author
      role
      test {
        id
        room {
          id
          subjectId
          description
          createTime
          password
        }
        team {
          id
          name
          description
        }
        subjectId
        users {
          nextToken
        }
        host {
          id
          name
        }
        description
        timeBegin
        timeEnd
        records {
          nextToken
        }
        results {
          nextToken
        }
        status
        tags
      }
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      author
      time
      content
      hint
      quality
      completeness
      tags
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      author
      time
      content
      hint
      quality
      completeness
      tags
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      author
      time
      content
      hint
      quality
      completeness
      tags
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onCreateHistory = /* GraphQL */ `
  subscription OnCreateHistory {
    onCreateHistory {
      id
      time
      code
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      snapComments {
        nextToken
      }
    }
  }
`;
export const onUpdateHistory = /* GraphQL */ `
  subscription OnUpdateHistory {
    onUpdateHistory {
      id
      time
      code
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      snapComments {
        nextToken
      }
    }
  }
`;
export const onDeleteHistory = /* GraphQL */ `
  subscription OnDeleteHistory {
    onDeleteHistory {
      id
      time
      code
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      snapComments {
        nextToken
      }
    }
  }
`;
export const onCreateSnapComment = /* GraphQL */ `
  subscription OnCreateSnapComment {
    onCreateSnapComment {
      id
      time
      author
      content
      history {
        id
        time
        code
      }
    }
  }
`;
export const onUpdateSnapComment = /* GraphQL */ `
  subscription OnUpdateSnapComment {
    onUpdateSnapComment {
      id
      time
      author
      content
      history {
        id
        time
        code
      }
    }
  }
`;
export const onDeleteSnapComment = /* GraphQL */ `
  subscription OnDeleteSnapComment {
    onDeleteSnapComment {
      id
      time
      author
      content
      history {
        id
        time
        code
      }
    }
  }
`;
export const onCreateQuestionSnapshot = /* GraphQL */ `
  subscription OnCreateQuestionSnapshot {
    onCreateQuestionSnapshot {
      id
      type
      name
      content
      test
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onUpdateQuestionSnapshot = /* GraphQL */ `
  subscription OnUpdateQuestionSnapshot {
    onUpdateQuestionSnapshot {
      id
      type
      name
      content
      test
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onDeleteQuestionSnapshot = /* GraphQL */ `
  subscription OnDeleteQuestionSnapshot {
    onDeleteQuestionSnapshot {
      id
      type
      name
      content
      test
      record {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
    }
  }
`;
export const onCreateQuestionSet = /* GraphQL */ `
  subscription OnCreateQuestionSet {
    onCreateQuestionSet {
      id
      team {
        id
        name
        description
      }
      questions {
        nextToken
      }
      name
      description
      tags
    }
  }
`;
export const onUpdateQuestionSet = /* GraphQL */ `
  subscription OnUpdateQuestionSet {
    onUpdateQuestionSet {
      id
      team {
        id
        name
        description
      }
      questions {
        nextToken
      }
      name
      description
      tags
    }
  }
`;
export const onDeleteQuestionSet = /* GraphQL */ `
  subscription OnDeleteQuestionSet {
    onDeleteQuestionSet {
      id
      team {
        id
        name
        description
      }
      questions {
        nextToken
      }
      name
      description
      tags
    }
  }
`;
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
      id
      type
      questionSet {
        id
        name
        description
        tags
      }
      name
      content
      test
      tags
    }
  }
`;
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
      id
      type
      questionSet {
        id
        name
        description
        tags
      }
      name
      content
      test
      tags
    }
  }
`;
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
      id
      type
      questionSet {
        id
        name
        description
        tags
      }
      name
      content
      test
      tags
    }
  }
`;
