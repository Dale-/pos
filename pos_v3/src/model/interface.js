var Interface = function(name, methods) {

    if(arguments.length != 2) {
        throw new Error('Interface constructor call with ' + arguments.length +
                        'arguments, but expected exactly 2');
    }

    this.name = name;
    this.methods = [];
    for(var i = 0, len = methods.length; i < len; i++) {
        if(typeof methods[i] !== 'string') {
            throw new Error('Interface constructor expects method names to be' +
                            'passed in as a string')
        }
        this.methods.push(methods[i]);
    }
};