

var guesses = 0
//80 songs in total
const albums = {
    "Can't Buy A Thrill" : ["Do It Again", "Dirty Work", "Kings", "Midnight Cruiser", "Only A Fool Would Say That", "Reelin' In The Years", "Fire In The Hole", "Brooklyn", "Change Of The Guard", "Turn That Heartbeat Over Again"],
    "Countdown To Ecstasy" : ["Bodhisvatta", "Razor Boy", "The Boston Rag", "Your Gold Teeth", "Show Biz Kids", "My Old School", "Pearl Of The Quarter", "King Of The World"],
    "Pretzel Logic" : ["Rikki Don't Lose That Number", "Night By Night", "Any Major Dude Will Tell You", "Barrytown", "East St. Louis Toodle-Oo", "Parker's Band", "Through With Buzz", "Pretzel Logic", "With A Gun", "Charlie Freak", "Monkey In Your Soul"],
    "Katy Lied" : ["Black Friday", "Bad Sneakers", "Rose Darling", "Daddy Don't Live In That New York City No More", "Doctor Wu", "Everyone's Gone To The Movies", "Your Gold Teeth II", "Chain Lightning", "Any World", "Throw Back The Little Ones"],
    "The Royal Scam" : ["Kid Charlemagne", "The Caves Of Altamira", "Don't Take Me Alive", "Sign In Stranger", "The Fez", "Green Earrings", "Haitian Divorce", "Everything You Did", "The Royal Scam"],
    "Aja" : ["Black Cow", "Aja", "Deacon Blues", "Peg", "Home At Last", "I Got The News", "Josie"],
    "Gaucho" : ["Babylon Sisters", "Hey Nineteen", "Glamour Profession", "Gaucho", "Time Out Of Mind", "My Rival", "Third World Man"],
    "Two Against Nature" : ["Gaslighting Abbie", "What A Shame About Me", "Two Against Nature", "Janie Runaway", "Almost Gothic", "Jack Of Speed", "Cousin Dupree", "Negative Girl", "West Of Hollywood"],
    "Everything Must Go" : ["The Last Mall", "Things I Miss The Most", "Blues Beach", "Godwhacker", "Slang of Ages", "Green Book", "Pixeleen", "Lunch with Gina", "Everything Must Go"]
}
//maybe have each song be a dict with it's web embed code as the value? or just learn how to use the spotify API
const songKeys = {


}
var songArray = Object.values(albums)
var albumArray = Object.keys(albums)
var raw = [].concat(...songArray)
var songList = [].concat(...songArray)
songList = songList.map(function(x) {return x.toUpperCase()})

var song = getSongOfDay().toUpperCase()
var songID = getSongID()
console.log(song)

//now all we have to do is the music part

//not gonna do a 1 a day thing, makes it more fun and less routine-y
function getSongOfDay()
{
    //need to randomly pick a song from the list and return it
    //and then pick the song's spotify ID and serve that as well
    return songList[Math.floor(Math.random()*songList.length)]
}

function getSongID()
{
    //use API to get the song name's spotify ID
    //then create the player
    //then limit the playtime of a song
    //and hide info about the player except for the play button
    //the create the additional time buttons
    //then bring it all together
}

function processInput()
{
    guesses++
    const text = document.getElementById("entry")
    var input = text.value
    var guess = input.toUpperCase()
    //compare to the current steely dan song
    var currentGuess = "guessText" + String(guesses)
    const box = document.getElementById(currentGuess)
    box.innerText = input
    if(guess == song)
    {
        //win condition - set arrow to check and stop the user from guessing
        var arrow = document.getElementById("arrow" + String(guesses))
        arrow.innerText = "✅"
        win()
    }
    else
    {
        //determine correct input:
        if(songList.indexOf(guess) == -1)
        {
            var arrow = document.getElementById("arrow" + String(guesses))
            arrow.innerText = "❌"
            return
        }
        //user did not guess correct
        //determine direction of guess "left" or "right"
        //get album of guess
        var indexOfGuess = songList.indexOf(guess)
        var album = determineAlbum(indexOfGuess)
        console.log(album)
        //get album of actual song
        var albumOfSong = determineAlbum(songList.indexOf(song))

        if(albumArray.indexOf(album) == albumArray.indexOf(albumOfSong))
        {
            var arrow = document.getElementById("arrow" + String(guesses))
            arrow.innerText = "⬇️"
        }
        else if(albumArray.indexOf(album) < albumArray.indexOf(albumOfSong))
        {
            var arrow = document.getElementById("arrow" + String(guesses))
            arrow.innerText = "➡️"
        }
        else if(albumArray.indexOf(album) > albumArray.indexOf(albumOfSong))
        {
            var arrow = document.getElementById("arrow" + String(guesses))
            arrow.innerText = "⬅️"
        }
    }
}

function win()
{
    console.log("You Win!")
    //stop the user from inputting info 
    const text = document.getElementById("entry").disabled = true
    text.classList.add("completed")
}

function determineAlbum(index)
{
    if(index >= 0 && index <= 9)
    {
        return "Can't Buy A Thrill"
    }
    else if(index >= 10 && index <= 17)
    {
        return "Countdown To Ecstasy"
    }
    else if(index >= 18 && index <= 28)
    {
        return "Pretzel Logic"
    }
    else if(index >= 29 && index <= 38)
    {
        return "Katy Lied"
    }
    else if(index >= 39 && index <= 47)
    {
        return "The Royal Scam"
    }
    else if(index >= 48 && index <= 54)
    {
        return "Aja"
    }
    else if(index >= 55 && index <= 61)
    {
        return "Gaucho"
    }
    else if(index >= 62 && index <= 70)
    {
        return "Two Against Nature"
    }
    else if(index >= 71 && index <= 79)
    {
        return "Everything Must Go"
    }
    return null
}