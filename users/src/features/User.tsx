import React, {FC} from "react";
import './user.css'

interface Props {
    name: string;
}

const User: FC<Props> = ({name}) => {
    return (
        <span className={'user'}>{name}</span>
    );
}

export default User;