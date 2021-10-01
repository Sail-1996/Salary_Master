import React, { useState } from "react";
import MaterialTable from "material-table";

import GetAppIcon from "@material-ui/icons/GetApp";

function PenaltyTable() {
  const [tableData, setTableData] = useState([
    {
      name: "Ram",
      email: "ram@gmail.com",
      phone: "6393639289",
      age: null,
      gender: "M",
      city: "nagpur",
      fee: 78456,
    },
    {
      name: "Shyam",
      email: "shyam@gmail.com",
      phone: "6393639278",
      age: "12",
      gender: "M",
      city: "gkp",
      fee: 233394,
    },
    {
      name: "mohan",
      email: "mohan@gmail.com",
      phone: "6393639290",
      age: null,
      gender: "M",
      city: "bpl",
      fee: 993,
    },
    {
      name: "sohan",
      email: "sohan@gmail.com",
      phone: "6393639256",
      age: "26",
      gender: "M",
      city: "dl",
      fee: 232,
    },
  ]);
  const columns = [
    {
      title: "Name",
      field: "name",
      sorting: false,
      filtering: false,
    },
    {
      title: "Email",
      field: "email",
      filterPlaceholder: "Filter by Email",
    },
    {
      title: "Phone Number",
      field: "phone",
      align: "right",
    },
    {
      title: "Age",
      field: "age",
      emptyValue: () => <em> null </em>,render:(rowData)=><div style={{background:rowData.age>=18?"green":"red"}}>{rowData.age}</div>,
      // defaultSort: "asc",
      searchable: false,
      export: false,
     
    },
    {
      title: "Gender",
      field: "gender",
      lookup: {
        M: "Male",
        F: "Female",
      },
  
    },
    {
      title: "CIty",
      field: "city",
    },
    {
      title: "School Fee",
       field: "fee",
      type: "currency",
      currencySetting: {
        currencyCode: "INR",
        minimumFractionDigits: 0,
      },
    },
  ];
  return (
    <div>
      <h1> Material Table </h1>
      <MaterialTable
        editable={{
          //Adding A data
          onRowAdd: (newRow) =>
            new Promise((resolve, reject) => {
              setTableData([...tableData, newRow]);

              setTimeout(() => resolve(), 500);
              console.log(newRow);
            }),

          //Updating Data
          onRowUpdate: (newRow, oldRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData[oldRow.tableData.id] = newRow;
              setTableData(updatedData);
              console.log(newRow, oldRow);
              setTimeout(() => resolve(), 500);
            }),
          onRowDelete: (selectedRow) =>
            new Promise((resolve, reject) => {
              const updatedData = [...tableData];
              updatedData.splice(selectedRow.tableData.id, 1);
              setTableData(updatedData);
              setTimeout(() => resolve(), 1000);
            }),
        }}
        columns={columns}
        data={tableData}
        title="Penalty Table"
        onSelectionChange={(selectedRows)=>console.log(selectedRows)}
        options={{
          sorting: true,
          searchFieldAlignment: "right",
          searchAutoFocus: true,
          searchFieldVariant: "outlined",
          filtering: true,
          paging: true,
          pageSizeOptions: [2, 5, 10, 22, 25, 50, 100],
          pageSize: 2,
          paginationType: "stepped",
          showFirstLastPageButtons: false,
          paginationPosition: "top",
          exportButton: true,
          exportAllData: true,
          exportFileName: "TableData",
          addRowPosition: "first",
          actionsColumnIndex: -1,
          selection: true,
          showSelectAllCheckbox: false,
          showTextRowsSelected: false,
          selectionProps:rowData=>({
            disabled:rowData.age==null,
            color:"primary"
          }),
          grouping:true,
          columnsButton:true,
          headerStyle:{fontWeight:"bold",fontSize:"16px",background:"#111111",color:"#fff"},
          rowStyle:(data,index)=>index%2==0?{background:"#f5f5f5"}:null
        }}
      
        actions={[
          {
            icon: () => <GetAppIcon />,
            tooltip: "Click me",
            onClick: (e, data) => console.log(data),
            // isFreeAction: true,
          },
        ]}
      />{" "}
    </div>
  );
}

export default PenaltyTable;
