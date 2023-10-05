import { SortControl } from "../entities";
import { moviesSortOptions } from "../entities";

export default {
  title: "SortControl",
  component: SortControl,
};

const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: moviesSortOptions,
  selectedOption: moviesSortOptions[1],
  onSelect: () => {},
};