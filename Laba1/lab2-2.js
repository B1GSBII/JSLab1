function isIPAddress(ip) {
    const ipPattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    return ipPattern.test(ip);
  }

  function findRGBA(text) {
    const rgbaPattern = /rgba\((\d{1,3}), (\d{1,3}), (\d{1,3}), (0|1|0\.\d+)\)/;
    const match = text.match(rgbaPattern);
    return match ? match[0] : null;
  }

  function findHexColor(text) {
    const hexPattern = /#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/;
    const match = text.match(hexPattern);
    return match ? match[0] : null;
  }
  
  function findTags(text, tag) {
    const tagPattern = new RegExp(`<${tag}[^>]*>`, 'g');
    return text.match(tagPattern) || [];
  }
  
  function findPosNum(text) {
    const numPattern = /\b\d+\b/g;
    const matches = text.match(numPattern);
    return matches ? matches.map(Number).filter(num => num > 0) : [];
  }

  function findDates(text) {
    const datePattern = /\b\d{4}-\d{2}-\d{2}\b/g;
    return text.match(datePattern) || [];
  }
  
  function findEmail(text) {
    const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
    return text.match(emailPattern) || [];
  }
console.log ("Пошук IP адреси: ");
console.log(isIPAddress("188.132.5.8"));
console.log ("Пошук RGBA: ");
console.log(findRGBA("background-color: rgba(10, 178, 230, 0.5);"));
console.log ("Пошук кольору: ");
console.log(findHexColor("color: #FF0000;"));
console.log ("Пошук тегів: ");
console.log(findTags("<p> Неля </p> завжди </p> буде </p> найкращою.", "p"));
console.log ("Пошук позитивних чисел: ");
console.log(findPosNum("100 82 -100 0 42"));
console.log ("Пошук дат: ");
console.log(findDates("2007-07-24"));
console.log ("Пошук email: ");
console.log(findEmail("PROleg227@gmail.com"));