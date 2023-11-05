import React, { useRef, useEffect } from 'react';
import "../css/LandingPage.css";

const LandingPage = () => {



    return (
        <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="LeftGrid p-8 md:p-12 lg:px-16 lg:py-24">
                        <div class="mx-auto max-w-xl text-center">
                            <h2 class="text-2xl font-bold text-white md:text-3xl">

                                Garnbutik i hjertet af Djursland
                            </h2>

                            <p class="hidden text-white/90 sm:mt-4 sm:block">
                                Velkommen til Landsbygarn. Hos os kan du købe DROPS garn til billige priser. Vi har altid et godt udvalg, så kom og besøg i Nødager og gør et godt køb.
                                Du kan finde os       <a className='font-bold' href="/about">her</a>.

                            </p>

                            <p class="hidden text-white/90 sm:mt-4 sm:block">
                                Vi har altid vores varesortiment opdateret her på siden, så du kan se hvad du kan købe hos os.
                            </p>

                            <div class="mt-4 md:mt-8">
                                <a href="/Products" class="inline-block rounded border border-white bg-white px-12 py-3 text-sm font-medium text-blue-500 transition hover:bg-transparent hover:text-white">
                                    Se vores produkter her</a>
                            </div>

                            <div class="mt-4 md:mt-8">

                                <div className='text-xl font-bold text-white'>
                                    Åbningstider i uge 43
                                </div>

                                <div className='text-xl  text-white'>
                                    Tirsdag 10-12 og 14-17 
                                </div>

                                <div className='text-xl  text-white'>
                                Lørdag 10-12                                
                                </div> 

 

 <div className='text-xl mt-5 font-bold text-white'>
                                    Åbningstider i uge 45 og 46
                                </div>

                                <div className='text-xl  text-white'>
                                    Tirsdag 10-12 og 14-17 
                                </div>

                                <div className='text-xl  text-white'>
                                Torsdag 15-17                                
                                </div> 


                                <div className='text-xl   text-white'>
                                    og efter aftale
                                </div>

                                <div className='text-xl py-4 font-bold text-white'>
                                    +45 60 11 81 27
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    <div class="grid grid-cols-2 gap-4 md:grid-cols-1 lg:grid-cols-2">
                        <img
                            alt="Student"
                            src="https://landsbygarn.dk/images/landingpage/367386000_707110454586383_3167842001201087275_n.jpg"
                            class="h-40 w-full object-cover sm:h-56 md:h-full"
                        />

                        <img
                            alt="Student"
                            src="https://landsbygarn.dk/images/landingpage/drops-kid-silk.jpg"
                            class="h-40 w-full object-cover sm:h-56 md:h-full"
                        />
                    </div>
                </div>
            </div>



        </section>

    )
};

export default LandingPage;

