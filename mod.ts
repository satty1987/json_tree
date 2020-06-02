

function makePrefix(key: any, last: any) {
    let str = (last ? '└' : '├');
    if (key) {
        str += '─ ';
    } else {
        str += '──┐';
    }
    return str;
}

function filterKeys(obj: any, hideFunctions: any) {
    let keys = [];
    for (let branch in obj) {
        if (!obj.hasOwnProperty(branch)) {
            continue;
        }
        if (hideFunctions && ((typeof obj[branch]) === "function")) {
            continue;
        }
        keys.push(branch);
    }
    return keys;
}

function growBranch(key: any, root: any, last: any, lastStates: any, showValues: any, hideFunctions: any, callback: any) {
    let line = '', index = 0, lastKey, circular: any, lastStatesCopy = lastStates.slice(0);

    if (lastStatesCopy.push([root, last]) && lastStates.length > 0) {
        lastStates.forEach(function (lastState: any, idx: any) {
            if (idx > 0) {
                line += (lastState[1] ? ' ' : '│') + '  ';
            }
            if (!circular && lastState[0] === root) {
                circular = true;
            }
        });
        line += makePrefix(key, last) + key;
        showValues && (typeof root !== 'object' || root instanceof Date) && (line += ': ' + root);
        circular && (line += ' (circular ref.)');

        callback(line);
    }

    if (!circular && typeof root === 'object') {
        let keys = filterKeys(root, hideFunctions);
        keys.forEach(function (branch) {
            lastKey = ++index === keys.length;
            growBranch(branch, root[branch], lastKey, lastStatesCopy, showValues, hideFunctions, callback);
        });
    }
};

let jsonTree = function (obj: any, showValues: any, hideFunctions?: any) {
    let tree = '';
    growBranch('.', obj, false, [], showValues, hideFunctions, function (line: any) {
        tree += line + '\n';
    });
    return tree;
};

export {jsonTree};