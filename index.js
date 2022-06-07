function receivesAFunction(callback)
{
    callback();
}
 function returnsANamedFunction(name)
 {
    return function elections()
    {
        return `Election year 2022`;
    }
}
function returnsAnAnonymousFunction(){
    return function(){
        return `Hello guys`;
    }
}