# Debugging HTML

## Using the w3c validator guide

* Go to https://validator.w3.org/#validate_by_input
* Copy this code
```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Debug</title>
    </head>
    <body>
        <h7></h7>
    </body>
</html>
```

* Paste it into the text field
* Click the `Check` button
* It will display the following error
  ```
Error: Element h7 not allowed as child of element body in this context. (Suppressing further errors from this subtree.)
From line 7, column 9; to line 7, column 12
>↩        <h7></h7>↩
Content model for element body:
Flow content.
  ```