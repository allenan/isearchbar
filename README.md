# iSearchbar

iSearchbar is a jQuery plugin designed to turn ordinary inputs into searchbars styled after Apple's iOS7 searchbars. This plugin was created for [ASAPer - Urgent Messenger](https://www.asaper.com) and has been extracted and open-sourced.

![iSearchbar Empty](https://s3.amazonaws.com/isearchbar/isearchbar-empty.png)

![iSearchbar Active](https://s3.amazonaws.com/isearchbar/isearchbar-active.png)

## Getting Started

This plugin requires jQuery `>= 1.7.0`

`<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min.js"></script>`

Be sure to link to both the javascript and css files in the dist folder:

`<link rel="stylesheet" href="../dist/css/jquery.isearchbar.min.css">`
`<script src="../dist/js/jquery.isearchbar.min.js"></script>`

It's also recommended to use [normalize.css](http://necolas.github.io/normalize.css/) or another css reset file to alleviate some cross-browser issues.

`<link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/normalize/2.1.3/normalize.min.css">`

## Usage Examples

To use iSearchbar, simply add the class "isearchbar" to any inputs you want to turn into searchbars.

```
<div style="background-color:#aaa;width: 400px;">
  <input type="text" class="isearchbar" />
</div>
```

Then, call the method `.iSearchbar` on those inputs with jQuery like this:

```
<script>
  $(function() {
    $(".isearchbar").iSearchbar();
  });
</script>
```

### Options

You can pass the following options to `.iSearchbar` to customize how the plugin looks and works.

```
<script>
  $(function() {
    $(".isearchbar").iSearchbar({
    	'placeholderText': 'Search...',
    	'cancelText': 'Cancel',
    	'cancelClass': 'a-custom-class another-custom-class'
    });
  });
</script>
```

## Contributing

Before sending a pull request remember to follow [jQuery Core Style Guide](http://contribute.jquery.org/style-guide/js/).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Make your changes on the `src` folder, never on the `dist` folder.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin my-new-feature`
6. Submit a pull request :D

### Todo:
- [ ] placeholder animation
- cross-browser compatibility
  - [x] Chrome
  - [x] Safari
  - [ ] Firefox
  - [ ] IE (?)
- [ ] testing

## History

* v0.0.1 October 24, 2013
	* initial release
