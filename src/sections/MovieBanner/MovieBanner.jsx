import MovieBannerCard from "@/components/MovieBannerCard";

const MovieBanner = () => {
    const titleId = "movie-banner__title"

    return (
        <section
            className="container"
            aria-labelledby={titleId}
        >
            <MovieBannerCard
                title="Kantara"
                titleId={titleId}
                TitleTag="h1"
                description="A fiery young man clashes with an unflinching forest officer in a south Indian village where spirituality, fate and folklore rule the lands."
                imgSrc='/src/assets/images/movie_banner/2.jpg'
                isSmallPaddingY
            />
        </section>
    )
}

export default MovieBanner