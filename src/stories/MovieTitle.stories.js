import { MovieTitle } from "../entities";
import { movieTitleData } from "../entities";

export default {
    title: "MovieTitle",
    component: MovieTitle,
};

const Template = (args) => <MovieTitle {...args} />;

export const Default = Template.bind({});

Default.args = {
    movieTitleData: movieTitleData,
    onClick: () => { }
};
