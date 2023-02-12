// in src/admin/App.jsx
import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { PostList } from "../Custom/admin-table/posts";
import { UserList } from "../Custom/admin-table/users";

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={<UserList />} />
    <Resource name="posts" list={<PostList />} />
    <Resource name="comments" list={ListGuesser} />
  </Admin>
);

export default App;
