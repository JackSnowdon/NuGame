//  Below creates localStorage for Saving/Loading

window.localStorage;

$(document).ready(function() {

    // Player Object

    var player = new Object();
    player.maxHp = 100;
    player.power = 10;

    // getDieRoll takes amount of "sides" as a parameter

    function getDiceRoll(x) {
        return Math.floor(Math.random() * x) + 1;
    }

    function attack(base, power) {
        return base + power;
    }

    // Checker for endgame

    function areYouDead(hp) {
        return hp <= 0;
    }

    // Save System

    $("#save-button").click(function() {

        // Confirms if player wants to save progress

        var saveCheck = confirm("Saving will overwrite " + player.name + "'s save, press OK to confirm");
        if (saveCheck == true) {
            save();
        } else {
            alert("Game not saved");
        }
    });

    $("#load-button").click(function() {

        // Confirms player wants to load local save

        var loadCheck = confirm("Load your save file? (This will overwrite your current save)");
        if (loadCheck == true) {
            load();

            // Loads from local storage and sets player stats
        } else {
            alert("Game not loaded");
        }
    });

    function save() {

        // Stores player info as JSON and saves to local storage

        var save = {
            playerPower: player.power,
            playerHp: player.maxHp,

        };
        localStorage.setItem("save", JSON.stringify(save));
    }

    function load() {

        // Retrives from local storage

        var saveGame = JSON.parse(localStorage.getItem("save"));
        if (saveGame != null && saveGame != undefined) {
            player.power = saveGame.playerPower;
            player.maxHp = saveGame.playerHp;
        }
    }


});