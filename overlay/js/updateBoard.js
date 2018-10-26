
function updateBoard() {

    if ($('#score1').html() != score1) {
        animating = true;
        $('#score1').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#score1').html(score1);
            }
        });

        $('#score1').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if ($('#score2').html() != score2) {
        animating = true;
        $('#score2').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#score2').html(score2);
            }
        });

        $('#score2').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if ($('#bracket-location').html() != bracketLocation) {
        animating = true;
        $('#bracket-location').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#bracket-location').html(bracketLocation);
            }
        });

        $('#bracket-location').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if ($('#bracket-link').html() != bracketLink) {
        animating = true;
        $('#bracket-link').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#bracket-link').html(bracketLink);
            }
        });

        $('#bracket-link').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if ($('#location').html() != mText5) {
        animating = true;
        $('#location').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#location').html(mText5);
            }
        });

        $('#location').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if ($('#date').html() != date) {
        animating = true;
        $('#date').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#date').html(date);
            }
        });

        $('#date').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if ($('#player1').html() != player1) {
        animating = true;
        $('#player1').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#player1').html(player1);
            }
        });

        $('#player1').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if ($('#player2').html() != player2) {
        animating = true;
        $('#player2').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#player2').html(player2);
            }
        });

        $('#player2').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if (oldCharacter1 != character1 || $('#character1').opacity() == 0) {
        animating = true;
        $('#character1').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#character1').html('<img src="characterImages/heads/' + character1 + '.png" width="82" height="58">');
                oldCharacter1 = character1;
            }
        });

        $('#character1').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });
    }

    if (oldCharacter2 != character2 || $('#character2').opacity() == 0) {
        animating = true;
        $('#character2').tween({
            opacity: {
                start: 100,
                stop: 0,
                time: 0,
                duration: 0.5,
                effect: 'easeIn'
            },
            onStop: function () {
                $('#character2').html('<img src="characterImages/heads/' + character2 + '.png" width="82" height="58">');
                oldCharacter2 = character2;
            }
        });

        $('#character2').tween({
            opacity: {
                start: 0,
                stop: 100,
                time: 0.5,
                duration: 0.5,
                effect: 'easeOut'
            },
            onStop: function () {
                animating = false;
            }
        });

    }

    $.play();

    doUpdate = false;
}