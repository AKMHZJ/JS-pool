export const getArchitects = () => {
  let test = Array.from(document.querySelectorAll("a"))
  let test2 = Array.from(document.querySelectorAll("body > *:not(a)"))
  return [test, test2]
}


export const getClassical = () => {
  let test = Array.from(document.querySelectorAll("a.classical"))
  let test2 = Array.from(document.querySelectorAll("body > *:not(a.classical)"))
  return [test, test2]
}

export const getActive = () => {
  let test = Array.from(document.querySelectorAll("a.classical.active"))
  let test2 = Array.from(document.querySelectorAll("body > *:not(a.classical.active)"))
  return [test, test2]
}

export const getBonannoPisano = () => {
  let test = document.getElementById("BonannoPisano");
  let test2 = Array.from(document.querySelectorAll("a.classical.active"));
  return [test, test2];
};