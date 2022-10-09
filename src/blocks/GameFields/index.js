import React from 'react';
import FieldAngel from "./Field/FieldAngel"
import Field from './Field/Field';
import ImgContent from './Field/ImgContent';
import StreetContent from './Field/StreetContent';
import Realtyes from './Realtyes';

export default function GameFields() {
    const placeFieldIds = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39];
    const FieldWithImgIds = [2, 4, 5, 7, 12, 15, 17, 22, 25, 28, 33, 35, 36, 38];

    const upFieldsrow = [];
    const downFieldsrow = [];
    const leftFieldsrow = [];
    const rigthFieldsrow = [];
    for (let i = 21; i < 30; i++) {
        if (placeFieldIds.includes(i)) {
            upFieldsrow.push(
                <Field direction="">
                    <StreetContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        } else if (FieldWithImgIds.includes(i)) {
            upFieldsrow.push(
                <Field direction="">
                    <ImgContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        }
    }
    for (let i = 9; i > 0; i--) {
        if (placeFieldIds.includes(i)) {
            downFieldsrow.push(
                <Field direction="" key={i}>
                    <StreetContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        } else if (FieldWithImgIds.includes(i)) {
            downFieldsrow.push(
                <Field direction="" key={i}>
                    <ImgContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        }
    }
    for (let i = 19; i > 10; i--) {
        if (placeFieldIds.includes(i)) {
            leftFieldsrow.push(
                <Field direction="left" key={i}>
                    <StreetContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        } else if (FieldWithImgIds.includes(i)) {
            leftFieldsrow.push(
                <Field direction="left" key={i}>
                    <ImgContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        }
    }
    for (let i = 31; i < 40; i++) {
        if (placeFieldIds.includes(i)) {
            rigthFieldsrow.push(
                <Field direction="right" key={i}>
                    <StreetContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        } else if (FieldWithImgIds.includes(i)) {
            rigthFieldsrow.push(
                <Field direction="right" key={i}>
                    <ImgContent key={i} name={`${Realtyes[1].streeatName}`} cost={Realtyes[1].costCard}/>
                </Field>
            )
        }
    }

    return (
        <div className="game">
            <div>
                <div className="row">
                    <FieldAngel />
                    {upFieldsrow}
                    <FieldAngel />
                </div>
                <div className="row">
                    <div className="column">
                        {leftFieldsrow}
                    </div>
                    <div className="big_place"></div>
                    <div className="column">
                        {rigthFieldsrow}
                    </div>
                </div>
                <div className="row">
                    <FieldAngel />
                    {downFieldsrow}
                    <FieldAngel />
                </div>
            </div>
        </div>
    )
}