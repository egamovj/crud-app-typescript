import { useState } from "react";
import { IEmployee } from "./Employee.type";

type Props = {
  data: IEmployee;
  backBtnClickHandler: () => void;
  onUpdateHandler: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, backBtnClickHandler, onUpdateHandler } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

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
    const updatedData: IEmployee = {
      id: data.id,
      firstName: firstName,
      lastName: lastName,
      email: email,
    };
    onUpdateHandler(updatedData);
    backBtnClickHandler();
  };

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
            className="border h-9 w-72 pl-[15px] m-[5px]"
            value={firstName}
            onChange={firstNameHandler}
          />
        </div>
        <div>
          <label>Last Name : </label>
          <input
            type="text"
            placeholder="Last Name"
            className="border h-9 w-72 pl-[15px] m-[5px]"
            value={lastName}
            onChange={lastNameHandler}
          />
        </div>
        <div>
          <label>Email Add : </label>
          <input
            type="text"
            placeholder="Email"
            className="border h-9 w-72 pl-[15px] m-[5px]"
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
            value="Update Employee"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
