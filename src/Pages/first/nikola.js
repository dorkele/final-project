// var playedSound = {};
// console.log(playedSound);
// function memory(squid, audio) {
//     console.log(audio);
//     //var id = squid;
//     //var audio = audioArray[squid];
//     memory(audioArray[squid], squid);
//     //playedSound["squid"] = "audioArray[squid]";
//     console.log("objekt", playedSound);
//     Object.keys(playedSound).length;
//     if (length === 2) {
//         if (playedSound[0] == playedSound[1]) {
//             console.log(true);
//             var playedSound = {};
//         } else {
//             console.log(false);
//         }
//     }
// }

// square.on("click", function (e) {
//     //var playedSound = {};
//     var squid = e.target.id;
//     audioArray[squid].play(e);
//     //var id = audioArray[squid];
//     //var id = squid; //TU IMAM ID OD KVADRATA
//     //console.log("id", id);
//     playedSound["id"] = audioArray[squid];
//     //console.log("audio", audioArray[squid]); //TU IMAM AUDIO
//     memory(audioArray[squid]);
// });

// var playedSound = [];
// var victoryIds = [];

// function memory(audio, id) {
//     playedSound.push(audio);
//     victoryIds.push(id);
//     var length = playedSound.length;
//     if (length === 2) {
//         if (playedSound[0] == playedSound[1]) {
//             console.log(true);
//             matched(victoryIds);
//         } else {
//             console.log(false);
//             playedSound = [];
//             victoryIds = [];
//         }
//     }
// }

// //matching logic
// function matched(victoryIds) {
//     $(victoryIds[0]).addclass("match");
//     $(victoryIds[1]).addclass("match");
// }

// square.on("click", function (e) {
//     var squid = e.target.id;
//     audioArray[squid].play(e);
//     memory(audioArray[squid], squid);
// });
