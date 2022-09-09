import React from 'react'
import { KvIcon } from '@kelvininc/react-ui-components'

export default function Header() {

    return(
        <div className="header">
            <div className="header-logo">
                <KvIcon 
                    name="kv-logo-kelvin"
                    customClass="icon icon-full-size"
                    className="kelvin-logo"
                />
            </div>
        </div>
    )

}