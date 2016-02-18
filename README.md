# AdBlock Detecter

Sometimes you just need to check if the user is running an **AdBlock**, this simple plugin does what is proposed, indicate whether the user is using an AdBlock in the browser or not.

## Use
First you need to include `adblockDetecter.js` on your page, after that you can use the function `isActive()`, take a look:

### Example
```html
<script src="adblockDetecter.js"></script>
<script>
	$(document).ready(function() {
		AdBlockDetecter.isActive(); //Will return true or false
	});
</script>
```
That's it!
### Parameters
In case you need it can use different parameters, such as **container** or the **fakeElementId** (*AdBlock works by looking id's like this and hiding them, so if is not working for you try changing to another ID like advertising*)
```js
AdBlockDetecter.isActive({
	id: 'publicidad',
	container: 'body'
});
```


## How it works
**AdBlockDetecter** is a global function so you can call it wherever you want, after call the **.isActive()** function the plugin creates a fakeAd element and then we check if the element has been hidden or not.

## Not working for you?
Try to change the default parameters, send an ID of **advertising** or **ads** for testing.
