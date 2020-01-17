import React from 'react';

import './backDrop.scss';
import { IonClickSideBar } from '../../interfaces/header';

const backDrop = (props: IonClickSideBar) => (
    <div className="backdrop" onClick={props.onClickClose} />
);

export default backDrop;
