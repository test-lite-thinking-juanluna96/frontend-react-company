import MaterialTable from "material-table";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import IconsTable from './../../common/icons/IconsTable';
import { createCompanyAction, deleteCompanyAction, getCompaniesAction, updateCompanyAction } from './../../redux/actions/companies.action';

const columns = [
  { title: "Name", field: "name" },
  { title: "Address", field: "address" },
  { title: "NIT", field: "nit" },
  { title: "Phone", field: "phone" },
];

function CompaniesTable() {
  const [empData, setEmpData] = React.useState([]);
  const companies = useSelector((state) => state.company.companies);
  console.log(empData);
  const dispatch = useDispatch();

  const loadCompanies = () => {
    dispatch(getCompaniesAction())
  };

  useEffect(() => {
    loadCompanies();
  }, []);

  useEffect(() => {
    const editable = companies.map(o => ({ ...o }));
    setEmpData(editable);
  }, [companies]);
  

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
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  dispatch(createCompanyAction(newData));
                  resolve();
                }, 1000);
              }),
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  dispatch(updateCompanyAction(newData));
                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  dispatch(deleteCompanyAction(oldData.id));
                  resolve();
                }, 1000);
              }),
          }}
          icons={IconsTable()}
        />
        
    </>
  );
}

export default CompaniesTable;
