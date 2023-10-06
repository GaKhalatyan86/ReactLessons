import { Counter } from "../entities";

export default {
  title: "Counter",
  component: Counter,
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});

Default.args = {
  initialValue: 1,
};
