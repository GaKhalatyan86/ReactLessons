import { MovieDetail } from "../shared/ui";
import { movieDetailData } from "../shared/ui";

export default {
    title: "MovieDetail",
    component: MovieDetail,
};

const Template = (args) => <MovieDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
    imageUrl: movieDetailData.imageUrl,
    movieName: movieDetailData.movieName,
    rating: movieDetailData.rating,
    releaseYear: movieDetailData.releaseYear,
    duration: movieDetailData.duration,
    description: movieDetailData.description
};