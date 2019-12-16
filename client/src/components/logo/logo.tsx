import React from 'react';

import logoWhite from '../../assets/logo/logo_white.png';
import logoGray from '../../assets/logo/logo_gray.png';
import './logo.scss';
import { Link } from 'react-router-dom';
import { IBlackVariantProps } from '../../interfaces';

const Logo = (props: IBlackVariantProps) => (
    <Link to={'/'}>

        <div>
            {props.blackVariant ? (
                <img src={logoGray} alt="Visit Hagi" className="logo" />
            ) : (
                    <img src={logoWhite} alt="Visit Hagi" className="logo" />
                )
            }
        </div>
    </Link>
);

export default Logo;
