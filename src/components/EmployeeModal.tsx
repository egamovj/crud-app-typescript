import { IEmployee } from "./Employee.type";

type Props = {
  closeBtn: () => void;
  data: IEmployee;
};

const EmployeeModal = (props: Props) => {
  const { closeBtn, data } = props;

  return (
    <div
      id="myModal"
      className="fixed z-[1] pt-[200px] left-0 top-0 w-full h-full overflow-auto bg-[rgb(0,0,0)] bg-[rgba(0,0,0,0.4)]"
    >
      <div className="bg-[#fefefe] m-auto p-5 border border-[#888] w-[50%]">
        <span
          onClick={closeBtn}
          className="text-[#aaaaaa] float-right text-[28px] font-bold hover:text-black hover:cursor-pointer hover:no-underline"
        >
          &times;
        </span>
        <h3>Employee Data</h3>
        <div>
          <div>
            <label>First Name : {data.firstName}</label>
          </div>
          <div>
            <label>Last Name : {data.lastName}</label>
          </div>
          <div>
            <label>Email Add : {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
