module.exports = (template, replaceField) => fieldName =>
    JSON.stringify(template).replace(new RegExp(`\\${replaceField}`, 'gm'), fieldName);
