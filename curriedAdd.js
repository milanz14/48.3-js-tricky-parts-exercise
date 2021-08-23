const curriedAdd = (total = 0) => {
    return function add(num) {
        if (!num) return total;
        total += num;
        return add;
    };
};
