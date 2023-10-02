import { SearchForm } from "../shared/ui";

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
