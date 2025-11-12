import React from 'react';

import Slider from '../component/home/Slider';
import Offer from '../component/home/Offer';
import Food from '../component/home/Food';
import Contact from '../component/home/Contact';
import Gallery from '../component/home/Gallery';
import Footer from '../component/Footer';

export default function Home()
{
return(
<div>
<Slider />
<Offer />
<Food />
<Contact />
<Gallery />
<Footer />
</div>
)
}