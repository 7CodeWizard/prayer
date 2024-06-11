import React, { useEffect } from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';

const ToastRegister = ({ setState, message }) => {


    const hideToast = () => {
        setTimeout(() => {
            setState()
        }, 5000);
    };

    useEffect(() => {
        hideToast();
    }, []);

    return (
        <Toast isOpen={message ? true : false}>
            <ToastHeader icon='danger'>
                Dear Maya
            </ToastHeader>
            <ToastBody>
                {message}
            </ToastBody>
        </Toast>
    );
}

export default ToastRegister;
