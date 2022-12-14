import React from 'react';
import car from '../../../assets/car1.png'
import BgBlock from "../../components/bgBlock/BgBlock";
import BlueBlockLine from "../../components/blueBlockLine/BlueBlockLine";
import WohnungUmziehen from '../../../assets/WohnungUmziehen.jpg'
import BuroUmziehen from '../../../assets/BüroUmziehen.jpg';
import LandBewegt from '../../../assets/LandBewegt.jpg';
import DienstleistungenDerLader from '../../../assets/Uslugi-gruzchikov-kak-biznes.jpg';
import SachenPacken from '../../../assets/pac.jpg';
import TransportVonMöbelnUndSachen from '../../../assets/gruz.jpg';
import MontageDemontageМonMöbeln from '../../../assets/kuechenmontage-jh-umzuege-und-transporte.jpg';
import LieferungVonBestellungenVonFürOnlineShops from '../../../assets/shutterstock_1900026697-scaled.jpg';
import gruzoperevozkiVeschey from '../../../assets/gruzoperevozki-veschey.jpg';
import {Container, Paper, Typography} from '@mui/material';
import cl from './Home.module.css';
import WhyAreWe from "../../components/ whyAreWe/WhyAreWe";
import HaveQuestions from "../../components/haveQuestions/HaveQuestions";

const arrServiceliste = {
    'ZIEHEN UM': [
        {title: 'Wohnung umziehen', img: WohnungUmziehen, link: 'string'},
        {title: 'Büro umziehen', img: BuroUmziehen, link: 'string'},
        {title: 'Land bewegt', img: LandBewegt, link: 'string'},
        {title: 'Услуги грузчиков', img: DienstleistungenDerLader, link: 'string'},
        {title: 'Упаковка вещей', img: SachenPacken, link: 'string'},
        {title: 'Перевозка мебели и вещей', img: TransportVonMöbelnUndSachen, link: 'string'},
        {title: 'Перевозка вещей', img: gruzoperevozkiVeschey, link: 'string'},
    ],
    'TRANSPORT': [
        {title: 'Wohnung umziehen', img: WohnungUmziehen, link: 'string'},
        {title: 'Büro umziehen', img: BuroUmziehen, link: 'string'},
        {title: 'Land bewegt', img: LandBewegt, link: 'string'},
        {title: 'Wohnung umziehen', img: WohnungUmziehen, link: 'string'},
        {title: 'Büro umziehen', img: BuroUmziehen, link: 'string'},
        {title: 'Land bewegt', img: LandBewegt, link: 'string'},
    ],
    'SERVICES': [
        {title: 'сборка\ разборка мебели', img: MontageDemontageМonMöbeln, link: 'string'},
        {
            title: 'доставка заказов из\для интернет магазинов',
            img: LieferungVonBestellungenVonFürOnlineShops,
            link: 'string'
        },
        {title: 'Büro umziehen', img: BuroUmziehen, link: 'string'}
    ]
}
const Home = () => {
    return (
        <div>
            {/*<p>home, Stadt Schwäbisch Hall,Palada  Eil Transporte</p>*/}
            <BgBlock image={car} imgText="Car" title="rund um die uhr 24\7 auch feiertags"/>
            <Container>
                <Paper className={cl.textBlock}>
                    <Typography variant='h3' className={cl.title}>
                        Complete cargo transportation
                    </Typography>
                    <Typography variant='h6'  className={cl.subtitle}>
                        Products and services
                    </Typography>
                    <Typography>
                        PET arranges for you the delivery of full loads by road or combined transport, regardless of the
                        location of your company. We transport goods throughout Europe, as well as from all European
                        countries to Russia, Central Asia, North Africa, the Middle East and back.

                        Our main specialization is the transport of secure and packaged goods, for industries such as
                        household goods, woodworking, paper, chemical, metalworking, automotive and electrical
                        industries.
                    </Typography>
                </Paper>
                <WhyAreWe/>
            </Container>
            <BlueBlockLine title={'Serviceliste'} arr={arrServiceliste}/>
            <HaveQuestions/>
        </div>
    );
};

export default Home;