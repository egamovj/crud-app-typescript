/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IEmployee, userEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(userEmployeeList as IEmployee[]);

  return (
    <>
      <article className="bg-[#021691] text-white border-[3px] border-transparent text-center p-4 text-2xl">
        <header>
          <h1>Simple CRUD Application</h1>
        </header>
      </article>
      <section className="mx-[10%] mt-[15px]">
        <div>Content</div>
        <EmployeeList />
      </section>
    </>
  );
};

export default Home;
