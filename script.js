let textbox = document.getElementById('textbox');

textbox.addEventListener('input', function() {
    var text = this.value;
    var char = text.length;
    document.getElementById("char").innerHTML = char;

    let words = text.split(" ").filter(function(word) {
        return word.length > 0; // Exclude empty words
    });
    document.getElementById("word").innerHTML = words.length;
    console.log(words);
});
