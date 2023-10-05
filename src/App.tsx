import { useState } from 'react';
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material';
import Header from './components/Header/Header';
import Start from './components/Start';
import TableMine from './components/Table';
import { TestType, Words } from './app/types';
import StepperMy from './components/StepperMy';
import Game1 from './components/Game1';
import Test1 from './components/Test1';
import TablePhrases from './components/TablePhrases';
import Game2 from './components/Game2';

const dataStart = {
  text: [
    'Якщо почали тренажер, шляху назад немає, пройдіть його до кінця. Тренажер розрахований на 3 дні, щоб у помірному та комфортному темпі споживати інформацію та практикуватися.',
    'Виділіть у найближчі 3 дні до 40 хвилин на день на проходження тренажера. Сприйміть це як тренування в спортивному залі - ніщо не повинно вас відволікати.',
    'Не відкладайте проходження тренажера в довгий ящик. З моменту, як ви активували цього бота, у вас є тиждень (7 календарних днів) на проходження тренажера. Після закінчення тижня безкоштовний доступ до тренажера закриється. Подальший доступ до тренажера коштуватиме 370 грн.',
  ],
  img: 'photo_5237960892807762127_x.jpg',
};
const data = [
  {
    type: 'info',
    img: 'photo_5237960892807762129_y.jpg',
    text: 'Тисніть на кнопку нижче, якщо не терпиться забронювати квитки на рейс до Парижа! 🎫',
  },
  {
    type: 'lek',
    img: 'photo_5237960892807762129_y.jpg',
    text: 'ЛЕКСИКА, ЯКУ ПОТРІБНО ВИВЧИТИ, ЩОБ ПРИДБАТИ КВИТКИ БЕЗ ПОМИЛОК',
    textAfter: 'Якщо ви готові перейти до першого завдання, то тисніть на кнопку нижче.',

    words: [
      { en: 'departure', ua: 'відправлення', transcription: 'dɪˈpɑːr.tʃər' },
      { en: 'arrival', ua: 'прибуття', transcription: 'əˈraɪvəl' },
      { en: 'from', ua: 'звідки', transcription: 'frʌm' },
      { en: 'to', ua: 'куди напрямок', transcription: 'tuː' },
      { en: 'one way', ua: 'в одну сторону', transcription: 'wʌn weɪ' },
      { en: 'round trip', ua: 'туди й назад', transcription: 'raʊnd trɪp' },
      { en: 'included', ua: 'включено', transcription: 'ɪnˈkluːdɪd' },
      { en: 'to book', ua: 'забронювати', transcription: 'tuː bʊk' },
      { en: 'stopover', ua: 'пересадка менше 24 годин', transcription: 'ˈstɑːp.oʊ.vɚ' },
      { en: 'layover', ua: 'пересадка понад 24 годин', transcription: 'ˈleɪ.oʊ.vɚ' },
      { en: 'direct flight', ua: 'прямий рейс(без пересадок)', transcription: 'dɪˈrɛkt flaɪt' },
      {
        en: 'carry-on luggage / hand bag',
        ua: 'ручна поклажа',
        transcription: 'ˈkæri-ɒn ˈlʌɡɪdʒ / hænd bæɡ',
      },
      { en: 'checked baggage', ua: 'зареєстрований багаж', transcription: 'ʧɛkt ˈbæɡɪdʒ' },
      { en: 'travel time', ua: 'час подорожі', transcription: 'ˈtrævəl taɪm' },
      { en: 'passenger', ua: 'пасажир', transcription: 'ˈpæsəndʒər' },
    ],
  },
  {
    type: 'game1',
    img: '.jpg',
    title: 'ЛЕКСИКА',
    text: 'встановити відповідність',
    textAfter: '',

    words: [
      { en: 'departure', ua: 'відправлення' },
      { en: 'arrival', ua: 'прибуття' },
      { en: 'from', ua: 'звідки' },
      { en: 'to', ua: 'куди напрямок' },
      { en: 'one way', ua: 'в одну сторону' },
      { en: 'round trip', ua: 'туди й назад' },
      { en: 'included', ua: 'включено' },
      { en: 'to book', ua: 'забронювати' },
      { en: 'stopover', ua: 'пересадка менше 24 годин' },
      { en: 'layover', ua: 'пересадка понад 24 годин' },
      { en: 'direct flight', ua: 'прямий рейс(без пересадок)' },
      {
        en: 'carry-on luggage / hand bag',
        ua: 'ручна поклажа',
      },
      { en: 'checked baggage', ua: 'зареєстрований багаж' },
      { en: 'travel time', ua: 'час подорожі' },
      { en: 'passenger', ua: 'пасажир' },
    ],
  },
  {
    type: 'test',
    title: '🔹Завдання 1',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'You need to book tickets for one passenger from Kyiv to Paris and back. Without stopovers. You have to be in Paris no later than 10:00 am. You are traveling with hand luggage only. Choose a ticket from the options above that fulfills the conditions below.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: 'Завдання виконано правильно. Квитки на рейси туди-назад успішно заброньовано ✅',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: false,
      },
      {
        value: 'D',
        isRight: true,
      },
    ],
    img: 'photo_5226963087880475712_y.jpg',
  },
  {
    type: 'lek',
    img: 'photo_5237960892807762129_y.jpg',
    text: 'ЛЕКСИКА, ЯКУ ПОТРІБНО ВИВЧИТИ, ЩОБ ЗАБРОНЮВАТИ ЖИТЛО БЕЗ ПОМИЛОК',
    textAfter: 'Якщо ви готові перейти до другого завдання, то тисніть на кнопку нижче..',
    words: [
      { en: 'stay', ua: 'перебування', transcription: 'steɪ' },
      {
        en: 'destination/property name',
        ua: 'місце / назва помешкання',
        transcription: 'ˌdɛstəˈneɪʃən/ˈprɒpərti neɪm',
      },
      { en: 'hotel', ua: 'готель', transcription: 'hoʊˈtɛl' },
      { en: 'apartment', ua: 'квартира', transcription: 'əˈpɑrtmənt' },
      { en: 'check-in date', ua: 'дата заїзду', transcription: 'ʧɛk-ɪn deɪt' },
      { en: 'check-out date', ua: 'дата виїзду', transcription: 'ʧɛk-aʊt deɪt' },
      { en: 'N-night stay', ua: 'перебування на N ночей', transcription: 'ɛn-naɪt steɪ' },
      { en: 'Subway/metro access', ua: 'доступ до метро', transcription: 'ˈsʌbweɪ/ˈmɛtroʊ ˈæksɛs' },
      { en: 'Entire apartment', ua: 'апартаменти повністю', transcription: 'ɛnˈtaɪər əˈpɑrtmənt' },
      { en: 'N M*2 size', ua: 'розмір N кв. м.', transcription: 'ɛn ɛm tuː ˈsaɪz' },
      {
        en: '1-bedroom apartment',
        ua: 'апартаменти з 1 спальнею',
        transcription: 'wʌn-ˈbɛdrum əˈpɑrtmənt',
      },
      { en: 'n km from center', ua: 'n км від центру', transcription: 'ɛn kɪˈem frɒm ˈsɛntər' },
      { en: 'bath', ua: 'ванна', transcription: 'bæθ' },
      { en: 'shower', ua: 'душ', transcription: 'ˈʃaʊər' },
      { en: 'sofa', ua: 'диван', transcription: 'ˈsoʊfə' },
      { en: 'terrace', ua: 'тераса', transcription: 'ˈtɛrəs' },
      {
        en: 'full bed/large double bed',
        ua: 'повноспальне/велике двоспальне ліжко',
        transcription: 'fʊl bɛd/lɑrdʒ ˈdʌbəl bɛd',
      },
      { en: 'breakfast included', ua: 'сніданок включено', transcription: 'ˈbrɛkfəst ɪnˈkludɪd' },
      {
        en: 'review score/guest review',
        ua: 'оцінка/відгук гостя',
        transcription: 'rɪˈvju skɔr/gɛst rɪˈvju',
      },
      { en: 'option', ua: 'варіант', transcription: 'ˈɑpʃən' },
    ],
  },
  {
    type: 'test',
    title: '🔹Завдання 2',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: "You need to book a stay in Paris for 3 days. You don't like staying in hotels, so you need to look for another option.  Close to the center, near the metro. 1-room apartments from 30 square meters. With bath and a big bed. With terrace. Breakfast included. With a review score of 8+",
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: 'Завдання виконано правильно. Житло у Парижі успішно заброньовано ✅',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: false,
      },
      {
        value: 'D',
        isRight: true,
      },
    ],
    img: 'photo_5237960892807762210_y.jpg',
  },
  {
    type: 'lek',
    img: 'photo_5237960892807762129_y.jpg',
    text: 'ЛЕКСИКА, ЯКУ ПОТРІБНО ВИВЧИТИ, ЗІБРАТИ ВАЛІЗУ БЕЗ ПОМИЛОК',
    textAfter: 'Якщо ви готові перейти до першого завдання, то тисніть на кнопку нижче.',

    words: [
      { en: 'suitcase', ua: 'валіза', transcription: 'ˈsuːtˌkeɪs' },
      { en: 'airplane tickets', ua: 'авіаквитки', transcription: 'ˈɛrˌpleɪn ˈtɪkɪts' },
      {
        en: 'identity card/passport',
        ua: 'паспорт/ідентифікаційна картка',
        transcription: 'aɪˈdɛntəti kɑrd/ˈpæspɔrt',
      },
      { en: 'laptop', ua: 'ноутбук', transcription: 'ˈlæpˌtɑp' },
      {
        en: 'chargers',
        ua: 'зарядний пристрій',
        transcription: 'ˈlæpˌtɑp ˈʧɑrdʒər',
      },
      { en: 'home clothes', ua: 'домашній одяг', transcription: 'hoʊm kloʊðz' },
      { en: 'underwear', ua: 'білизна', transcription: 'ˈʌndərˌwɛr' },
      {
        en: 'skin and hair care products',
        ua: 'засоби для догляду за шкірою та волоссям',
        transcription: 'skɪn ænd hɛr kɛr ˈprɒdʌkts',
      },
      { en: 'casual wear', ua: 'повсякденний одяг', transcription: 'ˈkæʒuəl wɛr' },
      { en: 'outlet clothes', ua: 'вихідній одяг', transcription: 'ˈaʊtlɛt kloʊðz' },
      { en: 'comfortable shoes', ua: 'зручні взуття', transcription: 'ˈkʌmfərtəbl ʃuz' },
      { en: 'outgoing shoes', ua: 'вихідне взуття', transcription: 'ˈaʊtˌɡoʊɪŋ ʃuz' },
      { en: 'sunglasses', ua: 'сонцезахисні окуляри', transcription: 'ˈsənˌɡlæsɪz' },
      { en: 'medicines', ua: 'ліки', transcription: 'ˈmɛdəsənz' },
      { en: 'handbag', ua: 'маленька сумка', transcription: 'ˈhændˌbæɡ' },
      { en: 'earphones', ua: 'навушники', transcription: 'ˈɪrˌfoʊnz' },
      { en: 'hairbrush', ua: 'розчіска', transcription: 'ˈhɛrˌbrʌʃ' },
      {
        en: 'dry and wet wipes',
        ua: 'сухі та вологі серветки',
        transcription: 'draɪ ænd wɛt waɪps',
      },
      {
        en: 'decorative cosmetics',
        ua: 'декоративна косметика',
        transcription: 'ˈdɛkəˌreɪtɪv kɑzˈmɛtɪks',
      },
      { en: 'wallet', ua: 'гаманець', transcription: 'ˈwɑlɪt' },
    ],
  },
  {
    type: 'game2',
    img: 'photo_5237960892807762129_y.jpg',
    title: 'ЛЕКСИКА, ЯКУ ПОТРІБНО ВИВЧИТИ, ЗІБРАТИ ВАЛІЗУ БЕЗ ПОМИЛОК',
    text: 'Якщо ви готові перейти до першого завдання, то тисніть на кнопку нижче.',
    words: [
      { en: 'suitcase', ua: 'валіза', img: '5.jpg' },
      { en: 'laptop', ua: 'ноутбук', img: '1.jpg' },
      { en: 'sunglasses', ua: 'сонцезахисні окуляри', img: '2.jpg' },
      { en: 'earphones', ua: 'навушники', img: '3.jpg' },
      {
        en: 'decorative cosmetics',
        ua: 'декоративна косметика',
        img: '4.jpg',
      },

      { en: 'airplane tickets', ua: 'авіаквитки', img: '6.jpg' },
      {
        en: 'identity card/passport',
        ua: 'паспорт/ідентифікаційна картка',
        img: '7.jpg',
      },

      {
        en: 'chargers',
        ua: 'зарядний пристрій',
        img: '8.jpg',
      },

      { en: 'outlet clothes', ua: 'вихідній одяг', img: '9.jpg' },
      { en: 'comfortable shoes', ua: 'зручні взуття', img: '10.jpg' },

      { en: 'medicines', ua: 'ліки', img: '11.jpg' },

      { en: 'hairbrush', ua: 'розчіска', img: '12.jpg' },
      {
        en: 'dry and wet wipes',
        ua: 'сухі та вологі серветки',
        img: '13.jpg',
      },
    ],
  },
  {
    type: 'test',
    title: '🔹Завдання 3 - Тест 1/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: "Pack your suitcase together. Your suitcase is almost ready, only a few things are missing. Complete the quizzes and choose the things you'll need for your trip to Paris.",
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: true,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762221_y.jpg',
  },
  {
    type: 'test',
    title: '🔹Завдання 3 - Тест 2/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: "Pack your suitcase together. Your suitcase is almost ready, only a few things are missing. Complete the quizzes and choose the things you'll need for your trip to Paris.",
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: true,
      },
    ],
    img: 'photo_5237960892807762222_y.jpg',
  },
  {
    type: 'test',
    title: '🔹Завдання 3 - Тест 3/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: "Pack your suitcase together. Your suitcase is almost ready, only a few things are missing. Complete the quizzes and choose the things you'll need for your trip to Paris.",
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: true,
      },
      {
        value: 'C',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762224_y.jpg',
  },
  {
    type: 'test',
    title: '🔹Завдання 3 - Тест 4/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: "Pack your suitcase together. Your suitcase is almost ready, only a few things are missing. Complete the quizzes and choose the things you'll need for your trip to Paris.",
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: true,
      },
    ],
    img: 'photo_5237960892807762225_y.jpg',
  },
  {
    type: 'info',
    img: 'photo_5237960892807762227_y.jpg',
    text: 'Часто використовувані фрази для виклику таксі, які допоможуть вам виконати завдання правильно',
  },
  {
    type: 'phr',
    img: 'photo_5237960892807762129_y.jpg',
    text: 'Часто використовувані фрази lля виклику таксі, які допоможуть вам виконати завдання правильно',
    textAfter: 'Якщо ви готові перейти до завдання, то тисніть на кнопку нижче.',

    words: [
      { en: 'Good afternoon,', ua: 'Доброго дня,', transcription: 'ɡʊd ˌæftərˈnun' },
      {
        en: 'I would like to order a taxi to the address...',
        ua: 'Я хочу замовити таксі за адресою...',
      },
      {
        en: 'Could a taxi driver please come to the parking place/main entrance?',
        ua: 'Чи може таксист приїхати на місце для паркування / головний вхід?',
      },
      {
        en: 'There will be 1 passenger/there will be 2 passengers',
        ua: 'Буде 1 пасажир / буде 2 пасажири',
      },
      {
        en: 'Will have luggage: small suitcase/large suitcase',
        ua: 'Буде багаж: невелика валіза / велика валіза',
      },
      {
        en: 'Will be going to the airport at the address...',
        ua: 'Будемо їхати в аеропорт за адресою...',
      },
      {
        en: "Thank you, I'm expecting my driver! Have a good day",
        ua: 'Дякую, я чекаю на свого водія! Гарного дня',
      },
    ],
  },
  {
    type: 'test',
    title: '🔹Завдання 4 - Тест 1/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a taxi operator. You need to order a taxi to the airport. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: true,
      },
      {
        value: 'C',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762230_y.jpg',
    audio: 'voice_02-10-2023_22-22-12.mp3',
  },
  {
    type: 'test',
    title: '🔹Завдання 4 - Тест 2/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a taxi operator. You need to order a taxi to the airport. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: true,
      },
    ],
    img: 'photo_5237960892807762232_y.jpg',
    audio: 'voice_02-10-2023_22-25-27.mp3',
  },
  {
    type: 'test',
    title: '🔹Завдання 4 - Тест 3/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a taxi operator. You need to order a taxi to the airport. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: true,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762234_y.jpg',
    audio: 'voice_02-10-2023_22-27-38.mp3',
  },
  {
    type: 'test',
    title: '🔹Завдання 4 - Тест 4/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a taxi operator. You need to order a taxi to the airport. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: true,
      },
    ],
    img: 'photo_5237960892807762236_y.jpg',
    audio: 'voice_02-10-2023_22-29-31.mp3',
  },
  {
    type: 'phr',
    img: 'photo_5237960892807762240_x.jpg',
    text: 'Часто використовувані фрази для реєстрації на рейс в аеропорту, які допоможуть вам виконати завдання правильно',
    textAfter: 'Якщо ви готові перейти до завдання, то тисніть на кнопку нижче.',

    words: [
      { en: 'Good afternoon!', ua: 'Доброго дня!' },
      {
        en: "I'd like to check in for a flight to Paris at 6:00.",
        ua: 'Я хочу здати багаж на рейс до Парижу о 6:00.',
      },
      { en: 'Can I get a seat by the window?', ua: 'Чи можу я отримати місце біля вікна?' },
      {
        en: "I'll be fine with a seat in second class on the plane.",
        ua: 'Мені підійде місце у другому класі в літаку.',
      },
      {
        en: 'I will only have carry-on luggage, no checked baggage.',
        ua: 'У мене буде лише ручна поклажа, без платного багажу.',
      },
      {
        en: 'I will have 1 checked baggage weighing 8 kg.',
        ua: 'У мене буде 1 зареєстрований багаж вагою 8 кг.',
      },
      {
        en: 'Can I find out my arrival time in Paris?',
        ua: 'Чи можу я дізнатися час свого прибуття до Парижу?',
      },
      {
        en: 'How do I get through the hand baggage checkpoints?',
        ua: 'Як мені пройти контроль ручної поклажі?',
      },
    ],
  },
  {
    type: 'test',
    title: '🔹Завдання 5 - Тест 1/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with an airport operator. You need to check in for your flight. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: true,
      },
    ],
    img: 'photo_5237960892807762242_y.jpg',
    audio: 'voice_03-10-2023_09-00-56.mp3',
  },
  {
    type: 'test',
    title: '🔹Завдання 5 - Тест 2/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with an airport operator. You need to check in for your flight. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: true,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762243_y.jpg',
    audio: 'voice_05-10-2023_16-24-07.mp3',
  },
  {
    type: 'test',
    title: '🔹Завдання 5 - Тест 3/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with an airport operator. You need to check in for your flight. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: true,
      },
      {
        value: 'B',
        isRight: false,
      },
      {
        value: 'C',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762244_y.jpg',
    audio: 'voice_05-10-2023_16-25-55.mp3',
  },
  {
    type: 'test',
    title: '🔹Завдання 5 - Тест 2/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with an airport operator. You need to check in for your flight. Choose the correct response to the operator depending on the context of the conversation.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A',
        isRight: false,
      },
      {
        value: 'B',
        isRight: true,
      },
      {
        value: 'C',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762245_y.jpg',
    audio: 'voice_05-10-2023_16-27-13.mp3',
  },
  {
    type: 'info',
    img: 'photo_5237960892807762246_y.jpg',
    text: 'Завдання виконано правильно. Ви успішно зареєстровані на рейс ✅ Якщо готові перейти до наступного завдання, то клікайте на кнопку нижче.',
  },
  {
    type: 'info',
    img: 'photo_5237960892807762246_y.jpg',
    title: 'СХЕМА "ПРАВИЛА ПОБУДОВИ РЕЧЕНЬ" ТА ГОТОВІ ФРАЗИ ДЛЯ ДІАЛОГУ З НОВИМИ ЗНАЙОМИМИ',
    text: 'За допомогою схеми та готових фраз, розберіться в правилах побудови речень і діалогу англійською',
  },
  {
    type: 'learn',
    img: '',
    title: '1. Розповідні речення ',
    text: '',
    schema:
      'The Subject – підмет (Хто? Що?) ➡️ The Predicate – присудок (Що робить? В якому стані знаходиться? Ким або чим виявляється?) ➡️ Object – додаток (Кого? Чого? Що? Кому? Чому? Ким? Чим?) ➡️ Adverbial Modifier – обставина (Де? Коли? Як? Куди?)',
    examples: [
      {
        en: 'I have been working as a marketer for 6 years.',
        ua: 'Я працюю маркетологом вже 6 років.',
      },
      { en: "I'm going on a tour of Paris tomorrow.", ua: 'Я піду на екскурсію Парижем завтра.' },
    ],
  },
  {
    type: 'learn',
    img: '',
    title: '2. Питальні речення',
    text: 'Вибір допоміжного дієслова залежить від граматичного часу в реченні.',
    schema:
      'Допоміжне дієслово / модальне дієслово (can, could, may, might, must, should, ought) ➡️ підмет ➡️ присудок ➡️ додаток ➡️ обставина',
    examples: [
      {
        en: 'Do you play the piano?',
        ua: 'Ти граєш на роялі? (Present Simple - Теперішній простий час)',
      },
      {
        en: 'Are you working now?',
        ua: 'Ти працюєш зараз? (Present Continuous - Теперішній тривалий час)',
      },
      {
        en: 'Have they already finished their project?',
        ua: 'Вони вже закінчили свій проект? (Present Perfect - Теперішній доконаний час)',
      },
      {
        en: 'Will you be free tomorrow morning?',
        ua: 'Чи ти будеш вільний завтра вранці? (Future Simple - Майбутній простий час)',
      },
    ],
  },
  {
    type: 'learn',
    img: '',
    title: '3. Спеціальні питання',
    text: `Вид питання, який використовується для отримання додаткової конкретної інформації, з'ясування певного факту або обставини. На спеціальні питання не можна дати відповідь тільки «так» або «ні».

Спеціальні питання завжди починаються з певного питального слова, що вказує на те, яка саме інформація необхідна. Після питального слова вживається такий самий порядок слів, що й в загальному питанні.`,
    schema: '',
    examples: [
      { en: 'What do you want to see in Paris?', ua: 'Що ти хочеш подивитися в Парижі?' },
      { en: 'Where will you go first in Paris?', ua: 'Куди ти підеш в першу чергу в Парижі?' },
      { en: 'How can I find the subway?', ua: 'Як я можу знайти метро?' },
    ],
  },
  {
    type: 'learn',
    img: '',
    title: 'Розповідні фрази',
    text: '',
    schema: '',
    examples: [
      {
        en: 'Hello! My name is Julia. I am 26 and I am from Ukraine.',
        ua: 'Привіт! Мене звати Юлія. Мені 26, і я з України.',
      },
      {
        en: 'I have been working as a marketer in a Ukrainian advertising agency for 6 years.',
        ua: 'Я працюю маркетологом в українській рекламній агенції вже 6 років.',
      },
      {
        en: 'I love traveling and do it at least once every 2 months.',
        ua: 'Я дуже люблю подорожувати і роблю це принаймні 1 раз на 2 місяці.',
      },
      {
        en: 'I am traveling to Paris for the first time. Seeing the Eiffel Tower has been my dream since childhood.',
        ua: 'Я подорожую до Парижу вперше. Побачити Ейфелеву вежу - це моя мрія з дитинства.',
      },
      {
        en: 'I enjoy hiking in major cultural capitals and meeting new people of different nationalities.',
        ua: 'Мені подобаються піші прогулки великими культурними столицями та нові знайомства з людьми різних національностей.',
      },
      {
        en: 'I have been learning English for six months now. My goal is to reach C1 level in the next six months.',
        ua: 'Я вчу англійську вже пів року. Моя ціль - рівень С1 за наступні півроку.',
      },
    ],
  },
  {
    type: 'learn',
    img: '',
    title: 'Питальні фрази',
    text: '',
    schema: '',
    examples: [
      {
        en: 'What is your name? How old are you? Where are you from?',
        ua: 'Як тебе звати? Скільки тобі років? Звідки ти?',
      },
      { en: 'What do you do for living and where do you work?', ua: 'Ким і де ти працюєш?' },
      {
        en: 'Do you like to travel? How often do you travel?',
        ua: 'Чи подобається тобі подорожувати? Як часто ти подорожуєш?',
      },
      {
        en: 'Have you ever been to Paris before? What do you want to see in Paris?',
        ua: 'Чи бувала ти в Парижі раніше? Що ти хочеш подивитися в Парижі?',
      },
      {
        en: 'What do you like to do in your free time?',
        ua: 'Чим ти любиш займатися у вільний час?',
      },
      {
        en: 'How long have you been learning English? What is your goal?',
        ua: 'Скільки часу ти вивчаєш англійську? Яка в тебе ціль?',
      },
    ],
  },

  {
    type: 'test',
    title: '🔹Завдання 6 - Тест 1/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a new friend from America on an airplane. You need to tell your new friend about yourself. Choose the correct answer according to the rules of sentence construction you have learned.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A) Hi! Sure, yeah. Yulia my name is. From Ukraine I am.',
        isRight: false,
      },
      {
        value: 'B) Hi! Yeah, sure. My name is Yulia, I am from Ukraine.',
        isRight: true,
      },
      {
        value: 'С) Yeah, sure. Hi! Ukraine am I from. My name is Yulia.',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762249_y.jpg',
    audio: '',
  },
  {
    type: 'test',
    title: '🔹Завдання 6 - Тест 2/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a new friend from America on an airplane. You need to tell your new friend about yourself. Choose the correct answer according to the rules of sentence construction you have learned.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value:
          'А) I have been working as a marketer in a Ukrainian advertising agency for 6 years.',
        isRight: true,
      },
      {
        value:
          'В) I have working been as a marketer in a Ukrainian advertising agency for 6 years.',
        isRight: false,
      },
      {
        value:
          'С) I as a marketer have been working in a Ukrainian advertising agency for 6 years.',
        isRight: false,
      },
    ],
    img: 'photo_5237960892807762250_y.jpg',
    audio: '',
  },
  {
    type: 'test',
    title: '🔹Завдання 6 - Тест 3/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a new friend from America on an airplane. You need to tell your new friend about yourself. Choose the correct answer according to the rules of sentence construction you have learned.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value: 'A) You like to do travel? How often you do travel?',
        isRight: false,
      },
      {
        value: 'B) Do like you to travel? How often do you travel?',
        isRight: false,
      },
      {
        value: 'C) Do you like to travel? How often do you travel?',
        isRight: true,
      },
    ],
    img: 'photo_5246790963316248736_y.jpg',
    audio: '',
  },
  {
    type: 'test',
    title: '🔹Завдання 6 - Тест 3/4',
    subtitle: 'Ознайомтеся із завданням нижче та оберіть відповідь з варіантів на картинці',
    ask: 'Dialogue with a new friend from America on an airplane. You need to tell your new friend about yourself. Choose the correct answer according to the rules of sentence construction you have learned.',
    wrong:
      'Завдання виконано неправильно 📛 Повторіть лексику, прочитайте завдання ще раз і повторіть спробу. Ваші квитки чекають на вас!',
    right: '',
    answers: [
      {
        value:
          'A) I been have English learning for six months now. My goal to reach C1 is level in the next six months.',
        isRight: false,
      },
      {
        value:
          "B) I've been learning English for six months now. My goal is to reach C1 level in the next six months.",
        isRight: false,
      },
      {
        value:
          'C)  I have been learning for six months English now. My goal is in the next six months to reach C1 level.',
        isRight: true,
      },
    ],
    img: 'photo_5246790963316248737_y.jpg',
    audio: '',
  },
];

