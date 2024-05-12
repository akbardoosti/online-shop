import DefaultLayout from "@/app/admin/layout";
import {SortableTable} from "@/app/components/Tables/SortableTable";
import React, {FormEvent, useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {DataTableColumn} from "@/types/data-table";
import apiService from "@/services/api-service";
import {ConfirmDialog} from "@/app/components/confirm-dialog";
import Head from "next/head";
import {MenuItem, TextField} from "@mui/material";
import {MobileDatePicker} from "@mui/x-date-pickers";
import moment from "moment";
import {CustomerAPI} from "@/constants/api.consts";

const columns: DataTableColumn[] = [
    {label: 'نام', name: 'firstName'},
    {label: 'نام خانوادگی', name: 'lastName'},
    {label: 'جنسیت', name: 'gender'},
    {label: 'تاریخ تولد', name: 'brithDate'},
    {label: 'شماره تلفن', name: 'phoneNubmer'},
    {label: 'کدپستی', name: 'postalCode'},
    {label: 'آدرس', name: 'address'},
]
const defaultCustomer = {
    id: '',
    gender: '',
    firstName: '',
    brithDate: '',
    address: '',
    phoneNubmer: '',
    lastName: '',
    postalCode: ''
}
const Customers = () => {
    const [open, setOpen] = React.useState(false);
    const [customerList, setCustomerList] = React.useState<any[]>([]);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState<string>('');
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(5);
    const [totalPage, setTotalPage] = React.useState(0);
    const [totalCount, setTotalCount] = React.useState(0);
    const [findText, setFindText] = useState('');
    const [gender, setGender] = useState('');
    const [birthDate, setBirthDate] = useState(moment().format('YYYY-MM-DD').toString());
    const [editMode, setEditMode] = useState(false);
    const [selectedCustomer, setSelectedCustomer] = useState<{
        firstName: string,
        lastName: string,
        gender: string,
        brithDate: string,
        address: string,
        phoneNubmer: string,
        postalCode: string,
        id: string
    }>(defaultCustomer);
    useEffect(() => {
        getCustomerList(page, pageSize);
    }, [])
    const handleOpen = () => {
        setOpen(!open);
        setEditMode(false);
        setSelectedCustomer(defaultCustomer)
    }


    async function addToCustomers(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        let payload = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            phoneNubmer: formData.get('phoneNubmer'),
            postalCode: formData.get('postalCode'),
            address: formData.get('address'),
            gender: gender,
            brithDate: birthDate,
        }
        if (editMode) {
            const newPayload = {
                customerId: selectedCustomer.id,
                ...payload
            }
            const response = await apiService.put(
                CustomerAPI.UPDATE,
                newPayload
            )
            if (response.status == 204) {
                alert('ویرایش مشتری موفق بود');
                await getCustomerList(page, pageSize);
                setOpen(false);
            }
        } else {
            const response = await apiService.post(
                CustomerAPI.CREATE,
                payload
            )
            if (response.status == 200) {
                alert('ثبت مشتری موفق بود');
                await getCustomerList(page, pageSize);
            }
        }
    }

    async function getCustomerList(page: number, pageSize: number) {
        setPage(page);
        setPageSize(pageSize);
        let filter = {};
        if (findText) {
            filter = {
                FirstName: findText
            }
        }
        const response = await apiService.get(
            CustomerAPI.GET_LIST,
            {
                params: {
                    ...filter,
                    PageNumber: page,
                    PageSize: pageSize
                }
            });
        if (response.status == 200) {
            const list = response.data;
            if (list) {
                setCustomerList(list.items);
                setTotalPage(list.totalPages);
                setTotalCount(list.totalPageCount);
                setTotalCount(list.totalCount);
            }
        }
    }

    async function deleteItem(id: string) {
        const response = await apiService.delete(
            CustomerAPI.DELETE,
            {
                params: {
                    id: id
                }
            },
        );
        if (response.status == 204) {
            alert('مشتری حذف شد')
            getCustomerList(page, pageSize);
            setIsOpenDelete(!isOpenDelete);
        }
    }

    return (
        <DefaultLayout>
            <Head>
                <title>مدیریت مشتری ها</title>
            </Head>
            <div className="flex mb-5 justify-between site-font">
                <h1 className={'text-lg font-bold site-font'}>مدیریت مشتری ها</h1>
                <Button
                    className='px-2 py-1 text-white site-font bg-indigo-400 hover:bg-indigo-500 duration-500'
                    onClick={() => handleOpen()}
                    variant="text"
                    size={'small'}
                >
                    افزودن مشتری
                </Button>
            </div>

            <Dialog open={open} onClose={handleOpen} dir={'rtl'} maxWidth={'lg'}>
                <DialogTitle className='site-font' id="alert-dialog-title">
                    {editMode?'ویرایش مشتری':'افزودن مشتری'}
                </DialogTitle>
                <DialogContent className={'flex justify-center'}>
                    <form onSubmit={addToCustomers} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6" dir={'rtl'}>
                            <div className="flex gap-2">
                                <TextField
                                    variant={'standard'}
                                    className="grow !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                    name={'firstName'}
                                    label={'نام مشتری'}
                                    size="small"
                                    inputProps={{className: 'site-font'}}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    required
                                    defaultValue={selectedCustomer.firstName??''}
                                />
                                <TextField
                                    variant={'standard'}
                                    className="grow !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                    name={'lastName'}
                                    label={'نام خانوادگی مشتری'}
                                    size="small"
                                    inputProps={{className: 'site-font'}}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    required
                                    defaultValue={selectedCustomer.lastName??''}
                                />
                            </div>
                            <div className="flex gap-2">
                                <TextField
                                    variant={'standard'}
                                    className="grow !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                    name={'phoneNubmer'}
                                    label={'شماره تلفن'}
                                    size="small"
                                    inputProps={{className: 'site-font'}}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    required
                                    defaultValue={selectedCustomer.phoneNubmer??''}
                                />
                                <TextField
                                    variant={'standard'}
                                    className="grow !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                    name={'postalCode'}
                                    label={'کد پستی'}
                                    size="small"
                                    inputProps={{className: 'site-font'}}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    required
                                    defaultValue={selectedCustomer.postalCode??''}
                                />
                            </div>
                            <div className="flex gap-2">
                                <TextField
                                    className={'w-full site-font'}
                                    inputProps={{className: 'site-font min-w-10'}}
                                    select
                                    label={'جنسیت'}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    onChange={(event) => {
                                        setGender(event.target.value)
                                    }}
                                    defaultValue={selectedCustomer.gender??''}
                                >
                                    <MenuItem
                                        className={'site-font text-start'}
                                        value={'Female'}
                                    >
                                        زن
                                    </MenuItem>
                                    <MenuItem
                                        className={'site-font text-start'}
                                        value={'Male'}
                                    >
                                        مرد
                                    </MenuItem>
                                </TextField>
                                <MobileDatePicker
                                    label="تاریخ تولد"
                                    onChange={value => {
                                        if (value) {
                                            setBirthDate(moment(value).format('YYYY-MM-DD').toString())
                                        }

                                    }}
                                    value={new Date(selectedCustomer.brithDate)??null}
                                />
                            </div>

                            <TextField
                                variant={'standard'}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                name={'address'}
                                label={'آدرس'}
                                multiline
                                rows={2}
                                size="small"
                                inputProps={{className: 'site-font'}}
                                InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                required
                                defaultValue={selectedCustomer.address??''}
                            />
                        </div>

                        <Button
                            size={'small'}
                            type={'submit'}
                            className='mt-6 px-3 py-2 rounded-md text-white site-font bg-red-500 hover:bg-red-600 duration-500'
                        >
                            {editMode ? 'اعمال تغییرات':'افزودن'}
                        </Button>


                    </form>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="text"
                        color="error"
                        onClick={handleOpen}
                        className="mr-1 site-font"
                    >
                        <span>انصراف</span>
                    </Button>
                </DialogActions>
            </Dialog>

            <SortableTable
                data={customerList}
                disableMenu={false}
                columns={columns}
                totalPage={totalPage}
                page={page}
                size={pageSize}
                onDelete={(id) => {
                    setSelectedId(id);
                    setIsOpenDelete(!isOpenDelete)
                }}
                onPageChange={(event) => {
                    getCustomerList(event.page, event.size)
                }}
                onEdit={(user) => {
                    setEditMode(true);
                    setOpen(true);
                    setSelectedCustomer(user);
                    setGender(user.gender);
                    setBirthDate(user.brithDate);

                }}
                onSearch={(text) => {
                    setFindText(text);
                    getCustomerList(page, pageSize);
                }}
                totalCount={totalCount}
            />
            <ConfirmDialog
                isOpen={isOpenDelete}
                title={'حذف مشتری'}
                message={'آیا از حذف مشتری مطمئن هستید؟'}
                onConfirm={() => deleteItem(selectedId)}
                onCancel={() => setIsOpenDelete(!isOpenDelete)}
            ></ConfirmDialog>
        </DefaultLayout>
    )
}

export default Customers;