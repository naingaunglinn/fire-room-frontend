import { CartData } from "@/types";
import { TrashIcon } from "@heroicons/react/16/solid";
import { ShoppingCartIcon } from "@heroicons/react/16/solid";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerBody,
    DrawerFooter,
    Button,
    useDisclosure,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Divider,
    Badge,
  } from "@heroui/react";

  interface cartProp {
    cartData: CartData[]
    setCart: (Fame:CartData[]) => void
  }
  
  const CartDrawer = ({cartData, setCart}:cartProp) => {

    console.log(cartData, "I'm here.");
    
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const productCount = Object.keys(cartData).length;
    const disable = productCount > 0 ? false : true;

    console.log(disable);

    const removeProduct = (id:number) => {
      const updatedCart = cartData.filter(cartItem => cartItem.id !== id);
      setCart(updatedCart);
    }

    return (
      <>
      
        <Button className="fixed left-8 sm:left-20 bottom-20 p-0 bg-orange" onPress={onOpen}>
          <Badge className="text-black bg-transparent border-none font-bold" content={productCount}>
            <ShoppingCartIcon className="size-6 text-white" />
          </Badge>
        </Button>
      
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1 text-black font-bold">Product List</DrawerHeader>
                <DrawerBody>
                  {(productCount > 0) ? (cartData && cartData.map(({id,name,price,biography},index) => (
                      <Card key={index} className="max-w-[400px] min-h-[200px] bg-orange">
                        <CardHeader className="flex gap-3">
                          <div className="flex flex-col">
                            <p className="text-md text-white font-bold">{name}</p>
                          </div>
                        </CardHeader>
                        <Divider />
                        <CardBody className="text-black font-bold">
                          <p>{biography}</p>
                        </CardBody>
                        <Divider />
                        <CardFooter className="flex justify-between">
                          <p className="text-white font-bold">${price}</p>
                          <Button className=" bg-white text-black font-bold" onPress={() => removeProduct(id)}>
                            <TrashIcon className="size-4 text-black" /> Remove
                          </Button>
                        </CardFooter>
                    </Card>
                    ))) : (
                      <p className="text-red-500 font-bold">No products available</p>
                    )
                  }
                  
                </DrawerBody>
                <DrawerFooter>
                  <Button className="bg-black text-white" onPress={onClose}>
                    Close
                  </Button>
                  <Button className="bg-orange text-white" isDisabled={disable} onPress={onClose}>
                    Purchase
                  </Button>
                </DrawerFooter>
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  export default CartDrawer;
  