const App = () => {
  const [start, setStart] = useState(false);
  const [position, setPosition] = useState(0);
  const [canNext, setCanNext] = useState(false);
  const quiz = data[position];
  return (
    <>
      <Header />
      <Paper sx={{ flex: '1 1', pt: '74px' }}>
        <Container>
          <StepperMy data={data as []} position={position} />
          {start || <Start dataStart={dataStart} setStart={setStart} />}

          {start && quiz.type === 'info' && (
            <>
              <Box sx={{ margin: '0 auto', height: '300px', width: '300px' }}>
                <img
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                  }}
                  src={`img/${quiz.img}`}
                  alt=""
                />
              </Box>
              <Typography align="center">{quiz.text}</Typography>
              <Stack direction="row" justifyContent="center">
                <Button onClick={() => setPosition(position + 1)} variant="outlined">
                  Далі
                </Button>
              </Stack>
            </>
          )}

          {start && quiz.type === 'lek' && (
            <>
              <Typography align="center">{quiz.text}</Typography>
              <TableMine data={quiz.words as Words} />
              <Typography align="center">{quiz.textAfter}</Typography>
              <Stack direction="row" justifyContent="center">
                <Button onClick={() => setPosition(position + 1)} variant="outlined">
                  Далі
                </Button>
              </Stack>
            </>
          )}
          {/* {start && quiz.type === 'test' && (
            <>
              <Typography align="center">{quiz.text}</Typography>
              <Typography align="center">{quiz.textAfter}</Typography>
              <Stack direction="row" justifyContent="center">
                <Button onClick={() => setPosition(position + 1)} variant="outlined">
                  Далі
                </Button>
              </Stack>
            </>
          )} */}
          {start && quiz.type === 'game1' && (
            <>
              <Typography align="center">{quiz.title}</Typography>
              <Typography align="center">{quiz.text}</Typography>
              <Game1 setCanNext={setCanNext} data={quiz.words as Words} />
              <Stack direction="row" justifyContent="center">
                <Button
                  disabled={canNext}
                  onClick={() => setPosition(position + 1)}
                  variant="outlined"
                >
                  Далі
                </Button>
              </Stack>
            </>
          )}
          {start && quiz.type === 'game2' && (
            <>
              <Typography align="center">{quiz.title}</Typography>
              <Typography align="center">{quiz.text}</Typography>
              <Game2 setCanNext={setCanNext} data={quiz.words as Words} />
              <Stack direction="row" justifyContent="center">
                <Button
                  disabled={canNext}
                  onClick={() => setPosition(position + 1)}
                  variant="outlined"
                >
                  Далі
                </Button>
              </Stack>
            </>
          )}
          {start && quiz.type === 'test' && (
            <>
              <Typography align="center">{quiz.title}</Typography>
              <Typography align="center">{quiz.subtitle}</Typography>
              <Typography align="center">{quiz.ask}</Typography>

              <Test1
                canNext={canNext}
                setCanNext={setCanNext}
                setStart={setStart}
                position={position}
                setPosition={setPosition}
                data={quiz as TestType}
              />
            </>
          )}
          {start && quiz.type === 'phr' && (
            <>
              <Typography align="center">{quiz.text}</Typography>
              <TablePhrases data={quiz.words as Words} />
              <Typography align="center">{quiz.textAfter}</Typography>
              <Stack direction="row" justifyContent="center">
                <Button onClick={() => setPosition(position + 1)} variant="outlined">
                  Далі
                </Button>
              </Stack>
            </>
          )}
          {start && quiz.type === 'learn' && (
            <>
              <Typography align="center" variant="h4">
                {quiz.title}
              </Typography>
              {quiz.schema && (
                <Typography mt={2} align="center" variant="h5">
                  схема
                </Typography>
              )}
              <Typography align="center">{quiz.schema}</Typography>
              <Typography align="center">{quiz.text}</Typography>
              <Typography mt={2} align="center" variant="h5">
                приклади
              </Typography>
              <TablePhrases data={quiz.examples as Words} />
              <Stack direction="row" justifyContent="center">
                <Button onClick={() => setPosition(position + 1)} variant="outlined">
                  Далі
                </Button>
              </Stack>
            </>
          )}
        </Container>
      </Paper>
    </>
  );
};

export default App;
