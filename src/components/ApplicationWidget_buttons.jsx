import React from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const ButtonTemplate = styled(Button)`
width: 100%;  
height: 48px;
border-radius: 8px;

&.withIcon {
    display: flex;
    align-items: center;
    justify-content: center;
}

&.withIcon span {
    margin-left: 12px;
}

&[disabled] {
    opacity: 0.56;
}

`

const PrimaryStyled = styled(ButtonTemplate)`
border: none;
background: #4db663 !important;
color: #fff !important;
font-size: ${props => props.fontSize || 16}px;
font-weight: 700;
`

const OrdinaryStyled = styled(ButtonTemplate)`
font-size: 16px;
color: #2b2b2b !important;
background: #fff !important;
border: 1px solid #BCBEC0 !important;
`

const StatusStyled = styled(ButtonTemplate)`
border: none;
background: ${props => props.bgColor || '#fff'} !important;
color: #2B2B2B !important;
font-size: 16px;
`

const BlockWithButtonStyled = styled.div`
border: 1px solid ${props => props.borderColor || '#000'};
background: ${props => props.bgColor || '#fff'} !important;
color: #fff !important;
font-size: ${props => props.fontSize || 16}px;
font-weight: 400;
border-radius: 8px;
display: flex;
justify-content: space-between;
align-items: center;
height: 64px;

& .left {
padding: 8px 16px;
display: flex;
align-items: center;
}

& .title {
    width: 100%;
    font-size: 16px;
    color: #2B2B2B;
}

& .subtitle {
    width: 100%;
    color: #7A7A7A;
    transform: translateY(-2px);
    font-size: 14px;
}

& .withIcon .text {
    margin-left: 12px;
}

& .left svg {
    min-width: 30px;
}

& .right {
    height: 100%;
    border-radius: 8px;
    width: 64px;
}

& .button {
    height: 100%;
    width: 100%;
    border: none !important;
    position: relative;
    border-radius: 8px;
    background: ${props => props.buttonBg || '#000'};
}

& .button svg {
transform: translateY(2px)
}
`


const Primary = (props) => {

    const { text, fontSize, Icon, disabled } = props;

    return (<PrimaryStyled className={Icon && 'withIcon'}
                           fontSize={fontSize}
                           disabled={disabled}>{Icon} {text}</PrimaryStyled>);

}

const Regular = (props) => {
    debugger


    const { text, Icon, fontSize, disabled } = props;

    return (<OrdinaryStyled className={Icon && 'withIcon'}
                            fontSize={fontSize}
                            disabled={disabled}>{Icon} {text}</OrdinaryStyled>);

}

const Status = (props) => {

    const { text, Icon, bgColor, iconColor, disabled } = props;

    return (<StatusStyled className={Icon && 'withIcon'}
                          iconColor={iconColor}
                          bgColor={bgColor}
                          disabled={disabled}>{Icon} {text}</StatusStyled>);

}

const BlockWithButton = (props) => {

    const { ButtonIcon, Icon, text, subtitle, bgColor, buttonBg, borderColor, disabled, iconColor } = props;

    return (<BlockWithButtonStyled  iconColor={iconColor}
                                    bgColor={bgColor}
                                    disabled={disabled}
                                    borderColor={borderColor}
                                    buttonBg={buttonBg}>
                                        <div className={`left ${Icon && 'withIcon'}`}>
                                            {Icon}
                                            <div className="text">
                                                <p className={'title'}>{text}</p>
                                                {subtitle && <p className={'subtitle'}>{subtitle}</p>}
                                            </div>
                                        </div>
                                        <div className={'right'}><Button className={'button'}>{ButtonIcon}</Button></div>
                                        </BlockWithButtonStyled>);
}

const ApplicationWidget_buttons = (props) => {
    
    const {type} = props;

    if(type === 'regular') {
        return <Regular {...props} />
    } else if(type === 'status') {
        return <Status {...props} />
    } else if(type === 'blockWithButton') {
        return <BlockWithButton {...props} />
    } else if (type === 'primary') {
        return <Primary {...props} />
    }
}

export default ApplicationWidget_buttons;