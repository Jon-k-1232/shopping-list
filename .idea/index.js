
// add entry

$(function addEntry(){

    $('#js-shopping-list-form').submit(function () {
        event.preventDefault();
        const newItem = $('#shopping-list-entry').val();
        $('#shopping-list-entry').val('');

        $('.shopping-list').append(
            `<li>
             <span class="shopping-item">${newItem}</span>
             <div class="shopping-item-controls">
                 <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                 <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
             </div>
            </li>`);
        console.log(`${newItem} added`);
    });
});

//check off


$(function checkOff(){
    $('.shopping-list').on('click', '.shopping-item-toggle', function() {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
        console.log('Check off completed');
    });
});


//delete item

$(function checkOff(){
    $('.shopping-list').on('click', '.shopping-item-delete',
        function(){
        $(this).closest('li').remove();
        console.log('Item deleted');
    });
});