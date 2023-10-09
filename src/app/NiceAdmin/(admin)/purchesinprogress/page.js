'use client'
//1. Import Area
// import DefaultImport from 'somelibrary/locations'
import DataTable from 'react-data-table-component';
import React from 'react'

//Defined Array of objects
const columns = [
    {
        name: 'Id',
        selector: row => row.id,
    },
    {
        name: 'FK Account',
        selector: row => row.fk_ac,
    },
    {
        name: 'CC Holder Name',
        selector: row => row.cc_holder_name,
    },
    {
        name: 'CC Account',
        selector: row => row.cc_number,
    },
    {
        name: 'Gift Amount',
        selector: row => row.gift_amount,
    },
    {
        name: 'Tx Amount',
        selector: row => row.tx_amount,
    },
    {
        name: 'GiftCard OTP',
        selector: row => row.gift_card_otp,
    },
    {
        name: 'Purches OTP',
        selector: row => row.purches_otp,
    },
    {
        name: 'Final Price',
        selector: row => row.final_price,
    },
    {
        name: 'Remark',
        selector: row => row.remark,
    },
    {
        name: 'Purches Start at',
        selector: row => row.purches_start,
    },
    {
        name: 'Status',
        selector: row => row.status,
        cell: (row) => (
            <span
                className="btn btn-success btn-xs"
                onClick={(e) => {
                    alert(e + row.id + " Panding");
                }}
            >
                P.ding
            </span>
        ),
    },
    {
        name: 'Actions',
        selector: row => row.actions,
        button: true,
        cell: (row) => (
            <button
                className="btn btn-danger btn-xs"
                onClick={(e) => {
                    alert(e + row.id + " deleted");
                }}
            >
                Delete
            </button>
        ),
    },
];

const data = [
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        actions:'',
        status:''
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
    {
        id: 1,
        fk_ac: 'Beetlejuice-878787654478',
        cc_holder_name: 'Gulab jamre',
        cc_number: '234 242 909 786',
        gift_amount: '500',
        tx_amount: '2000',
        final_price: '20000',
        gift_card_otp: '876555',
        purches_otp: '8755',
        remark: 'yes',
        tx_amount: '2000',
        purches_start: 'Mon sept 2023 12:00:00',
        
    },
]

export default function page() {
    return (
        <section className="section dashboard">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                           <h5 className="card-title">A</h5>
                           <DataTable
                               pagination 
                               columns={columns} 
                               data={data} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
