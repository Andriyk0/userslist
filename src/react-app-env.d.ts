/// <reference types="react-scripts" />
interface User {
  'id': number,
  'name': string,
  'username': string,
  'email': string,
  'address': Address,
  'phone': string,
  'website': string,
}

interface Address {
  'street': string,
  'suite': string,
  'city': string,
  'zipcode': string,
  'geo': {
    'lat': string,
    'lng': string
  }
}

interface Post {
  'userId': number,
  'id': number,
  'title': string,
  'body': string
}

interface State {
  users: User[],
  userPosts: Post[],
  selectUser: User | undefined,
}
