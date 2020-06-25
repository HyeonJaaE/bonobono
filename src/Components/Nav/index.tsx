import * as React from 'react';

type navTypes = {
    navProp: string
}

const Nav = ({navProp} : navTypes) => {
    return(
        <div>
            {navProp}
        </div>
    )
}

export default Nav;