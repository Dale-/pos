var characters = [
{ 'name': 'barney',  'age': 36, 'blocked': false },
{ 'name': 'fred',    'age': 40, 'blocked': true },
{ 'name': 'pebbles', 'age': 1,  'blocked': false }
];
_.find(characters, 'blocked');
