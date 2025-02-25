'use client'
import Button from "./Button";

const Main = () => {
    return (
        <div>
            <p  className="text-6xl font-bold mb-5">
                Fire <span className="text-orange">Room</span>
            </p>
            <Button onClick={() => console.log('Clicked')} className="p-5 bg-orange text-xl font-bold hover:bg-white hover:text-orange">Conact Us</Button> 
        </div>
    )
}

export default Main;