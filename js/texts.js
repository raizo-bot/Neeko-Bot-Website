$(function () {
    new TypeIt("#typingtext", {
        breakLines: false,
        strings: ["Share your music tastes with yo.", "Welcoming", "Leveling.", "Organize Karaoke nights with your friends or family.", "Raizo is the easiest way to play music in your server."],
        speed: 93,
        loop: true,
        deletespeed: 1,
        nextStringDelay: 3000,
        waitUntilVisible: true
    });
});
