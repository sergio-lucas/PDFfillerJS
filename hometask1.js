function difference(arr, itemsToExclude) {
    return arr.filter( ( exclude ) => {
      return itemsToExclude.indexOf( exclude ) < 0;
    } );
  }
difference([2, 1, 5], [2, 3]) 
function groupBy(array, value) {
    return array.reduce(function (prev, curr) {
      prev[curr[value]] = prev[curr[value]] || []; // if undefined => create object key with empty array value
      prev[curr[value]].push(curr);
      return prev;
  }, {});
}
  
  groupBy([{ gender: 'male', name: 'Max'}, { gender: 'male', name: 'Fred'},
  { gender: 'female', name: 'Jane'}], 'gender'); 
  
function flatten(array) {
    return array.reduce((prev, current) => {
      return prev.concat(current);
    }, []);
}
  
flatten([1, [2, [3, [4]], 5]]);
  
function uniq(array) {
    var uniqItems = []
    for (let index = 0; index < array.length; index++) {
      if ( uniqItems.indexOf(array[index]) < 0) {
        uniqItems.push(array[index])
      }
    }
    return uniqItems;
}
  
uniq([2, 1, 2]); // => [2, 1]

function chunk(array, size) {
    let chunkedArrays = [],
        newArray = [...array];
    while (newArray.length) {
      chunkedArrays.push(newArray.splice(0, size));
    }
    return chunkedArrays;
}
  
chunk(['a', 'b', 'c', 'd'], 2); // => [['a', 'b'], ['c', 'd']]