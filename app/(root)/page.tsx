"use client";

import { useEffect } from "react";

import StoreModal from "@/components/modals/store-modal";
import useStoreModal from "@/hooks/use-store-modal";

const page = () => {

    const {onOpen, isOpen} = useStoreModal();

    useEffect(() => {
        if (!isOpen) {
            onOpen();
        }
    }, [onOpen, isOpen])
    

    return (
        <div>
            This is the root page.
            <StoreModal/>
        </div>
    );
};

export default page;