import gta from "../img/gta-v-big.webp"


let Games = [
    {
        'id': 0,
        'title': 'Grand Theft Auto V',
        'img': '',
        'reviews': '6,100',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 1,
        'title': 'Cyberpunk 2077: Phantom Liberty',
        'img': 'https://images.gog-statics.com/45a284386e693f1576b96d98a0023a7905d3956c6f9aa913d3fe5d09a5994bee_product_card_v2_mobile_slider_450.jpg',
        'reviews': '6,200',
        'date': 'September 26, 2023',
        'genres': 'Role-playing - Action - Sci-fi',
        'star': 4,
        'video': 'https://www.youtube.com/embed/4QGhsGvws58?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 2,
        'title': 'The Witcher 3: Wild Hunt - Complete Edition',
        'img': 'https://images.gog-statics.com/71d71c40052877a42c096b8230c71856a560d42132208cfa8e719243b5c6626b_product_card_v2_mobile_slider_639.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/JY6Bjij7XXE?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 3,
        'title': 'F1® 2020',
        'img': 'https://games-all.net/uploads/posts/2023-01/1673956495_f1.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/wF0vF1uXXYU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 4,
        'title': 'Minecraft: Java Edition 1.19.2 ',
        'img': 'https://games-all.net/uploads/posts/2023-01/1674942531_minecraft-java-edition-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/MmB9b5njVbA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 5,
        'title': 'World of Tanks',
        'img': 'https://games-all.net/uploads/posts/2019-08/1566776279_7.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/J2kSkF4QEe0?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 6,
        'title': 'Act of War Gold Edition: Direct Action',
        'img': 'https://games-all.net/uploads/posts/2023-01/1674938377_act-of-war-gold-edition.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/tNExOOxlchI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 7,
        'title': 'Lost Ark',
        'img': 'https://games-all.net/uploads/posts/2019-11/thumbs/1573858391_12.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/m0Ohi0g3Q8g?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 8,
        'title': 'Hello Neighbor 2 Alpha 1.5 ',
        'img': 'https://games-all.net/uploads/posts/2023-02/thumbs/hello-neighbor-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/ANwsrrQSE88?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 9,
        'title': 'NEXT RP  ',
        'img': 'https://games-all.net/uploads/posts/2020-06/thumbs/1591833632_4.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/5FcWiyGcNiQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 10,
        'title': 'Fortnite',
        'img': 'https://games-all.net/uploads/posts/2015-07/1436356452_fortnite.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/PhpNnd1FITU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 11,
        'title': 'Far Cry 5',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513625240_far-cry-5.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/a_8THGId85U?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 12,
        'title': 'Football Manager 2019 ',
        'img': 'https://games-all.net/uploads/posts/2019-02/thumbs/1549093465_football-manager-2019.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/nP6Osa26_7g?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 13,
        'title': 'Oriental Empires  ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1515397324_oriental-empires.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/0mDDuU24F6c?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 14,
        'title': 'Dragon\'s Lair 2: Time Warp   ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1514908250_dragons-lair-2-time-warp.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/HzCJ5XInUqA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 15,
        'title': 'Gabelstapler 2014    ',
        'img': 'https://games-all.net/uploads/posts/2018-01/thumbs/1515253498_gabelstapler-2014.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/jWaX23MZ0Ag?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 16,
        'title': 'Ski World Simulator    ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1514116443_ski-world-simulator.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 3,
        'video': 'https://www.youtube.com/embed/EVsqQDdf9_Q?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 17,
        'title': 'Marvel vs. Capcom: Infinite',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396931_marvel-vs.-capcom-infinite.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/L-8a6P7YKVA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 18,
        'title': 'Рождественские Истории 6: Маленький Принц ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396627_christmas-stories-6-a-little-prince.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/So-RJHuxqHw?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 19,
        'title': 'Killer Instinct ',
        'img': 'https://games-all.net/uploads/posts/2017-12/thumbs/1513396329_killer-instinct.png',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/3LIL_MCJSoI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 20,
        'title': 'My Summer Car  ',
        'img': 'https://games-all.net/uploads/posts/2017-01/thumbs/1484106406_my-summer-car.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/xXwYBapZun8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 21,
        'title': 'PAYDAY 3',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-08/1692730116_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/dc5gw3ctb0o?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 22,
        'title': 'Фростпанк',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665886658_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 2,
        'video': 'https://www.youtube.com/embed/UxTxUL_8VkA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 23,
        'title': 'Forza Motorsport 2023',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-06/1686512872_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/4_y255J9lmQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 24,
        'title': 'Mount & Blade 2 Bannerlord',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664559867_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 5,
        'video': 'https://www.youtube.com/embed/d9Gr_f_I2QA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 25,
        'title': 'Зе Ласт оф Ас Парт 1 Ремейк',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670560415_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/Zf5xOsXXFY8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 26,
        'title': 'Starfield (Старфилд)',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1664725416_starfield.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/H26Dtgbsfzw?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 27,
        'title': 'Crusader Kings 3 (III)',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1663162167_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/YlOXhOxEum0?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 28,
        'title': 'No Mans Sky',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-06/1686207755_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/h3HphgSn0o4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 29,
        'title': 'Rust',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665236926_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/LGcECozNXEw?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 30,
        'title': 'Балдурс Гейт 3',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-08/1691082570_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/XuCfkgaaa08?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 31,
        'title': 'Рэтчет и Кланк: Рифт Апарт',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-05/1685464989_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/i_jZ3BV6Adc?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 32,
        'title': 'Biomutant',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-09/1694011462_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/73vSguCeJl0?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 33,
        'title': 'Дум Этернал',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1680866462_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/xXwYBapZun8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 34,
        'title': 'Saints Row 2022',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1663272450_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/xXwYBapZun8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 35,
        'title': 'EA Sports FC 24 (FIFA 24)',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1689267289_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/DYB02N5aJec?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 36,
        'title': 'FIFA 23 (ФИФА 23)',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1663619850_library_600x900_2x-12.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/o3V-GvvzjE4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 37,
        'title': 'Фар Край 6',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668462149_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/wzFLmoDyemA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 38,
        'title': 'Steel Division 2',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1667205596_library_600x900_2x.jpeg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/pN7LFy4o6HU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 39,
        'title': 'The Dark Pictures: The Devil In Me',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1664725624_the-dark-pictures-the-devil-in-me.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/rN3-X3W27U4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 40,
        'title': 'Ведьмак 3 Дикая Охота',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668378880_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/nBT2SP21f3Q?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 41,
        'title': 'Resident Evil 2 Remake',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665493167_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/xXwYBapZun8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 42,
        'title': 'Стрит Файтер 6',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-05/1685106790_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/1INU3FOJsTw?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 43,
        'title': 'Хэрайзн Зироу Дон',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668563853_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/joLIEHwPOqw?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 44,
        'title': 'Sackboy: A Big Adventure',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664479696_library_600x900_2x-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/MAaEqyE_Hfg?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 45,
        'title': 'Анчартед 4',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1663288749_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/PH8g_BoKB-w?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 46,
        'title': 'Герои Меча и Магии 5',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668464288_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/KolaL2g0bug?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 47,
        'title': 'Вольфенштейн Зе Нью Ордер',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668462412_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/l5Jsj3fWfDM?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 48,
        'title': 'Вотч Догс 1',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668464159_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/uhOnXqaTtlg?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 49,
        'title': 'Драгон Эйдж Инквизиция',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1688596432_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/7xn6_hcBo9Y?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 50,
        'title': 'Финал Фэнтези 15',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1689075930_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/ZFFmieoN-D?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 51,
        'title': 'Дизонорд 1',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668463543_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/I0fDTytPtgA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 52,
        'title': 'ФОЛЛАУТ 4',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668124261_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/0lWNdcbq3EU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 53,
        'title': 'Мафия 1',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668731419_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/VP48fer41YI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 54,
        'title': 'Макс Пейн 3',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1688595894_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/q6a8t3zL70A?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 55,
        'title': 'Дарк Соулс 3 (III)',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1681158333_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/ZXbPz8Jrkwg?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 56,
        'title': 'Миррорс Эдж Каталист',
        'img': 'https://itorrents-igruha.org/uploads/posts/2015-11/1446421411_37537483.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/7V775w4WR8Y?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 57,
        'title': 'Южный парк: Расколотый, но целый',
        'img': 'https://itorrents-igruha.org/uploads/posts/2017-08/1501809541__cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/_0LJ6wxSVGU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 58,
        'title': 'Зе Элдер Скролс 4 Обливион',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-06/1687444427_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/qJnnPh44Rlo?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 59,
        'title': '',
        'img': '',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/ZFFmieoN?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 60,
        'title': 'Дед Спейс 2',
        'img': 'https://itorrents-igruha.org/uploads/posts/2015-11/1446747448_dead-space-2_us_esrb_pc.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/z7Qy_4sWs3I?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 61,
        'title': 'Дед Спейс 1',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668463819_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/boRxhOjwiQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 62,
        'title': 'Вольфенштайн 2 Зе Нью Кэласоc',
        'img': 'https://itorrents-igruha.org/uploads/posts/2021-03/1615135354_screenshot_5.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/Tzeh7Z9vZHI?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 63,
        'title': 'Бордерлендс 3',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-03/1679614466_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/oouXu-fndps?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 64,
        'title': 'Ниер Автомата',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665239638_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/z7Qy_4sWs3I?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 65,
        'title': 'ФИФА 18',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670187539_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/l1FJfr_spJQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 66,
        'title': 'Резидент Эвил 8 Виладж',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1681137326_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/smX4W_upPME?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 67,
        'title': 'Ниох 1',
        'img': 'https://itorrents-igruha.org/uploads/posts/2021-12/1640615986_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/_9PIVYW8u20?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 68,
        'title': 'Стар Варс Джеди Фален Ордер',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1681755857_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/FAVB6F75rME?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 69,
        'title': 'Джаст Каус 4',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1688408703_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/sRPJa94rTpU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 70,
        'title': 'Ассасин Крид Вальгалла',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665860526_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/L_OIRHyQOv4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 71,
        'title': 'Элден Ринг',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665700897_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/gwdcGPxfDYY?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 72,
        'title': 'Форспокен',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1664725010_forspoken.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/Tku_2N6yhgc?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 73,
        'title': 'Готэм Найтс',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1664722058_gotham-knights.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/VSJTK8-R_sk?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 74,
        'title': 'Хогвартс Наследие',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1664820030_hogwarts-legacy.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/aOx7D1PSt9A?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 75,
        'title': 'Тайни Тина’эс Вандэландз',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1682032108_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/3gJgj2ngCyA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 76,
        'title': 'Дед Спейс Ремейк (2023)',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1664901843_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/96yUNw2zfW4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 77,
        'title': 'Стар Варс Джеди Сурвайвал',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-04/1680950982_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/_F6YBwIPzmk?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 78,
        'title': 'Марвелэс Спайдермен Ремастер',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665101965_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/wQkAfmvjWgs?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 79,
        'title': 'Биошок Инфинити',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-03/1679845011_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/uB9yYfKq4ZA?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 80,
        'title': 'Minecraft Legends',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-03/1677622819_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/1JSjZqV-YK8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 81,
        'title': 'Prey 2017',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-08/1691143864_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/64REEmgQoCQ?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 82,
        'title': '',
        'img': '',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/z7Qy_4sWs3I?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 84,
        'title': 'F1 Manager 2023',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-05/1684919458_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/896qC-7x9Mg?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 85,
        'title': 'Assassins Creed 4 Black Flag',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670983093_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/OwsotWkpSlU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 86,
        'title': 'Scorn',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664212433_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/ufnepZBpqlc?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 87,
        'title': 'Дизонорд 2',
        'img': 'https://itorrents-igruha.org/uploads/posts/2021-04/1619462647_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/zDWtoWBU3Ng?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 88,
        'title': 'Фар Край 5',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668464672_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/HimWP4Q8qg4?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 89,
        'title': 'Need for Speed Carbon',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668466450_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/aLTMTguEKps?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 90,
        'title': 'Need for Speed Payback',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-06/1687175411_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/SGBD33ASgTo?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 91,
        'title': 'Death Stranding Directors Cut',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-09/1664391657_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/6tgsz7WbidU?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 92,
        'title': 'Need for Speed Unbound',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665072445_library_600x900_2x.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/H2Y8XCe7F9E?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 93,
        'title': 'Dead Island 2',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-12/1670961819_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/aKFXvXjhBT8?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 94,
        'title': 'Shadow of the Tomb Raider - Definitive Edition',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665424139_library_600x900_2x-2.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/GJprOON79Ig?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 95,
        'title': 'The Dark Pictures Anthology Man of Medan',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1664612841_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/4ju_osH5k6w?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 96,
        'title': 'Ведьмак 2 (The Witcher 2)',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668385404_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/iRKasf_wN1M?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 97,
        'title': 'Assassins Creed 2',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1689074161_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/R20-MOOZPpY?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },

    {
        'id': 98,
        'title': 'A Plague Tale Requiem',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-10/1665698485_a-plague-tale-requiem.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/aaT4Q4NGm-A?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 99,
        'title': 'Total War Attila',
        'img': 'https://itorrents-igruha.org/uploads/posts/2023-07/1688652170_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/xLZAv0y0J94?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
    {
        'id': 100,
        'title': 'GTA San Andreas',
        'img': 'https://itorrents-igruha.org/uploads/posts/2022-11/1668124427_cover.jpg',
        'reviews': '6,300',
        'date': '2013-09-17',
        'genres': 'Action, Adventure',
        'star': 4,
        'video': 'https://www.youtube.com/embed/daw8xhaGj2s?autoplay=1&mute=1',
        'descr': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at commodi doloremque eum expedita fugiat harum illum itaque laborum mollitia, nemo quisquam quos reiciendis saepe velit. Accusamus adipisci aliquid consequatur consequuntur corporis deleniti et eum eveniet excepturi inventore molestiae mollitia nam natus odio, omnis possimus praesentium qui, repudiandae unde voluptate.'
    },
]


// Ваш массив данных
var games = [
    {
        'id': 1,
        'title': 'Grand Theft Auto V',
        // ... (остальные поля)
        'descr': 'Lorem ipsum dolor sit amet...',
    },
    // ... (другие объекты)
];

// Функция для изменения описания (descr) по ID
function changeDescrById(id, newDescr) {
    // Найти объект с указанным ID
    var game = Games.find(function (item, index) {
        return item.id === id;
    });

    // Если объект найден, изменить описание (descr)
    if (game) {
        game.descr = newDescr;
    } else {
        console.log("Игра с указанным ID не найдена.");
    }
}

let da = [
    {
        "descr": "Grand Theft Auto V is a multi-dimensional action-adventure game developed by Rockstar North. It offers an open world where players can explore the fictional city of Los Santos, engage in various criminal missions and activities, and enjoy a wide range of entertainment options."
    },

    {
        "descr": "Cyberpunk 2077: Phantom Liberty is a first-person RPG developed by CD Projekt. It allows players to explore the futuristic world of Night City, undertake cybernetic missions, and uncover mysteries in a turbulent future."
    },

    {
        "descr": "The Witcher 3: Wild Hunt - Complete Edition is an action role-playing game developed by CD Projekt Red. It features an expansive open world, immersive storytelling, and challenging quests as players step into the shoes of Geralt of Rivia, a monster hunter."
    },

    {
        "descr": "F1® 2020 is a Formula 1 racing simulation game developed and published by Codemasters. It offers an authentic Formula 1 experience, allowing players to race as their favorite teams and drivers in the thrilling world of motorsport."
    },

    {
        "descr": "Minecraft: Java Edition 1.19.2 is the Java-based version of the popular sandbox game. Players can craft, build, and explore in a blocky, procedurally-generated world filled with creativity and adventure."
    },

    {
        "descr": "World of Tanks is a free-to-play online multiplayer tank warfare game developed by Wargaming. Players command historic tanks and engage in strategic battles in this team-based, military-themed game."
    },

    {
        "descr": "Act of War Gold Edition: Direct Action is a real-time strategy game that offers a thrilling military experience. Players must lead their forces in intense battles and make strategic decisions to achieve victory."
    },

    {
        "descr": "Lost Ark is an action-packed online multiplayer role-playing game. Players embark on a grand adventure, battling formidable foes and uncovering ancient secrets in a beautifully crafted fantasy world."
    },

    {
        "descr": "Hello Neighbor 2 Alpha 1.5 is a suspenseful stealth horror game developed by Dynamic Pixels. Players must uncover the mysteries of their neighbor's dark secrets while avoiding detection in a tense and immersive environment."
    },

    {
        "descr": "NEXT RP is a popular role-playing server in the Grand Theft Auto V multiplayer mod known as Grand Theft Multiplayer (GT-MP). It offers a rich and dynamic role-playing experience within the world of GTA V."
    },
    {
        "descr": "Fortnite is a popular battle royale game developed by Epic Games. It features fast-paced gameplay, unique building mechanics, and a vibrant, ever-changing world."
    },

    {
        "descr": "Far Cry 5 is an open-world first-person shooter developed by Ubisoft. Set in Montana, players must confront a dangerous cult and navigate a hostile environment."
    },

    {
        "descr": "Football Manager 2019 is a sports management simulation game developed by Sports Interactive. Players take on the role of a football manager, making decisions to lead their team to success."
    },

    {
        "descr": "Oriental Empires is a turn-based strategy game that immerses players in ancient China. It offers complex gameplay with diplomacy, warfare, and city-building elements."
    },

    {
        "descr": "Dragon's Lair 2: Time Warp is an interactive movie adventure game. Players make choices to guide the protagonist, Dirk the Daring, through various challenges and perils."
    },

    {
        "descr": "Gabelstapler 2014 is a forklift simulator game. Players take on the role of a forklift operator and complete various tasks related to warehouse logistics."
    },

    {
        "descr": "Ski World Simulator is a simulation game where players manage a ski resort. They must ensure the resort's success by maintaining facilities and keeping guests satisfied."
    },

    {
        "descr": "Marvel vs. Capcom: Infinite is a crossover fighting game featuring characters from the Marvel and Capcom universes. Players engage in fast-paced battles with iconic characters."
    },

    {
        "descr": "Рождественские Истории 6: Маленький Принц is a hidden object puzzle adventure game. Players explore festive scenes and solve puzzles in a Christmas-themed story."
    },

    {
        "descr": "Killer Instinct is a fighting game known for its combo-based combat. It features a diverse roster of characters and offers intense, competitive gameplay."
    },

    {
        "descr": "My Summer Car is a simulation game where players build and maintain a car while living in a rural Finnish town. It offers a unique blend of vehicle customization and survival elements."
    },

    {
        "descr": "PAYDAY 3 is a cooperative first-person shooter game that focuses on heists and criminal activities. Players work together as a team to plan and execute elaborate heists."
    },

    {
        "descr": "Фростпанк (Frostpunk) is a city-building survival game set in a frozen, post-apocalyptic world. Players must make difficult moral decisions to ensure their city's survival."
    },

    {
        "descr": "Forza Motorsport 2023 is a racing simulation game known for its realistic graphics and physics. It offers a wide range of cars and tracks for players to enjoy."
    },

    {
        "descr": "Mount & Blade 2: Bannerlord is a medieval action role-playing game. Players can build armies, engage in battles, and conquer lands in a dynamic sandbox world."
    },

    {
        "descr": "Зе Ласт оф Ас Парт 1 Ремейк (The Last of Us Part 1 Remake) is a remake of the critically acclaimed action-adventure game. It offers enhanced visuals and storytelling."
    },

    {
        "descr": "Starfield (Старфилд) is an upcoming space-themed role-playing game developed by Bethesda Game Studios. It promises an expansive and immersive sci-fi experience."
    },

    {
        "descr": "Crusader Kings 3 (III) is a grand strategy game developed by Paradox Interactive. It allows players to lead a dynasty and make strategic decisions throughout history."
    },

    {
        "descr": "No Man's Sky is an exploration and survival game set in a procedurally generated universe. Players can discover planets, trade, and build in a vast, open galaxy."
    },

    {
        "descr": "Rust is a multiplayer survival game where players must gather resources, build shelters, and survive against other players and environmental threats."
    },

    {
        "descr": "Балдурс Гейт 3 (Baldur's Gate 3) is a role-playing game set in the Dungeons & Dragons universe. It offers a deep and immersive narrative-driven experience."
    },

    {
        "descr": "Рэтчет и Кланк: Рифт Апарт (Ratchet & Clank: Rift Apart) is an action-adventure game featuring the dynamic duo Ratchet and Clank. It showcases fast-paced combat and dimensional rifts."
    },

    {
        "descr": "Biomutant is an action role-playing game set in a post-apocalyptic world. Players control a customizable mutant character and embark on a journey to save their world."
    },
    {
        "descr": "Doom Eternal is a first-person shooter developed by id Software. It offers intense, fast-paced combat against hordes of demons in a hellish setting."
    },

    {
        "descr": "Saints Row 2022 is an upcoming open-world action-adventure game. It is the next installment in the popular Saints Row series, known for its over-the-top humor and gameplay."
    },

    {
        "descr": "EA Sports FC 24 (FIFA 24) is a sports simulation game developed by Electronic Arts. It continues the long-running FIFA series, offering realistic soccer gameplay and features."
    },

    {
        "descr": "FIFA 23 (ФИФА 23) is a soccer simulation game by Electronic Arts. It features a wide range of teams, players, and modes, delivering an immersive soccer experience."
    },

    {
        "descr": "Фар Край 6 (Far Cry 6) is an open-world first-person shooter developed by Ubisoft. It takes players to the fictional tropical island of Yara, where they confront a ruthless dictator."
    },

    {
        "descr": "Steel Division 2 is a real-time strategy game set during World War II. It offers large-scale battles, realistic tactics, and a variety of historical units."
    },

    {
        "descr": "The Dark Pictures: The Devil In Me is an interactive horror adventure game. It presents players with choices that affect the outcome of the story, creating a unique horror experience."
    },

    {
        "descr": "Ведьмак 3 Дикая Охота (The Witcher 3: Wild Hunt) is an action role-playing game by CD Projekt Red. It offers an expansive open world, rich storytelling, and monster hunting."
    },

    {
        "descr": "Resident Evil 2 Remake is a survival horror game that reimagines the classic Resident Evil 2. It features updated graphics, gameplay, and scares for a new generation of players."
    },

    {
        "descr": "Стрит Файтер 6 (Street Fighter 6) is an upcoming fighting game. It continues the iconic Street Fighter series, known for its diverse roster of fighters and competitive gameplay."
    },

    {
        "descr": "Хэрайзн Зироу Дон (Horizon Zero Dawn) is an action RPG developed by Guerrilla Games. It combines open-world exploration with a post-apocalyptic setting and robotic creatures."
    },

    {
        "descr": "Sackboy: A Big Adventure is a platforming game in the LittleBigPlanet series. Players control Sackboy as he embarks on a colorful and imaginative adventure."
    },

    {
        "descr": "Анчартед 4 (Uncharted 4: A Thief's End) is an action-adventure game by Naughty Dog. It follows the adventures of Nathan Drake in search of hidden treasures."
    },

    {
        "descr": "Герои Меча и Магии 5 (Heroes of Might and Magic V) is a turn-based strategy game set in a fantasy world. It challenges players to lead armies and conquer lands."
    },

    {
        "descr": "Вольфенштейн Зе Нью Ордер (Wolfenstein: The New Order) is a first-person shooter set in an alternate history where the Nazis won World War II. Players battle against the regime."
    },

    {
        "descr": "Вотч Догс 1 (Watch Dogs) is an open-world action-adventure game developed by Ubisoft. It explores themes of hacking and surveillance in a near-future Chicago."
    },

    {
        "descr": "Драгон Эйдж Инквизиция (Dragon Age: Inquisition) is an action RPG by BioWare. It features a rich fantasy world and a complex narrative with choices that impact the story."
    },

    {
        "descr": "Финал Фэнтези 15 (Final Fantasy XV) is a role-playing game by Square Enix. It offers a blend of fantasy, action combat, and an epic road trip adventure."
    },

    {
        "descr": "Дизонорд 1 (Dishonored) is a stealth-action game developed by Arkane Studios. Players take on the role of an assassin with supernatural abilities in a steampunk world."
    },

    {
        "descr": "ФОЛЛАУТ 4 (Fallout 4) is an open-world RPG set in a post-apocalyptic wasteland. It features a rich narrative, exploration, and the ability to build settlements."
    },

    {
        "descr": "Мафия 1 (Mafia) is a narrative-driven action-adventure game set in the 1930s. It follows the life of Tommy Angelo, a taxi driver turned mobster."
    },

    {
        "descr": "Макс Пейн 3 (Max Payne 3) is a third-person shooter with a noir-inspired narrative. Players control Max Payne as he navigates through a gritty and violent story."
    },

    {
        "descr": "Дарк Соулс 3 (Dark Souls III) is an action RPG known for its challenging gameplay and dark fantasy setting. Players face formidable enemies and explore intricate levels."
    },

    {
        "descr": "Миррорс Эдж Каталист (Mirror's Edge Catalyst) is a first-person parkour game. Players control Faith Connors as she navigates a futuristic city while avoiding authorities."
    },

    {
        "descr": "Южный парк: Расколотый, но целый (South Park: The Fractured but Whole) is a role-playing game set in the South Park universe. It offers humor and satire in a superhero-themed story."
    },

    {
        "descr": "Зе Элдер Скролс 4 Обливион (The Elder Scrolls IV: Oblivion) is an open-world RPG by Bethesda Game Studios. It immerses players in a fantasy realm filled with quests and exploration."
    },
    {
        "descr": "Дед Спейс 2 (Dead Space 2) is a survival horror game. It continues the story of Isaac Clarke as he battles terrifying Necromorphs on the Sprawl space station."
    },

    {
        "descr": "Дед Спейс 1 (Dead Space) is a survival horror game. Players take on the role of engineer Isaac Clarke as he fights to survive on a derelict spaceship infested with monsters."
    },

    {
        "descr": "Вольфенштайн 2 Зе Нью Кэласоc (Wolfenstein II: The New Colossus) is a first-person shooter set in an alternate history where Nazis control America. Players join the resistance to liberate the nation."
    },

    {
        "descr": "Бордерлендс 3 (Borderlands 3) is a first-person shooter with RPG elements. It features a unique cel-shaded art style, cooperative gameplay, and a wide array of weapons."
    },

    {
        "descr": "Ниер Автомата (NieR: Automata) is an action RPG developed by PlatinumGames. It explores themes of androids, humanity, and existentialism in a post-apocalyptic world."
    },

    {
        "descr": "ФИФА 18 (FIFA 18) is a soccer simulation game by Electronic Arts. It offers realistic soccer gameplay and a variety of modes, including the popular FIFA Ultimate Team."
    },

    {
        "descr": "Резидент Эвил 8 Виладж (Resident Evil 8 Village) is a survival horror game. Players enter a mysterious village and confront grotesque creatures in this installment of the Resident Evil series."
    },

    {
        "descr": "Ниох 1 (Nioh) is an action RPG set in feudal Japan. It combines challenging combat mechanics with a dark and immersive story."
    },

    {
        "descr": "Стар Варс Джеди Фален Ордер (Star Wars Jedi: Fallen Order) is an action-adventure game set in the Star Wars universe. Players control a young Jedi as they navigate a galaxy in turmoil."
    },

    {
        "descr": "Джаст Каус 4 (Just Cause 4) is an open-world action-adventure game. Players take on the role of Rico Rodriguez and engage in over-the-top action and destruction."
    },

    {
        "descr": "Ассасин Крид Вальгалла (Assassin's Creed Valhalla) is an action RPG set in the Viking Age. Players assume the role of Eivor, a Viking warrior, as they explore and conquer England."
    },

    {
        "descr": "Элден Ринг (Elden Ring) is an upcoming action RPG developed by FromSoftware and published by Bandai Namco Entertainment. It is a highly anticipated collaboration between Hidetaka Miyazaki and George R. R. Martin."
    },

    {
        "descr": "Форспокен (Forspoken) is an upcoming action RPG developed by Luminous Productions. It follows the journey of Frey Holland in a magical and dangerous world."
    },

    {
        "descr": "Готэм Найтс (Gotham Knights) is an upcoming action-adventure game set in the Batman universe. Players take on the roles of various Bat-family members to protect Gotham City."
    },

    {
        "descr": "Хогвартс Наследие (Hogwarts Legacy) is an action RPG set in the Harry Potter universe. Players attend Hogwarts School of Witchcraft and Wizardry and shape their own magical destiny."
    },

    {
        "descr": "Тайни Тина’эс Вандэландз (Tiny Tina's Wonderlands) is an upcoming action RPG spin-off of the Borderlands series. It features a whimsical fantasy setting and cooperative gameplay."
    },

    {
        "descr": "Дед Спейс Ремейк (2023) (Dead Space Remake) is an upcoming remake of the original Dead Space game. It promises to deliver a modernized and terrifying survival horror experience."
    },

    {
        "descr": "Стар Варс Джеди Сурвайвал (Star Wars Jedi: Survival) is an upcoming action game set in the Star Wars universe. It will challenge players to survive in a hostile environment."
    },

    {
        "descr": "Марвелэс Спайдермен Ремастер (Marvel's Spider-Man Remastered) is a remastered version of the popular Spider-Man game, featuring enhanced graphics and gameplay improvements."
    },

    {
        "descr": "Биошок Инфинити (BioShock Infinite) is a first-person shooter with a rich narrative. It takes players to the floating city of Columbia and"
    },
    {
        "descr": "F1 Manager 2023 is a motorsport management simulation game. Players take on the role of a Formula 1 team manager and make strategic decisions to lead their team to victory."
    },

    {
        "descr": "Assassins Creed 4 Black Flag is an action-adventure game in the Assassin's Creed series. It follows the adventures of Edward Kenway, a pirate and assassin, in the Caribbean."
    },

    {
        "descr": "Scorn is a first-person horror game with surreal and grotesque imagery. Players explore a nightmarish world filled with disturbing creatures and puzzles."
    },

    {
        "descr": "Дизонорд 2 (Dishonored 2) is a stealth-action game developed by Arkane Studios. It continues the story of the supernatural assassin Corvo Attano."
    },

    {
        "descr": "Фар Край 5 (Far Cry 5) is an open-world first-person shooter. It is set in a fictional county in Montana and features a cult as the main antagonists."
    },

    {
        "descr": "Need for Speed Carbon is a racing game in the Need for Speed series. It focuses on illegal street racing and features customizable cars and intense pursuits."
    },

    {
        "descr": "Need for Speed Payback is a racing game with a focus on heists and car culture. Players engage in high-speed races and action-packed heists."
    },

    {
        "descr": "Death Stranding Director's Cut is an enhanced version of the open-world action game created by Hideo Kojima. It includes additional content and improvements."
    },

    {
        "descr": "Need for Speed Unbound is an upcoming racing game in the Need for Speed series. It promises a thrilling racing experience and extensive car customization."
    },

    {
        "descr": "Dead Island 2 is an upcoming open-world zombie survival game. Players must navigate a zombie-infested California and work together to survive."
    },

    {
        "descr": "Shadow of the Tomb Raider - Definitive Edition is an enhanced edition of the action-adventure game. It includes all DLC content and additional features."
    },

    {
        "descr": "The Dark Pictures Anthology Man of Medan is an interactive horror adventure game. It offers a branching narrative and choices that impact the story's outcome."
    },

    {
        "descr": "Ведьмак 2 (The Witcher 2: Assassins of Kings) is an action RPG by CD Projekt. It follows Geralt of Rivia as he becomes embroiled in political intrigue and conflict."
    },

    {
        "descr": "Assassins Creed 2 is an action-adventure game and the second installment in the Assassin's Creed series. It follows the adventures of Ezio Auditore in Renaissance Italy."
    },

    {
        "descr": "A Plague Tale Requiem is an upcoming sequel to A Plague Tale: Innocence. It continues the story of Amicia and Hugo as they navigate a plague-ridden world."
    },

    {
        "descr": "Total War Attila is a strategy game in the Total War series. It is set during the fall of the Western Roman Empire and offers deep strategic gameplay."
    },

    {
        "descr": "GTA San Andreas (Grand Theft Auto: San Andreas) is an open-world action-adventure game. Players assume the role of Carl Johnson as he navigates the crime-ridden streets of Los Santos."
    },
    {
        "descr": "Assassins Creed 2 is an action-adventure game and the second installment in the Assassin's Creed series. It follows the adventures of Ezio Auditore in Renaissance Italy."
    },

    {
        "descr": "A Plague Tale Requiem is an upcoming sequel to A Plague Tale: Innocence. It continues the story of Amicia and Hugo as they navigate a plague-ridden world."
    },

    {
        "descr": "Total War Attila is a strategy game in the Total War series. It is set during the fall of the Western Roman Empire and offers deep strategic gameplay."
    },

    {
        "descr": "GTA San Andreas (Grand Theft Auto: San Andreas) is an open-world action-adventure game. Players assume the role of Carl Johnson as he navigates the crime-ridden streets of Los Santos."
    },
    {
        "descr": "GTA San Andreas (Grand Theft Auto: San Andreas) is an open-world action-adventure game. Players assume the role of Carl Johnson as he navigates the crime-ridden streets of Los Santos."
    }


]

for (let i = 0; i < da.length; i++) {
    changeDescrById(i, da[i]['descr'])
}


export { Games }