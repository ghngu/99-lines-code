var friends = ['Zellie', 'Haley', 'Josh', 'Heather', 'Garret'];
var verse3 = i + ' line of code in the file, ' + i + ' line of code; ' + friends[z] + ' strikes one out, clears it all out, no more lines of code in the file';
var verse2 = i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[z] + ' strikes one out, clears one out, ' + (i - 1) + ' line of code in the file';
var verse1 = i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[z] + ' strikes one out, clears one out, ' + (i - 1) + ' lines of code in the file';

for(var z = 0; z < friends.length; z++)  {
    for(var i = 99; i > 0; i--) {
        if(i > 2) {
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[z] + ' strikes one out, clears one out, ' + (i - 1) + ' lines of code in the file');
        } else if (i === 2) {
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[z] + ' strikes one out, clears one out, ' + (i - 1) + ' line of code in the file');
        } else {
            console.log(i + ' lines of code in the file, ' + i + ' lines of code; ' + friends[z] + ' strikes one out, clears one out, no more lines of code in the file');
        }
    }  
}