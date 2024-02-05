/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, ChangeEvent } from "react";
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

  const firstNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const lastNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setLastName(e.target.value);
  };

  const emailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const submitBtnHandler = () => {
    const data: IEmployee = {
        id: new Date().toJSON().toString(),
        firstName: firstName,
        lastName: lastName,
        email: email,
    }
    submitHandler(data);
}

  return (
    <div className="text-center">
      <div className="mb-2">
        <h1 className="text-xl font-semibold">Add Employee</h1>
      </div>
      <form onSubmit={submitBtnHandler}>
        <div>
          <label>First Name : </label>
          <input
            type="text"
            placeholder="First Name"
            className="border h-5 pl-[15px] m-[5px]"
            value={firstName}
            onChange={firstNameHandler}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input
            type="text"
            placeholder="Last Name"
            className="border h-5 pl-[15px] m-[5px]"
            value={lastName}
            onChange={lastNameHandler}
          />
        </div>
        <div>
          <label>Email Add : </label>
          <input
            type="text"
            placeholder="Email"
            className="border h-5 pl-[15px] m-[5px]"
            value={email}
            onChange={emailHandler}
          />
        </div>
        <div className="mt-2">
          <button
            onClick={backBtnClickHandler}
            className="px-2 bg-[#30DCDC] rounded ml-[5px]"
          >
            Back
          </button>
          <button type="submit" className="px-2 bg-green-500 rounded ml-[5px]">
            Add Employee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
