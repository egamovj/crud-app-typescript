/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IEmployee } from "./Employee.type";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  deleteHandler: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, deleteHandler, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data)
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  return (
    <div>
      <article className="text-center mb-3">
        <h3 className="text-xl font-bold">Employee List</h3>
      </article>
      <table className="border-collapse w-full">
        <tbody>
          <tr>
            <th className="border-[1px] border-[#dddddd] p-2 text-left">
              Name
            </th>
            <th className="border-[1px] border-[#dddddd] p-2 text-left">
              Email
            </th>
            <th className="border-[1px] border-[#dddddd] p-2 text-left">
              Action
            </th>
          </tr>
          {list.map((employee) => {
            return (
              <tr key={employee.id}>
                <td className="border-[1px] border-[#dddddd] p-2 text-left">
                  {`${employee.firstName} ${employee.lastName}`}
                </td>
                <td className="border-[1px] border-[#dddddd] p-2 text-left">
                  {employee.email}
                </td>
                <td className="border-[1px] border-[#dddddd] p-2 text-left ">
                  <div className="flex items-center justify-around">
                    <input
                      type="button"
                      value="View"
                      className="px-5 py-2 border-none bg-[#489CE2]text-[18px] font-mono bg-gradient-to-tr from-indigo-500 to-purple-400 hover:from-indigo-600 hover:to-purple-500 active:from-indigo-700 active:to-purple-600 focus-visible:ring ring-indigo-300 text-white font-semibold text-center rounded-md outline-none transition duration-100"
                      onClick={() => viewEmployee(employee)}
                    />
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => onEdit(employee)}
                      className="px-5 py-2 border-none text-[18px] font-mono bg-green-500 hover:bg-green-600 active:bg-green-700 focus-visible:ring ring-green-300 text-white font-semibold text-center rounded-md outline-none transition duration-100"
                    />
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteHandler(employee)}
                      className="px-5 py-2 border-none bg-gradient-to-tr from-pink-500 to-red-400 hover:from-pink-600 hover:to-red-500 active:from-pink-700 active:to-red-600 focus-visible:ring ring-pink-300 text-white font-semibold text-center rounded-md outline-none transition duration-100 font-mono"
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {showModal && dataToShow !== null && ( <EmployeeModal closeBtn={closeModal} data={dataToShow} />)}
    </div>
  );
};

export default EmployeeList;
