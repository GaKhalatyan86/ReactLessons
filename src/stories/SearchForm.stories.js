import { SearchForm } from "../entities";

export default {
    title: "SearchForm",
    component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const Default = Template.bind({});

Default.args = {
    initialValue: "Matrix",
    onSearch: () => { }
};
