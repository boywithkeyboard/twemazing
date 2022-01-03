/*!
 *  Twemazing v2.0.3 by Azury - https://twemazing.com
 *  License - Apache-2.0
 */

const emojis = [
  {
    n: '1st-place-medal',
    c: '1f947'
  },
  {
    n: '2nd-place-medal',
    c: '1f948'
  },
  {
    n: '3rd-place-medal',
    c: '1f949'
  },
  {
    n: 'a-button-blood-type',
    c: '1f170'
  },
  {
    n: 'ab-button-blood-type',
    c: '1f18e'
  },
  {
    n: 'abacus',
    c: '1f9ee'
  },
  {
    n: 'accordion',
    c: '1fa97'
  },
  {
    n: 'adhesive-bandage',
    c: '1fa79'
  },
  {
    n: 'admission-tickets',
    c: '1f39f'
  },
  {
    n: 'aerial-tramway',
    c: '1f6a1'
  },
  {
    n: 'airplane',
    c: '2708'
  },
  {
    n: 'airplane-arrival',
    c: '1f6ec'
  },
  {
    n: 'airplane-departure',
    c: '1f6eb'
  },
  {
    n: 'alarm-clock',
    c: '23f0'
  },
  {
    n: 'alembic',
    c: '2697'
  },
  {
    n: 'alien',
    c: '1f47d'
  },
  {
    n: 'alien-monster',
    c: '1f47e'
  },
  {
    n: 'ambulance',
    c: '1f691'
  },
  {
    n: 'american-football',
    c: '1f3c8'
  },
  {
    n: 'amphora',
    c: '1f3fa'
  },
  {
    n: 'anatomical-heart',
    c: '1fac0'
  },
  {
    n: 'anchor',
    c: '2693'
  },
  {
    n: 'anger-symbol',
    c: '1f4a2'
  },
  {
    n: 'angry-face',
    c: '1f620'
  },
  {
    n: 'angry-face-with-horns',
    c: '1f47f'
  },
  {
    n: 'anguished-face',
    c: '1f627'
  },
  {
    n: 'ant',
    c: '1f41c'
  },
  {
    n: 'antenna-bars',
    c: '1f4f6'
  },
  {
    n: 'anxious-face-with-sweat',
    c: '1f630'
  },
  {
    n: 'aquarius',
    c: '2652'
  },
  {
    n: 'aries',
    c: '2648'
  },
  {
    n: 'articulated-lorry',
    c: '1f69b'
  },
  {
    n: 'artist',
    c: '1f9d1-200d-1f3a8'
  },
  {
    n: 'artist-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f3a8'
  },
  {
    n: 'artist-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f3a8'
  },
  {
    n: 'artist-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f3a8'
  },
  {
    n: 'artist-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f3a8'
  },
  {
    n: 'artist-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f3a8'
  },
  {
    n: 'artist-palette',
    c: '1f3a8'
  },
  {
    n: 'astonished-face',
    c: '1f632'
  },
  {
    n: 'astronaut',
    c: '1f9d1-200d-1f680'
  },
  {
    n: 'astronaut-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f680'
  },
  {
    n: 'astronaut-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f680'
  },
  {
    n: 'astronaut-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f680'
  },
  {
    n: 'astronaut-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f680'
  },
  {
    n: 'astronaut-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f680'
  },
  {
    n: 'atm-sign',
    c: '1f3e7'
  },
  {
    n: 'atom-symbol',
    c: '269b'
  },
  {
    n: 'auto-rickshaw',
    c: '1f6fa'
  },
  {
    n: 'automobile',
    c: '1f697'
  },
  {
    n: 'avocado',
    c: '1f951'
  },
  {
    n: 'axe',
    c: '1fa93'
  },
  {
    n: 'b-button-blood-type',
    c: '1f171'
  },
  {
    n: 'baby',
    c: '1f476'
  },
  {
    n: 'baby-angel',
    c: '1f47c'
  },
  {
    n: 'baby-angel-dark-skin-tone',
    c: '1f47c-1f3ff'
  },
  {
    n: 'baby-angel-light-skin-tone',
    c: '1f47c-1f3fb'
  },
  {
    n: 'baby-angel-medium-dark-skin-tone',
    c: '1f47c-1f3fe'
  },
  {
    n: 'baby-angel-medium-light-skin-tone',
    c: '1f47c-1f3fc'
  },
  {
    n: 'baby-angel-medium-skin-tone',
    c: '1f47c-1f3fd'
  },
  {
    n: 'baby-bottle',
    c: '1f37c'
  },
  {
    n: 'baby-chick',
    c: '1f424'
  },
  {
    n: 'baby-dark-skin-tone',
    c: '1f476-1f3ff'
  },
  {
    n: 'baby-light-skin-tone',
    c: '1f476-1f3fb'
  },
  {
    n: 'baby-medium-dark-skin-tone',
    c: '1f476-1f3fe'
  },
  {
    n: 'baby-medium-light-skin-tone',
    c: '1f476-1f3fc'
  },
  {
    n: 'baby-medium-skin-tone',
    c: '1f476-1f3fd'
  },
  {
    n: 'baby-symbol',
    c: '1f6bc'
  },
  {
    n: 'back-arrow',
    c: '1f519'
  },
  {
    n: 'backhand-index-pointing-down',
    c: '1f447'
  },
  {
    n: 'backhand-index-pointing-down-dark-skin-tone',
    c: '1f447-1f3ff'
  },
  {
    n: 'backhand-index-pointing-down-light-skin-tone',
    c: '1f447-1f3fb'
  },
  {
    n: 'backhand-index-pointing-down-medium-dark-skin-tone',
    c: '1f447-1f3fe'
  },
  {
    n: 'backhand-index-pointing-down-medium-light-skin-tone',
    c: '1f447-1f3fc'
  },
  {
    n: 'backhand-index-pointing-down-medium-skin-tone',
    c: '1f447-1f3fd'
  },
  {
    n: 'backhand-index-pointing-left',
    c: '1f448'
  },
  {
    n: 'backhand-index-pointing-left-dark-skin-tone',
    c: '1f448-1f3ff'
  },
  {
    n: 'backhand-index-pointing-left-light-skin-tone',
    c: '1f448-1f3fb'
  },
  {
    n: 'backhand-index-pointing-left-medium-dark-skin-tone',
    c: '1f448-1f3fe'
  },
  {
    n: 'backhand-index-pointing-left-medium-light-skin-tone',
    c: '1f448-1f3fc'
  },
  {
    n: 'backhand-index-pointing-left-medium-skin-tone',
    c: '1f448-1f3fd'
  },
  {
    n: 'backhand-index-pointing-right',
    c: '1f449'
  },
  {
    n: 'backhand-index-pointing-right-dark-skin-tone',
    c: '1f449-1f3ff'
  },
  {
    n: 'backhand-index-pointing-right-light-skin-tone',
    c: '1f449-1f3fb'
  },
  {
    n: 'backhand-index-pointing-right-medium-dark-skin-tone',
    c: '1f449-1f3fe'
  },
  {
    n: 'backhand-index-pointing-right-medium-light-skin-tone',
    c: '1f449-1f3fc'
  },
  {
    n: 'backhand-index-pointing-right-medium-skin-tone',
    c: '1f449-1f3fd'
  },
  {
    n: 'backhand-index-pointing-up',
    c: '1f446'
  },
  {
    n: 'backhand-index-pointing-up-dark-skin-tone',
    c: '1f446-1f3ff'
  },
  {
    n: 'backhand-index-pointing-up-light-skin-tone',
    c: '1f446-1f3fb'
  },
  {
    n: 'backhand-index-pointing-up-medium-dark-skin-tone',
    c: '1f446-1f3fe'
  },
  {
    n: 'backhand-index-pointing-up-medium-light-skin-tone',
    c: '1f446-1f3fc'
  },
  {
    n: 'backhand-index-pointing-up-medium-skin-tone',
    c: '1f446-1f3fd'
  },
  {
    n: 'backpack',
    c: '1f392'
  },
  {
    n: 'bacon',
    c: '1f953'
  },
  {
    n: 'badger',
    c: '1f9a1'
  },
  {
    n: 'badminton',
    c: '1f3f8'
  },
  {
    n: 'bagel',
    c: '1f96f'
  },
  {
    n: 'baggage-claim',
    c: '1f6c4'
  },
  {
    n: 'baguette-bread',
    c: '1f956'
  },
  {
    n: 'balance-scale',
    c: '2696'
  },
  {
    n: 'bald',
    c: '1f9b2'
  },
  {
    n: 'ballet-shoes',
    c: '1fa70'
  },
  {
    n: 'balloon',
    c: '1f388'
  },
  {
    n: 'ballot-box-with-ballot',
    c: '1f5f3'
  },
  {
    n: 'banana',
    c: '1f34c'
  },
  {
    n: 'banjo',
    c: '1fa95'
  },
  {
    n: 'bank',
    c: '1f3e6'
  },
  {
    n: 'bar-chart',
    c: '1f4ca'
  },
  {
    n: 'barber-pole',
    c: '1f488'
  },
  {
    n: 'baseball',
    c: '26be'
  },
  {
    n: 'basket',
    c: '1f9fa'
  },
  {
    n: 'basketball',
    c: '1f3c0'
  },
  {
    n: 'bat',
    c: '1f987'
  },
  {
    n: 'bathtub',
    c: '1f6c1'
  },
  {
    n: 'battery',
    c: '1f50b'
  },
  {
    n: 'beach-with-umbrella',
    c: '1f3d6'
  },
  {
    n: 'beaming-face-with-smiling-eyes',
    c: '1f601'
  },
  {
    n: 'bear',
    c: '1f43b'
  },
  {
    n: 'beating-heart',
    c: '1f493'
  },
  {
    n: 'beaver',
    c: '1f9ab'
  },
  {
    n: 'bed',
    c: '1f6cf'
  },
  {
    n: 'beer-mug',
    c: '1f37a'
  },
  {
    n: 'beetle',
    c: '1fab2'
  },
  {
    n: 'bell',
    c: '1f514'
  },
  {
    n: 'bell-pepper',
    c: '1fad1'
  },
  {
    n: 'bell-with-slash',
    c: '1f515'
  },
  {
    n: 'bellhop-bell',
    c: '1f6ce'
  },
  {
    n: 'bento-box',
    c: '1f371'
  },
  {
    n: 'beverage-box',
    c: '1f9c3'
  },
  {
    n: 'bicycle',
    c: '1f6b2'
  },
  {
    n: 'bikini',
    c: '1f459'
  },
  {
    n: 'billed-cap',
    c: '1f9e2'
  },
  {
    n: 'biohazard',
    c: '2623'
  },
  {
    n: 'bird',
    c: '1f426'
  },
  {
    n: 'birthday-cake',
    c: '1f382'
  },
  {
    n: 'bison',
    c: '1f9ac'
  },
  {
    n: 'black-cat',
    c: '1f408-200d-2b1b'
  },
  {
    n: 'black-circle',
    c: '26ab'
  },
  {
    n: 'black-flag',
    c: '1f3f4'
  },
  {
    n: 'black-heart',
    c: '1f5a4'
  },
  {
    n: 'black-large-square',
    c: '2b1b'
  },
  {
    n: 'black-medium-small-square',
    c: '25fe'
  },
  {
    n: 'black-medium-square',
    c: '25fc'
  },
  {
    n: 'black-nib',
    c: '2712'
  },
  {
    n: 'black-small-square',
    c: '25aa'
  },
  {
    n: 'black-square-button',
    c: '1f532'
  },
  {
    n: 'blossom',
    c: '1f33c'
  },
  {
    n: 'blowfish',
    c: '1f421'
  },
  {
    n: 'blue-book',
    c: '1f4d8'
  },
  {
    n: 'blue-circle',
    c: '1f535'
  },
  {
    n: 'blue-heart',
    c: '1f499'
  },
  {
    n: 'blue-square',
    c: '1f7e6'
  },
  {
    n: 'blueberries',
    c: '1fad0'
  },
  {
    n: 'boar',
    c: '1f417'
  },
  {
    n: 'bomb',
    c: '1f4a3'
  },
  {
    n: 'bone',
    c: '1f9b4'
  },
  {
    n: 'bookmark',
    c: '1f516'
  },
  {
    n: 'bookmark-tabs',
    c: '1f4d1'
  },
  {
    n: 'books',
    c: '1f4da'
  },
  {
    n: 'boomerang',
    c: '1fa83'
  },
  {
    n: 'bottle-with-popping-cork',
    c: '1f37e'
  },
  {
    n: 'bouquet',
    c: '1f490'
  },
  {
    n: 'bow-and-arrow',
    c: '1f3f9'
  },
  {
    n: 'bowl-with-spoon',
    c: '1f963'
  },
  {
    n: 'bowling',
    c: '1f3b3'
  },
  {
    n: 'boxing-glove',
    c: '1f94a'
  },
  {
    n: 'boy',
    c: '1f466'
  },
  {
    n: 'boy-dark-skin-tone',
    c: '1f466-1f3ff'
  },
  {
    n: 'boy-light-skin-tone',
    c: '1f466-1f3fb'
  },
  {
    n: 'boy-medium-dark-skin-tone',
    c: '1f466-1f3fe'
  },
  {
    n: 'boy-medium-light-skin-tone',
    c: '1f466-1f3fc'
  },
  {
    n: 'boy-medium-skin-tone',
    c: '1f466-1f3fd'
  },
  {
    n: 'brain',
    c: '1f9e0'
  },
  {
    n: 'bread',
    c: '1f35e'
  },
  {
    n: 'breast-feeding',
    c: '1f931'
  },
  {
    n: 'breast-feeding-dark-skin-tone',
    c: '1f931-1f3ff'
  },
  {
    n: 'breast-feeding-light-skin-tone',
    c: '1f931-1f3fb'
  },
  {
    n: 'breast-feeding-medium-dark-skin-tone',
    c: '1f931-1f3fe'
  },
  {
    n: 'breast-feeding-medium-light-skin-tone',
    c: '1f931-1f3fc'
  },
  {
    n: 'breast-feeding-medium-skin-tone',
    c: '1f931-1f3fd'
  },
  {
    n: 'brick',
    c: '1f9f1'
  },
  {
    n: 'bridge-at-night',
    c: '1f309'
  },
  {
    n: 'briefcase',
    c: '1f4bc'
  },
  {
    n: 'briefs',
    c: '1fa72'
  },
  {
    n: 'bright-button',
    c: '1f506'
  },
  {
    n: 'broccoli',
    c: '1f966'
  },
  {
    n: 'broken-heart',
    c: '1f494'
  },
  {
    n: 'broom',
    c: '1f9f9'
  },
  {
    n: 'brown-circle',
    c: '1f7e4'
  },
  {
    n: 'brown-heart',
    c: '1f90e'
  },
  {
    n: 'brown-square',
    c: '1f7eb'
  },
  {
    n: 'bubble-tea',
    c: '1f9cb'
  },
  {
    n: 'bucket',
    c: '1faa3'
  },
  {
    n: 'bug',
    c: '1f41b'
  },
  {
    n: 'building-construction',
    c: '1f3d7'
  },
  {
    n: 'bullet-train',
    c: '1f685'
  },
  {
    n: 'bullseye',
    c: '1f3af'
  },
  {
    n: 'burrito',
    c: '1f32f'
  },
  {
    n: 'bus',
    c: '1f68c'
  },
  {
    n: 'bus-stop',
    c: '1f68f'
  },
  {
    n: 'bust-in-silhouette',
    c: '1f464'
  },
  {
    n: 'busts-in-silhouette',
    c: '1f465'
  },
  {
    n: 'butter',
    c: '1f9c8'
  },
  {
    n: 'butterfly',
    c: '1f98b'
  },
  {
    n: 'cactus',
    c: '1f335'
  },
  {
    n: 'calendar',
    c: '1f4c5'
  },
  {
    n: 'call-me-hand',
    c: '1f919'
  },
  {
    n: 'call-me-hand-dark-skin-tone',
    c: '1f919-1f3ff'
  },
  {
    n: 'call-me-hand-light-skin-tone',
    c: '1f919-1f3fb'
  },
  {
    n: 'call-me-hand-medium-dark-skin-tone',
    c: '1f919-1f3fe'
  },
  {
    n: 'call-me-hand-medium-light-skin-tone',
    c: '1f919-1f3fc'
  },
  {
    n: 'call-me-hand-medium-skin-tone',
    c: '1f919-1f3fd'
  },
  {
    n: 'camel',
    c: '1f42a'
  },
  {
    n: 'camera',
    c: '1f4f7'
  },
  {
    n: 'camera-with-flash',
    c: '1f4f8'
  },
  {
    n: 'camping',
    c: '1f3d5'
  },
  {
    n: 'cancer',
    c: '264b'
  },
  {
    n: 'candle',
    c: '1f56f'
  },
  {
    n: 'candy',
    c: '1f36c'
  },
  {
    n: 'canned-food',
    c: '1f96b'
  },
  {
    n: 'canoe',
    c: '1f6f6'
  },
  {
    n: 'capricorn',
    c: '2651'
  },
  {
    n: 'card-file-box',
    c: '1f5c3'
  },
  {
    n: 'card-index',
    c: '1f4c7'
  },
  {
    n: 'card-index-dividers',
    c: '1f5c2'
  },
  {
    n: 'carousel-horse',
    c: '1f3a0'
  },
  {
    n: 'carp-streamer',
    c: '1f38f'
  },
  {
    n: 'carpentry-saw',
    c: '1fa9a'
  },
  {
    n: 'carrot',
    c: '1f955'
  },
  {
    n: 'castle',
    c: '1f3f0'
  },
  {
    n: 'cat',
    c: '1f408'
  },
  {
    n: 'cat-face',
    c: '1f431'
  },
  {
    n: 'cat-with-tears-of-joy',
    c: '1f639'
  },
  {
    n: 'cat-with-wry-smile',
    c: '1f63c'
  },
  {
    n: 'chains',
    c: '26d3'
  },
  {
    n: 'chair',
    c: '1fa91'
  },
  {
    n: 'chart-decreasing',
    c: '1f4c9'
  },
  {
    n: 'chart-increasing',
    c: '1f4c8'
  },
  {
    n: 'chart-increasing-with-yen',
    c: '1f4b9'
  },
  {
    n: 'check-box-with-check',
    c: '2611'
  },
  {
    n: 'check-mark',
    c: '2714'
  },
  {
    n: 'check-mark-button',
    c: '2705'
  },
  {
    n: 'cheese-wedge',
    c: '1f9c0'
  },
  {
    n: 'chequered-flag',
    c: '1f3c1'
  },
  {
    n: 'cherries',
    c: '1f352'
  },
  {
    n: 'cherry-blossom',
    c: '1f338'
  },
  {
    n: 'chess-pawn',
    c: '265f'
  },
  {
    n: 'chestnut',
    c: '1f330'
  },
  {
    n: 'chicken',
    c: '1f414'
  },
  {
    n: 'child',
    c: '1f9d2'
  },
  {
    n: 'child-dark-skin-tone',
    c: '1f9d2-1f3ff'
  },
  {
    n: 'child-light-skin-tone',
    c: '1f9d2-1f3fb'
  },
  {
    n: 'child-medium-dark-skin-tone',
    c: '1f9d2-1f3fe'
  },
  {
    n: 'child-medium-light-skin-tone',
    c: '1f9d2-1f3fc'
  },
  {
    n: 'child-medium-skin-tone',
    c: '1f9d2-1f3fd'
  },
  {
    n: 'children-crossing',
    c: '1f6b8'
  },
  {
    n: 'chipmunk',
    c: '1f43f'
  },
  {
    n: 'chocolate-bar',
    c: '1f36b'
  },
  {
    n: 'chopsticks',
    c: '1f962'
  },
  {
    n: 'christmas-tree',
    c: '1f384'
  },
  {
    n: 'church',
    c: '26ea'
  },
  {
    n: 'cigarette',
    c: '1f6ac'
  },
  {
    n: 'cinema',
    c: '1f3a6'
  },
  {
    n: 'circled-m',
    c: '24c2'
  },
  {
    n: 'circus-tent',
    c: '1f3aa'
  },
  {
    n: 'cityscape',
    c: '1f3d9'
  },
  {
    n: 'cityscape-at-dusk',
    c: '1f306'
  },
  {
    n: 'cl-button',
    c: '1f191'
  },
  {
    n: 'clamp',
    c: '1f5dc'
  },
  {
    n: 'clapper-board',
    c: '1f3ac'
  },
  {
    n: 'clapping-hands',
    c: '1f44f'
  },
  {
    n: 'clapping-hands-dark-skin-tone',
    c: '1f44f-1f3ff'
  },
  {
    n: 'clapping-hands-light-skin-tone',
    c: '1f44f-1f3fb'
  },
  {
    n: 'clapping-hands-medium-dark-skin-tone',
    c: '1f44f-1f3fe'
  },
  {
    n: 'clapping-hands-medium-light-skin-tone',
    c: '1f44f-1f3fc'
  },
  {
    n: 'clapping-hands-medium-skin-tone',
    c: '1f44f-1f3fd'
  },
  {
    n: 'classical-building',
    c: '1f3db'
  },
  {
    n: 'clinking-beer-mugs',
    c: '1f37b'
  },
  {
    n: 'clinking-glasses',
    c: '1f942'
  },
  {
    n: 'clipboard',
    c: '1f4cb'
  },
  {
    n: 'clockwise-vertical-arrows',
    c: '1f503'
  },
  {
    n: 'closed-book',
    c: '1f4d5'
  },
  {
    n: 'closed-mailbox-with-lowered-flag',
    c: '1f4ea'
  },
  {
    n: 'closed-mailbox-with-raised-flag',
    c: '1f4eb'
  },
  {
    n: 'closed-umbrella',
    c: '1f302'
  },
  {
    n: 'cloud',
    c: '2601'
  },
  {
    n: 'cloud-with-lightning',
    c: '1f329'
  },
  {
    n: 'cloud-with-lightning-and-rain',
    c: '26c8'
  },
  {
    n: 'cloud-with-rain',
    c: '1f327'
  },
  {
    n: 'cloud-with-snow',
    c: '1f328'
  },
  {
    n: 'clown-face',
    c: '1f921'
  },
  {
    n: 'club-suit',
    c: '2663'
  },
  {
    n: 'clutch-bag',
    c: '1f45d'
  },
  {
    n: 'coat',
    c: '1f9e5'
  },
  {
    n: 'cockroach',
    c: '1fab3'
  },
  {
    n: 'cocktail-glass',
    c: '1f378'
  },
  {
    n: 'coconut',
    c: '1f965'
  },
  {
    n: 'coffin',
    c: '26b0'
  },
  {
    n: 'coin',
    c: '1fa99'
  },
  {
    n: 'cold-face',
    c: '1f976'
  },
  {
    n: 'collision',
    c: '1f4a5'
  },
  {
    n: 'comet',
    c: '2604'
  },
  {
    n: 'compass',
    c: '1f9ed'
  },
  {
    n: 'computer-disk',
    c: '1f4bd'
  },
  {
    n: 'computer-mouse',
    c: '1f5b1'
  },
  {
    n: 'confetti-ball',
    c: '1f38a'
  },
  {
    n: 'confounded-face',
    c: '1f616'
  },
  {
    n: 'confused-face',
    c: '1f615'
  },
  {
    n: 'construction',
    c: '1f6a7'
  },
  {
    n: 'construction-worker',
    c: '1f477'
  },
  {
    n: 'construction-worker-dark-skin-tone',
    c: '1f477-1f3ff'
  },
  {
    n: 'construction-worker-light-skin-tone',
    c: '1f477-1f3fb'
  },
  {
    n: 'construction-worker-medium-dark-skin-tone',
    c: '1f477-1f3fe'
  },
  {
    n: 'construction-worker-medium-light-skin-tone',
    c: '1f477-1f3fc'
  },
  {
    n: 'construction-worker-medium-skin-tone',
    c: '1f477-1f3fd'
  },
  {
    n: 'control-knobs',
    c: '1f39b'
  },
  {
    n: 'convenience-store',
    c: '1f3ea'
  },
  {
    n: 'cook',
    c: '1f9d1-200d-1f373'
  },
  {
    n: 'cook-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f373'
  },
  {
    n: 'cook-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f373'
  },
  {
    n: 'cook-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f373'
  },
  {
    n: 'cook-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f373'
  },
  {
    n: 'cook-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f373'
  },
  {
    n: 'cooked-rice',
    c: '1f35a'
  },
  {
    n: 'cookie',
    c: '1f36a'
  },
  {
    n: 'cooking',
    c: '1f373'
  },
  {
    n: 'cool-button',
    c: '1f192'
  },
  {
    n: 'copyright',
    c: 'a9'
  },
  {
    n: 'couch-and-lamp',
    c: '1f6cb'
  },
  {
    n: 'counterclockwise-arrows-button',
    c: '1f504'
  },
  {
    n: 'couple-with-heart',
    c: '1f491'
  },
  {
    n: 'couple-with-heart-dark-skin-tone',
    c: '1f491-1f3ff'
  },
  {
    n: 'couple-with-heart-light-skin-tone',
    c: '1f491-1f3fb'
  },
  {
    n: 'couple-with-heart-man-man',
    c: '1f468-200d-2764-fe0f-200d-1f468'
  },
  {
    n: 'couple-with-heart-man-man-dark-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-man-man-dark-skin-tone-light-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-man-man-dark-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-man-man-dark-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-man-man-dark-skin-tone-medium-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-man-man-light-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-man-man-light-skin-tone-dark-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-man-man-light-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-man-man-light-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-man-man-light-skin-tone-medium-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-man-man-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-man-man-medium-dark-skin-tone-dark-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-man-man-medium-dark-skin-tone-light-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-man-man-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-man-man-medium-dark-skin-tone-medium-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-man-man-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-man-man-medium-light-skin-tone-dark-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-man-man-medium-light-skin-tone-light-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-man-man-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-man-man-medium-light-skin-tone-medium-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-man-man-medium-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-man-man-medium-skin-tone-dark-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-man-man-medium-skin-tone-light-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-man-man-medium-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-man-man-medium-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-medium-dark-skin-tone',
    c: '1f491-1f3fe'
  },
  {
    n: 'couple-with-heart-medium-light-skin-tone',
    c: '1f491-1f3fc'
  },
  {
    n: 'couple-with-heart-medium-skin-tone',
    c: '1f491-1f3fd'
  },
  {
    n: 'couple-with-heart-person-person-dark-skin-tone-light-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    n: 'couple-with-heart-person-person-dark-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    n: 'couple-with-heart-person-person-dark-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    n: 'couple-with-heart-person-person-dark-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    n: 'couple-with-heart-person-person-light-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    n: 'couple-with-heart-person-person-light-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    n: 'couple-with-heart-person-person-light-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    n: 'couple-with-heart-person-person-light-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    n: 'couple-with-heart-person-person-medium-dark-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    n: 'couple-with-heart-person-person-medium-dark-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    n: 'couple-with-heart-person-person-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    n: 'couple-with-heart-person-person-medium-dark-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    n: 'couple-with-heart-person-person-medium-light-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    n: 'couple-with-heart-person-person-medium-light-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    n: 'couple-with-heart-person-person-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    n: 'couple-with-heart-person-person-medium-light-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f9d1-1f3fd'
  },
  {
    n: 'couple-with-heart-person-person-medium-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3ff'
  },
  {
    n: 'couple-with-heart-person-person-medium-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fb'
  },
  {
    n: 'couple-with-heart-person-person-medium-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fe'
  },
  {
    n: 'couple-with-heart-person-person-medium-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f9d1-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-man',
    c: '1f469-200d-2764-fe0f-200d-1f468'
  },
  {
    n: 'couple-with-heart-woman-man-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-man-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-man-dark-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-man-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-man-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-man-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-man-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-man-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-man-light-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-man-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-man-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-man-medium-dark-skin-tone-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-man-medium-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-man-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-man-medium-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-man-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-man-medium-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-man-medium-light-skin-tone-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-man-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-man-medium-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-man-medium-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-man-medium-skin-tone-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-man-medium-skin-tone-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-man-medium-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-man-medium-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f468-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-woman',
    c: '1f469-200d-2764-fe0f-200d-1f469'
  },
  {
    n: 'couple-with-heart-woman-woman-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-woman-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-woman-dark-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-woman-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-woman-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-woman-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-woman-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-woman-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-woman-light-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-woman-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-dark-skin-tone-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-light-skin-tone-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fd'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-skin-tone-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3ff'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-skin-tone-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fb'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fe'
  },
  {
    n: 'couple-with-heart-woman-woman-medium-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f469-1f3fc'
  },
  {
    n: 'cow',
    c: '1f404'
  },
  {
    n: 'cow-face',
    c: '1f42e'
  },
  {
    n: 'cowboy-hat-face',
    c: '1f920'
  },
  {
    n: 'crab',
    c: '1f980'
  },
  {
    n: 'crayon',
    c: '1f58d'
  },
  {
    n: 'credit-card',
    c: '1f4b3'
  },
  {
    n: 'crescent-moon',
    c: '1f319'
  },
  {
    n: 'cricket',
    c: '1f997'
  },
  {
    n: 'cricket-game',
    c: '1f3cf'
  },
  {
    n: 'crocodile',
    c: '1f40a'
  },
  {
    n: 'croissant',
    c: '1f950'
  },
  {
    n: 'cross-mark',
    c: '274c'
  },
  {
    n: 'cross-mark-button',
    c: '274e'
  },
  {
    n: 'crossed-fingers',
    c: '1f91e'
  },
  {
    n: 'crossed-fingers-dark-skin-tone',
    c: '1f91e-1f3ff'
  },
  {
    n: 'crossed-fingers-light-skin-tone',
    c: '1f91e-1f3fb'
  },
  {
    n: 'crossed-fingers-medium-dark-skin-tone',
    c: '1f91e-1f3fe'
  },
  {
    n: 'crossed-fingers-medium-light-skin-tone',
    c: '1f91e-1f3fc'
  },
  {
    n: 'crossed-fingers-medium-skin-tone',
    c: '1f91e-1f3fd'
  },
  {
    n: 'crossed-flags',
    c: '1f38c'
  },
  {
    n: 'crossed-swords',
    c: '2694'
  },
  {
    n: 'crown',
    c: '1f451'
  },
  {
    n: 'crying-cat',
    c: '1f63f'
  },
  {
    n: 'crying-face',
    c: '1f622'
  },
  {
    n: 'crystal-ball',
    c: '1f52e'
  },
  {
    n: 'cucumber',
    c: '1f952'
  },
  {
    n: 'cup-with-straw',
    c: '1f964'
  },
  {
    n: 'cupcake',
    c: '1f9c1'
  },
  {
    n: 'curling-stone',
    c: '1f94c'
  },
  {
    n: 'curly-hair',
    c: '1f9b1'
  },
  {
    n: 'curly-loop',
    c: '27b0'
  },
  {
    n: 'currency-exchange',
    c: '1f4b1'
  },
  {
    n: 'curry-rice',
    c: '1f35b'
  },
  {
    n: 'custard',
    c: '1f36e'
  },
  {
    n: 'customs',
    c: '1f6c3'
  },
  {
    n: 'cut-of-meat',
    c: '1f969'
  },
  {
    n: 'cyclone',
    c: '1f300'
  },
  {
    n: 'dagger',
    c: '1f5e1'
  },
  {
    n: 'dango',
    c: '1f361'
  },
  {
    n: 'dark-skin-tone',
    c: '1f3ff'
  },
  {
    n: 'dashing-away',
    c: '1f4a8'
  },
  {
    n: 'deaf-man',
    c: '1f9cf-200d-2642-fe0f'
  },
  {
    n: 'deaf-man-dark-skin-tone',
    c: '1f9cf-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'deaf-man-light-skin-tone',
    c: '1f9cf-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'deaf-man-medium-dark-skin-tone',
    c: '1f9cf-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'deaf-man-medium-light-skin-tone',
    c: '1f9cf-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'deaf-man-medium-skin-tone',
    c: '1f9cf-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'deaf-person',
    c: '1f9cf'
  },
  {
    n: 'deaf-person-dark-skin-tone',
    c: '1f9cf-1f3ff'
  },
  {
    n: 'deaf-person-light-skin-tone',
    c: '1f9cf-1f3fb'
  },
  {
    n: 'deaf-person-medium-dark-skin-tone',
    c: '1f9cf-1f3fe'
  },
  {
    n: 'deaf-person-medium-light-skin-tone',
    c: '1f9cf-1f3fc'
  },
  {
    n: 'deaf-person-medium-skin-tone',
    c: '1f9cf-1f3fd'
  },
  {
    n: 'deaf-woman',
    c: '1f9cf-200d-2640-fe0f'
  },
  {
    n: 'deaf-woman-dark-skin-tone',
    c: '1f9cf-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'deaf-woman-light-skin-tone',
    c: '1f9cf-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'deaf-woman-medium-dark-skin-tone',
    c: '1f9cf-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'deaf-woman-medium-light-skin-tone',
    c: '1f9cf-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'deaf-woman-medium-skin-tone',
    c: '1f9cf-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'deciduous-tree',
    c: '1f333'
  },
  {
    n: 'deer',
    c: '1f98c'
  },
  {
    n: 'delivery-truck',
    c: '1f69a'
  },
  {
    n: 'department-store',
    c: '1f3ec'
  },
  {
    n: 'derelict-house',
    c: '1f3da'
  },
  {
    n: 'desert',
    c: '1f3dc'
  },
  {
    n: 'desert-island',
    c: '1f3dd'
  },
  {
    n: 'desktop-computer',
    c: '1f5a5'
  },
  {
    n: 'detective',
    c: '1f575'
  },
  {
    n: 'detective-dark-skin-tone',
    c: '1f575-1f3ff'
  },
  {
    n: 'detective-light-skin-tone',
    c: '1f575-1f3fb'
  },
  {
    n: 'detective-medium-dark-skin-tone',
    c: '1f575-1f3fe'
  },
  {
    n: 'detective-medium-light-skin-tone',
    c: '1f575-1f3fc'
  },
  {
    n: 'detective-medium-skin-tone',
    c: '1f575-1f3fd'
  },
  {
    n: 'diamond-suit',
    c: '2666'
  },
  {
    n: 'diamond-with-a-dot',
    c: '1f4a0'
  },
  {
    n: 'dim-button',
    c: '1f505'
  },
  {
    n: 'disappointed-face',
    c: '1f61e'
  },
  {
    n: 'disguised-face',
    c: '1f978'
  },
  {
    n: 'divide',
    c: '2797'
  },
  {
    n: 'diving-mask',
    c: '1f93f'
  },
  {
    n: 'diya-lamp',
    c: '1fa94'
  },
  {
    n: 'dizzy',
    c: '1f4ab'
  },
  {
    n: 'dna',
    c: '1f9ec'
  },
  {
    n: 'dodo',
    c: '1f9a4'
  },
  {
    n: 'dog',
    c: '1f415'
  },
  {
    n: 'dog-face',
    c: '1f436'
  },
  {
    n: 'dollar-banknote',
    c: '1f4b5'
  },
  {
    n: 'dolphin',
    c: '1f42c'
  },
  {
    n: 'door',
    c: '1f6aa'
  },
  {
    n: 'dotted-six-pointed-star',
    c: '1f52f'
  },
  {
    n: 'double-curly-loop',
    c: '27bf'
  },
  {
    n: 'double-exclamation-mark',
    c: '203c'
  },
  {
    n: 'doughnut',
    c: '1f369'
  },
  {
    n: 'dove',
    c: '1f54a'
  },
  {
    n: 'down-arrow',
    c: '2b07'
  },
  {
    n: 'down-left-arrow',
    c: '2199'
  },
  {
    n: 'down-right-arrow',
    c: '2198'
  },
  {
    n: 'downcast-face-with-sweat',
    c: '1f613'
  },
  {
    n: 'downwards-button',
    c: '1f53d'
  },
  {
    n: 'dragon',
    c: '1f409'
  },
  {
    n: 'dragon-face',
    c: '1f432'
  },
  {
    n: 'dress',
    c: '1f457'
  },
  {
    n: 'drooling-face',
    c: '1f924'
  },
  {
    n: 'drop-of-blood',
    c: '1fa78'
  },
  {
    n: 'droplet',
    c: '1f4a7'
  },
  {
    n: 'drum',
    c: '1f941'
  },
  {
    n: 'duck',
    c: '1f986'
  },
  {
    n: 'dumpling',
    c: '1f95f'
  },
  {
    n: 'dvd',
    c: '1f4c0'
  },
  {
    n: 'e-mail',
    c: '1f4e7'
  },
  {
    n: 'eagle',
    c: '1f985'
  },
  {
    n: 'ear',
    c: '1f442'
  },
  {
    n: 'ear-dark-skin-tone',
    c: '1f442-1f3ff'
  },
  {
    n: 'ear-light-skin-tone',
    c: '1f442-1f3fb'
  },
  {
    n: 'ear-medium-dark-skin-tone',
    c: '1f442-1f3fe'
  },
  {
    n: 'ear-medium-light-skin-tone',
    c: '1f442-1f3fc'
  },
  {
    n: 'ear-medium-skin-tone',
    c: '1f442-1f3fd'
  },
  {
    n: 'ear-of-corn',
    c: '1f33d'
  },
  {
    n: 'ear-with-hearing-aid',
    c: '1f9bb'
  },
  {
    n: 'ear-with-hearing-aid-dark-skin-tone',
    c: '1f9bb-1f3ff'
  },
  {
    n: 'ear-with-hearing-aid-light-skin-tone',
    c: '1f9bb-1f3fb'
  },
  {
    n: 'ear-with-hearing-aid-medium-dark-skin-tone',
    c: '1f9bb-1f3fe'
  },
  {
    n: 'ear-with-hearing-aid-medium-light-skin-tone',
    c: '1f9bb-1f3fc'
  },
  {
    n: 'ear-with-hearing-aid-medium-skin-tone',
    c: '1f9bb-1f3fd'
  },
  {
    n: 'egg',
    c: '1f95a'
  },
  {
    n: 'eggplant',
    c: '1f346'
  },
  {
    n: 'eight-o-clock',
    c: '1f557'
  },
  {
    n: 'eight-pointed-star',
    c: '2734'
  },
  {
    n: 'eight-spoked-asterisk',
    c: '2733'
  },
  {
    n: 'eight-thirty',
    c: '1f563'
  },
  {
    n: 'eject-button',
    c: '23cf'
  },
  {
    n: 'electric-plug',
    c: '1f50c'
  },
  {
    n: 'elephant',
    c: '1f418'
  },
  {
    n: 'elevator',
    c: '1f6d7'
  },
  {
    n: 'eleven-o-clock',
    c: '1f55a'
  },
  {
    n: 'eleven-thirty',
    c: '1f566'
  },
  {
    n: 'elf',
    c: '1f9dd'
  },
  {
    n: 'elf-dark-skin-tone',
    c: '1f9dd-1f3ff'
  },
  {
    n: 'elf-light-skin-tone',
    c: '1f9dd-1f3fb'
  },
  {
    n: 'elf-medium-dark-skin-tone',
    c: '1f9dd-1f3fe'
  },
  {
    n: 'elf-medium-light-skin-tone',
    c: '1f9dd-1f3fc'
  },
  {
    n: 'elf-medium-skin-tone',
    c: '1f9dd-1f3fd'
  },
  {
    n: 'end-arrow',
    c: '1f51a'
  },
  {
    n: 'envelope',
    c: '2709'
  },
  {
    n: 'envelope-with-arrow',
    c: '1f4e9'
  },
  {
    n: 'euro-banknote',
    c: '1f4b6'
  },
  {
    n: 'evergreen-tree',
    c: '1f332'
  },
  {
    n: 'ewe',
    c: '1f411'
  },
  {
    n: 'exclamation-question-mark',
    c: '2049'
  },
  {
    n: 'exploding-head',
    c: '1f92f'
  },
  {
    n: 'expressionless-face',
    c: '1f611'
  },
  {
    n: 'eye',
    c: '1f441'
  },
  {
    n: 'eye-in-speech-bubble',
    c: '1f441-200d-1f5e8'
  },
  {
    n: 'eyes',
    c: '1f440'
  },
  {
    n: 'face-blowing-a-kiss',
    c: '1f618'
  },
  {
    n: 'face-exhaling',
    c: '1f62e-200d-1f4a8'
  },
  {
    n: 'face-in-clouds',
    c: '1f636-200d-1f32b-fe0f'
  },
  {
    n: 'face-savoring-food',
    c: '1f60b'
  },
  {
    n: 'face-screaming-in-fear',
    c: '1f631'
  },
  {
    n: 'face-vomiting',
    c: '1f92e'
  },
  {
    n: 'face-with-hand-over-mouth',
    c: '1f92d'
  },
  {
    n: 'face-with-head-bandage',
    c: '1f915'
  },
  {
    n: 'face-with-medical-mask',
    c: '1f637'
  },
  {
    n: 'face-with-monocle',
    c: '1f9d0'
  },
  {
    n: 'face-with-open-mouth',
    c: '1f62e'
  },
  {
    n: 'face-with-raised-eyebrow',
    c: '1f928'
  },
  {
    n: 'face-with-rolling-eyes',
    c: '1f644'
  },
  {
    n: 'face-with-spiral-eyes',
    c: '1f635-200d-1f4ab'
  },
  {
    n: 'face-with-steam-from-nose',
    c: '1f624'
  },
  {
    n: 'face-with-symbols-on-mouth',
    c: '1f92c'
  },
  {
    n: 'face-with-tears-of-joy',
    c: '1f602'
  },
  {
    n: 'face-with-thermometer',
    c: '1f912'
  },
  {
    n: 'face-with-tongue',
    c: '1f61b'
  },
  {
    n: 'face-without-mouth',
    c: '1f636'
  },
  {
    n: 'factory',
    c: '1f3ed'
  },
  {
    n: 'factory-worker',
    c: '1f9d1-200d-1f3ed'
  },
  {
    n: 'factory-worker-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f3ed'
  },
  {
    n: 'factory-worker-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f3ed'
  },
  {
    n: 'factory-worker-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f3ed'
  },
  {
    n: 'factory-worker-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f3ed'
  },
  {
    n: 'factory-worker-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f3ed'
  },
  {
    n: 'fairy',
    c: '1f9da'
  },
  {
    n: 'fairy-dark-skin-tone',
    c: '1f9da-1f3ff'
  },
  {
    n: 'fairy-light-skin-tone',
    c: '1f9da-1f3fb'
  },
  {
    n: 'fairy-medium-dark-skin-tone',
    c: '1f9da-1f3fe'
  },
  {
    n: 'fairy-medium-light-skin-tone',
    c: '1f9da-1f3fc'
  },
  {
    n: 'fairy-medium-skin-tone',
    c: '1f9da-1f3fd'
  },
  {
    n: 'falafel',
    c: '1f9c6'
  },
  {
    n: 'fallen-leaf',
    c: '1f342'
  },
  {
    n: 'family',
    c: '1f46a'
  },
  {
    n: 'family-man-boy',
    c: '1f468-200d-1f466'
  },
  {
    n: 'family-man-boy-boy',
    c: '1f468-200d-1f466-200d-1f466'
  },
  {
    n: 'family-man-girl',
    c: '1f468-200d-1f467'
  },
  {
    n: 'family-man-girl-boy',
    c: '1f468-200d-1f467-200d-1f466'
  },
  {
    n: 'family-man-girl-girl',
    c: '1f468-200d-1f467-200d-1f467'
  },
  {
    n: 'family-man-man-boy',
    c: '1f468-200d-1f468-200d-1f466'
  },
  {
    n: 'family-man-man-boy-boy',
    c: '1f468-200d-1f468-200d-1f466-200d-1f466'
  },
  {
    n: 'family-man-man-girl',
    c: '1f468-200d-1f468-200d-1f467'
  },
  {
    n: 'family-man-man-girl-boy',
    c: '1f468-200d-1f468-200d-1f467-200d-1f466'
  },
  {
    n: 'family-man-man-girl-girl',
    c: '1f468-200d-1f468-200d-1f467-200d-1f467'
  },
  {
    n: 'family-man-woman-boy',
    c: '1f468-200d-1f469-200d-1f466'
  },
  {
    n: 'family-man-woman-boy-boy',
    c: '1f468-200d-1f469-200d-1f466-200d-1f466'
  },
  {
    n: 'family-man-woman-girl',
    c: '1f468-200d-1f469-200d-1f467'
  },
  {
    n: 'family-man-woman-girl-boy',
    c: '1f468-200d-1f469-200d-1f467-200d-1f466'
  },
  {
    n: 'family-man-woman-girl-girl',
    c: '1f468-200d-1f469-200d-1f467-200d-1f467'
  },
  {
    n: 'family-woman-boy',
    c: '1f469-200d-1f466'
  },
  {
    n: 'family-woman-boy-boy',
    c: '1f469-200d-1f466-200d-1f466'
  },
  {
    n: 'family-woman-girl',
    c: '1f469-200d-1f467'
  },
  {
    n: 'family-woman-girl-boy',
    c: '1f469-200d-1f467-200d-1f466'
  },
  {
    n: 'family-woman-girl-girl',
    c: '1f469-200d-1f467-200d-1f467'
  },
  {
    n: 'family-woman-woman-boy',
    c: '1f469-200d-1f469-200d-1f466'
  },
  {
    n: 'family-woman-woman-boy-boy',
    c: '1f469-200d-1f469-200d-1f466-200d-1f466'
  },
  {
    n: 'family-woman-woman-girl',
    c: '1f469-200d-1f469-200d-1f467'
  },
  {
    n: 'family-woman-woman-girl-boy',
    c: '1f469-200d-1f469-200d-1f467-200d-1f466'
  },
  {
    n: 'family-woman-woman-girl-girl',
    c: '1f469-200d-1f469-200d-1f467-200d-1f467'
  },
  {
    n: 'farmer',
    c: '1f9d1-200d-1f33e'
  },
  {
    n: 'farmer-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f33e'
  },
  {
    n: 'farmer-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f33e'
  },
  {
    n: 'farmer-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f33e'
  },
  {
    n: 'farmer-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f33e'
  },
  {
    n: 'farmer-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f33e'
  },
  {
    n: 'fast-down-button',
    c: '23ec'
  },
  {
    n: 'fast-forward-button',
    c: '23e9'
  },
  {
    n: 'fast-reverse-button',
    c: '23ea'
  },
  {
    n: 'fast-up-button',
    c: '23eb'
  },
  {
    n: 'fax-machine',
    c: '1f4e0'
  },
  {
    n: 'fearful-face',
    c: '1f628'
  },
  {
    n: 'feather',
    c: '1fab6'
  },
  {
    n: 'female-sign',
    c: '2640'
  },
  {
    n: 'ferris-wheel',
    c: '1f3a1'
  },
  {
    n: 'ferry',
    c: '26f4'
  },
  {
    n: 'field-hockey',
    c: '1f3d1'
  },
  {
    n: 'file-cabinet',
    c: '1f5c4'
  },
  {
    n: 'file-folder',
    c: '1f4c1'
  },
  {
    n: 'film-frames',
    c: '1f39e'
  },
  {
    n: 'film-projector',
    c: '1f4fd'
  },
  {
    n: 'fire',
    c: '1f525'
  },
  {
    n: 'fire-engine',
    c: '1f692'
  },
  {
    n: 'fire-extinguisher',
    c: '1f9ef'
  },
  {
    n: 'firecracker',
    c: '1f9e8'
  },
  {
    n: 'firefighter',
    c: '1f9d1-200d-1f692'
  },
  {
    n: 'firefighter-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f692'
  },
  {
    n: 'firefighter-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f692'
  },
  {
    n: 'firefighter-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f692'
  },
  {
    n: 'firefighter-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f692'
  },
  {
    n: 'firefighter-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f692'
  },
  {
    n: 'fireworks',
    c: '1f386'
  },
  {
    n: 'first-quarter-moon',
    c: '1f313'
  },
  {
    n: 'first-quarter-moon-face',
    c: '1f31b'
  },
  {
    n: 'fish',
    c: '1f41f'
  },
  {
    n: 'fish-cake-with-swirl',
    c: '1f365'
  },
  {
    n: 'fishing-pole',
    c: '1f3a3'
  },
  {
    n: 'five-o-clock',
    c: '1f554'
  },
  {
    n: 'five-thirty',
    c: '1f560'
  },
  {
    n: 'flag-afghanistan',
    c: '1f1e6-1f1eb'
  },
  {
    n: 'flag-albania',
    c: '1f1e6-1f1f1'
  },
  {
    n: 'flag-algeria',
    c: '1f1e9-1f1ff'
  },
  {
    n: 'flag-american-samoa',
    c: '1f1e6-1f1f8'
  },
  {
    n: 'flag-andorra',
    c: '1f1e6-1f1e9'
  },
  {
    n: 'flag-angola',
    c: '1f1e6-1f1f4'
  },
  {
    n: 'flag-anguilla',
    c: '1f1e6-1f1ee'
  },
  {
    n: 'flag-antarctica',
    c: '1f1e6-1f1f6'
  },
  {
    n: 'flag-antigua-barbuda',
    c: '1f1e6-1f1ec'
  },
  {
    n: 'flag-argentina',
    c: '1f1e6-1f1f7'
  },
  {
    n: 'flag-armenia',
    c: '1f1e6-1f1f2'
  },
  {
    n: 'flag-aruba',
    c: '1f1e6-1f1fc'
  },
  {
    n: 'flag-ascension-island',
    c: '1f1e6-1f1e8'
  },
  {
    n: 'flag-australia',
    c: '1f1e6-1f1fa'
  },
  {
    n: 'flag-austria',
    c: '1f1e6-1f1f9'
  },
  {
    n: 'flag-azerbaijan',
    c: '1f1e6-1f1ff'
  },
  {
    n: 'flag-bahamas',
    c: '1f1e7-1f1f8'
  },
  {
    n: 'flag-bahrain',
    c: '1f1e7-1f1ed'
  },
  {
    n: 'flag-bangladesh',
    c: '1f1e7-1f1e9'
  },
  {
    n: 'flag-barbados',
    c: '1f1e7-1f1e7'
  },
  {
    n: 'flag-belarus',
    c: '1f1e7-1f1fe'
  },
  {
    n: 'flag-belgium',
    c: '1f1e7-1f1ea'
  },
  {
    n: 'flag-belize',
    c: '1f1e7-1f1ff'
  },
  {
    n: 'flag-benin',
    c: '1f1e7-1f1ef'
  },
  {
    n: 'flag-bermuda',
    c: '1f1e7-1f1f2'
  },
  {
    n: 'flag-bhutan',
    c: '1f1e7-1f1f9'
  },
  {
    n: 'flag-bolivia',
    c: '1f1e7-1f1f4'
  },
  {
    n: 'flag-bosnia-herzegovina',
    c: '1f1e7-1f1e6'
  },
  {
    n: 'flag-botswana',
    c: '1f1e7-1f1fc'
  },
  {
    n: 'flag-bouvet-island',
    c: '1f1e7-1f1fb'
  },
  {
    n: 'flag-brazil',
    c: '1f1e7-1f1f7'
  },
  {
    n: 'flag-british-indian-ocean-territory',
    c: '1f1ee-1f1f4'
  },
  {
    n: 'flag-british-virgin-islands',
    c: '1f1fb-1f1ec'
  },
  {
    n: 'flag-brunei',
    c: '1f1e7-1f1f3'
  },
  {
    n: 'flag-bulgaria',
    c: '1f1e7-1f1ec'
  },
  {
    n: 'flag-burkina-faso',
    c: '1f1e7-1f1eb'
  },
  {
    n: 'flag-burundi',
    c: '1f1e7-1f1ee'
  },
  {
    n: 'flag-c-te-d-ivoire',
    c: '1f1e8-1f1ee'
  },
  {
    n: 'flag-cambodia',
    c: '1f1f0-1f1ed'
  },
  {
    n: 'flag-cameroon',
    c: '1f1e8-1f1f2'
  },
  {
    n: 'flag-canada',
    c: '1f1e8-1f1e6'
  },
  {
    n: 'flag-canary-islands',
    c: '1f1ee-1f1e8'
  },
  {
    n: 'flag-cape-verde',
    c: '1f1e8-1f1fb'
  },
  {
    n: 'flag-caribbean-netherlands',
    c: '1f1e7-1f1f6'
  },
  {
    n: 'flag-cayman-islands',
    c: '1f1f0-1f1fe'
  },
  {
    n: 'flag-central-african-republic',
    c: '1f1e8-1f1eb'
  },
  {
    n: 'flag-ceuta-melilla',
    c: '1f1ea-1f1e6'
  },
  {
    n: 'flag-chad',
    c: '1f1f9-1f1e9'
  },
  {
    n: 'flag-chile',
    c: '1f1e8-1f1f1'
  },
  {
    n: 'flag-china',
    c: '1f1e8-1f1f3'
  },
  {
    n: 'flag-christmas-island',
    c: '1f1e8-1f1fd'
  },
  {
    n: 'flag-clipperton-island',
    c: '1f1e8-1f1f5'
  },
  {
    n: 'flag-cocos-keeling-islands',
    c: '1f1e8-1f1e8'
  },
  {
    n: 'flag-colombia',
    c: '1f1e8-1f1f4'
  },
  {
    n: 'flag-comoros',
    c: '1f1f0-1f1f2'
  },
  {
    n: 'flag-congo-brazzaville',
    c: '1f1e8-1f1ec'
  },
  {
    n: 'flag-congo-kinshasa',
    c: '1f1e8-1f1e9'
  },
  {
    n: 'flag-cook-islands',
    c: '1f1e8-1f1f0'
  },
  {
    n: 'flag-costa-rica',
    c: '1f1e8-1f1f7'
  },
  {
    n: 'flag-croatia',
    c: '1f1ed-1f1f7'
  },
  {
    n: 'flag-cuba',
    c: '1f1e8-1f1fa'
  },
  {
    n: 'flag-cura-ao',
    c: '1f1e8-1f1fc'
  },
  {
    n: 'flag-cyprus',
    c: '1f1e8-1f1fe'
  },
  {
    n: 'flag-czechia',
    c: '1f1e8-1f1ff'
  },
  {
    n: 'flag-denmark',
    c: '1f1e9-1f1f0'
  },
  {
    n: 'flag-diego-garcia',
    c: '1f1e9-1f1ec'
  },
  {
    n: 'flag-djibouti',
    c: '1f1e9-1f1ef'
  },
  {
    n: 'flag-dominica',
    c: '1f1e9-1f1f2'
  },
  {
    n: 'flag-dominican-republic',
    c: '1f1e9-1f1f4'
  },
  {
    n: 'flag-ecuador',
    c: '1f1ea-1f1e8'
  },
  {
    n: 'flag-egypt',
    c: '1f1ea-1f1ec'
  },
  {
    n: 'flag-el-salvador',
    c: '1f1f8-1f1fb'
  },
  {
    n: 'flag-england',
    c: '1f3f4-e0067-e0062-e0065-e006e-e0067-e007f'
  },
  {
    n: 'flag-equatorial-guinea',
    c: '1f1ec-1f1f6'
  },
  {
    n: 'flag-eritrea',
    c: '1f1ea-1f1f7'
  },
  {
    n: 'flag-estonia',
    c: '1f1ea-1f1ea'
  },
  {
    n: 'flag-eswatini',
    c: '1f1f8-1f1ff'
  },
  {
    n: 'flag-ethiopia',
    c: '1f1ea-1f1f9'
  },
  {
    n: 'flag-european-union',
    c: '1f1ea-1f1fa'
  },
  {
    n: 'flag-falkland-islands',
    c: '1f1eb-1f1f0'
  },
  {
    n: 'flag-faroe-islands',
    c: '1f1eb-1f1f4'
  },
  {
    n: 'flag-fiji',
    c: '1f1eb-1f1ef'
  },
  {
    n: 'flag-finland',
    c: '1f1eb-1f1ee'
  },
  {
    n: 'flag-france',
    c: '1f1eb-1f1f7'
  },
  {
    n: 'flag-french-guiana',
    c: '1f1ec-1f1eb'
  },
  {
    n: 'flag-french-polynesia',
    c: '1f1f5-1f1eb'
  },
  {
    n: 'flag-french-southern-territories',
    c: '1f1f9-1f1eb'
  },
  {
    n: 'flag-gabon',
    c: '1f1ec-1f1e6'
  },
  {
    n: 'flag-gambia',
    c: '1f1ec-1f1f2'
  },
  {
    n: 'flag-georgia',
    c: '1f1ec-1f1ea'
  },
  {
    n: 'flag-germany',
    c: '1f1e9-1f1ea'
  },
  {
    n: 'flag-ghana',
    c: '1f1ec-1f1ed'
  },
  {
    n: 'flag-gibraltar',
    c: '1f1ec-1f1ee'
  },
  {
    n: 'flag-greece',
    c: '1f1ec-1f1f7'
  },
  {
    n: 'flag-greenland',
    c: '1f1ec-1f1f1'
  },
  {
    n: 'flag-grenada',
    c: '1f1ec-1f1e9'
  },
  {
    n: 'flag-guadeloupe',
    c: '1f1ec-1f1f5'
  },
  {
    n: 'flag-guam',
    c: '1f1ec-1f1fa'
  },
  {
    n: 'flag-guatemala',
    c: '1f1ec-1f1f9'
  },
  {
    n: 'flag-guernsey',
    c: '1f1ec-1f1ec'
  },
  {
    n: 'flag-guinea',
    c: '1f1ec-1f1f3'
  },
  {
    n: 'flag-guinea-bissau',
    c: '1f1ec-1f1fc'
  },
  {
    n: 'flag-guyana',
    c: '1f1ec-1f1fe'
  },
  {
    n: 'flag-haiti',
    c: '1f1ed-1f1f9'
  },
  {
    n: 'flag-heard-mcdonald-islands',
    c: '1f1ed-1f1f2'
  },
  {
    n: 'flag-honduras',
    c: '1f1ed-1f1f3'
  },
  {
    n: 'flag-hong-kong-sar-china',
    c: '1f1ed-1f1f0'
  },
  {
    n: 'flag-hungary',
    c: '1f1ed-1f1fa'
  },
  {
    n: 'flag-iceland',
    c: '1f1ee-1f1f8'
  },
  {
    n: 'flag-in-hole',
    c: '26f3'
  },
  {
    n: 'flag-india',
    c: '1f1ee-1f1f3'
  },
  {
    n: 'flag-indonesia',
    c: '1f1ee-1f1e9'
  },
  {
    n: 'flag-iran',
    c: '1f1ee-1f1f7'
  },
  {
    n: 'flag-iraq',
    c: '1f1ee-1f1f6'
  },
  {
    n: 'flag-ireland',
    c: '1f1ee-1f1ea'
  },
  {
    n: 'flag-isle-of-man',
    c: '1f1ee-1f1f2'
  },
  {
    n: 'flag-israel',
    c: '1f1ee-1f1f1'
  },
  {
    n: 'flag-italy',
    c: '1f1ee-1f1f9'
  },
  {
    n: 'flag-jamaica',
    c: '1f1ef-1f1f2'
  },
  {
    n: 'flag-japan',
    c: '1f1ef-1f1f5'
  },
  {
    n: 'flag-jersey',
    c: '1f1ef-1f1ea'
  },
  {
    n: 'flag-jordan',
    c: '1f1ef-1f1f4'
  },
  {
    n: 'flag-kazakhstan',
    c: '1f1f0-1f1ff'
  },
  {
    n: 'flag-kenya',
    c: '1f1f0-1f1ea'
  },
  {
    n: 'flag-kiribati',
    c: '1f1f0-1f1ee'
  },
  {
    n: 'flag-kosovo',
    c: '1f1fd-1f1f0'
  },
  {
    n: 'flag-kuwait',
    c: '1f1f0-1f1fc'
  },
  {
    n: 'flag-kyrgyzstan',
    c: '1f1f0-1f1ec'
  },
  {
    n: 'flag-land-islands',
    c: '1f1e6-1f1fd'
  },
  {
    n: 'flag-laos',
    c: '1f1f1-1f1e6'
  },
  {
    n: 'flag-latvia',
    c: '1f1f1-1f1fb'
  },
  {
    n: 'flag-lebanon',
    c: '1f1f1-1f1e7'
  },
  {
    n: 'flag-lesotho',
    c: '1f1f1-1f1f8'
  },
  {
    n: 'flag-liberia',
    c: '1f1f1-1f1f7'
  },
  {
    n: 'flag-libya',
    c: '1f1f1-1f1fe'
  },
  {
    n: 'flag-liechtenstein',
    c: '1f1f1-1f1ee'
  },
  {
    n: 'flag-lithuania',
    c: '1f1f1-1f1f9'
  },
  {
    n: 'flag-luxembourg',
    c: '1f1f1-1f1fa'
  },
  {
    n: 'flag-macao-sar-china',
    c: '1f1f2-1f1f4'
  },
  {
    n: 'flag-madagascar',
    c: '1f1f2-1f1ec'
  },
  {
    n: 'flag-malawi',
    c: '1f1f2-1f1fc'
  },
  {
    n: 'flag-malaysia',
    c: '1f1f2-1f1fe'
  },
  {
    n: 'flag-maldives',
    c: '1f1f2-1f1fb'
  },
  {
    n: 'flag-mali',
    c: '1f1f2-1f1f1'
  },
  {
    n: 'flag-malta',
    c: '1f1f2-1f1f9'
  },
  {
    n: 'flag-marshall-islands',
    c: '1f1f2-1f1ed'
  },
  {
    n: 'flag-martinique',
    c: '1f1f2-1f1f6'
  },
  {
    n: 'flag-mauritania',
    c: '1f1f2-1f1f7'
  },
  {
    n: 'flag-mauritius',
    c: '1f1f2-1f1fa'
  },
  {
    n: 'flag-mayotte',
    c: '1f1fe-1f1f9'
  },
  {
    n: 'flag-mexico',
    c: '1f1f2-1f1fd'
  },
  {
    n: 'flag-micronesia',
    c: '1f1eb-1f1f2'
  },
  {
    n: 'flag-moldova',
    c: '1f1f2-1f1e9'
  },
  {
    n: 'flag-monaco',
    c: '1f1f2-1f1e8'
  },
  {
    n: 'flag-mongolia',
    c: '1f1f2-1f1f3'
  },
  {
    n: 'flag-montenegro',
    c: '1f1f2-1f1ea'
  },
  {
    n: 'flag-montserrat',
    c: '1f1f2-1f1f8'
  },
  {
    n: 'flag-morocco',
    c: '1f1f2-1f1e6'
  },
  {
    n: 'flag-mozambique',
    c: '1f1f2-1f1ff'
  },
  {
    n: 'flag-myanmar-burma',
    c: '1f1f2-1f1f2'
  },
  {
    n: 'flag-namibia',
    c: '1f1f3-1f1e6'
  },
  {
    n: 'flag-nauru',
    c: '1f1f3-1f1f7'
  },
  {
    n: 'flag-nepal',
    c: '1f1f3-1f1f5'
  },
  {
    n: 'flag-netherlands',
    c: '1f1f3-1f1f1'
  },
  {
    n: 'flag-new-caledonia',
    c: '1f1f3-1f1e8'
  },
  {
    n: 'flag-new-zealand',
    c: '1f1f3-1f1ff'
  },
  {
    n: 'flag-nicaragua',
    c: '1f1f3-1f1ee'
  },
  {
    n: 'flag-niger',
    c: '1f1f3-1f1ea'
  },
  {
    n: 'flag-nigeria',
    c: '1f1f3-1f1ec'
  },
  {
    n: 'flag-niue',
    c: '1f1f3-1f1fa'
  },
  {
    n: 'flag-norfolk-island',
    c: '1f1f3-1f1eb'
  },
  {
    n: 'flag-north-korea',
    c: '1f1f0-1f1f5'
  },
  {
    n: 'flag-north-macedonia',
    c: '1f1f2-1f1f0'
  },
  {
    n: 'flag-northern-mariana-islands',
    c: '1f1f2-1f1f5'
  },
  {
    n: 'flag-norway',
    c: '1f1f3-1f1f4'
  },
  {
    n: 'flag-oman',
    c: '1f1f4-1f1f2'
  },
  {
    n: 'flag-pakistan',
    c: '1f1f5-1f1f0'
  },
  {
    n: 'flag-palau',
    c: '1f1f5-1f1fc'
  },
  {
    n: 'flag-palestinian-territories',
    c: '1f1f5-1f1f8'
  },
  {
    n: 'flag-panama',
    c: '1f1f5-1f1e6'
  },
  {
    n: 'flag-papua-new-guinea',
    c: '1f1f5-1f1ec'
  },
  {
    n: 'flag-paraguay',
    c: '1f1f5-1f1fe'
  },
  {
    n: 'flag-peru',
    c: '1f1f5-1f1ea'
  },
  {
    n: 'flag-philippines',
    c: '1f1f5-1f1ed'
  },
  {
    n: 'flag-pitcairn-islands',
    c: '1f1f5-1f1f3'
  },
  {
    n: 'flag-poland',
    c: '1f1f5-1f1f1'
  },
  {
    n: 'flag-portugal',
    c: '1f1f5-1f1f9'
  },
  {
    n: 'flag-puerto-rico',
    c: '1f1f5-1f1f7'
  },
  {
    n: 'flag-qatar',
    c: '1f1f6-1f1e6'
  },
  {
    n: 'flag-r-union',
    c: '1f1f7-1f1ea'
  },
  {
    n: 'flag-romania',
    c: '1f1f7-1f1f4'
  },
  {
    n: 'flag-russia',
    c: '1f1f7-1f1fa'
  },
  {
    n: 'flag-rwanda',
    c: '1f1f7-1f1fc'
  },
  {
    n: 'flag-s-o-tom-pr-ncipe',
    c: '1f1f8-1f1f9'
  },
  {
    n: 'flag-samoa',
    c: '1f1fc-1f1f8'
  },
  {
    n: 'flag-san-marino',
    c: '1f1f8-1f1f2'
  },
  {
    n: 'flag-saudi-arabia',
    c: '1f1f8-1f1e6'
  },
  {
    n: 'flag-scotland',
    c: '1f3f4-e0067-e0062-e0073-e0063-e0074-e007f'
  },
  {
    n: 'flag-senegal',
    c: '1f1f8-1f1f3'
  },
  {
    n: 'flag-serbia',
    c: '1f1f7-1f1f8'
  },
  {
    n: 'flag-seychelles',
    c: '1f1f8-1f1e8'
  },
  {
    n: 'flag-sierra-leone',
    c: '1f1f8-1f1f1'
  },
  {
    n: 'flag-singapore',
    c: '1f1f8-1f1ec'
  },
  {
    n: 'flag-sint-maarten',
    c: '1f1f8-1f1fd'
  },
  {
    n: 'flag-slovakia',
    c: '1f1f8-1f1f0'
  },
  {
    n: 'flag-slovenia',
    c: '1f1f8-1f1ee'
  },
  {
    n: 'flag-solomon-islands',
    c: '1f1f8-1f1e7'
  },
  {
    n: 'flag-somalia',
    c: '1f1f8-1f1f4'
  },
  {
    n: 'flag-south-africa',
    c: '1f1ff-1f1e6'
  },
  {
    n: 'flag-south-georgia-south-sandwich-islands',
    c: '1f1ec-1f1f8'
  },
  {
    n: 'flag-south-korea',
    c: '1f1f0-1f1f7'
  },
  {
    n: 'flag-south-sudan',
    c: '1f1f8-1f1f8'
  },
  {
    n: 'flag-spain',
    c: '1f1ea-1f1f8'
  },
  {
    n: 'flag-sri-lanka',
    c: '1f1f1-1f1f0'
  },
  {
    n: 'flag-st-barth-lemy',
    c: '1f1e7-1f1f1'
  },
  {
    n: 'flag-st-helena',
    c: '1f1f8-1f1ed'
  },
  {
    n: 'flag-st-kitts-nevis',
    c: '1f1f0-1f1f3'
  },
  {
    n: 'flag-st-lucia',
    c: '1f1f1-1f1e8'
  },
  {
    n: 'flag-st-martin',
    c: '1f1f2-1f1eb'
  },
  {
    n: 'flag-st-pierre-miquelon',
    c: '1f1f5-1f1f2'
  },
  {
    n: 'flag-st-vincent-grenadines',
    c: '1f1fb-1f1e8'
  },
  {
    n: 'flag-sudan',
    c: '1f1f8-1f1e9'
  },
  {
    n: 'flag-suriname',
    c: '1f1f8-1f1f7'
  },
  {
    n: 'flag-svalbard-jan-mayen',
    c: '1f1f8-1f1ef'
  },
  {
    n: 'flag-sweden',
    c: '1f1f8-1f1ea'
  },
  {
    n: 'flag-switzerland',
    c: '1f1e8-1f1ed'
  },
  {
    n: 'flag-syria',
    c: '1f1f8-1f1fe'
  },
  {
    n: 'flag-taiwan',
    c: '1f1f9-1f1fc'
  },
  {
    n: 'flag-tajikistan',
    c: '1f1f9-1f1ef'
  },
  {
    n: 'flag-tanzania',
    c: '1f1f9-1f1ff'
  },
  {
    n: 'flag-thailand',
    c: '1f1f9-1f1ed'
  },
  {
    n: 'flag-timor-leste',
    c: '1f1f9-1f1f1'
  },
  {
    n: 'flag-togo',
    c: '1f1f9-1f1ec'
  },
  {
    n: 'flag-tokelau',
    c: '1f1f9-1f1f0'
  },
  {
    n: 'flag-tonga',
    c: '1f1f9-1f1f4'
  },
  {
    n: 'flag-trinidad-tobago',
    c: '1f1f9-1f1f9'
  },
  {
    n: 'flag-tristan-da-cunha',
    c: '1f1f9-1f1e6'
  },
  {
    n: 'flag-tunisia',
    c: '1f1f9-1f1f3'
  },
  {
    n: 'flag-turkey',
    c: '1f1f9-1f1f7'
  },
  {
    n: 'flag-turkmenistan',
    c: '1f1f9-1f1f2'
  },
  {
    n: 'flag-turks-caicos-islands',
    c: '1f1f9-1f1e8'
  },
  {
    n: 'flag-tuvalu',
    c: '1f1f9-1f1fb'
  },
  {
    n: 'flag-u-s-outlying-islands',
    c: '1f1fa-1f1f2'
  },
  {
    n: 'flag-u-s-virgin-islands',
    c: '1f1fb-1f1ee'
  },
  {
    n: 'flag-uganda',
    c: '1f1fa-1f1ec'
  },
  {
    n: 'flag-ukraine',
    c: '1f1fa-1f1e6'
  },
  {
    n: 'flag-united-arab-emirates',
    c: '1f1e6-1f1ea'
  },
  {
    n: 'flag-united-kingdom',
    c: '1f1ec-1f1e7'
  },
  {
    n: 'flag-united-nations',
    c: '1f1fa-1f1f3'
  },
  {
    n: 'flag-united-states',
    c: '1f1fa-1f1f8'
  },
  {
    n: 'flag-uruguay',
    c: '1f1fa-1f1fe'
  },
  {
    n: 'flag-uzbekistan',
    c: '1f1fa-1f1ff'
  },
  {
    n: 'flag-vanuatu',
    c: '1f1fb-1f1fa'
  },
  {
    n: 'flag-vatican-city',
    c: '1f1fb-1f1e6'
  },
  {
    n: 'flag-venezuela',
    c: '1f1fb-1f1ea'
  },
  {
    n: 'flag-vietnam',
    c: '1f1fb-1f1f3'
  },
  {
    n: 'flag-wales',
    c: '1f3f4-e0067-e0062-e0077-e006c-e0073-e007f'
  },
  {
    n: 'flag-wallis-futuna',
    c: '1f1fc-1f1eb'
  },
  {
    n: 'flag-western-sahara',
    c: '1f1ea-1f1ed'
  },
  {
    n: 'flag-yemen',
    c: '1f1fe-1f1ea'
  },
  {
    n: 'flag-zambia',
    c: '1f1ff-1f1f2'
  },
  {
    n: 'flag-zimbabwe',
    c: '1f1ff-1f1fc'
  },
  {
    n: 'flamingo',
    c: '1f9a9'
  },
  {
    n: 'flashlight',
    c: '1f526'
  },
  {
    n: 'flat-shoe',
    c: '1f97f'
  },
  {
    n: 'flatbread',
    c: '1fad3'
  },
  {
    n: 'fleur-de-lis',
    c: '269c'
  },
  {
    n: 'flexed-biceps',
    c: '1f4aa'
  },
  {
    n: 'flexed-biceps-dark-skin-tone',
    c: '1f4aa-1f3ff'
  },
  {
    n: 'flexed-biceps-light-skin-tone',
    c: '1f4aa-1f3fb'
  },
  {
    n: 'flexed-biceps-medium-dark-skin-tone',
    c: '1f4aa-1f3fe'
  },
  {
    n: 'flexed-biceps-medium-light-skin-tone',
    c: '1f4aa-1f3fc'
  },
  {
    n: 'flexed-biceps-medium-skin-tone',
    c: '1f4aa-1f3fd'
  },
  {
    n: 'floppy-disk',
    c: '1f4be'
  },
  {
    n: 'flower-playing-cards',
    c: '1f3b4'
  },
  {
    n: 'flushed-face',
    c: '1f633'
  },
  {
    n: 'fly',
    c: '1fab0'
  },
  {
    n: 'flying-disc',
    c: '1f94f'
  },
  {
    n: 'flying-saucer',
    c: '1f6f8'
  },
  {
    n: 'fog',
    c: '1f32b'
  },
  {
    n: 'foggy',
    c: '1f301'
  },
  {
    n: 'folded-hands',
    c: '1f64f'
  },
  {
    n: 'folded-hands-dark-skin-tone',
    c: '1f64f-1f3ff'
  },
  {
    n: 'folded-hands-light-skin-tone',
    c: '1f64f-1f3fb'
  },
  {
    n: 'folded-hands-medium-dark-skin-tone',
    c: '1f64f-1f3fe'
  },
  {
    n: 'folded-hands-medium-light-skin-tone',
    c: '1f64f-1f3fc'
  },
  {
    n: 'folded-hands-medium-skin-tone',
    c: '1f64f-1f3fd'
  },
  {
    n: 'fondue',
    c: '1fad5'
  },
  {
    n: 'foot',
    c: '1f9b6'
  },
  {
    n: 'foot-dark-skin-tone',
    c: '1f9b6-1f3ff'
  },
  {
    n: 'foot-light-skin-tone',
    c: '1f9b6-1f3fb'
  },
  {
    n: 'foot-medium-dark-skin-tone',
    c: '1f9b6-1f3fe'
  },
  {
    n: 'foot-medium-light-skin-tone',
    c: '1f9b6-1f3fc'
  },
  {
    n: 'foot-medium-skin-tone',
    c: '1f9b6-1f3fd'
  },
  {
    n: 'footprints',
    c: '1f463'
  },
  {
    n: 'fork-and-knife',
    c: '1f374'
  },
  {
    n: 'fork-and-knife-with-plate',
    c: '1f37d'
  },
  {
    n: 'fortune-cookie',
    c: '1f960'
  },
  {
    n: 'fountain',
    c: '26f2'
  },
  {
    n: 'fountain-pen',
    c: '1f58b'
  },
  {
    n: 'four-leaf-clover',
    c: '1f340'
  },
  {
    n: 'four-o-clock',
    c: '1f553'
  },
  {
    n: 'four-thirty',
    c: '1f55f'
  },
  {
    n: 'fox',
    c: '1f98a'
  },
  {
    n: 'framed-picture',
    c: '1f5bc'
  },
  {
    n: 'free-button',
    c: '1f193'
  },
  {
    n: 'french-fries',
    c: '1f35f'
  },
  {
    n: 'fried-shrimp',
    c: '1f364'
  },
  {
    n: 'frog',
    c: '1f438'
  },
  {
    n: 'front-facing-baby-chick',
    c: '1f425'
  },
  {
    n: 'frowning-face',
    c: '2639'
  },
  {
    n: 'frowning-face-with-open-mouth',
    c: '1f626'
  },
  {
    n: 'fuel-pump',
    c: '26fd'
  },
  {
    n: 'full-moon',
    c: '1f315'
  },
  {
    n: 'full-moon-face',
    c: '1f31d'
  },
  {
    n: 'funeral-urn',
    c: '26b1'
  },
  {
    n: 'game-die',
    c: '1f3b2'
  },
  {
    n: 'garlic',
    c: '1f9c4'
  },
  {
    n: 'gear',
    c: '2699'
  },
  {
    n: 'gem-stone',
    c: '1f48e'
  },
  {
    n: 'gemini',
    c: '264a'
  },
  {
    n: 'genie',
    c: '1f9de'
  },
  {
    n: 'ghost',
    c: '1f47b'
  },
  {
    n: 'giraffe',
    c: '1f992'
  },
  {
    n: 'girl',
    c: '1f467'
  },
  {
    n: 'girl-dark-skin-tone',
    c: '1f467-1f3ff'
  },
  {
    n: 'girl-light-skin-tone',
    c: '1f467-1f3fb'
  },
  {
    n: 'girl-medium-dark-skin-tone',
    c: '1f467-1f3fe'
  },
  {
    n: 'girl-medium-light-skin-tone',
    c: '1f467-1f3fc'
  },
  {
    n: 'girl-medium-skin-tone',
    c: '1f467-1f3fd'
  },
  {
    n: 'glass-of-milk',
    c: '1f95b'
  },
  {
    n: 'glasses',
    c: '1f453'
  },
  {
    n: 'globe-showing-americas',
    c: '1f30e'
  },
  {
    n: 'globe-showing-asia-australia',
    c: '1f30f'
  },
  {
    n: 'globe-showing-europe-africa',
    c: '1f30d'
  },
  {
    n: 'globe-with-meridians',
    c: '1f310'
  },
  {
    n: 'gloves',
    c: '1f9e4'
  },
  {
    n: 'glowing-star',
    c: '1f31f'
  },
  {
    n: 'goal-net',
    c: '1f945'
  },
  {
    n: 'goat',
    c: '1f410'
  },
  {
    n: 'goblin',
    c: '1f47a'
  },
  {
    n: 'goggles',
    c: '1f97d'
  },
  {
    n: 'gorilla',
    c: '1f98d'
  },
  {
    n: 'graduation-cap',
    c: '1f393'
  },
  {
    n: 'grapes',
    c: '1f347'
  },
  {
    n: 'green-apple',
    c: '1f34f'
  },
  {
    n: 'green-book',
    c: '1f4d7'
  },
  {
    n: 'green-circle',
    c: '1f7e2'
  },
  {
    n: 'green-heart',
    c: '1f49a'
  },
  {
    n: 'green-salad',
    c: '1f957'
  },
  {
    n: 'green-square',
    c: '1f7e9'
  },
  {
    n: 'grimacing-face',
    c: '1f62c'
  },
  {
    n: 'grinning-cat',
    c: '1f63a'
  },
  {
    n: 'grinning-cat-with-smiling-eyes',
    c: '1f638'
  },
  {
    n: 'grinning-face',
    c: '1f600'
  },
  {
    n: 'grinning-face-with-big-eyes',
    c: '1f603'
  },
  {
    n: 'grinning-face-with-smiling-eyes',
    c: '1f604'
  },
  {
    n: 'grinning-face-with-sweat',
    c: '1f605'
  },
  {
    n: 'grinning-squinting-face',
    c: '1f606'
  },
  {
    n: 'growing-heart',
    c: '1f497'
  },
  {
    n: 'guard',
    c: '1f482'
  },
  {
    n: 'guard-dark-skin-tone',
    c: '1f482-1f3ff'
  },
  {
    n: 'guard-light-skin-tone',
    c: '1f482-1f3fb'
  },
  {
    n: 'guard-medium-dark-skin-tone',
    c: '1f482-1f3fe'
  },
  {
    n: 'guard-medium-light-skin-tone',
    c: '1f482-1f3fc'
  },
  {
    n: 'guard-medium-skin-tone',
    c: '1f482-1f3fd'
  },
  {
    n: 'guide-dog',
    c: '1f9ae'
  },
  {
    n: 'guitar',
    c: '1f3b8'
  },
  {
    n: 'hamburger',
    c: '1f354'
  },
  {
    n: 'hammer',
    c: '1f528'
  },
  {
    n: 'hammer-and-pick',
    c: '2692'
  },
  {
    n: 'hammer-and-wrench',
    c: '1f6e0'
  },
  {
    n: 'hamster',
    c: '1f439'
  },
  {
    n: 'hand-with-fingers-splayed',
    c: '1f590'
  },
  {
    n: 'hand-with-fingers-splayed-dark-skin-tone',
    c: '1f590-1f3ff'
  },
  {
    n: 'hand-with-fingers-splayed-light-skin-tone',
    c: '1f590-1f3fb'
  },
  {
    n: 'hand-with-fingers-splayed-medium-dark-skin-tone',
    c: '1f590-1f3fe'
  },
  {
    n: 'hand-with-fingers-splayed-medium-light-skin-tone',
    c: '1f590-1f3fc'
  },
  {
    n: 'hand-with-fingers-splayed-medium-skin-tone',
    c: '1f590-1f3fd'
  },
  {
    n: 'handbag',
    c: '1f45c'
  },
  {
    n: 'handshake',
    c: '1f91d'
  },
  {
    n: 'hatching-chick',
    c: '1f423'
  },
  {
    n: 'headphone',
    c: '1f3a7'
  },
  {
    n: 'headstone',
    c: '1faa6'
  },
  {
    n: 'health-worker',
    c: '1f9d1-200d-2695-fe0f'
  },
  {
    n: 'health-worker-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-2695-fe0f'
  },
  {
    n: 'health-worker-light-skin-tone',
    c: '1f9d1-1f3fb-200d-2695-fe0f'
  },
  {
    n: 'health-worker-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-2695-fe0f'
  },
  {
    n: 'health-worker-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-2695-fe0f'
  },
  {
    n: 'health-worker-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-2695-fe0f'
  },
  {
    n: 'hear-no-evil-monkey',
    c: '1f649'
  },
  {
    n: 'heart-decoration',
    c: '1f49f'
  },
  {
    n: 'heart-exclamation',
    c: '2763'
  },
  {
    n: 'heart-on-fire',
    c: '2764-fe0f-200d-1f525'
  },
  {
    n: 'heart-suit',
    c: '2665'
  },
  {
    n: 'heart-with-arrow',
    c: '1f498'
  },
  {
    n: 'heart-with-ribbon',
    c: '1f49d'
  },
  {
    n: 'heavy-dollar-sign',
    c: '1f4b2'
  },
  {
    n: 'hedgehog',
    c: '1f994'
  },
  {
    n: 'helicopter',
    c: '1f681'
  },
  {
    n: 'herb',
    c: '1f33f'
  },
  {
    n: 'hibiscus',
    c: '1f33a'
  },
  {
    n: 'high-heeled-shoe',
    c: '1f460'
  },
  {
    n: 'high-speed-train',
    c: '1f684'
  },
  {
    n: 'high-voltage',
    c: '26a1'
  },
  {
    n: 'hiking-boot',
    c: '1f97e'
  },
  {
    n: 'hindu-temple',
    c: '1f6d5'
  },
  {
    n: 'hippopotamus',
    c: '1f99b'
  },
  {
    n: 'hole',
    c: '1f573'
  },
  {
    n: 'hollow-red-circle',
    c: '2b55'
  },
  {
    n: 'honey-pot',
    c: '1f36f'
  },
  {
    n: 'honeybee',
    c: '1f41d'
  },
  {
    n: 'hook',
    c: '1fa9d'
  },
  {
    n: 'horizontal-traffic-light',
    c: '1f6a5'
  },
  {
    n: 'horse',
    c: '1f40e'
  },
  {
    n: 'horse-face',
    c: '1f434'
  },
  {
    n: 'horse-racing',
    c: '1f3c7'
  },
  {
    n: 'horse-racing-dark-skin-tone',
    c: '1f3c7-1f3ff'
  },
  {
    n: 'horse-racing-light-skin-tone',
    c: '1f3c7-1f3fb'
  },
  {
    n: 'horse-racing-medium-dark-skin-tone',
    c: '1f3c7-1f3fe'
  },
  {
    n: 'horse-racing-medium-light-skin-tone',
    c: '1f3c7-1f3fc'
  },
  {
    n: 'horse-racing-medium-skin-tone',
    c: '1f3c7-1f3fd'
  },
  {
    n: 'hospital',
    c: '1f3e5'
  },
  {
    n: 'hot-beverage',
    c: '2615'
  },
  {
    n: 'hot-dog',
    c: '1f32d'
  },
  {
    n: 'hot-face',
    c: '1f975'
  },
  {
    n: 'hot-pepper',
    c: '1f336'
  },
  {
    n: 'hot-springs',
    c: '2668'
  },
  {
    n: 'hotel',
    c: '1f3e8'
  },
  {
    n: 'hourglass-done',
    c: '231b'
  },
  {
    n: 'hourglass-not-done',
    c: '23f3'
  },
  {
    n: 'house',
    c: '1f3e0'
  },
  {
    n: 'house-with-garden',
    c: '1f3e1'
  },
  {
    n: 'houses',
    c: '1f3d8'
  },
  {
    n: 'hugging-face',
    c: '1f917'
  },
  {
    n: 'hundred-points',
    c: '1f4af'
  },
  {
    n: 'hushed-face',
    c: '1f62f'
  },
  {
    n: 'hut',
    c: '1f6d6'
  },
  {
    n: 'ice',
    c: '1f9ca'
  },
  {
    n: 'ice-cream',
    c: '1f368'
  },
  {
    n: 'ice-hockey',
    c: '1f3d2'
  },
  {
    n: 'ice-skate',
    c: '26f8'
  },
  {
    n: 'id-button',
    c: '1f194'
  },
  {
    n: 'inbox-tray',
    c: '1f4e5'
  },
  {
    n: 'incoming-envelope',
    c: '1f4e8'
  },
  {
    n: 'index-pointing-up',
    c: '261d'
  },
  {
    n: 'index-pointing-up-dark-skin-tone',
    c: '261d-1f3ff'
  },
  {
    n: 'index-pointing-up-light-skin-tone',
    c: '261d-1f3fb'
  },
  {
    n: 'index-pointing-up-medium-dark-skin-tone',
    c: '261d-1f3fe'
  },
  {
    n: 'index-pointing-up-medium-light-skin-tone',
    c: '261d-1f3fc'
  },
  {
    n: 'index-pointing-up-medium-skin-tone',
    c: '261d-1f3fd'
  },
  {
    n: 'infinity',
    c: '267e'
  },
  {
    n: 'information',
    c: '2139'
  },
  {
    n: 'input-latin-letters',
    c: '1f524'
  },
  {
    n: 'input-latin-lowercase',
    c: '1f521'
  },
  {
    n: 'input-latin-uppercase',
    c: '1f520'
  },
  {
    n: 'input-numbers',
    c: '1f522'
  },
  {
    n: 'input-symbols',
    c: '1f523'
  },
  {
    n: 'jack-o-lantern',
    c: '1f383'
  },
  {
    n: 'japanese-acceptable-button',
    c: '1f251'
  },
  {
    n: 'japanese-application-button',
    c: '1f238'
  },
  {
    n: 'japanese-bargain-button',
    c: '1f250'
  },
  {
    n: 'japanese-castle',
    c: '1f3ef'
  },
  {
    n: 'japanese-congratulations-button',
    c: '3297'
  },
  {
    n: 'japanese-discount-button',
    c: '1f239'
  },
  {
    n: 'japanese-dolls',
    c: '1f38e'
  },
  {
    n: 'japanese-free-of-charge-button',
    c: '1f21a'
  },
  {
    n: 'japanese-here-button',
    c: '1f201'
  },
  {
    n: 'japanese-monthly-amount-button',
    c: '1f237'
  },
  {
    n: 'japanese-no-vacancy-button',
    c: '1f235'
  },
  {
    n: 'japanese-not-free-of-charge-button',
    c: '1f236'
  },
  {
    n: 'japanese-open-for-business-button',
    c: '1f23a'
  },
  {
    n: 'japanese-passing-grade-button',
    c: '1f234'
  },
  {
    n: 'japanese-post-office',
    c: '1f3e3'
  },
  {
    n: 'japanese-prohibited-button',
    c: '1f232'
  },
  {
    n: 'japanese-reserved-button',
    c: '1f22f'
  },
  {
    n: 'japanese-secret-button',
    c: '3299'
  },
  {
    n: 'japanese-service-charge-button',
    c: '1f202'
  },
  {
    n: 'japanese-symbol-for-beginner',
    c: '1f530'
  },
  {
    n: 'japanese-vacancy-button',
    c: '1f233'
  },
  {
    n: 'jeans',
    c: '1f456'
  },
  {
    n: 'joker',
    c: '1f0cf'
  },
  {
    n: 'joystick',
    c: '1f579'
  },
  {
    n: 'judge',
    c: '1f9d1-200d-2696-fe0f'
  },
  {
    n: 'judge-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-2696-fe0f'
  },
  {
    n: 'judge-light-skin-tone',
    c: '1f9d1-1f3fb-200d-2696-fe0f'
  },
  {
    n: 'judge-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-2696-fe0f'
  },
  {
    n: 'judge-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-2696-fe0f'
  },
  {
    n: 'judge-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-2696-fe0f'
  },
  {
    n: 'kaaba',
    c: '1f54b'
  },
  {
    n: 'kangaroo',
    c: '1f998'
  },
  {
    n: 'key',
    c: '1f511'
  },
  {
    n: 'keyboard',
    c: '2328'
  },
  {
    n: 'keycap',
    c: '2a-20e3'
  },
  {
    n: 'keycap-number-sign',
    c: '23-20e3'
  },
  {
    n: 'keycap-0',
    c: '30-20e3'
  },
  {
    n: 'keycap-1',
    c: '31-20e3'
  },
  {
    n: 'keycap-10',
    c: '1f51f'
  },
  {
    n: 'keycap-2',
    c: '32-20e3'
  },
  {
    n: 'keycap-3',
    c: '33-20e3'
  },
  {
    n: 'keycap-4',
    c: '34-20e3'
  },
  {
    n: 'keycap-5',
    c: '35-20e3'
  },
  {
    n: 'keycap-6',
    c: '36-20e3'
  },
  {
    n: 'keycap-7',
    c: '37-20e3'
  },
  {
    n: 'keycap-8',
    c: '38-20e3'
  },
  {
    n: 'keycap-9',
    c: '39-20e3'
  },
  {
    n: 'kick-scooter',
    c: '1f6f4'
  },
  {
    n: 'kimono',
    c: '1f458'
  },
  {
    n: 'kiss',
    c: '1f48f'
  },
  {
    n: 'kiss-dark-skin-tone',
    c: '1f48f-1f3ff'
  },
  {
    n: 'kiss-light-skin-tone',
    c: '1f48f-1f3fb'
  },
  {
    n: 'kiss-man-man',
    c: '1f468-200d-2764-fe0f-200d-1f48b-200d-1f468'
  },
  {
    n: 'kiss-man-man-dark-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-man-man-dark-skin-tone-light-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-man-man-dark-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-man-man-dark-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-man-man-dark-skin-tone-medium-skin-tone',
    c: '1f468-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-man-man-light-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-man-man-light-skin-tone-dark-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-man-man-light-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-man-man-light-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-man-man-light-skin-tone-medium-skin-tone',
    c: '1f468-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-man-man-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-man-man-medium-dark-skin-tone-dark-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-man-man-medium-dark-skin-tone-light-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-man-man-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-man-man-medium-dark-skin-tone-medium-skin-tone',
    c: '1f468-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-man-man-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-man-man-medium-light-skin-tone-dark-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-man-man-medium-light-skin-tone-light-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-man-man-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-man-man-medium-light-skin-tone-medium-skin-tone',
    c: '1f468-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-man-man-medium-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-man-man-medium-skin-tone-dark-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-man-man-medium-skin-tone-light-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-man-man-medium-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-man-man-medium-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-mark',
    c: '1f48b'
  },
  {
    n: 'kiss-medium-dark-skin-tone',
    c: '1f48f-1f3fe'
  },
  {
    n: 'kiss-medium-light-skin-tone',
    c: '1f48f-1f3fc'
  },
  {
    n: 'kiss-medium-skin-tone',
    c: '1f48f-1f3fd'
  },
  {
    n: 'kiss-person-person-dark-skin-tone-light-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    n: 'kiss-person-person-dark-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    n: 'kiss-person-person-dark-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    n: 'kiss-person-person-dark-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    n: 'kiss-person-person-light-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    n: 'kiss-person-person-light-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    n: 'kiss-person-person-light-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    n: 'kiss-person-person-light-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    n: 'kiss-person-person-medium-dark-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    n: 'kiss-person-person-medium-dark-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    n: 'kiss-person-person-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    n: 'kiss-person-person-medium-dark-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    n: 'kiss-person-person-medium-light-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    n: 'kiss-person-person-medium-light-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    n: 'kiss-person-person-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    n: 'kiss-person-person-medium-light-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fd'
  },
  {
    n: 'kiss-person-person-medium-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3ff'
  },
  {
    n: 'kiss-person-person-medium-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fb'
  },
  {
    n: 'kiss-person-person-medium-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fe'
  },
  {
    n: 'kiss-person-person-medium-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f9d1-1f3fc'
  },
  {
    n: 'kiss-woman-man',
    c: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f468'
  },
  {
    n: 'kiss-woman-man-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-woman-man-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-woman-man-dark-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-woman-man-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-woman-man-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-woman-man-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-woman-man-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-woman-man-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-woman-man-light-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-woman-man-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-woman-man-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-woman-man-medium-dark-skin-tone-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-woman-man-medium-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-woman-man-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-woman-man-medium-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-woman-man-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-woman-man-medium-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-woman-man-medium-light-skin-tone-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-woman-man-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-woman-man-medium-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-woman-man-medium-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fd'
  },
  {
    n: 'kiss-woman-man-medium-skin-tone-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3ff'
  },
  {
    n: 'kiss-woman-man-medium-skin-tone-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fb'
  },
  {
    n: 'kiss-woman-man-medium-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fe'
  },
  {
    n: 'kiss-woman-man-medium-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f468-1f3fc'
  },
  {
    n: 'kiss-woman-woman',
    c: '1f469-200d-2764-fe0f-200d-1f48b-200d-1f469'
  },
  {
    n: 'kiss-woman-woman-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    n: 'kiss-woman-woman-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    n: 'kiss-woman-woman-dark-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    n: 'kiss-woman-woman-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    n: 'kiss-woman-woman-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3ff-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    n: 'kiss-woman-woman-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    n: 'kiss-woman-woman-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    n: 'kiss-woman-woman-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    n: 'kiss-woman-woman-light-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    n: 'kiss-woman-woman-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fb-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    n: 'kiss-woman-woman-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    n: 'kiss-woman-woman-medium-dark-skin-tone-dark-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    n: 'kiss-woman-woman-medium-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    n: 'kiss-woman-woman-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    n: 'kiss-woman-woman-medium-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3fe-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    n: 'kiss-woman-woman-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    n: 'kiss-woman-woman-medium-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    n: 'kiss-woman-woman-medium-light-skin-tone-light-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    n: 'kiss-woman-woman-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    n: 'kiss-woman-woman-medium-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fc-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    n: 'kiss-woman-woman-medium-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fd'
  },
  {
    n: 'kiss-woman-woman-medium-skin-tone-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3ff'
  },
  {
    n: 'kiss-woman-woman-medium-skin-tone-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fb'
  },
  {
    n: 'kiss-woman-woman-medium-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fe'
  },
  {
    n: 'kiss-woman-woman-medium-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fd-200d-2764-fe0f-200d-1f48b-200d-1f469-1f3fc'
  },
  {
    n: 'kissing-cat',
    c: '1f63d'
  },
  {
    n: 'kissing-face',
    c: '1f617'
  },
  {
    n: 'kissing-face-with-closed-eyes',
    c: '1f61a'
  },
  {
    n: 'kissing-face-with-smiling-eyes',
    c: '1f619'
  },
  {
    n: 'kitchen-knife',
    c: '1f52a'
  },
  {
    n: 'kite',
    c: '1fa81'
  },
  {
    n: 'kiwi-fruit',
    c: '1f95d'
  },
  {
    n: 'knocked-out-face',
    c: '1f635'
  },
  {
    n: 'knot',
    c: '1faa2'
  },
  {
    n: 'koala',
    c: '1f428'
  },
  {
    n: 'lab-coat',
    c: '1f97c'
  },
  {
    n: 'label',
    c: '1f3f7'
  },
  {
    n: 'lacrosse',
    c: '1f94d'
  },
  {
    n: 'ladder',
    c: '1fa9c'
  },
  {
    n: 'lady-beetle',
    c: '1f41e'
  },
  {
    n: 'laptop',
    c: '1f4bb'
  },
  {
    n: 'large-blue-diamond',
    c: '1f537'
  },
  {
    n: 'large-orange-diamond',
    c: '1f536'
  },
  {
    n: 'last-quarter-moon',
    c: '1f317'
  },
  {
    n: 'last-quarter-moon-face',
    c: '1f31c'
  },
  {
    n: 'last-track-button',
    c: '23ee'
  },
  {
    n: 'latin-cross',
    c: '271d'
  },
  {
    n: 'leaf-fluttering-in-wind',
    c: '1f343'
  },
  {
    n: 'leafy-green',
    c: '1f96c'
  },
  {
    n: 'ledger',
    c: '1f4d2'
  },
  {
    n: 'left-arrow',
    c: '2b05'
  },
  {
    n: 'left-arrow-curving-right',
    c: '21aa'
  },
  {
    n: 'left-facing-fist',
    c: '1f91b'
  },
  {
    n: 'left-facing-fist-dark-skin-tone',
    c: '1f91b-1f3ff'
  },
  {
    n: 'left-facing-fist-light-skin-tone',
    c: '1f91b-1f3fb'
  },
  {
    n: 'left-facing-fist-medium-dark-skin-tone',
    c: '1f91b-1f3fe'
  },
  {
    n: 'left-facing-fist-medium-light-skin-tone',
    c: '1f91b-1f3fc'
  },
  {
    n: 'left-facing-fist-medium-skin-tone',
    c: '1f91b-1f3fd'
  },
  {
    n: 'left-luggage',
    c: '1f6c5'
  },
  {
    n: 'left-right-arrow',
    c: '2194'
  },
  {
    n: 'left-speech-bubble',
    c: '1f5e8'
  },
  {
    n: 'leg',
    c: '1f9b5'
  },
  {
    n: 'leg-dark-skin-tone',
    c: '1f9b5-1f3ff'
  },
  {
    n: 'leg-light-skin-tone',
    c: '1f9b5-1f3fb'
  },
  {
    n: 'leg-medium-dark-skin-tone',
    c: '1f9b5-1f3fe'
  },
  {
    n: 'leg-medium-light-skin-tone',
    c: '1f9b5-1f3fc'
  },
  {
    n: 'leg-medium-skin-tone',
    c: '1f9b5-1f3fd'
  },
  {
    n: 'lemon',
    c: '1f34b'
  },
  {
    n: 'leo',
    c: '264c'
  },
  {
    n: 'leopard',
    c: '1f406'
  },
  {
    n: 'level-slider',
    c: '1f39a'
  },
  {
    n: 'libra',
    c: '264e'
  },
  {
    n: 'light-bulb',
    c: '1f4a1'
  },
  {
    n: 'light-rail',
    c: '1f688'
  },
  {
    n: 'light-skin-tone',
    c: '1f3fb'
  },
  {
    n: 'link',
    c: '1f517'
  },
  {
    n: 'linked-paperclips',
    c: '1f587'
  },
  {
    n: 'lion',
    c: '1f981'
  },
  {
    n: 'lipstick',
    c: '1f484'
  },
  {
    n: 'litter-in-bin-sign',
    c: '1f6ae'
  },
  {
    n: 'lizard',
    c: '1f98e'
  },
  {
    n: 'llama',
    c: '1f999'
  },
  {
    n: 'lobster',
    c: '1f99e'
  },
  {
    n: 'locked',
    c: '1f512'
  },
  {
    n: 'locked-with-key',
    c: '1f510'
  },
  {
    n: 'locked-with-pen',
    c: '1f50f'
  },
  {
    n: 'locomotive',
    c: '1f682'
  },
  {
    n: 'lollipop',
    c: '1f36d'
  },
  {
    n: 'long-drum',
    c: '1fa98'
  },
  {
    n: 'lotion-bottle',
    c: '1f9f4'
  },
  {
    n: 'loudly-crying-face',
    c: '1f62d'
  },
  {
    n: 'loudspeaker',
    c: '1f4e2'
  },
  {
    n: 'love-hotel',
    c: '1f3e9'
  },
  {
    n: 'love-letter',
    c: '1f48c'
  },
  {
    n: 'love-you-gesture',
    c: '1f91f'
  },
  {
    n: 'love-you-gesture-dark-skin-tone',
    c: '1f91f-1f3ff'
  },
  {
    n: 'love-you-gesture-light-skin-tone',
    c: '1f91f-1f3fb'
  },
  {
    n: 'love-you-gesture-medium-dark-skin-tone',
    c: '1f91f-1f3fe'
  },
  {
    n: 'love-you-gesture-medium-light-skin-tone',
    c: '1f91f-1f3fc'
  },
  {
    n: 'love-you-gesture-medium-skin-tone',
    c: '1f91f-1f3fd'
  },
  {
    n: 'luggage',
    c: '1f9f3'
  },
  {
    n: 'lungs',
    c: '1fac1'
  },
  {
    n: 'lying-face',
    c: '1f925'
  },
  {
    n: 'mage',
    c: '1f9d9'
  },
  {
    n: 'mage-dark-skin-tone',
    c: '1f9d9-1f3ff'
  },
  {
    n: 'mage-light-skin-tone',
    c: '1f9d9-1f3fb'
  },
  {
    n: 'mage-medium-dark-skin-tone',
    c: '1f9d9-1f3fe'
  },
  {
    n: 'mage-medium-light-skin-tone',
    c: '1f9d9-1f3fc'
  },
  {
    n: 'mage-medium-skin-tone',
    c: '1f9d9-1f3fd'
  },
  {
    n: 'magic-wand',
    c: '1fa84'
  },
  {
    n: 'magnet',
    c: '1f9f2'
  },
  {
    n: 'magnifying-glass-tilted-left',
    c: '1f50d'
  },
  {
    n: 'magnifying-glass-tilted-right',
    c: '1f50e'
  },
  {
    n: 'mahjong-red-dragon',
    c: '1f004'
  },
  {
    n: 'male-sign',
    c: '2642'
  },
  {
    n: 'mammoth',
    c: '1f9a3'
  },
  {
    n: 'man',
    c: '1f468'
  },
  {
    n: 'man-artist',
    c: '1f468-200d-1f3a8'
  },
  {
    n: 'man-artist-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f3a8'
  },
  {
    n: 'man-artist-light-skin-tone',
    c: '1f468-1f3fb-200d-1f3a8'
  },
  {
    n: 'man-artist-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f3a8'
  },
  {
    n: 'man-artist-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f3a8'
  },
  {
    n: 'man-artist-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f3a8'
  },
  {
    n: 'man-astronaut',
    c: '1f468-200d-1f680'
  },
  {
    n: 'man-astronaut-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f680'
  },
  {
    n: 'man-astronaut-light-skin-tone',
    c: '1f468-1f3fb-200d-1f680'
  },
  {
    n: 'man-astronaut-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f680'
  },
  {
    n: 'man-astronaut-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f680'
  },
  {
    n: 'man-astronaut-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f680'
  },
  {
    n: 'man-bald',
    c: '1f468-200d-1f9b2'
  },
  {
    n: 'man-beard',
    c: '1f9d4-200d-2642-fe0f'
  },
  {
    n: 'man-biking',
    c: '1f6b4-200d-2642-fe0f'
  },
  {
    n: 'man-biking-dark-skin-tone',
    c: '1f6b4-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-biking-light-skin-tone',
    c: '1f6b4-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-biking-medium-dark-skin-tone',
    c: '1f6b4-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-biking-medium-light-skin-tone',
    c: '1f6b4-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-biking-medium-skin-tone',
    c: '1f6b4-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-blond-hair',
    c: '1f471-200d-2642-fe0f'
  },
  {
    n: 'man-bouncing-ball',
    c: '26f9-fe0f-200d-2642-fe0f'
  },
  {
    n: 'man-bouncing-ball-dark-skin-tone',
    c: '26f9-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-bouncing-ball-light-skin-tone',
    c: '26f9-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-bouncing-ball-medium-dark-skin-tone',
    c: '26f9-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-bouncing-ball-medium-light-skin-tone',
    c: '26f9-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-bouncing-ball-medium-skin-tone',
    c: '26f9-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-bowing',
    c: '1f647-200d-2642-fe0f'
  },
  {
    n: 'man-bowing-dark-skin-tone',
    c: '1f647-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-bowing-light-skin-tone',
    c: '1f647-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-bowing-medium-dark-skin-tone',
    c: '1f647-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-bowing-medium-light-skin-tone',
    c: '1f647-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-bowing-medium-skin-tone',
    c: '1f647-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-cartwheeling',
    c: '1f938-200d-2642-fe0f'
  },
  {
    n: 'man-cartwheeling-dark-skin-tone',
    c: '1f938-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-cartwheeling-light-skin-tone',
    c: '1f938-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-cartwheeling-medium-dark-skin-tone',
    c: '1f938-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-cartwheeling-medium-light-skin-tone',
    c: '1f938-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-cartwheeling-medium-skin-tone',
    c: '1f938-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-christmas',
    c: '1f468-200d-1f384'
  },
  {
    n: 'man-climbing',
    c: '1f9d7-200d-2642-fe0f'
  },
  {
    n: 'man-climbing-dark-skin-tone',
    c: '1f9d7-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-climbing-light-skin-tone',
    c: '1f9d7-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-climbing-medium-dark-skin-tone',
    c: '1f9d7-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-climbing-medium-light-skin-tone',
    c: '1f9d7-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-climbing-medium-skin-tone',
    c: '1f9d7-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-construction-worker',
    c: '1f477-200d-2642-fe0f'
  },
  {
    n: 'man-construction-worker-dark-skin-tone',
    c: '1f477-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-construction-worker-light-skin-tone',
    c: '1f477-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-construction-worker-medium-dark-skin-tone',
    c: '1f477-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-construction-worker-medium-light-skin-tone',
    c: '1f477-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-construction-worker-medium-skin-tone',
    c: '1f477-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-cook',
    c: '1f468-200d-1f373'
  },
  {
    n: 'man-cook-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f373'
  },
  {
    n: 'man-cook-light-skin-tone',
    c: '1f468-1f3fb-200d-1f373'
  },
  {
    n: 'man-cook-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f373'
  },
  {
    n: 'man-cook-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f373'
  },
  {
    n: 'man-cook-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f373'
  },
  {
    n: 'man-curly-hair',
    c: '1f468-200d-1f9b1'
  },
  {
    n: 'man-dancing',
    c: '1f57a'
  },
  {
    n: 'man-dancing-dark-skin-tone',
    c: '1f57a-1f3ff'
  },
  {
    n: 'man-dancing-light-skin-tone',
    c: '1f57a-1f3fb'
  },
  {
    n: 'man-dancing-medium-dark-skin-tone',
    c: '1f57a-1f3fe'
  },
  {
    n: 'man-dancing-medium-light-skin-tone',
    c: '1f57a-1f3fc'
  },
  {
    n: 'man-dancing-medium-skin-tone',
    c: '1f57a-1f3fd'
  },
  {
    n: 'man-dark-skin-tone',
    c: '1f468-1f3ff'
  },
  {
    n: 'man-dark-skin-tone-bald',
    c: '1f468-1f3ff-200d-1f9b2'
  },
  {
    n: 'man-dark-skin-tone-beard',
    c: '1f9d4-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-dark-skin-tone-blond-hair',
    c: '1f471-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-dark-skin-tone-christmas',
    c: '1f468-1f3ff-200d-1f384'
  },
  {
    n: 'man-dark-skin-tone-curly-hair',
    c: '1f468-1f3ff-200d-1f9b1'
  },
  {
    n: 'man-dark-skin-tone-red-hair',
    c: '1f468-1f3ff-200d-1f9b0'
  },
  {
    n: 'man-dark-skin-tone-white-hair',
    c: '1f468-1f3ff-200d-1f9b3'
  },
  {
    n: 'man-detective',
    c: '1f575-fe0f-200d-2642-fe0f'
  },
  {
    n: 'man-detective-dark-skin-tone',
    c: '1f575-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-detective-light-skin-tone',
    c: '1f575-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-detective-medium-dark-skin-tone',
    c: '1f575-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-detective-medium-light-skin-tone',
    c: '1f575-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-detective-medium-skin-tone',
    c: '1f575-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-elf',
    c: '1f9dd-200d-2642-fe0f'
  },
  {
    n: 'man-elf-dark-skin-tone',
    c: '1f9dd-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-elf-light-skin-tone',
    c: '1f9dd-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-elf-medium-dark-skin-tone',
    c: '1f9dd-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-elf-medium-light-skin-tone',
    c: '1f9dd-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-elf-medium-skin-tone',
    c: '1f9dd-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-facepalming',
    c: '1f926-200d-2642-fe0f'
  },
  {
    n: 'man-facepalming-dark-skin-tone',
    c: '1f926-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-facepalming-light-skin-tone',
    c: '1f926-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-facepalming-medium-dark-skin-tone',
    c: '1f926-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-facepalming-medium-light-skin-tone',
    c: '1f926-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-facepalming-medium-skin-tone',
    c: '1f926-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-factory-worker',
    c: '1f468-200d-1f3ed'
  },
  {
    n: 'man-factory-worker-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f3ed'
  },
  {
    n: 'man-factory-worker-light-skin-tone',
    c: '1f468-1f3fb-200d-1f3ed'
  },
  {
    n: 'man-factory-worker-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f3ed'
  },
  {
    n: 'man-factory-worker-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f3ed'
  },
  {
    n: 'man-factory-worker-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f3ed'
  },
  {
    n: 'man-fairy',
    c: '1f9da-200d-2642-fe0f'
  },
  {
    n: 'man-fairy-dark-skin-tone',
    c: '1f9da-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-fairy-light-skin-tone',
    c: '1f9da-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-fairy-medium-dark-skin-tone',
    c: '1f9da-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-fairy-medium-light-skin-tone',
    c: '1f9da-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-fairy-medium-skin-tone',
    c: '1f9da-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-farmer',
    c: '1f468-200d-1f33e'
  },
  {
    n: 'man-farmer-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f33e'
  },
  {
    n: 'man-farmer-light-skin-tone',
    c: '1f468-1f3fb-200d-1f33e'
  },
  {
    n: 'man-farmer-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f33e'
  },
  {
    n: 'man-farmer-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f33e'
  },
  {
    n: 'man-farmer-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f33e'
  },
  {
    n: 'man-feeding-baby',
    c: '1f468-200d-1f37c'
  },
  {
    n: 'man-feeding-baby-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f37c'
  },
  {
    n: 'man-feeding-baby-light-skin-tone',
    c: '1f468-1f3fb-200d-1f37c'
  },
  {
    n: 'man-feeding-baby-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f37c'
  },
  {
    n: 'man-feeding-baby-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f37c'
  },
  {
    n: 'man-feeding-baby-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f37c'
  },
  {
    n: 'man-firefighter',
    c: '1f468-200d-1f692'
  },
  {
    n: 'man-firefighter-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f692'
  },
  {
    n: 'man-firefighter-light-skin-tone',
    c: '1f468-1f3fb-200d-1f692'
  },
  {
    n: 'man-firefighter-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f692'
  },
  {
    n: 'man-firefighter-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f692'
  },
  {
    n: 'man-firefighter-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f692'
  },
  {
    n: 'man-frowning',
    c: '1f64d-200d-2642-fe0f'
  },
  {
    n: 'man-frowning-dark-skin-tone',
    c: '1f64d-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-frowning-light-skin-tone',
    c: '1f64d-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-frowning-medium-dark-skin-tone',
    c: '1f64d-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-frowning-medium-light-skin-tone',
    c: '1f64d-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-frowning-medium-skin-tone',
    c: '1f64d-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-genie',
    c: '1f9de-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-no',
    c: '1f645-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-no-dark-skin-tone',
    c: '1f645-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-no-light-skin-tone',
    c: '1f645-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-no-medium-dark-skin-tone',
    c: '1f645-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-no-medium-light-skin-tone',
    c: '1f645-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-no-medium-skin-tone',
    c: '1f645-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-ok',
    c: '1f646-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-ok-dark-skin-tone',
    c: '1f646-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-ok-light-skin-tone',
    c: '1f646-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-ok-medium-dark-skin-tone',
    c: '1f646-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-ok-medium-light-skin-tone',
    c: '1f646-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-gesturing-ok-medium-skin-tone',
    c: '1f646-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-getting-haircut',
    c: '1f487-200d-2642-fe0f'
  },
  {
    n: 'man-getting-haircut-dark-skin-tone',
    c: '1f487-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-getting-haircut-light-skin-tone',
    c: '1f487-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-getting-haircut-medium-dark-skin-tone',
    c: '1f487-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-getting-haircut-medium-light-skin-tone',
    c: '1f487-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-getting-haircut-medium-skin-tone',
    c: '1f487-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-getting-massage',
    c: '1f486-200d-2642-fe0f'
  },
  {
    n: 'man-getting-massage-dark-skin-tone',
    c: '1f486-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-getting-massage-light-skin-tone',
    c: '1f486-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-getting-massage-medium-dark-skin-tone',
    c: '1f486-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-getting-massage-medium-light-skin-tone',
    c: '1f486-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-getting-massage-medium-skin-tone',
    c: '1f486-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-golfing',
    c: '1f3cc-fe0f-200d-2642-fe0f'
  },
  {
    n: 'man-golfing-dark-skin-tone',
    c: '1f3cc-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-golfing-light-skin-tone',
    c: '1f3cc-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-golfing-medium-dark-skin-tone',
    c: '1f3cc-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-golfing-medium-light-skin-tone',
    c: '1f3cc-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-golfing-medium-skin-tone',
    c: '1f3cc-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-guard',
    c: '1f482-200d-2642-fe0f'
  },
  {
    n: 'man-guard-dark-skin-tone',
    c: '1f482-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-guard-light-skin-tone',
    c: '1f482-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-guard-medium-dark-skin-tone',
    c: '1f482-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-guard-medium-light-skin-tone',
    c: '1f482-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-guard-medium-skin-tone',
    c: '1f482-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-health-worker',
    c: '1f468-200d-2695-fe0f'
  },
  {
    n: 'man-health-worker-dark-skin-tone',
    c: '1f468-1f3ff-200d-2695-fe0f'
  },
  {
    n: 'man-health-worker-light-skin-tone',
    c: '1f468-1f3fb-200d-2695-fe0f'
  },
  {
    n: 'man-health-worker-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-2695-fe0f'
  },
  {
    n: 'man-health-worker-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-2695-fe0f'
  },
  {
    n: 'man-health-worker-medium-skin-tone',
    c: '1f468-1f3fd-200d-2695-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-dark-skin-tone-female',
    c: '1f574-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-dark-skin-tone-male',
    c: '1f574-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-female',
    c: '1f574-fe0f-200d-2640-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-light-skin-tone-female',
    c: '1f574-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-light-skin-tone-male',
    c: '1f574-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-male',
    c: '1f574-fe0f-200d-2642-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-medium-dark-skin-tone-female',
    c: '1f574-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-medium-dark-skin-tone-male',
    c: '1f574-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-medium-light-skin-tone-female',
    c: '1f574-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-medium-light-skin-tone-male',
    c: '1f574-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-medium-skin-tone-female',
    c: '1f574-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'man-in-business-suit-levitating-medium-skin-tone-male',
    c: '1f574-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-in-lotus-position',
    c: '1f9d8-200d-2642-fe0f'
  },
  {
    n: 'man-in-lotus-position-dark-skin-tone',
    c: '1f9d8-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-in-lotus-position-light-skin-tone',
    c: '1f9d8-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-in-lotus-position-medium-dark-skin-tone',
    c: '1f9d8-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-in-lotus-position-medium-light-skin-tone',
    c: '1f9d8-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-in-lotus-position-medium-skin-tone',
    c: '1f9d8-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-in-manual-wheelchair',
    c: '1f468-200d-1f9bd'
  },
  {
    n: 'man-in-manual-wheelchair-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f9bd'
  },
  {
    n: 'man-in-manual-wheelchair-light-skin-tone',
    c: '1f468-1f3fb-200d-1f9bd'
  },
  {
    n: 'man-in-manual-wheelchair-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f9bd'
  },
  {
    n: 'man-in-manual-wheelchair-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f9bd'
  },
  {
    n: 'man-in-manual-wheelchair-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f9bd'
  },
  {
    n: 'man-in-motorized-wheelchair',
    c: '1f468-200d-1f9bc'
  },
  {
    n: 'man-in-motorized-wheelchair-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f9bc'
  },
  {
    n: 'man-in-motorized-wheelchair-light-skin-tone',
    c: '1f468-1f3fb-200d-1f9bc'
  },
  {
    n: 'man-in-motorized-wheelchair-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f9bc'
  },
  {
    n: 'man-in-motorized-wheelchair-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f9bc'
  },
  {
    n: 'man-in-motorized-wheelchair-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f9bc'
  },
  {
    n: 'man-in-steamy-room',
    c: '1f9d6-200d-2642-fe0f'
  },
  {
    n: 'man-in-steamy-room-dark-skin-tone',
    c: '1f9d6-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-in-steamy-room-light-skin-tone',
    c: '1f9d6-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-in-steamy-room-medium-dark-skin-tone',
    c: '1f9d6-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-in-steamy-room-medium-light-skin-tone',
    c: '1f9d6-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-in-steamy-room-medium-skin-tone',
    c: '1f9d6-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-in-tuxedo',
    c: '1f935-200d-2642-fe0f'
  },
  {
    n: 'man-in-tuxedo-dark-skin-tone',
    c: '1f935-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-in-tuxedo-light-skin-tone',
    c: '1f935-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-in-tuxedo-medium-dark-skin-tone',
    c: '1f935-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-in-tuxedo-medium-light-skin-tone',
    c: '1f935-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-in-tuxedo-medium-skin-tone',
    c: '1f935-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-judge',
    c: '1f468-200d-2696-fe0f'
  },
  {
    n: 'man-judge-dark-skin-tone',
    c: '1f468-1f3ff-200d-2696-fe0f'
  },
  {
    n: 'man-judge-light-skin-tone',
    c: '1f468-1f3fb-200d-2696-fe0f'
  },
  {
    n: 'man-judge-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-2696-fe0f'
  },
  {
    n: 'man-judge-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-2696-fe0f'
  },
  {
    n: 'man-judge-medium-skin-tone',
    c: '1f468-1f3fd-200d-2696-fe0f'
  },
  {
    n: 'man-juggling',
    c: '1f939-200d-2642-fe0f'
  },
  {
    n: 'man-juggling-dark-skin-tone',
    c: '1f939-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-juggling-light-skin-tone',
    c: '1f939-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-juggling-medium-dark-skin-tone',
    c: '1f939-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-juggling-medium-light-skin-tone',
    c: '1f939-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-juggling-medium-skin-tone',
    c: '1f939-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-kneeling',
    c: '1f9ce-200d-2642-fe0f'
  },
  {
    n: 'man-kneeling-dark-skin-tone',
    c: '1f9ce-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-kneeling-light-skin-tone',
    c: '1f9ce-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-kneeling-medium-dark-skin-tone',
    c: '1f9ce-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-kneeling-medium-light-skin-tone',
    c: '1f9ce-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-kneeling-medium-skin-tone',
    c: '1f9ce-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-lifting-weights',
    c: '1f3cb-fe0f-200d-2642-fe0f'
  },
  {
    n: 'man-lifting-weights-dark-skin-tone',
    c: '1f3cb-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-lifting-weights-light-skin-tone',
    c: '1f3cb-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-lifting-weights-medium-dark-skin-tone',
    c: '1f3cb-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-lifting-weights-medium-light-skin-tone',
    c: '1f3cb-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-lifting-weights-medium-skin-tone',
    c: '1f3cb-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-light-skin-tone',
    c: '1f468-1f3fb'
  },
  {
    n: 'man-light-skin-tone-bald',
    c: '1f468-1f3fb-200d-1f9b2'
  },
  {
    n: 'man-light-skin-tone-beard',
    c: '1f9d4-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-light-skin-tone-blond-hair',
    c: '1f471-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-light-skin-tone-christmas',
    c: '1f468-1f3fb-200d-1f384'
  },
  {
    n: 'man-light-skin-tone-curly-hair',
    c: '1f468-1f3fb-200d-1f9b1'
  },
  {
    n: 'man-light-skin-tone-red-hair',
    c: '1f468-1f3fb-200d-1f9b0'
  },
  {
    n: 'man-light-skin-tone-white-hair',
    c: '1f468-1f3fb-200d-1f9b3'
  },
  {
    n: 'man-mage',
    c: '1f9d9-200d-2642-fe0f'
  },
  {
    n: 'man-mage-dark-skin-tone',
    c: '1f9d9-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-mage-light-skin-tone',
    c: '1f9d9-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-mage-medium-dark-skin-tone',
    c: '1f9d9-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-mage-medium-light-skin-tone',
    c: '1f9d9-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-mage-medium-skin-tone',
    c: '1f9d9-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-mechanic',
    c: '1f468-200d-1f527'
  },
  {
    n: 'man-mechanic-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f527'
  },
  {
    n: 'man-mechanic-light-skin-tone',
    c: '1f468-1f3fb-200d-1f527'
  },
  {
    n: 'man-mechanic-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f527'
  },
  {
    n: 'man-mechanic-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f527'
  },
  {
    n: 'man-mechanic-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f527'
  },
  {
    n: 'man-medium-dark-skin-tone',
    c: '1f468-1f3fe'
  },
  {
    n: 'man-medium-dark-skin-tone-bald',
    c: '1f468-1f3fe-200d-1f9b2'
  },
  {
    n: 'man-medium-dark-skin-tone-beard',
    c: '1f9d4-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-medium-dark-skin-tone-blond-hair',
    c: '1f471-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-medium-dark-skin-tone-christmas',
    c: '1f468-1f3fe-200d-1f384'
  },
  {
    n: 'man-medium-dark-skin-tone-curly-hair',
    c: '1f468-1f3fe-200d-1f9b1'
  },
  {
    n: 'man-medium-dark-skin-tone-red-hair',
    c: '1f468-1f3fe-200d-1f9b0'
  },
  {
    n: 'man-medium-dark-skin-tone-white-hair',
    c: '1f468-1f3fe-200d-1f9b3'
  },
  {
    n: 'man-medium-light-skin-tone',
    c: '1f468-1f3fc'
  },
  {
    n: 'man-medium-light-skin-tone-bald',
    c: '1f468-1f3fc-200d-1f9b2'
  },
  {
    n: 'man-medium-light-skin-tone-beard',
    c: '1f9d4-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-medium-light-skin-tone-blond-hair',
    c: '1f471-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-medium-light-skin-tone-christmas',
    c: '1f468-1f3fc-200d-1f384'
  },
  {
    n: 'man-medium-light-skin-tone-curly-hair',
    c: '1f468-1f3fc-200d-1f9b1'
  },
  {
    n: 'man-medium-light-skin-tone-red-hair',
    c: '1f468-1f3fc-200d-1f9b0'
  },
  {
    n: 'man-medium-light-skin-tone-white-hair',
    c: '1f468-1f3fc-200d-1f9b3'
  },
  {
    n: 'man-medium-skin-tone',
    c: '1f468-1f3fd'
  },
  {
    n: 'man-medium-skin-tone-bald',
    c: '1f468-1f3fd-200d-1f9b2'
  },
  {
    n: 'man-medium-skin-tone-beard',
    c: '1f9d4-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-medium-skin-tone-blond-hair',
    c: '1f471-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-medium-skin-tone-christmas',
    c: '1f468-1f3fd-200d-1f384'
  },
  {
    n: 'man-medium-skin-tone-curly-hair',
    c: '1f468-1f3fd-200d-1f9b1'
  },
  {
    n: 'man-medium-skin-tone-red-hair',
    c: '1f468-1f3fd-200d-1f9b0'
  },
  {
    n: 'man-medium-skin-tone-white-hair',
    c: '1f468-1f3fd-200d-1f9b3'
  },
  {
    n: 'man-mountain-biking',
    c: '1f6b5-200d-2642-fe0f'
  },
  {
    n: 'man-mountain-biking-dark-skin-tone',
    c: '1f6b5-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-mountain-biking-light-skin-tone',
    c: '1f6b5-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-mountain-biking-medium-dark-skin-tone',
    c: '1f6b5-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-mountain-biking-medium-light-skin-tone',
    c: '1f6b5-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-mountain-biking-medium-skin-tone',
    c: '1f6b5-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-office-worker',
    c: '1f468-200d-1f4bc'
  },
  {
    n: 'man-office-worker-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f4bc'
  },
  {
    n: 'man-office-worker-light-skin-tone',
    c: '1f468-1f3fb-200d-1f4bc'
  },
  {
    n: 'man-office-worker-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f4bc'
  },
  {
    n: 'man-office-worker-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f4bc'
  },
  {
    n: 'man-office-worker-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f4bc'
  },
  {
    n: 'man-pilot',
    c: '1f468-200d-2708-fe0f'
  },
  {
    n: 'man-pilot-dark-skin-tone',
    c: '1f468-1f3ff-200d-2708-fe0f'
  },
  {
    n: 'man-pilot-light-skin-tone',
    c: '1f468-1f3fb-200d-2708-fe0f'
  },
  {
    n: 'man-pilot-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-2708-fe0f'
  },
  {
    n: 'man-pilot-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-2708-fe0f'
  },
  {
    n: 'man-pilot-medium-skin-tone',
    c: '1f468-1f3fd-200d-2708-fe0f'
  },
  {
    n: 'man-playing-handball',
    c: '1f93e-200d-2642-fe0f'
  },
  {
    n: 'man-playing-handball-dark-skin-tone',
    c: '1f93e-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-playing-handball-light-skin-tone',
    c: '1f93e-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-playing-handball-medium-dark-skin-tone',
    c: '1f93e-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-playing-handball-medium-light-skin-tone',
    c: '1f93e-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-playing-handball-medium-skin-tone',
    c: '1f93e-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-playing-water-polo',
    c: '1f93d-200d-2642-fe0f'
  },
  {
    n: 'man-playing-water-polo-dark-skin-tone',
    c: '1f93d-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-playing-water-polo-light-skin-tone',
    c: '1f93d-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-playing-water-polo-medium-dark-skin-tone',
    c: '1f93d-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-playing-water-polo-medium-light-skin-tone',
    c: '1f93d-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-playing-water-polo-medium-skin-tone',
    c: '1f93d-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-police-officer',
    c: '1f46e-200d-2642-fe0f'
  },
  {
    n: 'man-police-officer-dark-skin-tone',
    c: '1f46e-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-police-officer-light-skin-tone',
    c: '1f46e-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-police-officer-medium-dark-skin-tone',
    c: '1f46e-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-police-officer-medium-light-skin-tone',
    c: '1f46e-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-police-officer-medium-skin-tone',
    c: '1f46e-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-pouting',
    c: '1f64e-200d-2642-fe0f'
  },
  {
    n: 'man-pouting-dark-skin-tone',
    c: '1f64e-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-pouting-light-skin-tone',
    c: '1f64e-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-pouting-medium-dark-skin-tone',
    c: '1f64e-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-pouting-medium-light-skin-tone',
    c: '1f64e-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-pouting-medium-skin-tone',
    c: '1f64e-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-raising-hand',
    c: '1f64b-200d-2642-fe0f'
  },
  {
    n: 'man-raising-hand-dark-skin-tone',
    c: '1f64b-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-raising-hand-light-skin-tone',
    c: '1f64b-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-raising-hand-medium-dark-skin-tone',
    c: '1f64b-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-raising-hand-medium-light-skin-tone',
    c: '1f64b-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-raising-hand-medium-skin-tone',
    c: '1f64b-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-red-hair',
    c: '1f468-200d-1f9b0'
  },
  {
    n: 'man-rowing-boat',
    c: '1f6a3-200d-2642-fe0f'
  },
  {
    n: 'man-rowing-boat-dark-skin-tone',
    c: '1f6a3-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-rowing-boat-light-skin-tone',
    c: '1f6a3-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-rowing-boat-medium-dark-skin-tone',
    c: '1f6a3-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-rowing-boat-medium-light-skin-tone',
    c: '1f6a3-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-rowing-boat-medium-skin-tone',
    c: '1f6a3-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-running',
    c: '1f3c3-200d-2642-fe0f'
  },
  {
    n: 'man-running-dark-skin-tone',
    c: '1f3c3-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-running-light-skin-tone',
    c: '1f3c3-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-running-medium-dark-skin-tone',
    c: '1f3c3-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-running-medium-light-skin-tone',
    c: '1f3c3-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-running-medium-skin-tone',
    c: '1f3c3-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-s-shoe',
    c: '1f45e'
  },
  {
    n: 'man-scientist',
    c: '1f468-200d-1f52c'
  },
  {
    n: 'man-scientist-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f52c'
  },
  {
    n: 'man-scientist-light-skin-tone',
    c: '1f468-1f3fb-200d-1f52c'
  },
  {
    n: 'man-scientist-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f52c'
  },
  {
    n: 'man-scientist-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f52c'
  },
  {
    n: 'man-scientist-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f52c'
  },
  {
    n: 'man-shrugging',
    c: '1f937-200d-2642-fe0f'
  },
  {
    n: 'man-shrugging-dark-skin-tone',
    c: '1f937-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-shrugging-light-skin-tone',
    c: '1f937-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-shrugging-medium-dark-skin-tone',
    c: '1f937-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-shrugging-medium-light-skin-tone',
    c: '1f937-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-shrugging-medium-skin-tone',
    c: '1f937-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-singer',
    c: '1f468-200d-1f3a4'
  },
  {
    n: 'man-singer-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f3a4'
  },
  {
    n: 'man-singer-light-skin-tone',
    c: '1f468-1f3fb-200d-1f3a4'
  },
  {
    n: 'man-singer-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f3a4'
  },
  {
    n: 'man-singer-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f3a4'
  },
  {
    n: 'man-singer-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f3a4'
  },
  {
    n: 'man-standing',
    c: '1f9cd-200d-2642-fe0f'
  },
  {
    n: 'man-standing-dark-skin-tone',
    c: '1f9cd-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-standing-light-skin-tone',
    c: '1f9cd-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-standing-medium-dark-skin-tone',
    c: '1f9cd-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-standing-medium-light-skin-tone',
    c: '1f9cd-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-standing-medium-skin-tone',
    c: '1f9cd-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-student',
    c: '1f468-200d-1f393'
  },
  {
    n: 'man-student-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f393'
  },
  {
    n: 'man-student-light-skin-tone',
    c: '1f468-1f3fb-200d-1f393'
  },
  {
    n: 'man-student-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f393'
  },
  {
    n: 'man-student-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f393'
  },
  {
    n: 'man-student-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f393'
  },
  {
    n: 'man-superhero',
    c: '1f9b8-200d-2642-fe0f'
  },
  {
    n: 'man-superhero-dark-skin-tone',
    c: '1f9b8-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-superhero-light-skin-tone',
    c: '1f9b8-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-superhero-medium-dark-skin-tone',
    c: '1f9b8-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-superhero-medium-light-skin-tone',
    c: '1f9b8-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-superhero-medium-skin-tone',
    c: '1f9b8-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-supervillain',
    c: '1f9b9-200d-2642-fe0f'
  },
  {
    n: 'man-supervillain-dark-skin-tone',
    c: '1f9b9-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-supervillain-light-skin-tone',
    c: '1f9b9-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-supervillain-medium-dark-skin-tone',
    c: '1f9b9-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-supervillain-medium-light-skin-tone',
    c: '1f9b9-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-supervillain-medium-skin-tone',
    c: '1f9b9-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-surfing',
    c: '1f3c4-200d-2642-fe0f'
  },
  {
    n: 'man-surfing-dark-skin-tone',
    c: '1f3c4-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-surfing-light-skin-tone',
    c: '1f3c4-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-surfing-medium-dark-skin-tone',
    c: '1f3c4-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-surfing-medium-light-skin-tone',
    c: '1f3c4-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-surfing-medium-skin-tone',
    c: '1f3c4-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-swimming',
    c: '1f3ca-200d-2642-fe0f'
  },
  {
    n: 'man-swimming-dark-skin-tone',
    c: '1f3ca-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-swimming-light-skin-tone',
    c: '1f3ca-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-swimming-medium-dark-skin-tone',
    c: '1f3ca-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-swimming-medium-light-skin-tone',
    c: '1f3ca-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-swimming-medium-skin-tone',
    c: '1f3ca-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-teacher',
    c: '1f468-200d-1f3eb'
  },
  {
    n: 'man-teacher-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f3eb'
  },
  {
    n: 'man-teacher-light-skin-tone',
    c: '1f468-1f3fb-200d-1f3eb'
  },
  {
    n: 'man-teacher-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f3eb'
  },
  {
    n: 'man-teacher-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f3eb'
  },
  {
    n: 'man-teacher-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f3eb'
  },
  {
    n: 'man-technologist',
    c: '1f468-200d-1f4bb'
  },
  {
    n: 'man-technologist-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f4bb'
  },
  {
    n: 'man-technologist-light-skin-tone',
    c: '1f468-1f3fb-200d-1f4bb'
  },
  {
    n: 'man-technologist-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f4bb'
  },
  {
    n: 'man-technologist-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f4bb'
  },
  {
    n: 'man-technologist-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f4bb'
  },
  {
    n: 'man-tipping-hand',
    c: '1f481-200d-2642-fe0f'
  },
  {
    n: 'man-tipping-hand-dark-skin-tone',
    c: '1f481-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-tipping-hand-light-skin-tone',
    c: '1f481-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-tipping-hand-medium-dark-skin-tone',
    c: '1f481-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-tipping-hand-medium-light-skin-tone',
    c: '1f481-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-tipping-hand-medium-skin-tone',
    c: '1f481-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-vampire',
    c: '1f9db-200d-2642-fe0f'
  },
  {
    n: 'man-vampire-dark-skin-tone',
    c: '1f9db-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-vampire-light-skin-tone',
    c: '1f9db-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-vampire-medium-dark-skin-tone',
    c: '1f9db-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-vampire-medium-light-skin-tone',
    c: '1f9db-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-vampire-medium-skin-tone',
    c: '1f9db-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-walking',
    c: '1f6b6-200d-2642-fe0f'
  },
  {
    n: 'man-walking-dark-skin-tone',
    c: '1f6b6-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-walking-light-skin-tone',
    c: '1f6b6-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-walking-medium-dark-skin-tone',
    c: '1f6b6-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-walking-medium-light-skin-tone',
    c: '1f6b6-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-walking-medium-skin-tone',
    c: '1f6b6-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-wearing-turban',
    c: '1f473-200d-2642-fe0f'
  },
  {
    n: 'man-wearing-turban-dark-skin-tone',
    c: '1f473-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-wearing-turban-light-skin-tone',
    c: '1f473-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-wearing-turban-medium-dark-skin-tone',
    c: '1f473-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-wearing-turban-medium-light-skin-tone',
    c: '1f473-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-wearing-turban-medium-skin-tone',
    c: '1f473-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-white-hair',
    c: '1f468-200d-1f9b3'
  },
  {
    n: 'man-with-veil',
    c: '1f470-200d-2642-fe0f'
  },
  {
    n: 'man-with-veil-dark-skin-tone',
    c: '1f470-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'man-with-veil-light-skin-tone',
    c: '1f470-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'man-with-veil-medium-dark-skin-tone',
    c: '1f470-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'man-with-veil-medium-light-skin-tone',
    c: '1f470-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'man-with-veil-medium-skin-tone',
    c: '1f470-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'man-with-white-cane',
    c: '1f468-200d-1f9af'
  },
  {
    n: 'man-with-white-cane-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f9af'
  },
  {
    n: 'man-with-white-cane-light-skin-tone',
    c: '1f468-1f3fb-200d-1f9af'
  },
  {
    n: 'man-with-white-cane-medium-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f9af'
  },
  {
    n: 'man-with-white-cane-medium-light-skin-tone',
    c: '1f468-1f3fc-200d-1f9af'
  },
  {
    n: 'man-with-white-cane-medium-skin-tone',
    c: '1f468-1f3fd-200d-1f9af'
  },
  {
    n: 'man-zombie',
    c: '1f9df-200d-2642-fe0f'
  },
  {
    n: 'mango',
    c: '1f96d'
  },
  {
    n: 'mantelpiece-clock',
    c: '1f570'
  },
  {
    n: 'manual-wheelchair',
    c: '1f9bd'
  },
  {
    n: 'map-of-japan',
    c: '1f5fe'
  },
  {
    n: 'maple-leaf',
    c: '1f341'
  },
  {
    n: 'martial-arts-uniform',
    c: '1f94b'
  },
  {
    n: 'mate',
    c: '1f9c9'
  },
  {
    n: 'meat-on-bone',
    c: '1f356'
  },
  {
    n: 'mechanic',
    c: '1f9d1-200d-1f527'
  },
  {
    n: 'mechanic-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f527'
  },
  {
    n: 'mechanic-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f527'
  },
  {
    n: 'mechanic-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f527'
  },
  {
    n: 'mechanic-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f527'
  },
  {
    n: 'mechanic-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f527'
  },
  {
    n: 'mechanical-arm',
    c: '1f9be'
  },
  {
    n: 'mechanical-leg',
    c: '1f9bf'
  },
  {
    n: 'medical-symbol',
    c: '2695'
  },
  {
    n: 'medium-dark-skin-tone',
    c: '1f3fe'
  },
  {
    n: 'medium-light-skin-tone',
    c: '1f3fc'
  },
  {
    n: 'medium-skin-tone',
    c: '1f3fd'
  },
  {
    n: 'megaphone',
    c: '1f4e3'
  },
  {
    n: 'melon',
    c: '1f348'
  },
  {
    n: 'memo',
    c: '1f4dd'
  },
  {
    n: 'men-holding-hands',
    c: '1f46c'
  },
  {
    n: 'men-holding-hands-dark-skin-tone',
    c: '1f46c-1f3ff'
  },
  {
    n: 'men-holding-hands-dark-skin-tone-light-skin-tone',
    c: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'men-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'men-holding-hands-dark-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'men-holding-hands-dark-skin-tone-medium-skin-tone',
    c: '1f468-1f3ff-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'men-holding-hands-light-skin-tone',
    c: '1f46c-1f3fb'
  },
  {
    n: 'men-holding-hands-light-skin-tone-dark-skin-tone',
    c: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'men-holding-hands-light-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'men-holding-hands-light-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'men-holding-hands-light-skin-tone-medium-skin-tone',
    c: '1f468-1f3fb-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'men-holding-hands-medium-dark-skin-tone',
    c: '1f46c-1f3fe'
  },
  {
    n: 'men-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    c: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'men-holding-hands-medium-dark-skin-tone-light-skin-tone',
    c: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'men-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'men-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    c: '1f468-1f3fe-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'men-holding-hands-medium-light-skin-tone',
    c: '1f46c-1f3fc'
  },
  {
    n: 'men-holding-hands-medium-light-skin-tone-dark-skin-tone',
    c: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'men-holding-hands-medium-light-skin-tone-light-skin-tone',
    c: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'men-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'men-holding-hands-medium-light-skin-tone-medium-skin-tone',
    c: '1f468-1f3fc-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'men-holding-hands-medium-skin-tone',
    c: '1f46c-1f3fd'
  },
  {
    n: 'men-holding-hands-medium-skin-tone-dark-skin-tone',
    c: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'men-holding-hands-medium-skin-tone-light-skin-tone',
    c: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'men-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    c: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'men-holding-hands-medium-skin-tone-medium-light-skin-tone',
    c: '1f468-1f3fd-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'men-s-room',
    c: '1f6b9'
  },
  {
    n: 'men-with-bunny-ears',
    c: '1f46f-200d-2642-fe0f'
  },
  {
    n: 'men-wrestling',
    c: '1f93c-200d-2642-fe0f'
  },
  {
    n: 'mending-heart',
    c: '2764-fe0f-200d-1fa79'
  },
  {
    n: 'menorah',
    c: '1f54e'
  },
  {
    n: 'mermaid',
    c: '1f9dc-200d-2640-fe0f'
  },
  {
    n: 'mermaid-dark-skin-tone',
    c: '1f9dc-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'mermaid-light-skin-tone',
    c: '1f9dc-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'mermaid-medium-dark-skin-tone',
    c: '1f9dc-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'mermaid-medium-light-skin-tone',
    c: '1f9dc-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'mermaid-medium-skin-tone',
    c: '1f9dc-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'merman',
    c: '1f9dc-200d-2642-fe0f'
  },
  {
    n: 'merman-dark-skin-tone',
    c: '1f9dc-1f3ff-200d-2642-fe0f'
  },
  {
    n: 'merman-light-skin-tone',
    c: '1f9dc-1f3fb-200d-2642-fe0f'
  },
  {
    n: 'merman-medium-dark-skin-tone',
    c: '1f9dc-1f3fe-200d-2642-fe0f'
  },
  {
    n: 'merman-medium-light-skin-tone',
    c: '1f9dc-1f3fc-200d-2642-fe0f'
  },
  {
    n: 'merman-medium-skin-tone',
    c: '1f9dc-1f3fd-200d-2642-fe0f'
  },
  {
    n: 'merperson',
    c: '1f9dc'
  },
  {
    n: 'merperson-dark-skin-tone',
    c: '1f9dc-1f3ff'
  },
  {
    n: 'merperson-light-skin-tone',
    c: '1f9dc-1f3fb'
  },
  {
    n: 'merperson-medium-dark-skin-tone',
    c: '1f9dc-1f3fe'
  },
  {
    n: 'merperson-medium-light-skin-tone',
    c: '1f9dc-1f3fc'
  },
  {
    n: 'merperson-medium-skin-tone',
    c: '1f9dc-1f3fd'
  },
  {
    n: 'metro',
    c: '1f687'
  },
  {
    n: 'microbe',
    c: '1f9a0'
  },
  {
    n: 'microphone',
    c: '1f3a4'
  },
  {
    n: 'microscope',
    c: '1f52c'
  },
  {
    n: 'middle-finger',
    c: '1f595'
  },
  {
    n: 'middle-finger-dark-skin-tone',
    c: '1f595-1f3ff'
  },
  {
    n: 'middle-finger-light-skin-tone',
    c: '1f595-1f3fb'
  },
  {
    n: 'middle-finger-medium-dark-skin-tone',
    c: '1f595-1f3fe'
  },
  {
    n: 'middle-finger-medium-light-skin-tone',
    c: '1f595-1f3fc'
  },
  {
    n: 'middle-finger-medium-skin-tone',
    c: '1f595-1f3fd'
  },
  {
    n: 'military-helmet',
    c: '1fa96'
  },
  {
    n: 'military-medal',
    c: '1f396'
  },
  {
    n: 'milky-way',
    c: '1f30c'
  },
  {
    n: 'minibus',
    c: '1f690'
  },
  {
    n: 'minus',
    c: '2796'
  },
  {
    n: 'mirror',
    c: '1fa9e'
  },
  {
    n: 'moai',
    c: '1f5ff'
  },
  {
    n: 'mobile-phone',
    c: '1f4f1'
  },
  {
    n: 'mobile-phone-off',
    c: '1f4f4'
  },
  {
    n: 'mobile-phone-with-arrow',
    c: '1f4f2'
  },
  {
    n: 'money-bag',
    c: '1f4b0'
  },
  {
    n: 'money-mouth-face',
    c: '1f911'
  },
  {
    n: 'money-with-wings',
    c: '1f4b8'
  },
  {
    n: 'monkey',
    c: '1f412'
  },
  {
    n: 'monkey-face',
    c: '1f435'
  },
  {
    n: 'monorail',
    c: '1f69d'
  },
  {
    n: 'moon-cake',
    c: '1f96e'
  },
  {
    n: 'moon-viewing-ceremony',
    c: '1f391'
  },
  {
    n: 'mosque',
    c: '1f54c'
  },
  {
    n: 'mosquito',
    c: '1f99f'
  },
  {
    n: 'motor-boat',
    c: '1f6e5'
  },
  {
    n: 'motor-scooter',
    c: '1f6f5'
  },
  {
    n: 'motorcycle',
    c: '1f3cd'
  },
  {
    n: 'motorized-wheelchair',
    c: '1f9bc'
  },
  {
    n: 'motorway',
    c: '1f6e3'
  },
  {
    n: 'mount-fuji',
    c: '1f5fb'
  },
  {
    n: 'mountain',
    c: '26f0'
  },
  {
    n: 'mountain-cableway',
    c: '1f6a0'
  },
  {
    n: 'mountain-railway',
    c: '1f69e'
  },
  {
    n: 'mouse',
    c: '1f401'
  },
  {
    n: 'mouse-face',
    c: '1f42d'
  },
  {
    n: 'mouse-trap',
    c: '1faa4'
  },
  {
    n: 'mouth',
    c: '1f444'
  },
  {
    n: 'movie-camera',
    c: '1f3a5'
  },
  {
    n: 'mrs-claus',
    c: '1f936'
  },
  {
    n: 'mrs-claus-dark-skin-tone',
    c: '1f936-1f3ff'
  },
  {
    n: 'mrs-claus-light-skin-tone',
    c: '1f936-1f3fb'
  },
  {
    n: 'mrs-claus-medium-dark-skin-tone',
    c: '1f936-1f3fe'
  },
  {
    n: 'mrs-claus-medium-light-skin-tone',
    c: '1f936-1f3fc'
  },
  {
    n: 'mrs-claus-medium-skin-tone',
    c: '1f936-1f3fd'
  },
  {
    n: 'multiply',
    c: '2716'
  },
  {
    n: 'mushroom',
    c: '1f344'
  },
  {
    n: 'musical-keyboard',
    c: '1f3b9'
  },
  {
    n: 'musical-note',
    c: '1f3b5'
  },
  {
    n: 'musical-notes',
    c: '1f3b6'
  },
  {
    n: 'musical-score',
    c: '1f3bc'
  },
  {
    n: 'muted-speaker',
    c: '1f507'
  },
  {
    n: 'mx-claus',
    c: '1f9d1-200d-1f384'
  },
  {
    n: 'mx-claus-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f384'
  },
  {
    n: 'mx-claus-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f384'
  },
  {
    n: 'mx-claus-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f384'
  },
  {
    n: 'mx-claus-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f384'
  },
  {
    n: 'mx-claus-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f384'
  },
  {
    n: 'nail-polish',
    c: '1f485'
  },
  {
    n: 'nail-polish-dark-skin-tone',
    c: '1f485-1f3ff'
  },
  {
    n: 'nail-polish-light-skin-tone',
    c: '1f485-1f3fb'
  },
  {
    n: 'nail-polish-medium-dark-skin-tone',
    c: '1f485-1f3fe'
  },
  {
    n: 'nail-polish-medium-light-skin-tone',
    c: '1f485-1f3fc'
  },
  {
    n: 'nail-polish-medium-skin-tone',
    c: '1f485-1f3fd'
  },
  {
    n: 'name-badge',
    c: '1f4db'
  },
  {
    n: 'national-park',
    c: '1f3de'
  },
  {
    n: 'nauseated-face',
    c: '1f922'
  },
  {
    n: 'nazar-amulet',
    c: '1f9ff'
  },
  {
    n: 'necktie',
    c: '1f454'
  },
  {
    n: 'nerd-face',
    c: '1f913'
  },
  {
    n: 'nesting-dolls',
    c: '1fa86'
  },
  {
    n: 'neutral-face',
    c: '1f610'
  },
  {
    n: 'new-button',
    c: '1f195'
  },
  {
    n: 'new-moon',
    c: '1f311'
  },
  {
    n: 'new-moon-face',
    c: '1f31a'
  },
  {
    n: 'newspaper',
    c: '1f4f0'
  },
  {
    n: 'next-track-button',
    c: '23ed'
  },
  {
    n: 'ng-button',
    c: '1f196'
  },
  {
    n: 'night-with-stars',
    c: '1f303'
  },
  {
    n: 'nine-o-clock',
    c: '1f558'
  },
  {
    n: 'nine-thirty',
    c: '1f564'
  },
  {
    n: 'ninja',
    c: '1f977'
  },
  {
    n: 'ninja-dark-skin-tone',
    c: '1f977-1f3ff'
  },
  {
    n: 'ninja-light-skin-tone',
    c: '1f977-1f3fb'
  },
  {
    n: 'ninja-medium-dark-skin-tone',
    c: '1f977-1f3fe'
  },
  {
    n: 'ninja-medium-light-skin-tone',
    c: '1f977-1f3fc'
  },
  {
    n: 'ninja-medium-skin-tone',
    c: '1f977-1f3fd'
  },
  {
    n: 'no-bicycles',
    c: '1f6b3'
  },
  {
    n: 'no-entry',
    c: '26d4'
  },
  {
    n: 'no-littering',
    c: '1f6af'
  },
  {
    n: 'no-mobile-phones',
    c: '1f4f5'
  },
  {
    n: 'no-one-under-eighteen',
    c: '1f51e'
  },
  {
    n: 'no-pedestrians',
    c: '1f6b7'
  },
  {
    n: 'no-smoking',
    c: '1f6ad'
  },
  {
    n: 'non-potable-water',
    c: '1f6b1'
  },
  {
    n: 'nose',
    c: '1f443'
  },
  {
    n: 'nose-dark-skin-tone',
    c: '1f443-1f3ff'
  },
  {
    n: 'nose-light-skin-tone',
    c: '1f443-1f3fb'
  },
  {
    n: 'nose-medium-dark-skin-tone',
    c: '1f443-1f3fe'
  },
  {
    n: 'nose-medium-light-skin-tone',
    c: '1f443-1f3fc'
  },
  {
    n: 'nose-medium-skin-tone',
    c: '1f443-1f3fd'
  },
  {
    n: 'notebook',
    c: '1f4d3'
  },
  {
    n: 'notebook-with-decorative-cover',
    c: '1f4d4'
  },
  {
    n: 'nut-and-bolt',
    c: '1f529'
  },
  {
    n: 'o-button-blood-type',
    c: '1f17e'
  },
  {
    n: 'octopus',
    c: '1f419'
  },
  {
    n: 'oden',
    c: '1f362'
  },
  {
    n: 'office-building',
    c: '1f3e2'
  },
  {
    n: 'office-worker',
    c: '1f9d1-200d-1f4bc'
  },
  {
    n: 'office-worker-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f4bc'
  },
  {
    n: 'office-worker-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f4bc'
  },
  {
    n: 'office-worker-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f4bc'
  },
  {
    n: 'office-worker-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f4bc'
  },
  {
    n: 'office-worker-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f4bc'
  },
  {
    n: 'ogre',
    c: '1f479'
  },
  {
    n: 'oil-drum',
    c: '1f6e2'
  },
  {
    n: 'ok-button',
    c: '1f197'
  },
  {
    n: 'ok-hand',
    c: '1f44c'
  },
  {
    n: 'ok-hand-dark-skin-tone',
    c: '1f44c-1f3ff'
  },
  {
    n: 'ok-hand-light-skin-tone',
    c: '1f44c-1f3fb'
  },
  {
    n: 'ok-hand-medium-dark-skin-tone',
    c: '1f44c-1f3fe'
  },
  {
    n: 'ok-hand-medium-light-skin-tone',
    c: '1f44c-1f3fc'
  },
  {
    n: 'ok-hand-medium-skin-tone',
    c: '1f44c-1f3fd'
  },
  {
    n: 'old-key',
    c: '1f5dd'
  },
  {
    n: 'old-man',
    c: '1f474'
  },
  {
    n: 'old-man-dark-skin-tone',
    c: '1f474-1f3ff'
  },
  {
    n: 'old-man-light-skin-tone',
    c: '1f474-1f3fb'
  },
  {
    n: 'old-man-medium-dark-skin-tone',
    c: '1f474-1f3fe'
  },
  {
    n: 'old-man-medium-light-skin-tone',
    c: '1f474-1f3fc'
  },
  {
    n: 'old-man-medium-skin-tone',
    c: '1f474-1f3fd'
  },
  {
    n: 'old-woman',
    c: '1f475'
  },
  {
    n: 'old-woman-dark-skin-tone',
    c: '1f475-1f3ff'
  },
  {
    n: 'old-woman-light-skin-tone',
    c: '1f475-1f3fb'
  },
  {
    n: 'old-woman-medium-dark-skin-tone',
    c: '1f475-1f3fe'
  },
  {
    n: 'old-woman-medium-light-skin-tone',
    c: '1f475-1f3fc'
  },
  {
    n: 'old-woman-medium-skin-tone',
    c: '1f475-1f3fd'
  },
  {
    n: 'older-person',
    c: '1f9d3'
  },
  {
    n: 'older-person-dark-skin-tone',
    c: '1f9d3-1f3ff'
  },
  {
    n: 'older-person-light-skin-tone',
    c: '1f9d3-1f3fb'
  },
  {
    n: 'older-person-medium-dark-skin-tone',
    c: '1f9d3-1f3fe'
  },
  {
    n: 'older-person-medium-light-skin-tone',
    c: '1f9d3-1f3fc'
  },
  {
    n: 'older-person-medium-skin-tone',
    c: '1f9d3-1f3fd'
  },
  {
    n: 'olive',
    c: '1fad2'
  },
  {
    n: 'om',
    c: '1f549'
  },
  {
    n: 'on-arrow',
    c: '1f51b'
  },
  {
    n: 'oncoming-automobile',
    c: '1f698'
  },
  {
    n: 'oncoming-bus',
    c: '1f68d'
  },
  {
    n: 'oncoming-fist',
    c: '1f44a'
  },
  {
    n: 'oncoming-fist-dark-skin-tone',
    c: '1f44a-1f3ff'
  },
  {
    n: 'oncoming-fist-light-skin-tone',
    c: '1f44a-1f3fb'
  },
  {
    n: 'oncoming-fist-medium-dark-skin-tone',
    c: '1f44a-1f3fe'
  },
  {
    n: 'oncoming-fist-medium-light-skin-tone',
    c: '1f44a-1f3fc'
  },
  {
    n: 'oncoming-fist-medium-skin-tone',
    c: '1f44a-1f3fd'
  },
  {
    n: 'oncoming-police-car',
    c: '1f694'
  },
  {
    n: 'oncoming-taxi',
    c: '1f696'
  },
  {
    n: 'one-o-clock',
    c: '1f550'
  },
  {
    n: 'one-piece-swimsuit',
    c: '1fa71'
  },
  {
    n: 'one-thirty',
    c: '1f55c'
  },
  {
    n: 'onion',
    c: '1f9c5'
  },
  {
    n: 'open-book',
    c: '1f4d6'
  },
  {
    n: 'open-file-folder',
    c: '1f4c2'
  },
  {
    n: 'open-hands',
    c: '1f450'
  },
  {
    n: 'open-hands-dark-skin-tone',
    c: '1f450-1f3ff'
  },
  {
    n: 'open-hands-light-skin-tone',
    c: '1f450-1f3fb'
  },
  {
    n: 'open-hands-medium-dark-skin-tone',
    c: '1f450-1f3fe'
  },
  {
    n: 'open-hands-medium-light-skin-tone',
    c: '1f450-1f3fc'
  },
  {
    n: 'open-hands-medium-skin-tone',
    c: '1f450-1f3fd'
  },
  {
    n: 'open-mailbox-with-lowered-flag',
    c: '1f4ed'
  },
  {
    n: 'open-mailbox-with-raised-flag',
    c: '1f4ec'
  },
  {
    n: 'ophiuchus',
    c: '26ce'
  },
  {
    n: 'optical-disk',
    c: '1f4bf'
  },
  {
    n: 'orange-book',
    c: '1f4d9'
  },
  {
    n: 'orange-circle',
    c: '1f7e0'
  },
  {
    n: 'orange-heart',
    c: '1f9e1'
  },
  {
    n: 'orange-square',
    c: '1f7e7'
  },
  {
    n: 'orangutan',
    c: '1f9a7'
  },
  {
    n: 'orthodox-cross',
    c: '2626'
  },
  {
    n: 'otter',
    c: '1f9a6'
  },
  {
    n: 'outbox-tray',
    c: '1f4e4'
  },
  {
    n: 'owl',
    c: '1f989'
  },
  {
    n: 'ox',
    c: '1f402'
  },
  {
    n: 'oyster',
    c: '1f9aa'
  },
  {
    n: 'p-button',
    c: '1f17f'
  },
  {
    n: 'package',
    c: '1f4e6'
  },
  {
    n: 'page-facing-up',
    c: '1f4c4'
  },
  {
    n: 'page-with-curl',
    c: '1f4c3'
  },
  {
    n: 'pager',
    c: '1f4df'
  },
  {
    n: 'paintbrush',
    c: '1f58c'
  },
  {
    n: 'palm-tree',
    c: '1f334'
  },
  {
    n: 'palms-up-together',
    c: '1f932'
  },
  {
    n: 'palms-up-together-dark-skin-tone',
    c: '1f932-1f3ff'
  },
  {
    n: 'palms-up-together-light-skin-tone',
    c: '1f932-1f3fb'
  },
  {
    n: 'palms-up-together-medium-dark-skin-tone',
    c: '1f932-1f3fe'
  },
  {
    n: 'palms-up-together-medium-light-skin-tone',
    c: '1f932-1f3fc'
  },
  {
    n: 'palms-up-together-medium-skin-tone',
    c: '1f932-1f3fd'
  },
  {
    n: 'pancakes',
    c: '1f95e'
  },
  {
    n: 'panda',
    c: '1f43c'
  },
  {
    n: 'paperclip',
    c: '1f4ce'
  },
  {
    n: 'parachute',
    c: '1fa82'
  },
  {
    n: 'parrot',
    c: '1f99c'
  },
  {
    n: 'part-alternation-mark',
    c: '303d'
  },
  {
    n: 'party-popper',
    c: '1f389'
  },
  {
    n: 'partying-face',
    c: '1f973'
  },
  {
    n: 'passenger-ship',
    c: '1f6f3'
  },
  {
    n: 'passport-control',
    c: '1f6c2'
  },
  {
    n: 'pause-button',
    c: '23f8'
  },
  {
    n: 'paw-prints',
    c: '1f43e'
  },
  {
    n: 'peace-symbol',
    c: '262e'
  },
  {
    n: 'peach',
    c: '1f351'
  },
  {
    n: 'peacock',
    c: '1f99a'
  },
  {
    n: 'peanuts',
    c: '1f95c'
  },
  {
    n: 'pear',
    c: '1f350'
  },
  {
    n: 'pen',
    c: '1f58a'
  },
  {
    n: 'pencil',
    c: '270f'
  },
  {
    n: 'penguin',
    c: '1f427'
  },
  {
    n: 'pensive-face',
    c: '1f614'
  },
  {
    n: 'people-holding-hands',
    c: '1f9d1-200d-1f91d-200d-1f9d1'
  },
  {
    n: 'people-holding-hands-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    n: 'people-holding-hands-dark-skin-tone-light-skin-tone',
    c: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    n: 'people-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    n: 'people-holding-hands-dark-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    n: 'people-holding-hands-dark-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3ff-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    n: 'people-holding-hands-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    n: 'people-holding-hands-light-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    n: 'people-holding-hands-light-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    n: 'people-holding-hands-light-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    n: 'people-holding-hands-light-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fb-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    n: 'people-holding-hands-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    n: 'people-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    n: 'people-holding-hands-medium-dark-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    n: 'people-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    n: 'people-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fe-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    n: 'people-holding-hands-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    n: 'people-holding-hands-medium-light-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    n: 'people-holding-hands-medium-light-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    n: 'people-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    n: 'people-holding-hands-medium-light-skin-tone-medium-skin-tone',
    c: '1f9d1-1f3fc-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    n: 'people-holding-hands-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fd'
  },
  {
    n: 'people-holding-hands-medium-skin-tone-dark-skin-tone',
    c: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3ff'
  },
  {
    n: 'people-holding-hands-medium-skin-tone-light-skin-tone',
    c: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fb'
  },
  {
    n: 'people-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    c: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fe'
  },
  {
    n: 'people-holding-hands-medium-skin-tone-medium-light-skin-tone',
    c: '1f9d1-1f3fd-200d-1f91d-200d-1f9d1-1f3fc'
  },
  {
    n: 'people-hugging',
    c: '1fac2'
  },
  {
    n: 'people-with-bunny-ears',
    c: '1f46f'
  },
  {
    n: 'people-wrestling',
    c: '1f93c'
  },
  {
    n: 'performing-arts',
    c: '1f3ad'
  },
  {
    n: 'persevering-face',
    c: '1f623'
  },
  {
    n: 'person',
    c: '1f9d1'
  },
  {
    n: 'person-bald',
    c: '1f9d1-200d-1f9b2'
  },
  {
    n: 'person-beard',
    c: '1f9d4'
  },
  {
    n: 'person-biking',
    c: '1f6b4'
  },
  {
    n: 'person-biking-dark-skin-tone',
    c: '1f6b4-1f3ff'
  },
  {
    n: 'person-biking-light-skin-tone',
    c: '1f6b4-1f3fb'
  },
  {
    n: 'person-biking-medium-dark-skin-tone',
    c: '1f6b4-1f3fe'
  },
  {
    n: 'person-biking-medium-light-skin-tone',
    c: '1f6b4-1f3fc'
  },
  {
    n: 'person-biking-medium-skin-tone',
    c: '1f6b4-1f3fd'
  },
  {
    n: 'person-blond-hair',
    c: '1f471'
  },
  {
    n: 'person-bouncing-ball',
    c: '26f9'
  },
  {
    n: 'person-bouncing-ball-dark-skin-tone',
    c: '26f9-1f3ff'
  },
  {
    n: 'person-bouncing-ball-light-skin-tone',
    c: '26f9-1f3fb'
  },
  {
    n: 'person-bouncing-ball-medium-dark-skin-tone',
    c: '26f9-1f3fe'
  },
  {
    n: 'person-bouncing-ball-medium-light-skin-tone',
    c: '26f9-1f3fc'
  },
  {
    n: 'person-bouncing-ball-medium-skin-tone',
    c: '26f9-1f3fd'
  },
  {
    n: 'person-bowing',
    c: '1f647'
  },
  {
    n: 'person-bowing-dark-skin-tone',
    c: '1f647-1f3ff'
  },
  {
    n: 'person-bowing-light-skin-tone',
    c: '1f647-1f3fb'
  },
  {
    n: 'person-bowing-medium-dark-skin-tone',
    c: '1f647-1f3fe'
  },
  {
    n: 'person-bowing-medium-light-skin-tone',
    c: '1f647-1f3fc'
  },
  {
    n: 'person-bowing-medium-skin-tone',
    c: '1f647-1f3fd'
  },
  {
    n: 'person-cartwheeling',
    c: '1f938'
  },
  {
    n: 'person-cartwheeling-dark-skin-tone',
    c: '1f938-1f3ff'
  },
  {
    n: 'person-cartwheeling-light-skin-tone',
    c: '1f938-1f3fb'
  },
  {
    n: 'person-cartwheeling-medium-dark-skin-tone',
    c: '1f938-1f3fe'
  },
  {
    n: 'person-cartwheeling-medium-light-skin-tone',
    c: '1f938-1f3fc'
  },
  {
    n: 'person-cartwheeling-medium-skin-tone',
    c: '1f938-1f3fd'
  },
  {
    n: 'person-climbing',
    c: '1f9d7'
  },
  {
    n: 'person-climbing-dark-skin-tone',
    c: '1f9d7-1f3ff'
  },
  {
    n: 'person-climbing-light-skin-tone',
    c: '1f9d7-1f3fb'
  },
  {
    n: 'person-climbing-medium-dark-skin-tone',
    c: '1f9d7-1f3fe'
  },
  {
    n: 'person-climbing-medium-light-skin-tone',
    c: '1f9d7-1f3fc'
  },
  {
    n: 'person-climbing-medium-skin-tone',
    c: '1f9d7-1f3fd'
  },
  {
    n: 'person-curly-hair',
    c: '1f9d1-200d-1f9b1'
  },
  {
    n: 'person-dark-skin-tone',
    c: '1f9d1-1f3ff'
  },
  {
    n: 'person-dark-skin-tone-bald',
    c: '1f9d1-1f3ff-200d-1f9b2'
  },
  {
    n: 'person-dark-skin-tone-beard',
    c: '1f9d4-1f3ff'
  },
  {
    n: 'person-dark-skin-tone-blond-hair',
    c: '1f471-1f3ff'
  },
  {
    n: 'person-dark-skin-tone-curly-hair',
    c: '1f9d1-1f3ff-200d-1f9b1'
  },
  {
    n: 'person-dark-skin-tone-red-hair',
    c: '1f9d1-1f3ff-200d-1f9b0'
  },
  {
    n: 'person-dark-skin-tone-white-hair',
    c: '1f9d1-1f3ff-200d-1f9b3'
  },
  {
    n: 'person-facepalming',
    c: '1f926'
  },
  {
    n: 'person-facepalming-dark-skin-tone',
    c: '1f926-1f3ff'
  },
  {
    n: 'person-facepalming-light-skin-tone',
    c: '1f926-1f3fb'
  },
  {
    n: 'person-facepalming-medium-dark-skin-tone',
    c: '1f926-1f3fe'
  },
  {
    n: 'person-facepalming-medium-light-skin-tone',
    c: '1f926-1f3fc'
  },
  {
    n: 'person-facepalming-medium-skin-tone',
    c: '1f926-1f3fd'
  },
  {
    n: 'person-feeding-baby',
    c: '1f9d1-200d-1f37c'
  },
  {
    n: 'person-feeding-baby-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f37c'
  },
  {
    n: 'person-feeding-baby-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f37c'
  },
  {
    n: 'person-feeding-baby-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f37c'
  },
  {
    n: 'person-feeding-baby-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f37c'
  },
  {
    n: 'person-feeding-baby-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f37c'
  },
  {
    n: 'person-fencing',
    c: '1f93a'
  },
  {
    n: 'person-frowning',
    c: '1f64d'
  },
  {
    n: 'person-frowning-dark-skin-tone',
    c: '1f64d-1f3ff'
  },
  {
    n: 'person-frowning-light-skin-tone',
    c: '1f64d-1f3fb'
  },
  {
    n: 'person-frowning-medium-dark-skin-tone',
    c: '1f64d-1f3fe'
  },
  {
    n: 'person-frowning-medium-light-skin-tone',
    c: '1f64d-1f3fc'
  },
  {
    n: 'person-frowning-medium-skin-tone',
    c: '1f64d-1f3fd'
  },
  {
    n: 'person-gesturing-no',
    c: '1f645'
  },
  {
    n: 'person-gesturing-no-dark-skin-tone',
    c: '1f645-1f3ff'
  },
  {
    n: 'person-gesturing-no-light-skin-tone',
    c: '1f645-1f3fb'
  },
  {
    n: 'person-gesturing-no-medium-dark-skin-tone',
    c: '1f645-1f3fe'
  },
  {
    n: 'person-gesturing-no-medium-light-skin-tone',
    c: '1f645-1f3fc'
  },
  {
    n: 'person-gesturing-no-medium-skin-tone',
    c: '1f645-1f3fd'
  },
  {
    n: 'person-gesturing-ok',
    c: '1f646'
  },
  {
    n: 'person-gesturing-ok-dark-skin-tone',
    c: '1f646-1f3ff'
  },
  {
    n: 'person-gesturing-ok-light-skin-tone',
    c: '1f646-1f3fb'
  },
  {
    n: 'person-gesturing-ok-medium-dark-skin-tone',
    c: '1f646-1f3fe'
  },
  {
    n: 'person-gesturing-ok-medium-light-skin-tone',
    c: '1f646-1f3fc'
  },
  {
    n: 'person-gesturing-ok-medium-skin-tone',
    c: '1f646-1f3fd'
  },
  {
    n: 'person-getting-haircut',
    c: '1f487'
  },
  {
    n: 'person-getting-haircut-dark-skin-tone',
    c: '1f487-1f3ff'
  },
  {
    n: 'person-getting-haircut-light-skin-tone',
    c: '1f487-1f3fb'
  },
  {
    n: 'person-getting-haircut-medium-dark-skin-tone',
    c: '1f487-1f3fe'
  },
  {
    n: 'person-getting-haircut-medium-light-skin-tone',
    c: '1f487-1f3fc'
  },
  {
    n: 'person-getting-haircut-medium-skin-tone',
    c: '1f487-1f3fd'
  },
  {
    n: 'person-getting-massage',
    c: '1f486'
  },
  {
    n: 'person-getting-massage-dark-skin-tone',
    c: '1f486-1f3ff'
  },
  {
    n: 'person-getting-massage-light-skin-tone',
    c: '1f486-1f3fb'
  },
  {
    n: 'person-getting-massage-medium-dark-skin-tone',
    c: '1f486-1f3fe'
  },
  {
    n: 'person-getting-massage-medium-light-skin-tone',
    c: '1f486-1f3fc'
  },
  {
    n: 'person-getting-massage-medium-skin-tone',
    c: '1f486-1f3fd'
  },
  {
    n: 'person-golfing',
    c: '1f3cc'
  },
  {
    n: 'person-golfing-dark-skin-tone',
    c: '1f3cc-1f3ff'
  },
  {
    n: 'person-golfing-light-skin-tone',
    c: '1f3cc-1f3fb'
  },
  {
    n: 'person-golfing-medium-dark-skin-tone',
    c: '1f3cc-1f3fe'
  },
  {
    n: 'person-golfing-medium-light-skin-tone',
    c: '1f3cc-1f3fc'
  },
  {
    n: 'person-golfing-medium-skin-tone',
    c: '1f3cc-1f3fd'
  },
  {
    n: 'person-in-bed',
    c: '1f6cc'
  },
  {
    n: 'person-in-bed-dark-skin-tone',
    c: '1f6cc-1f3ff'
  },
  {
    n: 'person-in-bed-light-skin-tone',
    c: '1f6cc-1f3fb'
  },
  {
    n: 'person-in-bed-medium-dark-skin-tone',
    c: '1f6cc-1f3fe'
  },
  {
    n: 'person-in-bed-medium-light-skin-tone',
    c: '1f6cc-1f3fc'
  },
  {
    n: 'person-in-bed-medium-skin-tone',
    c: '1f6cc-1f3fd'
  },
  {
    n: 'person-in-lotus-position',
    c: '1f9d8'
  },
  {
    n: 'person-in-lotus-position-dark-skin-tone',
    c: '1f9d8-1f3ff'
  },
  {
    n: 'person-in-lotus-position-light-skin-tone',
    c: '1f9d8-1f3fb'
  },
  {
    n: 'person-in-lotus-position-medium-dark-skin-tone',
    c: '1f9d8-1f3fe'
  },
  {
    n: 'person-in-lotus-position-medium-light-skin-tone',
    c: '1f9d8-1f3fc'
  },
  {
    n: 'person-in-lotus-position-medium-skin-tone',
    c: '1f9d8-1f3fd'
  },
  {
    n: 'person-in-manual-wheelchair',
    c: '1f9d1-200d-1f9bd'
  },
  {
    n: 'person-in-manual-wheelchair-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f9bd'
  },
  {
    n: 'person-in-manual-wheelchair-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f9bd'
  },
  {
    n: 'person-in-manual-wheelchair-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f9bd'
  },
  {
    n: 'person-in-manual-wheelchair-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f9bd'
  },
  {
    n: 'person-in-manual-wheelchair-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f9bd'
  },
  {
    n: 'person-in-motorized-wheelchair',
    c: '1f9d1-200d-1f9bc'
  },
  {
    n: 'person-in-motorized-wheelchair-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f9bc'
  },
  {
    n: 'person-in-motorized-wheelchair-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f9bc'
  },
  {
    n: 'person-in-motorized-wheelchair-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f9bc'
  },
  {
    n: 'person-in-motorized-wheelchair-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f9bc'
  },
  {
    n: 'person-in-motorized-wheelchair-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f9bc'
  },
  {
    n: 'person-in-steamy-room',
    c: '1f9d6'
  },
  {
    n: 'person-in-steamy-room-dark-skin-tone',
    c: '1f9d6-1f3ff'
  },
  {
    n: 'person-in-steamy-room-light-skin-tone',
    c: '1f9d6-1f3fb'
  },
  {
    n: 'person-in-steamy-room-medium-dark-skin-tone',
    c: '1f9d6-1f3fe'
  },
  {
    n: 'person-in-steamy-room-medium-light-skin-tone',
    c: '1f9d6-1f3fc'
  },
  {
    n: 'person-in-steamy-room-medium-skin-tone',
    c: '1f9d6-1f3fd'
  },
  {
    n: 'person-in-suit-levitating',
    c: '1f574'
  },
  {
    n: 'person-in-suit-levitating-dark-skin-tone',
    c: '1f574-1f3ff'
  },
  {
    n: 'person-in-suit-levitating-light-skin-tone',
    c: '1f574-1f3fb'
  },
  {
    n: 'person-in-suit-levitating-medium-dark-skin-tone',
    c: '1f574-1f3fe'
  },
  {
    n: 'person-in-suit-levitating-medium-light-skin-tone',
    c: '1f574-1f3fc'
  },
  {
    n: 'person-in-suit-levitating-medium-skin-tone',
    c: '1f574-1f3fd'
  },
  {
    n: 'person-in-tuxedo',
    c: '1f935'
  },
  {
    n: 'person-in-tuxedo-dark-skin-tone',
    c: '1f935-1f3ff'
  },
  {
    n: 'person-in-tuxedo-light-skin-tone',
    c: '1f935-1f3fb'
  },
  {
    n: 'person-in-tuxedo-medium-dark-skin-tone',
    c: '1f935-1f3fe'
  },
  {
    n: 'person-in-tuxedo-medium-light-skin-tone',
    c: '1f935-1f3fc'
  },
  {
    n: 'person-in-tuxedo-medium-skin-tone',
    c: '1f935-1f3fd'
  },
  {
    n: 'person-juggling',
    c: '1f939'
  },
  {
    n: 'person-juggling-dark-skin-tone',
    c: '1f939-1f3ff'
  },
  {
    n: 'person-juggling-light-skin-tone',
    c: '1f939-1f3fb'
  },
  {
    n: 'person-juggling-medium-dark-skin-tone',
    c: '1f939-1f3fe'
  },
  {
    n: 'person-juggling-medium-light-skin-tone',
    c: '1f939-1f3fc'
  },
  {
    n: 'person-juggling-medium-skin-tone',
    c: '1f939-1f3fd'
  },
  {
    n: 'person-kneeling',
    c: '1f9ce'
  },
  {
    n: 'person-kneeling-dark-skin-tone',
    c: '1f9ce-1f3ff'
  },
  {
    n: 'person-kneeling-light-skin-tone',
    c: '1f9ce-1f3fb'
  },
  {
    n: 'person-kneeling-medium-dark-skin-tone',
    c: '1f9ce-1f3fe'
  },
  {
    n: 'person-kneeling-medium-light-skin-tone',
    c: '1f9ce-1f3fc'
  },
  {
    n: 'person-kneeling-medium-skin-tone',
    c: '1f9ce-1f3fd'
  },
  {
    n: 'person-lifting-weights',
    c: '1f3cb'
  },
  {
    n: 'person-lifting-weights-dark-skin-tone',
    c: '1f3cb-1f3ff'
  },
  {
    n: 'person-lifting-weights-light-skin-tone',
    c: '1f3cb-1f3fb'
  },
  {
    n: 'person-lifting-weights-medium-dark-skin-tone',
    c: '1f3cb-1f3fe'
  },
  {
    n: 'person-lifting-weights-medium-light-skin-tone',
    c: '1f3cb-1f3fc'
  },
  {
    n: 'person-lifting-weights-medium-skin-tone',
    c: '1f3cb-1f3fd'
  },
  {
    n: 'person-light-skin-tone',
    c: '1f9d1-1f3fb'
  },
  {
    n: 'person-light-skin-tone-bald',
    c: '1f9d1-1f3fb-200d-1f9b2'
  },
  {
    n: 'person-light-skin-tone-beard',
    c: '1f9d4-1f3fb'
  },
  {
    n: 'person-light-skin-tone-blond-hair',
    c: '1f471-1f3fb'
  },
  {
    n: 'person-light-skin-tone-curly-hair',
    c: '1f9d1-1f3fb-200d-1f9b1'
  },
  {
    n: 'person-light-skin-tone-red-hair',
    c: '1f9d1-1f3fb-200d-1f9b0'
  },
  {
    n: 'person-light-skin-tone-white-hair',
    c: '1f9d1-1f3fb-200d-1f9b3'
  },
  {
    n: 'person-medium-dark-skin-tone',
    c: '1f9d1-1f3fe'
  },
  {
    n: 'person-medium-dark-skin-tone-bald',
    c: '1f9d1-1f3fe-200d-1f9b2'
  },
  {
    n: 'person-medium-dark-skin-tone-beard',
    c: '1f9d4-1f3fe'
  },
  {
    n: 'person-medium-dark-skin-tone-blond-hair',
    c: '1f471-1f3fe'
  },
  {
    n: 'person-medium-dark-skin-tone-curly-hair',
    c: '1f9d1-1f3fe-200d-1f9b1'
  },
  {
    n: 'person-medium-dark-skin-tone-red-hair',
    c: '1f9d1-1f3fe-200d-1f9b0'
  },
  {
    n: 'person-medium-dark-skin-tone-white-hair',
    c: '1f9d1-1f3fe-200d-1f9b3'
  },
  {
    n: 'person-medium-light-skin-tone',
    c: '1f9d1-1f3fc'
  },
  {
    n: 'person-medium-light-skin-tone-bald',
    c: '1f9d1-1f3fc-200d-1f9b2'
  },
  {
    n: 'person-medium-light-skin-tone-beard',
    c: '1f9d4-1f3fc'
  },
  {
    n: 'person-medium-light-skin-tone-blond-hair',
    c: '1f471-1f3fc'
  },
  {
    n: 'person-medium-light-skin-tone-curly-hair',
    c: '1f9d1-1f3fc-200d-1f9b1'
  },
  {
    n: 'person-medium-light-skin-tone-red-hair',
    c: '1f9d1-1f3fc-200d-1f9b0'
  },
  {
    n: 'person-medium-light-skin-tone-white-hair',
    c: '1f9d1-1f3fc-200d-1f9b3'
  },
  {
    n: 'person-medium-skin-tone',
    c: '1f9d1-1f3fd'
  },
  {
    n: 'person-medium-skin-tone-bald',
    c: '1f9d1-1f3fd-200d-1f9b2'
  },
  {
    n: 'person-medium-skin-tone-beard',
    c: '1f9d4-1f3fd'
  },
  {
    n: 'person-medium-skin-tone-blond-hair',
    c: '1f471-1f3fd'
  },
  {
    n: 'person-medium-skin-tone-curly-hair',
    c: '1f9d1-1f3fd-200d-1f9b1'
  },
  {
    n: 'person-medium-skin-tone-red-hair',
    c: '1f9d1-1f3fd-200d-1f9b0'
  },
  {
    n: 'person-medium-skin-tone-white-hair',
    c: '1f9d1-1f3fd-200d-1f9b3'
  },
  {
    n: 'person-mountain-biking',
    c: '1f6b5'
  },
  {
    n: 'person-mountain-biking-dark-skin-tone',
    c: '1f6b5-1f3ff'
  },
  {
    n: 'person-mountain-biking-light-skin-tone',
    c: '1f6b5-1f3fb'
  },
  {
    n: 'person-mountain-biking-medium-dark-skin-tone',
    c: '1f6b5-1f3fe'
  },
  {
    n: 'person-mountain-biking-medium-light-skin-tone',
    c: '1f6b5-1f3fc'
  },
  {
    n: 'person-mountain-biking-medium-skin-tone',
    c: '1f6b5-1f3fd'
  },
  {
    n: 'person-playing-handball',
    c: '1f93e'
  },
  {
    n: 'person-playing-handball-dark-skin-tone',
    c: '1f93e-1f3ff'
  },
  {
    n: 'person-playing-handball-light-skin-tone',
    c: '1f93e-1f3fb'
  },
  {
    n: 'person-playing-handball-medium-dark-skin-tone',
    c: '1f93e-1f3fe'
  },
  {
    n: 'person-playing-handball-medium-light-skin-tone',
    c: '1f93e-1f3fc'
  },
  {
    n: 'person-playing-handball-medium-skin-tone',
    c: '1f93e-1f3fd'
  },
  {
    n: 'person-playing-water-polo',
    c: '1f93d'
  },
  {
    n: 'person-playing-water-polo-dark-skin-tone',
    c: '1f93d-1f3ff'
  },
  {
    n: 'person-playing-water-polo-light-skin-tone',
    c: '1f93d-1f3fb'
  },
  {
    n: 'person-playing-water-polo-medium-dark-skin-tone',
    c: '1f93d-1f3fe'
  },
  {
    n: 'person-playing-water-polo-medium-light-skin-tone',
    c: '1f93d-1f3fc'
  },
  {
    n: 'person-playing-water-polo-medium-skin-tone',
    c: '1f93d-1f3fd'
  },
  {
    n: 'person-pouting',
    c: '1f64e'
  },
  {
    n: 'person-pouting-dark-skin-tone',
    c: '1f64e-1f3ff'
  },
  {
    n: 'person-pouting-light-skin-tone',
    c: '1f64e-1f3fb'
  },
  {
    n: 'person-pouting-medium-dark-skin-tone',
    c: '1f64e-1f3fe'
  },
  {
    n: 'person-pouting-medium-light-skin-tone',
    c: '1f64e-1f3fc'
  },
  {
    n: 'person-pouting-medium-skin-tone',
    c: '1f64e-1f3fd'
  },
  {
    n: 'person-raising-hand',
    c: '1f64b'
  },
  {
    n: 'person-raising-hand-dark-skin-tone',
    c: '1f64b-1f3ff'
  },
  {
    n: 'person-raising-hand-light-skin-tone',
    c: '1f64b-1f3fb'
  },
  {
    n: 'person-raising-hand-medium-dark-skin-tone',
    c: '1f64b-1f3fe'
  },
  {
    n: 'person-raising-hand-medium-light-skin-tone',
    c: '1f64b-1f3fc'
  },
  {
    n: 'person-raising-hand-medium-skin-tone',
    c: '1f64b-1f3fd'
  },
  {
    n: 'person-red-hair',
    c: '1f9d1-200d-1f9b0'
  },
  {
    n: 'person-rowing-boat',
    c: '1f6a3'
  },
  {
    n: 'person-rowing-boat-dark-skin-tone',
    c: '1f6a3-1f3ff'
  },
  {
    n: 'person-rowing-boat-light-skin-tone',
    c: '1f6a3-1f3fb'
  },
  {
    n: 'person-rowing-boat-medium-dark-skin-tone',
    c: '1f6a3-1f3fe'
  },
  {
    n: 'person-rowing-boat-medium-light-skin-tone',
    c: '1f6a3-1f3fc'
  },
  {
    n: 'person-rowing-boat-medium-skin-tone',
    c: '1f6a3-1f3fd'
  },
  {
    n: 'person-running',
    c: '1f3c3'
  },
  {
    n: 'person-running-dark-skin-tone',
    c: '1f3c3-1f3ff'
  },
  {
    n: 'person-running-light-skin-tone',
    c: '1f3c3-1f3fb'
  },
  {
    n: 'person-running-medium-dark-skin-tone',
    c: '1f3c3-1f3fe'
  },
  {
    n: 'person-running-medium-light-skin-tone',
    c: '1f3c3-1f3fc'
  },
  {
    n: 'person-running-medium-skin-tone',
    c: '1f3c3-1f3fd'
  },
  {
    n: 'person-shrugging',
    c: '1f937'
  },
  {
    n: 'person-shrugging-dark-skin-tone',
    c: '1f937-1f3ff'
  },
  {
    n: 'person-shrugging-light-skin-tone',
    c: '1f937-1f3fb'
  },
  {
    n: 'person-shrugging-medium-dark-skin-tone',
    c: '1f937-1f3fe'
  },
  {
    n: 'person-shrugging-medium-light-skin-tone',
    c: '1f937-1f3fc'
  },
  {
    n: 'person-shrugging-medium-skin-tone',
    c: '1f937-1f3fd'
  },
  {
    n: 'person-standing',
    c: '1f9cd'
  },
  {
    n: 'person-standing-dark-skin-tone',
    c: '1f9cd-1f3ff'
  },
  {
    n: 'person-standing-light-skin-tone',
    c: '1f9cd-1f3fb'
  },
  {
    n: 'person-standing-medium-dark-skin-tone',
    c: '1f9cd-1f3fe'
  },
  {
    n: 'person-standing-medium-light-skin-tone',
    c: '1f9cd-1f3fc'
  },
  {
    n: 'person-standing-medium-skin-tone',
    c: '1f9cd-1f3fd'
  },
  {
    n: 'person-surfing',
    c: '1f3c4'
  },
  {
    n: 'person-surfing-dark-skin-tone',
    c: '1f3c4-1f3ff'
  },
  {
    n: 'person-surfing-light-skin-tone',
    c: '1f3c4-1f3fb'
  },
  {
    n: 'person-surfing-medium-dark-skin-tone',
    c: '1f3c4-1f3fe'
  },
  {
    n: 'person-surfing-medium-light-skin-tone',
    c: '1f3c4-1f3fc'
  },
  {
    n: 'person-surfing-medium-skin-tone',
    c: '1f3c4-1f3fd'
  },
  {
    n: 'person-swimming',
    c: '1f3ca'
  },
  {
    n: 'person-swimming-dark-skin-tone',
    c: '1f3ca-1f3ff'
  },
  {
    n: 'person-swimming-light-skin-tone',
    c: '1f3ca-1f3fb'
  },
  {
    n: 'person-swimming-medium-dark-skin-tone',
    c: '1f3ca-1f3fe'
  },
  {
    n: 'person-swimming-medium-light-skin-tone',
    c: '1f3ca-1f3fc'
  },
  {
    n: 'person-swimming-medium-skin-tone',
    c: '1f3ca-1f3fd'
  },
  {
    n: 'person-taking-bath',
    c: '1f6c0'
  },
  {
    n: 'person-taking-bath-dark-skin-tone',
    c: '1f6c0-1f3ff'
  },
  {
    n: 'person-taking-bath-light-skin-tone',
    c: '1f6c0-1f3fb'
  },
  {
    n: 'person-taking-bath-medium-dark-skin-tone',
    c: '1f6c0-1f3fe'
  },
  {
    n: 'person-taking-bath-medium-light-skin-tone',
    c: '1f6c0-1f3fc'
  },
  {
    n: 'person-taking-bath-medium-skin-tone',
    c: '1f6c0-1f3fd'
  },
  {
    n: 'person-tipping-hand',
    c: '1f481'
  },
  {
    n: 'person-tipping-hand-dark-skin-tone',
    c: '1f481-1f3ff'
  },
  {
    n: 'person-tipping-hand-light-skin-tone',
    c: '1f481-1f3fb'
  },
  {
    n: 'person-tipping-hand-medium-dark-skin-tone',
    c: '1f481-1f3fe'
  },
  {
    n: 'person-tipping-hand-medium-light-skin-tone',
    c: '1f481-1f3fc'
  },
  {
    n: 'person-tipping-hand-medium-skin-tone',
    c: '1f481-1f3fd'
  },
  {
    n: 'person-walking',
    c: '1f6b6'
  },
  {
    n: 'person-walking-dark-skin-tone',
    c: '1f6b6-1f3ff'
  },
  {
    n: 'person-walking-light-skin-tone',
    c: '1f6b6-1f3fb'
  },
  {
    n: 'person-walking-medium-dark-skin-tone',
    c: '1f6b6-1f3fe'
  },
  {
    n: 'person-walking-medium-light-skin-tone',
    c: '1f6b6-1f3fc'
  },
  {
    n: 'person-walking-medium-skin-tone',
    c: '1f6b6-1f3fd'
  },
  {
    n: 'person-wearing-turban',
    c: '1f473'
  },
  {
    n: 'person-wearing-turban-dark-skin-tone',
    c: '1f473-1f3ff'
  },
  {
    n: 'person-wearing-turban-light-skin-tone',
    c: '1f473-1f3fb'
  },
  {
    n: 'person-wearing-turban-medium-dark-skin-tone',
    c: '1f473-1f3fe'
  },
  {
    n: 'person-wearing-turban-medium-light-skin-tone',
    c: '1f473-1f3fc'
  },
  {
    n: 'person-wearing-turban-medium-skin-tone',
    c: '1f473-1f3fd'
  },
  {
    n: 'person-white-hair',
    c: '1f9d1-200d-1f9b3'
  },
  {
    n: 'person-with-skullcap',
    c: '1f472'
  },
  {
    n: 'person-with-skullcap-dark-skin-tone',
    c: '1f472-1f3ff'
  },
  {
    n: 'person-with-skullcap-light-skin-tone',
    c: '1f472-1f3fb'
  },
  {
    n: 'person-with-skullcap-medium-dark-skin-tone',
    c: '1f472-1f3fe'
  },
  {
    n: 'person-with-skullcap-medium-light-skin-tone',
    c: '1f472-1f3fc'
  },
  {
    n: 'person-with-skullcap-medium-skin-tone',
    c: '1f472-1f3fd'
  },
  {
    n: 'person-with-veil',
    c: '1f470'
  },
  {
    n: 'person-with-veil-dark-skin-tone',
    c: '1f470-1f3ff'
  },
  {
    n: 'person-with-veil-light-skin-tone',
    c: '1f470-1f3fb'
  },
  {
    n: 'person-with-veil-medium-dark-skin-tone',
    c: '1f470-1f3fe'
  },
  {
    n: 'person-with-veil-medium-light-skin-tone',
    c: '1f470-1f3fc'
  },
  {
    n: 'person-with-veil-medium-skin-tone',
    c: '1f470-1f3fd'
  },
  {
    n: 'person-with-white-cane',
    c: '1f9d1-200d-1f9af'
  },
  {
    n: 'person-with-white-cane-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f9af'
  },
  {
    n: 'person-with-white-cane-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f9af'
  },
  {
    n: 'person-with-white-cane-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f9af'
  },
  {
    n: 'person-with-white-cane-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f9af'
  },
  {
    n: 'person-with-white-cane-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f9af'
  },
  {
    n: 'petri-dish',
    c: '1f9eb'
  },
  {
    n: 'pi-ata',
    c: '1fa85'
  },
  {
    n: 'pick',
    c: '26cf'
  },
  {
    n: 'pickup-truck',
    c: '1f6fb'
  },
  {
    n: 'pie',
    c: '1f967'
  },
  {
    n: 'pig',
    c: '1f416'
  },
  {
    n: 'pig-face',
    c: '1f437'
  },
  {
    n: 'pig-nose',
    c: '1f43d'
  },
  {
    n: 'pile-of-poo',
    c: '1f4a9'
  },
  {
    n: 'pill',
    c: '1f48a'
  },
  {
    n: 'pilot',
    c: '1f9d1-200d-2708-fe0f'
  },
  {
    n: 'pilot-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-2708-fe0f'
  },
  {
    n: 'pilot-light-skin-tone',
    c: '1f9d1-1f3fb-200d-2708-fe0f'
  },
  {
    n: 'pilot-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-2708-fe0f'
  },
  {
    n: 'pilot-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-2708-fe0f'
  },
  {
    n: 'pilot-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-2708-fe0f'
  },
  {
    n: 'pinched-fingers',
    c: '1f90c'
  },
  {
    n: 'pinched-fingers-dark-skin-tone',
    c: '1f90c-1f3ff'
  },
  {
    n: 'pinched-fingers-light-skin-tone',
    c: '1f90c-1f3fb'
  },
  {
    n: 'pinched-fingers-medium-dark-skin-tone',
    c: '1f90c-1f3fe'
  },
  {
    n: 'pinched-fingers-medium-light-skin-tone',
    c: '1f90c-1f3fc'
  },
  {
    n: 'pinched-fingers-medium-skin-tone',
    c: '1f90c-1f3fd'
  },
  {
    n: 'pinching-hand',
    c: '1f90f'
  },
  {
    n: 'pinching-hand-dark-skin-tone',
    c: '1f90f-1f3ff'
  },
  {
    n: 'pinching-hand-light-skin-tone',
    c: '1f90f-1f3fb'
  },
  {
    n: 'pinching-hand-medium-dark-skin-tone',
    c: '1f90f-1f3fe'
  },
  {
    n: 'pinching-hand-medium-light-skin-tone',
    c: '1f90f-1f3fc'
  },
  {
    n: 'pinching-hand-medium-skin-tone',
    c: '1f90f-1f3fd'
  },
  {
    n: 'pine-decoration',
    c: '1f38d'
  },
  {
    n: 'pineapple',
    c: '1f34d'
  },
  {
    n: 'ping-pong',
    c: '1f3d3'
  },
  {
    n: 'pirate-flag',
    c: '1f3f4-200d-2620-fe0f'
  },
  {
    n: 'pisces',
    c: '2653'
  },
  {
    n: 'pizza',
    c: '1f355'
  },
  {
    n: 'placard',
    c: '1faa7'
  },
  {
    n: 'place-of-worship',
    c: '1f6d0'
  },
  {
    n: 'play-button',
    c: '25b6'
  },
  {
    n: 'play-or-pause-button',
    c: '23ef'
  },
  {
    n: 'pleading-face',
    c: '1f97a'
  },
  {
    n: 'plunger',
    c: '1faa0'
  },
  {
    n: 'plus',
    c: '2795'
  },
  {
    n: 'polar-bear',
    c: '1f43b-200d-2744-fe0f'
  },
  {
    n: 'police-car',
    c: '1f693'
  },
  {
    n: 'police-car-light',
    c: '1f6a8'
  },
  {
    n: 'police-officer',
    c: '1f46e'
  },
  {
    n: 'police-officer-dark-skin-tone',
    c: '1f46e-1f3ff'
  },
  {
    n: 'police-officer-light-skin-tone',
    c: '1f46e-1f3fb'
  },
  {
    n: 'police-officer-medium-dark-skin-tone',
    c: '1f46e-1f3fe'
  },
  {
    n: 'police-officer-medium-light-skin-tone',
    c: '1f46e-1f3fc'
  },
  {
    n: 'police-officer-medium-skin-tone',
    c: '1f46e-1f3fd'
  },
  {
    n: 'poodle',
    c: '1f429'
  },
  {
    n: 'pool-8-ball',
    c: '1f3b1'
  },
  {
    n: 'popcorn',
    c: '1f37f'
  },
  {
    n: 'post-office',
    c: '1f3e4'
  },
  {
    n: 'postal-horn',
    c: '1f4ef'
  },
  {
    n: 'postbox',
    c: '1f4ee'
  },
  {
    n: 'pot-of-food',
    c: '1f372'
  },
  {
    n: 'potable-water',
    c: '1f6b0'
  },
  {
    n: 'potato',
    c: '1f954'
  },
  {
    n: 'potted-plant',
    c: '1fab4'
  },
  {
    n: 'poultry-leg',
    c: '1f357'
  },
  {
    n: 'pound-banknote',
    c: '1f4b7'
  },
  {
    n: 'pouting-cat',
    c: '1f63e'
  },
  {
    n: 'pouting-face',
    c: '1f621'
  },
  {
    n: 'prayer-beads',
    c: '1f4ff'
  },
  {
    n: 'pregnant-woman',
    c: '1f930'
  },
  {
    n: 'pregnant-woman-dark-skin-tone',
    c: '1f930-1f3ff'
  },
  {
    n: 'pregnant-woman-light-skin-tone',
    c: '1f930-1f3fb'
  },
  {
    n: 'pregnant-woman-medium-dark-skin-tone',
    c: '1f930-1f3fe'
  },
  {
    n: 'pregnant-woman-medium-light-skin-tone',
    c: '1f930-1f3fc'
  },
  {
    n: 'pregnant-woman-medium-skin-tone',
    c: '1f930-1f3fd'
  },
  {
    n: 'pretzel',
    c: '1f968'
  },
  {
    n: 'prince',
    c: '1f934'
  },
  {
    n: 'prince-dark-skin-tone',
    c: '1f934-1f3ff'
  },
  {
    n: 'prince-light-skin-tone',
    c: '1f934-1f3fb'
  },
  {
    n: 'prince-medium-dark-skin-tone',
    c: '1f934-1f3fe'
  },
  {
    n: 'prince-medium-light-skin-tone',
    c: '1f934-1f3fc'
  },
  {
    n: 'prince-medium-skin-tone',
    c: '1f934-1f3fd'
  },
  {
    n: 'princess',
    c: '1f478'
  },
  {
    n: 'princess-dark-skin-tone',
    c: '1f478-1f3ff'
  },
  {
    n: 'princess-light-skin-tone',
    c: '1f478-1f3fb'
  },
  {
    n: 'princess-medium-dark-skin-tone',
    c: '1f478-1f3fe'
  },
  {
    n: 'princess-medium-light-skin-tone',
    c: '1f478-1f3fc'
  },
  {
    n: 'princess-medium-skin-tone',
    c: '1f478-1f3fd'
  },
  {
    n: 'printer',
    c: '1f5a8'
  },
  {
    n: 'prohibited',
    c: '1f6ab'
  },
  {
    n: 'purple-circle',
    c: '1f7e3'
  },
  {
    n: 'purple-heart',
    c: '1f49c'
  },
  {
    n: 'purple-square',
    c: '1f7ea'
  },
  {
    n: 'purse',
    c: '1f45b'
  },
  {
    n: 'pushpin',
    c: '1f4cc'
  },
  {
    n: 'puzzle-piece',
    c: '1f9e9'
  },
  {
    n: 'rabbit',
    c: '1f407'
  },
  {
    n: 'rabbit-face',
    c: '1f430'
  },
  {
    n: 'raccoon',
    c: '1f99d'
  },
  {
    n: 'racing-car',
    c: '1f3ce'
  },
  {
    n: 'radio',
    c: '1f4fb'
  },
  {
    n: 'radio-button',
    c: '1f518'
  },
  {
    n: 'radioactive',
    c: '2622'
  },
  {
    n: 'railway-car',
    c: '1f683'
  },
  {
    n: 'railway-track',
    c: '1f6e4'
  },
  {
    n: 'rainbow',
    c: '1f308'
  },
  {
    n: 'rainbow-flag',
    c: '1f3f3-fe0f-200d-1f308'
  },
  {
    n: 'raised-back-of-hand',
    c: '1f91a'
  },
  {
    n: 'raised-back-of-hand-dark-skin-tone',
    c: '1f91a-1f3ff'
  },
  {
    n: 'raised-back-of-hand-light-skin-tone',
    c: '1f91a-1f3fb'
  },
  {
    n: 'raised-back-of-hand-medium-dark-skin-tone',
    c: '1f91a-1f3fe'
  },
  {
    n: 'raised-back-of-hand-medium-light-skin-tone',
    c: '1f91a-1f3fc'
  },
  {
    n: 'raised-back-of-hand-medium-skin-tone',
    c: '1f91a-1f3fd'
  },
  {
    n: 'raised-fist',
    c: '270a'
  },
  {
    n: 'raised-fist-dark-skin-tone',
    c: '270a-1f3ff'
  },
  {
    n: 'raised-fist-light-skin-tone',
    c: '270a-1f3fb'
  },
  {
    n: 'raised-fist-medium-dark-skin-tone',
    c: '270a-1f3fe'
  },
  {
    n: 'raised-fist-medium-light-skin-tone',
    c: '270a-1f3fc'
  },
  {
    n: 'raised-fist-medium-skin-tone',
    c: '270a-1f3fd'
  },
  {
    n: 'raised-hand',
    c: '270b'
  },
  {
    n: 'raised-hand-dark-skin-tone',
    c: '270b-1f3ff'
  },
  {
    n: 'raised-hand-light-skin-tone',
    c: '270b-1f3fb'
  },
  {
    n: 'raised-hand-medium-dark-skin-tone',
    c: '270b-1f3fe'
  },
  {
    n: 'raised-hand-medium-light-skin-tone',
    c: '270b-1f3fc'
  },
  {
    n: 'raised-hand-medium-skin-tone',
    c: '270b-1f3fd'
  },
  {
    n: 'raising-hands',
    c: '1f64c'
  },
  {
    n: 'raising-hands-dark-skin-tone',
    c: '1f64c-1f3ff'
  },
  {
    n: 'raising-hands-light-skin-tone',
    c: '1f64c-1f3fb'
  },
  {
    n: 'raising-hands-medium-dark-skin-tone',
    c: '1f64c-1f3fe'
  },
  {
    n: 'raising-hands-medium-light-skin-tone',
    c: '1f64c-1f3fc'
  },
  {
    n: 'raising-hands-medium-skin-tone',
    c: '1f64c-1f3fd'
  },
  {
    n: 'ram',
    c: '1f40f'
  },
  {
    n: 'rat',
    c: '1f400'
  },
  {
    n: 'razor',
    c: '1fa92'
  },
  {
    n: 'receipt',
    c: '1f9fe'
  },
  {
    n: 'record-button',
    c: '23fa'
  },
  {
    n: 'recycling-symbol',
    c: '267b'
  },
  {
    n: 'red-apple',
    c: '1f34e'
  },
  {
    n: 'red-circle',
    c: '1f534'
  },
  {
    n: 'red-envelope',
    c: '1f9e7'
  },
  {
    n: 'red-exclamation-mark',
    c: '2757'
  },
  {
    n: 'red-hair',
    c: '1f9b0'
  },
  {
    n: 'red-heart',
    c: '2764'
  },
  {
    n: 'red-paper-lantern',
    c: '1f3ee'
  },
  {
    n: 'red-question-mark',
    c: '2753'
  },
  {
    n: 'red-square',
    c: '1f7e5'
  },
  {
    n: 'red-triangle-pointed-down',
    c: '1f53b'
  },
  {
    n: 'red-triangle-pointed-up',
    c: '1f53a'
  },
  {
    n: 'regional-indicator-symbol-letter-a',
    c: '1f1e6'
  },
  {
    n: 'regional-indicator-symbol-letter-b',
    c: '1f1e7'
  },
  {
    n: 'regional-indicator-symbol-letter-c',
    c: '1f1e8'
  },
  {
    n: 'regional-indicator-symbol-letter-d',
    c: '1f1e9'
  },
  {
    n: 'regional-indicator-symbol-letter-e',
    c: '1f1ea'
  },
  {
    n: 'regional-indicator-symbol-letter-f',
    c: '1f1eb'
  },
  {
    n: 'regional-indicator-symbol-letter-g',
    c: '1f1ec'
  },
  {
    n: 'regional-indicator-symbol-letter-h',
    c: '1f1ed'
  },
  {
    n: 'regional-indicator-symbol-letter-i',
    c: '1f1ee'
  },
  {
    n: 'regional-indicator-symbol-letter-j',
    c: '1f1ef'
  },
  {
    n: 'regional-indicator-symbol-letter-k',
    c: '1f1f0'
  },
  {
    n: 'regional-indicator-symbol-letter-l',
    c: '1f1f1'
  },
  {
    n: 'regional-indicator-symbol-letter-m',
    c: '1f1f2'
  },
  {
    n: 'regional-indicator-symbol-letter-n',
    c: '1f1f3'
  },
  {
    n: 'regional-indicator-symbol-letter-o',
    c: '1f1f4'
  },
  {
    n: 'regional-indicator-symbol-letter-p',
    c: '1f1f5'
  },
  {
    n: 'regional-indicator-symbol-letter-q',
    c: '1f1f6'
  },
  {
    n: 'regional-indicator-symbol-letter-r',
    c: '1f1f7'
  },
  {
    n: 'regional-indicator-symbol-letter-s',
    c: '1f1f8'
  },
  {
    n: 'regional-indicator-symbol-letter-t',
    c: '1f1f9'
  },
  {
    n: 'regional-indicator-symbol-letter-u',
    c: '1f1fa'
  },
  {
    n: 'regional-indicator-symbol-letter-v',
    c: '1f1fb'
  },
  {
    n: 'regional-indicator-symbol-letter-w',
    c: '1f1fc'
  },
  {
    n: 'regional-indicator-symbol-letter-x',
    c: '1f1fd'
  },
  {
    n: 'regional-indicator-symbol-letter-y',
    c: '1f1fe'
  },
  {
    n: 'regional-indicator-symbol-letter-z',
    c: '1f1ff'
  },
  {
    n: 'registered',
    c: 'ae'
  },
  {
    n: 'relieved-face',
    c: '1f60c'
  },
  {
    n: 'reminder-ribbon',
    c: '1f397'
  },
  {
    n: 'repeat-button',
    c: '1f501'
  },
  {
    n: 'repeat-single-button',
    c: '1f502'
  },
  {
    n: 'rescue-worker-s-helmet',
    c: '26d1'
  },
  {
    n: 'restroom',
    c: '1f6bb'
  },
  {
    n: 'reverse-button',
    c: '25c0'
  },
  {
    n: 'revolving-hearts',
    c: '1f49e'
  },
  {
    n: 'rhinoceros',
    c: '1f98f'
  },
  {
    n: 'ribbon',
    c: '1f380'
  },
  {
    n: 'rice-ball',
    c: '1f359'
  },
  {
    n: 'rice-cracker',
    c: '1f358'
  },
  {
    n: 'right-anger-bubble',
    c: '1f5ef'
  },
  {
    n: 'right-arrow',
    c: '27a1'
  },
  {
    n: 'right-arrow-curving-down',
    c: '2935'
  },
  {
    n: 'right-arrow-curving-left',
    c: '21a9'
  },
  {
    n: 'right-arrow-curving-up',
    c: '2934'
  },
  {
    n: 'right-facing-fist',
    c: '1f91c'
  },
  {
    n: 'right-facing-fist-dark-skin-tone',
    c: '1f91c-1f3ff'
  },
  {
    n: 'right-facing-fist-light-skin-tone',
    c: '1f91c-1f3fb'
  },
  {
    n: 'right-facing-fist-medium-dark-skin-tone',
    c: '1f91c-1f3fe'
  },
  {
    n: 'right-facing-fist-medium-light-skin-tone',
    c: '1f91c-1f3fc'
  },
  {
    n: 'right-facing-fist-medium-skin-tone',
    c: '1f91c-1f3fd'
  },
  {
    n: 'ring',
    c: '1f48d'
  },
  {
    n: 'ringed-planet',
    c: '1fa90'
  },
  {
    n: 'roasted-sweet-potato',
    c: '1f360'
  },
  {
    n: 'robot',
    c: '1f916'
  },
  {
    n: 'rock',
    c: '1faa8'
  },
  {
    n: 'rocket',
    c: '1f680'
  },
  {
    n: 'roll-of-paper',
    c: '1f9fb'
  },
  {
    n: 'rolled-up-newspaper',
    c: '1f5de'
  },
  {
    n: 'roller-coaster',
    c: '1f3a2'
  },
  {
    n: 'roller-skate',
    c: '1f6fc'
  },
  {
    n: 'rolling-on-the-floor-laughing',
    c: '1f923'
  },
  {
    n: 'rooster',
    c: '1f413'
  },
  {
    n: 'rose',
    c: '1f339'
  },
  {
    n: 'rosette',
    c: '1f3f5'
  },
  {
    n: 'round-pushpin',
    c: '1f4cd'
  },
  {
    n: 'rugby-football',
    c: '1f3c9'
  },
  {
    n: 'running-shirt',
    c: '1f3bd'
  },
  {
    n: 'running-shoe',
    c: '1f45f'
  },
  {
    n: 'sad-but-relieved-face',
    c: '1f625'
  },
  {
    n: 'safety-pin',
    c: '1f9f7'
  },
  {
    n: 'safety-vest',
    c: '1f9ba'
  },
  {
    n: 'sagittarius',
    c: '2650'
  },
  {
    n: 'sailboat',
    c: '26f5'
  },
  {
    n: 'sake',
    c: '1f376'
  },
  {
    n: 'salt',
    c: '1f9c2'
  },
  {
    n: 'sandwich',
    c: '1f96a'
  },
  {
    n: 'santa-claus',
    c: '1f385'
  },
  {
    n: 'santa-claus-dark-skin-tone',
    c: '1f385-1f3ff'
  },
  {
    n: 'santa-claus-light-skin-tone',
    c: '1f385-1f3fb'
  },
  {
    n: 'santa-claus-medium-dark-skin-tone',
    c: '1f385-1f3fe'
  },
  {
    n: 'santa-claus-medium-light-skin-tone',
    c: '1f385-1f3fc'
  },
  {
    n: 'santa-claus-medium-skin-tone',
    c: '1f385-1f3fd'
  },
  {
    n: 'sari',
    c: '1f97b'
  },
  {
    n: 'satellite',
    c: '1f6f0'
  },
  {
    n: 'satellite-antenna',
    c: '1f4e1'
  },
  {
    n: 'sauropod',
    c: '1f995'
  },
  {
    n: 'saxophone',
    c: '1f3b7'
  },
  {
    n: 'scarf',
    c: '1f9e3'
  },
  {
    n: 'school',
    c: '1f3eb'
  },
  {
    n: 'scientist',
    c: '1f9d1-200d-1f52c'
  },
  {
    n: 'scientist-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f52c'
  },
  {
    n: 'scientist-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f52c'
  },
  {
    n: 'scientist-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f52c'
  },
  {
    n: 'scientist-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f52c'
  },
  {
    n: 'scientist-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f52c'
  },
  {
    n: 'scissors',
    c: '2702'
  },
  {
    n: 'scorpio',
    c: '264f'
  },
  {
    n: 'scorpion',
    c: '1f982'
  },
  {
    n: 'screwdriver',
    c: '1fa9b'
  },
  {
    n: 'scroll',
    c: '1f4dc'
  },
  {
    n: 'seal',
    c: '1f9ad'
  },
  {
    n: 'seat',
    c: '1f4ba'
  },
  {
    n: 'see-no-evil-monkey',
    c: '1f648'
  },
  {
    n: 'seedling',
    c: '1f331'
  },
  {
    n: 'selfie',
    c: '1f933'
  },
  {
    n: 'selfie-dark-skin-tone',
    c: '1f933-1f3ff'
  },
  {
    n: 'selfie-light-skin-tone',
    c: '1f933-1f3fb'
  },
  {
    n: 'selfie-medium-dark-skin-tone',
    c: '1f933-1f3fe'
  },
  {
    n: 'selfie-medium-light-skin-tone',
    c: '1f933-1f3fc'
  },
  {
    n: 'selfie-medium-skin-tone',
    c: '1f933-1f3fd'
  },
  {
    n: 'service-dog',
    c: '1f415-200d-1f9ba'
  },
  {
    n: 'seven-o-clock',
    c: '1f556'
  },
  {
    n: 'seven-thirty',
    c: '1f562'
  },
  {
    n: 'sewing-needle',
    c: '1faa1'
  },
  {
    n: 'shallow-pan-of-food',
    c: '1f958'
  },
  {
    n: 'shamrock',
    c: '2618'
  },
  {
    n: 'shark',
    c: '1f988'
  },
  {
    n: 'shaved-ice',
    c: '1f367'
  },
  {
    n: 'sheaf-of-rice',
    c: '1f33e'
  },
  {
    n: 'shibuya',
    c: 'e50a'
  },
  {
    n: 'shield',
    c: '1f6e1'
  },
  {
    n: 'shinto-shrine',
    c: '26e9'
  },
  {
    n: 'ship',
    c: '1f6a2'
  },
  {
    n: 'shooting-star',
    c: '1f320'
  },
  {
    n: 'shopping-bags',
    c: '1f6cd'
  },
  {
    n: 'shopping-cart',
    c: '1f6d2'
  },
  {
    n: 'shortcake',
    c: '1f370'
  },
  {
    n: 'shorts',
    c: '1fa73'
  },
  {
    n: 'shower',
    c: '1f6bf'
  },
  {
    n: 'shrimp',
    c: '1f990'
  },
  {
    n: 'shuffle-tracks-button',
    c: '1f500'
  },
  {
    n: 'shushing-face',
    c: '1f92b'
  },
  {
    n: 'sign-of-the-horns',
    c: '1f918'
  },
  {
    n: 'sign-of-the-horns-dark-skin-tone',
    c: '1f918-1f3ff'
  },
  {
    n: 'sign-of-the-horns-light-skin-tone',
    c: '1f918-1f3fb'
  },
  {
    n: 'sign-of-the-horns-medium-dark-skin-tone',
    c: '1f918-1f3fe'
  },
  {
    n: 'sign-of-the-horns-medium-light-skin-tone',
    c: '1f918-1f3fc'
  },
  {
    n: 'sign-of-the-horns-medium-skin-tone',
    c: '1f918-1f3fd'
  },
  {
    n: 'singer',
    c: '1f9d1-200d-1f3a4'
  },
  {
    n: 'singer-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f3a4'
  },
  {
    n: 'singer-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f3a4'
  },
  {
    n: 'singer-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f3a4'
  },
  {
    n: 'singer-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f3a4'
  },
  {
    n: 'singer-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f3a4'
  },
  {
    n: 'six-o-clock',
    c: '1f555'
  },
  {
    n: 'six-thirty',
    c: '1f561'
  },
  {
    n: 'skateboard',
    c: '1f6f9'
  },
  {
    n: 'skier',
    c: '26f7'
  },
  {
    n: 'skier-dark-skin-tone',
    c: '26f7-1f3ff'
  },
  {
    n: 'skier-light-skin-tone',
    c: '26f7-1f3fb'
  },
  {
    n: 'skier-medium-dark-skin-tone',
    c: '26f7-1f3fe'
  },
  {
    n: 'skier-medium-light-skin-tone',
    c: '26f7-1f3fc'
  },
  {
    n: 'skier-medium-skin-tone',
    c: '26f7-1f3fd'
  },
  {
    n: 'skis',
    c: '1f3bf'
  },
  {
    n: 'skull',
    c: '1f480'
  },
  {
    n: 'skull-and-crossbones',
    c: '2620'
  },
  {
    n: 'skunk',
    c: '1f9a8'
  },
  {
    n: 'sled',
    c: '1f6f7'
  },
  {
    n: 'sleeping-face',
    c: '1f634'
  },
  {
    n: 'sleepy-face',
    c: '1f62a'
  },
  {
    n: 'slightly-frowning-face',
    c: '1f641'
  },
  {
    n: 'slightly-smiling-face',
    c: '1f642'
  },
  {
    n: 'slot-machine',
    c: '1f3b0'
  },
  {
    n: 'sloth',
    c: '1f9a5'
  },
  {
    n: 'small-airplane',
    c: '1f6e9'
  },
  {
    n: 'small-blue-diamond',
    c: '1f539'
  },
  {
    n: 'small-orange-diamond',
    c: '1f538'
  },
  {
    n: 'smiling-cat-with-heart-eyes',
    c: '1f63b'
  },
  {
    n: 'smiling-face',
    c: '263a'
  },
  {
    n: 'smiling-face-with-halo',
    c: '1f607'
  },
  {
    n: 'smiling-face-with-heart-eyes',
    c: '1f60d'
  },
  {
    n: 'smiling-face-with-hearts',
    c: '1f970'
  },
  {
    n: 'smiling-face-with-horns',
    c: '1f608'
  },
  {
    n: 'smiling-face-with-smiling-eyes',
    c: '1f60a'
  },
  {
    n: 'smiling-face-with-sunglasses',
    c: '1f60e'
  },
  {
    n: 'smiling-face-with-tear',
    c: '1f972'
  },
  {
    n: 'smirking-face',
    c: '1f60f'
  },
  {
    n: 'snail',
    c: '1f40c'
  },
  {
    n: 'snake',
    c: '1f40d'
  },
  {
    n: 'sneezing-face',
    c: '1f927'
  },
  {
    n: 'snow-capped-mountain',
    c: '1f3d4'
  },
  {
    n: 'snowboarder',
    c: '1f3c2'
  },
  {
    n: 'snowboarder-dark-skin-tone',
    c: '1f3c2-1f3ff'
  },
  {
    n: 'snowboarder-light-skin-tone',
    c: '1f3c2-1f3fb'
  },
  {
    n: 'snowboarder-medium-dark-skin-tone',
    c: '1f3c2-1f3fe'
  },
  {
    n: 'snowboarder-medium-light-skin-tone',
    c: '1f3c2-1f3fc'
  },
  {
    n: 'snowboarder-medium-skin-tone',
    c: '1f3c2-1f3fd'
  },
  {
    n: 'snowflake',
    c: '2744'
  },
  {
    n: 'snowman',
    c: '2603'
  },
  {
    n: 'snowman-without-snow',
    c: '26c4'
  },
  {
    n: 'soap',
    c: '1f9fc'
  },
  {
    n: 'soccer-ball',
    c: '26bd'
  },
  {
    n: 'socks',
    c: '1f9e6'
  },
  {
    n: 'soft-ice-cream',
    c: '1f366'
  },
  {
    n: 'softball',
    c: '1f94e'
  },
  {
    n: 'soon-arrow',
    c: '1f51c'
  },
  {
    n: 'sos-button',
    c: '1f198'
  },
  {
    n: 'spade-suit',
    c: '2660'
  },
  {
    n: 'spaghetti',
    c: '1f35d'
  },
  {
    n: 'sparkle',
    c: '2747'
  },
  {
    n: 'sparkler',
    c: '1f387'
  },
  {
    n: 'sparkles',
    c: '2728'
  },
  {
    n: 'sparkling-heart',
    c: '1f496'
  },
  {
    n: 'speak-no-evil-monkey',
    c: '1f64a'
  },
  {
    n: 'speaker-high-volume',
    c: '1f50a'
  },
  {
    n: 'speaker-low-volume',
    c: '1f508'
  },
  {
    n: 'speaker-medium-volume',
    c: '1f509'
  },
  {
    n: 'speaking-head',
    c: '1f5e3'
  },
  {
    n: 'speech-balloon',
    c: '1f4ac'
  },
  {
    n: 'speedboat',
    c: '1f6a4'
  },
  {
    n: 'spider',
    c: '1f577'
  },
  {
    n: 'spider-web',
    c: '1f578'
  },
  {
    n: 'spiral-calendar',
    c: '1f5d3'
  },
  {
    n: 'spiral-notepad',
    c: '1f5d2'
  },
  {
    n: 'spiral-shell',
    c: '1f41a'
  },
  {
    n: 'sponge',
    c: '1f9fd'
  },
  {
    n: 'spoon',
    c: '1f944'
  },
  {
    n: 'sport-utility-vehicle',
    c: '1f699'
  },
  {
    n: 'sports-medal',
    c: '1f3c5'
  },
  {
    n: 'spouting-whale',
    c: '1f433'
  },
  {
    n: 'squid',
    c: '1f991'
  },
  {
    n: 'squinting-face-with-tongue',
    c: '1f61d'
  },
  {
    n: 'stadium',
    c: '1f3df'
  },
  {
    n: 'star',
    c: '2b50'
  },
  {
    n: 'star-and-crescent',
    c: '262a'
  },
  {
    n: 'star-of-david',
    c: '2721'
  },
  {
    n: 'star-struck',
    c: '1f929'
  },
  {
    n: 'station',
    c: '1f689'
  },
  {
    n: 'statue-of-liberty',
    c: '1f5fd'
  },
  {
    n: 'steaming-bowl',
    c: '1f35c'
  },
  {
    n: 'stethoscope',
    c: '1fa7a'
  },
  {
    n: 'stop-button',
    c: '23f9'
  },
  {
    n: 'stop-sign',
    c: '1f6d1'
  },
  {
    n: 'stopwatch',
    c: '23f1'
  },
  {
    n: 'straight-ruler',
    c: '1f4cf'
  },
  {
    n: 'strawberry',
    c: '1f353'
  },
  {
    n: 'student',
    c: '1f9d1-200d-1f393'
  },
  {
    n: 'student-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f393'
  },
  {
    n: 'student-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f393'
  },
  {
    n: 'student-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f393'
  },
  {
    n: 'student-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f393'
  },
  {
    n: 'student-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f393'
  },
  {
    n: 'studio-microphone',
    c: '1f399'
  },
  {
    n: 'stuffed-flatbread',
    c: '1f959'
  },
  {
    n: 'sun',
    c: '2600'
  },
  {
    n: 'sun-behind-cloud',
    c: '26c5'
  },
  {
    n: 'sun-behind-large-cloud',
    c: '1f325'
  },
  {
    n: 'sun-behind-rain-cloud',
    c: '1f326'
  },
  {
    n: 'sun-behind-small-cloud',
    c: '1f324'
  },
  {
    n: 'sun-with-face',
    c: '1f31e'
  },
  {
    n: 'sunflower',
    c: '1f33b'
  },
  {
    n: 'sunglasses',
    c: '1f576'
  },
  {
    n: 'sunrise',
    c: '1f305'
  },
  {
    n: 'sunrise-over-mountains',
    c: '1f304'
  },
  {
    n: 'sunset',
    c: '1f307'
  },
  {
    n: 'superhero',
    c: '1f9b8'
  },
  {
    n: 'superhero-dark-skin-tone',
    c: '1f9b8-1f3ff'
  },
  {
    n: 'superhero-light-skin-tone',
    c: '1f9b8-1f3fb'
  },
  {
    n: 'superhero-medium-dark-skin-tone',
    c: '1f9b8-1f3fe'
  },
  {
    n: 'superhero-medium-light-skin-tone',
    c: '1f9b8-1f3fc'
  },
  {
    n: 'superhero-medium-skin-tone',
    c: '1f9b8-1f3fd'
  },
  {
    n: 'supervillain',
    c: '1f9b9'
  },
  {
    n: 'supervillain-dark-skin-tone',
    c: '1f9b9-1f3ff'
  },
  {
    n: 'supervillain-light-skin-tone',
    c: '1f9b9-1f3fb'
  },
  {
    n: 'supervillain-medium-dark-skin-tone',
    c: '1f9b9-1f3fe'
  },
  {
    n: 'supervillain-medium-light-skin-tone',
    c: '1f9b9-1f3fc'
  },
  {
    n: 'supervillain-medium-skin-tone',
    c: '1f9b9-1f3fd'
  },
  {
    n: 'sushi',
    c: '1f363'
  },
  {
    n: 'suspension-railway',
    c: '1f69f'
  },
  {
    n: 'swan',
    c: '1f9a2'
  },
  {
    n: 'sweat-droplets',
    c: '1f4a6'
  },
  {
    n: 'synagogue',
    c: '1f54d'
  },
  {
    n: 'syringe',
    c: '1f489'
  },
  {
    n: 't-rex',
    c: '1f996'
  },
  {
    n: 't-shirt',
    c: '1f455'
  },
  {
    n: 'taco',
    c: '1f32e'
  },
  {
    n: 'takeout-box',
    c: '1f961'
  },
  {
    n: 'tamale',
    c: '1fad4'
  },
  {
    n: 'tanabata-tree',
    c: '1f38b'
  },
  {
    n: 'tangerine',
    c: '1f34a'
  },
  {
    n: 'taurus',
    c: '2649'
  },
  {
    n: 'taxi',
    c: '1f695'
  },
  {
    n: 'teacher',
    c: '1f9d1-200d-1f3eb'
  },
  {
    n: 'teacher-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f3eb'
  },
  {
    n: 'teacher-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f3eb'
  },
  {
    n: 'teacher-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f3eb'
  },
  {
    n: 'teacher-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f3eb'
  },
  {
    n: 'teacher-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f3eb'
  },
  {
    n: 'teacup-without-handle',
    c: '1f375'
  },
  {
    n: 'teapot',
    c: '1fad6'
  },
  {
    n: 'tear-off-calendar',
    c: '1f4c6'
  },
  {
    n: 'technologist',
    c: '1f9d1-200d-1f4bb'
  },
  {
    n: 'technologist-dark-skin-tone',
    c: '1f9d1-1f3ff-200d-1f4bb'
  },
  {
    n: 'technologist-light-skin-tone',
    c: '1f9d1-1f3fb-200d-1f4bb'
  },
  {
    n: 'technologist-medium-dark-skin-tone',
    c: '1f9d1-1f3fe-200d-1f4bb'
  },
  {
    n: 'technologist-medium-light-skin-tone',
    c: '1f9d1-1f3fc-200d-1f4bb'
  },
  {
    n: 'technologist-medium-skin-tone',
    c: '1f9d1-1f3fd-200d-1f4bb'
  },
  {
    n: 'teddy-bear',
    c: '1f9f8'
  },
  {
    n: 'telephone',
    c: '260e'
  },
  {
    n: 'telephone-receiver',
    c: '1f4de'
  },
  {
    n: 'telescope',
    c: '1f52d'
  },
  {
    n: 'television',
    c: '1f4fa'
  },
  {
    n: 'ten-o-clock',
    c: '1f559'
  },
  {
    n: 'ten-thirty',
    c: '1f565'
  },
  {
    n: 'tennis',
    c: '1f3be'
  },
  {
    n: 'tent',
    c: '26fa'
  },
  {
    n: 'test-tube',
    c: '1f9ea'
  },
  {
    n: 'thermometer',
    c: '1f321'
  },
  {
    n: 'thinking-face',
    c: '1f914'
  },
  {
    n: 'thong-sandal',
    c: '1fa74'
  },
  {
    n: 'thought-balloon',
    c: '1f4ad'
  },
  {
    n: 'thread',
    c: '1f9f5'
  },
  {
    n: 'three-o-clock',
    c: '1f552'
  },
  {
    n: 'three-thirty',
    c: '1f55e'
  },
  {
    n: 'thumbs-down',
    c: '1f44e'
  },
  {
    n: 'thumbs-down-dark-skin-tone',
    c: '1f44e-1f3ff'
  },
  {
    n: 'thumbs-down-light-skin-tone',
    c: '1f44e-1f3fb'
  },
  {
    n: 'thumbs-down-medium-dark-skin-tone',
    c: '1f44e-1f3fe'
  },
  {
    n: 'thumbs-down-medium-light-skin-tone',
    c: '1f44e-1f3fc'
  },
  {
    n: 'thumbs-down-medium-skin-tone',
    c: '1f44e-1f3fd'
  },
  {
    n: 'thumbs-up',
    c: '1f44d'
  },
  {
    n: 'thumbs-up-dark-skin-tone',
    c: '1f44d-1f3ff'
  },
  {
    n: 'thumbs-up-light-skin-tone',
    c: '1f44d-1f3fb'
  },
  {
    n: 'thumbs-up-medium-dark-skin-tone',
    c: '1f44d-1f3fe'
  },
  {
    n: 'thumbs-up-medium-light-skin-tone',
    c: '1f44d-1f3fc'
  },
  {
    n: 'thumbs-up-medium-skin-tone',
    c: '1f44d-1f3fd'
  },
  {
    n: 'ticket',
    c: '1f3ab'
  },
  {
    n: 'tiger',
    c: '1f405'
  },
  {
    n: 'tiger-face',
    c: '1f42f'
  },
  {
    n: 'timer-clock',
    c: '23f2'
  },
  {
    n: 'tired-face',
    c: '1f62b'
  },
  {
    n: 'toilet',
    c: '1f6bd'
  },
  {
    n: 'tokyo-tower',
    c: '1f5fc'
  },
  {
    n: 'tomato',
    c: '1f345'
  },
  {
    n: 'tongue',
    c: '1f445'
  },
  {
    n: 'toolbox',
    c: '1f9f0'
  },
  {
    n: 'tooth',
    c: '1f9b7'
  },
  {
    n: 'toothbrush',
    c: '1faa5'
  },
  {
    n: 'top-arrow',
    c: '1f51d'
  },
  {
    n: 'top-hat',
    c: '1f3a9'
  },
  {
    n: 'tornado',
    c: '1f32a'
  },
  {
    n: 'trackball',
    c: '1f5b2'
  },
  {
    n: 'tractor',
    c: '1f69c'
  },
  {
    n: 'trade-mark',
    c: '2122'
  },
  {
    n: 'train',
    c: '1f686'
  },
  {
    n: 'tram',
    c: '1f68a'
  },
  {
    n: 'tram-car',
    c: '1f68b'
  },
  {
    n: 'transgender-flag',
    c: '1f3f3-fe0f-200d-26a7-fe0f'
  },
  {
    n: 'transgender-symbol',
    c: '26a7'
  },
  {
    n: 'triangular-flag',
    c: '1f6a9'
  },
  {
    n: 'triangular-ruler',
    c: '1f4d0'
  },
  {
    n: 'trident-emblem',
    c: '1f531'
  },
  {
    n: 'trolleybus',
    c: '1f68e'
  },
  {
    n: 'trophy',
    c: '1f3c6'
  },
  {
    n: 'tropical-drink',
    c: '1f379'
  },
  {
    n: 'tropical-fish',
    c: '1f420'
  },
  {
    n: 'trumpet',
    c: '1f3ba'
  },
  {
    n: 'tulip',
    c: '1f337'
  },
  {
    n: 'tumbler-glass',
    c: '1f943'
  },
  {
    n: 'turkey',
    c: '1f983'
  },
  {
    n: 'turtle',
    c: '1f422'
  },
  {
    n: 'twelve-o-clock',
    c: '1f55b'
  },
  {
    n: 'twelve-thirty',
    c: '1f567'
  },
  {
    n: 'two-hearts',
    c: '1f495'
  },
  {
    n: 'two-hump-camel',
    c: '1f42b'
  },
  {
    n: 'two-o-clock',
    c: '1f551'
  },
  {
    n: 'two-thirty',
    c: '1f55d'
  },
  {
    n: 'umbrella',
    c: '2602'
  },
  {
    n: 'umbrella-on-ground',
    c: '26f1'
  },
  {
    n: 'umbrella-with-rain-drops',
    c: '2614'
  },
  {
    n: 'unamused-face',
    c: '1f612'
  },
  {
    n: 'unicorn',
    c: '1f984'
  },
  {
    n: 'unlocked',
    c: '1f513'
  },
  {
    n: 'up-arrow',
    c: '2b06'
  },
  {
    n: 'up-button',
    c: '1f199'
  },
  {
    n: 'up-down-arrow',
    c: '2195'
  },
  {
    n: 'up-left-arrow',
    c: '2196'
  },
  {
    n: 'up-right-arrow',
    c: '2197'
  },
  {
    n: 'upside-down-face',
    c: '1f643'
  },
  {
    n: 'upwards-button',
    c: '1f53c'
  },
  {
    n: 'vampire',
    c: '1f9db'
  },
  {
    n: 'vampire-dark-skin-tone',
    c: '1f9db-1f3ff'
  },
  {
    n: 'vampire-light-skin-tone',
    c: '1f9db-1f3fb'
  },
  {
    n: 'vampire-medium-dark-skin-tone',
    c: '1f9db-1f3fe'
  },
  {
    n: 'vampire-medium-light-skin-tone',
    c: '1f9db-1f3fc'
  },
  {
    n: 'vampire-medium-skin-tone',
    c: '1f9db-1f3fd'
  },
  {
    n: 'vertical-traffic-light',
    c: '1f6a6'
  },
  {
    n: 'vibration-mode',
    c: '1f4f3'
  },
  {
    n: 'victory-hand',
    c: '270c'
  },
  {
    n: 'victory-hand-dark-skin-tone',
    c: '270c-1f3ff'
  },
  {
    n: 'victory-hand-light-skin-tone',
    c: '270c-1f3fb'
  },
  {
    n: 'victory-hand-medium-dark-skin-tone',
    c: '270c-1f3fe'
  },
  {
    n: 'victory-hand-medium-light-skin-tone',
    c: '270c-1f3fc'
  },
  {
    n: 'victory-hand-medium-skin-tone',
    c: '270c-1f3fd'
  },
  {
    n: 'video-camera',
    c: '1f4f9'
  },
  {
    n: 'video-game',
    c: '1f3ae'
  },
  {
    n: 'videocassette',
    c: '1f4fc'
  },
  {
    n: 'violin',
    c: '1f3bb'
  },
  {
    n: 'virgo',
    c: '264d'
  },
  {
    n: 'volcano',
    c: '1f30b'
  },
  {
    n: 'volleyball',
    c: '1f3d0'
  },
  {
    n: 'vs-button',
    c: '1f19a'
  },
  {
    n: 'vulcan-salute',
    c: '1f596'
  },
  {
    n: 'vulcan-salute-dark-skin-tone',
    c: '1f596-1f3ff'
  },
  {
    n: 'vulcan-salute-light-skin-tone',
    c: '1f596-1f3fb'
  },
  {
    n: 'vulcan-salute-medium-dark-skin-tone',
    c: '1f596-1f3fe'
  },
  {
    n: 'vulcan-salute-medium-light-skin-tone',
    c: '1f596-1f3fc'
  },
  {
    n: 'vulcan-salute-medium-skin-tone',
    c: '1f596-1f3fd'
  },
  {
    n: 'waffle',
    c: '1f9c7'
  },
  {
    n: 'waning-crescent-moon',
    c: '1f318'
  },
  {
    n: 'waning-gibbous-moon',
    c: '1f316'
  },
  {
    n: 'warning',
    c: '26a0'
  },
  {
    n: 'wastebasket',
    c: '1f5d1'
  },
  {
    n: 'watch',
    c: '231a'
  },
  {
    n: 'water-buffalo',
    c: '1f403'
  },
  {
    n: 'water-closet',
    c: '1f6be'
  },
  {
    n: 'water-pistol',
    c: '1f52b'
  },
  {
    n: 'water-wave',
    c: '1f30a'
  },
  {
    n: 'watermelon',
    c: '1f349'
  },
  {
    n: 'waving-hand',
    c: '1f44b'
  },
  {
    n: 'waving-hand-dark-skin-tone',
    c: '1f44b-1f3ff'
  },
  {
    n: 'waving-hand-light-skin-tone',
    c: '1f44b-1f3fb'
  },
  {
    n: 'waving-hand-medium-dark-skin-tone',
    c: '1f44b-1f3fe'
  },
  {
    n: 'waving-hand-medium-light-skin-tone',
    c: '1f44b-1f3fc'
  },
  {
    n: 'waving-hand-medium-skin-tone',
    c: '1f44b-1f3fd'
  },
  {
    n: 'wavy-dash',
    c: '3030'
  },
  {
    n: 'waxing-crescent-moon',
    c: '1f312'
  },
  {
    n: 'waxing-gibbous-moon',
    c: '1f314'
  },
  {
    n: 'weary-cat',
    c: '1f640'
  },
  {
    n: 'weary-face',
    c: '1f629'
  },
  {
    n: 'wedding',
    c: '1f492'
  },
  {
    n: 'whale',
    c: '1f40b'
  },
  {
    n: 'wheel-of-dharma',
    c: '2638'
  },
  {
    n: 'wheelchair-symbol',
    c: '267f'
  },
  {
    n: 'white-cane',
    c: '1f9af'
  },
  {
    n: 'white-circle',
    c: '26aa'
  },
  {
    n: 'white-exclamation-mark',
    c: '2755'
  },
  {
    n: 'white-flag',
    c: '1f3f3'
  },
  {
    n: 'white-flower',
    c: '1f4ae'
  },
  {
    n: 'white-hair',
    c: '1f9b3'
  },
  {
    n: 'white-heart',
    c: '1f90d'
  },
  {
    n: 'white-large-square',
    c: '2b1c'
  },
  {
    n: 'white-medium-small-square',
    c: '25fd'
  },
  {
    n: 'white-medium-square',
    c: '25fb'
  },
  {
    n: 'white-question-mark',
    c: '2754'
  },
  {
    n: 'white-small-square',
    c: '25ab'
  },
  {
    n: 'white-square-button',
    c: '1f533'
  },
  {
    n: 'wilted-flower',
    c: '1f940'
  },
  {
    n: 'wind-chime',
    c: '1f390'
  },
  {
    n: 'wind-face',
    c: '1f32c'
  },
  {
    n: 'window',
    c: '1fa9f'
  },
  {
    n: 'wine-glass',
    c: '1f377'
  },
  {
    n: 'winking-face',
    c: '1f609'
  },
  {
    n: 'winking-face-with-tongue',
    c: '1f61c'
  },
  {
    n: 'wolf',
    c: '1f43a'
  },
  {
    n: 'woman',
    c: '1f469'
  },
  {
    n: 'woman-and-man-holding-hands',
    c: '1f46b'
  },
  {
    n: 'woman-and-man-holding-hands-dark-skin-tone',
    c: '1f46b-1f3ff'
  },
  {
    n: 'woman-and-man-holding-hands-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'woman-and-man-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'woman-and-man-holding-hands-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'woman-and-man-holding-hands-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'woman-and-man-holding-hands-light-skin-tone',
    c: '1f46b-1f3fb'
  },
  {
    n: 'woman-and-man-holding-hands-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'woman-and-man-holding-hands-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'woman-and-man-holding-hands-light-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'woman-and-man-holding-hands-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'woman-and-man-holding-hands-medium-dark-skin-tone',
    c: '1f46b-1f3fe'
  },
  {
    n: 'woman-and-man-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'woman-and-man-holding-hands-medium-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'woman-and-man-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'woman-and-man-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'woman-and-man-holding-hands-medium-light-skin-tone',
    c: '1f46b-1f3fc'
  },
  {
    n: 'woman-and-man-holding-hands-medium-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'woman-and-man-holding-hands-medium-light-skin-tone-light-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'woman-and-man-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'woman-and-man-holding-hands-medium-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f468-1f3fd'
  },
  {
    n: 'woman-and-man-holding-hands-medium-skin-tone',
    c: '1f46b-1f3fd'
  },
  {
    n: 'woman-and-man-holding-hands-medium-skin-tone-dark-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3ff'
  },
  {
    n: 'woman-and-man-holding-hands-medium-skin-tone-light-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fb'
  },
  {
    n: 'woman-and-man-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fe'
  },
  {
    n: 'woman-and-man-holding-hands-medium-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f468-1f3fc'
  },
  {
    n: 'woman-artist',
    c: '1f469-200d-1f3a8'
  },
  {
    n: 'woman-artist-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f3a8'
  },
  {
    n: 'woman-artist-light-skin-tone',
    c: '1f469-1f3fb-200d-1f3a8'
  },
  {
    n: 'woman-artist-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f3a8'
  },
  {
    n: 'woman-artist-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f3a8'
  },
  {
    n: 'woman-artist-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f3a8'
  },
  {
    n: 'woman-astronaut',
    c: '1f469-200d-1f680'
  },
  {
    n: 'woman-astronaut-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f680'
  },
  {
    n: 'woman-astronaut-light-skin-tone',
    c: '1f469-1f3fb-200d-1f680'
  },
  {
    n: 'woman-astronaut-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f680'
  },
  {
    n: 'woman-astronaut-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f680'
  },
  {
    n: 'woman-astronaut-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f680'
  },
  {
    n: 'woman-bald',
    c: '1f469-200d-1f9b2'
  },
  {
    n: 'woman-beard',
    c: '1f9d4-200d-2640-fe0f'
  },
  {
    n: 'woman-biking',
    c: '1f6b4-200d-2640-fe0f'
  },
  {
    n: 'woman-biking-dark-skin-tone',
    c: '1f6b4-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-biking-light-skin-tone',
    c: '1f6b4-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-biking-medium-dark-skin-tone',
    c: '1f6b4-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-biking-medium-light-skin-tone',
    c: '1f6b4-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-biking-medium-skin-tone',
    c: '1f6b4-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-blond-hair',
    c: '1f471-200d-2640-fe0f'
  },
  {
    n: 'woman-bouncing-ball',
    c: '26f9-fe0f-200d-2640-fe0f'
  },
  {
    n: 'woman-bouncing-ball-dark-skin-tone',
    c: '26f9-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-bouncing-ball-light-skin-tone',
    c: '26f9-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-bouncing-ball-medium-dark-skin-tone',
    c: '26f9-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-bouncing-ball-medium-light-skin-tone',
    c: '26f9-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-bouncing-ball-medium-skin-tone',
    c: '26f9-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-bowing',
    c: '1f647-200d-2640-fe0f'
  },
  {
    n: 'woman-bowing-dark-skin-tone',
    c: '1f647-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-bowing-light-skin-tone',
    c: '1f647-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-bowing-medium-dark-skin-tone',
    c: '1f647-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-bowing-medium-light-skin-tone',
    c: '1f647-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-bowing-medium-skin-tone',
    c: '1f647-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-cartwheeling',
    c: '1f938-200d-2640-fe0f'
  },
  {
    n: 'woman-cartwheeling-dark-skin-tone',
    c: '1f938-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-cartwheeling-light-skin-tone',
    c: '1f938-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-cartwheeling-medium-dark-skin-tone',
    c: '1f938-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-cartwheeling-medium-light-skin-tone',
    c: '1f938-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-cartwheeling-medium-skin-tone',
    c: '1f938-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-christmas',
    c: '1f469-200d-1f384'
  },
  {
    n: 'woman-climbing',
    c: '1f9d7-200d-2640-fe0f'
  },
  {
    n: 'woman-climbing-dark-skin-tone',
    c: '1f9d7-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-climbing-light-skin-tone',
    c: '1f9d7-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-climbing-medium-dark-skin-tone',
    c: '1f9d7-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-climbing-medium-light-skin-tone',
    c: '1f9d7-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-climbing-medium-skin-tone',
    c: '1f9d7-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-construction-worker',
    c: '1f477-200d-2640-fe0f'
  },
  {
    n: 'woman-construction-worker-dark-skin-tone',
    c: '1f477-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-construction-worker-light-skin-tone',
    c: '1f477-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-construction-worker-medium-dark-skin-tone',
    c: '1f477-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-construction-worker-medium-light-skin-tone',
    c: '1f477-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-construction-worker-medium-skin-tone',
    c: '1f477-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-cook',
    c: '1f469-200d-1f373'
  },
  {
    n: 'woman-cook-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f373'
  },
  {
    n: 'woman-cook-light-skin-tone',
    c: '1f469-1f3fb-200d-1f373'
  },
  {
    n: 'woman-cook-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f373'
  },
  {
    n: 'woman-cook-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f373'
  },
  {
    n: 'woman-cook-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f373'
  },
  {
    n: 'woman-curly-hair',
    c: '1f469-200d-1f9b1'
  },
  {
    n: 'woman-dancing',
    c: '1f483'
  },
  {
    n: 'woman-dancing-dark-skin-tone',
    c: '1f483-1f3ff'
  },
  {
    n: 'woman-dancing-light-skin-tone',
    c: '1f483-1f3fb'
  },
  {
    n: 'woman-dancing-medium-dark-skin-tone',
    c: '1f483-1f3fe'
  },
  {
    n: 'woman-dancing-medium-light-skin-tone',
    c: '1f483-1f3fc'
  },
  {
    n: 'woman-dancing-medium-skin-tone',
    c: '1f483-1f3fd'
  },
  {
    n: 'woman-dark-skin-tone',
    c: '1f469-1f3ff'
  },
  {
    n: 'woman-dark-skin-tone-bald',
    c: '1f469-1f3ff-200d-1f9b2'
  },
  {
    n: 'woman-dark-skin-tone-beard',
    c: '1f9d4-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-dark-skin-tone-blond-hair',
    c: '1f471-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-dark-skin-tone-christmas',
    c: '1f469-1f3ff-200d-1f384'
  },
  {
    n: 'woman-dark-skin-tone-curly-hair',
    c: '1f469-1f3ff-200d-1f9b1'
  },
  {
    n: 'woman-dark-skin-tone-red-hair',
    c: '1f469-1f3ff-200d-1f9b0'
  },
  {
    n: 'woman-dark-skin-tone-white-hair',
    c: '1f469-1f3ff-200d-1f9b3'
  },
  {
    n: 'woman-detective',
    c: '1f575-fe0f-200d-2640-fe0f'
  },
  {
    n: 'woman-detective-dark-skin-tone',
    c: '1f575-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-detective-light-skin-tone',
    c: '1f575-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-detective-medium-dark-skin-tone',
    c: '1f575-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-detective-medium-light-skin-tone',
    c: '1f575-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-detective-medium-skin-tone',
    c: '1f575-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-elf',
    c: '1f9dd-200d-2640-fe0f'
  },
  {
    n: 'woman-elf-dark-skin-tone',
    c: '1f9dd-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-elf-light-skin-tone',
    c: '1f9dd-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-elf-medium-dark-skin-tone',
    c: '1f9dd-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-elf-medium-light-skin-tone',
    c: '1f9dd-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-elf-medium-skin-tone',
    c: '1f9dd-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-facepalming',
    c: '1f926-200d-2640-fe0f'
  },
  {
    n: 'woman-facepalming-dark-skin-tone',
    c: '1f926-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-facepalming-light-skin-tone',
    c: '1f926-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-facepalming-medium-dark-skin-tone',
    c: '1f926-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-facepalming-medium-light-skin-tone',
    c: '1f926-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-facepalming-medium-skin-tone',
    c: '1f926-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-factory-worker',
    c: '1f469-200d-1f3ed'
  },
  {
    n: 'woman-factory-worker-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f3ed'
  },
  {
    n: 'woman-factory-worker-light-skin-tone',
    c: '1f469-1f3fb-200d-1f3ed'
  },
  {
    n: 'woman-factory-worker-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f3ed'
  },
  {
    n: 'woman-factory-worker-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f3ed'
  },
  {
    n: 'woman-factory-worker-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f3ed'
  },
  {
    n: 'woman-fairy',
    c: '1f9da-200d-2640-fe0f'
  },
  {
    n: 'woman-fairy-dark-skin-tone',
    c: '1f9da-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-fairy-light-skin-tone',
    c: '1f9da-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-fairy-medium-dark-skin-tone',
    c: '1f9da-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-fairy-medium-light-skin-tone',
    c: '1f9da-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-fairy-medium-skin-tone',
    c: '1f9da-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-farmer',
    c: '1f469-200d-1f33e'
  },
  {
    n: 'woman-farmer-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f33e'
  },
  {
    n: 'woman-farmer-light-skin-tone',
    c: '1f469-1f3fb-200d-1f33e'
  },
  {
    n: 'woman-farmer-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f33e'
  },
  {
    n: 'woman-farmer-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f33e'
  },
  {
    n: 'woman-farmer-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f33e'
  },
  {
    n: 'woman-feeding-baby',
    c: '1f469-200d-1f37c'
  },
  {
    n: 'woman-feeding-baby-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f37c'
  },
  {
    n: 'woman-feeding-baby-light-skin-tone',
    c: '1f469-1f3fb-200d-1f37c'
  },
  {
    n: 'woman-feeding-baby-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f37c'
  },
  {
    n: 'woman-feeding-baby-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f37c'
  },
  {
    n: 'woman-feeding-baby-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f37c'
  },
  {
    n: 'woman-firefighter',
    c: '1f469-200d-1f692'
  },
  {
    n: 'woman-firefighter-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f692'
  },
  {
    n: 'woman-firefighter-light-skin-tone',
    c: '1f469-1f3fb-200d-1f692'
  },
  {
    n: 'woman-firefighter-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f692'
  },
  {
    n: 'woman-firefighter-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f692'
  },
  {
    n: 'woman-firefighter-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f692'
  },
  {
    n: 'woman-frowning',
    c: '1f64d-200d-2640-fe0f'
  },
  {
    n: 'woman-frowning-dark-skin-tone',
    c: '1f64d-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-frowning-light-skin-tone',
    c: '1f64d-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-frowning-medium-dark-skin-tone',
    c: '1f64d-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-frowning-medium-light-skin-tone',
    c: '1f64d-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-frowning-medium-skin-tone',
    c: '1f64d-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-genie',
    c: '1f9de-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-no',
    c: '1f645-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-no-dark-skin-tone',
    c: '1f645-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-no-light-skin-tone',
    c: '1f645-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-no-medium-dark-skin-tone',
    c: '1f645-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-no-medium-light-skin-tone',
    c: '1f645-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-no-medium-skin-tone',
    c: '1f645-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-ok',
    c: '1f646-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-ok-dark-skin-tone',
    c: '1f646-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-ok-light-skin-tone',
    c: '1f646-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-ok-medium-dark-skin-tone',
    c: '1f646-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-ok-medium-light-skin-tone',
    c: '1f646-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-gesturing-ok-medium-skin-tone',
    c: '1f646-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-haircut',
    c: '1f487-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-haircut-dark-skin-tone',
    c: '1f487-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-haircut-light-skin-tone',
    c: '1f487-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-haircut-medium-dark-skin-tone',
    c: '1f487-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-haircut-medium-light-skin-tone',
    c: '1f487-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-haircut-medium-skin-tone',
    c: '1f487-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-massage',
    c: '1f486-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-massage-dark-skin-tone',
    c: '1f486-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-massage-light-skin-tone',
    c: '1f486-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-massage-medium-dark-skin-tone',
    c: '1f486-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-massage-medium-light-skin-tone',
    c: '1f486-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-getting-massage-medium-skin-tone',
    c: '1f486-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-golfing',
    c: '1f3cc-fe0f-200d-2640-fe0f'
  },
  {
    n: 'woman-golfing-dark-skin-tone',
    c: '1f3cc-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-golfing-light-skin-tone',
    c: '1f3cc-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-golfing-medium-dark-skin-tone',
    c: '1f3cc-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-golfing-medium-light-skin-tone',
    c: '1f3cc-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-golfing-medium-skin-tone',
    c: '1f3cc-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-guard',
    c: '1f482-200d-2640-fe0f'
  },
  {
    n: 'woman-guard-dark-skin-tone',
    c: '1f482-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-guard-light-skin-tone',
    c: '1f482-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-guard-medium-dark-skin-tone',
    c: '1f482-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-guard-medium-light-skin-tone',
    c: '1f482-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-guard-medium-skin-tone',
    c: '1f482-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-health-worker',
    c: '1f469-200d-2695-fe0f'
  },
  {
    n: 'woman-health-worker-dark-skin-tone',
    c: '1f469-1f3ff-200d-2695-fe0f'
  },
  {
    n: 'woman-health-worker-light-skin-tone',
    c: '1f469-1f3fb-200d-2695-fe0f'
  },
  {
    n: 'woman-health-worker-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-2695-fe0f'
  },
  {
    n: 'woman-health-worker-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-2695-fe0f'
  },
  {
    n: 'woman-health-worker-medium-skin-tone',
    c: '1f469-1f3fd-200d-2695-fe0f'
  },
  {
    n: 'woman-in-lotus-position',
    c: '1f9d8-200d-2640-fe0f'
  },
  {
    n: 'woman-in-lotus-position-dark-skin-tone',
    c: '1f9d8-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-in-lotus-position-light-skin-tone',
    c: '1f9d8-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-in-lotus-position-medium-dark-skin-tone',
    c: '1f9d8-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-in-lotus-position-medium-light-skin-tone',
    c: '1f9d8-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-in-lotus-position-medium-skin-tone',
    c: '1f9d8-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-in-manual-wheelchair',
    c: '1f469-200d-1f9bd'
  },
  {
    n: 'woman-in-manual-wheelchair-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f9bd'
  },
  {
    n: 'woman-in-manual-wheelchair-light-skin-tone',
    c: '1f469-1f3fb-200d-1f9bd'
  },
  {
    n: 'woman-in-manual-wheelchair-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f9bd'
  },
  {
    n: 'woman-in-manual-wheelchair-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f9bd'
  },
  {
    n: 'woman-in-manual-wheelchair-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f9bd'
  },
  {
    n: 'woman-in-motorized-wheelchair',
    c: '1f469-200d-1f9bc'
  },
  {
    n: 'woman-in-motorized-wheelchair-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f9bc'
  },
  {
    n: 'woman-in-motorized-wheelchair-light-skin-tone',
    c: '1f469-1f3fb-200d-1f9bc'
  },
  {
    n: 'woman-in-motorized-wheelchair-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f9bc'
  },
  {
    n: 'woman-in-motorized-wheelchair-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f9bc'
  },
  {
    n: 'woman-in-motorized-wheelchair-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f9bc'
  },
  {
    n: 'woman-in-steamy-room',
    c: '1f9d6-200d-2640-fe0f'
  },
  {
    n: 'woman-in-steamy-room-dark-skin-tone',
    c: '1f9d6-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-in-steamy-room-light-skin-tone',
    c: '1f9d6-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-in-steamy-room-medium-dark-skin-tone',
    c: '1f9d6-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-in-steamy-room-medium-light-skin-tone',
    c: '1f9d6-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-in-steamy-room-medium-skin-tone',
    c: '1f9d6-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-in-tuxedo',
    c: '1f935-200d-2640-fe0f'
  },
  {
    n: 'woman-in-tuxedo-dark-skin-tone',
    c: '1f935-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-in-tuxedo-light-skin-tone',
    c: '1f935-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-in-tuxedo-medium-dark-skin-tone',
    c: '1f935-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-in-tuxedo-medium-light-skin-tone',
    c: '1f935-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-in-tuxedo-medium-skin-tone',
    c: '1f935-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-judge',
    c: '1f469-200d-2696-fe0f'
  },
  {
    n: 'woman-judge-dark-skin-tone',
    c: '1f469-1f3ff-200d-2696-fe0f'
  },
  {
    n: 'woman-judge-light-skin-tone',
    c: '1f469-1f3fb-200d-2696-fe0f'
  },
  {
    n: 'woman-judge-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-2696-fe0f'
  },
  {
    n: 'woman-judge-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-2696-fe0f'
  },
  {
    n: 'woman-judge-medium-skin-tone',
    c: '1f469-1f3fd-200d-2696-fe0f'
  },
  {
    n: 'woman-juggling',
    c: '1f939-200d-2640-fe0f'
  },
  {
    n: 'woman-juggling-dark-skin-tone',
    c: '1f939-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-juggling-light-skin-tone',
    c: '1f939-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-juggling-medium-dark-skin-tone',
    c: '1f939-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-juggling-medium-light-skin-tone',
    c: '1f939-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-juggling-medium-skin-tone',
    c: '1f939-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-kneeling',
    c: '1f9ce-200d-2640-fe0f'
  },
  {
    n: 'woman-kneeling-dark-skin-tone',
    c: '1f9ce-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-kneeling-light-skin-tone',
    c: '1f9ce-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-kneeling-medium-dark-skin-tone',
    c: '1f9ce-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-kneeling-medium-light-skin-tone',
    c: '1f9ce-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-kneeling-medium-skin-tone',
    c: '1f9ce-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-lifting-weights',
    c: '1f3cb-fe0f-200d-2640-fe0f'
  },
  {
    n: 'woman-lifting-weights-dark-skin-tone',
    c: '1f3cb-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-lifting-weights-light-skin-tone',
    c: '1f3cb-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-lifting-weights-medium-dark-skin-tone',
    c: '1f3cb-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-lifting-weights-medium-light-skin-tone',
    c: '1f3cb-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-lifting-weights-medium-skin-tone',
    c: '1f3cb-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-light-skin-tone',
    c: '1f469-1f3fb'
  },
  {
    n: 'woman-light-skin-tone-bald',
    c: '1f469-1f3fb-200d-1f9b2'
  },
  {
    n: 'woman-light-skin-tone-beard',
    c: '1f9d4-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-light-skin-tone-blond-hair',
    c: '1f471-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-light-skin-tone-christmas',
    c: '1f469-1f3fb-200d-1f384'
  },
  {
    n: 'woman-light-skin-tone-curly-hair',
    c: '1f469-1f3fb-200d-1f9b1'
  },
  {
    n: 'woman-light-skin-tone-red-hair',
    c: '1f469-1f3fb-200d-1f9b0'
  },
  {
    n: 'woman-light-skin-tone-white-hair',
    c: '1f469-1f3fb-200d-1f9b3'
  },
  {
    n: 'woman-mage',
    c: '1f9d9-200d-2640-fe0f'
  },
  {
    n: 'woman-mage-dark-skin-tone',
    c: '1f9d9-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-mage-light-skin-tone',
    c: '1f9d9-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-mage-medium-dark-skin-tone',
    c: '1f9d9-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-mage-medium-light-skin-tone',
    c: '1f9d9-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-mage-medium-skin-tone',
    c: '1f9d9-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-mechanic',
    c: '1f469-200d-1f527'
  },
  {
    n: 'woman-mechanic-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f527'
  },
  {
    n: 'woman-mechanic-light-skin-tone',
    c: '1f469-1f3fb-200d-1f527'
  },
  {
    n: 'woman-mechanic-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f527'
  },
  {
    n: 'woman-mechanic-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f527'
  },
  {
    n: 'woman-mechanic-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f527'
  },
  {
    n: 'woman-medium-dark-skin-tone',
    c: '1f469-1f3fe'
  },
  {
    n: 'woman-medium-dark-skin-tone-bald',
    c: '1f469-1f3fe-200d-1f9b2'
  },
  {
    n: 'woman-medium-dark-skin-tone-beard',
    c: '1f9d4-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-medium-dark-skin-tone-blond-hair',
    c: '1f471-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-medium-dark-skin-tone-christmas',
    c: '1f469-1f3fe-200d-1f384'
  },
  {
    n: 'woman-medium-dark-skin-tone-curly-hair',
    c: '1f469-1f3fe-200d-1f9b1'
  },
  {
    n: 'woman-medium-dark-skin-tone-red-hair',
    c: '1f469-1f3fe-200d-1f9b0'
  },
  {
    n: 'woman-medium-dark-skin-tone-white-hair',
    c: '1f469-1f3fe-200d-1f9b3'
  },
  {
    n: 'woman-medium-light-skin-tone',
    c: '1f469-1f3fc'
  },
  {
    n: 'woman-medium-light-skin-tone-bald',
    c: '1f469-1f3fc-200d-1f9b2'
  },
  {
    n: 'woman-medium-light-skin-tone-beard',
    c: '1f9d4-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-medium-light-skin-tone-blond-hair',
    c: '1f471-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-medium-light-skin-tone-christmas',
    c: '1f469-1f3fc-200d-1f384'
  },
  {
    n: 'woman-medium-light-skin-tone-curly-hair',
    c: '1f469-1f3fc-200d-1f9b1'
  },
  {
    n: 'woman-medium-light-skin-tone-red-hair',
    c: '1f469-1f3fc-200d-1f9b0'
  },
  {
    n: 'woman-medium-light-skin-tone-white-hair',
    c: '1f469-1f3fc-200d-1f9b3'
  },
  {
    n: 'woman-medium-skin-tone',
    c: '1f469-1f3fd'
  },
  {
    n: 'woman-medium-skin-tone-bald',
    c: '1f469-1f3fd-200d-1f9b2'
  },
  {
    n: 'woman-medium-skin-tone-beard',
    c: '1f9d4-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-medium-skin-tone-blond-hair',
    c: '1f471-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-medium-skin-tone-christmas',
    c: '1f469-1f3fd-200d-1f384'
  },
  {
    n: 'woman-medium-skin-tone-curly-hair',
    c: '1f469-1f3fd-200d-1f9b1'
  },
  {
    n: 'woman-medium-skin-tone-red-hair',
    c: '1f469-1f3fd-200d-1f9b0'
  },
  {
    n: 'woman-medium-skin-tone-white-hair',
    c: '1f469-1f3fd-200d-1f9b3'
  },
  {
    n: 'woman-mountain-biking',
    c: '1f6b5-200d-2640-fe0f'
  },
  {
    n: 'woman-mountain-biking-dark-skin-tone',
    c: '1f6b5-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-mountain-biking-light-skin-tone',
    c: '1f6b5-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-mountain-biking-medium-dark-skin-tone',
    c: '1f6b5-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-mountain-biking-medium-light-skin-tone',
    c: '1f6b5-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-mountain-biking-medium-skin-tone',
    c: '1f6b5-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-office-worker',
    c: '1f469-200d-1f4bc'
  },
  {
    n: 'woman-office-worker-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f4bc'
  },
  {
    n: 'woman-office-worker-light-skin-tone',
    c: '1f469-1f3fb-200d-1f4bc'
  },
  {
    n: 'woman-office-worker-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f4bc'
  },
  {
    n: 'woman-office-worker-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f4bc'
  },
  {
    n: 'woman-office-worker-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f4bc'
  },
  {
    n: 'woman-pilot',
    c: '1f469-200d-2708-fe0f'
  },
  {
    n: 'woman-pilot-dark-skin-tone',
    c: '1f469-1f3ff-200d-2708-fe0f'
  },
  {
    n: 'woman-pilot-light-skin-tone',
    c: '1f469-1f3fb-200d-2708-fe0f'
  },
  {
    n: 'woman-pilot-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-2708-fe0f'
  },
  {
    n: 'woman-pilot-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-2708-fe0f'
  },
  {
    n: 'woman-pilot-medium-skin-tone',
    c: '1f469-1f3fd-200d-2708-fe0f'
  },
  {
    n: 'woman-playing-handball',
    c: '1f93e-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-handball-dark-skin-tone',
    c: '1f93e-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-handball-light-skin-tone',
    c: '1f93e-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-handball-medium-dark-skin-tone',
    c: '1f93e-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-handball-medium-light-skin-tone',
    c: '1f93e-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-handball-medium-skin-tone',
    c: '1f93e-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-water-polo',
    c: '1f93d-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-water-polo-dark-skin-tone',
    c: '1f93d-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-water-polo-light-skin-tone',
    c: '1f93d-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-water-polo-medium-dark-skin-tone',
    c: '1f93d-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-water-polo-medium-light-skin-tone',
    c: '1f93d-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-playing-water-polo-medium-skin-tone',
    c: '1f93d-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-police-officer',
    c: '1f46e-200d-2640-fe0f'
  },
  {
    n: 'woman-police-officer-dark-skin-tone',
    c: '1f46e-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-police-officer-light-skin-tone',
    c: '1f46e-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-police-officer-medium-dark-skin-tone',
    c: '1f46e-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-police-officer-medium-light-skin-tone',
    c: '1f46e-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-police-officer-medium-skin-tone',
    c: '1f46e-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-pouting',
    c: '1f64e-200d-2640-fe0f'
  },
  {
    n: 'woman-pouting-dark-skin-tone',
    c: '1f64e-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-pouting-light-skin-tone',
    c: '1f64e-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-pouting-medium-dark-skin-tone',
    c: '1f64e-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-pouting-medium-light-skin-tone',
    c: '1f64e-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-pouting-medium-skin-tone',
    c: '1f64e-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-raising-hand',
    c: '1f64b-200d-2640-fe0f'
  },
  {
    n: 'woman-raising-hand-dark-skin-tone',
    c: '1f64b-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-raising-hand-light-skin-tone',
    c: '1f64b-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-raising-hand-medium-dark-skin-tone',
    c: '1f64b-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-raising-hand-medium-light-skin-tone',
    c: '1f64b-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-raising-hand-medium-skin-tone',
    c: '1f64b-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-red-hair',
    c: '1f469-200d-1f9b0'
  },
  {
    n: 'woman-rowing-boat',
    c: '1f6a3-200d-2640-fe0f'
  },
  {
    n: 'woman-rowing-boat-dark-skin-tone',
    c: '1f6a3-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-rowing-boat-light-skin-tone',
    c: '1f6a3-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-rowing-boat-medium-dark-skin-tone',
    c: '1f6a3-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-rowing-boat-medium-light-skin-tone',
    c: '1f6a3-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-rowing-boat-medium-skin-tone',
    c: '1f6a3-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-running',
    c: '1f3c3-200d-2640-fe0f'
  },
  {
    n: 'woman-running-dark-skin-tone',
    c: '1f3c3-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-running-light-skin-tone',
    c: '1f3c3-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-running-medium-dark-skin-tone',
    c: '1f3c3-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-running-medium-light-skin-tone',
    c: '1f3c3-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-running-medium-skin-tone',
    c: '1f3c3-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-s-boot',
    c: '1f462'
  },
  {
    n: 'woman-s-clothes',
    c: '1f45a'
  },
  {
    n: 'woman-s-hat',
    c: '1f452'
  },
  {
    n: 'woman-s-sandal',
    c: '1f461'
  },
  {
    n: 'woman-scientist',
    c: '1f469-200d-1f52c'
  },
  {
    n: 'woman-scientist-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f52c'
  },
  {
    n: 'woman-scientist-light-skin-tone',
    c: '1f469-1f3fb-200d-1f52c'
  },
  {
    n: 'woman-scientist-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f52c'
  },
  {
    n: 'woman-scientist-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f52c'
  },
  {
    n: 'woman-scientist-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f52c'
  },
  {
    n: 'woman-shrugging',
    c: '1f937-200d-2640-fe0f'
  },
  {
    n: 'woman-shrugging-dark-skin-tone',
    c: '1f937-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-shrugging-light-skin-tone',
    c: '1f937-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-shrugging-medium-dark-skin-tone',
    c: '1f937-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-shrugging-medium-light-skin-tone',
    c: '1f937-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-shrugging-medium-skin-tone',
    c: '1f937-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-singer',
    c: '1f469-200d-1f3a4'
  },
  {
    n: 'woman-singer-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f3a4'
  },
  {
    n: 'woman-singer-light-skin-tone',
    c: '1f469-1f3fb-200d-1f3a4'
  },
  {
    n: 'woman-singer-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f3a4'
  },
  {
    n: 'woman-singer-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f3a4'
  },
  {
    n: 'woman-singer-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f3a4'
  },
  {
    n: 'woman-standing',
    c: '1f9cd-200d-2640-fe0f'
  },
  {
    n: 'woman-standing-dark-skin-tone',
    c: '1f9cd-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-standing-light-skin-tone',
    c: '1f9cd-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-standing-medium-dark-skin-tone',
    c: '1f9cd-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-standing-medium-light-skin-tone',
    c: '1f9cd-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-standing-medium-skin-tone',
    c: '1f9cd-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-student',
    c: '1f469-200d-1f393'
  },
  {
    n: 'woman-student-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f393'
  },
  {
    n: 'woman-student-light-skin-tone',
    c: '1f469-1f3fb-200d-1f393'
  },
  {
    n: 'woman-student-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f393'
  },
  {
    n: 'woman-student-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f393'
  },
  {
    n: 'woman-student-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f393'
  },
  {
    n: 'woman-superhero',
    c: '1f9b8-200d-2640-fe0f'
  },
  {
    n: 'woman-superhero-dark-skin-tone',
    c: '1f9b8-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-superhero-light-skin-tone',
    c: '1f9b8-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-superhero-medium-dark-skin-tone',
    c: '1f9b8-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-superhero-medium-light-skin-tone',
    c: '1f9b8-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-superhero-medium-skin-tone',
    c: '1f9b8-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-supervillain',
    c: '1f9b9-200d-2640-fe0f'
  },
  {
    n: 'woman-supervillain-dark-skin-tone',
    c: '1f9b9-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-supervillain-light-skin-tone',
    c: '1f9b9-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-supervillain-medium-dark-skin-tone',
    c: '1f9b9-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-supervillain-medium-light-skin-tone',
    c: '1f9b9-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-supervillain-medium-skin-tone',
    c: '1f9b9-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-surfing',
    c: '1f3c4-200d-2640-fe0f'
  },
  {
    n: 'woman-surfing-dark-skin-tone',
    c: '1f3c4-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-surfing-light-skin-tone',
    c: '1f3c4-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-surfing-medium-dark-skin-tone',
    c: '1f3c4-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-surfing-medium-light-skin-tone',
    c: '1f3c4-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-surfing-medium-skin-tone',
    c: '1f3c4-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-swimming',
    c: '1f3ca-200d-2640-fe0f'
  },
  {
    n: 'woman-swimming-dark-skin-tone',
    c: '1f3ca-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-swimming-light-skin-tone',
    c: '1f3ca-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-swimming-medium-dark-skin-tone',
    c: '1f3ca-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-swimming-medium-light-skin-tone',
    c: '1f3ca-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-swimming-medium-skin-tone',
    c: '1f3ca-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-teacher',
    c: '1f469-200d-1f3eb'
  },
  {
    n: 'woman-teacher-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f3eb'
  },
  {
    n: 'woman-teacher-light-skin-tone',
    c: '1f469-1f3fb-200d-1f3eb'
  },
  {
    n: 'woman-teacher-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f3eb'
  },
  {
    n: 'woman-teacher-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f3eb'
  },
  {
    n: 'woman-teacher-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f3eb'
  },
  {
    n: 'woman-technologist',
    c: '1f469-200d-1f4bb'
  },
  {
    n: 'woman-technologist-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f4bb'
  },
  {
    n: 'woman-technologist-light-skin-tone',
    c: '1f469-1f3fb-200d-1f4bb'
  },
  {
    n: 'woman-technologist-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f4bb'
  },
  {
    n: 'woman-technologist-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f4bb'
  },
  {
    n: 'woman-technologist-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f4bb'
  },
  {
    n: 'woman-tipping-hand',
    c: '1f481-200d-2640-fe0f'
  },
  {
    n: 'woman-tipping-hand-dark-skin-tone',
    c: '1f481-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-tipping-hand-light-skin-tone',
    c: '1f481-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-tipping-hand-medium-dark-skin-tone',
    c: '1f481-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-tipping-hand-medium-light-skin-tone',
    c: '1f481-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-tipping-hand-medium-skin-tone',
    c: '1f481-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-vampire',
    c: '1f9db-200d-2640-fe0f'
  },
  {
    n: 'woman-vampire-dark-skin-tone',
    c: '1f9db-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-vampire-light-skin-tone',
    c: '1f9db-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-vampire-medium-dark-skin-tone',
    c: '1f9db-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-vampire-medium-light-skin-tone',
    c: '1f9db-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-vampire-medium-skin-tone',
    c: '1f9db-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-walking',
    c: '1f6b6-200d-2640-fe0f'
  },
  {
    n: 'woman-walking-dark-skin-tone',
    c: '1f6b6-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-walking-light-skin-tone',
    c: '1f6b6-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-walking-medium-dark-skin-tone',
    c: '1f6b6-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-walking-medium-light-skin-tone',
    c: '1f6b6-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-walking-medium-skin-tone',
    c: '1f6b6-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-wearing-turban',
    c: '1f473-200d-2640-fe0f'
  },
  {
    n: 'woman-wearing-turban-dark-skin-tone',
    c: '1f473-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-wearing-turban-light-skin-tone',
    c: '1f473-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-wearing-turban-medium-dark-skin-tone',
    c: '1f473-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-wearing-turban-medium-light-skin-tone',
    c: '1f473-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-wearing-turban-medium-skin-tone',
    c: '1f473-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-white-hair',
    c: '1f469-200d-1f9b3'
  },
  {
    n: 'woman-with-headscarf',
    c: '1f9d5'
  },
  {
    n: 'woman-with-headscarf-dark-skin-tone',
    c: '1f9d5-1f3ff'
  },
  {
    n: 'woman-with-headscarf-light-skin-tone',
    c: '1f9d5-1f3fb'
  },
  {
    n: 'woman-with-headscarf-medium-dark-skin-tone',
    c: '1f9d5-1f3fe'
  },
  {
    n: 'woman-with-headscarf-medium-light-skin-tone',
    c: '1f9d5-1f3fc'
  },
  {
    n: 'woman-with-headscarf-medium-skin-tone',
    c: '1f9d5-1f3fd'
  },
  {
    n: 'woman-with-veil',
    c: '1f470-200d-2640-fe0f'
  },
  {
    n: 'woman-with-veil-dark-skin-tone',
    c: '1f470-1f3ff-200d-2640-fe0f'
  },
  {
    n: 'woman-with-veil-light-skin-tone',
    c: '1f470-1f3fb-200d-2640-fe0f'
  },
  {
    n: 'woman-with-veil-medium-dark-skin-tone',
    c: '1f470-1f3fe-200d-2640-fe0f'
  },
  {
    n: 'woman-with-veil-medium-light-skin-tone',
    c: '1f470-1f3fc-200d-2640-fe0f'
  },
  {
    n: 'woman-with-veil-medium-skin-tone',
    c: '1f470-1f3fd-200d-2640-fe0f'
  },
  {
    n: 'woman-with-white-cane',
    c: '1f469-200d-1f9af'
  },
  {
    n: 'woman-with-white-cane-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f9af'
  },
  {
    n: 'woman-with-white-cane-light-skin-tone',
    c: '1f469-1f3fb-200d-1f9af'
  },
  {
    n: 'woman-with-white-cane-medium-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f9af'
  },
  {
    n: 'woman-with-white-cane-medium-light-skin-tone',
    c: '1f469-1f3fc-200d-1f9af'
  },
  {
    n: 'woman-with-white-cane-medium-skin-tone',
    c: '1f469-1f3fd-200d-1f9af'
  },
  {
    n: 'woman-zombie',
    c: '1f9df-200d-2640-fe0f'
  },
  {
    n: 'women-holding-hands',
    c: '1f46d'
  },
  {
    n: 'women-holding-hands-dark-skin-tone',
    c: '1f46d-1f3ff'
  },
  {
    n: 'women-holding-hands-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    n: 'women-holding-hands-dark-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    n: 'women-holding-hands-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    n: 'women-holding-hands-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3ff-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    n: 'women-holding-hands-light-skin-tone',
    c: '1f46d-1f3fb'
  },
  {
    n: 'women-holding-hands-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    n: 'women-holding-hands-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    n: 'women-holding-hands-light-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    n: 'women-holding-hands-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fb-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    n: 'women-holding-hands-medium-dark-skin-tone',
    c: '1f46d-1f3fe'
  },
  {
    n: 'women-holding-hands-medium-dark-skin-tone-dark-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    n: 'women-holding-hands-medium-dark-skin-tone-light-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    n: 'women-holding-hands-medium-dark-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    n: 'women-holding-hands-medium-dark-skin-tone-medium-skin-tone',
    c: '1f469-1f3fe-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    n: 'women-holding-hands-medium-light-skin-tone',
    c: '1f46d-1f3fc'
  },
  {
    n: 'women-holding-hands-medium-light-skin-tone-dark-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    n: 'women-holding-hands-medium-light-skin-tone-light-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    n: 'women-holding-hands-medium-light-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    n: 'women-holding-hands-medium-light-skin-tone-medium-skin-tone',
    c: '1f469-1f3fc-200d-1f91d-200d-1f469-1f3fd'
  },
  {
    n: 'women-holding-hands-medium-skin-tone',
    c: '1f46d-1f3fd'
  },
  {
    n: 'women-holding-hands-medium-skin-tone-dark-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3ff'
  },
  {
    n: 'women-holding-hands-medium-skin-tone-light-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fb'
  },
  {
    n: 'women-holding-hands-medium-skin-tone-medium-dark-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fe'
  },
  {
    n: 'women-holding-hands-medium-skin-tone-medium-light-skin-tone',
    c: '1f469-1f3fd-200d-1f91d-200d-1f469-1f3fc'
  },
  {
    n: 'women-s-room',
    c: '1f6ba'
  },
  {
    n: 'women-with-bunny-ears',
    c: '1f46f-200d-2640-fe0f'
  },
  {
    n: 'women-wrestling',
    c: '1f93c-200d-2640-fe0f'
  },
  {
    n: 'wood',
    c: '1fab5'
  },
  {
    n: 'woozy-face',
    c: '1f974'
  },
  {
    n: 'world-map',
    c: '1f5fa'
  },
  {
    n: 'worm',
    c: '1fab1'
  },
  {
    n: 'worried-face',
    c: '1f61f'
  },
  {
    n: 'wrapped-gift',
    c: '1f381'
  },
  {
    n: 'wrench',
    c: '1f527'
  },
  {
    n: 'writing-hand',
    c: '270d'
  },
  {
    n: 'writing-hand-dark-skin-tone',
    c: '270d-1f3ff'
  },
  {
    n: 'writing-hand-light-skin-tone',
    c: '270d-1f3fb'
  },
  {
    n: 'writing-hand-medium-dark-skin-tone',
    c: '270d-1f3fe'
  },
  {
    n: 'writing-hand-medium-light-skin-tone',
    c: '270d-1f3fc'
  },
  {
    n: 'writing-hand-medium-skin-tone',
    c: '270d-1f3fd'
  },
  {
    n: 'yarn',
    c: '1f9f6'
  },
  {
    n: 'yawning-face',
    c: '1f971'
  },
  {
    n: 'yellow-circle',
    c: '1f7e1'
  },
  {
    n: 'yellow-heart',
    c: '1f49b'
  },
  {
    n: 'yellow-square',
    c: '1f7e8'
  },
  {
    n: 'yen-banknote',
    c: '1f4b4'
  },
  {
    n: 'yin-yang',
    c: '262f'
  },
  {
    n: 'yo-yo',
    c: '1fa80'
  },
  {
    n: 'zany-face',
    c: '1f92a'
  },
  {
    n: 'zebra',
    c: '1f993'
  },
  {
    n: 'zipper-mouth-face',
    c: '1f910'
  },
  {
    n: 'zombie',
    c: '1f9df'
  },
  {
    n: 'zzz',
    c: '1f4a4'
  },
]

const twe = document.querySelectorAll('.twe')

// get amount of emojis
let amountOfEmojis = twe.length

// loop through all and add default style
while (amountOfEmojis--) {
  twe[amountOfEmojis].style.display = 'inline-block'
  twe[amountOfEmojis].style.height = '1em'
  twe[amountOfEmojis].style.width = '1em'
  twe[amountOfEmojis].style.margin = '0 .05em 0 .1em'
  twe[amountOfEmojis].style.verticalAlign = '-0.1em'
  twe[amountOfEmojis].style.backgroundRepeat = 'no-repeat'
  twe[amountOfEmojis].style.backgroundPosition = 'center center'
  twe[amountOfEmojis].style.backgroundSize = '1em 1em'

  const name = twe[amountOfEmojis].classList[1].replace('twe-', '')
  const emoji = emojis.find(emoji => emoji.n == name)

  twe[amountOfEmojis].style.background = `url(https://cdn.jsdelivr.net/npm/@twe/x/${emoji.c}.svg)`
}