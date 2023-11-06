import React from 'react';
// import {ComponentStory, ComponentMeta} from '@storybook/react';
// import ArticleDetailsPage from './ArticleDetailsPage';
// import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
// import withMock from 'storybook-addon-mock'
//
// const mockArticle = {
//   id: '1',
//   image: '',
//   createAt: '',
//   views: 123,
//   user: {id: '1', username: 'admin'},
//   blocks: [],
//   type: [],
//   title: '123',
//   subtitle: 'subtitle'
// }
//
// export default {
//   title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
//   component: ArticleDetailsPage,
//   argTypes: {
//     backgroundColor: {control: 'color'},
//   },
//   decorators: [withMock]
// } as ComponentMeta<typeof ArticleDetailsPage>;
//
// const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />;
//
// export const Primary = Template.bind({});
//
// Primary.args = {};
//
// Primary.decorators = [StoreDecorator({})]
//
// Primary.parameters = {
//   mockData: [
//     {
//       url: __API__ + '/articles?_limit=4',
//       method: '',
//       status: 200,
//       response : [
//         {...mockArticle, id: '1'},
//         {...mockArticle, id: '2'},
//         {...mockArticle, id: '3'},
//         {...mockArticle, id: '4'},
//       ]
//     }
//   ]
// }
