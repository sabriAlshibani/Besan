import { ReactNode } from "react";

type ChildrenContainer = {
    children: ReactNode;
    classNames?: string; 
};

function Container({ children, classNames }: ChildrenContainer) {
    return (
        <div className={`px-20 mx-auto md:w-[750px] lg:w-[1170px]  ${classNames || ""}`}>
            {children}
        </div>
    );
}

export default Container;
