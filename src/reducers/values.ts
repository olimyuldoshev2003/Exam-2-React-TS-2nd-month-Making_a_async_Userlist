import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getData } from "../api/api";

export interface IData {
  id: number;
  img: string;
  name: string;
  surname: string;
  email: string;
  city: string;
  status: string;
  mobile_phone: string | number;
  complete: boolean;
}

export interface IUserListState {
  data: IData[];
  loading: boolean;
  modalAdd: boolean;
  imgAdd: string;
  nameAdd: string;
  surnameAdd: string;
  emailAdd: string;
  cityAdd: string;
  statusAdd: string;
  mobile_phoneAdd: string;
  modalEdit: boolean;
  imgEdit: string;
  nameEdit: string;
  surnameEdit: string;
  emailEdit: string;
  cityEdit: string;
  statusEdit: string;
  mobile_phoneEdit: string | number;
  modalSettings: boolean;
  modalView: boolean;
  imgView: string;
  nameView: string;
  surnameView: string;
  emailView: string;
  cityView: string;
  statusView: string;
  mobile_phoneView: string | number;
  idxDel: number;
  idxEdit: number;
  statusSelect: string;
  citySelect: string;
  search: string;
  modalDel: boolean;
}

const initialState: IUserListState = {
  data: [],
  loading: false,
  modalAdd: false,
  imgAdd: "",
  nameAdd: "",
  surnameAdd: "",
  emailAdd: "",
  cityAdd: "",
  statusAdd: "",
  mobile_phoneAdd: "",
  modalEdit: false,
  imgEdit: "",
  nameEdit: "",
  surnameEdit: "",
  emailEdit: "",
  cityEdit: "",
  statusEdit: "",
  mobile_phoneEdit: "",
  modalSettings: false,
  modalView: false,
  imgView: "",
  nameView: "",
  surnameView: "",
  emailView: "",
  cityView: "",
  statusView: "",
  mobile_phoneView: "",
  idxDel: 0,
  idxEdit: 0,
  statusSelect: "",
  citySelect: "",
  search: "",
  modalDel: false
};

export const counterSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    openModalAdd(state: IUserListState) {
      state.modalAdd = true;
    },
    handleClose(state: IUserListState) {
      state.modalAdd = false;
    },
    setImgAdd(state: IUserListState, action: PayloadAction<string>) {
      state.imgAdd = action.payload;
    },
    setNameAdd(state: IUserListState, action: PayloadAction<string>) {
      state.nameAdd = action.payload;
    },
    setSurnameAdd(state: IUserListState, action: PayloadAction<string>) {
      state.surnameAdd = action.payload;
    },
    setEmailAdd(state: IUserListState, action: PayloadAction<string>) {
      state.emailAdd = action.payload;
    },
    setCityAdd(state: IUserListState, action: PayloadAction<string>) {
      state.cityAdd = action.payload;
    },
    setStatusAdd(state: IUserListState, action: PayloadAction<string>) {
      state.statusAdd = action.payload;
    },
    setPhoneAdd(state: IUserListState, action: PayloadAction<string>) {
      state.mobile_phoneAdd = action.payload;
    },
    setModalAdd(state: IUserListState, action: PayloadAction<boolean>) {
      state.modalAdd = action.payload;
    },
    openModalEdit(state: IUserListState) {
      state.modalEdit = true;
      state.modalSettings = false;
    },
    handleCloseEdit(state: IUserListState) {
      state.modalEdit = false;
    },
    setImgEdit(state: IUserListState, action: PayloadAction<string>) {
      state.imgEdit = action.payload;
    },
    setNameEdit(state: IUserListState, action: PayloadAction<string>) {
      state.nameEdit = action.payload;
    },
    setSurnameEdit(state: IUserListState, action: PayloadAction<string>) {
      state.surnameEdit = action.payload;
    },
    setEmailEdit(state: IUserListState, action: PayloadAction<string>) {
      state.emailEdit = action.payload;
    },
    setCityEdit(state: IUserListState, action: PayloadAction<string>) {
      state.cityEdit = action.payload;
    },
    setStatusEdit(state: IUserListState, action: PayloadAction<string>) {
      state.statusEdit = action.payload;
    },
    setPhoneEdit(state: IUserListState, action: PayloadAction<string>) {
      state.mobile_phoneEdit = action.payload;
      state.modalSettings = false;
    },
    setModalSettings(state: IUserListState, action: PayloadAction<IData>) {
      state.modalSettings = true;
      state.idxDel = action.payload.id;
      state.idxEdit = action.payload.id;
      state.imgEdit = action.payload.img;
      state.nameEdit = action.payload.name;
      state.surnameEdit = action.payload.surname;
      state.emailEdit = action.payload.email;
      state.cityEdit = action.payload.city;
      state.statusEdit = action.payload.status;
      state.mobile_phoneEdit = action.payload.mobile_phone;
      state.imgView = action.payload.img;
      state.nameView = action.payload.name;
      state.surnameView = action.payload.surname;
      state.emailView = action.payload.email;
      state.cityView = action.payload.city;
      state.statusView = action.payload.status;
      state.mobile_phoneView = action.payload.mobile_phone;
    },
    handleCloseSettings(state: IUserListState) {
      state.modalSettings = false;
    },
    closeModalSettings(state: IUserListState) {
      state.modalSettings = false;
    },
    closeModalEdit(state: IUserListState) {
      state.modalEdit = false;
    },
    openModalView(state: IUserListState) {
      state.modalView = true;
      state.modalSettings = false;
    },
    handleCloseView(state: IUserListState) {
      state.modalView = false;
    },
    closeModalViewBtn(state: IUserListState) {
      state.modalView = false;
    },
    handleChangeSelectStatus(
      state: IUserListState,
      action: PayloadAction<string>
    ) {
      state.statusSelect = action.payload;
    },
    handleChangeSelectCity(
      state: IUserListState,
      action: PayloadAction<string>
    ) {
      state.citySelect = action.payload;
    },
    setSearch(state: IUserListState, action: PayloadAction<string>) {
      state.search = action.payload;
    },
    openModalDelete(state: IUserListState) {
      state.modalDel = true
      state.modalSettings = false
    },
    handleCloseModalDel(state: IUserListState) {
      state.modalDel = false
    },
    closeModalDel(state: IUserListState) {
      state.modalDel = false
    }
  },
  extraReducers(builder) {
    builder.addCase(getData.pending, (state: IUserListState) => {
      state.loading = true;
    }),
      builder.addCase(
        getData.fulfilled,
        (state: IUserListState, action: PayloadAction<IData[]>) => {
          state.data = action.payload;
          state.loading = false;
        }
      ),
      builder.addCase(getData.rejected, (state: IUserListState) => {
        state.loading = false;
        alert("Data isn't defined");
      });
  },
});

export const {
  openModalAdd,
  handleClose,
  setImgAdd,
  setNameAdd,
  setSurnameAdd,
  setEmailAdd,
  setCityAdd,
  setStatusAdd,
  setPhoneAdd,
  setModalAdd,
  setModalSettings,
  handleCloseSettings,
  closeModalSettings,
  openModalEdit,
  handleCloseEdit,
  setImgEdit,
  setNameEdit,
  setSurnameEdit,
  setEmailEdit,
  setCityEdit,
  setStatusEdit,
  setPhoneEdit,
  closeModalEdit,
  openModalView,
  handleCloseView,
  closeModalViewBtn,
  handleChangeSelectStatus,
  handleChangeSelectCity,
  setSearch,
  openModalDelete,
  handleCloseModalDel,
  closeModalDel
} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type

export default counterSlice.reducer;
