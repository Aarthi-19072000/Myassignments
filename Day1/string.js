// Classroom Assignment - Strings in JS

function reverseString(str) {
    let characters = str.split("");
    let reverse = "";

    for (let i = characters.length - 1; i >= 0; i--) {
        reverse = reverse + characters[i];
    }

    console.log(reverse);
}

reverseString("hello");