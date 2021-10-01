import { buildQueries } from '@testing-library/dom'
import React from 'react'
import { isCompositeComponentWithType } from 'react-dom/test-utils'
import styles from './Uutiset.module.css';

export default function Luetuimmat() {
    return (
        <div style={{
            backgroundColor: "white",
            width:"308px",
        }}>
            <div style={{fontSize: "22px", lineHeight: "24.2px"}}>Luetuimmat</div>
            <div style={{fontSize: "28px", lineHeight: "30.8px"}}>1 <em><b>ASUMINEN |</b> Asunnot kallistuvat koko ajan lisää - Jotkut ovat jopa huolissaan</em></div>
            <div style={{fontSize: "28px", lineHeight: "30.8px"}}>2 <em><b>AUTOT |</b> Teemu Selänteen upouusi ferrari jäi jumiin nelostiellä - "Vituttamaanhan se pistää"</em></div>
            <div style={{fontSize: "28px", lineHeight: "30.8px"}}>3 <em><b>KOULUTUS |</b> Energiatekniin insinöörit työpulassa: "Olen etsinyt töitä kivienkin alta, ilman minkäänlaista menestystä"</em></div>
            <div style={{fontSize: "28px", lineHeight: "30.8px"}}>4 <em><b>JÄÄKIEKKO |</b> Jere Lehtisestä Leijonien uusi päävalmentaja: "Olen erittäin innostunut tästä tilaisuudesta nostaa joukkueen takaisin huipulle, minne se kuuluu"</em></div>
            <div style={{fontSize: "28px", lineHeight: "30.8px"}}>5 <em><b>PUOLUSTUSVOIMAT</b> | Morttien motivaatio ennätysmatalalla - Sotkukaan ei enään kiinnosta ketään</em></div>
            <div style={{fontSize: "28px", lineHeight: "30.8px"}}>6 <em><b>VAPAA-AIKA |</b> Frisbeegolffi on valittu vuosisadan harrastukseksi - Pelaajat innoissaan</em></div>
        </div>
    )
}
