import MaterialTable from "material-table";
import React from "react";
import IconsTable from './../../common/icons/IconsTable';

const empList = [
  {
    id: 1,
    name: "Neeraj",
    email: "neeraj@gmail.com",
    phone: 9876543210,
    age: 23,
  },
  { id: 2, name: "Raj", email: "raj@gmail.com", phone: 6678901234, age: 17 },
  {
    id: 3,
    name: "David",
    email: "david342@gmail.com",
    phone: 6312345678,
    age: 34,
  },
  {
    id: 4,
    name: "Vikas",
    email: "vikas75@gmail.com",
    phone: 9787654321,
    age: 20,
  },
];

const columns = [
  { title: "Name", field: "name" },
  { title: "Address", field: "email" },
  { title: "NIT", field: "phone" },
  { title: "Phone", field: "age" },
];

function CompaniesTable() {
  const [empData, setEmpData] = React.useState(empList);

  return (
    <>
        <MaterialTable
          title="Companies list"
          data={empData}
          columns={columns}
          options={{
            search: true,
            paging: true,
            filtering: true,
            exportButton: true
          }}
          editable={{
            onRowAdd: (newData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                        setEmpData([...empData, newData]);
                    }, 600);
                }),
            onRowUpdate: (newData, oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                        if (oldData) {
                            setEmpData((prev) =>
                                prev.map((item) =>
                                    item.id === oldData.id ? newData : item
                                )
                            );
                        }
                    }, 600);
                }
                ),
            onRowDelete: (oldData) =>
                new Promise((resolve) => {
                    setTimeout(() => {
                        resolve();
                        setEmpData((prev) =>
                            prev.filter((item) => item.id !== oldData.id)
                        );
                    }, 600);
                }
                ),
            }}
          icons={IconsTable()}
        />
    </>
  );
}

export default CompaniesTable;
