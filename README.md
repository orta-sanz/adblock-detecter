# AdBlock Detecter

Sometimes you just need to check if the user is running an **AdBlock**, this simple plugin does what is proposed, indicate whether the user is using an AdBlock in the browser or not.

## Use
First you need to include `adblockDetecter.js` on your page, after that you can use the function `isActive()`, take a look:

### Example
```html
<script src="adblockDetecter.js"></script>
<script>
	setTimeout(function() {
		AdBlockDetecter.isActive(); //Will return true or false
	}, 100);
</script>
```
That's it! But, why using the `setTimeout` function? Because we need the DOM be ready for this check, if you are using jQuery you can use `$(window).ready()` for example.

### Parameters
In case you need it can use different parameters, such as **container** or the **class** (*AdBlock works by looking Class like this and hiding them, so if is not working for you try changing to another Class like advertbox*)
```js
AdBlockDetecter.isActive({
	class: 'advertbox',
	container: 'body'
});
```

## How it works
**AdBlockDetecter** is a global function so you can call it wherever you want, after call the **.isActive()** function the plugin creates a fakeAd element and then we check if the element has been hidden or not.

## Not working for you?
Try to change the default parameters, send an Class of **advertising** or **ads** for testing.
