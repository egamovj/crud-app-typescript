/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IEmployee } from "./Employee.type";
import EmployeeModal from "./EmployeeModal";

type Props = {
  list: IEmployee[];
  deleteHandler: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, deleteHandler } = props;
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
                      className="px-5 py-2 border-none rounded-xl bg-[#489CE2]"
                      onClick={() => viewEmployee(employee)}
                    />
                    <input
                      type="button"
                      value="Edit"
                      className="px-5 py-2 border-none rounded-xl bg-green-500"
                    />
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => deleteHandler(employee)}
                      className="px-5 py-2 border-none rounded-xl bg-red-500"
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
