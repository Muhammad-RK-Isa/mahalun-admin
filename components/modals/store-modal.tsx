"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useStoreModal from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal";
import { Form } from "@/components/ui/form";

const storeFormSchema = z.object({
    name: z.string().min(1, "Store name is required"),
});

const StoreModal = () => {

    const form = useForm<z.infer<typeof storeFormSchema>>({
        resolver: zodResolver(storeFormSchema),
        defaultValues: {
            name: "",
        }
    });

    const onSubmit = async (data: z.infer<typeof storeFormSchema>) => {
        console.log(data);
    };

    const { isOpen, onClose } = useStoreModal();

    return (
        <Modal
            title="Create store"
            description="Add a new store to manage products and categories."
            isOpen={isOpen}
            onClose={onClose}
        >

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>

                </form>
            </Form>
        </Modal>
    )
}

export default StoreModal;