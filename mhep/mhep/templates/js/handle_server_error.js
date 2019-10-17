<script>
'use strict';

function handleServerError(intendedAction) {
  /*
    pass this into $.ajax() as the error parameter for example
    ```
      $ajax({
        success: function(response) { ... },
        error: handleServerError('listing libraries'),
        ...
      })
    ```
    */

  return function(result) {
    console.error('error ' + intendedAction + ': server returned: HTTP ' + result.status + ': ' + result.statusText);
    alert('Error ' + intendedAction + '. The server responded: HTTP ' + result.status + ': ' + result.statusText);
  }
}
</script>
