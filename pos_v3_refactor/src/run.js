
run();

function run() {
    var collections = [
        { 'ITEM000000' : 20 },
        { 'ITEM000010' : 30 },
        { 'ITEM000001' : 30 },
        { 'ITEM000007' : 40 },
        { 'ITEM000003' : 8  },
        { 'ITEM000002' : 14 }
    ];
    var strategyType = '4';
    printInventory(collections, strategyType);
}