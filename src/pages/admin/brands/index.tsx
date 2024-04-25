import DefaultLayout from "@/app/admin/layout";
import {SortableTable} from "@/app/components/Tables/SortableTable";
import React, {FormEvent, useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

import {CREATE_BRAND_API, DELETE_BRAND_API, GET_BRAND_API, LOGIN_API} from "@/constants/api.consts";
import {DataTableColumn} from "@/types/data-table";
import apiService from "@/services/api-service";
import {ConfirmDialog} from "@/app/components/confirm-dialog";
import Head from "next/head";
import {TextField} from "@mui/material";

const columns: DataTableColumn[] = [
    {label: 'نام', name: 'name'},
    {label: 'تعداد محصول', name: 'productCount'},
    {label: 'توضیحات', name: 'description'}
]
const Brands = () => {
    const [open, setOpen] = React.useState(false);
    const [brandList, setBrandList] = React.useState<any[]>([]);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState<string>('');
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(5);
    const [totalPage, setTotalPage] = React.useState(0);
    const [totalCount, setTotalCount] = React.useState(0);
    const [findText, setFindText] = useState('');
    useEffect(() => {
        getBrandList(page, pageSize);
    }, [])
    const handleOpen = () => {
        setOpen(!open);
    }

    async function addToBrands(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const brandName = formData.get('brand_name')
        const brandDescription = formData.get('brand_description')
        const response = await apiService.post(CREATE_BRAND_API, {
            name: brandName, description: brandDescription
        })
        if (response.status == 200) {
            alert('ثبت برند موفق بود');
            await getBrandList(page, pageSize);
        }
    }

    async function getBrandList(page: number, pageSize: number) {
        setPage(page);
        setPageSize(pageSize);
        let  filter = {};
        if(findText) {
            filter = {
                BrandName: findText
            }
        }
        const response = await apiService.get(GET_BRAND_API,
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
                const newList = (list.items as Array<any>).map(el=>{
                    return {...el, id:el.brandId}
                });
                setBrandList(newList);
                setTotalPage(list.totalPages);
                setTotalCount(list.totalPageCount);
                setTotalCount(list.totalCount);
            }
        }
    }
    async  function deleteItem(id: string) {
        const response = await apiService.delete(
            DELETE_BRAND_API,
            {
                params : {
                    id: id
                }
            },
        );
        if (response.status == 204) {
            alert('برند حذف شد')
            getBrandList(page, pageSize);
            setIsOpenDelete(!isOpenDelete);
        }
    }

    return (
        <DefaultLayout>
            <Head>
                <title>مدیریت برندها</title>
            </Head>
            <div className="flex mb-5 justify-between site-font">
                <h1 className={'text-lg font-bold site-font'}>مدیریت برندها</h1>
                <Button
                    className='px-2 py-1 text-white site-font bg-indigo-400 hover:bg-indigo-500 duration-500'
                    onClick={() => handleOpen()}
                    variant="text"
                    size={'small'}
                >
                    افزودن برند
                </Button>
            </div>

            <Dialog  open={open}  onClose={handleOpen} dir={'rtl'}>
                <DialogTitle className='site-font' id="alert-dialog-title">
                    افزودن برند
                </DialogTitle>
                <DialogContent className={'flex justify-center'}>
                    <form onSubmit={addToBrands} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col gap-6" dir={'rtl'}>
                            <TextField
                                variant={'standard'}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                name={'brand_name'}
                                label={'نام برند'}
                                size="small"
                                inputProps={{className: 'site-font'}}
                                InputLabelProps={{ className: 'site-font focus:translate-x-0' }}
                                required
                            />
                            <TextField
                                variant={'standard'}
                                className=" !border-t-blue-gray-200 focus:!border-t-gray-900 site-font"
                                name={'brand_description'}
                                label={'توضیحات'}
                                multiline
                                rows={4}
                                inputProps={{className: 'site-font'}}
                                InputLabelProps={{ className: 'site-font', dir: 'rtl' }}
                                required
                            />
                        </div>

                        <Button
                            size={'small'}
                            type={'submit'}
                            className='mt-6 px-3 py-2 rounded-md text-white site-font bg-red-500 hover:bg-red-600 duration-500'
                        >
                            افزودن
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
                data={brandList}
                columns={columns}
                totalPage={totalPage}
                page={page}
                size={pageSize}
                onDelete={(id) => {
                    setSelectedId(id);
                    setIsOpenDelete(!isOpenDelete)
                }}
                onPageChange={(event) => {
                    console.log(event.size)
                    getBrandList(event.page, event.size)
                }}
                onSearch={(text)=>{
                    setFindText(text);
                    getBrandList(page, pageSize);
                }}
                totalCount={totalCount}
            />
            <ConfirmDialog
                isOpen={isOpenDelete}
                title={'حذف برند'}
                message={'آیا از حذف برند مطمئن هستید؟'}
                onConfirm={() => deleteItem(selectedId)}
                onCancel={() => setIsOpenDelete(!isOpenDelete)}
            ></ConfirmDialog>
        </DefaultLayout>
    )
}

export default Brands;