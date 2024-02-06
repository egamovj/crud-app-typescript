/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IEmployee } from "./Employee.type";

type Props = {
  backBtnClickHandler: () => void;
  submitHandler: (data: IEmployee) => void;
};

const AddEmployee = (props: Props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const { backBtnClickHandler, submitHandler } = props;

  const firstNameHandler = (e: any) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e: any) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e: any) => {
    setEmail(e.target.value);
  };

  const submitBtnHandler = (e: any) => {
    e.preventDefault();
    const data: IEmployee = {
      id: new Date().toJSON().toString(),
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    submitHandler(data);
    backBtnClickHandler();
  };

  return (
    <div className="text-center">
      <div className="mb-2">
        <h1 className="text-xl font-semibold">Add Employee</h1>
      </div>
      <form onSubmit={submitBtnHandler}>
        <div>
          <label className="font-mono font-semibold text-[18px]">First Name : </label>
          <input
            type="text"
            placeholder="First Name"
            className="border h-9 w-72 pl-[15px] m-[5px]"
            value={firstName}
            onChange={firstNameHandler}
          />
        </div>
        <div>
          <label className="font-mono font-semibold text-[18px]">Last Name : </label>
          <input
            type="text"
            placeholder="Last Name"
            className="border h-9 w-72 pl-[15px] m-[5px]"
            value={lastName}
            onChange={lastNameHandler}
          />
        </div>
        <div>
          <label className="font-mono font-semibold text-[18px]">Email Add : </label>
          <input
            type="text"
            placeholder="Email"
            className="border h-9 w-72 pl-[15px] m-[5px] focus:ring-blue-500 focus:border-blue-500 "
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div className="mt-2 flex justify-center items-center gap-3">
          <input
            type="button"
            value="Back"
            onClick={backBtnClickHandler}
            className="text-white text-[18px] bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2 text-center  "
          />
          <input
            type="submit"
            value="Add Employee"
            className="ml-[5px] px-5 py-1 bg-[#007bffcf] float-right text-white text-[18px] bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300  font-semibold text-center rounded-md outline-none transition duration-100"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
