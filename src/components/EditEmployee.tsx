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
          <input
            type="button"
            value="Back"
            onClick={backBtnClickHandler}
            className="px-2 bg-[#30DCDC] rounded ml-[5px]"
          />
          <input
            type="submit"
            value="Update Employee"
            className="px-2 bg-green-500 rounded ml-[5px]"
          ></input>
        </div>
      </form>
    </div>
  );
};

export default EditEmployee;
