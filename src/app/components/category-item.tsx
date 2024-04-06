import Image from "next/image";
import Link from "next/link";

const CategoryItem = (props: any) => {
    return (
        <>
            <div className="flex flex-col grow justify-center items-center">
                <Link href={props.url??''} className="text-center">
                    <div className="flex flex-col p-1 drop-shadow-md drop-shadow-xl  bg-amber-50 w-20 h-20 rounded-lg" >
                        <Image 
                            src={props.image} 
                            alt={props.name}
                            style={{maxWidth: '100%', height: 'auto'}}
                        />
                    </div>
                    <span className="my-2 site-font">
                        {props.name}
                    </span>
                </Link>
            </div>
            
        </>
    )
}
export default CategoryItem;