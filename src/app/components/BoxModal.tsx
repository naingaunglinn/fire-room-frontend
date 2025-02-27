import { CartData } from "@/types";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Form,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
  } from "@heroui/react";
import axios from "axios";
import { FormEvent, useState } from "react";

  interface BoxModalProp {
    isOpen: boolean,
    onOpenChange: (isOpen:boolean) => void
    fame: CartData | undefined
  }
  
const BoxModal = ({isOpen, onOpenChange, fame}:BoxModalProp) => {
  const baseURL = process.env.NEXT_PUBLIC_BACKEND_URL
  const [errors, setErrors] = useState({});
  const [emailError, setEmailError] = useState('');

  const createOrder = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(fame);
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
        <Modal backdrop='blur' isOpen={isOpen} onOpenChange={onOpenChange} className="text-black">
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Purchase Fame
                </ModalHeader>
                <Form  
                  className="w-full flex flex-col gap-3"
                  validationErrors={errors}
                  onSubmit={createOrder}                    
                >
                <ModalBody className="w-full flex flex-col gap-3">
                <Input
                  isRequired
                  errorMessage={emailError}
                  label="Name"
                  classNames={{
                    label: "!text-black !font-bold" // Replace with your desired color
                  }}
                  labelPlacement="outside"
                  name="name"
                  placeholder="Display name for Hall Of Fame."
                  type="text"
                  className="text-black"
                />
                <Card className="max-w-[400px] bg-orange">
                    <CardHeader className="flex gap-3">
                      <div className="flex flex-col">
                        <p className="text-md text-black font-bold">{fame?.name}</p>
                      </div>
                    </CardHeader>
                    <Divider />
                    <CardBody>
                      <p>{fame?.biography}</p>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <p>${fame?.price}</p>
                    </CardFooter>
                </Card>
                </ModalBody>
                <ModalFooter>
                  <Button className="bg-orange text-black" type="submit">
                    Submit
                  </Button>
                  <Button color="danger" className="text-red" variant="light" onPress={onClose}>
                    Close
                  </Button>
                </ModalFooter>
                </Form>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
  }

export default BoxModal;
  