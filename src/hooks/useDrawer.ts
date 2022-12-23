import {useState} from 'react';

interface IUseDrawerResult {
    isOpen: boolean;
    openDrawer: () => void;
    closeDrawer: () => void;
}

export const useDrawer = (): IUseDrawerResult => {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return {
        isOpen: open,
        openDrawer: handleDrawerOpen,
        closeDrawer: handleDrawerClose,
    };
};
