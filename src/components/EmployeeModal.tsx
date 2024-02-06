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
      <div className="bg-[#fefefe] m-auto p-5 border border-[#888] w-[50%] rounded-md">
        <span
          onClick={closeBtn}
          className="text-[#aaaaaa] float-right text-[28px] font-bold hover:text-black hover:cursor-pointer hover:no-underline"
        >
          &times;
        </span>
        <h3 className="font-mono font-bold text-[20px] text-center">Employee Data</h3>
        <div>
          <div>
            <label className="font-mono font-medium text-[18px]">First Name : {data.firstName}</label>
          </div>
          <div>
            <label className="font-mono font-medium text-[18px]">Last Name : {data.lastName}</label>
          </div>
          <div>
            <label className="font-mono font-medium text-[18px]">Email Add : {data.email}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;
