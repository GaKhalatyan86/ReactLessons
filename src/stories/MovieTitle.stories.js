import { MovieTitle } from "../shared/ui";
import { movieTitleData } from "../shared/ui";

export default {
    title: "MovieTitle",
    component: MovieTitle,
};

const Template = (args) => <MovieTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
    imageUrl: movieTitleData.imageUrl,
    movieName: movieTitleData.movieName,
    releaseYear: movieTitleData.releaseYear,
    genres: movieTitleData.genres,
    onClick: () => { }
};
