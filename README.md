# README Form Toggler

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

Clone or download the formToggler.js and add it in the same folder as your main JS file.

Add the following line to your main JS file:
```
	require('./formToggler');
```

## Usage

###Examples: 

#### Shows the target when the ```data-toggle-trigger``` element is checked 
Triggering input element:
```
<div class="c-form__field js-form-toggler">
    <label class="c-form__content c-radio" for="show_target">
        <input id="no-show" name="show_target" type="radio">
    </label>

    <label class="c-form__content c-radio" for="show_target">
        <input id="show" name="show_target" type="radio" data-toggler-trigger="target-element">
    </label>
</div>
```

Target element:
```
<div data-toggler-element="target-element">
    
</div>
```

#### Hides the target when the ```data-toggle-trigger``` element is checked 


