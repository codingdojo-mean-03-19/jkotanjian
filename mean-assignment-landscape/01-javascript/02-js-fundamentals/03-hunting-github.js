$(document).ready(function() {
    $.get("https://api.github.com/users/jkotanjian", displayName);

    function displayName (data) {
        $("button").click(function() {
            $(this).after(`<h3 style="margin-left: 25px;">${data.login}</h3>`)
        })
    };
});
