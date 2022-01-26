import { useContext } from "react";
import { Context } from "../pages/Context";
import { getClass } from "./getClass";
import Image from "./Image";

export function Photos() {

    const { allPhotos } = useContext(Context)


    return (
        <main className="photos">
            {allPhotos.map((img, index) => {
                return <Image key={img.id} img={img} className={getClass(index)} />
            })}
        </main>
    );
}
