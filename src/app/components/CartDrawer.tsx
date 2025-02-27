import { CartData, DrawerSize } from "@/types";
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
import { useState } from "react";
import OrderForm from "./OrderForm";

  interface cartProp {
    cartData: CartData[]
    setCart: (Fame:CartData[]) => void
  }
  
  const CartDrawer = ({cartData, setCart}:cartProp) => {

    console.log(cartData, "I'm here.");
    const [isPurchase, setPurchase] = useState(false);
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const productCount = Object.keys(cartData).length;
    const disable = productCount > 0 ? false : true;
    const totalPrice = cartData.reduce(function(a:number,b:CartData) { return a + Number(b.price) }, 0);
    const [size, setSize] = useState<DrawerSize['size']>("md");
    const drawerTitle = isPurchase ? 'Order Page' : 'Product List';

    console.log(totalPrice);
    console.log(disable);

    const removeProduct = (id:number) => {
      const updatedCart = cartData.filter(cartItem => cartItem.id !== id);
      setCart(updatedCart);
    }

    const createPurchase = () => {
      setPurchase(true);
      setSize("full");
      console.log(true);
    }

    const handleDrawerOpen = (size: DrawerSize['size']) => {
      setSize(size);
      onOpen();
    };

    return (
      <>
      
        <Button className="fixed left-8 sm:left-20 bottom-20 p-0 bg-orange" onPress={() => handleDrawerOpen(size)}>
          <Badge className="text-black bg-transparent border-none font-bold" content={productCount}>
            <ShoppingCartIcon className="size-6 text-black" />
          </Badge>
        </Button>
        <Drawer isOpen={isOpen} size={size} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1 text-black font-bold">{drawerTitle}</DrawerHeader>
                {isPurchase ? (
                  <DrawerBody>
                    <OrderForm cartData={cartData} setPurchase={setPurchase} handleDrawerOpen={handleDrawerOpen}/>
                  </DrawerBody>
                ) : (
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
                        <p className="text-orange font-bold">No products available</p>
                      )
                    }
                  </DrawerBody>
                )}
                {productCount > 0 && (
                <div className="font-bold">
                  <div className="w-full flex flex-row gap-2 px-6 py-4 justify-between text-black">
                    <p>Total Price</p>
                    <p>${totalPrice}</p>
                  </div>
                  <Divider />
                  <div className="w-full flex flex-row gap-2 px-6 py-4 justify-between text-black">
                    <p>Total Quantity</p>
                    <p>{productCount} Qty</p>
                  </div>
                </div>
                )}
                {!isPurchase && (
                <DrawerFooter>
                  <Button className="bg-black text-white" onPress={onClose}>
                    Close
                  </Button>
                  <Button className="bg-orange text-white" isDisabled={disable} onPress={() => (handleDrawerOpen('full'), createPurchase())}>
                    Purchase
                  </Button>
                </DrawerFooter>
                )}
              </>
            )}
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  export default CartDrawer;
  