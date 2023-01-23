let famousWords = "Seven years ago...";
famousWords = "Four score and " + famousWords;
console.log(famousWords);

famousWords = "Seven years ago...";
famousWords = `Four score and ${famousWords}`;
console.log(famousWords);

"Four score and " + famousWords;

"Four score and ".concat(famousWords);