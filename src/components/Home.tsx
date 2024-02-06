/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { IEmployee, PageEnum } from "./Employee.type";
import EmployeeList from "./EmployeeList";
import AddEmployee from "./AddEmployee";
import EditEmployee from "./EditEmployee";

const Home = () => {
  const [employeeList, setEmployeeList] = useState([] as IEmployee[]);
  const [shownPage, setShownPage] = useState(PageEnum.list);
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  useEffect(() => {
    const listInString =  window.localStorage.getItem("EmployeeList");
    if (listInString) {
      _setEmployeeList(JSON.parse(listInString))
    }
  },[])

  const addEmployeeHandler = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const _setEmployeeList = (list: IEmployee[]) => {
    setEmployeeList(list);
    window.localStorage.setItem("EmployeeList", JSON.stringify(list))
  }

  const addEmployee = (data: IEmployee) => {
    _setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    _setEmployeeList(tempList);
  };

  const editEmployee = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    _setEmployeeList(tempData);
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
              className="px-5 py-1 bg-[#007bffcf] float-right text-white text-[18px] bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus-visible:ring ring-blue-300  font-semibold text-center rounded-md outline-none transition duration-100"
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
