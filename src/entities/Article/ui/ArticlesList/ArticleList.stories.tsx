import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ArticleList} from './ArticleList';
import {Article} from '../../model/types/article'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator/StoreDecorator'
import {Primary} from '@/pages/ArticlesPage/ui/ArticlesPage/ArticlesPage.stories'
import {ArticleView} from '@/entities/Article/model/consts/consts'

const article: Article = {
  "id": "1",
  "title": "How to become a true ninja...",
  "subtitle": "... and make others lives harder",
  "image": "https://yt3.googleusercontent.com/ytc/AGIKgqND5OpZ3zBGI_CFfNpPWs1PDQu_OmNG2IFXPcxf=s900-c-k-c0x00ffffff-no-rj",
  "views": 1023,
  "created": "26.02.2022",
  user: {
    id: '1',
    username: 'admin',
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw0QAlaEH4XTEh16bFUKKiKxjO_bzbLAS9bQ&usqp=CAU"
  },
  "type": [
    "IT",
    "Science",
    "Science",
  ],
  "blocks": [
    {
      "id": "1",
      "type": "TEXT",
      "title": "Ніндзя код",
      "paragraphs": [
        "Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код.\n\nГуру, що перевіряють код, шукають їх у тестових завданнях.\n\nПочатківці іноді використовують їх краще за ніндзя-програмістів.\n\nУважно перечитайте ці хитрощі і вирішіть хто ви є — ніндзя, початківець, чи може гуру перевірки коду?",
        "Ніндзя-програмісти минулого використовували деякі хитрощі, щоб загострити розум тих, хто буде підтримувати їх код."
      ]
    },
    {
      "id": "2",
      "type": "TEXT",
      "title": "Стислість – сестра таланту",
      "paragraphs": [
        "Пишіть якомога коротший код. Покажіть, наскільки ви розумні. Пишіть якомога коротший код. Покажіть, наскільки ви розумні. Пишіть якомога коротший код. Покажіть, наскільки ви розумні.",
        "Нехай стислі та неочевидні можливості мови стануть вам посібником.\n\nНаприклад, розглянемо таке застосування тернарного оператора '?'"
      ]
    },
    {
      "id": "4",
      "type": "CODE",
      "code": "<!doctype html>\n<html lang=\"en\">\n<head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\"\n          content=\"width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    <title>Document</title>\n</head>\n<body>\n<div id=\"root\"></div>\n</body>\n</html>"
    },
    {
      "id": "5",
      "type": "TEXT",
      "title": "Стислість – брат таланту",
      "paragraphs": [
        "Круто, правда? Якщо ви напишете подібне, розробник, який натрапить на цей рядок і намагатиметься зрозуміти, яке ж значення має i, пізнає неабияку радість. І врешті-решт, прийде до вас за відповідю.",
        "Скажіть йому, що коротше – це завжди краще. Допоможіть і йому стати на шлях ніндзя."
      ]
    },
    {
      "id": "35",
      "type": "TEXT",
      "title": "",
      "paragraphs": [
        "Скажіть йому, що коротше – це завжди краще. Допоможіть і йому стати на шлях ніндзя."
      ]
    },
    {
      "id": "8",
      "type": "IMAGE",
      "src": "https://1.zt.ua/wp-content/uploads/2022/07/js.jpg",
      "title": "Picture 1 - painted workflow concept"
    },
    {
      "id": "23",
      "type": "TEXT",
      "title": "",
      "paragraphs": [
        "Екзотична змінна у якості лічильника особоливо доречна, коли тіло циклу займає одну-дві сторінки (чим більше, тим краще). У такому випадку, ті, хто зануриться глибоко у код циклу, не зможуть швидко здогадатись, що змінна x насправді є лічильником."
      ]
    }
  ]
} as Article


export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: {control: 'color'},
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Big = Template.bind({});

Big.args = {
  isLoading: false,
  articles: new Array(16).fill(0).map((_, i) => ({...article, id: String(i)})),
  view: ArticleView.BIG
};
Big.decorators = [StoreDecorator({})];

export const Small = Template.bind({});

Small.args = {
  isLoading: false,
  articles: new Array(16).fill(0).map((_, i) => ({...article, id: String(i)})),
  view: ArticleView.SMALL
};
Small.decorators = [StoreDecorator({})];

export const isLoadingBig = Template.bind({});

isLoadingBig.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.BIG
};

isLoadingBig.decorators = [StoreDecorator({})];

export const isLoadingSmall = Template.bind({});

isLoadingSmall.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.SMALL
};
isLoadingSmall.decorators = [StoreDecorator({})];
