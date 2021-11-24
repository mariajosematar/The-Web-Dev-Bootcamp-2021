import React from 'react'
import { FlexContainer } from '../../../GlobalStyle';
import { PrimaryText, SecondaryText } from './style';
import CardContainer from "../Shared/CardContainer";
import Chair from "../../../assets/img/equipment/chair.png";
import Headset from "../../../assets/img/equipment/headset.png";
import Display from "../../../assets/img/equipment/display.png";
import Cooler from "../../../assets/img/equipment/cooler.png";
import Mouse from "../../../assets/img/equipment/mouse.png";
import Keyboard from "../../../assets/img/equipment/keyboard.png";

const Equipment = ({ items }) => {

    const EquipmentItem = ({ key, title, img }) => {
        return (
            <FlexContainer
                border={{ bottom: true }}
                className='item-list'
                verticalAlign='end'
                paddingTop={{ xxl: '12px' }}
                paddingBottom={{ xxl: '12px' }}
                >
               <div><img className='me-3' src={img} alt={key} /></div> 
               <FlexContainer>
                <PrimaryText>
                    {title}
                </PrimaryText>
               </FlexContainer>
            </FlexContainer>

        );
    };

    const equipment = [
        { id: 1, title: 'Silla de Trabajo', img: Chair },
        { id: 2, title: 'Auriculares - Headset', img: Headset },
        { id: 3, title: 'Monitor Extra', img: Display },
        { id: 4, title: 'Cooler', img: Cooler },
        { id: 5, title: 'Mouse', img: Mouse },
        { id: 6, title: 'Teclado', img: Keyboard },

    ];

    return (
        <CardContainer
            title='EQUIPAMIENTO'
            actionLink='/prueba'
            actionName='MyITS'
            height='100%'
        >
            <SecondaryText>¿Te hace falta algo para tu trabajo?</SecondaryText>
            {equipment.map(equipment => (
                <EquipmentItem
                    key={equipment.id}
                    title={equipment.title}
                    img={equipment.img}
                />
            ))}
        </CardContainer>
    );
};

export default Equipment;
