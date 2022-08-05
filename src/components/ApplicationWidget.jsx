import React from 'react';
import { Divider } from 'antd';

import styles from './ApplicationWidget.module.css';
import Buttons from './ApplicationWidget_buttons';

import user from '../img/User.jpg';
import { ReactComponent as Upload } from '../icons/Upload.svg';
import { ReactComponent as Download } from '../icons/Download.svg';
import { ReactComponent as Pdf } from '../icons/Pdf.svg';
import { ReactComponent as Edit } from '../icons/Edit.svg';
import { ReactComponent as ClockRed } from '../icons/ClockRed.svg';
import { ReactComponent as ClockYellow } from '../icons/ClockYellow.svg';
import { ReactComponent as Refresh } from '../icons/Refresh.svg';
import { ReactComponent as Success } from '../icons/Success.svg';
import { ReactComponent as Arrow } from '../icons/Arrow.svg';


import UserInfoBlock from './UserInfoBlock';
import ContactField from './ContactField';

const cardsButtons = {
    realtor: {
        pay: [{ type: 'primary', text: 'Оплатить' }, { type: 'regular', text: 'Редактировать', Icon: <Edit /> }],
        edit: [{ type: 'regular', text: 'Редактировать', Icon: <Edit /> }],
        endReport: [{ type: 'blockWithButton', text: 'Оценочный отчет', Icon: <Pdf />, ButtonIcon: <Upload />, buttonBg: '#4DB663', borderColor: '#4DB663' }, { type: 'regular', text: 'Завершить заявку' }],
        verification: [{ type: 'status', text: 'Заявка на проверке', bgColor: 'rgba(244, 183, 26, 0.08)', Icon: <ClockYellow /> }],
        inProcess: [{ type: 'status', text: 'Заявка в работе', bgColor: 'rgba(31, 155, 208, 0.08)', Icon: <Refresh /> }],
        completeApplication: [{ type: 'blockWithButton', text: 'Заявку вернули на доработку, просмотрите замечания!', bgColor: 'rgba(244, 79, 90, 0.08)', ButtonIcon: <Arrow />, iconColor: '#fff', buttonBg: '#F44F5A', borderColor: 'none' }],
        verification__WithEdit: [{ type: 'status', text: 'Заявка на проверке', bgColor: 'rgba(244, 183, 26, 0.08)', Icon: <ClockYellow />, iconColor: '#F4B71A' }, { type: 'regular', text: 'Редактировать', Icon: <Edit /> }],
    },
    valuer: {
        takeWork: [{ type: 'primary', text: 'Взять в работу', fontSize: 18 }],
        uploadReport: [{ type: 'primary', text: 'Загрузить отчет', Icon: <Upload /> }, { type: 'regular', text: 'Вернуть на доработку' }],
        uploadReport__disabled: [{ type: 'primary', text: 'Загрузить отчет', Icon: <Upload />, disabled: true }, { type: 'regular', text: 'Вернуть на доработку', disabled: true }],
        inProcess: [{ type: 'status', text: 'Оценочный отчет отправлен', bgColor: '#F1FAF3', Icon: <Success /> }],
    },
    valuerAdmin: {
        sendToValuer: [{ type: 'primary', text: 'Отправить оценщику' }, { type: 'regular', text: 'Вернуть на доработку' }],
        sentToValuer: [{ type: 'status', text: 'Отправлена оценщику', bgColor: '#F1FAF3', Icon: <Success /> }],
        sendToValuer__disabled: [{ type: 'primary', text: 'Отправить оценщику', disabled: true }, { type: 'regular', text: 'Вернуть на доработку', disabled: true }],
        onAdjustment: [{ type: 'status', text: 'На корректировке', bgColor: 'rgba(244, 79, 90, 0.08)', Icon: <ClockRed />, iconColor: '#F44F5A' }],
    }
}

const ApplicationWidget = (props) => {

    const { role, type, subtitle, borrower, rieltor } = props;

    const buttons = cardsButtons[role][type];


    return (
        <div className={styles.wrapper}>
            <div className={styles.contactWrapper}>
                {
                    <UserInfoBlock {...borrower}  role='Заёмщик' />
                }
            </div>

            <div className={styles.contactFieldsWrapper}>
                {
                    borrower.contacts.map(item => {
                        return <ContactField type={item.type} text={item.text} />
                    })
                }

            </div>

            <Divider className={styles.divider} />

            <div className={styles.contactWrapper}>
                <UserInfoBlock role='Риэлтор' {...rieltor} />
            </div>

            <div className={styles.contactFieldsWrapper}>
            {
                    rieltor.contacts.map(item => {
                        return <ContactField type={item.type} text={item.text} />
                    })
                }
            </div>

            <Divider className={styles.divider} />

            {
                buttons.map(item => {
                    return (
                        <div className={styles.buttonWrapper}>
                            <Buttons {...item} subtitle={subtitle} />
                        </div>
                    )
                })
            }

        </div>
    )
}

export default ApplicationWidget; 