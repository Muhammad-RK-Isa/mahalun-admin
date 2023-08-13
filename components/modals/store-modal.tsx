"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import useStoreModal from "@/hooks/use-store-modal";
import Modal from "@/components/ui/modal";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
            <div>
                <div className="space-y-4 py-2 pb-4">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Root and Raiment" {...field} />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />

                            <div className="w-full flex justify-end items-center pt-6 space-x-2">
                                <Button
                                    variant="outline"
                                    onClick 
                                >
                                    Cancel
                                </Button>
                                <Button>
                                    Continue
                                </Button>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </Modal>
    )
}

export default StoreModal;