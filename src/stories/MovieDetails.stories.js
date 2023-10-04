import { MovieDetail } from "../entities";
import { movieDetailData } from "../entities";

export default {
    title: "MovieDetail",
    component: MovieDetail,
};

const Template = (args) => <MovieDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
    movieInfo: movieDetailData
};
