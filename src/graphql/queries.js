/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
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
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subjectId
        description
        createTime
        password
      }
      nextToken
    }
  }
`;
export const getJeUser = /* GraphQL */ `
  query GetJeUser($id: ID!) {
    getJEUser(id: $id) {
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
export const listJeUsers = /* GraphQL */ `
  query ListJeUsers(
    $filter: ModelJEUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJEUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
      }
      nextToken
    }
  }
`;
export const getTest = /* GraphQL */ `
  query GetTest($id: ID!) {
    getTest(id: $id) {
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
export const listTests = /* GraphQL */ `
  query ListTests(
    $filter: ModelTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subjectId
        description
        timeBegin
        timeEnd
        status
        tags
      }
      nextToken
    }
  }
`;
export const getTestJeUser = /* GraphQL */ `
  query GetTestJeUser($id: ID!) {
    getTestJEUser(id: $id) {
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
export const listTestJeUsers = /* GraphQL */ `
  query ListTestJeUsers(
    $filter: ModelTestJEUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTestJEUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        testID
      }
      nextToken
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
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
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        subjectId
        syncCode
        timeBegin
        timeEnd
        status
      }
      nextToken
    }
  }
`;
export const getResult = /* GraphQL */ `
  query GetResult($id: ID!) {
    getResult(id: $id) {
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
export const listResults = /* GraphQL */ `
  query ListResults(
    $filter: ModelResultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listResults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        logic
        language
        workwith
        techreview
        perstyreview
        author
        role
        time
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
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
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        author
        time
        content
        hint
        quality
        completeness
        tags
      }
      nextToken
    }
  }
`;
export const getHistory = /* GraphQL */ `
  query GetHistory($id: ID!) {
    getHistory(id: $id) {
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
export const listHistorys = /* GraphQL */ `
  query ListHistorys(
    $filter: ModelHistoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHistorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        code
      }
      nextToken
    }
  }
`;
export const getSnapComment = /* GraphQL */ `
  query GetSnapComment($id: ID!) {
    getSnapComment(id: $id) {
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
export const listSnapComments = /* GraphQL */ `
  query ListSnapComments(
    $filter: ModelSnapCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSnapComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        time
        author
        content
      }
      nextToken
    }
  }
`;
export const getQuestionSnapshot = /* GraphQL */ `
  query GetQuestionSnapshot($id: ID!) {
    getQuestionSnapshot(id: $id) {
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
export const listQuestionSnapshots = /* GraphQL */ `
  query ListQuestionSnapshots(
    $filter: ModelQuestionSnapshotFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionSnapshots(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        name
        content
        test
      }
      nextToken
    }
  }
`;
export const getQuestionSet = /* GraphQL */ `
  query GetQuestionSet($id: ID!) {
    getQuestionSet(id: $id) {
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
export const listQuestionSets = /* GraphQL */ `
  query ListQuestionSets(
    $filter: ModelQuestionSetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestionSets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        tags
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        name
        content
        test
        tags
      }
      nextToken
    }
  }
`;
