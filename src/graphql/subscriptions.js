/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateJeUserByJeUserId = /* GraphQL */ `
  subscription OnUpdateJeUserByJeUserId($id: String) {
    onUpdateJEUserByJEUserId(id: $id) {
      id
      name
      room {
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
      team {
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
        status
        tags
      }
      hostTest {
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
        items {
          id
          name
        }
        nextToken
      }
      questionSet {
        items {
          id
          name
          description
          tags
        }
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
      team {
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
      subjectId
      users {
        items {
          id
          name
        }
        nextToken
      }
      host {
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
      description
      timeBegin
      timeEnd
      records {
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
        status
        tags
      }
      subjectId
      description
      host {
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
      createTime
      password
      users {
        items {
          id
          name
        }
        nextToken
      }
      currentRecord {
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
      timeBegin
      timeEnd
      status
      comment {
        items {
          author
          time
          content
        }
        nextToken
      }
      history {
        items {
          id
          time
          code
        }
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
        record {
          id
          subjectId
          syncCode
          timeBegin
          timeEnd
          status
        }
      }
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
        status
        tags
      }
      room {
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
  }
`;
export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom {
    onCreateRoom {
      id
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
        status
        tags
      }
      subjectId
      description
      host {
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
      createTime
      password
      users {
        items {
          id
          name
        }
        nextToken
      }
      currentRecord {
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
  }
`;
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom {
    onUpdateRoom {
      id
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
        status
        tags
      }
      subjectId
      description
      host {
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
      createTime
      password
      users {
        items {
          id
          name
        }
        nextToken
      }
      currentRecord {
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
  }
`;
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom {
    onDeleteRoom {
      id
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
        status
        tags
      }
      subjectId
      description
      host {
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
      createTime
      password
      users {
        items {
          id
          name
        }
        nextToken
      }
      currentRecord {
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
  }
`;
export const onCreateJeUser = /* GraphQL */ `
  subscription OnCreateJeUser {
    onCreateJEUser {
      id
      name
      room {
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
      team {
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
        status
        tags
      }
      hostTest {
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
      team {
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
        status
        tags
      }
      hostTest {
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
      team {
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
        status
        tags
      }
      hostTest {
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
        items {
          id
          name
        }
        nextToken
      }
      questionSet {
        items {
          id
          name
          description
          tags
        }
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
        items {
          id
          name
        }
        nextToken
      }
      questionSet {
        items {
          id
          name
          description
          tags
        }
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
        items {
          id
          name
        }
        nextToken
      }
      questionSet {
        items {
          id
          name
          description
          tags
        }
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
      team {
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
      subjectId
      users {
        items {
          id
          name
        }
        nextToken
      }
      host {
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
      description
      timeBegin
      timeEnd
      records {
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
      team {
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
      subjectId
      users {
        items {
          id
          name
        }
        nextToken
      }
      host {
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
      description
      timeBegin
      timeEnd
      records {
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
      team {
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
      subjectId
      users {
        items {
          id
          name
        }
        nextToken
      }
      host {
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
      description
      timeBegin
      timeEnd
      records {
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
      timeBegin
      timeEnd
      status
      comment {
        items {
          author
          time
          content
        }
        nextToken
      }
      history {
        items {
          id
          time
          code
        }
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
        record {
          id
          subjectId
          syncCode
          timeBegin
          timeEnd
          status
        }
      }
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
        status
        tags
      }
      room {
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
      timeBegin
      timeEnd
      status
      comment {
        items {
          author
          time
          content
        }
        nextToken
      }
      history {
        items {
          id
          time
          code
        }
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
        record {
          id
          subjectId
          syncCode
          timeBegin
          timeEnd
          status
        }
      }
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
        status
        tags
      }
      room {
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
      timeBegin
      timeEnd
      status
      comment {
        items {
          author
          time
          content
        }
        nextToken
      }
      history {
        items {
          id
          time
          code
        }
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
        record {
          id
          subjectId
          syncCode
          timeBegin
          timeEnd
          status
        }
      }
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
        status
        tags
      }
      room {
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
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      author
      time
      content
      record {
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
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      author
      time
      content
      record {
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
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      author
      time
      content
      record {
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
      snapComments {
        items {
          id
          time
          author
          content
        }
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
      snapComments {
        items {
          id
          time
          author
          content
        }
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
      snapComments {
        items {
          id
          time
          author
          content
        }
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
        users {
          nextToken
        }
        questionSet {
          nextToken
        }
      }
      questions {
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
        users {
          nextToken
        }
        questionSet {
          nextToken
        }
      }
      questions {
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
        users {
          nextToken
        }
        questionSet {
          nextToken
        }
      }
      questions {
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
      name
      content
      test
      tags
    }
  }
`;
