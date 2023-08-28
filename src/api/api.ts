import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IData, IUserListState } from "../reducers/values";
// import { IUserListState } from "../reducers/values";

const API = "http://localhost:3000/data";

export const getData = createAsyncThunk("reducers/values.ts", async () => {
  try {
    const { data } = await axios.get(API);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const postData = createAsyncThunk(
  "todo/postData",
  async function postData( obj, {dispatch }) {
    try {
      const { data } = await axios.post(API, obj);
      dispatch(getData());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteData = createAsyncThunk(
  "todo/deleteTodo",
  async function (id: number, { dispatch }) {
    try {
      const { data } = await axios.delete(`${API}/${id}`);
      dispatch(getData());
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);


// export const completedData = createAsyncThunk(
//   "todo/completedData",
//   async function (obj: IUserListState, { dispatch }) {
//     try {
//       // eslint-disable-next-line no-unused-vars
//       const { data } = await axios.put(`${API}/${obj.id}`, {
//         img: obj.img,
//         name: obj.name,
//         surname: obj.surname,
//         email: obj.email,
//         city: obj.city,
//         status: obj.status,
//         mobile_phone: obj.mobile_phone,
//         complete: !obj.complete,
//       });

//       dispatch(getData());
//     } catch (error) {
//       console.log(error);
//     }
//   }
// );

export const putData = createAsyncThunk(
  "todos/putTodo",
  async (newTodo: IData, { dispatch }) => {
    try {
      const { data } = await axios.put(`${API}/${newTodo.id}`, newTodo);
      dispatch(getData());
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const searchData = createAsyncThunk("reducers/values.ts", async (search:string) => {
  try {
    const { data } = await axios.get(`${API}/${search}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});