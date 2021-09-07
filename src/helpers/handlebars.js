const Handlebars = require('handlebars');

module.exports = {
    sum: (a, b) => a + b,
    sortable: (fieldName, sort) => {
        const sortType = fieldName === sort.column ? sort.type : 'default';
        const icons = {
            default: 'oi oi-elevator',
            asc: 'oi oi-sort-ascending',
            desc: 'oi oi-sort-descending',
        };
        const types = {
            default: 'desc',
            asc: 'desc',
            desc: 'asc',
        };

        const icon = icons[sortType];
        const type = types[sortType];

        const href = Handlebars.escapeExpression(
            `?_sort&column=${fieldName}&type=${type}`,
        );

        // cho lần sort tiếp theo
        const output = `<a href="${href}">
                    <span class="${icon}"></span>
                </a>`;
        return new Handlebars.SafeString(output);
    },
};
