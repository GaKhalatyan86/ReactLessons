import { MovieDetail } from "../shared/ui";
import { movieDetailData } from "../shared/ui";

export default {
    title: "MovieDetail",
    component: MovieDetail,
};

const Template = (args) => <MovieDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
    movieInfo: movieDetailData
};