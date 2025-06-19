import React, {FC, JSX} from "react";
import './user-list.css'

interface Props {
    children: JSX.Element[] | JSX.Element;
}

const UserList: FC<Props> = ({children}) => {
    if (!Array.isArray(children)) {
        children = [children];
    }
    return (
        <div className={'user-list'}>
            <ul>
                {children.map(user => <li>{user}</li>)}
            </ul>
        </div>
    );
}

export default UserList;