import React, { useState, useEffect, useRef } from 'react';
import { useStateValue } from '../../State/State';
import CardResearch from '../../Components/Card/CardResearch';
import { fire } from '../../fire';
import Slider from "react-slick";
import { relative } from 'path';


export default function MainPage() {


    const [dataCard, setDataCard] = useState([]);
    useEffect(() => {

        fire.collection('card').orderBy("created", "desc")
            .onSnapshot(
                function (querySnapshot) {
                    let data = querySnapshot.docs.map(function (documentSnapshot) {
                        return documentSnapshot.data();
                    });
                    setDataCard(data);
                    console.log(data);
                })
    }, []);



    const [{ theme }, dispatch] = useStateValue();


    return (
        <>
            <div className="card-container ">
                <div id="root-deck-card">
                    <Slider lazyLoad="progressive">
                        {dataCard.map((dataCard, index) => {
                            return (
                                <div key={index}>
                                    <CardResearch 
                                        title={dataCard.title}
                                        description={dataCard.description}
                                        link={dataCard.link}
                                        branch={dataCard.branch}
                                        type={dataCard.type}
                                        tags={dataCard.tags}
                                        style={{ color: theme.primary }}
                                        background={theme.cardBack}
                                        border={theme.primary}
                                        id={dataCard.docid}
                                        likes={dataCard.likes}
                                    />

                                </div>
                            )
                        })}
                    </Slider>
                </div>

            </div>

        </>
    )
}