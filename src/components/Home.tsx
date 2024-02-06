/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { IEmployee, PageEnum, userEmployeeList } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    userEmployeeList as IEmployee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

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
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  };

  const editEmployee = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord =  employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
  };

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
              className="px-2 bg-slate-400 rounded float-right"
            />
            <EmployeeList
              list={employeeList}
              deleteHandler={deleteEmployee}
              onEdit={editEmployee}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            backBtnClickHandler={showListPage}
            submitHandler={addEmployee}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            backBtnClickHandler={showListPage}
            onUpdateHandler={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
