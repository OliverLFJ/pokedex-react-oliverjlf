import { useCallback, useEffect } from 'react'

const ShowModal = (props) => {
    const { onClose } = props;
    const closeOnEscapeKeyDown = useCallback((e) => {
        if ((e.charCode || e.keyCode) === 27) {
            onClose();
        }
    }, [onClose]);
    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, [closeOnEscapeKeyDown]);
}

export default ShowModal