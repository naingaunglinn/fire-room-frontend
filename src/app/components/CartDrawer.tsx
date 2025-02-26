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
  } from "@heroui/react";
  
  const CartDrawer = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
      <>
        <Button className="fixed left-8 sm:left-20 bottom-20 p-0 bg-orange" onPress={onOpen}><ShoppingCartIcon className="size-6 text-white" /></Button>
        
        <Drawer isOpen={isOpen} onOpenChange={onOpenChange}>
          <DrawerContent>
            {(onClose) => (
              <>
                <DrawerHeader className="flex flex-col gap-1 text-black font-bold">Product List</DrawerHeader>
                <DrawerBody>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                  <Card className="max-w-[400px] min-h-[200px] bg-orange">
                      <CardHeader className="flex gap-3">
                        <div className="flex flex-col">
                          <p className="text-md text-white font-bold">Apple</p>
                        </div>
                      </CardHeader>
                      <Divider />
                      <CardBody className="text-black font-bold">
                        <p>The Apple Hall of Fame is an informal term used to recognize influential figures, products, or innovations that have significantly shaped Apple&apos;s legacy. This includes iconic devices like the iPhone, Macintosh, and iPod, as well as key personalities such as Steve Jobs, Steve Wozniak, and Tim Cook. While Apple does not have an official Hall of Fame, the term is often used by enthusiasts and tech historians to celebrate Apple&apos;s most groundbreaking contributions to the industry.</p>
                      </CardBody>
                      <Divider />
                      <CardFooter>
                        <p className="text-white font-bold">$300</p>
                      </CardFooter>
                  </Card>
                </DrawerBody>
                <DrawerFooter>
                  <Button className="bg-black text-white" onPress={onClose}>
                    Close
                  </Button>
                  <Button className="bg-orange text-white" onPress={onClose}>
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
  