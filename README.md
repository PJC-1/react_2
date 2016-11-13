## Some notes:
1.  In order to use 'this' in the correct context, we have to utilize `.bind` when we use the `.setState` method. `.bind(this)` takes the context of `this` from outside the function (which is the component) and makes that context available for use inside the function.
