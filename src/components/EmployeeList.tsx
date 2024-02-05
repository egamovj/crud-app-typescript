import { IEmployee } from "./Employee.type";

type Props = {
  list: IEmployee[];
};

const EmployeeList = (props: Props) => {
  const { list } = props;

  return (
    <div>
      EmployeeList page
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
                Actions
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default EmployeeList;
