# README Form Toggler

## Table of Contents

- [Installation](#installation)
- [Usage and examples](#usage)

## Installation

Clone or download the formToggler.js and add it in the same folder as your main JS file.

Add the following line to your main JS file:
```
require('./formToggler');
```

## Usage and examples


### Shows the target when the ```data-toggle-trigger``` element is checked 
#### Triggering input element:
```
<div class="js-form-toggler">
    <label for="show_target">
        <input id="no-show" name="show_target" type="radio">
    </label>

    <label for="show_target">
        <input id="show" name="show_target" type="radio" data-toggler-trigger="target-element">
    </label>
</div>
```

#### Target element:
```
<div data-toggler-element="target-element">
    
</div>
```

### Hides the target when the ```data-toggle-trigger``` element is checked 

#### Triggering input element:
```
<div class="js-form-toggler">
    <label for="show_target">
        <input id="no-show" name="show_target" type="radio">
    </label>

    <label for="show_target">
        <input id="show" name="show_target" type="radio" data-toggler-trigger="target-element">
    </label>
</div>
```

#### Target element:
```
<div data-toggler-element="target-element" data-toggler-default="visible">
    
</div>
```
The ```data-toggler-default="visible"``` makes the element visible on page load. When the trigger is checked, the element will hide instead of show.

### Multiple
You can also add multiple instances. There is also the posibillity to add multiple targets with 1 trigger.

#### Triggering input element 1:
```
<div class="js-form-toggler">
    <label for="show_target">
        <input id="no-show" name="show_target" type="radio">
    </label>

    <label for="show_target">
        <input id="show" name="show_target" type="radio" data-toggler-trigger="target-element-1">
    </label>
</div>
```

#### Target element 1:
```
<div data-toggler-element="target-element-1">
    
</div>
```

#### Triggering input element 2:
```
<div class="js-form-toggler">
    <label for="show_target">
        <input id="no-show" name="show_target" type="radio">
    </label>

    <label for="show_target">
        <input id="show" name="show_target" type="radio" data-toggler-trigger="target-element-2">
    </label>
</div>
```

#### Target element 2 with trigger element 3 inside:
```
<div data-toggler-element="target-element-2">
	<div class="js-form-toggler">
    	<input type="checkbox" data-toggler-trigger="target3">
    </div>
</div>
```

#### Target element 3
```
<div data-toggler-element="target-element-3">
	I will show up if my trigger is checked
</div>
<div data-toggler-element="target-element-3" data-toggler-default="visible">
	And I will hide when the same trigger is checked
</div>
```