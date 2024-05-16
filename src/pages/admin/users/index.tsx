import DefaultLayout from "@/app/admin/layout";
import {SortableTable} from "@/app/components/Tables/SortableTable";
import React, {FormEvent, useEffect, useState} from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import {DataTableColumn} from "@/types/data-table";
import {ConfirmDialog} from "@/app/components/confirm-dialog";
import Head from "next/head";
import {Autocomplete, TextField} from "@mui/material";
import {User} from "@/utils/user";
import {useRouter} from "next/router";
import {UserModel, UserRole} from "@/types/user.types";
import {UserService} from "@/services/user.service";
import {getHubList} from "@/services/hub.service";
import {HubModel} from "@/types/hub.types";

const columns: DataTableColumn[] = [
    {label: 'نام کاربری', name: 'username'},
    {label: 'نام', name: 'firstName'},
    {label: 'نام خانوادگی', name: 'lastName'},
    {label: 'نقش کاربری', name: 'userRoles'},
    {label: 'ایمیل', name: 'email'},
    {label: 'کاربر', name: 'hubName'},
    {label: 'شماره تلفن', name: 'phoneNubmer'},
    {label: 'کد پستی', name: 'postalCode'},
    {label: 'آدرس', name: 'address'},
]
const defaultUser: UserModel = {
    id: '',
    firstName: '',
    lastName: '',
    phoneNubmer: '',
    username: '',
    userRoles: [],
    postalCode: '',
    hubId: '',
    hubName: '',
    email: '',
    address: '',
}
type HubList = (Omit<HubModel, 'name'>&{label: string})[] ;
type UserRoleList = (Omit<UserRole, 'name'>&{label: string})[] ;
const Users = () => {
    const router = useRouter();
    const userService = new UserService();
    const [open, setOpen] = React.useState(false);
    const [userList, setUserList] = React.useState<any[]>([]);
    const [isOpenDelete, setIsOpenDelete] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState<string>('');
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(5);
    const [totalPage, setTotalPage] = React.useState(0);
    const [totalCount, setTotalCount] = React.useState(0);
    const [findText, setFindText] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [selectedUser, setSelectedUser] = useState<UserModel>(defaultUser);
    const [userRole, setUserRole] = useState<Partial<UserRole>&{label: string}>();
    const [currentUserRole, setCurrentUserRole] = useState<string>("");
    const [openPages, setOpenPages] = useState(false);
    const [hubList, setHubList] = useState<HubList>([]);
    const [selectedHub, setSelectedHub] = useState<Partial<HubModel>&{label: string}>();
    const [userRoles, setUserRoles] = useState<UserRoleList>([]);
    async function navigate() {
        await router.push('/admin/users/manager-users');
    }
    useEffect(() => {
        const user = new User();
        setCurrentUserRole(user.getRole());
        fetchHubList('');
        fetchUserRole("")
    }, []);
    function fetchUserRole(role: string) {
        userService.getUserRoles(1, 100, role).then((resp)=>{
            if (resp) {
                const formatted: UserRoleList = resp.items.map(el => {
                    const {name, ...value} = el;
                    return {
                        ...value,
                        label: name,
                    }
                });
                setUserRoles(formatted)
            }
        });
    }
    function fetchHubList(findText: string) {
        getHubList(1, 100, findText).then((resp)=>{
            if (resp) {
                const formatted: HubList = resp.items.map(el=>{
                    const {name, ...value} = el;
                    return {
                        ...value,
                        label: name
                    }
                })
                setHubList(formatted);
            }
        })
    }
    useEffect(() => {
        if (currentUserRole == 'Manager') {
            navigate()
        } else if (currentUserRole == 'Admin'){
            callGetUserList(page, pageSize);
        }
    }, [currentUserRole])
    const handleOpen = () => {
        setOpen(!open);
        setEditMode(false);
        setSelectedUser(defaultUser)
    }
    const handlePagesOpen = () => {
        setOpenPages(!openPages);
    }

    async function addToUsers(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget);
        let payload: Partial<UserModel> = {
            firstName: formData.get('firstName')?.toString(),
            lastName: formData.get('firstName')?.toString(),
            username: formData.get('firstName')?.toString(),
            address: formData.get('firstName')?.toString(),
            postalCode: formData.get('firstName')?.toString(),
            email: formData.get('email')?.toString(),
            phoneNubmer: formData.get('phoneNubmer')?.toString(),
            hubId: selectedHub?.id,
            userRoles: [
                userRole?.id ?? ''
            ]
        }
        userService.createUser(payload);
    }

    async function callGetUserList(page: number, pageSize: number) {
        setPage(page);
        setPageSize(pageSize);
        const response = await userService.getUserList(page, pageSize);
        if (response) {
            setUserList(response.items);
            setTotalPage(response.totalPages);
            setTotalCount(response.totalCount);
        }
    }

    async function deleteItem(id: string) {
        userService.deleteUser(id).then((result)=>{
            if (result) {
                alert('کاربر حذف شد')
                callGetUserList(page, pageSize);
                setIsOpenDelete(!isOpenDelete);
            }
        });
    }
    return (
        <DefaultLayout>
            <Head>
                <title>مدیریت کاربران</title>
            </Head>
            <div className="flex mb-5 justify-between site-font">
                <h1 className={'text-lg font-bold site-font'}>مدیریت کاربران</h1>
                <Button
                    className='px-2 py-1 text-white site-font bg-indigo-400 hover:bg-indigo-500 duration-500'
                    onClick={() => handleOpen()}
                    variant="text"
                    size={'small'}
                >
                    افزودن کاربر
                </Button>
            </div>

            <Dialog
                open={openPages}
                onClose={handlePagesOpen}
                dir={'rtl'}
                className={''}
                fullWidth={true}
                maxWidth={'xl'}
            >
                <DialogTitle className={'site-font'}>
                    مدیریت ویژگی های صفحه کاربر
                </DialogTitle>
                <DialogContent>

                </DialogContent>
                <DialogActions>
                    <Button
                        variant="text"
                        color="error"
                        onClick={handlePagesOpen}
                        className="mr-1 site-font"
                    >
                        <span>انصراف</span>
                    </Button>
                </DialogActions>
            </Dialog>

            <Dialog
                open={open}
                onClose={handleOpen}
                dir={'rtl'}
                className={'z-9999'}
                fullWidth={true}
                maxWidth={'lg'}

            >
                <DialogTitle className='site-font' id="alert-dialog-title">
                    {editMode?'ویرایش کاربر':'افزودن کاربر'}
                </DialogTitle>
                <DialogContent className={'flex justify-center'}>
                    <form onSubmit={addToUsers} className="mt-8 mb-2 w-full">
                        <div className="mb-1 flex flex-col gap-6" dir={'rtl'}>
                            <div className="flex flex-wrap">
                                <div className="w-1/2 p-2">
                                    <TextField
                                        variant={'standard'}
                                        className="grow !border-t-blue-gray-200 w-full focus:!border-t-gray-900 site-font"
                                        name={'firstName'}
                                        label={'نام'}
                                        size="small"
                                        inputProps={{className: 'site-font'}}
                                        InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                        required
                                        defaultValue={selectedUser.firstName ?? ''}
                                    />
                                </div>
                                <div className="w-1/2 p-2">
                                    <TextField
                                        variant={'standard'}
                                        className="grow !border-t-blue-gray-200 w-full focus:!border-t-gray-900 site-font"
                                        name={'lastName'}
                                        label={'نام خانوادگی'}
                                        size="small"
                                        inputProps={{className: 'site-font'}}
                                        InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                        required
                                        defaultValue={selectedUser.lastName ?? ''}
                                    />
                                </div>
                                <div className="w-1/2 p-2">
                                    <TextField
                                        variant={'standard'}
                                        className="grow !border-t-blue-gray-200 w-full focus:!border-t-gray-900 site-font"
                                        name={'phoneNubmer'}
                                        label={'شماره تلفن'}
                                        size="small"
                                        inputProps={{className: 'site-font'}}
                                        InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                        required
                                        defaultValue={selectedUser.phoneNubmer ?? ''}
                                    />
                                </div>
                                <div className="w-1/2 p-2">
                                    <TextField
                                        variant={'standard'}
                                        className="grow !border-t-blue-gray-200 w-full focus:!border-t-gray-900 site-font"
                                        name={'email'}
                                        label={'ایمیل'}
                                        size="small"
                                        inputProps={{className: 'site-font'}}
                                        InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                        required
                                        defaultValue={selectedUser.email ?? ''}
                                        type={'email'}
                                    />
                                </div>
                                <div className="w-1/2 p-2">
                                    <TextField
                                        variant={'standard'}
                                        className="grow !border-t-blue-gray-200 w-full focus:!border-t-gray-900 site-font"
                                        name={'postalCode'}
                                        label={'کد پستی'}
                                        size="small"
                                        inputProps={{className: 'site-font'}}
                                        InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                        required
                                        defaultValue={selectedUser.postalCode ?? ''}
                                        type={'text'}
                                    />
                                </div>
                                <div className="w-1/2 p-2">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        slotProps={{paper: {className: 'site-font'}}}
                                        onChange={(event, value, reason, details) => {
                                            if (value) {
                                                setSelectedHub(value);
                                            }
                                        }}
                                        onInput={(event) => {
                                            fetchHubList((event.target as any)?.value)
                                        }}
                                        options={hubList}
                                        renderInput={(params) => <TextField {...params} label="مرکز فروش"/>}
                                    />
                                </div>
                                <div className="w-1/2 p-2">
                                    <Autocomplete
                                        disablePortal
                                        id="combo-box-demo"
                                        slotProps={{paper: {className: 'site-font'}}}
                                        onChange={(event, value, reason, details) => {
                                            if (value) {
                                                setUserRole(value);
                                            }
                                        }}
                                        onInput={(event) => {
                                            fetchUserRole((event.target as any)?.value)
                                        }}
                                        options={userRoles}
                                        renderInput={(params) => <TextField {...params} label="نقش کاربر"/>}
                                    />
                                </div>
                                <div className="w-full p-2">
                                    <TextField
                                        variant={'standard'}
                                        className=" !border-t-blue-gray-200 w-full focus:!border-t-gray-900 site-font"
                                        name={'address'}
                                        label={'آدرس'}
                                        multiline
                                        rows={2}
                                        size="small"
                                        inputProps={{className: 'site-font'}}
                                        InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                                        required
                                        defaultValue={selectedUser.address ?? ''}
                                    />
                                </div>

                            </div>
                        </div>

                        <Button
                            size={'small'}
                            type={'submit'}
                            className='mt-6 px-3 py-2 rounded-md text-white site-font bg-red-500 hover:bg-red-600 duration-500'
                        >
                            {editMode ? 'اعمال تغییرات' : 'افزودن'}
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
                disableMenu={false}
                data={userList}
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
                    callGetUserList(event.page, event.size)
                }}
                onEdit={(user) => {
                    setEditMode(true);
                    setOpen(true);
                    setSelectedUser(user);
                }}
                onSearch={(text) => {
                    setFindText(text);
                    callGetUserList(page, pageSize);
                }}
                totalCount={totalCount}
            />
            <ConfirmDialog
                isOpen={isOpenDelete}
                title={'حذف مشتری'}
                message={'آیا از حذف کاربر مطمئن هستید؟'}
                onConfirm={() => deleteItem(selectedId)}
                onCancel={() => setIsOpenDelete(!isOpenDelete)}
            ></ConfirmDialog>
        </DefaultLayout>
    )
}

export default Users;