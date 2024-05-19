import { ReactNode } from "react";

interface props {
    children: ReactNode;
}

const Title: React.FC<props> = (props) =>  {
    return (
        <h1 className='flex justify-center my-6'>
            {props.children}
        </h1>
    )
}

export default Title;