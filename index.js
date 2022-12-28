//const string = "hello"


function shout(string){
    return string.toUpperCase()
}

function whisper(string){
    return string.toLowerCase()
}

function logShout(string){
    console.log("HELLO")
    
} 

function logWhisper(string){
    console.log("hello")
}


function sayHiToHeadphonedRoommate(string){

switch (string){
    case  whisper(string):
        return "I can't hear you!"
        break
    case  shout(string):
        return "YES INDEED!"
        break
    case "Let's have dinner together!":
        return "I would love to!"
        break
}}
//console.log(sayHiToHeadphonedRoomate)