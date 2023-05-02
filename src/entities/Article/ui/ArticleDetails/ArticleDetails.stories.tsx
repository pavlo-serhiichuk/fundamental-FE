import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleDetails} from './ArticleDetails';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import {Article} from 'entities/Article'
import {ArticleBlockType, ArticleType} from 'entities/Article/model/types/article'

const article: Article =
  {
    "id": "1",
    "title": "How to become a true ninja...",
    "subtitle": "... and make others lives harder",
    "image": "https://yt3.googleusercontent.com/ytc/AGIKgqND5OpZ3zBGI_CFfNpPWs1PDQu_OmNG2IFXPcxf=s900-c-k-c0x00ffffff-no-rj",
    "views": 1023,
    "created": "26.02.2022",
    "type": [ArticleType.IT, ArticleType.SCIENCE],
    "blocks": [
      {
        "id": "1",
        "type": ArticleBlockType.TEXT,
        "title": "Ніндзя код",
        "paragraphs": [
          "Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.\n\nГуру, що перевіряють код, шукають їх у тестових завданнях.\n\nПочатківці іноді використовують їх краще за ніндзя-програмістів.\n\nУважно перечитайте ці хитрощі і вирішіть хто ви є — ніндзя, початківець, чи може гуру перевірки коду?",
          "Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код."

        ]
      },
      {
        "id": "2",
        "type": ArticleBlockType.TEXT,
        "title": "Стислість – сестра таланту",
        "paragraphs": [
          "Пишіть якомога коротший код. Покажіть, наскільки ви розумні. Пишіть якомога коротший код. Покажіть, наскільки ви розумні. Пишіть якомога коротший код. Покажіть, наскільки ви розумні.",
          "Нехай стислі та неочевидні можливості мови стануть вам посібником.\n\nНаприклад, розглянемо таке застосування тернарного оператора '?'"
        ]
      },
      {
        "id": "4",
        "type": ArticleBlockType.CODE,
        "code": "<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n<div id=\"root\"></div>\n</body>\n</html>"
      },
      {
        "id": "5",
        "type": ArticleBlockType.TEXT,
        "title": "Стислість – брат таланту",
        "paragraphs": [
          "Круто, правда? Якщо ви напишете подібне, розробник, який натрапить на цей рядок і намагатиметься зрозуміти, яке ж значення має i, пізнає неабияку радість. І врешті-решт, прийде до вас за відповідю.",
          "Скажіть йому, що коротше – це завжди краще. Допоможіть і йому стати на шлях ніндзя."
        ]
      },
      {
        "id": "35",
        "type": ArticleBlockType.TEXT,
        "title": "",
        "paragraphs": [
          "Скажіть йому, що коротше – це завжди краще. Допоможіть і йому стати на шлях ніндзя."
        ]
      },
      {
        "id": "8",
        "type": ArticleBlockType.IMAGE,
        "src": "https://1.zt.ua/wp-content/uploads/2022/07/js.jpg",
        "title": "Picture 1 - painted workflow concept"
      },
      {
        "id": "23",
        "type": ArticleBlockType.TEXT,
        "title": "",
        "paragraphs": [
          "Екзотична змінна у якості лічильника особоливо доречна, коли тіло циклу займає одну-дві сторінки (чим більше, тим краще). У такому випадку, ті, хто зануриться глибоко у код циклу, не зможуть швидко здогадатись, що змінна x насправді є лічильником."
        ]
      }
    ]
  }


export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args}
/>;

export const Primary = Template.bind({});

Primary.args = {};
Primary.decorators = [StoreDecorator({
  articleDetails: {
    data: article
  }
})];
export const Loading = Template.bind({});

Loading.args = {};
Loading.decorators = [StoreDecorator({
  articleDetails: {
    isLoading: true
  }
})];
export const Error = Template.bind({});

Error.args = {};
Error.decorators = [StoreDecorator({
  articleDetails: {
    error: 'Error'
  }
})];