import { GenreSelect } from "../entities";
import { genreList } from "../entities";

export default {
    title: "GenreSelect",
    component: GenreSelect,
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
    genres:genreList
};
