export const listRooms = `query ListRooms(
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
      }
      nextToken
    }
  }`;

export const onCreateRoom = `subscription OnCreateRoom {
    onCreateRoom {
        id
        subjectId
        description
        createTime
    }
  }`;

export const onDeleteRoom = `subscription OnDeleteRoom {
    onDeleteRoom {
      id
    }
  }`;
