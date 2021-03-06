import React from "react";

import Layout from "../components/layout"; 
import HeroCarousel from "../components/heroCarousel";
import FeatureRow from "../components/featureRow";
import HeroBanner from "../components/heroBanner";
import FeatureSlider from "../components/featureSlider";
import InstagramFeed from "../components/instragramFeed";

export default function Home() {
	return (
		<Layout>
			<HeroCarousel />
			<FeatureRow />
			<FeatureSlider />
			<HeroBanner />
			<InstagramFeed />
		</Layout>
	); 
}


