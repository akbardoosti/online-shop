import React from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
interface Prop {
    isOpen: boolean,
    title: string,
    message: string,
    yes?: string,
    no?: string,
    onConfirm?: (flag: boolean) => void,
    onCancel?: (flag: boolean) => void,
}
export function ConfirmDialog (
    {
        isOpen = false,
        title = '',
        message='',
        yes = 'بله',
        no = 'خیر',
        onCancel,
        onConfirm
    }: Prop): React.JSX.Element {

    return (
        <>
            <Dialog
                dir={'rtl'}
                open={isOpen}
                onClose={() => onCancel}
            >
                <DialogTitle className={'site-font'}>{title}</DialogTitle>
                <DialogContent className={'site-font'}>
                    {message}
                </DialogContent>
                <DialogActions>
                    <Button
                        variant="text"
                        size={'small'}
                        onClick={() =>onCancel?onCancel(true):''}
                        className="mr-1 site-font bg-red-500 hover:bg-red-600 text-white duration-500"
                    >
                        <span>{no}</span>
                    </Button>
                    <Button
                        variant="text"
                        size={'small'}
                        className="mr-1 site-font bg-green-500 hover:bg-green-600 text-white duration-500"
                        onClick={() =>onConfirm?onConfirm(true):''}>
                        <span>{yes}</span>
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}