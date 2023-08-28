import React, { useEffect } from "react";
import "./Home.css";
import Switcher from "../../components/Switch UI/Switcher";
import TextField from "@mui/material/TextField";
import Menu from "@mui/material/Menu";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { deleteData, getData, postData, putData } from "../../api/api";
import { Link } from "react-router-dom";
import {
  IData,
  closeModalEdit,
  handleClose,
  handleCloseEdit,
  handleCloseSettings,
  openModalAdd,
  openModalEdit,
  setCityAdd,
  setCityEdit,
  setEmailAdd,
  setEmailEdit,
  setImgAdd,
  setImgEdit,
  setModalAdd,
  setModalSettings,
  setNameAdd,
  setNameEdit,
  setPhoneAdd,
  setPhoneEdit,
  setStatusAdd,
  setStatusEdit,
  setSurnameAdd,
  setSurnameEdit,
  openModalView,
  handleCloseView,
  closeModalViewBtn,
  handleChangeSelectStatus,
  handleChangeSelectCity,
  setSearch,
  openModalDelete,
  handleCloseModalDel,
  closeModalDel,
} from "../../reducers/values";

//Icons
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiFillLock } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { FaLongArrowAltUp } from "react-icons/fa";
import { AiFillTag } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Home = () => {
  const dispatch = useAppDispatch();

  //Handle close functions
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  //States
  const data = useAppSelector((store) => store.values.data);
  const modalAdd = useAppSelector((store) => store.values.modalAdd);
  const imgAdd = useAppSelector((store) => store.values.imgAdd);
  const nameAdd = useAppSelector((store) => store.values.nameAdd);
  const surnameAdd = useAppSelector((store) => store.values.surnameAdd);
  const emailAdd = useAppSelector((store) => store.values.emailAdd);
  const cityAdd = useAppSelector((store) => store.values.cityAdd);
  const statusAdd = useAppSelector((store) => store.values.statusAdd);
  const mobile_phoneAdd = useAppSelector(
    (store) => store.values.mobile_phoneAdd
  );
  const modalEdit = useAppSelector((store) => store.values.modalEdit);
  const imgEdit = useAppSelector((store) => store.values.imgEdit);
  const nameEdit = useAppSelector((store) => store.values.nameEdit);
  const surnameEdit = useAppSelector((store) => store.values.surnameEdit);
  const emailEdit = useAppSelector((store) => store.values.emailEdit);
  const cityEdit = useAppSelector((store) => store.values.cityEdit);
  const statusEdit = useAppSelector((store) => store.values.statusEdit);
  const mobile_phoneEdit = useAppSelector(
    (store) => store.values.mobile_phoneEdit
  );
  const modalSettings = useAppSelector((store) => store.values.modalSettings);
  const modalView = useAppSelector((store) => store.values.modalView);
  const imgView = useAppSelector((store) => store.values.imgView);
  const nameView = useAppSelector((store) => store.values.nameView);
  const surnameView = useAppSelector((store) => store.values.surnameView);
  const emailView = useAppSelector((store) => store.values.emailView);
  const cityView = useAppSelector((store) => store.values.cityView);
  const statusView = useAppSelector((store) => store.values.statusView);
  const mobile_phoneView = useAppSelector(
    (store) => store.values.mobile_phoneView
  );
  const idxDel = useAppSelector((store) => store.values.idxDel);
  const idxEdit = useAppSelector((store) => store.values.idxEdit);
  const statusSelect = useAppSelector((store) => store.values.statusSelect);
  const citySelect = useAppSelector((store) => store.values.citySelect);
  const search = useAppSelector((store) => store.values.search);
  const modalDel = useAppSelector((store) => store.values.modalDel);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch, search]);

  function addUser(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (
      imgAdd.trim().length === 0 &&
      nameAdd.trim().length === 0 &&
      surnameAdd.trim().length === 0 &&
      emailAdd.trim().length === 0 &&
      cityAdd.trim().length === 0 &&
      statusAdd.trim().length === 0 &&
      mobile_phoneAdd.trim().length === 0
    ) {
      alert("Hey fill it up");
    } else {
      let obj: IData = {
        id: Date.now(),
        img: imgAdd,
        name: nameAdd,
        surname: surnameAdd,
        email: emailAdd,
        city: cityAdd,
        status: statusAdd,
        mobile_phone: mobile_phoneAdd,
        complete: false,
      };

      dispatch(postData(obj));

      dispatch(setModalAdd(false));
      dispatch(setImgAdd(""));
      dispatch(setNameAdd(""));
      dispatch(setSurnameAdd(""));
      dispatch(setEmailAdd(""));
      dispatch(setCityAdd(""));
      dispatch(setStatusAdd(""));
      dispatch(setPhoneAdd(""));
    }
  }

  function editUser(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();

    if (
      imgEdit.trim().length === 0 &&
      nameEdit.trim().length === 0 &&
      surnameEdit.trim().length === 0 &&
      emailEdit.trim().length === 0 &&
      cityEdit.trim().length === 0 &&
      statusEdit.trim().length === 0
    ) {
      alert("Hey fill it up");
    } else {
      let obj: IData = {
        id: idxEdit,
        img: imgEdit,
        name: nameEdit,
        surname: surnameEdit,
        email: emailEdit,
        city: cityEdit,
        status: statusEdit,
        mobile_phone: mobile_phoneEdit,
        complete: false,
      };

      dispatch(putData(obj));
      dispatch(closeModalEdit());
    }
  }

  return (
    <div className="dark:bg-[#000] pb-[170px]">
      <header className="header px-[80px]">
        <div className="block_1_header flex justify-between items-center">
          <h1 className="text-[#343A40] text-[28px] font-[500] dark:text-[#fff]">
            User List
          </h1>
          <div className="block_dark_mode_and_btn_add flex items-center gap-[20px]">
            <button
              className="flex items-center gap-[10px] p-[8px_22px] bg-[#2196F3] text-[#fff] text-[15px] font-[500] rounded-[4px] hover:bg-[red]"
              onClick={() => dispatch(openModalAdd())}
            >
              <AiOutlinePlus />
              New
            </button>
            <Switcher />
          </div>
        </div>
        <div className="block_2_header mt-[30px] flex justify-between items-center">
          <div className="flex items-center  gap-[30px]">
            <FormControl sx={{ m: 1, minWidth: 120 }} className="bg-[#fff]">
              <InputLabel id="demo-simple-select-helper-label">
                Status
              </InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={statusSelect}
                label="Status"
                onChange={(event) =>
                  dispatch(handleChangeSelectStatus(event.target.value))
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={`ACTIVE`}>ACTIVE</MenuItem>
                <MenuItem value={`INACTIVE`}>INACTIVE</MenuItem>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }} className="bg-[#fff]">
              <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={citySelect}
                label="City"
                onChange={(event) =>
                  dispatch(handleChangeSelectCity(event.target.value))
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={`Dushanbe`}>Dushanbe</MenuItem>
                <MenuItem value={`Bokhtar`}>Bokhtar</MenuItem>
                <MenuItem value={`Khujand`}>Khujand</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div>
            <TextField
              className="bg-[#fff]"
              id="outlined-basic"
              label="Name, email, etc..."
              variant="outlined"
              value={search}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                dispatch(setSearch(event.target.value))
              }
            />
          </div>
        </div>
      </header>
      <section className="section mt-[50px]">
        <div className="texts_icons">
          <table className="border-[1px] border-[#fff] w-[1200px] m-[0_auto]">
            <tr className=" flex justify-between items-center gap-[20px]  bg-[#f3f3f3]  py-[17px] px-[20px] dark:bg-[#000]">
              <td className="w-[245px]">
                <h3 className="flex items-center gap-[10px] ml-[50px] text-[#40464C] text-[19px] font-[500] dark:text-[#fff]">
                  <AiOutlineUser />
                  Name
                </h3>
              </td>
              <td className="w-[145px]">
                <h3 className="flex items-center gap-[10px] text-[#40464C] text-[19px] font-[500] dark:text-[#fff]">
                  <AiFillLock />
                  City
                </h3>
              </td>
              <td className="w-[1]">
                <h2 className="flex items-center gap-[10px] text-[#40464C] text-[19px] font-[500] dark:text-[#fff]">
                  <BiTimeFive />
                  Status
                  <FaLongArrowAltUp />
                </h2>
              </td>
              <td className="">
                <h3 className="flex items-center gap-[10px] text-[#40464C] text-[19px] font-[500] w-[120px] ml-[30px] dark:text-[#fff]">
                  <AiFillTag />
                  Phone
                </h3>
              </td>
              <td className="flex items-center gap-[20px] w-[70px]"></td>
            </tr>
          </table>
        </div>
        {data
          .filter((item) => {
            return (
              item.name.toLowerCase().includes(search.trim().toLowerCase()) ||
              item.surname
                .toLowerCase()
                .includes(search.trim().toLowerCase()) ||
              item.email.toLowerCase().includes(search.trim().toLowerCase()) ||
              item.city.toLowerCase().includes(search.trim().toLowerCase()) ||
              item.status.toLowerCase().includes(search.trim().toLowerCase()) ||
              item.mobile_phone
                .toString()
                .toLowerCase()
                .includes(search.trim().toLowerCase())
            );
          })
          .filter((item) => {
            if (statusSelect === "ACTIVE") {
              return item.status === statusSelect;
            } else if (statusSelect === "INACTIVE") {
              return item.status === statusSelect;
            } else {
              return item;
            }
          })
          .filter((item) => {
            if (citySelect === "Dushanbe") {
              return item.city === citySelect;
            } else if (citySelect === "Khujand") {
              return item.city === citySelect;
            } else if (citySelect === "Bokhtar") {
              return item.city === citySelect;
            } else {
              return item;
            }
          })
          .map((item: IData) => {
            return (
              <div key={item.id}>
                <table className="border-[1px] border-[#fff] w-[1200px] m-[0_auto] hover:border-[blue]">
                  <tr className=" flex justify-between items-center gap-[20px]  bg-[#f3f3f3]  py-[17px] px-[20px] hover:bg-[#bfbfbf] dark:bg-[#000]">
                    <td className="flex items-center gap-[20px] w-[300px]">
                      <img
                        src={item.img}
                        className="w-[60px] h-[60px] rounded-full"
                        alt=""
                      />
                      <div>
                        <h3 className="flex items-center gap-[10px] text-[#40464C] text-[16px] font-[600] dark:text-[#fff]">
                          {item.name}
                          <span>{item.surname}</span>{" "}
                        </h3>
                        <Link
                          to={``}
                          className="text-[#696C71] text-[14px] font-[500] dark:text-[#fff]"
                        >
                          {item.email}
                        </Link>
                      </div>
                    </td>
                    <td className="w-[200px]">
                      <h3 className="text-[#40464C] text-[14px] font-[500] dark:text-[#fff]">
                        {item.city}
                      </h3>
                    </td>
                    <td>
                      {item.status === "INACTIVE" ? (
                        <h1 className="p-[5px_12px] bg-[#748998]  text-[#FBFBFB] text-[15px] font-[600]">
                          {item.status}
                        </h1>
                      ) : (
                        <h1 className="p-[5px_12px] bg-[#259323]  text-[#FBFBFB] text-[15px] font-[600]">
                          {item.status}
                        </h1>
                      )}
                    </td>
                    <td className="w-[200px] ml-[100px]">
                      <h2 className="text-[16px] font-[600] text-[#40464C] dark:text-[#fff]">
                        {item.mobile_phone}
                      </h2>
                    </td>
                    <td className=" text-[30px]  text-[#CFD6DC] hover:text-[green]">
                      <BsThreeDots
                        onClick={() => dispatch(setModalSettings(item))}
                        className="cursor-pointer"
                      />
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}

        <Modal
          open={modalAdd}
          onClose={() => dispatch(handleClose())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="w-[300px] py-[30px] bg-[#fff] flex items-center justify-center flex-col rounded-[10px] border-none outline-none dark:bg-[#000]">
            <h1 className="mb-[70px] text-center text-[29px] font-[800] dark:text-[#fff]">
              Add User
            </h1>
            <form
              action=""
              className="flex flex-col gap-[20px] justify-center items-center"
              onSubmit={(event: React.ChangeEvent<HTMLFormElement>) =>
                addUser(event)
              }
            >
              <input
                type="text"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={imgAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setImgAdd(event.target.value))
                }
                placeholder="Enter your link of your image"
                required={true}
              />
              <input
                type="text"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={nameAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setNameAdd(event.target.value))
                }
                placeholder="Enter your name"
                required={true}
                />
              <input
                type="text"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={surnameAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setSurnameAdd(event.target.value))
                }
                placeholder="Enter your surname"
                required={true}
                />
              <input
                type="email"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={emailAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEmailAdd(event.target.value))
                }
                placeholder="Enter your email"
                required={true}
              />
              <select
                name=""
                id=""
                className="outline-none border-[1px] border-[green] p-[5px_40px] rounded-[30px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={cityAdd}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  dispatch(setCityAdd(event.target.value))
                }
                required={true}
                >
                <option value="">---City---</option>
                <option value="Dushanbe">Dushanbe</option>
                <option value="Kulob">Kulob</option>
                <option value="Bokhtar">Bokhtar</option>
                <option value="Khujand">Khujand</option>
                <option value="Hisor">Hisor</option>
              </select>
              <select
                name=""
                id=""
                className="outline-none border-[1px] border-[green] p-[5px_40px] rounded-[30px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={statusAdd}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  dispatch(setStatusAdd(event.target.value))
                }
                required={true}
                >
                <option value="">---Status---</option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>

              <input
                type="number"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={mobile_phoneAdd}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setPhoneAdd(event.target.value))
                }
                placeholder="Enter your number phone"
                required={true}
                />
              <button className="p-[5px_40px] bg-[#54b316] text-[#fff] text-[19px] font-[800] rounded-[30px]">
                Add
              </button>
            </form>
          </Box>
        </Modal>

        {/* Modal Settings */}
        {/* <Modal
          open={modalSettings}
          onClose={() => dispatch(handleCloseSettings())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
        >
          <Box className="w-[300px] py-[30px] bg-[#fff] flex items-center justify-center flex-col rounded-[10px] border-none outline-none dark:bg-[#000] dark:border-[1px] dark:border-[#fff]">
            <h1 className="mb-[70px] text-center text-[29px] font-[800] dark:text-[#fff]">
              Settings
            </h1>
            <div className="flex flex-col gap-[20px] justify-center items-center">
              <button
                className="flex items-center gap-[15px] text-[32px] hover:text-[gray] dark:text-[#fff]"
                onClick={() => dispatch(openModalView())}
              >
                <FaUserCircle />
                View profile
              </button>
              <button
              className="flex items-center gap-[15px] text-[32px] hover:text-[gray] dark:text-[#fff]"
              onClick={() => dispatch(openModalEdit())}
              >
                <AiFillEdit />
                Edit
              </button>
              <button
                className="flex items-center gap-[15px] text-[32px] text-[red] hover:text-[#f35252]"
                onClick={() => {
                  dispatch(deleteData(idxDel));
                  dispatch(closeModalSettings());
                }}
              >
                <MdDelete />
                Delete
              </button>
            </div>
          </Box>
        </Modal> */}

        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={modalSettings}
          onClose={() => dispatch(handleCloseSettings())}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          //   sx={{
            //     marginLeft: `1100px`
            // }}
            
          className="ml-[1100px]"
          >
          <h1 className="mb-[20px] text-center text-[22px] font-[800] dark:text-[green]">
            Settings
          </h1>
          <div>
            <MenuItem
              className="flex items-center gap-[15px] text-[24px] hover:text-[gray] dark:text-[gray]"
              onClick={() => dispatch(openModalView())}
              >
              <FaUserCircle />
              View profile
            </MenuItem>
            <MenuItem
              className="flex items-center gap-[15px] text-[32px] hover:text-[gray] dark:text-[blue]"
              onClick={() => dispatch(openModalEdit())}
              >
              <AiFillEdit />
              Edit
            </MenuItem>
            <MenuItem
              className="flex items-center gap-[15px] text-[32px] text-[red] hover:text-[#f35252] dark:text-[red]"
              onClick={() => {
                dispatch(openModalDelete());
              }}
              >
              <MdDelete />
              Delete
            </MenuItem>
          </div>
        </Menu>
        <Modal
          open={modalEdit}
          onClose={() => dispatch(handleCloseEdit())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
          >
          <Box className="w-[300px] py-[30px] bg-[#fff] flex items-center justify-center flex-col rounded-[10px] border-none outline-none dark:bg-[#000]">
            <h1 className="mb-[70px] text-center text-[29px] font-[800] dark:text-[#fff]">
              Edit User
            </h1>
            <form
              action=""
              className="flex flex-col gap-[20px] justify-center items-center"
              onSubmit={(event: React.ChangeEvent<HTMLFormElement>) =>
                editUser(event)
              }
              >
              <input
                type="text"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={imgEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setImgEdit(event.target.value))
                }
                placeholder="Edit your link of your image"
                required={true}
                />
              <input
                type="text"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={nameEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setNameEdit(event.target.value))
                }
                placeholder="Edit your name"
                required={true}
                />
              <input
                type="text"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={surnameEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setSurnameEdit(event.target.value))
                }
                placeholder="Edit your surname"
                required={true}
                />
              <input
                type="email"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={emailEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setEmailEdit(event.target.value))
                }
                placeholder="Edit your email"
                required={true}
              />
              <select
                name=""
                id=""
                className="outline-none border-[1px] border-[green] p-[5px_40px] rounded-[30px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={cityEdit}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  dispatch(setCityEdit(event.target.value))
                }
                required={true}
                >
                <option value="">---City---</option>
                <option value="Dushanbe">Dushanbe</option>
                <option value="Kulob">Kulob</option>
                <option value="Bokhtar">Bokhtar</option>
                <option value="Khujand">Khujand</option>
                <option value="Hisor">Hisor</option>
              </select>
              <select
                name=""
                id=""
                className="outline-none border-[1px] border-[green] p-[5px_40px] rounded-[30px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={statusEdit}
                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                  dispatch(setStatusEdit(event.target.value))
                }
                required={true}
                >
                <option value="">---Status---</option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </select>

              <input
                type="number"
                className="outline-none border-[1px] border-[green] p-[8px_30px] rounded-[30px] text-[16px] dark:bg-[#000] dark:text-[#fff] dark:placeholder:text-[#fff]"
                value={mobile_phoneEdit}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  dispatch(setPhoneEdit(event.target.value))
                }
                placeholder="Edit your number phone"
                required={true}
                />
              <button className="p-[5px_40px] bg-[#54b316] text-[#fff] text-[19px] font-[800] rounded-[30px]">
                Edit
              </button>
            </form>
          </Box>
        </Modal>
        <Modal
          open={modalView}
          onClose={() => dispatch(handleCloseView())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-end"
          >
          <Box className="w-[410px] h-[100vh] py-[10px] bg-[#fff] flex items-center flex-col border-none outline-none dark:bg-[#000]">
            <div className="flex justify-between  gap-[130px]">
              <span
                className="text-[32px] text-[#000] font-[700] cursor-pointer dark:text-[#fff]"
                onClick={() => dispatch(closeModalViewBtn())}
                >
                &times;
              </span>
              <h1 className=" text-center text-[29px] font-[800] dark:text-[#fff]">
                View Profile
              </h1>
            </div>
            <div className="mt-[20px] w-[100%] flex flex-col justify-center items-center border-y-[1px] border-y-[#D5DBE1] py-[28px]">
              <img
                src={imgView}
                alt=""
                className="rounded-full w-[180px] h-[180px]"
                />
              <h3 className="flex items-center gap-[10px] text-[#40464C] text-[24px] font-[600] dark:text-[#fff]">
                {nameView}
                <span>{surnameView}</span>{" "}
              </h3>
              <Link
                to={``}
                className="text-[#696C71] text-[16px] font-[500] dark:text-[#fff]"
                >
                {emailView}
              </Link>
            </div>
            <div className="flex flex-col   gap-[20px] w-[100%] border-b-[1px] border-b-[#D5DBE1] py-[28px] ">
              <div className="m-[0_auto] flex flex-col gap-[15px]">
                <div className="flex justify-start items-center gap-[97px]">
                  <h3 className="flex items-center gap-[10px] text-[#40464C] text-[16px] font-[500] dark:text-[#fff]">
                    <AiFillLock />
                    City
                  </h3>
                  <h3 className="text-[#40464C] text-[16px] font-[500] dark:text-[#fff]">
                    {cityView}
                  </h3>
                </div>
                <div className="flex justify-start items-center gap-[80px]">
                  <h2 className="flex items-center gap-[10px] text-[#40464C] text-[16px] font-[500] dark:text-[#fff]">
                    <BiTimeFive />
                    Status
                  </h2>
                  {statusView === "INACTIVE" ? (
                    <h1 className="p-[5px_12px] bg-[#748998]  text-[#FBFBFB] text-[16px] font-[600]">
                      {statusView}
                    </h1>
                  ) : (
                    <h1 className="p-[5px_12px] bg-[#259323]  text-[#FBFBFB] text-[16px] font-[600]">
                      {statusView}
                    </h1>
                  )}
                </div>
                <div className="flex justify-start items-center gap-[78px]">
                  <h3 className="flex  items-center gap-[10px] text-[#40464C] text-[16px] font-[500] dark:text-[#fff]">
                    <AiFillTag />
                    Phone
                  </h3>
                  <h2 className="text-[16px] font-[500] text-[#40464C] dark:text-[#fff]">
                    {mobile_phoneView}
                  </h2>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
        <Modal
          open={modalDel}
          onClose={() => dispatch(handleCloseModalDel())}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          className="flex justify-center items-center"
          >
          <Box className="w-[300px] py-[30px] bg-[#fff] flex items-center justify-center flex-col rounded-[10px] border-none outline-none dark:bg-[#000]">
            <h1 className="mb-[30px] text-center text-[23px] font-[800] dark:text-[#fff]">
              Are you sure to Delete this user?
            </h1>
            <div className="flex items-center gap-[20px]">
              <button
                className="p-[8px_40px] bg-[green] text-[#fff] outline-none rounded-[30px]"
                onClick={() => {
                  dispatch(deleteData(idxDel));
                  dispatch(closeModalDel());
                }}
                >
                Yes
              </button>
              <button
                className="p-[8px_40px] bg-[red] text-[#fff] outline-none rounded-[30px]"
                onClick={() => {
                  dispatch(handleCloseModalDel());
                  dispatch(closeModalDel());
                }}
                >
                No
              </button>
            </div>
          </Box>
        </Modal>
      </section>
    </div>
  );
};

export default Home;
