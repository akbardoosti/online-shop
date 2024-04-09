import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    Drawer,
    IconButton, Switch,
    Typography
} from "@material-tailwind/react";
import React from "react";
import Slider from "rc-slider";
import 'rc-slider/assets/index.css';

function Icon({ id, open }:{id: any, open: any}) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}
interface ModalProps {
    isOpen: boolean,
    closeDrawer: (isOpen: boolean) => void
}
const ProductFilter: React.FC<ModalProps> = (
    {
        isOpen,
        closeDrawer
    }) => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value: any) => setOpen(open === value ? 0 : value);

    const closeDrawerBottom = () => {
        closeDrawer(false)
    }
    return (
        // <React.Fragment>

        <Drawer
            placeholder
            onPointerEnterCapture
            onPointerLeaveCapture
            placement="bottom"
            open={isOpen}
            onClose={closeDrawerBottom}
            className="p-4"
            size={1020}
        >
            <div className="mb-6 flex items-center justify-between">
                <Typography
                    placeholder
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    variant="h5"
                    color="blue-gray"
                    className='site-font'
                >
                        <span className="site-font">
                            فیلتر براساس
                        </span>
                </Typography>
                <IconButton
                    placeholder
                    onPointerEnterCapture
                    onPointerLeaveCapture
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
            <Accordion
                placeholder
                onPointerEnterCapture
                onPointerLeaveCapture
                open={open === 1} icon={<Icon id={1} open={open}/>}>
                <AccordionHeader
                    placeholder
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    onClick={() => handleOpen(1)}>
                        <span className="site-font text-sm">
                            دسته بندی
                        </span>
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion
                placeholder
                onPointerEnterCapture
                onPointerLeaveCapture
                open={open === 2} icon={<Icon id={2} open={open}/>}>
                <AccordionHeader
                    placeholder
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    onClick={() => handleOpen(2)}>
                        <span className="site-font text-sm">
                            برند
                        </span>
                </AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>
            <Accordion
                placeholder
                onPointerEnterCapture
                onPointerLeaveCapture
                open={open === 3} icon={<Icon id={3} open={open}/>}>
                <AccordionHeader
                    placeholder
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    onClick={() => handleOpen(3)}>
                        <span className="site-font text-sm">
                            محدوده قیمت
                        </span>
                </AccordionHeader>
                <AccordionBody>
                    <div className="p-3">
                        <div className="w-full">
                            <Slider range min={0} max={9000000}/>
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
            <div className='flex justify-between w-full'>
                <label htmlFor="in-stock-goods" className='site-font'>
                    فقط کالاهای موجود
                </label>
                <Switch
                    id='in-stock-goods'
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    crossOrigin
                />
            </div>
            <div className='flex justify-between w-full'>
                <label htmlFor="free-shipping" className='site-font'>
                    فقط کالاهای ارسال رایگان
                </label>
                <Switch
                    id='free-shipping'
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    crossOrigin
                />
            </div>
            <div className='flex justify-between w-full'>
                <label htmlFor="immediate-shipping" className='site-font'>
                    ارسال فوری
                </label>
                <Switch
                    id='immediate-shipping'
                    className='flex justify-between w-full'
                    onPointerEnterCapture
                    onPointerLeaveCapture
                    crossOrigin
                    />
            </div>
        </Drawer>
        // </React.Fragment>
    )
}
export default ProductFilter;