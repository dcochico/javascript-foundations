function createSong(name, artist) {
    var song = {
        name: name,
        artist: artist,
        hasBeenPlayed: false
    }
    return song;
}

function playSong(song) {
    song.hasBeenPlayed = true;
    return song;
}

function makePlaylist(name, songs) {
    var playlist = {
        name: name,
        songs: songs
    }
    return playlist;
}

function addSongToPlaylist(playlist, song) {
    playlist.songs.push(song);
    return playlist;
}

function playAllSongs(playlist) {
    for (var i = 0; i < playlist.songs.length; i++) {
        playlist.songs[i].hasBeenPlayed = true;
    }
    return playlist;
}

module.exports = {
    createSong,
    playSong,
    makePlaylist,
    addSongToPlaylist,
    playAllSongs
};
