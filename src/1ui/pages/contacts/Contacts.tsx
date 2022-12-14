import React from 'react';
import BgBlock from "../../components/bgBlock/BgBlock";
import faq from "../../../assets/faq.png";
import Map from "../../components/map/Map";

const Contacts = () => {
    return (
        <div>
            <BgBlock image={faq} imgText="cat" title="contacts page" desc="some text"/>
            <Map/>
        </div>
    );
};

export default Contacts;