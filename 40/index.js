/**
 * Album:
 * Write a function called make_album() that builds a Object describing a music album.
 * The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
 * Use the function to make three dictionaries representing different albums.
 * Print each return value to show that Objects are storing the album information correctly.
 * Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
 * If the calling line includes a value for the number of tracks, add that value to the album’s Object.
 * Make at least one new function call that includes the number of tracks on an album.
 *
 */

function make_album() {
  const music_album = {
    artist_name: arguments[0],
    title: arguments[1],
  };

  console.log(music_album);
}

//The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
make_album("Vital Signs", "Junoon");

// Use the function to make three dictionaries representing different albums.
function make_album() {
  let music_album = {
    artist_name: arguments[0],
    title: arguments[1],
  };

  if (arguments.length == 3) {
    // music_album.push({no_of_tracks:arguments[2]});
    music_album = {
      ...music_album,
      no_of_tracks: parseInt(arguments[2]),
    };
  }


  if (arguments.length == 2) {
    console.log(
      music_album.artist_name,
      music_album.title,
    );
  }

  if (arguments.length == 3) {
    console.log(
      music_album.artist_name,
      music_album.title,
      music_album.no_of_tracks
    );
  }
}

make_album("Atif Aslam", "Aadat");
make_album("Rahat Fateh Ali", "O Re Piya");
make_album("Junaid Jamshed", "Dil Dil Pakistan");

// Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
make_album("Bilal Khan", "Aao na", 4);
make_album("Singer ABD", "Album 123", 3);
