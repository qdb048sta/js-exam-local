export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
