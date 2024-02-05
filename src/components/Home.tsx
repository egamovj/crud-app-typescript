/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IEmployee, PageEnum, userEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    userEmployeeList as IEmployee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);

  const addEmployeeHandler = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = {...employeeList}
  }

  return (
    <>
      <article className="bg-[#021691] text-white border-[3px] border-transparent text-center p-4 text-2xl">
        <header>
          <h1>Simple CRUD Application</h1>
        </header>
      </article>
      <section className="mx-[10%] mt-[15px]">
        {shownPage === PageEnum.list && (
          <>
            <input
              type="button"
              value="Add Employee"
              onClick={addEmployeeHandler}
              className="px-2 bg-slate-400 rounded"
            />
            <EmployeeList list={employeeList} deleteHandler={deleteEmployee} />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            backBtnClickHandler={showListPage}
            submitHandler={addEmployee}
          />
        )}
      </section>
    </>
  );
};

export default Home;
