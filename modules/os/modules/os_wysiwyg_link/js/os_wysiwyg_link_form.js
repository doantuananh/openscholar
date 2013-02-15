/**
 * 
 */
(function ($, undefined) {
  
Drupal.behaviors.osLinkExternal = {
  attach: function (ctx) {
    $('#-os-link-external-form').submit(function (e) {
      Drupal.settings.osWysiwygLinkResult = $('#edit-external').val();
      e.preventDefault();
    });
  }
};

Drupal.behaviors.osLinkInternal = {
  attach: function (ctx) {
    $('#-os-link-internal-form').submit(function (e) {
      // need to do something here to make sure we get a path and not a node title
      Drupal.settings.osWysiwygLinkResult = $('#edit-internal').val(); 
      e.preventDefault();
    });
  }
}

Drupal.behaviors.osLinkEmail = {
  attach: function (ctx) {
    $('#-os-link-email-form').submit(function (e) {
      Drupal.settings.osWysiwygLinkResult = 'mailto:'+$('#edit-email').val();
      e.preventDefault();
    });
  }
}

Drupal.behaviors.osLinkUpload = {
  attach: function (ctx) {
    $('#file-entity-add-upload').submit(function (e) {
      // send the file upload to the server through AJAX. 
      // Change the button to say 'Uploading'.
      // Switch to the Library tab when finished
      // Insert the new file into the library and select it. 
      e.preventDefault();
    });
  }
}

})(jQuery, undefined);