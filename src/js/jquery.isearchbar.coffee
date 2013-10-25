# Note that when compiling with coffeescript, the plugin is wrapped in another
# anonymous function. We do not need to pass in undefined as well, since
# coffeescript uses (void 0) instead.
do ($ = jQuery, window, document) ->

  # window and document are passed through as local variable rather than
  # global as this (slightly) quickens the resolution process and can be more
  # efficiently minified (especially when both are regularly referenced in
  # your plugin).

  # Create the defaults once
  pluginName = "iSearchbar"
  defaults =
    placeholderText: 'Search...'
    cancelText: 'Cancel'
    cancelClass: ''

  # The actual plugin constructor
  class ISearchbar
    constructor: (@element, options) ->
      # jQuery has an extend method which merges the contents of two or
      # more objects, storing the result in the first object. The first object
      # is generally empty as we don't want to alter the default options for
      # future instances of the plugin
      @options = $.extend {}, defaults, options
      @_defaults = defaults
      @_name = pluginName
      @init()

    init: ->
      # Place initialization logic here
      # You already have access to the DOM element and the options via the
      # instance, e.g., @element and @options
      @$input = $(@element)

      @setupHtmlStructure()

      @setListeners()

    setupHtmlStructure: ->
      @$input.attr "placeholder", @options.placeholderText
      @$input.wrap "<div class='isearchbar-container'></div>"
      @$input.wrap "<div class='isearchbar-input-wrapper'></div>"
      
      inputWrapper = $(".isearchbar-input-wrapper")
      $inputWrapper = $(inputWrapper)

      root = $(".isearchbar-container")
      @$root = $(root)

      $inputWrapper.prepend @createIconSpan()
      
      @$root.append @createCancelButton()

    createCancelButton: ->
      $(document.createElement('a'))
        .addClass('isearchbar-cancel')
        .addClass(@options.cancelClass)
        .html(@options.cancelText)

    createIconSpan: ->
      $(document.createElement('span'))
        .addClass('isearchbar-icon')

    setListeners: ->
      @$input.on "focus", (event) =>
        @$root.addClass "isearchbar-focus"

      @$input.on "blur", =>
        @$root.removeClass "isearchbar-focus"  if @$input.val() is ""

      @$root.on "click", ".isearchbar-cancel", (event) =>
        event.preventDefault()
        @$root.removeClass "isearchbar-focus"
        @$input.val ""

  # A really lightweight plugin wrapper around the constructor,
  # preventing against multiple instantiations
  $.fn[pluginName] = (options) ->
    @each ->
      if !$.data(@, "plugin_#{pluginName}")
        $.data(@, "plugin_#{pluginName}", new ISearchbar(@, options))
