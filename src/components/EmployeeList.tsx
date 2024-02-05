import { IEmployee } from "./Employee.type";

type Props = {
  list: IEmployee[];
  deleteHandler: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, deleteHandler } = props;

  

  return (
    <div>
      <table className="border-collapse w-full">
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
              <td className="border-[1px] border-[#dddddd] p-2 text-left">
                <div>
                    <input type="button" value="View" className="px-2 border-none rounded-lg bg-slate-500" />
                    <input type="button" value="Edit" className="px-2 border-none rounded-lg bg-green-500" />
                    <input type="button" value="Delete" onClick={() => deleteHandler(employee)} className="px-2 border-none rounded-lg bg-red-500" />
                </div>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
