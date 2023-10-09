"use client"

//1. import area
import React, { useEffect, useRef, useState } from 'react'
// import DataTable from 'react-data-table-component';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';
        

//Defined Array of objects


export default function page() {

    const [products, setProducts] = useState([
                    {
                        id: 1,
                        fk_ac: 'Beetlejuice-878787654478',
                        cc_holder_name: 'Gulab jamre',
                        cc_number: '234 242 909 786',
                    },
                    {
                        id: 2,
                        fk_ac: 'rajaram- 8787654478',
                        cc_holder_name: 'syam jamre',
                        cc_number: '989 876 909 765',
                    },
                    {
                        id: 3,
                        fk_ac: 'Juice-878787654478',
                        cc_holder_name: 'Gulab jamre',
                        cc_number: '234 242 909 786',
                    },
                    {
                        id: 4,
                        fk_ac: 'RANA- 8787654478',
                        cc_holder_name: 'MANISH jamre',
                        cc_number: '989 876 909 765',
                    }
          ]);
    const dt = useRef(null);

    const cols = [
        { field: 'id', header: 'ID' },
        { field: 'fk_ac', header: 'FK Account' },
        { field: 'cc_holder_name', header: 'CC Holder' },
        { field: 'cc_number', header: 'CC Numbers' }
    ];

    const exportColumns = cols.map((col) => ({ title: col.header, dataKey: col.field }));

    useEffect(() => {
    
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const exportCSV = (selectionOnly) => {
        dt.current.exportCSV({ selectionOnly });
    };

    const exportPdf = () => {
        import('jspdf').then((jsPDF) => {
            import('jspdf-autotable').then(() => {
                const doc = new jsPDF.default(0, 0);

                doc.autoTable(exportColumns, products);
                doc.save('products.pdf');
            });
        });
    };

    const exportExcel = () => {
        import('xlsx').then((xlsx) => {
            const worksheet = xlsx.utils.json_to_sheet(products);
            const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
            const excelBuffer = xlsx.write(workbook, {
                bookType: 'xlsx',
                type: 'array'
            });

            saveAsExcelFile(excelBuffer, 'products');
        });
    };

    const saveAsExcelFile = (buffer, fileName) => {
        import('file-saver').then((module) => {
            if (module && module.default) {
                let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
                let EXCEL_EXTENSION = '.xlsx';
                const data = new Blob([buffer], {
                    type: EXCEL_TYPE
                });

                module.default.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
            }
        });
    };

    const header = (
        <div className="flex align-items-center justify-content-end gap-2">
            <Button type="button" icon="pi pi-file" rounded onClick={() => exportCSV(false)} data-pr-tooltip="CSV" />
            <Button type="button" icon="pi pi-file-excel" severity="success" rounded onClick={exportExcel} data-pr-tooltip="XLS" />
            <Button type="button" icon="pi pi-file-pdf" severity="warning" rounded onClick={exportPdf} data-pr-tooltip="PDF" />
        </div>
    );
    return (  
        <section className="section dashboard">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                        <Tooltip target=".export-buttons>button" position="bottom" />
                        <DataTable ref={dt} value={products} header={header} tableStyle={{ minWidth: '50rem' }}>
                            {cols.map((col, index) => (
                                <Column key={index} field={col.field} header={col.header} />
                            ))}
                        </DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

