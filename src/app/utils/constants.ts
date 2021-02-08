
export function getIds(string) {
    
    let tmp = string.split("");
    let map = tmp.map((current) => {
      if (!isNaN(parseInt(current))) {
        return current;
      }
    });
  
    let numbers = map.filter((value) => {
      return value != undefined;
    });
  
    return numbers.join("");
}