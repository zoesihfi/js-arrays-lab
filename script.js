//Exercise One
console.log("Exercise One:")
    //Create new file called Prompts.JS
    //Read the steps below and code:

        //Declare an array named songs that contains five different names of songs as strings.
        var songs = ['Rosa Parks', 'Ms. Jackson', 'Hey Ya!', 'B.O.B', 'SpottieOttieDopaliscious'];
        //Access the first song in the array and print it to the console
        console.log(`The first song in the array is ${songs[0]}`)
        //Now do the same with the third song in the array.
        console.log(`The third song in the array is ${songs[2]}`)
        //Write one line of code that changes the value of the last song in 
        //the array to "Happy" (overwriting the previous value).
        songs.push('Happy');
        //Create a new variable called jamFour and set it 
        //equal to the fourth song in the array.
        var jamFour = songs[3]
        //Add another song to the end of the array.
        songs.push('The Way You Move')
        //Add another song to the beginning of the array.
        songs.unshift('Roses')
        //Print the length of the array to the console.
        console.log(songs.length)
        //Remove the last song from the end of array, and then print the 
        //length of the array to the console one more time.
        songs.push()
        console.log(songs)
        //Write a for loop to iterate through every song in the array and 
        //print each song's value to the console.
        for(var i=0; i < songs.length; i++) {
            console.log(songs[i])
        }
        //Copying from that loop you just wrote, modify it to print 
        //every song's value and every song's index in this format: 3, 
        //"Office Theme" or 0, "Billy Jean" etc.
        for(var i=0; i < songs.length; i++) {
            console.log(`${songs.indexOf(i)}, ${songs[i]}`)
        }
        //Declare a variable named lastSong that will always point to 
        //the last element of the songs array, no matter how many songs 
        //are in the array.
        var lastSong = songs.length-1
        console.log(songs[lastSong])

    //Exercise Two
        //Declare an array of at least 6 integers. Create a function that will sort the integer array in ascending and descending order.
        var numbers = [0, 1, 2, 3, 4, 5]

        function sorting(arr) {
            var descending = arr.sort(function(a, b){return a-b});
            var ascending = arr.sort(function(a, b){return b-a});
            return(`Array in ascending ${ascending} order. Array in descending ${descending} order.`)
        }
    
        console.log(sorting(numbers))

//Exercise Three
    //Create a list of your favorite movies, music, or video games using a multidimensional array.
    //First decide on the genres. Need at least 3 genres.

        //Ex: For movies - action, thriller, comedy.
        //Add titles to each genre. At least 2 titles per genre
        var action = ['American Ultra', 'Lego Batman 2', 'Tennet'];
        var comedy = ['The Mask', 'Grown Ups', 'Blended'];
        var horror = ['The Conjuring', 'The Conjuring 2', "You're next"];

        //Create a series of statements to access elements
        for (var i = 0; i < action.length; i++) {
            console.log(`Index ${i} for action movies: ${action[i]}`);
            }
        for (var i = 0; i < comedy.length; i++) {
            console.log(`Index ${i} for comedy movies: ${comedy[i]}`);
            }
        for (var i = 0; i < horror.length; i++) {
            console.log(`Index ${i} for horror movies: ${horror[i]}`);
            }
        //Access the second element of the third array
        console.log(comedy[1])
        //Replace the first element of the second array with another


        //Using for loops, iterate through the arrays and print the elements to the console.
        for (var i = 0; i < action.length; i++) {
            console.log(`An action movie: ${action[i]}`);
            }
        for (var i = 0; i < comedy.length; i++) {
            console.log(`An comedy movie: ${comedy[i]}`);
            }
        for (var i = 0; i < horror.length; i++) {
            console.log(`An horror movie: ${horror[i]}`);
            }

