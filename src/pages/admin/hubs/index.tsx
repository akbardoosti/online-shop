import DefaultLayout from "@/app/admin/layout";
import {SortableTable} from "@/app/components/Tables/SortableTable";
import React, {FormEvent, useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {
    CREATE_HUB_API,
    DELETE_HUB_API,
    EDIT_HUB_API,
    GET_HUB_API,
} from "@/constants/api.consts";
import {DataTableColumn} from "@/types/data-table";
import apiService from "@/services/api-service";
import {ConfirmDialog} from "@/app/components/confirm-dialog";
import Head from "next/head";
import {TextField} from "@mui/material";
import moment from "moment";

const columns: DataTableColumn[] = [
    {label: 'نام', name: 'name'},
    {label: 'لوکیشن', name: 'location'},
    {label: 'شماره تلفن', name: 'phoneNumber'},
    {label: 'آدرس', name: 'address'},
]
const defaultHub = {
    id: '',
    name: '',
    location: '',
    phoneNumber: '',
    address: '',
}
const Hubs = () => {
    const [open, setOpen] = React.useState(false);
    const [hubList, setHubList] = React.useState<any[]>([]);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState<string>('');
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(5);
    const [totalPage, setTotalPage] = React.useState(0);
    const [totalCount, setTotalCount] = React.useState(0);
    const [findText, setFindText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [selectedHub, setSelectedHub] = useState<{
        name: string,
        location: string,
        phoneNumber: string,
        address: string,
        id: string
    }>(defaultHub);
    useEffect(() => {
        getHubList(page, pageSize);
    }, [])
    const handleOpen = () => {
        setOpen(!open);
        setEditMode(false);
        setSelectedHub(defaultHub)
    }

    async function addToHubs(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        let payload = {
            name: formData.get('name'),
            location: formData.get('location'),
            phoneNumber: formData.get('phoneNumber'),
            address: formData.get('address'),
        }
        if (editMode) {
            const newPayload = {
                hubId: selectedHub.id,
                ...payload
            }
            const response = await apiService.put(
                EDIT_HUB_API,
                newPayload
            )
            if (response.status == 204) {
                alert('ویرایش مرکز فروش موفق بود');
                await getHubList(page, pageSize);
                setOpen(false);
            }
        } else {
            const response = await apiService.post(
                CREATE_HUB_API,
                payload
            )
            if (response.status == 200) {
                alert('ثبت مرکز فروش موفق بود');
                await getHubList(page, pageSize);
                setOpen(false)
            }
        }
    }

    async function getHubList(page: number, pageSize: number) {
        setPage(page);
        setPageSize(pageSize);
        let filter = {};
        if (findText) {
            filter = {
                FirstName: findText
            }
        }
        const response = await apiService.get(
            GET_HUB_API,
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
                setHubList(list.items);
                setTotalPage(list.totalPages);
                setTotalCount(list.totalPageCount);
                setTotalCount(list.totalCount);
            }
        }
    }

    async function deleteItem(id: string) {
        const response = await apiService.delete(
            DELETE_HUB_API,
            {
                params: {
                    id: id
                }
            },
        );
        if (response.status == 204) {
            alert('مرکز فروش حذف شد')
            getHubList(page, pageSize);
            setIsOpenDelete(!isOpenDelete);
        }
    }

    return (
        <DefaultLayout>
            <Head>
                <title>مدیریت مراکز فروش</title>
            </Head>
            <div className="flex mb-5 justify-between site-font">
                <h1 className={'text-lg font-bold site-font'}>مدیریت مراکز فروش</h1>
                <Button
                    className='px-2 py-1 text-white site-font bg-indigo-400 hover:bg-indigo-500 duration-500'
                    onClick={() => handleOpen()}
                    variant="text"
                    size={'small'}
                >
                    افزودن مرکز فروش
                </Button>
            </div>

            <Dialog
                open={open}
                onClose={handleOpen}
                dir={'rtl'}
                className={'z-99999'}
            >
                <DialogTitle className='site-font' id="alert-dialog-title">
                    {editMode?'ویرایش مرکز فروش':'افزودن مرکز فروش'}
                </DialogTitle>
                <DialogContent className={'flex justify-center'}>
                    <form onSubmit={addToHubs} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6" dir={'rtl'}>
                            <div className="flex gap-2">
                                <TextField
                                    variant={'standard'}
                                    className="grow !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                    name={'name'}
                                    label={'نام مرکز فروش'}
                                    size="small"
                                    inputProps={{className: 'site-font'}}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    required
                                    defaultValue={selectedHub.name ?? ''}
                                />
                            </div>
                            <div className="flex gap-2">
                                <TextField
                                    variant={'standard'}
                                    className="grow !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                    name={'phoneNumber'}
                                    label={'شماره تلفن'}
                                    size="small"
                                    inputProps={{className: 'site-font'}}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    required
                                    defaultValue={selectedHub.phoneNumber ?? ''}
                                />
                            </div>
                            <div className="flex gap-2">
                                <TextField
                                    variant={'standard'}
                                    className="grow !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                    name={'location'}
                                    label={'لوکیشن'}
                                    size="small"
                                    inputProps={{className: 'site-font'}}
                                    InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                    required
                                    defaultValue={selectedHub.location ?? ''}
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
                                defaultValue={selectedHub.address ?? ''}
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
                data={hubList}
                columns={columns}
                totalPage={totalPage}
                page={page}
                size={pageSize}
                onDelete={(id) => {
                    setSelectedId(id);
                    setIsOpenDelete(!isOpenDelete)
                }}
                onPageChange={(event) => {
                    getHubList(event.page, event.size)
                }}
                onEdit={(user) => {
                    setEditMode(true);
                    setOpen(true);
                    setSelectedHub(user);
                }}
                onSearch={(text) => {
                    setFindText(text);
                    getHubList(page, pageSize);
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

export default Hubs;