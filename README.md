# checkbox-pseudos
PostCSS plugin adding pseudo elements for customizing input checkboxes (and radiobuttons too)

```css
/* before */

input[type="checkbox"]::input-box {
    background-color: red;
}
input[type="checkbox"]::input-mark {
    background-color: green;
}

/* after */

input[type="checkbox"]:not(checked) + label::before {
    background-color: red;
}
input[type="checkbox"]:not(checked) + label::after {
    background-color: green;
}

```

## Options

#### `BOX_PSEUDO`

Type: `String`  
Default: `input-box`

Pseudo element for box

#### `MARK_PSEUDO`

Type: `String`  
Default: `input-check`

Pseudo element for check

