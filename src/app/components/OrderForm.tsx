import axios from "@/lib/axios";
import { CartData, DrawerSize } from "@/types";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Button, Form, Input } from "@heroui/react"
import { useState, FormEvent } from "react";

    interface OrderFormProps {
        cartData: CartData[]
        setPurchase: (isPurchase:boolean) => void
        handleDrawerOpen: (size: DrawerSize['size']) => void
    }

const OrderForm = ({cartData, setPurchase, handleDrawerOpen}:OrderFormProps) => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
    const [errors, setErrors] = useState({});
    const [emailError, setEmailError] = useState('');
    console.log(cartData);
    const createOrder = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(cartData);
        const formData = new FormData(event.currentTarget)
        axios.post(`${baseURL}/api/order/create`, formData)
        .then((response) => {
        console.log(response);
        })
        .catch((error) => {
        const errorData = error.response.data;
        setErrors(errorData.errors);
        setEmailError(errorData.errors.email);
        });
    };  

    return (
        <>
        <Form
            validationErrors={errors}
            onSubmit={createOrder}
            className="min-w-[500px] mx-auto gap-4"
        >
            <Input
                isRequired
                errorMessage={emailError}
                label="Name"
                classNames={{
                label: "!text-black !font-bold" // Replace with your desired color
                }}
                labelPlacement="outside"
                name="name"
                placeholder="name for Hall Of Fame."
                type="text"
                className="text-black"
            />
            <Input
                isRequired
                errorMessage={emailError}
                label="Username"
                classNames={{
                label: "!text-black !font-bold" // Replace with your desired color
                }}
                labelPlacement="outside"
                name="username"
                placeholder="name for room"
                type="text"
                className="text-black"
            />
            <div className="flex w-full gap-4 justify-between">
                <Button className=" bg-white text-black" onPress={() => (setPurchase(false), handleDrawerOpen("md"))}>
                    <ArrowLongLeftIcon />
                </Button>
                <Button className="bg-orange text-white" type="submit">
                    Order
                </Button>
            </div>
        </Form>
        </>
    )
}

export default OrderForm;