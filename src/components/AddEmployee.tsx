/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState} from "react";
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
    }
    submitHandler(data);
    backBtnClickHandler()
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
          <input type="button" value="Back" onClick={backBtnClickHandler} className="px-2 bg-[#30DCDC] rounded ml-[5px]"/>
          <input type="submit" value='Add Employee' className="px-2 bg-green-500 rounded ml-[5px]"></input>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
