/*
 *  iSearchbar - v0.0.1
 *  An iOS7-style searchbar plugin for jQuery
 *  https://github.com/allenan/isearchbar
 *
 *  Made by Andrew Allen
 *  Under MIT License
 */

(function() {
  (function($, window, document) {
    var ISearchbar, defaults, pluginName;
    pluginName = "iSearchbar";
    defaults = {
      placeholderText: 'Search...',
      cancelText: 'Cancel',
      cancelClass: ''
    };
    ISearchbar = (function() {
      function ISearchbar(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
      }

      ISearchbar.prototype.init = function() {
        this.$input = $(this.element);
        this.setupHtmlStructure();
        return this.setListeners();
      };

      ISearchbar.prototype.setupHtmlStructure = function() {
        var $inputWrapper, inputWrapper;
        this.$input.attr("placeholder", this.options.placeholderText);
        this.$input.wrap("<div class='isearchbar-container'></div>");
        this.$input.wrap("<div class='isearchbar-input-wrapper'></div>");
        inputWrapper = $(".isearchbar-input-wrapper");
        $inputWrapper = $(inputWrapper);
        $inputWrapper.prepend(this.createIconSpan());
        return this.root.append(this.createCancelButton());
      };

      ISearchbar.prototype.root = function() {
        return this.$root != null ? this.$root : this.$root = $(".isearchbar-container");
      };

      ISearchbar.prototype.createCancelButton = function() {
        return $(document.createElement('a')).addClass('isearchbar-cancel').addClass(this.options.cancelClass).html(this.options.cancelText);
      };

      ISearchbar.prototype.createIconSpan = function() {
        return $(document.createElement('span')).addClass('isearchbar-icon');
      };

      ISearchbar.prototype.setListeners = function() {
        var _this = this;
        this.$input.on("focus", function(event) {
          return _this.root.addClass("isearchbar-focus");
        });
        this.$input.on("blur", function() {
          if (_this.$input.val() === "") {
            return _this.root.removeClass("isearchbar-focus");
          }
        });
        return this.root.on("click", ".isearchbar-cancel", function(event) {
          event.preventDefault();
          _this.root.removeClass("isearchbar-focus");
          return _this.$input.val("");
        });
      };

      return ISearchbar;

    })();
    return $.fn[pluginName] = function(options) {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          return $.data(this, "plugin_" + pluginName, new ISearchbar(this, options));
        }
      });
    };
  })(jQuery, window, document);

}).call(this);
