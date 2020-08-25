console.log("Last Updated Trello PowerUp -- Hello World");

var DATE_ICON = "./assets/img/calendar-and-clock.png";
var GRAY_ICON = 'https://cdn.hyperdev.com/us-east-1%3A3d31b21c-01a0-4da2-8827-4bc6e88b7618%2Ficon-gray.svg';
var GREY_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Frocket-ship-grey.png?1496162964717';
var WHITE_ROCKET_ICON = 'https://cdn.glitch.com/c69415fd-f70e-4e03-b43b-98b8960cd616%2Fwhite-rocket-ship.png?1495811896182';

$('.new-comment .comment-box-options').prepend('<a class="comment-box-options-item js-comment-add-template" href="#" title="Adicionar template..."><span class="icon-sm icon-attachment"></span></a>');

function addFormatControls () {
    // console.log();
    // $('.new-comment .comment-box-options').prepend('<a class="comment-box-options-item js-comment-add-template" href="#" title="Adicionar template..."><span class="icon-sm icon-attachment"></span></a>');

    // <a class="comment-box-options-item js-comment-add-template" href="#" title="Adicionar um anexo..."><span class="icon-sm icon-attachment"></span></a>
    // $('.comment-box-options:visible:not(.bnnt)')
    //     .addClass('bnnt')
    //     .prepend('<a class="comment-box-options-item js-comment-bnnt-italic" href="#" title="Italic"><span class="icon-sm"><i>I</i></span></a>')
    //     .prepend('<a class="comment-box-options-item js-comment-bnnt-bold" href="#" title="Bold"><span class="icon-sm"><b>B</b></span></a>')
    //     .append('<a class="comment-box-options-item js-comment-bnnt-help" href="https://help.trello.com/article/821-using-markdown-in-trello" target="_blank" title="Help"><span class="icon-sm">&#xE933;</span></a>')
    //     .each(function() {
    //         $(this).find('.js-comment-bnnt-bold').click(function() { alert('negrito') })
    //     })
}

var onBtnClick = function (t, opts) {
    console.log('Someone clicked the button');
    // addFormatControls();
};

TrelloPowerUp.initialize({
    /* "card-badges": (t, opts) => {
        return t.card("all").then(function(card) {
            return [
                {
                    dynamic: function() {
                        var date = new Date(card.dateLastActivity);
                        console.log(card);
                        return {
                            text: `Updated: ${date.toLocaleDateString()}`,
                            color: "red",
                            // icon: DATE_ICON
                        };
                    }
                }
            ];

        });
    }, */
    'card-buttons': function(t, options) {
        return [{
            icon: GREY_ROCKET_ICON,
            text: 'Estimate Size',
            callback: function(t) {
                return t.popup({
                    title: "Estimation",
                    url: 'estimate.html',
                });
            }
        }];
    },

    'card-badges': function(t, options) {
        return t.get('card', 'shared', 'estimate')
            .then(function(estimate) {
                return [{
                    icon: estimate ? GREY_ROCKET_ICON : WHITE_ROCKET_ICON,
                    text: estimate || 'No Estimate!',
                    color: estimate ? null : 'red',
                }];
            });
    },

    'card-detail-badges': function(t, options) {
        return t.get('card', 'shared', 'estimate')
            .then(function(estimate) {
                return [{
                    title: 'Estimate',
                    text: estimate || 'No Estimate!',
                    color: estimate ? null : 'red',
                    callback: function(t) {
                        return t.popup({
                            title: "Estimation",
                            url: 'estimate.html',
                        });
                    }
                }]
            });
        }
}),{
    appKey: ""
};
