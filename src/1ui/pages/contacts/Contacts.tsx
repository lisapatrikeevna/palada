import React, {useEffect, useState} from 'react';
import BgBlock from "../../components/bgBlock/BgBlock";
import faq from "../../../assets/faq.png";
import Map from "../../components/map/Map";
import {Loader} from "@googlemaps/js-api-loader";

const Contacts = () => {
    const google = window.google
    let [startPositionlatitude, setStartPositionlatitude] = useState<number>(0)
    let [startPositionlongitude, setStartPositionlongitude] = useState<number>(0)
    const [point1, setPoint1] = useState('')
    const [point2, setPoint2] = useState('')
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            setStartPositionlatitude(position.coords.latitude)
            setStartPositionlongitude(position.coords.longitude)
            console.log("position", position.coords);
        })
    }, [])
// const google=
//     var chicagot = new google.maps.LatLng(startPositionlatitude, startPositionlongitude);
    const loader = new Loader({
        // apiKey: "foo",
        // apiKey: "",
        apiKey: "AIzaSyApaAEnzpuAzHciDWNr6X7CmCUKMlEdBAQ",
        // apiKey: "AIzaSyAU8oDXI7k_aN52oFslAvE4Ufip3OSnuh4",//perevozilca apiKey
        version: "weekly",
        libraries: ["places"]
    });
    console.log("coordinat", ` ${startPositionlatitude}`, typeof (Number(`${startPositionlatitude}`)));
    console.log("coordinat2", {startPositionlongitude});
    // const mapOptions = {center: {lat: 55.7522200, lng: 37.6155600}, zoom: 10};
    // const mapOptions = {center: { lat:`Number(${startPositionlatitude})`,lng: `Number(${startPositionlongitude})`}, zoom: 13};
    const mapOptions = {center: {lat: 49.0525467, lng: 9.7388022}, zoom: 13};
    useEffect(() => {
        loader.loadCallback((e: any) => {
            let map = document.getElementById("map") as HTMLElement
            if (e) {
                console.log(e);
            } else if (startPositionlongitude !== 0 && map !== null) {
                // } else if (typeof(map)==="number"&&startPositionlongitude!==0) {
                console.log(map);
                new google.maps.Map(map, mapOptions);
            }
        });
    }, [startPositionlatitude, startPositionlongitude])
    const resInputVal = (e:any) => {
    // const resInputVal = (e:ChangeEventHandler<HTMLInputElement>) => {
        console.log("resInputVal", e);
        setPoint1(e.curentTarget.value)
    }
    const options = {
        types: ['address'],
    };
    // var autocomplete = new google.maps.places.Autocomplete(point1, options);
    // var directionsServicee = new google.maps.DirectionsService();
    // const geocoder = new google.maps.Geocoder();
    // var request = {
    //     origin: from.value,
    //     destination: to.value,
    //     waypoints: pointsA,
    //     travelMode: google.maps.TravelMode.DRIVING
    // }
    // directionsServicee.route(request, function(response, status) {
    //     if (status == google.maps.DirectionsStatus.OK) {
    //         directionsDisplayy.setDirections(response);
    //         var route = response.routes[0];
    //         var distanceSum=0;
    //         var timeSum=0;
    //         // удаляет пробельный символ в строках типа 1 000 и 999 999
    //         function removeSpaces(str) {
    //             var res = str.replace(/\s/g, "");
    //             return res;
    //         }
    //         for (var i = 0; i < route.legs.length; i++) {
    //             var routeSegment = i+1;
    //             var distanceS = route.legs[i].distance.value; // возвращает расстояние в м
    //             distanceS = Math.ceil(distanceS/1000); // перевод в км и округление
    //             var calcavtoKmE = document.getElementById('calcavtoKmE');
    //             calcavtoKmE.value=distanceS;
    //             getSum();
    //         } // for
    //     } else {
    //         alert("Извините, в нашей базе такого города нет... Пожалуйста, свяжитесь с нашим консультантом ");
    //         console.log(status);
    //     }
    // });
    return (
        <div>
            <BgBlock image={faq} imgText="cat" title="contacts page" desc="some text"/>
            <h5>ваше место нахождение : {startPositionlatitude} , {startPositionlongitude}</h5>
            <h5>inputDate : {point1}</h5>
            <label htmlFor="address">from: </label>
            <input type="text" value={point1} name="address"
                   autoComplete="address"
                   onBlur={(e)=>setPoint1(e.currentTarget.value)}
                   onChange={(e)=>setPoint1(e.currentTarget.value)}/>
            {/*{startPositionlongitude!==0? <div>...loading</div> :<div id="map" style={{height:"200px"}}></div>}*/}
            {startPositionlongitude !== 0 ?
                <div id="map" style={{height: "200px"}}></div> :
                <div style={{height: "200px"}}>кажется что то пошло не так :-(</div>
            }
            {/*<Map/>*/}
        </div>
    );
};

export default Contacts;