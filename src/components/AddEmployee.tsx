
const AddEmployee = () => {
  return (
    <>
        <form>
            <div>
                <label>First Name : </label>
                <input type="text" placeholder="First Name" className="border" />
            </div>
            <div>
                <label>Last Name : </label>
                <input type="text" placeholder="Last Name" />
            </div>
            <div>
                <label>Email : </label>
                <input type="text" placeholder="Email" />
            </div>
            <div>
                <input type="button" value="Back"  className="px-2 bg-slate-400 rounded" />
                <input type="submit" value="Add Employee" className="px-2 bg-green-500 rounded" />
            </div>
        </form>
    </>
  )
}

export default AddEmployee