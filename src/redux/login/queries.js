export const listJeUsers = `
  query ListJeUsers(
    $filter: ModelJEUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJEUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        room {
            id
        }
      }
      nextToken
    }
  }
`;
