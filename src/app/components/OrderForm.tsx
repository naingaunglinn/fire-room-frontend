import axios from "@/lib/axios";
import { CartData, DrawerSize } from "@/types";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { Button, Divider, Form, Input } from "@heroui/react"
import { useState, FormEvent } from "react";

    interface OrderFormProps {
        cartData: CartData[]
        setPurchase: (isPurchase:boolean) => void
        handleDrawerOpen: (size: DrawerSize['size']) => void
    }

const OrderForm = ({cartData, setPurchase, handleDrawerOpen}:OrderFormProps) => {
    const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
    const [errors, setErrors] = useState({});
    const [nameError, setNameError] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [isCheckOut, setCheckOut] = useState(false);
    console.log(cartData);
    console.log(isCheckOut, 'working');

    const createOrder = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(cartData);
        const formData = new FormData(event.currentTarget)
        formData.append('product', JSON.stringify(cartData));
        console.log(formData);
        axios.post(`${baseURL}/api/order/create`, formData)
        .then((response) => {
            console.log(response);
            setCheckOut(true);
            setName(response.data.name);
            setUsername(response.data.username);
        })
        .catch((error) => {
            console.log(error);
            const errorData = error.response.data;
            setErrors(errorData.errors);
            setNameError(errorData.errors.name);
            setUsernameError(errorData.errors.username);
        });
    };  

    return (
        <>
        {!isCheckOut ? (
            <Form
                validationErrors={errors}
                onSubmit={createOrder}
                className="min-w-[500px] mx-auto gap-4"
            >
                <Input
                    errorMessage={nameError}
                    label="Name"
                    classNames={{
                    label: "!text-black !font-bold" // Replace with your desired color
                    }}
                    defaultValue={name}
                    labelPlacement="outside"
                    name="name"
                    placeholder="name for Hall Of Fame."
                    type="text"
                    className="text-black"
                />
                <Input
                    errorMessage={usernameError}
                    label="Username"
                    classNames={{
                    label: "!text-black !font-bold" // Replace with your desired color
                    }}
                    labelPlacement="outside"
                    name="username"
                    defaultValue={username}
                    placeholder="name for room"
                    type="text"
                    className="text-black"
                />
                <div className="flex w-full gap-4 justify-between">
                    <Button className=" bg-white text-black" onPress={() => (setPurchase(false), handleDrawerOpen("md"))}>
                        <ArrowLongLeftIcon />
                    </Button>
                    <Button className="bg-orange text-white" type="submit">
                        Check Out
                    </Button>
                </div>
            </Form>
        ) : (
            <div
                className="max-w-[500px] mx-auto gap-4 flex flex-col"
            >

                <p className="text-black font-bold text-[20px] text-justify"> Great! You will need to deposit 0.0015 BTC into <span className="bg-black text-orange p-1">[btc address]</span> within 30 minutes timeframe to buy this item.</p>
                <Divider />
                <div className="min-w-[500px] mx-auto flex flex-row gap-2 justify-between text-black font-bold">
                    <p>Display name is <span className="text-orange">{name}</span>.</p>
                </div>
                <div className="min-w-[500px] mx-auto flex flex-row gap-2 justify-between text-black font-bold">
                    <p>Username is <span className="text-orange">{username}</span>.</p>
                </div>
                <Divider />
                <div className="flex w-full gap-4 justify-center">
                    <Button className="bg-black text-white" onPress={() => console.log('checked out')}>
                        Cancel
                    </Button>
                    <Button className="bg-orange text-white" onPress={() => console.log('checked out')}>
                        Proceed
                    </Button>
                </div>
            </div>
        )}
        </>
    )
}

export default OrderForm;