export default {
    //Customer
    listCustomer: '/listCustomer',
    deleteCustomer: function (id) {
        return('/deleteCustomer/' + id)
    },
    addCustomer: '/addCustomer',
    updateCustomer: function (id) {
        return('/updateCustomer/' + id)
    },

    // Bill
    listBill: '/listBill',
    // deleteBill: function (id) {
    //     return('/deleteBill/'  + id)
    // },
    addBill: '/addBill',
    exportBillPdf: function (id) {
        return('/export/bill.pdf/' + id)
    }
    // exportPdf: '/export/test.pdf'

}