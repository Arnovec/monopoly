import FieldAngel from "./Field/FieldAngel"
import FieldPlace from "./Field/FieldPlace"
import FieldWithImg from "./Field/FieldWithImg"
import LeftFieldPlace from "./Field/LeftFieldPlace"
import LeftFieldWithImg from "./Field/LeftFieldWithImg"
import RigthFieldPlace from "./Field/RigthFieldPlace"
import RigthFieldWithImg from "./Field/RigthFieldWithImg"

export default function GameFields() {
    const placeFieldIds = [1, 3, 6, 8, 9, 11, 13, 14, 16, 18, 19, 21, 23, 24, 26, 27, 29, 31, 32, 34, 37, 39];
    const FieldWithImgIds = [2, 4, 5, 7, 12, 15, 17, 22, 25, 28, 33, 35, 36, 38];

    const upFieldsrow = [];
    const downFieldsrow = [];
    const leftFieldsrow = [];
    const rigthFieldsrow = [];
    for (let i = 21; i < 30; i++) {
        if (placeFieldIds.includes(i)) {
            upFieldsrow.push(<FieldPlace key={i} name={`Место ${i}`} cost="Цена" />)
        } else if (FieldWithImgIds.includes(i)) {
            upFieldsrow.push(<FieldWithImg key={i} name={`Место ${i}`} cost="Цена" />)
        }
    }
    for (let i = 9; i > 0; i--) {
        if (placeFieldIds.includes(i)) {
            downFieldsrow.push(<FieldPlace key={i} name={`Место ${i}`} cost="Цена" />)
        } else if (FieldWithImgIds.includes(i)) {
            downFieldsrow.push(<FieldWithImg key={i} name={`Место ${i}`} cost="Цена" />)
        }
    }
    for (let i = 19; i > 10; i--) {
        if (placeFieldIds.includes(i)) {
            leftFieldsrow.push(<LeftFieldPlace key={i} name={`Место ${i}`} cost="Цена" />)
        } else if (FieldWithImgIds.includes(i)) {
            leftFieldsrow.push(<LeftFieldWithImg key={i} name={`Место ${i}`} cost="Цена" />)
        }
    }
    for (let i = 31; i < 40; i++) {
        if (placeFieldIds.includes(i)) {
            rigthFieldsrow.push(<RigthFieldPlace key={i} name={`Место ${i}`} cost="Цена" />)
        } else if (FieldWithImgIds.includes(i)) {
            rigthFieldsrow.push(<RigthFieldWithImg key={i} name={`Место ${i}`} cost="Цена" />)
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