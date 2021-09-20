function getGithubInfo(user) {
    $('.information').text("Searching");
    $.get(`https://api.github.com/users/${user}/events/public`)
        .done(users => showUser(users[0]))
        .fail(() => noSuchUser(user));
    $.get(`https://api.github.com/users/${user}/repos`)
        .done(repos => showRepos(repos));
}
// display the specified user's profile
function showUser(user) {
    $('#results, #results .result, #results .card-header').removeClass("collapse");
    $('.avatar').html("<img style='width: 170px; height: 170px;' src='" + user.actor.avatar_url + "' alt='Avatar'>");
    const profile = "https://github.com/" + encodeURIComponent(user.actor.login);
    $('.information').html(`<a href='${profile}'>${user.actor.login}${+user.id}</a>`);
    $('.name').text(user.actor.login);
    $('.id').text(user.login);

}
function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    $('#results, #results .card-header').removeClass("collapse");
    $('#results .result').addClass("collapse");
    $('.name').text("We couldn't find any users matching : "+ username);

}
function showRepos(repos) {
    let output = $('.repos').empty();

    for (const repo of repos) {
        output.append($('<span/>').text(repo.name).addClass('badge badge-info mr-1'));
    }
}
$(document).ready(function () {
        $(document).on('keypress', '#username', function (e) {
            if (e.which === 13) {
                username = $(this).val();
                $(this).val("");
                getGithubInfo(username);
            }
        })
    }
);
