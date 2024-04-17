import {
    Drawer,
    IconButton,
    List,
    ListItem,
    Typography
} from "@material-tailwind/react";
import React from "react";
import 'rc-slider/assets/index.css';

const SortByFilter: React.FC<ModalProps> = (
    {
        isOpen,
        closeDrawer
    }) => {
    const closeDrawerBottom = () => {
        closeDrawer(false)
    }
    const [selected, setSelected] = React.useState(1);
    const setSelectedItem = (value: any) => {
        setSelected(value);
        closeDrawer(false)
    }
    function onCLick() {

    }
    return (
        <>
            <Drawer
                placeholder=''
                onPointerEnterCapture={onCLick}
                onPointerLeaveCapture={onCLick}
                placement="bottom"
                open={isOpen}
                onClose={closeDrawerBottom}
                className="p-4 overflow-y-auto"
                size={300}
            >
                <div className="mb-6 flex items-center justify-between">
                    <Typography
                        placeholder=''
                        onPointerEnterCapture={onCLick}
                        onPointerLeaveCapture={onCLick}
                        variant="h5"
                        color="blue-gray"
                        className='site-font'
                    >
                        <span className="site-font">
                            مرتب سازی براساس
                        </span>
                    </Typography>
                    <IconButton
                        placeholder=''
                        onPointerEnterCapture={onCLick}
                        onPointerLeaveCapture={onCLick}
                        variant="text"
                        color="blue-gray"
                        onClick={closeDrawerBottom}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>
                <div className="flex w-full">
                    <List
                        placeholder=''
                        onPointerEnterCapture={onCLick}
                        onPointerLeaveCapture={onCLick}
                        className='w-full site-font'
                    >
                        <ListItem
                            placeholder=''
                            onPointerEnterCapture={onCLick}
                            onPointerLeaveCapture={onCLick}
                            selected={selected === 1} onClick={() => setSelectedItem(1)}>
                            پرتخفیف ترین
                        </ListItem>
                        <ListItem
                            placeholder=''
                            onPointerEnterCapture={onCLick}
                            onPointerLeaveCapture={onCLick}
                            selected={selected === 2} onClick={() => setSelectedItem(2)}>
                            جدیدترین
                        </ListItem>
                        <ListItem
                            placeholder=''
                            onPointerEnterCapture={onCLick}
                            onPointerLeaveCapture={onCLick}
                            selected={selected === 3} onClick={() => setSelectedItem(3)}>
                            پرفروش ترین
                        </ListItem>
                        <ListItem
                            placeholder=''
                            onPointerEnterCapture={onCLick}
                            onPointerLeaveCapture={onCLick}
                            selected={selected === 3} onClick={() => setSelectedItem(3)}>
                            ارزان ترین
                        </ListItem>
                        <ListItem
                            placeholder=''
                            onPointerEnterCapture={onCLick}
                            onPointerLeaveCapture={onCLick}
                            selected={selected === 3} onClick={() => setSelectedItem(3)}>
                            گران ترین
                        </ListItem>
                        <ListItem
                            placeholder=''
                            onPointerEnterCapture={onCLick}
                            onPointerLeaveCapture={onCLick}
                            selected={selected === 3} onClick={() => setSelectedItem(3)}>
                            پربیننده ترین
                        </ListItem>
                    </List>
                </div>
            </Drawer>
        </>
    )
}

interface ModalProps {
    isOpen: boolean,
    closeDrawer: (isOpen: boolean) => void
}

export default SortByFilter;