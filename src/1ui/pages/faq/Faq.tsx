import React from 'react';
import BgBlock from "../../components/bgBlock/BgBlock";
import faq from "../../../assets/faq.png";

const Faq = () => {
    return (
        <div>
            <BgBlock image={faq} imgText="cat" title="Frequently  Asked  Question(s)" desc="some text"/>
        </div>
    );
};

export default Faq;