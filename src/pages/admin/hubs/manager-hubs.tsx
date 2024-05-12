import DefaultLayout from "@/app/admin/layout";
import {SortableTable} from "@/app/components/Tables/SortableTable";
import React, {useEffect, useState} from "react";
import {DataTableColumn} from "@/types/data-table";
import apiService from "@/services/api-service";
import {ConfirmDialog} from "@/app/components/confirm-dialog";
import Head from "next/head";
import {User} from "@/utils/user";
import {useRouter} from "next/router";
import {HubAPI} from "@/constants/api.consts";
const columns: DataTableColumn[] = [
    {label: 'نام', name: 'name'},
    {label: 'لوکیشن', name: 'location'},
    {label: 'شماره تلفن', name: 'phoneNumber'},
    {label: 'آدرس', name: 'address'},
]
const Hubs = () => {
    const router = useRouter();
    const [hubList, setHubList] = React.useState<any[]>([]);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState<string>('');
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(5);
    const [totalPage, setTotalPage] = React.useState(0);
    const [totalCount, setTotalCount] = React.useState(0);
    const [findText, setFindText] = useState('');
    const [userRole, setUserRole] = useState('');
    async function navigate() {
        await router.push('/admin/hubs');
    }
    useEffect(() => {
        const user = new User();
        setUserRole(user.getRole());
    }, []);
    useEffect(() => {
        if (userRole == 'Admin') {
            navigate()
        } else if (userRole == 'Manager'){
            getHubList(page, pageSize);
        }
    }, [userRole])

    async function getHubList(page: number, pageSize: number) {
        setPage(page);
        setPageSize(pageSize);
        let filter = {};
        if (findText) {
            filter = {
                FirstName: findText
            }
        }
        const url = HubAPI.GET_MANAGER
        const response = await apiService.get(
            url,
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
            HubAPI.DELETE,
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
                <h1 className={'text-lg font-bold site-font'}>لیست مراکز فروش</h1>
            </div>

            <SortableTable
                disableMenu={true}
                data={hubList}
                columns={columns}
                totalPage={totalPage}
                page={page}
                size={pageSize}
                onDelete={(id) => {
                    // alert(id)
                    setSelectedId(id);
                    setIsOpenDelete(!isOpenDelete)
                }}
                onPageChange={(event) => {
                    getHubList(event.page, event.size)
                }}
                onSearch={(text) => {
                    setFindText(text);
                    getHubList(page, pageSize);
                }}
                totalCount={totalCount}
                menuItems={[
                ]}
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