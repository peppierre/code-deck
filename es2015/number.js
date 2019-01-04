function* cardSpec() {
    yield 'Spades';
    yield 2;
}
const card = cardSpec();
card.next();
card.next();
