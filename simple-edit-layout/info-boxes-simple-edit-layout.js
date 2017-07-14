function iniInfoBox_%asset_assetid%(){
    //create some vars
    var $wrapper = $('#tmpedit_id-%asset_assetid%');
    var $info_box_wrapper = $wrapper.find('.information-boxes');
    
    //add event listeners to content editable areas
    $wrapper.find('[contenteditable]').each(function(){
        this.addEventListener('input', function() {
            var $theMetadataField = $('input[id*="container_%asset_assetid%"][id*="'+ $(this).data('field_id') +'_value"]');
            $theMetadataField.val($(this).text());
            //also make sure use default is unticked
            $theMetadataField.closest('.cellData').find('.defaultCheckbox:checked').trigger('click');
            $('#container_%asset_assetid%_metadata_field_text_' + $(this).data('field_id') + '_default:checked').trigger('click');
            
            
        }, false);
    });
}

//wait a split second before calling the ini function
setTimeout(function() { 
    iniInfoBox_%asset_assetid%(); 
}, 100);