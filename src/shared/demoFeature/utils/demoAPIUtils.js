let items = [
    {id: 1, title: 'iPad Air', price: 100.99},
    {id: 2, title: 'iPad Air 2', price: 200.99}
];

export function getDemoItems () {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(items);
        }, 500);
    });
}
