import React, { useRef, useEffect } from 'react';

const About = () => {

    const mapRef = useRef(null);

    useEffect(() => {
        // Replace 'YOUR_GOOGLE_MAPS_API_KEY' with your actual API key
        const apiKey = 'AIzaSyCeyoIOYBI1m6gph-Qqv9e2HgnrPn1zjR8';
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
        script.async = true;
        script.onload = initMap;
        document.body.appendChild(script);
    }, []);

    const initMap = () => {
        const mapOptions = {
            center: { lat: 56.346291044003735, lng: 10.633875867695778 }, // Set the initial center to your desired location
            zoom: 9, // Set the initial zoom level as desired
        };

        const map = new window.google.maps.Map(mapRef.current, mapOptions);

        const marker = new window.google.maps.Marker({
            position: mapOptions.center,
            map: map,
            title: 'Landsbygarn',
        });
    };

    return (



        <div class="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
            <div class="flex flex-col lg:flex-row justify-between gap-8">
                <div class="w-full lg:w-5/12 flex flex-col justify-center">
                    <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Om Landsbygarn</h1>
                    <p class="font-normal text-base leading-6 text-gray-600 dark:text-white">Mit navn er Vivian og jeg har åbnet Landsbygarn med en vision om billig garn til alle strikkeglade folk. Jeg selv nyder roen, der falder over mig, når jeg har et par stikkepinde i hånden.
                        Her på min hjemmeside kan i se udvalget af butikkens kvalitetsgarn, som kan blive starten på dit næste strikkeprojekt. Det er også muligt at svinge forbi mit butikslokale og se alle de forskellige garntyper. Jeg har altid forskellige materialer i alle tænkelige smukke farver på lager. Skulle du have gang i et bestemt strikkeprojekt anbefaler jeg dog, du kigger min hjemmeside igennem for at tjekke,om jeg har lige det garn, du skal bruge på lager.
                        Jeg glæder mig til vi ses hos Landbygarn</p>
                </div>
                <div class="w-full lg:w-8/12">
                    <img class="w-full h-full rounded-md" src="https://landsbygarn.dk/images/landingpage/landsbygarn-skilt-about.jpg" alt="A group of People" />
                </div>
            </div>

            <section class="bg-transparent dark:bg-gray-900">
                <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                    <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                        <div className='flex justify-center' style={{ height: '500px', width: '100%' }} ref={mapRef}></div>
                    </div>

                    <div class="ml-auto place-self-center lg:col-span-7">
                        <h1 class="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 dark:text-white pb-4">Find os i hjertet af Djursland</h1>
                        <p class="max-w-2xl mb-6 font-normal text-base leading-6 text-gray-600 dark:text-white">Addressen er Sognevejen 6, 8560 Kolind. Butikken ligger i en lille landsby ved navn Nødager. Kom forbi og se udvalget af garn!</p>
                       
                        <a href="https://www.google.com/maps/place/56%C2%B020'46.9%22N+10%C2%B038'01.9%22E/@56.3463532,10.6316823,17z/data=!3m1!4b1!4m4!3m3!8m2!3d56.3463507!4d10.6338521?entry=ttu" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                            Åbn i Google Maps          </a>
                    </div>

                </div>
            </section>

        </div>
    )
};

export default About;

