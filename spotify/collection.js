function createCollection(name, description) {
  return collection = {
    name: name,
    description: description,
    tracks: []
  }
}

function createTrack(title, artist, duration) {
  var track = {
    title: title,
    artist: artist,
    duration: duration
  }
  if (title === undefined) {
    track.title = 'unknown'
  }
  if (artist === undefined) {
    track.artist = 'unknown'
  }
  if (duration === undefined) {
    track.duration = 0;
  }
  return track;
}

function reviewTrack(track) {
  if (track.artist === 'Red Hot Chili Peppers') {
    return `The song ${track.title} rules!`;
  } else {
    return 'I wish this was a Red Hot Chili Peppers song.';
  }
}

function addTrack(collection, track) {
  collection.tracks.push(track);
  return collection;
}

function getTotalDuration(collection) {
  var durationCounter = 0;
  for (var i = 0; i < collection.tracks.length; i++) {
    durationCounter += collection.tracks[i].duration;
  }
  return durationCounter;
}

function findTracksByArtist(collection, artist) {
  var artistTracks = [];
  for (var i = 0; i < collection.tracks.length; i++) {
    if (collection.tracks[i].artist === artist) {
      artistTracks.push(collection.tracks[i]);
    }
  }
  return artistTracks;
}


  module.exports = {
    createCollection,
    createTrack,
    reviewTrack,
    addTrack,
    getTotalDuration,
    findTracksByArtist
  }