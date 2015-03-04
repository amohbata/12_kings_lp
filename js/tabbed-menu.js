$(document).ready(function(e) {
    $('.tabs .tab-links a').on('click', function(e) {
        var currentTabHref = $(this).attr('href');

        // Show/hide tabs
        $(currentTabHref).show().siblings().hide();

        // Change/remove current tab to active
        $(this).parent('li').addClass('active').siblings().removeClass('active');

        e.preventDefault();
    });
});

