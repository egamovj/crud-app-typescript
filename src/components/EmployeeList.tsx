import { IEmployee } from "./Employee.type";

type Props = {
    list: IEmployee[]
}

const EmployeeList = (props: Props) => {
  return (
    <div>
      EmployeeList page
      <table className="border-collapse w-full">
        <tr>
          <th className="border-[1px] border-[#dddddd] p-2 text-left">Company</th>
          <th className="border-[1px] border-[#dddddd] p-2 text-left">Contact</th>
          <th className="border-[1px] border-[#dddddd] p-2 text-left">Country</th>
        </tr>
        <tr>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">EJ Company</td>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">egamovj90@gmail</td>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">Uzbekistan</td>
        </tr>
        <tr>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">EJ Company</td>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">egamovj90@gmail</td>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">Uzbekistan</td>
        </tr>
        <tr>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">EJ Company</td>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">egamovj90@gmail</td>
            <td className="border-[1px] border-[#dddddd] p-2 text-left">Uzbekistan</td>
        </tr>
      </table>
    </div>
  );
};

export default EmployeeList;
