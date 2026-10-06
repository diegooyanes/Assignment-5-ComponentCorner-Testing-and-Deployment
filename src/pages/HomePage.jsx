import Hero from "../components/Hero";

function HomePage() {
    return (
        <>
            <Hero
                title="Make every sip a ritual"
                subtitle="Discover premium mate essentials selected for flavor, tradition, and everyday moments."
                ctaText="Explore the collection"
            />

            <section className="about-section">
                <p>Why shop with us?</p>
                <h2>A ritual meant to be shared</h2>
                <span>
                    We select quality mate essentials and celebrate the South American
                    tradition of sharing mate.
                </span>
            </section>
        </>
    );
}

export default HomePage;