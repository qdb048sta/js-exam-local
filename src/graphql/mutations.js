/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRoom = /* GraphQL */ `
  mutation CreateRoom(
    $input: CreateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    createRoom(input: $input, condition: $condition) {
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
export const updateRoom = /* GraphQL */ `
  mutation UpdateRoom(
    $input: UpdateRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    updateRoom(input: $input, condition: $condition) {
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
export const deleteRoom = /* GraphQL */ `
  mutation DeleteRoom(
    $input: DeleteRoomInput!
    $condition: ModelRoomConditionInput
  ) {
    deleteRoom(input: $input, condition: $condition) {
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
export const createJeUser = /* GraphQL */ `
  mutation CreateJeUser(
    $input: CreateJEUserInput!
    $condition: ModelJEUserConditionInput
  ) {
    createJEUser(input: $input, condition: $condition) {
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
      tests {
        nextToken
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
export const updateJeUser = /* GraphQL */ `
  mutation UpdateJeUser(
    $input: UpdateJEUserInput!
    $condition: ModelJEUserConditionInput
  ) {
    updateJEUser(input: $input, condition: $condition) {
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
      tests {
        nextToken
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
export const deleteJeUser = /* GraphQL */ `
  mutation DeleteJeUser(
    $input: DeleteJEUserInput!
    $condition: ModelJEUserConditionInput
  ) {
    deleteJEUser(input: $input, condition: $condition) {
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
      tests {
        nextToken
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createTest = /* GraphQL */ `
  mutation CreateTest(
    $input: CreateTestInput!
    $condition: ModelTestConditionInput
  ) {
    createTest(input: $input, condition: $condition) {
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
`;
export const updateTest = /* GraphQL */ `
  mutation UpdateTest(
    $input: UpdateTestInput!
    $condition: ModelTestConditionInput
  ) {
    updateTest(input: $input, condition: $condition) {
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
`;
export const deleteTest = /* GraphQL */ `
  mutation DeleteTest(
    $input: DeleteTestInput!
    $condition: ModelTestConditionInput
  ) {
    deleteTest(input: $input, condition: $condition) {
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
`;
export const createTestJeUser = /* GraphQL */ `
  mutation CreateTestJeUser(
    $input: CreateTestJEUserInput!
    $condition: ModelTestJEUserConditionInput
  ) {
    createTestJEUser(input: $input, condition: $condition) {
      id
      userID
      testID
      user {
        id
        name
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
    }
  }
`;
export const updateTestJeUser = /* GraphQL */ `
  mutation UpdateTestJeUser(
    $input: UpdateTestJEUserInput!
    $condition: ModelTestJEUserConditionInput
  ) {
    updateTestJEUser(input: $input, condition: $condition) {
      id
      userID
      testID
      user {
        id
        name
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
    }
  }
`;
export const deleteTestJeUser = /* GraphQL */ `
  mutation DeleteTestJeUser(
    $input: DeleteTestJEUserInput!
    $condition: ModelTestJEUserConditionInput
  ) {
    deleteTestJEUser(input: $input, condition: $condition) {
      id
      userID
      testID
      user {
        id
        name
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
    }
  }
`;
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
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
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
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
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
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
export const createResult = /* GraphQL */ `
  mutation CreateResult(
    $input: CreateResultInput!
    $condition: ModelResultConditionInput
  ) {
    createResult(input: $input, condition: $condition) {
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
      time
    }
  }
`;
export const updateResult = /* GraphQL */ `
  mutation UpdateResult(
    $input: UpdateResultInput!
    $condition: ModelResultConditionInput
  ) {
    updateResult(input: $input, condition: $condition) {
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
      time
    }
  }
`;
export const deleteResult = /* GraphQL */ `
  mutation DeleteResult(
    $input: DeleteResultInput!
    $condition: ModelResultConditionInput
  ) {
    deleteResult(input: $input, condition: $condition) {
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
      time
    }
  }
`;
export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createHistory = /* GraphQL */ `
  mutation CreateHistory(
    $input: CreateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    createHistory(input: $input, condition: $condition) {
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
export const updateHistory = /* GraphQL */ `
  mutation UpdateHistory(
    $input: UpdateHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    updateHistory(input: $input, condition: $condition) {
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
export const deleteHistory = /* GraphQL */ `
  mutation DeleteHistory(
    $input: DeleteHistoryInput!
    $condition: ModelHistoryConditionInput
  ) {
    deleteHistory(input: $input, condition: $condition) {
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
export const createSnapComment = /* GraphQL */ `
  mutation CreateSnapComment(
    $input: CreateSnapCommentInput!
    $condition: ModelSnapCommentConditionInput
  ) {
    createSnapComment(input: $input, condition: $condition) {
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
export const updateSnapComment = /* GraphQL */ `
  mutation UpdateSnapComment(
    $input: UpdateSnapCommentInput!
    $condition: ModelSnapCommentConditionInput
  ) {
    updateSnapComment(input: $input, condition: $condition) {
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
export const deleteSnapComment = /* GraphQL */ `
  mutation DeleteSnapComment(
    $input: DeleteSnapCommentInput!
    $condition: ModelSnapCommentConditionInput
  ) {
    deleteSnapComment(input: $input, condition: $condition) {
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
export const createQuestionSnapshot = /* GraphQL */ `
  mutation CreateQuestionSnapshot(
    $input: CreateQuestionSnapshotInput!
    $condition: ModelQuestionSnapshotConditionInput
  ) {
    createQuestionSnapshot(input: $input, condition: $condition) {
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
export const updateQuestionSnapshot = /* GraphQL */ `
  mutation UpdateQuestionSnapshot(
    $input: UpdateQuestionSnapshotInput!
    $condition: ModelQuestionSnapshotConditionInput
  ) {
    updateQuestionSnapshot(input: $input, condition: $condition) {
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
export const deleteQuestionSnapshot = /* GraphQL */ `
  mutation DeleteQuestionSnapshot(
    $input: DeleteQuestionSnapshotInput!
    $condition: ModelQuestionSnapshotConditionInput
  ) {
    deleteQuestionSnapshot(input: $input, condition: $condition) {
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
export const createQuestionSet = /* GraphQL */ `
  mutation CreateQuestionSet(
    $input: CreateQuestionSetInput!
    $condition: ModelQuestionSetConditionInput
  ) {
    createQuestionSet(input: $input, condition: $condition) {
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
export const updateQuestionSet = /* GraphQL */ `
  mutation UpdateQuestionSet(
    $input: UpdateQuestionSetInput!
    $condition: ModelQuestionSetConditionInput
  ) {
    updateQuestionSet(input: $input, condition: $condition) {
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
export const deleteQuestionSet = /* GraphQL */ `
  mutation DeleteQuestionSet(
    $input: DeleteQuestionSetInput!
    $condition: ModelQuestionSetConditionInput
  ) {
    deleteQuestionSet(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
