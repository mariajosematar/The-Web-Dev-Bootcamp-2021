import React from 'react';
import CardContainer from "../Shared/CardContainer";
import {Container, FlexContainer} from "../../../GlobalStyle";
import Facifoto from "../../../assets/img/shared/Facifoto.png";
import {Contact, JobTitle, LocationText, Message} from "./style";
import Location from "../../../assets/img/location.svg"


const FacilitiesCard = ({userName, jobTitle}) => {
    return (
        <CardContainer
            title='FACILITIES'
        >
            <FlexContainer
                direction='row'
                marginTop={{xxl: '5px'}}
                border={{bottom: true}}
                paddingBottom={{xxl: '22px'}}
            >
                <img className='me-3' src={Facifoto} alt='contact'/>
                <FlexContainer
                    direction='column'
                >
                    <Contact>{userName}</Contact>
                    <JobTitle>{jobTitle}</JobTitle>
                </FlexContainer>
                <Container className='ms-auto'>
                    <LocationText className='float-start m-0'>BA</LocationText>
                    <img className='mb-1 ms-1' src={Location} alt="location"/>
                </Container>
            </FlexContainer>
            <Message className='mb-0'>Por cualquier duda sobre esta sección puedes contactarme por medio de MS
                Teams</Message>
        </CardContainer>
    );
};

export default FacilitiesCard;