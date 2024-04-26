import Tooltip from '@mui/material/Tooltip';
import Input from '@mui/material/Input';

import React from "react";
import {FormControl, InputAdornment, InputLabel, MenuItem, TextField} from "@mui/material";
import {DeleteOutline, EditOutlined, SearchOutlined,} from "@mui/icons-material";
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';

const pagesCount = [
    10, 25, 50, 100
]

interface Prop {
    columns: Array<{ name: string, label: string }>,
    data: Array<any>,
    page: number,
    size: number,
    totalPage: number,
    totalCount: number,
    onDelete?: (id: string) => void,
    onEdit?: (id: string) => void,
    onPageChange?: ({page, size}: { page: number, size: number }) => void,
    onSearch?: (text: string) => void
}

export function SortableTable(
    {
        columns = [],
        onEdit,
        totalPage,
        page,
        onDelete,
        size,
        data = [],
        onPageChange,
        totalCount,
        onSearch
    }: Prop) {
    return (
        <div className="h-full w-full">
            <div className="p-3 flex">
                <div className="flex grow items-center justify-between gap-4 md:flex-row pt-4">
                    <Input
                        startAdornment={
                            <InputAdornment position="start">
                                <SearchOutlined/>
                            </InputAdornment>
                        }
                        placeholder={'جستجو'}
                        className={'site-font w-full'}
                        onInput={(event) => {
                            var text = (event.target as any)?.value;
                            if (text) {
                                onSearch ? onSearch(text) : '';
                            } else {
                                onSearch ? onSearch('') : '';
                            }
                        }}

                        type={'text'}
                    />

                    <TextField
                        id="standard-select-currency"
                        select
                        defaultValue="10"
                        variant="standard"
                        className={'min-w-10'}
                        inputProps={{className: 'site-font min-w-10'}}
                        InputLabelProps={{className: 'site-font focus:translate-x-0'}}
                        onChange={(event) => {
                            onPageChange ? onPageChange({page, size: parseInt(event.target.value)}) : ''
                        }}
                        aria-invalid={false}
                    >
                        {pagesCount.map((option, index) => (
                            <MenuItem key={index} value={option} className={'site-font'}>
                                {option}
                            </MenuItem>
                        ))}
                    </TextField>
                </div>
            </div>
            <div className="rounded-none text-center font-bold mb-4 mt-2">
                <h6 className={'site-font flex gap-1 justify-center'}>
                    <span>تعداد کل رکوردها:</span>
                    {totalCount}
                </h6>
            </div>
            <div className="overflow-auto px-0">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                    <tr>
                        {columns.map((head, index) => (
                            <th
                                key={head.name}
                                className="site-font text-start cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                            >
                                {head.label}{" "}
                            </th>
                        ))}
                        <th
                            className="site-font cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                        >
                            عملیات
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map(
                        (rawData: any, index) => {
                            const isLast = index === data.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";


                            return (
                                <tr key={rawData['id'] ?? Math.random().toString()}>

                                    {columns.map((column, ind) => {
                                        return <td className={classes} key={ind}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                            <span
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {rawData[column.name]}
                                            </span>
                                                </div>
                                            </div>
                                        </td>
                                    })}
                                    <td className={classes}>
                                        <Tooltip
                                            className={'site-font'}
                                            title="ویرایش"
                                            arrow
                                        >
                                            <IconButton
                                                color={'primary'}
                                            >
                                                <EditOutlined/>
                                            </IconButton>
                                        </Tooltip>
                                        <Tooltip
                                            className={'site-font'}
                                            title="حذف "
                                            arrow
                                            PopperProps={{
                                                className: 'site-font'
                                            }}
                                        >
                                            <IconButton
                                                color={'error'}
                                                onClick={() => onDelete ? onDelete(rawData['id']) : ''}
                                            >
                                                <DeleteOutline/>
                                            </IconButton>
                                        </Tooltip>
                                    </td>
                                </tr>
                            );
                        },
                    )}
                    </tbody>
                </table>
            </div>
            <div className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <span className="font-normal flex gap-1 site-font">
                <span>صفحه</span>
                    <span>{page}</span>
                    <span>              از</span>
                    <span>{totalPage}</span>
                </span>

                <div className="flex gap-2 site-font">
                    <Button
                        variant="outlined"
                        className={'site-font'}
                        size="small"
                        disabled={page == 1}
                        onClick={() => onPageChange ? onPageChange({page: page - 1, size}) : ''}
                    >
                        قبلی
                    </Button>
                    <Button
                        variant="outlined"
                        className={'site-font'}
                        size="small"
                        onClick={() => onPageChange ? onPageChange({page: page + 1, size}) : ''}
                        disabled={page == totalPage}
                    >
                        بعدی
                    </Button>
                </div>
            </div>
        </div>
    );
}