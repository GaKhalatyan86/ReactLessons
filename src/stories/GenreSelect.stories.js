import { GenreSelect } from "../shared/ui";
import { genreList } from "../shared/ui";

export default {
    title: "GenreSelect",
    component: GenreSelect,
};

const Template = (args) => <GenreSelect {...args} />;

export const Default = Template.bind({});

Default.args = {
    genres:genreList
};
