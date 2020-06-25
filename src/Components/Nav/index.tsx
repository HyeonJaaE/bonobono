import * as React from 'react';

type navTypes = {
    name: string
}

const Nav = ({name} : navTypes) => {
    return(
        <div>
            {name}
        </div>
    )
}

export default Nav;