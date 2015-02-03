define(['jquery'], function ($) {
    var $contacts = $('#contacts');
    return $contacts.find(':first-child').eq(0).remove();
});