const card =
    ['Hearts', 'Spades', 'Ace']
    .filter(card =>
        /[aA].e/gi.test(card));
