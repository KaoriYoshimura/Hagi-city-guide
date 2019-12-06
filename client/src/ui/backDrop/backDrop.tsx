import React from 'react';

import './backDrop.scss';
import { IonClickSideBar } from '../../interfaces/interfaces';

const backDrop = (props: IonClickSideBar) => (
    <div className="backdrop" onClick={props.onClickClose} />
);

export default backDrop;
