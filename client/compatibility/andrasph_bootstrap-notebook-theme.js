(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/andrasph:bootstrap-notebook-theme/notebook-theme/js/bootstrap.js                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * Bootstrap v3.1.1 (http://getbootstrap.com)                                                                         // 2
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 3
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 4
 */                                                                                                                   // 5
                                                                                                                      // 6
if (typeof jQuery === 'undefined') { throw new Error('Bootstrap\'s JavaScript requires jQuery') }                     // 7
                                                                                                                      // 8
/* ========================================================================                                           // 9
 * Bootstrap: transition.js v3.1.1                                                                                    // 10
 * http://getbootstrap.com/javascript/#transitions                                                                    // 11
 * ========================================================================                                           // 12
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 13
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 14
 * ======================================================================== */                                        // 15
                                                                                                                      // 16
                                                                                                                      // 17
+function ($) {                                                                                                       // 18
  'use strict';                                                                                                       // 19
                                                                                                                      // 20
  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)                                                     // 21
  // ============================================================                                                     // 22
                                                                                                                      // 23
  function transitionEnd() {                                                                                          // 24
    var el = document.createElement('bootstrap')                                                                      // 25
                                                                                                                      // 26
    var transEndEventNames = {                                                                                        // 27
      'WebkitTransition' : 'webkitTransitionEnd',                                                                     // 28
      'MozTransition'    : 'transitionend',                                                                           // 29
      'OTransition'      : 'oTransitionEnd otransitionend',                                                           // 30
      'transition'       : 'transitionend'                                                                            // 31
    }                                                                                                                 // 32
                                                                                                                      // 33
    for (var name in transEndEventNames) {                                                                            // 34
      if (el.style[name] !== undefined) {                                                                             // 35
        return { end: transEndEventNames[name] }                                                                      // 36
      }                                                                                                               // 37
    }                                                                                                                 // 38
                                                                                                                      // 39
    return false // explicit for ie8 (  ._.)                                                                          // 40
  }                                                                                                                   // 41
                                                                                                                      // 42
  // http://blog.alexmaccaw.com/css-transitions                                                                       // 43
  $.fn.emulateTransitionEnd = function (duration) {                                                                   // 44
    var called = false, $el = this                                                                                    // 45
    $(this).one($.support.transition.end, function () { called = true })                                              // 46
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }                              // 47
    setTimeout(callback, duration)                                                                                    // 48
    return this                                                                                                       // 49
  }                                                                                                                   // 50
                                                                                                                      // 51
  $(function () {                                                                                                     // 52
    $.support.transition = transitionEnd()                                                                            // 53
  })                                                                                                                  // 54
                                                                                                                      // 55
}(jQuery);                                                                                                            // 56
                                                                                                                      // 57
/* ========================================================================                                           // 58
 * Bootstrap: alert.js v3.1.1                                                                                         // 59
 * http://getbootstrap.com/javascript/#alerts                                                                         // 60
 * ========================================================================                                           // 61
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 62
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 63
 * ======================================================================== */                                        // 64
                                                                                                                      // 65
                                                                                                                      // 66
+function ($) {                                                                                                       // 67
  'use strict';                                                                                                       // 68
                                                                                                                      // 69
  // ALERT CLASS DEFINITION                                                                                           // 70
  // ======================                                                                                           // 71
                                                                                                                      // 72
  var dismiss = '[data-dismiss="alert"]'                                                                              // 73
  var Alert   = function (el) {                                                                                       // 74
    $(el).on('click', dismiss, this.close)                                                                            // 75
  }                                                                                                                   // 76
                                                                                                                      // 77
  Alert.prototype.close = function (e) {                                                                              // 78
    var $this    = $(this)                                                                                            // 79
    var selector = $this.attr('data-target')                                                                          // 80
                                                                                                                      // 81
    if (!selector) {                                                                                                  // 82
      selector = $this.attr('href')                                                                                   // 83
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7                                  // 84
    }                                                                                                                 // 85
                                                                                                                      // 86
    var $parent = $(selector)                                                                                         // 87
                                                                                                                      // 88
    if (e) e.preventDefault()                                                                                         // 89
                                                                                                                      // 90
    if (!$parent.length) {                                                                                            // 91
      $parent = $this.hasClass('alert') ? $this : $this.parent()                                                      // 92
    }                                                                                                                 // 93
                                                                                                                      // 94
    $parent.trigger(e = $.Event('close.bs.alert'))                                                                    // 95
                                                                                                                      // 96
    if (e.isDefaultPrevented()) return                                                                                // 97
                                                                                                                      // 98
    $parent.removeClass('in')                                                                                         // 99
                                                                                                                      // 100
    function removeElement() {                                                                                        // 101
      $parent.trigger('closed.bs.alert').remove()                                                                     // 102
    }                                                                                                                 // 103
                                                                                                                      // 104
    $.support.transition && $parent.hasClass('fade') ?                                                                // 105
      $parent                                                                                                         // 106
        .one($.support.transition.end, removeElement)                                                                 // 107
        .emulateTransitionEnd(150) :                                                                                  // 108
      removeElement()                                                                                                 // 109
  }                                                                                                                   // 110
                                                                                                                      // 111
                                                                                                                      // 112
  // ALERT PLUGIN DEFINITION                                                                                          // 113
  // =======================                                                                                          // 114
                                                                                                                      // 115
  var old = $.fn.alert                                                                                                // 116
                                                                                                                      // 117
  $.fn.alert = function (option) {                                                                                    // 118
    return this.each(function () {                                                                                    // 119
      var $this = $(this)                                                                                             // 120
      var data  = $this.data('bs.alert')                                                                              // 121
                                                                                                                      // 122
      if (!data) $this.data('bs.alert', (data = new Alert(this)))                                                     // 123
      if (typeof option == 'string') data[option].call($this)                                                         // 124
    })                                                                                                                // 125
  }                                                                                                                   // 126
                                                                                                                      // 127
  $.fn.alert.Constructor = Alert                                                                                      // 128
                                                                                                                      // 129
                                                                                                                      // 130
  // ALERT NO CONFLICT                                                                                                // 131
  // =================                                                                                                // 132
                                                                                                                      // 133
  $.fn.alert.noConflict = function () {                                                                               // 134
    $.fn.alert = old                                                                                                  // 135
    return this                                                                                                       // 136
  }                                                                                                                   // 137
                                                                                                                      // 138
                                                                                                                      // 139
  // ALERT DATA-API                                                                                                   // 140
  // ==============                                                                                                   // 141
                                                                                                                      // 142
  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)                                           // 143
                                                                                                                      // 144
}(jQuery);                                                                                                            // 145
                                                                                                                      // 146
/* ========================================================================                                           // 147
 * Bootstrap: button.js v3.1.1                                                                                        // 148
 * http://getbootstrap.com/javascript/#buttons                                                                        // 149
 * ========================================================================                                           // 150
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 151
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 152
 * ======================================================================== */                                        // 153
                                                                                                                      // 154
                                                                                                                      // 155
+function ($) {                                                                                                       // 156
  'use strict';                                                                                                       // 157
                                                                                                                      // 158
  // BUTTON PUBLIC CLASS DEFINITION                                                                                   // 159
  // ==============================                                                                                   // 160
                                                                                                                      // 161
  var Button = function (element, options) {                                                                          // 162
    this.$element  = $(element)                                                                                       // 163
    this.options   = $.extend({}, Button.DEFAULTS, options)                                                           // 164
    this.isLoading = false                                                                                            // 165
  }                                                                                                                   // 166
                                                                                                                      // 167
  Button.DEFAULTS = {                                                                                                 // 168
    loadingText: 'loading...'                                                                                         // 169
  }                                                                                                                   // 170
                                                                                                                      // 171
  Button.prototype.setState = function (state) {                                                                      // 172
    var d    = 'disabled'                                                                                             // 173
    var $el  = this.$element                                                                                          // 174
    var val  = $el.is('input') ? 'val' : 'html'                                                                       // 175
    var data = $el.data()                                                                                             // 176
                                                                                                                      // 177
    state = state + 'Text'                                                                                            // 178
                                                                                                                      // 179
    if (!data.resetText) $el.data('resetText', $el[val]())                                                            // 180
                                                                                                                      // 181
    $el[val](data[state] || this.options[state])                                                                      // 182
                                                                                                                      // 183
    // push to event loop to allow forms to submit                                                                    // 184
    setTimeout($.proxy(function () {                                                                                  // 185
      if (state == 'loadingText') {                                                                                   // 186
        this.isLoading = true                                                                                         // 187
        $el.addClass(d).attr(d, d)                                                                                    // 188
      } else if (this.isLoading) {                                                                                    // 189
        this.isLoading = false                                                                                        // 190
        $el.removeClass(d).removeAttr(d)                                                                              // 191
      }                                                                                                               // 192
    }, this), 0)                                                                                                      // 193
  }                                                                                                                   // 194
                                                                                                                      // 195
  Button.prototype.toggle = function () {                                                                             // 196
    var changed = true                                                                                                // 197
    var $parent = this.$element.closest('[data-toggle="buttons"]')                                                    // 198
                                                                                                                      // 199
    if ($parent.length) {                                                                                             // 200
      var $input = this.$element.find('input')                                                                        // 201
      if ($input.prop('type') == 'radio') {                                                                           // 202
        if ($input.prop('checked') && this.$element.hasClass('active')) changed = false                               // 203
        else $parent.find('.active').removeClass('active')                                                            // 204
      }                                                                                                               // 205
      if (changed) $input.prop('checked', !this.$element.hasClass('active')).trigger('change')                        // 206
    }                                                                                                                 // 207
                                                                                                                      // 208
    if (changed) this.$element.toggleClass('active')                                                                  // 209
  }                                                                                                                   // 210
                                                                                                                      // 211
                                                                                                                      // 212
  // BUTTON PLUGIN DEFINITION                                                                                         // 213
  // ========================                                                                                         // 214
                                                                                                                      // 215
  var old = $.fn.button                                                                                               // 216
                                                                                                                      // 217
  $.fn.button = function (option) {                                                                                   // 218
    return this.each(function () {                                                                                    // 219
      var $this   = $(this)                                                                                           // 220
      var data    = $this.data('bs.button')                                                                           // 221
      var options = typeof option == 'object' && option                                                               // 222
                                                                                                                      // 223
      if (!data) $this.data('bs.button', (data = new Button(this, options)))                                          // 224
                                                                                                                      // 225
      if (option == 'toggle') data.toggle()                                                                           // 226
      else if (option) data.setState(option)                                                                          // 227
    })                                                                                                                // 228
  }                                                                                                                   // 229
                                                                                                                      // 230
  $.fn.button.Constructor = Button                                                                                    // 231
                                                                                                                      // 232
                                                                                                                      // 233
  // BUTTON NO CONFLICT                                                                                               // 234
  // ==================                                                                                               // 235
                                                                                                                      // 236
  $.fn.button.noConflict = function () {                                                                              // 237
    $.fn.button = old                                                                                                 // 238
    return this                                                                                                       // 239
  }                                                                                                                   // 240
                                                                                                                      // 241
                                                                                                                      // 242
  // BUTTON DATA-API                                                                                                  // 243
  // ===============                                                                                                  // 244
                                                                                                                      // 245
  $(document).on('click.bs.button.data-api', '[data-toggle^=button]', function (e) {                                  // 246
    var $btn = $(e.target)                                                                                            // 247
    if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')                                                            // 248
    $btn.button('toggle')                                                                                             // 249
    e.preventDefault()                                                                                                // 250
  })                                                                                                                  // 251
                                                                                                                      // 252
}(jQuery);                                                                                                            // 253
                                                                                                                      // 254
/* ========================================================================                                           // 255
 * Bootstrap: carousel.js v3.1.1                                                                                      // 256
 * http://getbootstrap.com/javascript/#carousel                                                                       // 257
 * ========================================================================                                           // 258
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 259
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 260
 * ======================================================================== */                                        // 261
                                                                                                                      // 262
                                                                                                                      // 263
+function ($) {                                                                                                       // 264
  'use strict';                                                                                                       // 265
                                                                                                                      // 266
  // CAROUSEL CLASS DEFINITION                                                                                        // 267
  // =========================                                                                                        // 268
                                                                                                                      // 269
  var Carousel = function (element, options) {                                                                        // 270
    this.$element    = $(element)                                                                                     // 271
    this.$indicators = this.$element.find('.carousel-indicators')                                                     // 272
    this.options     = options                                                                                        // 273
    this.paused      =                                                                                                // 274
    this.sliding     =                                                                                                // 275
    this.interval    =                                                                                                // 276
    this.$active     =                                                                                                // 277
    this.$items      = null                                                                                           // 278
                                                                                                                      // 279
    this.options.pause == 'hover' && this.$element                                                                    // 280
      .on('mouseenter', $.proxy(this.pause, this))                                                                    // 281
      .on('mouseleave', $.proxy(this.cycle, this))                                                                    // 282
  }                                                                                                                   // 283
                                                                                                                      // 284
  Carousel.DEFAULTS = {                                                                                               // 285
    interval: 5000,                                                                                                   // 286
    pause: 'hover',                                                                                                   // 287
    wrap: true                                                                                                        // 288
  }                                                                                                                   // 289
                                                                                                                      // 290
  Carousel.prototype.cycle =  function (e) {                                                                          // 291
    e || (this.paused = false)                                                                                        // 292
                                                                                                                      // 293
    this.interval && clearInterval(this.interval)                                                                     // 294
                                                                                                                      // 295
    this.options.interval                                                                                             // 296
      && !this.paused                                                                                                 // 297
      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))                               // 298
                                                                                                                      // 299
    return this                                                                                                       // 300
  }                                                                                                                   // 301
                                                                                                                      // 302
  Carousel.prototype.getActiveIndex = function () {                                                                   // 303
    this.$active = this.$element.find('.item.active')                                                                 // 304
    this.$items  = this.$active.parent().children()                                                                   // 305
                                                                                                                      // 306
    return this.$items.index(this.$active)                                                                            // 307
  }                                                                                                                   // 308
                                                                                                                      // 309
  Carousel.prototype.to = function (pos) {                                                                            // 310
    var that        = this                                                                                            // 311
    var activeIndex = this.getActiveIndex()                                                                           // 312
                                                                                                                      // 313
    if (pos > (this.$items.length - 1) || pos < 0) return                                                             // 314
                                                                                                                      // 315
    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) })                // 316
    if (activeIndex == pos) return this.pause().cycle()                                                               // 317
                                                                                                                      // 318
    return this.slide(pos > activeIndex ? 'next' : 'prev', $(this.$items[pos]))                                       // 319
  }                                                                                                                   // 320
                                                                                                                      // 321
  Carousel.prototype.pause = function (e) {                                                                           // 322
    e || (this.paused = true)                                                                                         // 323
                                                                                                                      // 324
    if (this.$element.find('.next, .prev').length && $.support.transition) {                                          // 325
      this.$element.trigger($.support.transition.end)                                                                 // 326
      this.cycle(true)                                                                                                // 327
    }                                                                                                                 // 328
                                                                                                                      // 329
    this.interval = clearInterval(this.interval)                                                                      // 330
                                                                                                                      // 331
    return this                                                                                                       // 332
  }                                                                                                                   // 333
                                                                                                                      // 334
  Carousel.prototype.next = function () {                                                                             // 335
    if (this.sliding) return                                                                                          // 336
    return this.slide('next')                                                                                         // 337
  }                                                                                                                   // 338
                                                                                                                      // 339
  Carousel.prototype.prev = function () {                                                                             // 340
    if (this.sliding) return                                                                                          // 341
    return this.slide('prev')                                                                                         // 342
  }                                                                                                                   // 343
                                                                                                                      // 344
  Carousel.prototype.slide = function (type, next) {                                                                  // 345
    var $active   = this.$element.find('.item.active')                                                                // 346
    var $next     = next || $active[type]()                                                                           // 347
    var isCycling = this.interval                                                                                     // 348
    var direction = type == 'next' ? 'left' : 'right'                                                                 // 349
    var fallback  = type == 'next' ? 'first' : 'last'                                                                 // 350
    var that      = this                                                                                              // 351
                                                                                                                      // 352
    if (!$next.length) {                                                                                              // 353
      if (!this.options.wrap) return                                                                                  // 354
      $next = this.$element.find('.item')[fallback]()                                                                 // 355
    }                                                                                                                 // 356
                                                                                                                      // 357
    if ($next.hasClass('active')) return this.sliding = false                                                         // 358
                                                                                                                      // 359
    var e = $.Event('slide.bs.carousel', { relatedTarget: $next[0], direction: direction })                           // 360
    this.$element.trigger(e)                                                                                          // 361
    if (e.isDefaultPrevented()) return                                                                                // 362
                                                                                                                      // 363
    this.sliding = true                                                                                               // 364
                                                                                                                      // 365
    isCycling && this.pause()                                                                                         // 366
                                                                                                                      // 367
    if (this.$indicators.length) {                                                                                    // 368
      this.$indicators.find('.active').removeClass('active')                                                          // 369
      this.$element.one('slid.bs.carousel', function () {                                                             // 370
        var $nextIndicator = $(that.$indicators.children()[that.getActiveIndex()])                                    // 371
        $nextIndicator && $nextIndicator.addClass('active')                                                           // 372
      })                                                                                                              // 373
    }                                                                                                                 // 374
                                                                                                                      // 375
    if ($.support.transition && this.$element.hasClass('slide')) {                                                    // 376
      $next.addClass(type)                                                                                            // 377
      $next[0].offsetWidth // force reflow                                                                            // 378
      $active.addClass(direction)                                                                                     // 379
      $next.addClass(direction)                                                                                       // 380
      $active                                                                                                         // 381
        .one($.support.transition.end, function () {                                                                  // 382
          $next.removeClass([type, direction].join(' ')).addClass('active')                                           // 383
          $active.removeClass(['active', direction].join(' '))                                                        // 384
          that.sliding = false                                                                                        // 385
          setTimeout(function () { that.$element.trigger('slid.bs.carousel') }, 0)                                    // 386
        })                                                                                                            // 387
        .emulateTransitionEnd($active.css('transition-duration').slice(0, -1) * 1000)                                 // 388
    } else {                                                                                                          // 389
      $active.removeClass('active')                                                                                   // 390
      $next.addClass('active')                                                                                        // 391
      this.sliding = false                                                                                            // 392
      this.$element.trigger('slid.bs.carousel')                                                                       // 393
    }                                                                                                                 // 394
                                                                                                                      // 395
    isCycling && this.cycle()                                                                                         // 396
                                                                                                                      // 397
    return this                                                                                                       // 398
  }                                                                                                                   // 399
                                                                                                                      // 400
                                                                                                                      // 401
  // CAROUSEL PLUGIN DEFINITION                                                                                       // 402
  // ==========================                                                                                       // 403
                                                                                                                      // 404
  var old = $.fn.carousel                                                                                             // 405
                                                                                                                      // 406
  $.fn.carousel = function (option) {                                                                                 // 407
    return this.each(function () {                                                                                    // 408
      var $this   = $(this)                                                                                           // 409
      var data    = $this.data('bs.carousel')                                                                         // 410
      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)                // 411
      var action  = typeof option == 'string' ? option : options.slide                                                // 412
                                                                                                                      // 413
      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))                                      // 414
      if (typeof option == 'number') data.to(option)                                                                  // 415
      else if (action) data[action]()                                                                                 // 416
      else if (options.interval) data.pause().cycle()                                                                 // 417
    })                                                                                                                // 418
  }                                                                                                                   // 419
                                                                                                                      // 420
  $.fn.carousel.Constructor = Carousel                                                                                // 421
                                                                                                                      // 422
                                                                                                                      // 423
  // CAROUSEL NO CONFLICT                                                                                             // 424
  // ====================                                                                                             // 425
                                                                                                                      // 426
  $.fn.carousel.noConflict = function () {                                                                            // 427
    $.fn.carousel = old                                                                                               // 428
    return this                                                                                                       // 429
  }                                                                                                                   // 430
                                                                                                                      // 431
                                                                                                                      // 432
  // CAROUSEL DATA-API                                                                                                // 433
  // =================                                                                                                // 434
                                                                                                                      // 435
  $(document).on('click.bs.carousel.data-api', '[data-slide], [data-slide-to]', function (e) {                        // 436
    var $this   = $(this), href                                                                                       // 437
    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
    var options = $.extend({}, $target.data(), $this.data())                                                          // 439
    var slideIndex = $this.attr('data-slide-to')                                                                      // 440
    if (slideIndex) options.interval = false                                                                          // 441
                                                                                                                      // 442
    $target.carousel(options)                                                                                         // 443
                                                                                                                      // 444
    if (slideIndex = $this.attr('data-slide-to')) {                                                                   // 445
      $target.data('bs.carousel').to(slideIndex)                                                                      // 446
    }                                                                                                                 // 447
                                                                                                                      // 448
    e.preventDefault()                                                                                                // 449
  })                                                                                                                  // 450
                                                                                                                      // 451
  $(window).on('load', function () {                                                                                  // 452
    $('[data-ride="carousel"]').each(function () {                                                                    // 453
      var $carousel = $(this)                                                                                         // 454
      $carousel.carousel($carousel.data())                                                                            // 455
    })                                                                                                                // 456
  })                                                                                                                  // 457
                                                                                                                      // 458
}(jQuery);                                                                                                            // 459
                                                                                                                      // 460
/* ========================================================================                                           // 461
 * Bootstrap: collapse.js v3.1.1                                                                                      // 462
 * http://getbootstrap.com/javascript/#collapse                                                                       // 463
 * ========================================================================                                           // 464
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 465
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 466
 * ======================================================================== */                                        // 467
                                                                                                                      // 468
                                                                                                                      // 469
+function ($) {                                                                                                       // 470
  'use strict';                                                                                                       // 471
                                                                                                                      // 472
  // COLLAPSE PUBLIC CLASS DEFINITION                                                                                 // 473
  // ================================                                                                                 // 474
                                                                                                                      // 475
  var Collapse = function (element, options) {                                                                        // 476
    this.$element      = $(element)                                                                                   // 477
    this.options       = $.extend({}, Collapse.DEFAULTS, options)                                                     // 478
    this.transitioning = null                                                                                         // 479
                                                                                                                      // 480
    if (this.options.parent) this.$parent = $(this.options.parent)                                                    // 481
    if (this.options.toggle) this.toggle()                                                                            // 482
  }                                                                                                                   // 483
                                                                                                                      // 484
  Collapse.DEFAULTS = {                                                                                               // 485
    toggle: true                                                                                                      // 486
  }                                                                                                                   // 487
                                                                                                                      // 488
  Collapse.prototype.dimension = function () {                                                                        // 489
    var hasWidth = this.$element.hasClass('width')                                                                    // 490
    return hasWidth ? 'width' : 'height'                                                                              // 491
  }                                                                                                                   // 492
                                                                                                                      // 493
  Collapse.prototype.show = function () {                                                                             // 494
    if (this.transitioning || this.$element.hasClass('in')) return                                                    // 495
                                                                                                                      // 496
    var startEvent = $.Event('show.bs.collapse')                                                                      // 497
    this.$element.trigger(startEvent)                                                                                 // 498
    if (startEvent.isDefaultPrevented()) return                                                                       // 499
                                                                                                                      // 500
    var actives = this.$parent && this.$parent.find('> .panel > .in')                                                 // 501
                                                                                                                      // 502
    if (actives && actives.length) {                                                                                  // 503
      var hasData = actives.data('bs.collapse')                                                                       // 504
      if (hasData && hasData.transitioning) return                                                                    // 505
      actives.collapse('hide')                                                                                        // 506
      hasData || actives.data('bs.collapse', null)                                                                    // 507
    }                                                                                                                 // 508
                                                                                                                      // 509
    var dimension = this.dimension()                                                                                  // 510
                                                                                                                      // 511
    this.$element                                                                                                     // 512
      .removeClass('collapse')                                                                                        // 513
      .addClass('collapsing')                                                                                         // 514
      [dimension](0)                                                                                                  // 515
                                                                                                                      // 516
    this.transitioning = 1                                                                                            // 517
                                                                                                                      // 518
    var complete = function () {                                                                                      // 519
      this.$element                                                                                                   // 520
        .removeClass('collapsing')                                                                                    // 521
        .addClass('collapse in')                                                                                      // 522
        [dimension]('auto')                                                                                           // 523
      this.transitioning = 0                                                                                          // 524
      this.$element.trigger('shown.bs.collapse')                                                                      // 525
    }                                                                                                                 // 526
                                                                                                                      // 527
    if (!$.support.transition) return complete.call(this)                                                             // 528
                                                                                                                      // 529
    var scrollSize = $.camelCase(['scroll', dimension].join('-'))                                                     // 530
                                                                                                                      // 531
    this.$element                                                                                                     // 532
      .one($.support.transition.end, $.proxy(complete, this))                                                         // 533
      .emulateTransitionEnd(350)                                                                                      // 534
      [dimension](this.$element[0][scrollSize])                                                                       // 535
  }                                                                                                                   // 536
                                                                                                                      // 537
  Collapse.prototype.hide = function () {                                                                             // 538
    if (this.transitioning || !this.$element.hasClass('in')) return                                                   // 539
                                                                                                                      // 540
    var startEvent = $.Event('hide.bs.collapse')                                                                      // 541
    this.$element.trigger(startEvent)                                                                                 // 542
    if (startEvent.isDefaultPrevented()) return                                                                       // 543
                                                                                                                      // 544
    var dimension = this.dimension()                                                                                  // 545
                                                                                                                      // 546
    this.$element                                                                                                     // 547
      [dimension](this.$element[dimension]())                                                                         // 548
      [0].offsetHeight                                                                                                // 549
                                                                                                                      // 550
    this.$element                                                                                                     // 551
      .addClass('collapsing')                                                                                         // 552
      .removeClass('collapse')                                                                                        // 553
      .removeClass('in')                                                                                              // 554
                                                                                                                      // 555
    this.transitioning = 1                                                                                            // 556
                                                                                                                      // 557
    var complete = function () {                                                                                      // 558
      this.transitioning = 0                                                                                          // 559
      this.$element                                                                                                   // 560
        .trigger('hidden.bs.collapse')                                                                                // 561
        .removeClass('collapsing')                                                                                    // 562
        .addClass('collapse')                                                                                         // 563
    }                                                                                                                 // 564
                                                                                                                      // 565
    if (!$.support.transition) return complete.call(this)                                                             // 566
                                                                                                                      // 567
    this.$element                                                                                                     // 568
      [dimension](0)                                                                                                  // 569
      .one($.support.transition.end, $.proxy(complete, this))                                                         // 570
      .emulateTransitionEnd(350)                                                                                      // 571
  }                                                                                                                   // 572
                                                                                                                      // 573
  Collapse.prototype.toggle = function () {                                                                           // 574
    this[this.$element.hasClass('in') ? 'hide' : 'show']()                                                            // 575
  }                                                                                                                   // 576
                                                                                                                      // 577
                                                                                                                      // 578
  // COLLAPSE PLUGIN DEFINITION                                                                                       // 579
  // ==========================                                                                                       // 580
                                                                                                                      // 581
  var old = $.fn.collapse                                                                                             // 582
                                                                                                                      // 583
  $.fn.collapse = function (option) {                                                                                 // 584
    return this.each(function () {                                                                                    // 585
      var $this   = $(this)                                                                                           // 586
      var data    = $this.data('bs.collapse')                                                                         // 587
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)                // 588
                                                                                                                      // 589
      if (!data && options.toggle && option == 'show') option = !option                                               // 590
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))                                      // 591
      if (typeof option == 'string') data[option]()                                                                   // 592
    })                                                                                                                // 593
  }                                                                                                                   // 594
                                                                                                                      // 595
  $.fn.collapse.Constructor = Collapse                                                                                // 596
                                                                                                                      // 597
                                                                                                                      // 598
  // COLLAPSE NO CONFLICT                                                                                             // 599
  // ====================                                                                                             // 600
                                                                                                                      // 601
  $.fn.collapse.noConflict = function () {                                                                            // 602
    $.fn.collapse = old                                                                                               // 603
    return this                                                                                                       // 604
  }                                                                                                                   // 605
                                                                                                                      // 606
                                                                                                                      // 607
  // COLLAPSE DATA-API                                                                                                // 608
  // =================                                                                                                // 609
                                                                                                                      // 610
  $(document).on('click.bs.collapse.data-api', '[data-toggle=collapse]', function (e) {                               // 611
    var $this   = $(this), href                                                                                       // 612
    var target  = $this.attr('data-target')                                                                           // 613
        || e.preventDefault()                                                                                         // 614
        || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7                          // 615
    var $target = $(target)                                                                                           // 616
    var data    = $target.data('bs.collapse')                                                                         // 617
    var option  = data ? 'toggle' : $this.data()                                                                      // 618
    var parent  = $this.attr('data-parent')                                                                           // 619
    var $parent = parent && $(parent)                                                                                 // 620
                                                                                                                      // 621
    if (!data || !data.transitioning) {                                                                               // 622
      if ($parent) $parent.find('[data-toggle=collapse][data-parent="' + parent + '"]').not($this).addClass('collapsed')
      $this[$target.hasClass('in') ? 'addClass' : 'removeClass']('collapsed')                                         // 624
    }                                                                                                                 // 625
                                                                                                                      // 626
    $target.collapse(option)                                                                                          // 627
  })                                                                                                                  // 628
                                                                                                                      // 629
}(jQuery);                                                                                                            // 630
                                                                                                                      // 631
/* ========================================================================                                           // 632
 * Bootstrap: dropdown.js v3.1.1                                                                                      // 633
 * http://getbootstrap.com/javascript/#dropdowns                                                                      // 634
 * ========================================================================                                           // 635
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 636
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 637
 * ======================================================================== */                                        // 638
                                                                                                                      // 639
                                                                                                                      // 640
+function ($) {                                                                                                       // 641
  'use strict';                                                                                                       // 642
                                                                                                                      // 643
  // DROPDOWN CLASS DEFINITION                                                                                        // 644
  // =========================                                                                                        // 645
                                                                                                                      // 646
  var backdrop = '.dropdown-backdrop'                                                                                 // 647
  var toggle   = '[data-toggle=dropdown]'                                                                             // 648
  var Dropdown = function (element) {                                                                                 // 649
    $(element).on('click.bs.dropdown', this.toggle)                                                                   // 650
  }                                                                                                                   // 651
                                                                                                                      // 652
  Dropdown.prototype.toggle = function (e) {                                                                          // 653
    var $this = $(this)                                                                                               // 654
                                                                                                                      // 655
    if ($this.is('.disabled, :disabled')) return                                                                      // 656
                                                                                                                      // 657
    var $parent  = getParent($this)                                                                                   // 658
    var isActive = $parent.hasClass('open')                                                                           // 659
                                                                                                                      // 660
    clearMenus()                                                                                                      // 661
                                                                                                                      // 662
    if (!isActive) {                                                                                                  // 663
      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {                     // 664
        // if mobile we use a backdrop because click events don't delegate                                            // 665
        $('<div class="dropdown-backdrop"/>').insertAfter($(this)).on('click', clearMenus)                            // 666
      }                                                                                                               // 667
                                                                                                                      // 668
      var relatedTarget = { relatedTarget: this }                                                                     // 669
      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))                                                 // 670
                                                                                                                      // 671
      if (e.isDefaultPrevented()) return                                                                              // 672
                                                                                                                      // 673
      $parent                                                                                                         // 674
        .toggleClass('open')                                                                                          // 675
        .trigger('shown.bs.dropdown', relatedTarget)                                                                  // 676
                                                                                                                      // 677
      $this.focus()                                                                                                   // 678
    }                                                                                                                 // 679
                                                                                                                      // 680
    return false                                                                                                      // 681
  }                                                                                                                   // 682
                                                                                                                      // 683
  Dropdown.prototype.keydown = function (e) {                                                                         // 684
    if (!/(38|40|27)/.test(e.keyCode)) return                                                                         // 685
                                                                                                                      // 686
    var $this = $(this)                                                                                               // 687
                                                                                                                      // 688
    e.preventDefault()                                                                                                // 689
    e.stopPropagation()                                                                                               // 690
                                                                                                                      // 691
    if ($this.is('.disabled, :disabled')) return                                                                      // 692
                                                                                                                      // 693
    var $parent  = getParent($this)                                                                                   // 694
    var isActive = $parent.hasClass('open')                                                                           // 695
                                                                                                                      // 696
    if (!isActive || (isActive && e.keyCode == 27)) {                                                                 // 697
      if (e.which == 27) $parent.find(toggle).focus()                                                                 // 698
      return $this.click()                                                                                            // 699
    }                                                                                                                 // 700
                                                                                                                      // 701
    var desc = ' li:not(.divider):visible a'                                                                          // 702
    var $items = $parent.find('[role=menu]' + desc + ', [role=listbox]' + desc)                                       // 703
                                                                                                                      // 704
    if (!$items.length) return                                                                                        // 705
                                                                                                                      // 706
    var index = $items.index($items.filter(':focus'))                                                                 // 707
                                                                                                                      // 708
    if (e.keyCode == 38 && index > 0)                 index--                        // up                            // 709
    if (e.keyCode == 40 && index < $items.length - 1) index++                        // down                          // 710
    if (!~index)                                      index = 0                                                       // 711
                                                                                                                      // 712
    $items.eq(index).focus()                                                                                          // 713
  }                                                                                                                   // 714
                                                                                                                      // 715
  function clearMenus(e) {                                                                                            // 716
    $(backdrop).remove()                                                                                              // 717
    $(toggle).each(function () {                                                                                      // 718
      var $parent = getParent($(this))                                                                                // 719
      var relatedTarget = { relatedTarget: this }                                                                     // 720
      if (!$parent.hasClass('open')) return                                                                           // 721
      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))                                                 // 722
      if (e.isDefaultPrevented()) return                                                                              // 723
      $parent.removeClass('open').trigger('hidden.bs.dropdown', relatedTarget)                                        // 724
    })                                                                                                                // 725
  }                                                                                                                   // 726
                                                                                                                      // 727
  function getParent($this) {                                                                                         // 728
    var selector = $this.attr('data-target')                                                                          // 729
                                                                                                                      // 730
    if (!selector) {                                                                                                  // 731
      selector = $this.attr('href')                                                                                   // 732
      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7     // 733
    }                                                                                                                 // 734
                                                                                                                      // 735
    var $parent = selector && $(selector)                                                                             // 736
                                                                                                                      // 737
    return $parent && $parent.length ? $parent : $this.parent()                                                       // 738
  }                                                                                                                   // 739
                                                                                                                      // 740
                                                                                                                      // 741
  // DROPDOWN PLUGIN DEFINITION                                                                                       // 742
  // ==========================                                                                                       // 743
                                                                                                                      // 744
  var old = $.fn.dropdown                                                                                             // 745
                                                                                                                      // 746
  $.fn.dropdown = function (option) {                                                                                 // 747
    return this.each(function () {                                                                                    // 748
      var $this = $(this)                                                                                             // 749
      var data  = $this.data('bs.dropdown')                                                                           // 750
                                                                                                                      // 751
      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))                                               // 752
      if (typeof option == 'string') data[option].call($this)                                                         // 753
    })                                                                                                                // 754
  }                                                                                                                   // 755
                                                                                                                      // 756
  $.fn.dropdown.Constructor = Dropdown                                                                                // 757
                                                                                                                      // 758
                                                                                                                      // 759
  // DROPDOWN NO CONFLICT                                                                                             // 760
  // ====================                                                                                             // 761
                                                                                                                      // 762
  $.fn.dropdown.noConflict = function () {                                                                            // 763
    $.fn.dropdown = old                                                                                               // 764
    return this                                                                                                       // 765
  }                                                                                                                   // 766
                                                                                                                      // 767
                                                                                                                      // 768
  // APPLY TO STANDARD DROPDOWN ELEMENTS                                                                              // 769
  // ===================================                                                                              // 770
                                                                                                                      // 771
  $(document)                                                                                                         // 772
    .on('click.bs.dropdown.data-api', clearMenus)                                                                     // 773
    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })                         // 774
    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)                                              // 775
    .on('keydown.bs.dropdown.data-api', toggle + ', [role=menu], [role=listbox]', Dropdown.prototype.keydown)         // 776
                                                                                                                      // 777
}(jQuery);                                                                                                            // 778
                                                                                                                      // 779
/* ========================================================================                                           // 780
 * Bootstrap: modal.js v3.1.1                                                                                         // 781
 * http://getbootstrap.com/javascript/#modals                                                                         // 782
 * ========================================================================                                           // 783
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 784
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 785
 * ======================================================================== */                                        // 786
                                                                                                                      // 787
                                                                                                                      // 788
+function ($) {                                                                                                       // 789
  'use strict';                                                                                                       // 790
                                                                                                                      // 791
  // MODAL CLASS DEFINITION                                                                                           // 792
  // ======================                                                                                           // 793
                                                                                                                      // 794
  var Modal = function (element, options) {                                                                           // 795
    this.options   = options                                                                                          // 796
    this.$element  = $(element)                                                                                       // 797
    this.$backdrop =                                                                                                  // 798
    this.isShown   = null                                                                                             // 799
                                                                                                                      // 800
    if (this.options.remote) {                                                                                        // 801
      this.$element                                                                                                   // 802
        .find('.modal-content')                                                                                       // 803
        .load(this.options.remote, $.proxy(function () {                                                              // 804
          this.$element.trigger('loaded.bs.modal')                                                                    // 805
        }, this))                                                                                                     // 806
    }                                                                                                                 // 807
  }                                                                                                                   // 808
                                                                                                                      // 809
  Modal.DEFAULTS = {                                                                                                  // 810
    backdrop: true,                                                                                                   // 811
    keyboard: true,                                                                                                   // 812
    show: true                                                                                                        // 813
  }                                                                                                                   // 814
                                                                                                                      // 815
  Modal.prototype.toggle = function (_relatedTarget) {                                                                // 816
    return this[!this.isShown ? 'show' : 'hide'](_relatedTarget)                                                      // 817
  }                                                                                                                   // 818
                                                                                                                      // 819
  Modal.prototype.show = function (_relatedTarget) {                                                                  // 820
    var that = this                                                                                                   // 821
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })                                            // 822
                                                                                                                      // 823
    this.$element.trigger(e)                                                                                          // 824
                                                                                                                      // 825
    if (this.isShown || e.isDefaultPrevented()) return                                                                // 826
                                                                                                                      // 827
    this.isShown = true                                                                                               // 828
                                                                                                                      // 829
    this.escape()                                                                                                     // 830
                                                                                                                      // 831
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))                    // 832
                                                                                                                      // 833
    this.backdrop(function () {                                                                                       // 834
      var transition = $.support.transition && that.$element.hasClass('fade')                                         // 835
                                                                                                                      // 836
      if (!that.$element.parent().length) {                                                                           // 837
        that.$element.appendTo(document.body) // don't move modals dom position                                       // 838
      }                                                                                                               // 839
                                                                                                                      // 840
      that.$element                                                                                                   // 841
        .show()                                                                                                       // 842
        .scrollTop(0)                                                                                                 // 843
                                                                                                                      // 844
      if (transition) {                                                                                               // 845
        that.$element[0].offsetWidth // force reflow                                                                  // 846
      }                                                                                                               // 847
                                                                                                                      // 848
      that.$element                                                                                                   // 849
        .addClass('in')                                                                                               // 850
        .attr('aria-hidden', false)                                                                                   // 851
                                                                                                                      // 852
      that.enforceFocus()                                                                                             // 853
                                                                                                                      // 854
      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })                                            // 855
                                                                                                                      // 856
      transition ?                                                                                                    // 857
        that.$element.find('.modal-dialog') // wait for modal to slide in                                             // 858
          .one($.support.transition.end, function () {                                                                // 859
            that.$element.focus().trigger(e)                                                                          // 860
          })                                                                                                          // 861
          .emulateTransitionEnd(300) :                                                                                // 862
        that.$element.focus().trigger(e)                                                                              // 863
    })                                                                                                                // 864
  }                                                                                                                   // 865
                                                                                                                      // 866
  Modal.prototype.hide = function (e) {                                                                               // 867
    if (e) e.preventDefault()                                                                                         // 868
                                                                                                                      // 869
    e = $.Event('hide.bs.modal')                                                                                      // 870
                                                                                                                      // 871
    this.$element.trigger(e)                                                                                          // 872
                                                                                                                      // 873
    if (!this.isShown || e.isDefaultPrevented()) return                                                               // 874
                                                                                                                      // 875
    this.isShown = false                                                                                              // 876
                                                                                                                      // 877
    this.escape()                                                                                                     // 878
                                                                                                                      // 879
    $(document).off('focusin.bs.modal')                                                                               // 880
                                                                                                                      // 881
    this.$element                                                                                                     // 882
      .removeClass('in')                                                                                              // 883
      .attr('aria-hidden', true)                                                                                      // 884
      .off('click.dismiss.bs.modal')                                                                                  // 885
                                                                                                                      // 886
    $.support.transition && this.$element.hasClass('fade') ?                                                          // 887
      this.$element                                                                                                   // 888
        .one($.support.transition.end, $.proxy(this.hideModal, this))                                                 // 889
        .emulateTransitionEnd(300) :                                                                                  // 890
      this.hideModal()                                                                                                // 891
  }                                                                                                                   // 892
                                                                                                                      // 893
  Modal.prototype.enforceFocus = function () {                                                                        // 894
    $(document)                                                                                                       // 895
      .off('focusin.bs.modal') // guard against infinite focus loop                                                   // 896
      .on('focusin.bs.modal', $.proxy(function (e) {                                                                  // 897
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {                                   // 898
          this.$element.focus()                                                                                       // 899
        }                                                                                                             // 900
      }, this))                                                                                                       // 901
  }                                                                                                                   // 902
                                                                                                                      // 903
  Modal.prototype.escape = function () {                                                                              // 904
    if (this.isShown && this.options.keyboard) {                                                                      // 905
      this.$element.on('keyup.dismiss.bs.modal', $.proxy(function (e) {                                               // 906
        e.which == 27 && this.hide()                                                                                  // 907
      }, this))                                                                                                       // 908
    } else if (!this.isShown) {                                                                                       // 909
      this.$element.off('keyup.dismiss.bs.modal')                                                                     // 910
    }                                                                                                                 // 911
  }                                                                                                                   // 912
                                                                                                                      // 913
  Modal.prototype.hideModal = function () {                                                                           // 914
    var that = this                                                                                                   // 915
    this.$element.hide()                                                                                              // 916
    this.backdrop(function () {                                                                                       // 917
      that.removeBackdrop()                                                                                           // 918
      that.$element.trigger('hidden.bs.modal')                                                                        // 919
    })                                                                                                                // 920
  }                                                                                                                   // 921
                                                                                                                      // 922
  Modal.prototype.removeBackdrop = function () {                                                                      // 923
    this.$backdrop && this.$backdrop.remove()                                                                         // 924
    this.$backdrop = null                                                                                             // 925
  }                                                                                                                   // 926
                                                                                                                      // 927
  Modal.prototype.backdrop = function (callback) {                                                                    // 928
    var animate = this.$element.hasClass('fade') ? 'fade' : ''                                                        // 929
                                                                                                                      // 930
    if (this.isShown && this.options.backdrop) {                                                                      // 931
      var doAnimate = $.support.transition && animate                                                                 // 932
                                                                                                                      // 933
      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')                                            // 934
        .appendTo(document.body)                                                                                      // 935
                                                                                                                      // 936
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {                                               // 937
        if (e.target !== e.currentTarget) return                                                                      // 938
        this.options.backdrop == 'static'                                                                             // 939
          ? this.$element[0].focus.call(this.$element[0])                                                             // 940
          : this.hide.call(this)                                                                                      // 941
      }, this))                                                                                                       // 942
                                                                                                                      // 943
      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow                                                    // 944
                                                                                                                      // 945
      this.$backdrop.addClass('in')                                                                                   // 946
                                                                                                                      // 947
      if (!callback) return                                                                                           // 948
                                                                                                                      // 949
      doAnimate ?                                                                                                     // 950
        this.$backdrop                                                                                                // 951
          .one($.support.transition.end, callback)                                                                    // 952
          .emulateTransitionEnd(150) :                                                                                // 953
        callback()                                                                                                    // 954
                                                                                                                      // 955
    } else if (!this.isShown && this.$backdrop) {                                                                     // 956
      this.$backdrop.removeClass('in')                                                                                // 957
                                                                                                                      // 958
      $.support.transition && this.$element.hasClass('fade') ?                                                        // 959
        this.$backdrop                                                                                                // 960
          .one($.support.transition.end, callback)                                                                    // 961
          .emulateTransitionEnd(150) :                                                                                // 962
        callback()                                                                                                    // 963
                                                                                                                      // 964
    } else if (callback) {                                                                                            // 965
      callback()                                                                                                      // 966
    }                                                                                                                 // 967
  }                                                                                                                   // 968
                                                                                                                      // 969
                                                                                                                      // 970
  // MODAL PLUGIN DEFINITION                                                                                          // 971
  // =======================                                                                                          // 972
                                                                                                                      // 973
  var old = $.fn.modal                                                                                                // 974
                                                                                                                      // 975
  $.fn.modal = function (option, _relatedTarget) {                                                                    // 976
    return this.each(function () {                                                                                    // 977
      var $this   = $(this)                                                                                           // 978
      var data    = $this.data('bs.modal')                                                                            // 979
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)                   // 980
                                                                                                                      // 981
      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))                                            // 982
      if (typeof option == 'string') data[option](_relatedTarget)                                                     // 983
      else if (options.show) data.show(_relatedTarget)                                                                // 984
    })                                                                                                                // 985
  }                                                                                                                   // 986
                                                                                                                      // 987
  $.fn.modal.Constructor = Modal                                                                                      // 988
                                                                                                                      // 989
                                                                                                                      // 990
  // MODAL NO CONFLICT                                                                                                // 991
  // =================                                                                                                // 992
                                                                                                                      // 993
  $.fn.modal.noConflict = function () {                                                                               // 994
    $.fn.modal = old                                                                                                  // 995
    return this                                                                                                       // 996
  }                                                                                                                   // 997
                                                                                                                      // 998
                                                                                                                      // 999
  // MODAL DATA-API                                                                                                   // 1000
  // ==============                                                                                                   // 1001
                                                                                                                      // 1002
  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {                                   // 1003
    var $this   = $(this)                                                                                             // 1004
    var href    = $this.attr('href')                                                                                  // 1005
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) //strip for ie7        // 1006
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
                                                                                                                      // 1008
    if ($this.is('a')) e.preventDefault()                                                                             // 1009
                                                                                                                      // 1010
    $target                                                                                                           // 1011
      .modal(option, this)                                                                                            // 1012
      .one('hide', function () {                                                                                      // 1013
        $this.is(':visible') && $this.focus()                                                                         // 1014
      })                                                                                                              // 1015
  })                                                                                                                  // 1016
                                                                                                                      // 1017
  $(document)                                                                                                         // 1018
    .on('show.bs.modal', '.modal', function () { $(document.body).addClass('modal-open') })                           // 1019
    .on('hidden.bs.modal', '.modal', function () { $(document.body).removeClass('modal-open') })                      // 1020
                                                                                                                      // 1021
}(jQuery);                                                                                                            // 1022
                                                                                                                      // 1023
/* ========================================================================                                           // 1024
 * Bootstrap: tooltip.js v3.1.1                                                                                       // 1025
 * http://getbootstrap.com/javascript/#tooltip                                                                        // 1026
 * Inspired by the original jQuery.tipsy by Jason Frame                                                               // 1027
 * ========================================================================                                           // 1028
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 1029
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1030
 * ======================================================================== */                                        // 1031
                                                                                                                      // 1032
                                                                                                                      // 1033
+function ($) {                                                                                                       // 1034
  'use strict';                                                                                                       // 1035
                                                                                                                      // 1036
  // TOOLTIP PUBLIC CLASS DEFINITION                                                                                  // 1037
  // ===============================                                                                                  // 1038
                                                                                                                      // 1039
  var Tooltip = function (element, options) {                                                                         // 1040
    this.type       =                                                                                                 // 1041
    this.options    =                                                                                                 // 1042
    this.enabled    =                                                                                                 // 1043
    this.timeout    =                                                                                                 // 1044
    this.hoverState =                                                                                                 // 1045
    this.$element   = null                                                                                            // 1046
                                                                                                                      // 1047
    this.init('tooltip', element, options)                                                                            // 1048
  }                                                                                                                   // 1049
                                                                                                                      // 1050
  Tooltip.DEFAULTS = {                                                                                                // 1051
    animation: true,                                                                                                  // 1052
    placement: 'top',                                                                                                 // 1053
    selector: false,                                                                                                  // 1054
    template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',        // 1055
    trigger: 'hover focus',                                                                                           // 1056
    title: '',                                                                                                        // 1057
    delay: 0,                                                                                                         // 1058
    html: false,                                                                                                      // 1059
    container: false                                                                                                  // 1060
  }                                                                                                                   // 1061
                                                                                                                      // 1062
  Tooltip.prototype.init = function (type, element, options) {                                                        // 1063
    this.enabled  = true                                                                                              // 1064
    this.type     = type                                                                                              // 1065
    this.$element = $(element)                                                                                        // 1066
    this.options  = this.getOptions(options)                                                                          // 1067
                                                                                                                      // 1068
    var triggers = this.options.trigger.split(' ')                                                                    // 1069
                                                                                                                      // 1070
    for (var i = triggers.length; i--;) {                                                                             // 1071
      var trigger = triggers[i]                                                                                       // 1072
                                                                                                                      // 1073
      if (trigger == 'click') {                                                                                       // 1074
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))                     // 1075
      } else if (trigger != 'manual') {                                                                               // 1076
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'                                                  // 1077
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'                                                 // 1078
                                                                                                                      // 1079
        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))                // 1080
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))                // 1081
      }                                                                                                               // 1082
    }                                                                                                                 // 1083
                                                                                                                      // 1084
    this.options.selector ?                                                                                           // 1085
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :                             // 1086
      this.fixTitle()                                                                                                 // 1087
  }                                                                                                                   // 1088
                                                                                                                      // 1089
  Tooltip.prototype.getDefaults = function () {                                                                       // 1090
    return Tooltip.DEFAULTS                                                                                           // 1091
  }                                                                                                                   // 1092
                                                                                                                      // 1093
  Tooltip.prototype.getOptions = function (options) {                                                                 // 1094
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)                                         // 1095
                                                                                                                      // 1096
    if (options.delay && typeof options.delay == 'number') {                                                          // 1097
      options.delay = {                                                                                               // 1098
        show: options.delay,                                                                                          // 1099
        hide: options.delay                                                                                           // 1100
      }                                                                                                               // 1101
    }                                                                                                                 // 1102
                                                                                                                      // 1103
    return options                                                                                                    // 1104
  }                                                                                                                   // 1105
                                                                                                                      // 1106
  Tooltip.prototype.getDelegateOptions = function () {                                                                // 1107
    var options  = {}                                                                                                 // 1108
    var defaults = this.getDefaults()                                                                                 // 1109
                                                                                                                      // 1110
    this._options && $.each(this._options, function (key, value) {                                                    // 1111
      if (defaults[key] != value) options[key] = value                                                                // 1112
    })                                                                                                                // 1113
                                                                                                                      // 1114
    return options                                                                                                    // 1115
  }                                                                                                                   // 1116
                                                                                                                      // 1117
  Tooltip.prototype.enter = function (obj) {                                                                          // 1118
    var self = obj instanceof this.constructor ?                                                                      // 1119
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)                        // 1120
                                                                                                                      // 1121
    clearTimeout(self.timeout)                                                                                        // 1122
                                                                                                                      // 1123
    self.hoverState = 'in'                                                                                            // 1124
                                                                                                                      // 1125
    if (!self.options.delay || !self.options.delay.show) return self.show()                                           // 1126
                                                                                                                      // 1127
    self.timeout = setTimeout(function () {                                                                           // 1128
      if (self.hoverState == 'in') self.show()                                                                        // 1129
    }, self.options.delay.show)                                                                                       // 1130
  }                                                                                                                   // 1131
                                                                                                                      // 1132
  Tooltip.prototype.leave = function (obj) {                                                                          // 1133
    var self = obj instanceof this.constructor ?                                                                      // 1134
      obj : $(obj.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type)                        // 1135
                                                                                                                      // 1136
    clearTimeout(self.timeout)                                                                                        // 1137
                                                                                                                      // 1138
    self.hoverState = 'out'                                                                                           // 1139
                                                                                                                      // 1140
    if (!self.options.delay || !self.options.delay.hide) return self.hide()                                           // 1141
                                                                                                                      // 1142
    self.timeout = setTimeout(function () {                                                                           // 1143
      if (self.hoverState == 'out') self.hide()                                                                       // 1144
    }, self.options.delay.hide)                                                                                       // 1145
  }                                                                                                                   // 1146
                                                                                                                      // 1147
  Tooltip.prototype.show = function () {                                                                              // 1148
    var e = $.Event('show.bs.' + this.type)                                                                           // 1149
                                                                                                                      // 1150
    if (this.hasContent() && this.enabled) {                                                                          // 1151
      this.$element.trigger(e)                                                                                        // 1152
                                                                                                                      // 1153
      if (e.isDefaultPrevented()) return                                                                              // 1154
      var that = this;                                                                                                // 1155
                                                                                                                      // 1156
      var $tip = this.tip()                                                                                           // 1157
                                                                                                                      // 1158
      this.setContent()                                                                                               // 1159
                                                                                                                      // 1160
      if (this.options.animation) $tip.addClass('fade')                                                               // 1161
                                                                                                                      // 1162
      var placement = typeof this.options.placement == 'function' ?                                                   // 1163
        this.options.placement.call(this, $tip[0], this.$element[0]) :                                                // 1164
        this.options.placement                                                                                        // 1165
                                                                                                                      // 1166
      var autoToken = /\s?auto?\s?/i                                                                                  // 1167
      var autoPlace = autoToken.test(placement)                                                                       // 1168
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'                                            // 1169
                                                                                                                      // 1170
      $tip                                                                                                            // 1171
        .detach()                                                                                                     // 1172
        .css({ top: 0, left: 0, display: 'block' })                                                                   // 1173
        .addClass(placement)                                                                                          // 1174
                                                                                                                      // 1175
      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)                // 1176
                                                                                                                      // 1177
      var pos          = this.getPosition()                                                                           // 1178
      var actualWidth  = $tip[0].offsetWidth                                                                          // 1179
      var actualHeight = $tip[0].offsetHeight                                                                         // 1180
                                                                                                                      // 1181
      if (autoPlace) {                                                                                                // 1182
        var $parent = this.$element.parent()                                                                          // 1183
                                                                                                                      // 1184
        var orgPlacement = placement                                                                                  // 1185
        var docScroll    = document.documentElement.scrollTop || document.body.scrollTop                              // 1186
        var parentWidth  = this.options.container == 'body' ? window.innerWidth  : $parent.outerWidth()               // 1187
        var parentHeight = this.options.container == 'body' ? window.innerHeight : $parent.outerHeight()              // 1188
        var parentLeft   = this.options.container == 'body' ? 0 : $parent.offset().left                               // 1189
                                                                                                                      // 1190
        placement = placement == 'bottom' && pos.top   + pos.height  + actualHeight - docScroll > parentHeight  ? 'top'    :
                    placement == 'top'    && pos.top   - docScroll   - actualHeight < 0                         ? 'bottom' :
                    placement == 'right'  && pos.right + actualWidth > parentWidth                              ? 'left'   :
                    placement == 'left'   && pos.left  - actualWidth < parentLeft                               ? 'right'  :
                    placement                                                                                         // 1195
                                                                                                                      // 1196
        $tip                                                                                                          // 1197
          .removeClass(orgPlacement)                                                                                  // 1198
          .addClass(placement)                                                                                        // 1199
      }                                                                                                               // 1200
                                                                                                                      // 1201
      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)                      // 1202
                                                                                                                      // 1203
      this.applyPlacement(calculatedOffset, placement)                                                                // 1204
      this.hoverState = null                                                                                          // 1205
                                                                                                                      // 1206
      var complete = function() {                                                                                     // 1207
        that.$element.trigger('shown.bs.' + that.type)                                                                // 1208
      }                                                                                                               // 1209
                                                                                                                      // 1210
      $.support.transition && this.$tip.hasClass('fade') ?                                                            // 1211
        $tip                                                                                                          // 1212
          .one($.support.transition.end, complete)                                                                    // 1213
          .emulateTransitionEnd(150) :                                                                                // 1214
        complete()                                                                                                    // 1215
    }                                                                                                                 // 1216
  }                                                                                                                   // 1217
                                                                                                                      // 1218
  Tooltip.prototype.applyPlacement = function (offset, placement) {                                                   // 1219
    var replace                                                                                                       // 1220
    var $tip   = this.tip()                                                                                           // 1221
    var width  = $tip[0].offsetWidth                                                                                  // 1222
    var height = $tip[0].offsetHeight                                                                                 // 1223
                                                                                                                      // 1224
    // manually read margins because getBoundingClientRect includes difference                                        // 1225
    var marginTop = parseInt($tip.css('margin-top'), 10)                                                              // 1226
    var marginLeft = parseInt($tip.css('margin-left'), 10)                                                            // 1227
                                                                                                                      // 1228
    // we must check for NaN for ie 8/9                                                                               // 1229
    if (isNaN(marginTop))  marginTop  = 0                                                                             // 1230
    if (isNaN(marginLeft)) marginLeft = 0                                                                             // 1231
                                                                                                                      // 1232
    offset.top  = offset.top  + marginTop                                                                             // 1233
    offset.left = offset.left + marginLeft                                                                            // 1234
                                                                                                                      // 1235
    // $.fn.offset doesn't round pixel values                                                                         // 1236
    // so we use setOffset directly with our own function B-0                                                         // 1237
    $.offset.setOffset($tip[0], $.extend({                                                                            // 1238
      using: function (props) {                                                                                       // 1239
        $tip.css({                                                                                                    // 1240
          top: Math.round(props.top),                                                                                 // 1241
          left: Math.round(props.left)                                                                                // 1242
        })                                                                                                            // 1243
      }                                                                                                               // 1244
    }, offset), 0)                                                                                                    // 1245
                                                                                                                      // 1246
    $tip.addClass('in')                                                                                               // 1247
                                                                                                                      // 1248
    // check to see if placing tip in new offset caused the tip to resize itself                                      // 1249
    var actualWidth  = $tip[0].offsetWidth                                                                            // 1250
    var actualHeight = $tip[0].offsetHeight                                                                           // 1251
                                                                                                                      // 1252
    if (placement == 'top' && actualHeight != height) {                                                               // 1253
      replace = true                                                                                                  // 1254
      offset.top = offset.top + height - actualHeight                                                                 // 1255
    }                                                                                                                 // 1256
                                                                                                                      // 1257
    if (/bottom|top/.test(placement)) {                                                                               // 1258
      var delta = 0                                                                                                   // 1259
                                                                                                                      // 1260
      if (offset.left < 0) {                                                                                          // 1261
        delta       = offset.left * -2                                                                                // 1262
        offset.left = 0                                                                                               // 1263
                                                                                                                      // 1264
        $tip.offset(offset)                                                                                           // 1265
                                                                                                                      // 1266
        actualWidth  = $tip[0].offsetWidth                                                                            // 1267
        actualHeight = $tip[0].offsetHeight                                                                           // 1268
      }                                                                                                               // 1269
                                                                                                                      // 1270
      this.replaceArrow(delta - width + actualWidth, actualWidth, 'left')                                             // 1271
    } else {                                                                                                          // 1272
      this.replaceArrow(actualHeight - height, actualHeight, 'top')                                                   // 1273
    }                                                                                                                 // 1274
                                                                                                                      // 1275
    if (replace) $tip.offset(offset)                                                                                  // 1276
  }                                                                                                                   // 1277
                                                                                                                      // 1278
  Tooltip.prototype.replaceArrow = function (delta, dimension, position) {                                            // 1279
    this.arrow().css(position, delta ? (50 * (1 - delta / dimension) + '%') : '')                                     // 1280
  }                                                                                                                   // 1281
                                                                                                                      // 1282
  Tooltip.prototype.setContent = function () {                                                                        // 1283
    var $tip  = this.tip()                                                                                            // 1284
    var title = this.getTitle()                                                                                       // 1285
                                                                                                                      // 1286
    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)                                           // 1287
    $tip.removeClass('fade in top bottom left right')                                                                 // 1288
  }                                                                                                                   // 1289
                                                                                                                      // 1290
  Tooltip.prototype.hide = function () {                                                                              // 1291
    var that = this                                                                                                   // 1292
    var $tip = this.tip()                                                                                             // 1293
    var e    = $.Event('hide.bs.' + this.type)                                                                        // 1294
                                                                                                                      // 1295
    function complete() {                                                                                             // 1296
      if (that.hoverState != 'in') $tip.detach()                                                                      // 1297
      that.$element.trigger('hidden.bs.' + that.type)                                                                 // 1298
    }                                                                                                                 // 1299
                                                                                                                      // 1300
    this.$element.trigger(e)                                                                                          // 1301
                                                                                                                      // 1302
    if (e.isDefaultPrevented()) return                                                                                // 1303
                                                                                                                      // 1304
    $tip.removeClass('in')                                                                                            // 1305
                                                                                                                      // 1306
    $.support.transition && this.$tip.hasClass('fade') ?                                                              // 1307
      $tip                                                                                                            // 1308
        .one($.support.transition.end, complete)                                                                      // 1309
        .emulateTransitionEnd(150) :                                                                                  // 1310
      complete()                                                                                                      // 1311
                                                                                                                      // 1312
    this.hoverState = null                                                                                            // 1313
                                                                                                                      // 1314
    return this                                                                                                       // 1315
  }                                                                                                                   // 1316
                                                                                                                      // 1317
  Tooltip.prototype.fixTitle = function () {                                                                          // 1318
    var $e = this.$element                                                                                            // 1319
    if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {                                     // 1320
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')                                        // 1321
    }                                                                                                                 // 1322
  }                                                                                                                   // 1323
                                                                                                                      // 1324
  Tooltip.prototype.hasContent = function () {                                                                        // 1325
    return this.getTitle()                                                                                            // 1326
  }                                                                                                                   // 1327
                                                                                                                      // 1328
  Tooltip.prototype.getPosition = function () {                                                                       // 1329
    var el = this.$element[0]                                                                                         // 1330
    return $.extend({}, (typeof el.getBoundingClientRect == 'function') ? el.getBoundingClientRect() : {              // 1331
      width: el.offsetWidth,                                                                                          // 1332
      height: el.offsetHeight                                                                                         // 1333
    }, this.$element.offset())                                                                                        // 1334
  }                                                                                                                   // 1335
                                                                                                                      // 1336
  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {                      // 1337
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2  } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width   } // 1341
  }                                                                                                                   // 1342
                                                                                                                      // 1343
  Tooltip.prototype.getTitle = function () {                                                                          // 1344
    var title                                                                                                         // 1345
    var $e = this.$element                                                                                            // 1346
    var o  = this.options                                                                                             // 1347
                                                                                                                      // 1348
    title = $e.attr('data-original-title')                                                                            // 1349
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)                                              // 1350
                                                                                                                      // 1351
    return title                                                                                                      // 1352
  }                                                                                                                   // 1353
                                                                                                                      // 1354
  Tooltip.prototype.tip = function () {                                                                               // 1355
    return this.$tip = this.$tip || $(this.options.template)                                                          // 1356
  }                                                                                                                   // 1357
                                                                                                                      // 1358
  Tooltip.prototype.arrow = function () {                                                                             // 1359
    return this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow')                                             // 1360
  }                                                                                                                   // 1361
                                                                                                                      // 1362
  Tooltip.prototype.validate = function () {                                                                          // 1363
    if (!this.$element[0].parentNode) {                                                                               // 1364
      this.hide()                                                                                                     // 1365
      this.$element = null                                                                                            // 1366
      this.options  = null                                                                                            // 1367
    }                                                                                                                 // 1368
  }                                                                                                                   // 1369
                                                                                                                      // 1370
  Tooltip.prototype.enable = function () {                                                                            // 1371
    this.enabled = true                                                                                               // 1372
  }                                                                                                                   // 1373
                                                                                                                      // 1374
  Tooltip.prototype.disable = function () {                                                                           // 1375
    this.enabled = false                                                                                              // 1376
  }                                                                                                                   // 1377
                                                                                                                      // 1378
  Tooltip.prototype.toggleEnabled = function () {                                                                     // 1379
    this.enabled = !this.enabled                                                                                      // 1380
  }                                                                                                                   // 1381
                                                                                                                      // 1382
  Tooltip.prototype.toggle = function (e) {                                                                           // 1383
    var self = e ? $(e.currentTarget)[this.type](this.getDelegateOptions()).data('bs.' + this.type) : this            // 1384
    self.tip().hasClass('in') ? self.leave(self) : self.enter(self)                                                   // 1385
  }                                                                                                                   // 1386
                                                                                                                      // 1387
  Tooltip.prototype.destroy = function () {                                                                           // 1388
    clearTimeout(this.timeout)                                                                                        // 1389
    this.hide().$element.off('.' + this.type).removeData('bs.' + this.type)                                           // 1390
  }                                                                                                                   // 1391
                                                                                                                      // 1392
                                                                                                                      // 1393
  // TOOLTIP PLUGIN DEFINITION                                                                                        // 1394
  // =========================                                                                                        // 1395
                                                                                                                      // 1396
  var old = $.fn.tooltip                                                                                              // 1397
                                                                                                                      // 1398
  $.fn.tooltip = function (option) {                                                                                  // 1399
    return this.each(function () {                                                                                    // 1400
      var $this   = $(this)                                                                                           // 1401
      var data    = $this.data('bs.tooltip')                                                                          // 1402
      var options = typeof option == 'object' && option                                                               // 1403
                                                                                                                      // 1404
      if (!data && option == 'destroy') return                                                                        // 1405
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))                                        // 1406
      if (typeof option == 'string') data[option]()                                                                   // 1407
    })                                                                                                                // 1408
  }                                                                                                                   // 1409
                                                                                                                      // 1410
  $.fn.tooltip.Constructor = Tooltip                                                                                  // 1411
                                                                                                                      // 1412
                                                                                                                      // 1413
  // TOOLTIP NO CONFLICT                                                                                              // 1414
  // ===================                                                                                              // 1415
                                                                                                                      // 1416
  $.fn.tooltip.noConflict = function () {                                                                             // 1417
    $.fn.tooltip = old                                                                                                // 1418
    return this                                                                                                       // 1419
  }                                                                                                                   // 1420
                                                                                                                      // 1421
}(jQuery);                                                                                                            // 1422
                                                                                                                      // 1423
/* ========================================================================                                           // 1424
 * Bootstrap: popover.js v3.1.1                                                                                       // 1425
 * http://getbootstrap.com/javascript/#popovers                                                                       // 1426
 * ========================================================================                                           // 1427
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 1428
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1429
 * ======================================================================== */                                        // 1430
                                                                                                                      // 1431
                                                                                                                      // 1432
+function ($) {                                                                                                       // 1433
  'use strict';                                                                                                       // 1434
                                                                                                                      // 1435
  // POPOVER PUBLIC CLASS DEFINITION                                                                                  // 1436
  // ===============================                                                                                  // 1437
                                                                                                                      // 1438
  var Popover = function (element, options) {                                                                         // 1439
    this.init('popover', element, options)                                                                            // 1440
  }                                                                                                                   // 1441
                                                                                                                      // 1442
  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')                                                   // 1443
                                                                                                                      // 1444
  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {                                                // 1445
    placement: 'right',                                                                                               // 1446
    trigger: 'click',                                                                                                 // 1447
    content: '',                                                                                                      // 1448
    template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
  })                                                                                                                  // 1450
                                                                                                                      // 1451
                                                                                                                      // 1452
  // NOTE: POPOVER EXTENDS tooltip.js                                                                                 // 1453
  // ================================                                                                                 // 1454
                                                                                                                      // 1455
  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)                                                // 1456
                                                                                                                      // 1457
  Popover.prototype.constructor = Popover                                                                             // 1458
                                                                                                                      // 1459
  Popover.prototype.getDefaults = function () {                                                                       // 1460
    return Popover.DEFAULTS                                                                                           // 1461
  }                                                                                                                   // 1462
                                                                                                                      // 1463
  Popover.prototype.setContent = function () {                                                                        // 1464
    var $tip    = this.tip()                                                                                          // 1465
    var title   = this.getTitle()                                                                                     // 1466
    var content = this.getContent()                                                                                   // 1467
                                                                                                                      // 1468
    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)                                           // 1469
    $tip.find('.popover-content')[ // we use append for html objects to maintain js events                            // 1470
      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'                                   // 1471
    ](content)                                                                                                        // 1472
                                                                                                                      // 1473
    $tip.removeClass('fade top bottom left right in')                                                                 // 1474
                                                                                                                      // 1475
    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do                                      // 1476
    // this manually by checking the contents.                                                                        // 1477
    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()                                       // 1478
  }                                                                                                                   // 1479
                                                                                                                      // 1480
  Popover.prototype.hasContent = function () {                                                                        // 1481
    return this.getTitle() || this.getContent()                                                                       // 1482
  }                                                                                                                   // 1483
                                                                                                                      // 1484
  Popover.prototype.getContent = function () {                                                                        // 1485
    var $e = this.$element                                                                                            // 1486
    var o  = this.options                                                                                             // 1487
                                                                                                                      // 1488
    return $e.attr('data-content')                                                                                    // 1489
      || (typeof o.content == 'function' ?                                                                            // 1490
            o.content.call($e[0]) :                                                                                   // 1491
            o.content)                                                                                                // 1492
  }                                                                                                                   // 1493
                                                                                                                      // 1494
  Popover.prototype.arrow = function () {                                                                             // 1495
    return this.$arrow = this.$arrow || this.tip().find('.arrow')                                                     // 1496
  }                                                                                                                   // 1497
                                                                                                                      // 1498
  Popover.prototype.tip = function () {                                                                               // 1499
    if (!this.$tip) this.$tip = $(this.options.template)                                                              // 1500
    return this.$tip                                                                                                  // 1501
  }                                                                                                                   // 1502
                                                                                                                      // 1503
                                                                                                                      // 1504
  // POPOVER PLUGIN DEFINITION                                                                                        // 1505
  // =========================                                                                                        // 1506
                                                                                                                      // 1507
  var old = $.fn.popover                                                                                              // 1508
                                                                                                                      // 1509
  $.fn.popover = function (option) {                                                                                  // 1510
    return this.each(function () {                                                                                    // 1511
      var $this   = $(this)                                                                                           // 1512
      var data    = $this.data('bs.popover')                                                                          // 1513
      var options = typeof option == 'object' && option                                                               // 1514
                                                                                                                      // 1515
      if (!data && option == 'destroy') return                                                                        // 1516
      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))                                        // 1517
      if (typeof option == 'string') data[option]()                                                                   // 1518
    })                                                                                                                // 1519
  }                                                                                                                   // 1520
                                                                                                                      // 1521
  $.fn.popover.Constructor = Popover                                                                                  // 1522
                                                                                                                      // 1523
                                                                                                                      // 1524
  // POPOVER NO CONFLICT                                                                                              // 1525
  // ===================                                                                                              // 1526
                                                                                                                      // 1527
  $.fn.popover.noConflict = function () {                                                                             // 1528
    $.fn.popover = old                                                                                                // 1529
    return this                                                                                                       // 1530
  }                                                                                                                   // 1531
                                                                                                                      // 1532
}(jQuery);                                                                                                            // 1533
                                                                                                                      // 1534
/* ========================================================================                                           // 1535
 * Bootstrap: scrollspy.js v3.1.1                                                                                     // 1536
 * http://getbootstrap.com/javascript/#scrollspy                                                                      // 1537
 * ========================================================================                                           // 1538
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 1539
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1540
 * ======================================================================== */                                        // 1541
                                                                                                                      // 1542
                                                                                                                      // 1543
+function ($) {                                                                                                       // 1544
  'use strict';                                                                                                       // 1545
                                                                                                                      // 1546
  // SCROLLSPY CLASS DEFINITION                                                                                       // 1547
  // ==========================                                                                                       // 1548
                                                                                                                      // 1549
  function ScrollSpy(element, options) {                                                                              // 1550
    var href                                                                                                          // 1551
    var process  = $.proxy(this.process, this)                                                                        // 1552
                                                                                                                      // 1553
    this.$element       = $(element).is('body') ? $(window) : $(element)                                              // 1554
    this.$body          = $('body')                                                                                   // 1555
    this.$scrollElement = this.$element.on('scroll.bs.scroll-spy.data-api', process)                                  // 1556
    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)                                                   // 1557
    this.selector       = (this.options.target                                                                        // 1558
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7                     // 1559
      || '') + ' .nav li > a'                                                                                         // 1560
    this.offsets        = $([])                                                                                       // 1561
    this.targets        = $([])                                                                                       // 1562
    this.activeTarget   = null                                                                                        // 1563
                                                                                                                      // 1564
    this.refresh()                                                                                                    // 1565
    this.process()                                                                                                    // 1566
  }                                                                                                                   // 1567
                                                                                                                      // 1568
  ScrollSpy.DEFAULTS = {                                                                                              // 1569
    offset: 10                                                                                                        // 1570
  }                                                                                                                   // 1571
                                                                                                                      // 1572
  ScrollSpy.prototype.refresh = function () {                                                                         // 1573
    var offsetMethod = this.$element[0] == window ? 'offset' : 'position'                                             // 1574
                                                                                                                      // 1575
    this.offsets = $([])                                                                                              // 1576
    this.targets = $([])                                                                                              // 1577
                                                                                                                      // 1578
    var self     = this                                                                                               // 1579
    var $targets = this.$body                                                                                         // 1580
      .find(this.selector)                                                                                            // 1581
      .map(function () {                                                                                              // 1582
        var $el   = $(this)                                                                                           // 1583
        var href  = $el.data('target') || $el.attr('href')                                                            // 1584
        var $href = /^#./.test(href) && $(href)                                                                       // 1585
                                                                                                                      // 1586
        return ($href                                                                                                 // 1587
          && $href.length                                                                                             // 1588
          && $href.is(':visible')                                                                                     // 1589
          && [[ $href[offsetMethod]().top + (!$.isWindow(self.$scrollElement.get(0)) && self.$scrollElement.scrollTop()), href ]]) || null
      })                                                                                                              // 1591
      .sort(function (a, b) { return a[0] - b[0] })                                                                   // 1592
      .each(function () {                                                                                             // 1593
        self.offsets.push(this[0])                                                                                    // 1594
        self.targets.push(this[1])                                                                                    // 1595
      })                                                                                                              // 1596
  }                                                                                                                   // 1597
                                                                                                                      // 1598
  ScrollSpy.prototype.process = function () {                                                                         // 1599
    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset                                          // 1600
    var scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight                              // 1601
    var maxScroll    = scrollHeight - this.$scrollElement.height()                                                    // 1602
    var offsets      = this.offsets                                                                                   // 1603
    var targets      = this.targets                                                                                   // 1604
    var activeTarget = this.activeTarget                                                                              // 1605
    var i                                                                                                             // 1606
                                                                                                                      // 1607
    if (scrollTop >= maxScroll) {                                                                                     // 1608
      return activeTarget != (i = targets.last()[0]) && this.activate(i)                                              // 1609
    }                                                                                                                 // 1610
                                                                                                                      // 1611
    if (activeTarget && scrollTop <= offsets[0]) {                                                                    // 1612
      return activeTarget != (i = targets[0]) && this.activate(i)                                                     // 1613
    }                                                                                                                 // 1614
                                                                                                                      // 1615
    for (i = offsets.length; i--;) {                                                                                  // 1616
      activeTarget != targets[i]                                                                                      // 1617
        && scrollTop >= offsets[i]                                                                                    // 1618
        && (!offsets[i + 1] || scrollTop <= offsets[i + 1])                                                           // 1619
        && this.activate( targets[i] )                                                                                // 1620
    }                                                                                                                 // 1621
  }                                                                                                                   // 1622
                                                                                                                      // 1623
  ScrollSpy.prototype.activate = function (target) {                                                                  // 1624
    this.activeTarget = target                                                                                        // 1625
                                                                                                                      // 1626
    $(this.selector)                                                                                                  // 1627
      .parentsUntil(this.options.target, '.active')                                                                   // 1628
      .removeClass('active')                                                                                          // 1629
                                                                                                                      // 1630
    var selector = this.selector +                                                                                    // 1631
        '[data-target="' + target + '"],' +                                                                           // 1632
        this.selector + '[href="' + target + '"]'                                                                     // 1633
                                                                                                                      // 1634
    var active = $(selector)                                                                                          // 1635
      .parents('li')                                                                                                  // 1636
      .addClass('active')                                                                                             // 1637
                                                                                                                      // 1638
    if (active.parent('.dropdown-menu').length) {                                                                     // 1639
      active = active                                                                                                 // 1640
        .closest('li.dropdown')                                                                                       // 1641
        .addClass('active')                                                                                           // 1642
    }                                                                                                                 // 1643
                                                                                                                      // 1644
    active.trigger('activate.bs.scrollspy')                                                                           // 1645
  }                                                                                                                   // 1646
                                                                                                                      // 1647
                                                                                                                      // 1648
  // SCROLLSPY PLUGIN DEFINITION                                                                                      // 1649
  // ===========================                                                                                      // 1650
                                                                                                                      // 1651
  var old = $.fn.scrollspy                                                                                            // 1652
                                                                                                                      // 1653
  $.fn.scrollspy = function (option) {                                                                                // 1654
    return this.each(function () {                                                                                    // 1655
      var $this   = $(this)                                                                                           // 1656
      var data    = $this.data('bs.scrollspy')                                                                        // 1657
      var options = typeof option == 'object' && option                                                               // 1658
                                                                                                                      // 1659
      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))                                    // 1660
      if (typeof option == 'string') data[option]()                                                                   // 1661
    })                                                                                                                // 1662
  }                                                                                                                   // 1663
                                                                                                                      // 1664
  $.fn.scrollspy.Constructor = ScrollSpy                                                                              // 1665
                                                                                                                      // 1666
                                                                                                                      // 1667
  // SCROLLSPY NO CONFLICT                                                                                            // 1668
  // =====================                                                                                            // 1669
                                                                                                                      // 1670
  $.fn.scrollspy.noConflict = function () {                                                                           // 1671
    $.fn.scrollspy = old                                                                                              // 1672
    return this                                                                                                       // 1673
  }                                                                                                                   // 1674
                                                                                                                      // 1675
                                                                                                                      // 1676
  // SCROLLSPY DATA-API                                                                                               // 1677
  // ==================                                                                                               // 1678
                                                                                                                      // 1679
  $(window).on('load', function () {                                                                                  // 1680
    $('[data-spy="scroll"]').each(function () {                                                                       // 1681
      var $spy = $(this)                                                                                              // 1682
      $spy.scrollspy($spy.data())                                                                                     // 1683
    })                                                                                                                // 1684
  })                                                                                                                  // 1685
                                                                                                                      // 1686
}(jQuery);                                                                                                            // 1687
                                                                                                                      // 1688
/* ========================================================================                                           // 1689
 * Bootstrap: tab.js v3.1.1                                                                                           // 1690
 * http://getbootstrap.com/javascript/#tabs                                                                           // 1691
 * ========================================================================                                           // 1692
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 1693
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1694
 * ======================================================================== */                                        // 1695
                                                                                                                      // 1696
                                                                                                                      // 1697
+function ($) {                                                                                                       // 1698
  'use strict';                                                                                                       // 1699
                                                                                                                      // 1700
  // TAB CLASS DEFINITION                                                                                             // 1701
  // ====================                                                                                             // 1702
                                                                                                                      // 1703
  var Tab = function (element) {                                                                                      // 1704
    this.element = $(element)                                                                                         // 1705
  }                                                                                                                   // 1706
                                                                                                                      // 1707
  Tab.prototype.show = function () {                                                                                  // 1708
    var $this    = this.element                                                                                       // 1709
    var $ul      = $this.closest('ul:not(.dropdown-menu)')                                                            // 1710
    var selector = $this.data('target')                                                                               // 1711
                                                                                                                      // 1712
    if (!selector) {                                                                                                  // 1713
      selector = $this.attr('href')                                                                                   // 1714
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7                                   // 1715
    }                                                                                                                 // 1716
                                                                                                                      // 1717
    if ($this.parent('li').hasClass('active')) return                                                                 // 1718
                                                                                                                      // 1719
    var previous = $ul.find('.active:last a')[0]                                                                      // 1720
    var e        = $.Event('show.bs.tab', {                                                                           // 1721
      relatedTarget: previous                                                                                         // 1722
    })                                                                                                                // 1723
                                                                                                                      // 1724
    $this.trigger(e)                                                                                                  // 1725
                                                                                                                      // 1726
    if (e.isDefaultPrevented()) return                                                                                // 1727
                                                                                                                      // 1728
    var $target = $(selector)                                                                                         // 1729
                                                                                                                      // 1730
    this.activate($this.parent('li'), $ul)                                                                            // 1731
    this.activate($target, $target.parent(), function () {                                                            // 1732
      $this.trigger({                                                                                                 // 1733
        type: 'shown.bs.tab',                                                                                         // 1734
        relatedTarget: previous                                                                                       // 1735
      })                                                                                                              // 1736
    })                                                                                                                // 1737
  }                                                                                                                   // 1738
                                                                                                                      // 1739
  Tab.prototype.activate = function (element, container, callback) {                                                  // 1740
    var $active    = container.find('> .active')                                                                      // 1741
    var transition = callback                                                                                         // 1742
      && $.support.transition                                                                                         // 1743
      && $active.hasClass('fade')                                                                                     // 1744
                                                                                                                      // 1745
    function next() {                                                                                                 // 1746
      $active                                                                                                         // 1747
        .removeClass('active')                                                                                        // 1748
        .find('> .dropdown-menu > .active')                                                                           // 1749
        .removeClass('active')                                                                                        // 1750
                                                                                                                      // 1751
      element.addClass('active')                                                                                      // 1752
                                                                                                                      // 1753
      if (transition) {                                                                                               // 1754
        element[0].offsetWidth // reflow for transition                                                               // 1755
        element.addClass('in')                                                                                        // 1756
      } else {                                                                                                        // 1757
        element.removeClass('fade')                                                                                   // 1758
      }                                                                                                               // 1759
                                                                                                                      // 1760
      if (element.parent('.dropdown-menu')) {                                                                         // 1761
        element.closest('li.dropdown').addClass('active')                                                             // 1762
      }                                                                                                               // 1763
                                                                                                                      // 1764
      callback && callback()                                                                                          // 1765
    }                                                                                                                 // 1766
                                                                                                                      // 1767
    transition ?                                                                                                      // 1768
      $active                                                                                                         // 1769
        .one($.support.transition.end, next)                                                                          // 1770
        .emulateTransitionEnd(150) :                                                                                  // 1771
      next()                                                                                                          // 1772
                                                                                                                      // 1773
    $active.removeClass('in')                                                                                         // 1774
  }                                                                                                                   // 1775
                                                                                                                      // 1776
                                                                                                                      // 1777
  // TAB PLUGIN DEFINITION                                                                                            // 1778
  // =====================                                                                                            // 1779
                                                                                                                      // 1780
  var old = $.fn.tab                                                                                                  // 1781
                                                                                                                      // 1782
  $.fn.tab = function ( option ) {                                                                                    // 1783
    return this.each(function () {                                                                                    // 1784
      var $this = $(this)                                                                                             // 1785
      var data  = $this.data('bs.tab')                                                                                // 1786
                                                                                                                      // 1787
      if (!data) $this.data('bs.tab', (data = new Tab(this)))                                                         // 1788
      if (typeof option == 'string') data[option]()                                                                   // 1789
    })                                                                                                                // 1790
  }                                                                                                                   // 1791
                                                                                                                      // 1792
  $.fn.tab.Constructor = Tab                                                                                          // 1793
                                                                                                                      // 1794
                                                                                                                      // 1795
  // TAB NO CONFLICT                                                                                                  // 1796
  // ===============                                                                                                  // 1797
                                                                                                                      // 1798
  $.fn.tab.noConflict = function () {                                                                                 // 1799
    $.fn.tab = old                                                                                                    // 1800
    return this                                                                                                       // 1801
  }                                                                                                                   // 1802
                                                                                                                      // 1803
                                                                                                                      // 1804
  // TAB DATA-API                                                                                                     // 1805
  // ============                                                                                                     // 1806
                                                                                                                      // 1807
  $(document).on('click.bs.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {                 // 1808
    e.preventDefault()                                                                                                // 1809
    $(this).tab('show')                                                                                               // 1810
  })                                                                                                                  // 1811
                                                                                                                      // 1812
}(jQuery);                                                                                                            // 1813
                                                                                                                      // 1814
/* ========================================================================                                           // 1815
 * Bootstrap: affix.js v3.1.1                                                                                         // 1816
 * http://getbootstrap.com/javascript/#affix                                                                          // 1817
 * ========================================================================                                           // 1818
 * Copyright 2011-2014 Twitter, Inc.                                                                                  // 1819
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)                                         // 1820
 * ======================================================================== */                                        // 1821
                                                                                                                      // 1822
                                                                                                                      // 1823
+function ($) {                                                                                                       // 1824
  'use strict';                                                                                                       // 1825
                                                                                                                      // 1826
  // AFFIX CLASS DEFINITION                                                                                           // 1827
  // ======================                                                                                           // 1828
                                                                                                                      // 1829
  var Affix = function (element, options) {                                                                           // 1830
    this.options = $.extend({}, Affix.DEFAULTS, options)                                                              // 1831
    this.$window = $(window)                                                                                          // 1832
      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))                                              // 1833
      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))                                 // 1834
                                                                                                                      // 1835
    this.$element     = $(element)                                                                                    // 1836
    this.affixed      =                                                                                               // 1837
    this.unpin        =                                                                                               // 1838
    this.pinnedOffset = null                                                                                          // 1839
                                                                                                                      // 1840
    this.checkPosition()                                                                                              // 1841
  }                                                                                                                   // 1842
                                                                                                                      // 1843
  Affix.RESET = 'affix affix-top affix-bottom'                                                                        // 1844
                                                                                                                      // 1845
  Affix.DEFAULTS = {                                                                                                  // 1846
    offset: 0                                                                                                         // 1847
  }                                                                                                                   // 1848
                                                                                                                      // 1849
  Affix.prototype.getPinnedOffset = function () {                                                                     // 1850
    if (this.pinnedOffset) return this.pinnedOffset                                                                   // 1851
    this.$element.removeClass(Affix.RESET).addClass('affix')                                                          // 1852
    var scrollTop = this.$window.scrollTop()                                                                          // 1853
    var position  = this.$element.offset()                                                                            // 1854
    return (this.pinnedOffset = position.top - scrollTop)                                                             // 1855
  }                                                                                                                   // 1856
                                                                                                                      // 1857
  Affix.prototype.checkPositionWithEventLoop = function () {                                                          // 1858
    setTimeout($.proxy(this.checkPosition, this), 1)                                                                  // 1859
  }                                                                                                                   // 1860
                                                                                                                      // 1861
  Affix.prototype.checkPosition = function () {                                                                       // 1862
    if (!this.$element.is(':visible')) return                                                                         // 1863
                                                                                                                      // 1864
    var scrollHeight = $(document).height()                                                                           // 1865
    var scrollTop    = this.$window.scrollTop()                                                                       // 1866
    var position     = this.$element.offset()                                                                         // 1867
    var offset       = this.options.offset                                                                            // 1868
    var offsetTop    = offset.top                                                                                     // 1869
    var offsetBottom = offset.bottom                                                                                  // 1870
                                                                                                                      // 1871
    if (this.affixed == 'top') position.top += scrollTop                                                              // 1872
                                                                                                                      // 1873
    if (typeof offset != 'object')         offsetBottom = offsetTop = offset                                          // 1874
    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)                                   // 1875
    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)                                // 1876
                                                                                                                      // 1877
    var affix = this.unpin   != null && (scrollTop + this.unpin <= position.top) ? false :                            // 1878
                offsetBottom != null && (position.top + this.$element.height() >= scrollHeight - offsetBottom) ? 'bottom' :
                offsetTop    != null && (scrollTop <= offsetTop) ? 'top' : false                                      // 1880
                                                                                                                      // 1881
    if (this.affixed === affix) return                                                                                // 1882
    if (this.unpin) this.$element.css('top', '')                                                                      // 1883
                                                                                                                      // 1884
    var affixType = 'affix' + (affix ? '-' + affix : '')                                                              // 1885
    var e         = $.Event(affixType + '.bs.affix')                                                                  // 1886
                                                                                                                      // 1887
    this.$element.trigger(e)                                                                                          // 1888
                                                                                                                      // 1889
    if (e.isDefaultPrevented()) return                                                                                // 1890
                                                                                                                      // 1891
    this.affixed = affix                                                                                              // 1892
    this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null                                                    // 1893
                                                                                                                      // 1894
    this.$element                                                                                                     // 1895
      .removeClass(Affix.RESET)                                                                                       // 1896
      .addClass(affixType)                                                                                            // 1897
      .trigger($.Event(affixType.replace('affix', 'affixed')))                                                        // 1898
                                                                                                                      // 1899
    if (affix == 'bottom') {                                                                                          // 1900
      this.$element.offset({ top: scrollHeight - offsetBottom - this.$element.height() })                             // 1901
    }                                                                                                                 // 1902
  }                                                                                                                   // 1903
                                                                                                                      // 1904
                                                                                                                      // 1905
  // AFFIX PLUGIN DEFINITION                                                                                          // 1906
  // =======================                                                                                          // 1907
                                                                                                                      // 1908
  var old = $.fn.affix                                                                                                // 1909
                                                                                                                      // 1910
  $.fn.affix = function (option) {                                                                                    // 1911
    return this.each(function () {                                                                                    // 1912
      var $this   = $(this)                                                                                           // 1913
      var data    = $this.data('bs.affix')                                                                            // 1914
      var options = typeof option == 'object' && option                                                               // 1915
                                                                                                                      // 1916
      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))                                            // 1917
      if (typeof option == 'string') data[option]()                                                                   // 1918
    })                                                                                                                // 1919
  }                                                                                                                   // 1920
                                                                                                                      // 1921
  $.fn.affix.Constructor = Affix                                                                                      // 1922
                                                                                                                      // 1923
                                                                                                                      // 1924
  // AFFIX NO CONFLICT                                                                                                // 1925
  // =================                                                                                                // 1926
                                                                                                                      // 1927
  $.fn.affix.noConflict = function () {                                                                               // 1928
    $.fn.affix = old                                                                                                  // 1929
    return this                                                                                                       // 1930
  }                                                                                                                   // 1931
                                                                                                                      // 1932
                                                                                                                      // 1933
  // AFFIX DATA-API                                                                                                   // 1934
  // ==============                                                                                                   // 1935
                                                                                                                      // 1936
  $(window).on('load', function () {                                                                                  // 1937
    $('[data-spy="affix"]').each(function () {                                                                        // 1938
      var $spy = $(this)                                                                                              // 1939
      var data = $spy.data()                                                                                          // 1940
                                                                                                                      // 1941
      data.offset = data.offset || {}                                                                                 // 1942
                                                                                                                      // 1943
      if (data.offsetBottom) data.offset.bottom = data.offsetBottom                                                   // 1944
      if (data.offsetTop)    data.offset.top    = data.offsetTop                                                      // 1945
                                                                                                                      // 1946
      $spy.affix(data)                                                                                                // 1947
    })                                                                                                                // 1948
  })                                                                                                                  // 1949
                                                                                                                      // 1950
}(jQuery);                                                                                                            // 1951
                                                                                                                      // 1952
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/andrasph:bootstrap-notebook-theme/notebook-theme/js/app.js                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*! http://mths.be/placeholder v2.0.7 by @mathias */                                                                  // 1
;(function(h,j,e){var a="placeholder" in j.createElement("input");var f="placeholder" in j.createElement("textarea");var k=e.fn;var d=e.valHooks;var b=e.propHooks;var m;var l;if(a&&f){l=k.placeholder=function(){return this};l.input=l.textarea=true}else{l=k.placeholder=function(){var n=this;n.filter((a?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":c,"blur.placeholder":g}).data("placeholder-enabled",true).trigger("blur.placeholder");return n};l.input=a;l.textarea=f;m={get:function(o){var n=e(o);var p=n.data("placeholder-password");if(p){return p[0].value}return n.data("placeholder-enabled")&&n.hasClass("placeholder")?"":o.value},set:function(o,q){var n=e(o);var p=n.data("placeholder-password");if(p){return p[0].value=q}if(!n.data("placeholder-enabled")){return o.value=q}if(q==""){o.value=q;if(o!=j.activeElement){g.call(o)}}else{if(n.hasClass("placeholder")){c.call(o,true,q)||(o.value=q)}else{o.value=q}}return n}};if(!a){d.input=m;b.value=m}if(!f){d.textarea=m;b.value=m}e(function(){e(j).delegate("form","submit.placeholder",function(){var n=e(".placeholder",this).each(c);setTimeout(function(){n.each(g)},10)})});e(h).bind("beforeunload.placeholder",function(){e(".placeholder").each(function(){this.value=""})})}function i(o){var n={};var p=/^jQuery\d+$/;e.each(o.attributes,function(r,q){if(q.specified&&!p.test(q.name)){n[q.name]=q.value}});return n}function c(o,p){var n=this;var q=e(n);if(n.value==q.attr("placeholder")&&q.hasClass("placeholder")){if(q.data("placeholder-password")){q=q.hide().next().show().attr("id",q.removeAttr("id").data("placeholder-id"));if(o===true){return q[0].value=p}q.focus()}else{n.value="";q.removeClass("placeholder");n==j.activeElement&&n.select()}}}function g(){var r;var n=this;var q=e(n);var p=this.id;if(n.value==""){if(n.type=="password"){if(!q.data("placeholder-textinput")){try{r=q.clone().attr({type:"text"})}catch(o){r=e("<input>").attr(e.extend(i(this),{type:"text"}))}r.removeAttr("name").data({"placeholder-password":q,"placeholder-id":p}).bind("focus.placeholder",c);q.data({"placeholder-textinput":r,"placeholder-id":p}).before(r)}q=q.removeAttr("id").hide().prev().attr("id",p).show()}q.addClass("placeholder");q[0].value=q.attr("placeholder")}else{q.removeClass("placeholder")}}}(this,document,jQuery));
                                                                                                                      // 3
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD                                                                         // 4
 * Build: http://modernizr.com/download/#-touch-cssclasses-teststyles-prefixes                                        // 5
 */                                                                                                                   // 6
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);
Modernizr.addTest('android',function(){return!!navigator.userAgent.match(/Android/i)});                               // 8
Modernizr.addTest('chrome',function(){return!!navigator.userAgent.match(/Chrome/i)});                                 // 9
Modernizr.addTest('firefox',function(){return!!navigator.userAgent.match(/Firefox/i)});                               // 10
Modernizr.addTest('iemobile',function(){return!!navigator.userAgent.match(/IEMobile/i)});                             // 11
Modernizr.addTest('ie',function(){return!!navigator.userAgent.match(/MSIE/i)});                                       // 12
Modernizr.addTest('ie10',function(){return!!navigator.userAgent.match(/MSIE 10/i)});                                  // 13
Modernizr.addTest('ie11',function(){return!!navigator.userAgent.match(/Trident.*rv:11\./)});                          // 14
Modernizr.addTest('ios',function(){return!!navigator.userAgent.match(/iPhone|iPad|iPod/i)});                          // 15
/*!                                                                                                                   // 16
* screenfull                                                                                                          // 17
* v1.0.4 - 2013-05-26                                                                                                 // 18
* https://github.com/sindresorhus/screenfull.js                                                                       // 19
* (c) Sindre Sorhus; MIT License                                                                                      // 20
*/                                                                                                                    // 21
(function(a,b){"use strict";var c="undefined"!=typeof Element&&"ALLOW_KEYBOARD_INPUT"in Element,d=function(){for(var a,c,d=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"]],e=0,f=d.length,g={};f>e;e++)if(a=d[e],a&&a[1]in b){for(e=0,c=a.length;c>e;e++)g[d[0][e]]=a[e];return g}return!1}(),e={request:function(a){var e=d.requestFullscreen;a=a||b.documentElement,/5\.1[\.\d]* Safari/.test(navigator.userAgent)?a[e]():a[e](c&&Element.ALLOW_KEYBOARD_INPUT)},exit:function(){b[d.exitFullscreen]()},toggle:function(a){this.isFullscreen?this.exit():this.request(a)},onchange:function(){},onerror:function(){},raw:d};return d?(Object.defineProperties(e,{isFullscreen:{get:function(){return!!b[d.fullscreenElement]}},element:{enumerable:!0,get:function(){return b[d.fullscreenElement]}},enabled:{enumerable:!0,get:function(){return!!b[d.fullscreenEnabled]}}}),b.addEventListener(d.fullscreenchange,function(a){e.onchange.call(e,a)}),b.addEventListener(d.fullscreenerror,function(a){e.onerror.call(e,a)}),a.screenfull=e,void 0):a.screenfull=!1})(window,document);
                                                                                                                      // 23
                                                                                                                      // 24
// data-shift api                                                                                                     // 25
+function ($) { "use strict";                                                                                         // 26
                                                                                                                      // 27
 /* SHIFT CLASS DEFINITION                                                                                            // 28
  * ====================== */                                                                                         // 29
                                                                                                                      // 30
  var Shift = function (element) {                                                                                    // 31
    this.$element = $(element)                                                                                        // 32
    this.$prev = this.$element.prev()                                                                                 // 33
    !this.$prev.length && (this.$parent = this.$element.parent())                                                     // 34
  }                                                                                                                   // 35
                                                                                                                      // 36
  Shift.prototype = {                                                                                                 // 37
  	constructor: Shift                                                                                                 // 38
                                                                                                                      // 39
    , init:function(){                                                                                                // 40
    	var $el = this.$element                                                                                          // 41
    	, method = $el.data()['toggle'].split(':')[1]    	                                                               // 42
    	, $target = $el.data('target')                                                                                   // 43
    	$el.hasClass('in') || $el[method]($target).addClass('in')                                                        // 44
    }                                                                                                                 // 45
    , reset :function(){                                                                                              // 46
    	this.$parent && this.$parent['prepend'](this.$element)                                                           // 47
    	!this.$parent && this.$element['insertAfter'](this.$prev)                                                        // 48
    	this.$element.removeClass('in')                                                                                  // 49
    }                                                                                                                 // 50
  }                                                                                                                   // 51
                                                                                                                      // 52
 /* SHIFT PLUGIN DEFINITION                                                                                           // 53
  * ======================= */                                                                                        // 54
                                                                                                                      // 55
  $.fn.shift = function (option) {                                                                                    // 56
    return this.each(function () {                                                                                    // 57
      var $this = $(this)                                                                                             // 58
        , data = $this.data('shift')                                                                                  // 59
      if (!data) $this.data('shift', (data = new Shift(this)))                                                        // 60
      if (typeof option == 'string') data[option]()                                                                   // 61
    })                                                                                                                // 62
  }                                                                                                                   // 63
                                                                                                                      // 64
  $.fn.shift.Constructor = Shift                                                                                      // 65
}(jQuery);                                                                                                            // 66
                                                                                                                      // 67
Date.now = Date.now || function() { return +new Date; };                                                              // 68
                                                                                                                      // 69
+function ($) {                                                                                                       // 70
                                                                                                                      // 71
  $(function(){                                                                                                       // 72
                                                                                                                      // 73
    // toogle fullscreen                                                                                              // 74
    $(document).on('click', "[data-toggle=fullscreen]", function(e){                                                  // 75
      if (screenfull.enabled) {                                                                                       // 76
        screenfull.request();                                                                                         // 77
      }                                                                                                               // 78
    });                                                                                                               // 79
                                                                                                                      // 80
  	// placeholder                                                                                                     // 81
  	$('input[placeholder], textarea[placeholder]').placeholder();                                                      // 82
                                                                                                                      // 83
    // popover                                                                                                        // 84
    $("[data-toggle=popover]").popover();                                                                             // 85
    $(document).on('click', '.popover-title .close', function(e){                                                     // 86
    	var $target = $(e.target), $popover = $target.closest('.popover').prev();                                        // 87
    	$popover && $popover.popover('hide');                                                                            // 88
    });                                                                                                               // 89
                                                                                                                      // 90
    // ajax modal                                                                                                     // 91
    $(document).on('click', '[data-toggle="ajaxModal"]',                                                              // 92
      function(e) {                                                                                                   // 93
        $('#ajaxModal').remove();                                                                                     // 94
        e.preventDefault();                                                                                           // 95
        var $this = $(this)                                                                                           // 96
          , $remote = $this.data('remote') || $this.attr('href')                                                      // 97
          , $modal = $('<div class="modal" id="ajaxModal"><div class="modal-body"></div></div>');                     // 98
        $('body').append($modal);                                                                                     // 99
        $modal.modal();                                                                                               // 100
        $modal.load($remote);                                                                                         // 101
      }                                                                                                               // 102
    );                                                                                                                // 103
                                                                                                                      // 104
    // dropdown menu                                                                                                  // 105
    $.fn.dropdown.Constructor.prototype.change = function(e){                                                         // 106
      e.preventDefault();                                                                                             // 107
      var $item = $(e.target), $select, $checked = false, $menu, $label;                                              // 108
      !$item.is('a') && ($item = $item.closest('a'));                                                                 // 109
      $menu = $item.closest('.dropdown-menu');                                                                        // 110
      $label = $menu.parent().find('.dropdown-label');                                                                // 111
      $labelHolder = $label.text();                                                                                   // 112
      $select = $item.find('input');                                                                                  // 113
      $checked = $select.is(':checked');                                                                              // 114
      if($select.is(':disabled')) return;                                                                             // 115
      if($select.attr('type') == 'radio' && $checked) return;                                                         // 116
      if($select.attr('type') == 'radio') $menu.find('li').removeClass('active');                                     // 117
      $item.parent().removeClass('active');                                                                           // 118
      !$checked && $item.parent().addClass('active');                                                                 // 119
      $select.prop("checked", !$select.prop("checked"));                                                              // 120
                                                                                                                      // 121
      $items = $menu.find('li > a > input:checked');                                                                  // 122
      if ($items.length) {                                                                                            // 123
          $text = [];                                                                                                 // 124
          $items.each(function () {                                                                                   // 125
              var $str = $(this).parent().text();                                                                     // 126
              $str && $text.push($.trim($str));                                                                       // 127
          });                                                                                                         // 128
                                                                                                                      // 129
          $text = $text.length < 4 ? $text.join(', ') : $text.length + ' selected';                                   // 130
          $label.html($text);                                                                                         // 131
      }else{                                                                                                          // 132
        $label.html($label.data('placeholder'));                                                                      // 133
      }                                                                                                               // 134
    }                                                                                                                 // 135
    $(document).on('click.dropdown-menu', '.dropdown-select > li > a', $.fn.dropdown.Constructor.prototype.change);   // 136
                                                                                                                      // 137
  	// tooltip                                                                                                         // 138
    $("[data-toggle=tooltip]").tooltip();                                                                             // 139
                                                                                                                      // 140
    // class                                                                                                          // 141
  	$(document).on('click', '[data-toggle^="class"]', function(e){                                                     // 142
  		e && e.preventDefault();                                                                                          // 143
  		var $this = $(e.target), $class , $target, $tmp, $classes, $targets;                                              // 144
  		!$this.data('toggle') && ($this = $this.closest('[data-toggle^="class"]'));                                       // 145
    	$class = $this.data()['toggle'];                                                                                 // 146
    	$target = $this.data('target') || $this.attr('href');                                                            // 147
      $class && ($tmp = $class.split(':')[1]) && ($classes = $tmp.split(','));                                        // 148
      $target && ($targets = $target.split(','));                                                                     // 149
      $targets && $targets.length && $.each($targets, function( index, value ) {                                      // 150
        ($targets[index] !='#') && $($targets[index]).toggleClass($classes[index]);                                   // 151
      });                                                                                                             // 152
    	$this.toggleClass('active');                                                                                     // 153
  	});                                                                                                                // 154
                                                                                                                      // 155
    // panel toggle                                                                                                   // 156
    $(document).on('click', '.panel-toggle', function(e){                                                             // 157
      e && e.preventDefault();                                                                                        // 158
      var $this = $(e.target), $class = 'collapse' , $target;                                                         // 159
      if (!$this.is('a')) $this = $this.closest('a');                                                                 // 160
      $target = $this.closest('.panel');                                                                              // 161
        $target.find('.panel-body').toggleClass($class);                                                              // 162
        $this.toggleClass('active');                                                                                  // 163
    });                                                                                                               // 164
  	                                                                                                                   // 165
  	// carousel                                                                                                        // 166
  	$('.carousel.auto').carousel();                                                                                    // 167
  	                                                                                                                   // 168
  	// button loading                                                                                                  // 169
  	$(document).on('click.button.data-api', '[data-loading-text]', function (e) {                                      // 170
  	    var $this = $(e.target);                                                                                       // 171
  	    $this.is('i') && ($this = $this.parent());                                                                     // 172
  	    $this.button('loading');                                                                                       // 173
  	});                                                                                                                // 174
 	                                                                                                                    // 175
    var $window = $(window);                                                                                          // 176
    // mobile                                                                                                         // 177
  	var mobile = function(option){                                                                                     // 178
  		if(option == 'reset'){                                                                                            // 179
  			$('[data-toggle^="shift"]').shift('reset');                                                                      // 180
  			return true;                                                                                                     // 181
  		}                                                                                                                 // 182
  		$('[data-toggle^="shift"]').shift('init');                                                                        // 183
      return true;                                                                                                    // 184
  	};                                                                                                                 // 185
  	// unmobile                                                                                                        // 186
  	$window.width() < 768 && mobile();                                                                                 // 187
    // resize                                                                                                         // 188
    var $resize;                                                                                                      // 189
  	$window.resize(function() {                                                                                        // 190
      clearTimeout($resize);                                                                                          // 191
      $resize = setTimeout(function(){                                                                                // 192
        setHeight();                                                                                                  // 193
        $window.width() < 767 && mobile();                                                                            // 194
        $window.width() >= 768 && mobile('reset') && fixVbox();                                                       // 195
      }, 500);                                                                                                        // 196
  	});                                                                                                                // 197
                                                                                                                      // 198
    // fluid layout                                                                                                   // 199
    var setHeight = function(){                                                                                       // 200
      $('.app-fluid #nav > *').css('min-height', $(window).height());                                                 // 201
      return true;                                                                                                    // 202
    }                                                                                                                 // 203
    setHeight();                                                                                                      // 204
                                                                                                                      // 205
    // fix vbox                                                                                                       // 206
    var fixVbox = function(){                                                                                         // 207
      $('.ie11 .vbox').each(function(){                                                                               // 208
        $(this).height($(this).parent().height());                                                                    // 209
      });                                                                                                             // 210
    }                                                                                                                 // 211
    fixVbox();                                                                                                        // 212
                                                                                                                      // 213
    // collapse nav                                                                                                   // 214
    $(document).on('click', '.nav-primary a', function (e) {                                                          // 215
      var $this = $(e.target), $active;                                                                               // 216
      $this.is('a') || ($this = $this.closest('a'));                                                                  // 217
      if( $('.nav-vertical').length ){                                                                                // 218
        return;                                                                                                       // 219
      }                                                                                                               // 220
                                                                                                                      // 221
      $active = $this.parent().siblings( ".active" );                                                                 // 222
      $active && $active.find('> a').toggleClass('active') && $active.toggleClass('active').find('> ul:visible').slideUp(200);
                                                                                                                      // 224
      ($this.hasClass('active') && $this.next().slideUp(200)) || $this.next().slideDown(200);                         // 225
      $this.toggleClass('active').parent().toggleClass('active');                                                     // 226
                                                                                                                      // 227
      $this.next().is('ul') && e.preventDefault();                                                                    // 228
                                                                                                                      // 229
      setTimeout(function(){ $(document).trigger('updateNav'); }, 300);                                               // 230
    });                                                                                                               // 231
                                                                                                                      // 232
    // dropdown still                                                                                                 // 233
    $(document).on('click.bs.dropdown.data-api', '.dropdown .on, .dropup .on', function (e) { e.stopPropagation() }); // 234
                                                                                                                      // 235
  });                                                                                                                 // 236
}(jQuery);                                                                                                            // 237
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/andrasph:bootstrap-notebook-theme/notebook-theme/js/slimscroll/jquery.slimscroll.min.js                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*! Copyright (c) 2011 Piotr Rochala (http://rocha.la)                                                                // 1
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)                                   // 2
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.                                             // 3
 *                                                                                                                    // 4
 * Version: 1.3.0                                                                                                     // 5
 *                                                                                                                    // 6
 */                                                                                                                   // 7
(function(f){jQuery.fn.extend({slimScroll:function(h){var a=f.extend({width:"auto",height:"250px",size:"7px",color:"#000",position:"right",distance:"1px",start:"top",opacity:0.4,alwaysVisible:!1,disableFadeOut:!1,railVisible:!1,railColor:"#333",railOpacity:0.2,railDraggable:!0,railClass:"slimScrollRail",barClass:"slimScrollBar",wrapperClass:"slimScrollDiv",allowPageScroll:!1,wheelStep:20,touchScrollStep:200,borderRadius:"7px",railBorderRadius:"7px"},h);this.each(function(){function r(d){if(s){d=d||
window.event;var c=0;d.wheelDelta&&(c=-d.wheelDelta/120);d.detail&&(c=d.detail/3);f(d.target||d.srcTarget||d.srcElement).closest("."+a.wrapperClass).is(b.parent())&&m(c,!0);d.preventDefault&&!k&&d.preventDefault();k||(d.returnValue=!1)}}function m(d,f,h){k=!1;var e=d,g=b.outerHeight()-c.outerHeight();f&&(e=parseInt(c.css("top"))+d*parseInt(a.wheelStep)/100*c.outerHeight(),e=Math.min(Math.max(e,0),g),e=0<d?Math.ceil(e):Math.floor(e),c.css({top:e+"px"}));l=parseInt(c.css("top"))/(b.outerHeight()-c.outerHeight());
e=l*(b[0].scrollHeight-b.outerHeight());h&&(e=d,d=e/b[0].scrollHeight*b.outerHeight(),d=Math.min(Math.max(d,0),g),c.css({top:d+"px"}));b.scrollTop(e);b.trigger("slimscrolling",~~e);v();p()}function C(){window.addEventListener?(this.addEventListener("DOMMouseScroll",r,!1),this.addEventListener("mousewheel",r,!1),this.addEventListener("MozMousePixelScroll",r,!1)):document.attachEvent("onmousewheel",r)}function w(){u=Math.max(b.outerHeight()/b[0].scrollHeight*b.outerHeight(),D);c.css({height:u+"px"});
var a=u==b.outerHeight()?"none":"block";c.css({display:a})}function v(){w();clearTimeout(A);l==~~l?(k=a.allowPageScroll,B!=l&&b.trigger("slimscroll",0==~~l?"top":"bottom")):k=!1;B=l;u>=b.outerHeight()?k=!0:(c.stop(!0,!0).fadeIn("fast"),a.railVisible&&g.stop(!0,!0).fadeIn("fast"))}function p(){a.alwaysVisible||(A=setTimeout(function(){a.disableFadeOut&&s||(x||y)||(c.fadeOut("slow"),g.fadeOut("slow"))},1E3))}var s,x,y,A,z,u,l,B,D=30,k=!1,b=f(this);if(b.parent().hasClass(a.wrapperClass)){var n=b.scrollTop(),
c=b.parent().find("."+a.barClass),g=b.parent().find("."+a.railClass);w();if(f.isPlainObject(h)){if("height"in h&&"auto"==h.height){b.parent().css("height","auto");b.css("height","auto");var q=b.parent().parent().height();b.parent().css("height",q);b.css("height",q)}if("scrollTo"in h)n=parseInt(a.scrollTo);else if("scrollBy"in h)n+=parseInt(a.scrollBy);else if("destroy"in h){c.remove();g.remove();b.unwrap();return}m(n,!1,!0)}}else{a.height="auto"==a.height?b.parent().height():a.height;n=f("<div></div>").addClass(a.wrapperClass).css({position:"relative",
overflow:"hidden",width:a.width,height:a.height});b.css({overflow:"hidden",width:a.width,height:a.height});var g=f("<div></div>").addClass(a.railClass).css({width:a.size,height:"100%",position:"absolute",top:0,display:a.alwaysVisible&&a.railVisible?"block":"none","border-radius":a.railBorderRadius,background:a.railColor,opacity:a.railOpacity,zIndex:90}),c=f("<div></div>").addClass(a.barClass).css({background:a.color,width:a.size,position:"absolute",top:0,opacity:a.opacity,display:a.alwaysVisible?
"block":"none","border-radius":a.borderRadius,BorderRadius:a.borderRadius,MozBorderRadius:a.borderRadius,WebkitBorderRadius:a.borderRadius,zIndex:99}),q="right"==a.position?{right:a.distance}:{left:a.distance};g.css(q);c.css(q);b.wrap(n);b.parent().append(c);b.parent().append(g);a.railDraggable&&c.bind("mousedown",function(a){var b=f(document);y=!0;t=parseFloat(c.css("top"));pageY=a.pageY;b.bind("mousemove.slimscroll",function(a){currTop=t+a.pageY-pageY;c.css("top",currTop);m(0,c.position().top,!1)});
b.bind("mouseup.slimscroll",function(a){y=!1;p();b.unbind(".slimscroll")});return!1}).bind("selectstart.slimscroll",function(a){a.stopPropagation();a.preventDefault();return!1});g.hover(function(){v()},function(){p()});c.hover(function(){x=!0},function(){x=!1});b.hover(function(){s=!0;v();p()},function(){s=!1;p()});b.bind("touchstart",function(a,b){a.originalEvent.touches.length&&(z=a.originalEvent.touches[0].pageY)});b.bind("touchmove",function(b){k||b.originalEvent.preventDefault();b.originalEvent.touches.length&&
(m((z-b.originalEvent.touches[0].pageY)/a.touchScrollStep,!0),z=b.originalEvent.touches[0].pageY)});w();"bottom"===a.start?(c.css({top:b.outerHeight()-c.outerHeight()}),m(0,!0)):"top"!==a.start&&(m(f(a.start).position().top,null,!0),a.alwaysVisible||c.hide());C()}});return this}});jQuery.fn.extend({slimscroll:jQuery.fn.slimScroll})})(jQuery);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/andrasph:bootstrap-notebook-theme/notebook-theme/js/app.plugin.js                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
!function ($) {                                                                                                       // 1
                                                                                                                      // 2
  $(function(){                                                                                                       // 3
 	                                                                                                                    // 4
	// sparkline                                                                                                         // 5
	var sr, sparkline = function($re){                                                                                   // 6
		$(".sparkline").each(function(){                                                                                    // 7
			var $data = $(this).data();                                                                                        // 8
			if($re && !$data.resize) return;                                                                                   // 9
			($data.type == 'pie') && $data.sliceColors && ($data.sliceColors = eval($data.sliceColors));                       // 10
			($data.type == 'bar') && $data.stackedBarColor && ($data.stackedBarColor = eval($data.stackedBarColor));           // 11
			$data.valueSpots = {'0:': $data.spotColor};                                                                        // 12
			$(this).sparkline('html', $data);                                                                                  // 13
		});                                                                                                                 // 14
	};                                                                                                                   // 15
	$(window).resize(function(e) {                                                                                       // 16
		clearTimeout(sr);                                                                                                   // 17
		sr = setTimeout(function(){sparkline(true)}, 500);                                                                  // 18
	});                                                                                                                  // 19
	sparkline(false);                                                                                                    // 20
                                                                                                                      // 21
                                                                                                                      // 22
	// easypie                                                                                                           // 23
    $('.easypiechart').each(function(){                                                                               // 24
    	var $this = $(this),                                                                                             // 25
    	$data = $this.data(),                                                                                            // 26
    	$step = $this.find('.step'),                                                                                     // 27
    	$target_value = parseInt($($data.target).text()),                                                                // 28
    	$value = 0;                                                                                                      // 29
    	$data.barColor || ( $data.barColor = function($percent) {                                                        // 30
            $percent /= 100;                                                                                          // 31
            return "rgb(" + Math.round(200 * $percent) + ", 200, " + Math.round(200 * (1 - $percent)) + ")";          // 32
        });                                                                                                           // 33
    	$data.onStep =  function(value){                                                                                 // 34
    		$value = value;                                                                                                 // 35
    		$step.text(parseInt(value));                                                                                    // 36
    		$data.target && $($data.target).text(parseInt(value) + $target_value);                                          // 37
    	}                                                                                                                // 38
    	$data.onStop =  function(){                                                                                      // 39
    		$target_value = parseInt($($data.target).text());                                                               // 40
    		$data.update && setTimeout(function() {                                                                         // 41
		        $this.data('easyPieChart').update(100 - $value);                                                            // 42
		    }, $data.update);                                                                                               // 43
    	}                                                                                                                // 44
		$(this).easyPieChart($data);                                                                                        // 45
	});                                                                                                                  // 46
                                                                                                                      // 47
  	// combodate                                                                                                       // 48
	$(".combodate").each(function(){                                                                                     // 49
		$(this).combodate();                                                                                                // 50
		$(this).next('.combodate').find('select').addClass('form-control');                                                 // 51
	});                                                                                                                  // 52
                                                                                                                      // 53
	// datepicker                                                                                                        // 54
	$(".datepicker-input").each(function(){ $(this).datepicker();});                                                     // 55
                                                                                                                      // 56
	// dropfile                                                                                                          // 57
	$('.dropfile').each(function(){                                                                                      // 58
		var $dropbox = $(this);                                                                                             // 59
		if (typeof window.FileReader === 'undefined') {                                                                     // 60
		  $('small',this).html('File API & FileReader API not supported').addClass('text-danger');                          // 61
		  return;                                                                                                           // 62
		}                                                                                                                   // 63
                                                                                                                      // 64
		this.ondragover = function () {$dropbox.addClass('hover'); return false; };                                         // 65
		this.ondragend = function () {$dropbox.removeClass('hover'); return false; };                                       // 66
		this.ondrop = function (e) {                                                                                        // 67
		  e.preventDefault();                                                                                               // 68
		  $dropbox.removeClass('hover').html('');                                                                           // 69
		  var file = e.dataTransfer.files[0],                                                                               // 70
		      reader = new FileReader();                                                                                    // 71
		  reader.onload = function (event) {                                                                                // 72
		  	$dropbox.append($('<img>').attr('src', event.target.result));                                                    // 73
		  };                                                                                                                // 74
		  reader.readAsDataURL(file);                                                                                       // 75
		  return false;                                                                                                     // 76
		};                                                                                                                  // 77
	});                                                                                                                  // 78
                                                                                                                      // 79
	// fuelux pillbox                                                                                                    // 80
	var addPill = function($input){                                                                                      // 81
		var $text = $input.val(), $pills = $input.closest('.pillbox'), $repeat = false, $repeatPill;                        // 82
		if($text == "") return;                                                                                             // 83
		$("li", $pills).text(function(i,v){                                                                                 // 84
	        if(v == $text){                                                                                              // 85
	        	$repeatPill = $(this);                                                                                      // 86
	        	$repeat = true;                                                                                             // 87
	        }                                                                                                            // 88
	    });                                                                                                              // 89
	    if($repeat) {                                                                                                    // 90
	    	$repeatPill.fadeOut().fadeIn();                                                                                 // 91
	    	return;                                                                                                         // 92
	    };                                                                                                               // 93
	    $item = $('<li class="label bg-dark">'+$text+'</li> ');                                                          // 94
		$item.insertBefore($input);                                                                                         // 95
		$input.val('');                                                                                                     // 96
		$pills.trigger('change', $item);                                                                                    // 97
	};                                                                                                                   // 98
                                                                                                                      // 99
	$('.pillbox input').on('blur', function() {                                                                          // 100
		addPill($(this));                                                                                                   // 101
	});                                                                                                                  // 102
                                                                                                                      // 103
	$('.pillbox input').on('keypress', function(e) {                                                                     // 104
	    if(e.which == 13) {                                                                                              // 105
	        e.preventDefault();                                                                                          // 106
	        addPill($(this));                                                                                            // 107
	    }                                                                                                                // 108
	});                                                                                                                  // 109
                                                                                                                      // 110
	// slider                                                                                                            // 111
	$('.slider').each(function(){                                                                                        // 112
		$(this).slider();                                                                                                   // 113
	});                                                                                                                  // 114
                                                                                                                      // 115
	// wizard                                                                                                            // 116
	var $nextText;                                                                                                       // 117
	$(document).on('click', '[data-wizard]', function (e) {                                                              // 118
		var $this   = $(this), href;                                                                                        // 119
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')); // 120
	    var option = $this.data('wizard');                                                                               // 121
	    var item = $target.wizard('selectedItem');                                                                       // 122
	    var $step = $target.next().find('.step-pane:eq(' + (item.step-1) + ')');                                         // 123
	    !$nextText && ($nextText = $('[data-wizard="next"]').html());                                                    // 124
	    var validated = false;                                                                                           // 125
	    $('[data-required="true"]', $step).each(function(){                                                              // 126
	    	return (validated = $(this).parsley( 'validate' ));                                                             // 127
	    });                                                                                                              // 128
	    if($(this).hasClass('btn-next') && !validated){                                                                  // 129
	    	return false;                                                                                                   // 130
	    }else{                                                                                                           // 131
	    	$target.wizard(option);                                                                                         // 132
	    	var activeStep = (option=="next") ? (item.step+1) : (item.step-1);                                              // 133
	    	var prev = ($(this).hasClass('btn-prev') && $(this)) || $(this).prev();                                         // 134
	    	var next = ($(this).hasClass('btn-next') && $(this)) || $(this).next();                                         // 135
	    	prev.attr('disabled', (activeStep == 1) ? true : false);                                                        // 136
	    	next.html((activeStep < $target.find('li').length) ? $nextText : next.data('last'));                            // 137
	    }                                                                                                                // 138
	});                                                                                                                  // 139
                                                                                                                      // 140
	// sortable                                                                                                          // 141
	if ($.fn.sortable) {                                                                                                 // 142
	  $('.sortable').sortable();                                                                                         // 143
	}                                                                                                                    // 144
                                                                                                                      // 145
	// slim-scroll                                                                                                       // 146
	$('.no-touch .slim-scroll').each(function(){                                                                         // 147
		var $self = $(this), $data = $self.data(), $slimResize;                                                             // 148
		$self.slimScroll($data);                                                                                            // 149
		$(window).resize(function(e) {                                                                                      // 150
			clearTimeout($slimResize);                                                                                         // 151
			$slimResize = setTimeout(function(){$self.slimScroll($data);}, 500);                                               // 152
		});                                                                                                                 // 153
                                                                                                                      // 154
    $(document).on('updateNav', function(){                                                                           // 155
      $self.slimScroll($data);                                                                                        // 156
    });                                                                                                               // 157
	});                                                                                                                  // 158
                                                                                                                      // 159
	// pjax                                                                                                              // 160
	if ($.support.pjax) {                                                                                                // 161
	  $(document).on('click', 'a[data-pjax]', function(event) {                                                          // 162
	  	event.preventDefault();                                                                                           // 163
	    var container = $($(this).data('target'));                                                                       // 164
	    $.pjax.click(event, {container: container});                                                                     // 165
	  })                                                                                                                 // 166
	};                                                                                                                   // 167
                                                                                                                      // 168
	// portlet                                                                                                           // 169
	$('.portlet').each(function(){                                                                                       // 170
		$(".portlet").sortable({                                                                                            // 171
	        connectWith: '.portlet',                                                                                     // 172
            iframeFix: false,                                                                                         // 173
            items: '.portlet-item',                                                                                   // 174
            opacity: 0.8,                                                                                             // 175
            helper: 'original',                                                                                       // 176
            revert: true,                                                                                             // 177
            forceHelperSize: true,                                                                                    // 178
            placeholder: 'sortable-box-placeholder round-all',                                                        // 179
            forcePlaceholderSize: true,                                                                               // 180
            tolerance: 'pointer'                                                                                      // 181
	    });                                                                                                              // 182
    });                                                                                                               // 183
                                                                                                                      // 184
	// docs                                                                                                              // 185
    $('#docs pre code').each(function(){                                                                              // 186
	    var $this = $(this);                                                                                             // 187
	    var t = $this.html();                                                                                            // 188
	    $this.html(t.replace(/</g, '&lt;').replace(/>/g, '&gt;'));                                                       // 189
	});                                                                                                                  // 190
                                                                                                                      // 191
	// fontawesome                                                                                                       // 192
	$(document).on('click', '.fontawesome-icon-list a', function(e){                                                     // 193
		e && e.preventDefault();                                                                                            // 194
	});                                                                                                                  // 195
                                                                                                                      // 196
	// table select/deselect all                                                                                         // 197
	$(document).on('change', 'table thead [type="checkbox"]', function(e){                                               // 198
		e && e.preventDefault();                                                                                            // 199
		var $table = $(e.target).closest('table'), $checked = $(e.target).is(':checked');                                   // 200
		$('tbody [type="checkbox"]',$table).prop('checked', $checked);                                                      // 201
	});                                                                                                                  // 202
                                                                                                                      // 203
	// random progress                                                                                                   // 204
	$(document).on('click', '[data-toggle^="progress"]', function(e){                                                    // 205
		e && e.preventDefault();                                                                                            // 206
                                                                                                                      // 207
		$el = $(e.target);                                                                                                  // 208
		$target = $($el.data('target'));                                                                                    // 209
		$('.progress', $target).each(                                                                                       // 210
			function(){                                                                                                        // 211
				var $max = 50, $data, $ps = $('.progress-bar',this).last();                                                       // 212
				($(this).hasClass('progress-xs') || $(this).hasClass('progress-sm')) && ($max = 100);                             // 213
				$data = Math.floor(Math.random()*$max)+'%';                                                                       // 214
				$ps.css('width', $data).attr('data-original-title', $data);                                                       // 215
			}                                                                                                                  // 216
		);                                                                                                                  // 217
	});                                                                                                                  // 218
	                                                                                                                     // 219
	// add notes                                                                                                         // 220
	function addMsg($msg){                                                                                               // 221
		var $el = $('.nav-user'), $n = $('.count:first', $el), $v = parseInt($n.text());                                    // 222
		$('.count', $el).fadeOut().fadeIn().text($v+1);                                                                     // 223
		$($msg).hide().prependTo($el.find('.list-group')).slideDown().css('display','block');                               // 224
	}                                                                                                                    // 225
	var $msg = '<a href="#" class="media list-group-item">'+                                                             // 226
                  '<span class="pull-left thumb-sm text-center">'+                                                    // 227
                    '<i class="fa fa-envelope-o fa-2x text-success"></i>'+                                            // 228
                  '</span>'+                                                                                          // 229
                  '<span class="media-body block m-b-none">'+                                                         // 230
                    'Sophi sent you a email<br>'+                                                                     // 231
                    '<small class="text-muted">1 minutes ago</small>'+                                                // 232
                  '</span>'+                                                                                          // 233
                '</a>';	                                                                                              // 234
  setTimeout(function(){addMsg($msg);}, 1500);                                                                        // 235
                                                                                                                      // 236
	// select2                                                                                                           // 237
 	if ($.fn.select2) {                                                                                                 // 238
      $("#select2-option").select2();                                                                                 // 239
      $("#select2-tags").select2({                                                                                    // 240
        tags:["red", "green", "blue"],                                                                                // 241
        tokenSeparators: [",", " "]}                                                                                  // 242
      );                                                                                                              // 243
  	}                                                                                                                  // 244
                                                                                                                      // 245
                                                                                                                      // 246
  });                                                                                                                 // 247
}(window.jQuery);                                                                                                     // 248
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/andrasph:bootstrap-notebook-theme/notebook-theme/js/fuelux/fuelux.js                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
                                                                                                                      // 1
/*                                                                                                                    // 2
 * Fuel UX Checkbox                                                                                                   // 3
 * https://github.com/ExactTarget/fuelux                                                                              // 4
 *                                                                                                                    // 5
 * Copyright (c) 2012 ExactTarget                                                                                     // 6
 * Licensed under the MIT license.                                                                                    // 7
 */                                                                                                                   // 8
                                                                                                                      // 9
+function ($) { "use strict";                                                                                         // 10
                                                                                                                      // 11
                                                                                                                      // 12
	// CHECKBOX CONSTRUCTOR AND PROTOTYPE                                                                                // 13
                                                                                                                      // 14
	var Checkbox = function (element, options) {                                                                         // 15
                                                                                                                      // 16
		this.$element = $(element);                                                                                         // 17
		this.options = $.extend({}, $.fn.checkbox.defaults, options);                                                       // 18
                                                                                                                      // 19
		// cache elements                                                                                                   // 20
		this.$label = this.$element.parent();                                                                               // 21
		this.$icon = this.$label.find('i');                                                                                 // 22
		this.$chk = this.$label.find('input[type=checkbox]');                                                               // 23
                                                                                                                      // 24
		// set default state                                                                                                // 25
		this.setState(this.$chk);                                                                                           // 26
                                                                                                                      // 27
		// handle events                                                                                                    // 28
		this.$chk.on('change', $.proxy(this.itemchecked, this));                                                            // 29
	};                                                                                                                   // 30
                                                                                                                      // 31
	Checkbox.prototype = {                                                                                               // 32
                                                                                                                      // 33
		constructor: Checkbox,                                                                                              // 34
                                                                                                                      // 35
		setState: function ($chk) {                                                                                         // 36
			var checked = $chk.is(':checked');                                                                                 // 37
			var disabled = $chk.is(':disabled');                                                                               // 38
                                                                                                                      // 39
			// reset classes                                                                                                   // 40
			this.$icon.removeClass('checked').removeClass('disabled');                                                         // 41
                                                                                                                      // 42
			// set state of checkbox                                                                                           // 43
			if (checked === true) {                                                                                            // 44
				this.$icon.addClass('checked');                                                                                   // 45
			}                                                                                                                  // 46
			if (disabled === true) {                                                                                           // 47
				this.$icon.addClass('disabled');                                                                                  // 48
			}                                                                                                                  // 49
		},                                                                                                                  // 50
                                                                                                                      // 51
		enable: function () {                                                                                               // 52
			this.$chk.attr('disabled', false);                                                                                 // 53
			this.$icon.removeClass('disabled');                                                                                // 54
		},                                                                                                                  // 55
                                                                                                                      // 56
		disable: function () {                                                                                              // 57
			this.$chk.attr('disabled', true);                                                                                  // 58
			this.$icon.addClass('disabled');                                                                                   // 59
		},                                                                                                                  // 60
                                                                                                                      // 61
		toggle: function () {                                                                                               // 62
			this.$chk.click();                                                                                                 // 63
		},                                                                                                                  // 64
                                                                                                                      // 65
		itemchecked: function (e) {                                                                                         // 66
			var chk = $(e.target);                                                                                             // 67
			this.setState(chk);                                                                                                // 68
		}                                                                                                                   // 69
	};                                                                                                                   // 70
                                                                                                                      // 71
                                                                                                                      // 72
	// CHECKBOX PLUGIN DEFINITION                                                                                        // 73
                                                                                                                      // 74
	$.fn.checkbox = function (option, value) {                                                                           // 75
		var methodReturn;                                                                                                   // 76
                                                                                                                      // 77
		var $set = this.each(function () {                                                                                  // 78
			var $this = $(this);                                                                                               // 79
			var data = $this.data('checkbox');                                                                                 // 80
			var options = typeof option === 'object' && option;                                                                // 81
                                                                                                                      // 82
			if (!data) $this.data('checkbox', (data = new Checkbox(this, options)));                                           // 83
			if (typeof option === 'string') methodReturn = data[option](value);                                                // 84
		});                                                                                                                 // 85
                                                                                                                      // 86
		return (methodReturn === undefined) ? $set : methodReturn;                                                          // 87
	};                                                                                                                   // 88
                                                                                                                      // 89
	$.fn.checkbox.defaults = {};                                                                                         // 90
                                                                                                                      // 91
	$.fn.checkbox.Constructor = Checkbox;                                                                                // 92
                                                                                                                      // 93
                                                                                                                      // 94
	// CHECKBOX DATA-API                                                                                                 // 95
                                                                                                                      // 96
	$(function () {                                                                                                      // 97
		$(window).on('load', function () {                                                                                  // 98
			//$('i.checkbox').each(function () {                                                                               // 99
			$('.checkbox-custom > input[type=checkbox]').each(function () {                                                    // 100
				var $this = $(this);                                                                                              // 101
				if ($this.data('checkbox')) return;                                                                               // 102
				$this.checkbox($this.data());                                                                                     // 103
			});                                                                                                                // 104
		});                                                                                                                 // 105
	});                                                                                                                  // 106
                                                                                                                      // 107
}(window.jQuery);                                                                                                     // 108
                                                                                                                      // 109
/*                                                                                                                    // 110
 * Fuel UX Utilities                                                                                                  // 111
 * https://github.com/ExactTarget/fuelux                                                                              // 112
 *                                                                                                                    // 113
 * Copyright (c) 2012 ExactTarget                                                                                     // 114
 * Licensed under the MIT license.                                                                                    // 115
 */                                                                                                                   // 116
                                                                                                                      // 117
+function ($) { "use strict";                                                                                         // 118
                                                                                                                      // 119
	// custom case-insensitive match expression                                                                          // 120
	function fuelTextExactCI(elem, text) {                                                                               // 121
		return (elem.textContent || elem.innerText || $(elem).text() || '').toLowerCase() === (text || '').toLowerCase();   // 122
	}                                                                                                                    // 123
                                                                                                                      // 124
	$.expr[':'].fuelTextExactCI = $.expr.createPseudo ?                                                                  // 125
		$.expr.createPseudo(function (text) {                                                                               // 126
			return function (elem) {                                                                                           // 127
				return fuelTextExactCI(elem, text);                                                                               // 128
			};                                                                                                                 // 129
		}) :                                                                                                                // 130
		function (elem, i, match) {                                                                                         // 131
			return fuelTextExactCI(elem, match[3]);                                                                            // 132
		};                                                                                                                  // 133
                                                                                                                      // 134
}(window.jQuery);                                                                                                     // 135
/*                                                                                                                    // 136
 * Fuel UX Combobox                                                                                                   // 137
 * https://github.com/ExactTarget/fuelux                                                                              // 138
 *                                                                                                                    // 139
 * Copyright (c) 2012 ExactTarget                                                                                     // 140
 * Licensed under the MIT license.                                                                                    // 141
 */                                                                                                                   // 142
                                                                                                                      // 143
+function ($) { "use strict";                                                                                         // 144
                                                                                                                      // 145
	// COMBOBOX CONSTRUCTOR AND PROTOTYPE                                                                                // 146
                                                                                                                      // 147
	var Combobox = function (element, options) {                                                                         // 148
		this.$element = $(element);                                                                                         // 149
		this.options = $.extend({}, $.fn.combobox.defaults, options);                                                       // 150
		this.$element.on('click', 'a', $.proxy(this.itemclicked, this));                                                    // 151
		this.$element.on('change', 'input', $.proxy(this.inputchanged, this));                                              // 152
		this.$input = this.$element.find('input');                                                                          // 153
		this.$button = this.$element.find('.btn');                                                                          // 154
                                                                                                                      // 155
		// set default selection                                                                                            // 156
		this.setDefaultSelection();                                                                                         // 157
	};                                                                                                                   // 158
                                                                                                                      // 159
	Combobox.prototype = {                                                                                               // 160
                                                                                                                      // 161
		constructor: Combobox,                                                                                              // 162
                                                                                                                      // 163
		selectedItem: function () {                                                                                         // 164
			var item = this.$selectedItem;                                                                                     // 165
			var data = {};                                                                                                     // 166
                                                                                                                      // 167
			if (item) {                                                                                                        // 168
				var txt = this.$selectedItem.text();                                                                              // 169
				data = $.extend({ text: txt }, this.$selectedItem.data());                                                        // 170
			}                                                                                                                  // 171
			else {                                                                                                             // 172
				data = { text: this.$input.val()};                                                                                // 173
			}                                                                                                                  // 174
                                                                                                                      // 175
			return data;                                                                                                       // 176
		},                                                                                                                  // 177
                                                                                                                      // 178
		selectByText: function (text) {                                                                                     // 179
			var selector = 'li:fuelTextExactCI(' + text + ')';                                                                 // 180
			this.selectBySelector(selector);                                                                                   // 181
		},                                                                                                                  // 182
                                                                                                                      // 183
		selectByValue: function (value) {                                                                                   // 184
			var selector = 'li[data-value="' + value + '"]';                                                                   // 185
			this.selectBySelector(selector);                                                                                   // 186
		},                                                                                                                  // 187
                                                                                                                      // 188
		selectByIndex: function (index) {                                                                                   // 189
			// zero-based index                                                                                                // 190
			var selector = 'li:eq(' + index + ')';                                                                             // 191
			this.selectBySelector(selector);                                                                                   // 192
		},                                                                                                                  // 193
                                                                                                                      // 194
		selectBySelector: function (selector) {                                                                             // 195
			var $item = this.$element.find(selector);                                                                          // 196
                                                                                                                      // 197
			if (typeof $item[0] !== 'undefined') {                                                                             // 198
				this.$selectedItem = $item;                                                                                       // 199
				this.$input.val(this.$selectedItem.text());                                                                       // 200
			}                                                                                                                  // 201
			else {                                                                                                             // 202
				this.$selectedItem = null;                                                                                        // 203
			}                                                                                                                  // 204
		},                                                                                                                  // 205
                                                                                                                      // 206
		setDefaultSelection: function () {                                                                                  // 207
			var selector = 'li[data-selected=true]:first';                                                                     // 208
			var item = this.$element.find(selector);                                                                           // 209
                                                                                                                      // 210
			if (item.length > 0) {                                                                                             // 211
				// select by data-attribute                                                                                       // 212
				this.selectBySelector(selector);                                                                                  // 213
				item.removeData('selected');                                                                                      // 214
				item.removeAttr('data-selected');                                                                                 // 215
			}                                                                                                                  // 216
		},                                                                                                                  // 217
                                                                                                                      // 218
		enable: function () {                                                                                               // 219
			this.$input.removeAttr('disabled');                                                                                // 220
			this.$button.removeClass('disabled');                                                                              // 221
		},                                                                                                                  // 222
                                                                                                                      // 223
		disable: function () {                                                                                              // 224
			this.$input.attr('disabled', true);                                                                                // 225
			this.$button.addClass('disabled');                                                                                 // 226
		},                                                                                                                  // 227
                                                                                                                      // 228
		itemclicked: function (e) {                                                                                         // 229
			this.$selectedItem = $(e.target).parent();                                                                         // 230
                                                                                                                      // 231
			// set input text and trigger input change event marked as synthetic                                               // 232
			this.$input.val(this.$selectedItem.text()).trigger('change', { synthetic: true });                                 // 233
                                                                                                                      // 234
			// pass object including text and any data-attributes                                                              // 235
			// to onchange event                                                                                               // 236
			var data = this.selectedItem();                                                                                    // 237
                                                                                                                      // 238
			// trigger changed event                                                                                           // 239
			this.$element.trigger('changed', data);                                                                            // 240
                                                                                                                      // 241
			e.preventDefault();                                                                                                // 242
		},                                                                                                                  // 243
                                                                                                                      // 244
		inputchanged: function (e, extra) {                                                                                 // 245
                                                                                                                      // 246
			// skip processing for internally-generated synthetic event                                                        // 247
			// to avoid double processing                                                                                      // 248
			if (extra && extra.synthetic) return;                                                                              // 249
                                                                                                                      // 250
			var val = $(e.target).val();                                                                                       // 251
			this.selectByText(val);                                                                                            // 252
                                                                                                                      // 253
			// find match based on input                                                                                       // 254
			// if no match, pass the input value                                                                               // 255
			var data = this.selectedItem();                                                                                    // 256
			if (data.text.length === 0) {                                                                                      // 257
				data = { text: val };                                                                                             // 258
			}                                                                                                                  // 259
                                                                                                                      // 260
			// trigger changed event                                                                                           // 261
			this.$element.trigger('changed', data);                                                                            // 262
                                                                                                                      // 263
		}                                                                                                                   // 264
                                                                                                                      // 265
	};                                                                                                                   // 266
                                                                                                                      // 267
                                                                                                                      // 268
	// COMBOBOX PLUGIN DEFINITION                                                                                        // 269
                                                                                                                      // 270
	$.fn.combobox = function (option, value) {                                                                           // 271
		var methodReturn;                                                                                                   // 272
                                                                                                                      // 273
		var $set = this.each(function () {                                                                                  // 274
			var $this = $(this);                                                                                               // 275
			var data = $this.data('combobox');                                                                                 // 276
			var options = typeof option === 'object' && option;                                                                // 277
                                                                                                                      // 278
			if (!data) $this.data('combobox', (data = new Combobox(this, options)));                                           // 279
			if (typeof option === 'string') methodReturn = data[option](value);                                                // 280
		});                                                                                                                 // 281
                                                                                                                      // 282
		return (methodReturn === undefined) ? $set : methodReturn;                                                          // 283
	};                                                                                                                   // 284
                                                                                                                      // 285
	$.fn.combobox.defaults = {};                                                                                         // 286
                                                                                                                      // 287
	$.fn.combobox.Constructor = Combobox;                                                                                // 288
                                                                                                                      // 289
                                                                                                                      // 290
	// COMBOBOX DATA-API                                                                                                 // 291
                                                                                                                      // 292
	$(function () {                                                                                                      // 293
                                                                                                                      // 294
		$(window).on('load', function () {                                                                                  // 295
			$('.combobox').each(function () {                                                                                  // 296
				var $this = $(this);                                                                                              // 297
				if ($this.data('combobox')) return;                                                                               // 298
				$this.combobox($this.data());                                                                                     // 299
			});                                                                                                                // 300
		});                                                                                                                 // 301
                                                                                                                      // 302
		$('body').on('mousedown.combobox.data-api', '.combobox', function (e) {                                             // 303
			var $this = $(this);                                                                                               // 304
			if ($this.data('combobox')) return;                                                                                // 305
			$this.combobox($this.data());                                                                                      // 306
		});                                                                                                                 // 307
	});                                                                                                                  // 308
                                                                                                                      // 309
}(window.jQuery);                                                                                                     // 310
                                                                                                                      // 311
/*                                                                                                                    // 312
 * Fuel UX Datagrid                                                                                                   // 313
 * https://github.com/ExactTarget/fuelux                                                                              // 314
 *                                                                                                                    // 315
 * Copyright (c) 2012 ExactTarget                                                                                     // 316
 * Licensed under the MIT license.                                                                                    // 317
 */                                                                                                                   // 318
                                                                                                                      // 319
+function ($) { "use strict";                                                                                         // 320
                                                                                                                      // 321
	// Relates to thead .sorted styles in datagrid.less                                                                  // 322
	var SORTED_HEADER_OFFSET = 22;                                                                                       // 323
                                                                                                                      // 324
	// DATAGRID CONSTRUCTOR AND PROTOTYPE                                                                                // 325
                                                                                                                      // 326
	var Datagrid = function (element, options) {                                                                         // 327
		this.$element = $(element);                                                                                         // 328
		this.$thead = this.$element.find('thead');                                                                          // 329
		this.$tfoot = this.$element.find('tfoot');                                                                          // 330
		this.$footer = this.$element.find('tfoot th');                                                                      // 331
		this.$footerchildren = this.$footer.children().show().css('visibility', 'hidden');                                  // 332
		this.$topheader = this.$element.find('thead th');                                                                   // 333
		this.$searchcontrol = this.$element.find('.datagrid-search');                                                       // 334
		this.$filtercontrol = this.$element.find('.filter');                                                                // 335
		this.$pagesize = this.$element.find('.grid-pagesize');                                                              // 336
		this.$pageinput = this.$element.find('.grid-pager input');                                                          // 337
		this.$pagedropdown = this.$element.find('.grid-pager .dropdown-menu');                                              // 338
		this.$prevpagebtn = this.$element.find('.grid-prevpage');                                                           // 339
		this.$nextpagebtn = this.$element.find('.grid-nextpage');                                                           // 340
		this.$pageslabel = this.$element.find('.grid-pages');                                                               // 341
		this.$countlabel = this.$element.find('.grid-count');                                                               // 342
		this.$startlabel = this.$element.find('.grid-start');                                                               // 343
		this.$endlabel = this.$element.find('.grid-end');                                                                   // 344
                                                                                                                      // 345
		this.$tbody = $('<tbody>').insertAfter(this.$thead);                                                                // 346
		this.$colheader = $('<tr>').appendTo(this.$thead);                                                                  // 347
                                                                                                                      // 348
		this.options = $.extend(true, {}, $.fn.datagrid.defaults, options);                                                 // 349
                                                                                                                      // 350
		// Shim until v3 -- account for FuelUX select or native select for page size:                                       // 351
		if (this.$pagesize.hasClass('select')) {                                                                            // 352
			this.options.dataOptions.pageSize = parseInt(this.$pagesize.select('selectedItem').value, 10);                     // 353
		} else {                                                                                                            // 354
			this.options.dataOptions.pageSize = parseInt(this.$pagesize.val(), 10);                                            // 355
		}                                                                                                                   // 356
                                                                                                                      // 357
		// Shim until v3 -- account for older search class:                                                                 // 358
		if (this.$searchcontrol.length <= 0) {                                                                              // 359
			this.$searchcontrol = this.$element.find('.search');                                                               // 360
		}                                                                                                                   // 361
                                                                                                                      // 362
		this.columns = this.options.dataSource.columns();                                                                   // 363
                                                                                                                      // 364
		this.$nextpagebtn.on('click', $.proxy(this.next, this));                                                            // 365
		this.$prevpagebtn.on('click', $.proxy(this.previous, this));                                                        // 366
		this.$searchcontrol.on('searched cleared', $.proxy(this.searchChanged, this));                                      // 367
		this.$filtercontrol.on('changed', $.proxy(this.filterChanged, this));                                               // 368
		this.$colheader.on('click', 'th', $.proxy(this.headerClicked, this));                                               // 369
                                                                                                                      // 370
		if(this.$pagesize.hasClass('select')) {                                                                             // 371
			this.$pagesize.on('changed', $.proxy(this.pagesizeChanged, this));                                                 // 372
		} else {                                                                                                            // 373
			this.$pagesize.on('change', $.proxy(this.pagesizeChanged, this));                                                  // 374
		}                                                                                                                   // 375
                                                                                                                      // 376
		this.$pageinput.on('change', $.proxy(this.pageChanged, this));                                                      // 377
                                                                                                                      // 378
		this.renderColumns();                                                                                               // 379
                                                                                                                      // 380
		if (this.options.stretchHeight) this.initStretchHeight();                                                           // 381
                                                                                                                      // 382
		this.renderData();                                                                                                  // 383
	};                                                                                                                   // 384
                                                                                                                      // 385
	Datagrid.prototype = {                                                                                               // 386
                                                                                                                      // 387
		constructor: Datagrid,                                                                                              // 388
                                                                                                                      // 389
		renderColumns: function () {                                                                                        // 390
			var self = this;                                                                                                   // 391
                                                                                                                      // 392
			this.$footer.attr('colspan', this.columns.length);                                                                 // 393
			this.$topheader.attr('colspan', this.columns.length);                                                              // 394
                                                                                                                      // 395
			var colHTML = '';                                                                                                  // 396
                                                                                                                      // 397
			$.each(this.columns, function (index, column) {                                                                    // 398
				colHTML += '<th data-property="' + column.property + '"';                                                         // 399
				if (column.sortable) colHTML += ' class="sortable"';                                                              // 400
				colHTML += '>' + column.label + '</th>';                                                                          // 401
			});                                                                                                                // 402
                                                                                                                      // 403
			self.$colheader.append(colHTML);                                                                                   // 404
		},                                                                                                                  // 405
                                                                                                                      // 406
		updateColumns: function ($target, direction) {                                                                      // 407
			this._updateColumns(this.$colheader, $target, direction);                                                          // 408
                                                                                                                      // 409
			if (this.$sizingHeader) {                                                                                          // 410
				this._updateColumns(this.$sizingHeader, this.$sizingHeader.find('th').eq($target.index()), direction);            // 411
			}                                                                                                                  // 412
		},                                                                                                                  // 413
                                                                                                                      // 414
		_updateColumns: function ($header, $target, direction) {                                                            // 415
			var className = (direction === 'asc') ? 'fa fa-caret-up' : 'fa fa-caret-down';                                     // 416
			$header.find('i.datagrid-sort').remove();                                                                          // 417
			$header.find('th').removeClass('sorted');                                                                          // 418
			$('<i>').addClass(className + ' datagrid-sort').appendTo($target);                                                 // 419
			$target.addClass('sorted');                                                                                        // 420
		},                                                                                                                  // 421
                                                                                                                      // 422
		updatePageDropdown: function (data) {                                                                               // 423
			var pageHTML = '';                                                                                                 // 424
                                                                                                                      // 425
			for (var i = 1; i <= data.pages; i++) {                                                                            // 426
				pageHTML += '<li><a>' + i + '</a></li>';                                                                          // 427
			}                                                                                                                  // 428
                                                                                                                      // 429
			this.$pagedropdown.html(pageHTML);                                                                                 // 430
		},                                                                                                                  // 431
                                                                                                                      // 432
		updatePageButtons: function (data) {                                                                                // 433
			if (data.page === 1) {                                                                                             // 434
				this.$prevpagebtn.attr('disabled', 'disabled');                                                                   // 435
			} else {                                                                                                           // 436
				this.$prevpagebtn.removeAttr('disabled');                                                                         // 437
			}                                                                                                                  // 438
                                                                                                                      // 439
			if (data.page === data.pages) {                                                                                    // 440
				this.$nextpagebtn.attr('disabled', 'disabled');                                                                   // 441
			} else {                                                                                                           // 442
				this.$nextpagebtn.removeAttr('disabled');                                                                         // 443
			}                                                                                                                  // 444
		},                                                                                                                  // 445
                                                                                                                      // 446
		renderData: function () {                                                                                           // 447
			var self = this;                                                                                                   // 448
                                                                                                                      // 449
			this.$tbody.html(this.placeholderRowHTML(this.options.loadingHTML));                                               // 450
                                                                                                                      // 451
			this.options.dataSource.data(this.options.dataOptions, function (data) {                                           // 452
				var itemdesc = (data.count === 1) ? self.options.itemText : self.options.itemsText;                               // 453
				var rowHTML = '';                                                                                                 // 454
                                                                                                                      // 455
				self.$footerchildren.css('visibility', function () {                                                              // 456
					return (data.count > 0) ? 'visible' : 'hidden';                                                                  // 457
				});                                                                                                               // 458
                                                                                                                      // 459
				self.$pageinput.val(data.page);                                                                                   // 460
				self.$pageslabel.text(data.pages);                                                                                // 461
				self.$countlabel.text(data.count + ' ' + itemdesc);                                                               // 462
				self.$startlabel.text(data.start);                                                                                // 463
				self.$endlabel.text(data.end);                                                                                    // 464
                                                                                                                      // 465
				self.updatePageDropdown(data);                                                                                    // 466
				self.updatePageButtons(data);                                                                                     // 467
                                                                                                                      // 468
				$.each(data.data, function (index, row) {                                                                         // 469
					rowHTML += '<tr>';                                                                                               // 470
					$.each(self.columns, function (index, column) {                                                                  // 471
						rowHTML += '<td>' + row[column.property] + '</td>';                                                             // 472
					});                                                                                                              // 473
					rowHTML += '</tr>';                                                                                              // 474
				});                                                                                                               // 475
                                                                                                                      // 476
				if (!rowHTML) rowHTML = self.placeholderRowHTML('0 ' + self.options.itemsText);                                   // 477
                                                                                                                      // 478
				self.$tbody.html(rowHTML);                                                                                        // 479
				self.stretchHeight();                                                                                             // 480
                                                                                                                      // 481
				self.$element.trigger('loaded');                                                                                  // 482
			});                                                                                                                // 483
                                                                                                                      // 484
		},                                                                                                                  // 485
                                                                                                                      // 486
		placeholderRowHTML: function (content) {                                                                            // 487
			return '<tr><td style="text-align:center;padding:20px;border-bottom:none;" colspan="' +                            // 488
				this.columns.length + '">' + content + '</td></tr>';                                                              // 489
		},                                                                                                                  // 490
                                                                                                                      // 491
		headerClicked: function (e) {                                                                                       // 492
			var $target = $(e.target);                                                                                         // 493
			if (!$target.hasClass('sortable')) return;                                                                         // 494
                                                                                                                      // 495
			var direction = this.options.dataOptions.sortDirection;                                                            // 496
			var sort = this.options.dataOptions.sortProperty;                                                                  // 497
			var property = $target.data('property');                                                                           // 498
                                                                                                                      // 499
			if (sort === property) {                                                                                           // 500
				this.options.dataOptions.sortDirection = (direction === 'asc') ? 'desc' : 'asc';                                  // 501
			} else {                                                                                                           // 502
				this.options.dataOptions.sortDirection = 'asc';                                                                   // 503
				this.options.dataOptions.sortProperty = property;                                                                 // 504
			}                                                                                                                  // 505
                                                                                                                      // 506
			this.options.dataOptions.pageIndex = 0;                                                                            // 507
			this.updateColumns($target, this.options.dataOptions.sortDirection);                                               // 508
			this.renderData();                                                                                                 // 509
		},                                                                                                                  // 510
                                                                                                                      // 511
		pagesizeChanged: function (e, pageSize) {                                                                           // 512
			if(pageSize) {                                                                                                     // 513
				this.options.dataOptions.pageSize = parseInt(pageSize.value, 10);                                                 // 514
			} else {                                                                                                           // 515
				this.options.dataOptions.pageSize = parseInt($(e.target).val(), 10);                                              // 516
			}                                                                                                                  // 517
                                                                                                                      // 518
			this.options.dataOptions.pageIndex = 0;                                                                            // 519
			this.renderData();                                                                                                 // 520
		},                                                                                                                  // 521
                                                                                                                      // 522
		pageChanged: function (e) {                                                                                         // 523
			var pageRequested = parseInt($(e.target).val(), 10);                                                               // 524
			pageRequested = (isNaN(pageRequested)) ? 1 : pageRequested;                                                        // 525
			var maxPages = this.$pageslabel.text();                                                                            // 526
		                                                                                                                    // 527
			this.options.dataOptions.pageIndex =                                                                               // 528
				(pageRequested > maxPages) ? maxPages - 1 : pageRequested - 1;                                                    // 529
                                                                                                                      // 530
			this.renderData();                                                                                                 // 531
		},                                                                                                                  // 532
                                                                                                                      // 533
		searchChanged: function (e, search) {                                                                               // 534
			this.options.dataOptions.search = search;                                                                          // 535
			this.options.dataOptions.pageIndex = 0;                                                                            // 536
			this.renderData();                                                                                                 // 537
		},                                                                                                                  // 538
                                                                                                                      // 539
		filterChanged: function (e, filter) {                                                                               // 540
			this.options.dataOptions.filter = filter;                                                                          // 541
			this.options.dataOptions.pageIndex = 0;                                                                            // 542
			this.renderData();                                                                                                 // 543
		},                                                                                                                  // 544
                                                                                                                      // 545
		previous: function () {                                                                                             // 546
			this.options.dataOptions.pageIndex--;                                                                              // 547
			this.renderData();                                                                                                 // 548
		},                                                                                                                  // 549
                                                                                                                      // 550
		next: function () {                                                                                                 // 551
			this.options.dataOptions.pageIndex++;                                                                              // 552
			this.renderData();                                                                                                 // 553
		},                                                                                                                  // 554
                                                                                                                      // 555
		reload: function () {                                                                                               // 556
			this.options.dataOptions.pageIndex = 0;                                                                            // 557
			this.renderData();                                                                                                 // 558
		},                                                                                                                  // 559
                                                                                                                      // 560
		initStretchHeight: function () {                                                                                    // 561
			this.$gridContainer = this.$element.parent();                                                                      // 562
                                                                                                                      // 563
			this.$element.wrap('<div class="datagrid-stretch-wrapper">');                                                      // 564
			this.$stretchWrapper = this.$element.parent();                                                                     // 565
                                                                                                                      // 566
			this.$headerTable = $('<table>').attr('class', this.$element.attr('class'));                                       // 567
			this.$footerTable = this.$headerTable.clone();                                                                     // 568
                                                                                                                      // 569
			this.$headerTable.prependTo(this.$gridContainer).addClass('datagrid-stretch-header');                              // 570
			this.$thead.detach().appendTo(this.$headerTable);                                                                  // 571
                                                                                                                      // 572
			this.$sizingHeader = this.$thead.clone();                                                                          // 573
			this.$sizingHeader.find('tr:first').remove();                                                                      // 574
                                                                                                                      // 575
			this.$footerTable.appendTo(this.$gridContainer).addClass('datagrid-stretch-footer');                               // 576
			this.$tfoot.detach().appendTo(this.$footerTable);                                                                  // 577
		},                                                                                                                  // 578
                                                                                                                      // 579
		stretchHeight: function () {                                                                                        // 580
			if (!this.$gridContainer) return;                                                                                  // 581
                                                                                                                      // 582
			this.setColumnWidths();                                                                                            // 583
                                                                                                                      // 584
			var targetHeight = this.$gridContainer.height();                                                                   // 585
			var headerHeight = this.$headerTable.outerHeight();                                                                // 586
			var footerHeight = this.$footerTable.outerHeight();                                                                // 587
			var overhead = headerHeight + footerHeight;                                                                        // 588
                                                                                                                      // 589
			this.$stretchWrapper.height(targetHeight - overhead);                                                              // 590
		},                                                                                                                  // 591
                                                                                                                      // 592
		setColumnWidths: function () {                                                                                      // 593
			if (!this.$sizingHeader) return;                                                                                   // 594
                                                                                                                      // 595
			this.$element.prepend(this.$sizingHeader);                                                                         // 596
                                                                                                                      // 597
			var $sizingCells = this.$sizingHeader.find('th');                                                                  // 598
			var columnCount = $sizingCells.length;                                                                             // 599
                                                                                                                      // 600
			function matchSizingCellWidth(i, el) {                                                                             // 601
				if (i === columnCount - 1) return;                                                                                // 602
                                                                                                                      // 603
				var $el = $(el);                                                                                                  // 604
				var $sourceCell = $sizingCells.eq(i);                                                                             // 605
				var width = $sourceCell.width();                                                                                  // 606
                                                                                                                      // 607
				// TD needs extra width to match sorted column header                                                             // 608
				if ($sourceCell.hasClass('sorted') && $el.prop('tagName') === 'TD') width = width + SORTED_HEADER_OFFSET;         // 609
                                                                                                                      // 610
				$el.width(width);                                                                                                 // 611
			}                                                                                                                  // 612
                                                                                                                      // 613
			this.$colheader.find('th').each(matchSizingCellWidth);                                                             // 614
			this.$tbody.find('tr:first > td').each(matchSizingCellWidth);                                                      // 615
                                                                                                                      // 616
			this.$sizingHeader.detach();                                                                                       // 617
		}                                                                                                                   // 618
	};                                                                                                                   // 619
                                                                                                                      // 620
                                                                                                                      // 621
	// DATAGRID PLUGIN DEFINITION                                                                                        // 622
                                                                                                                      // 623
	$.fn.datagrid = function (option) {                                                                                  // 624
		return this.each(function () {                                                                                      // 625
			var $this = $(this);                                                                                               // 626
			var data = $this.data('datagrid');                                                                                 // 627
			var options = typeof option === 'object' && option;                                                                // 628
                                                                                                                      // 629
			if (!data) $this.data('datagrid', (data = new Datagrid(this, options)));                                           // 630
			if (typeof option === 'string') data[option]();                                                                    // 631
		});                                                                                                                 // 632
	};                                                                                                                   // 633
                                                                                                                      // 634
	$.fn.datagrid.defaults = {                                                                                           // 635
		dataOptions: { pageIndex: 0, pageSize: 10 },                                                                        // 636
		loadingHTML: '<div class="progress progress-striped active" style="width:50%;margin:auto;"><div class="bar" style="width:100%;"></div></div>',
		itemsText: 'items',                                                                                                 // 638
		itemText: 'item'                                                                                                    // 639
	};                                                                                                                   // 640
                                                                                                                      // 641
	$.fn.datagrid.Constructor = Datagrid;                                                                                // 642
                                                                                                                      // 643
}(window.jQuery);                                                                                                     // 644
                                                                                                                      // 645
/*                                                                                                                    // 646
 * Fuel UX Pillbox                                                                                                    // 647
 * https://github.com/ExactTarget/fuelux                                                                              // 648
 *                                                                                                                    // 649
 * Copyright (c) 2012 ExactTarget                                                                                     // 650
 * Licensed under the MIT license.                                                                                    // 651
 */                                                                                                                   // 652
                                                                                                                      // 653
+function ($) { "use strict";                                                                                         // 654
	                                                                                                                     // 655
	// PILLBOX CONSTRUCTOR AND PROTOTYPE                                                                                 // 656
                                                                                                                      // 657
	var Pillbox = function (element, options) {                                                                          // 658
		this.$element = $(element);                                                                                         // 659
		this.options = $.extend({}, $.fn.pillbox.defaults, options);                                                        // 660
		this.$element.on('click', 'li', $.proxy(this.itemclicked, this));                                                   // 661
	};                                                                                                                   // 662
                                                                                                                      // 663
	Pillbox.prototype = {                                                                                                // 664
		constructor: Pillbox,                                                                                               // 665
                                                                                                                      // 666
		items: function() {                                                                                                 // 667
			return this.$element.find('li').map(function() {                                                                   // 668
				var $this = $(this);                                                                                              // 669
				return $.extend({ text: $this.text() }, $this.data());                                                            // 670
			}).get();                                                                                                          // 671
		},                                                                                                                  // 672
                                                                                                                      // 673
		itemclicked: function (e) {                                                                                         // 674
			$(e.currentTarget).remove();                                                                                       // 675
			e.preventDefault();                                                                                                // 676
		}                                                                                                                   // 677
	};                                                                                                                   // 678
                                                                                                                      // 679
                                                                                                                      // 680
	// PILLBOX PLUGIN DEFINITION                                                                                         // 681
                                                                                                                      // 682
	$.fn.pillbox = function (option) {                                                                                   // 683
		var methodReturn;                                                                                                   // 684
                                                                                                                      // 685
		var $set = this.each(function () {                                                                                  // 686
			var $this = $(this);                                                                                               // 687
			var data = $this.data('pillbox');                                                                                  // 688
			var options = typeof option === 'object' && option;                                                                // 689
                                                                                                                      // 690
			if (!data) $this.data('pillbox', (data = new Pillbox(this, options)));                                             // 691
			if (typeof option === 'string') methodReturn = data[option]();                                                     // 692
		});                                                                                                                 // 693
                                                                                                                      // 694
		return (methodReturn === undefined) ? $set : methodReturn;                                                          // 695
	};                                                                                                                   // 696
                                                                                                                      // 697
	$.fn.pillbox.defaults = {};                                                                                          // 698
                                                                                                                      // 699
	$.fn.pillbox.Constructor = Pillbox;                                                                                  // 700
                                                                                                                      // 701
                                                                                                                      // 702
	// PILLBOX DATA-API                                                                                                  // 703
                                                                                                                      // 704
	$(function () {                                                                                                      // 705
		$('body').on('mousedown.pillbox.data-api', '.pillbox', function (e) {                                               // 706
			var $this = $(this);                                                                                               // 707
			if ($this.data('pillbox')) return;                                                                                 // 708
			$this.pillbox($this.data());                                                                                       // 709
		});                                                                                                                 // 710
	});                                                                                                                  // 711
	                                                                                                                     // 712
}(window.jQuery);                                                                                                     // 713
                                                                                                                      // 714
                                                                                                                      // 715
/*                                                                                                                    // 716
 * Fuel UX Radio                                                                                                      // 717
 * https://github.com/ExactTarget/fuelux                                                                              // 718
 *                                                                                                                    // 719
 * Copyright (c) 2012 ExactTarget                                                                                     // 720
 * Licensed under the MIT license.                                                                                    // 721
 */                                                                                                                   // 722
                                                                                                                      // 723
+function ($) { "use strict";                                                                                         // 724
                                                                                                                      // 725
	// RADIO CONSTRUCTOR AND PROTOTYPE                                                                                   // 726
                                                                                                                      // 727
	var Radio = function (element, options) {                                                                            // 728
		this.$element = $(element);                                                                                         // 729
		this.options = $.extend({}, $.fn.radio.defaults, options);                                                          // 730
                                                                                                                      // 731
		// cache elements                                                                                                   // 732
		this.$label = this.$element.parent();                                                                               // 733
		this.$icon = this.$label.find('i');                                                                                 // 734
		this.$radio = this.$label.find('input[type=radio]');                                                                // 735
		this.groupName = this.$radio.attr('name');                                                                          // 736
                                                                                                                      // 737
		// set default state                                                                                                // 738
		this.setState(this.$radio);                                                                                         // 739
                                                                                                                      // 740
		// handle events                                                                                                    // 741
		this.$radio.on('change', $.proxy(this.itemchecked, this));                                                          // 742
	};                                                                                                                   // 743
                                                                                                                      // 744
	Radio.prototype = {                                                                                                  // 745
                                                                                                                      // 746
		constructor: Radio,                                                                                                 // 747
                                                                                                                      // 748
		setState: function ($radio, resetGroupState) {                                                                      // 749
			var checked = $radio.is(':checked');                                                                               // 750
			var disabled = $radio.is(':disabled');                                                                             // 751
                                                                                                                      // 752
			// set state of radio                                                                                              // 753
			if (checked === true) {                                                                                            // 754
				this.$icon.addClass('checked');                                                                                   // 755
			}                                                                                                                  // 756
			if (disabled === true) {                                                                                           // 757
				this.$icon.addClass('disabled');                                                                                  // 758
			}                                                                                                                  // 759
		},                                                                                                                  // 760
                                                                                                                      // 761
		resetGroup: function () {                                                                                           // 762
			// reset all radio buttons in group                                                                                // 763
			$('input[name=' + this.groupName + ']').next().removeClass('checked');                                             // 764
		},                                                                                                                  // 765
                                                                                                                      // 766
		enable: function () {                                                                                               // 767
			this.$radio.attr('disabled', false);                                                                               // 768
			this.$icon.removeClass('disabled');                                                                                // 769
		},                                                                                                                  // 770
                                                                                                                      // 771
		disable: function () {                                                                                              // 772
			this.$radio.attr('disabled', true);                                                                                // 773
			this.$icon.addClass('disabled');                                                                                   // 774
		},                                                                                                                  // 775
                                                                                                                      // 776
		itemchecked: function (e) {                                                                                         // 777
			var radio = $(e.target);                                                                                           // 778
                                                                                                                      // 779
			this.resetGroup();                                                                                                 // 780
			this.setState(radio);                                                                                              // 781
		}                                                                                                                   // 782
	};                                                                                                                   // 783
                                                                                                                      // 784
                                                                                                                      // 785
	// RADIO PLUGIN DEFINITION                                                                                           // 786
                                                                                                                      // 787
	$.fn.radio = function (option, value) {                                                                              // 788
		var methodReturn;                                                                                                   // 789
                                                                                                                      // 790
		var $set = this.each(function () {                                                                                  // 791
			var $this = $(this);                                                                                               // 792
			var data = $this.data('radio');                                                                                    // 793
			var options = typeof option === 'object' && option;                                                                // 794
                                                                                                                      // 795
			if (!data) $this.data('radio', (data = new Radio(this, options)));                                                 // 796
			if (typeof option === 'string') methodReturn = data[option](value);                                                // 797
		});                                                                                                                 // 798
                                                                                                                      // 799
		return (methodReturn === undefined) ? $set : methodReturn;                                                          // 800
	};                                                                                                                   // 801
                                                                                                                      // 802
	$.fn.radio.defaults = {};                                                                                            // 803
                                                                                                                      // 804
	$.fn.radio.Constructor = Radio;                                                                                      // 805
                                                                                                                      // 806
                                                                                                                      // 807
	// RADIO DATA-API                                                                                                    // 808
                                                                                                                      // 809
	$(function () {                                                                                                      // 810
		$(window).on('load', function () {                                                                                  // 811
			//$('i.radio').each(function () {                                                                                  // 812
			$('.radio-custom > input[type=radio]').each(function () {                                                          // 813
				var $this = $(this);                                                                                              // 814
				if ($this.data('radio')) return;                                                                                  // 815
				$this.radio($this.data());                                                                                        // 816
			});                                                                                                                // 817
		});                                                                                                                 // 818
	});                                                                                                                  // 819
                                                                                                                      // 820
}(window.jQuery);                                                                                                     // 821
                                                                                                                      // 822
/*                                                                                                                    // 823
 * Fuel UX Search                                                                                                     // 824
 * https://github.com/ExactTarget/fuelux                                                                              // 825
 *                                                                                                                    // 826
 * Copyright (c) 2012 ExactTarget                                                                                     // 827
 * Licensed under the MIT license.                                                                                    // 828
 */                                                                                                                   // 829
                                                                                                                      // 830
+function ($) { "use strict";                                                                                         // 831
                                                                                                                      // 832
	// SEARCH CONSTRUCTOR AND PROTOTYPE                                                                                  // 833
                                                                                                                      // 834
	var Search = function (element, options) {                                                                           // 835
		this.$element = $(element);                                                                                         // 836
		this.options = $.extend({}, $.fn.search.defaults, options);                                                         // 837
                                                                                                                      // 838
		this.$button = this.$element.find('button')                                                                         // 839
			.on('click', $.proxy(this.buttonclicked, this));                                                                   // 840
                                                                                                                      // 841
		this.$input = this.$element.find('input')                                                                           // 842
			.on('keydown', $.proxy(this.keypress, this))                                                                       // 843
			.on('keyup', $.proxy(this.keypressed, this));                                                                      // 844
                                                                                                                      // 845
		this.$icon = this.$element.find('i');                                                                               // 846
		this.activeSearch = '';                                                                                             // 847
	};                                                                                                                   // 848
                                                                                                                      // 849
	Search.prototype = {                                                                                                 // 850
                                                                                                                      // 851
		constructor: Search,                                                                                                // 852
                                                                                                                      // 853
		search: function (searchText) {                                                                                     // 854
			this.$icon.attr('class', 'fa fa-times');                                                                           // 855
			this.activeSearch = searchText;                                                                                    // 856
			this.$element.trigger('searched', searchText);                                                                     // 857
		},                                                                                                                  // 858
                                                                                                                      // 859
		clear: function () {                                                                                                // 860
			this.$icon.attr('class', 'fa fa-search');                                                                          // 861
			this.activeSearch = '';                                                                                            // 862
			this.$input.val('');                                                                                               // 863
			this.$element.trigger('cleared');                                                                                  // 864
		},                                                                                                                  // 865
                                                                                                                      // 866
		action: function () {                                                                                               // 867
			var val = this.$input.val();                                                                                       // 868
			var inputEmptyOrUnchanged = val === '' || val === this.activeSearch;                                               // 869
                                                                                                                      // 870
			if (this.activeSearch && inputEmptyOrUnchanged) {                                                                  // 871
				this.clear();                                                                                                     // 872
			} else if (val) {                                                                                                  // 873
				this.search(val);                                                                                                 // 874
			}                                                                                                                  // 875
		},                                                                                                                  // 876
                                                                                                                      // 877
		buttonclicked: function (e) {                                                                                       // 878
			e.preventDefault();                                                                                                // 879
			if ($(e.currentTarget).is('.disabled, :disabled')) return;                                                         // 880
			this.action();                                                                                                     // 881
		},                                                                                                                  // 882
                                                                                                                      // 883
		keypress: function (e) {                                                                                            // 884
			if (e.which === 13) {                                                                                              // 885
				e.preventDefault();                                                                                               // 886
			}                                                                                                                  // 887
		},                                                                                                                  // 888
                                                                                                                      // 889
		keypressed: function (e) {                                                                                          // 890
			var val, inputPresentAndUnchanged;                                                                                 // 891
                                                                                                                      // 892
			if (e.which === 13) {                                                                                              // 893
				e.preventDefault();                                                                                               // 894
				this.action();                                                                                                    // 895
			} else {                                                                                                           // 896
				val = this.$input.val();                                                                                          // 897
				inputPresentAndUnchanged = val && (val === this.activeSearch);                                                    // 898
				this.$icon.attr('class', inputPresentAndUnchanged ? 'fa fa-times' : 'fa fa-search');                              // 899
			}                                                                                                                  // 900
		},                                                                                                                  // 901
                                                                                                                      // 902
		disable: function () {                                                                                              // 903
			this.$input.attr('disabled', 'disabled');                                                                          // 904
			this.$button.addClass('disabled');                                                                                 // 905
		},                                                                                                                  // 906
                                                                                                                      // 907
		enable: function () {                                                                                               // 908
			this.$input.removeAttr('disabled');                                                                                // 909
			this.$button.removeClass('disabled');                                                                              // 910
		}                                                                                                                   // 911
                                                                                                                      // 912
	};                                                                                                                   // 913
                                                                                                                      // 914
                                                                                                                      // 915
	// SEARCH PLUGIN DEFINITION                                                                                          // 916
                                                                                                                      // 917
	$.fn.search = function (option) {                                                                                    // 918
		return this.each(function () {                                                                                      // 919
			var $this = $(this);                                                                                               // 920
			var data = $this.data('search');                                                                                   // 921
			var options = typeof option === 'object' && option;                                                                // 922
                                                                                                                      // 923
			if (!data) $this.data('search', (data = new Search(this, options)));                                               // 924
			if (typeof option === 'string') data[option]();                                                                    // 925
		});                                                                                                                 // 926
	};                                                                                                                   // 927
                                                                                                                      // 928
	$.fn.search.defaults = {};                                                                                           // 929
                                                                                                                      // 930
	$.fn.search.Constructor = Search;                                                                                    // 931
                                                                                                                      // 932
                                                                                                                      // 933
	// SEARCH DATA-API                                                                                                   // 934
                                                                                                                      // 935
	$(function () {                                                                                                      // 936
		$('body').on('mousedown.search.data-api', '.search', function () {                                                  // 937
			var $this = $(this);                                                                                               // 938
			if ($this.data('search')) return;                                                                                  // 939
			$this.search($this.data());                                                                                        // 940
		});                                                                                                                 // 941
	});                                                                                                                  // 942
                                                                                                                      // 943
}(window.jQuery);                                                                                                     // 944
                                                                                                                      // 945
/*                                                                                                                    // 946
 * Fuel UX Spinner                                                                                                    // 947
 * https://github.com/ExactTarget/fuelux                                                                              // 948
 *                                                                                                                    // 949
 * Copyright (c) 2012 ExactTarget                                                                                     // 950
 * Licensed under the MIT license.                                                                                    // 951
 */                                                                                                                   // 952
                                                                                                                      // 953
+function ($) { "use strict";                                                                                         // 954
                                                                                                                      // 955
	// SPINNER CONSTRUCTOR AND PROTOTYPE                                                                                 // 956
                                                                                                                      // 957
	var Spinner = function (element, options) {                                                                          // 958
		this.$element = $(element);                                                                                         // 959
		this.options = $.extend({}, $.fn.spinner.defaults, options);                                                        // 960
		this.$input = this.$element.find('.spinner-input');                                                                 // 961
		this.$element.on('keyup', this.$input, $.proxy(this.change, this));                                                 // 962
                                                                                                                      // 963
		if (this.options.hold) {                                                                                            // 964
			this.$element.on('mousedown', '.spinner-up', $.proxy(function() { this.startSpin(true); } , this));                // 965
			this.$element.on('mouseup', '.spinner-up, .spinner-down', $.proxy(this.stopSpin, this));                           // 966
			this.$element.on('mouseout', '.spinner-up, .spinner-down', $.proxy(this.stopSpin, this));                          // 967
			this.$element.on('mousedown', '.spinner-down', $.proxy(function() {this.startSpin(false);} , this));               // 968
		} else {                                                                                                            // 969
			this.$element.on('click', '.spinner-up', $.proxy(function() { this.step(true); } , this));                         // 970
			this.$element.on('click', '.spinner-down', $.proxy(function() { this.step(false); }, this));                       // 971
		}                                                                                                                   // 972
                                                                                                                      // 973
		this.switches = {                                                                                                   // 974
			count: 1,                                                                                                          // 975
			enabled: true                                                                                                      // 976
		};                                                                                                                  // 977
                                                                                                                      // 978
		if (this.options.speed === 'medium') {                                                                              // 979
			this.switches.speed = 300;                                                                                         // 980
		} else if (this.options.speed === 'fast') {                                                                         // 981
			this.switches.speed = 100;                                                                                         // 982
		} else {                                                                                                            // 983
			this.switches.speed = 500;                                                                                         // 984
		}                                                                                                                   // 985
                                                                                                                      // 986
		this.lastValue = null;                                                                                              // 987
                                                                                                                      // 988
		this.render();                                                                                                      // 989
                                                                                                                      // 990
		if (this.options.disabled) {                                                                                        // 991
			this.disable();                                                                                                    // 992
		}                                                                                                                   // 993
	};                                                                                                                   // 994
                                                                                                                      // 995
	Spinner.prototype = {                                                                                                // 996
		constructor: Spinner,                                                                                               // 997
                                                                                                                      // 998
		render: function () {                                                                                               // 999
			this.$input.val(this.options.value);                                                                               // 1000
			this.$input.attr('maxlength',(this.options.max + '').split('').length);                                            // 1001
		},                                                                                                                  // 1002
                                                                                                                      // 1003
		change: function () {                                                                                               // 1004
			var newVal = this.$input.val();                                                                                    // 1005
                                                                                                                      // 1006
			if(newVal/1){                                                                                                      // 1007
				this.options.value = newVal/1;                                                                                    // 1008
			}else{                                                                                                             // 1009
				newVal = newVal.replace(/[^0-9]/g,'');                                                                            // 1010
				this.$input.val(newVal);                                                                                          // 1011
				this.options.value = newVal/1;                                                                                    // 1012
			}                                                                                                                  // 1013
                                                                                                                      // 1014
			this.triggerChangedEvent();                                                                                        // 1015
		},                                                                                                                  // 1016
                                                                                                                      // 1017
		stopSpin: function () {                                                                                             // 1018
			clearTimeout(this.switches.timeout);                                                                               // 1019
			this.switches.count = 1;                                                                                           // 1020
			this.triggerChangedEvent();                                                                                        // 1021
		},                                                                                                                  // 1022
                                                                                                                      // 1023
		triggerChangedEvent: function () {                                                                                  // 1024
			var currentValue = this.value();                                                                                   // 1025
			if (currentValue === this.lastValue) return;                                                                       // 1026
                                                                                                                      // 1027
			this.lastValue = currentValue;                                                                                     // 1028
                                                                                                                      // 1029
			// Primary changed event                                                                                           // 1030
			this.$element.trigger('changed', currentValue);                                                                    // 1031
                                                                                                                      // 1032
			// Undocumented, kept for backward compatibility                                                                   // 1033
			this.$element.trigger('change');                                                                                   // 1034
		},                                                                                                                  // 1035
                                                                                                                      // 1036
		startSpin: function (type) {                                                                                        // 1037
                                                                                                                      // 1038
			if (!this.options.disabled) {                                                                                      // 1039
				var divisor = this.switches.count;                                                                                // 1040
                                                                                                                      // 1041
				if (divisor === 1) {                                                                                              // 1042
					this.step(type);                                                                                                 // 1043
					divisor = 1;                                                                                                     // 1044
				} else if (divisor < 3){                                                                                          // 1045
					divisor = 1.5;                                                                                                   // 1046
				} else if (divisor < 8){                                                                                          // 1047
					divisor = 2.5;                                                                                                   // 1048
				} else {                                                                                                          // 1049
					divisor = 4;                                                                                                     // 1050
				}                                                                                                                 // 1051
                                                                                                                      // 1052
				this.switches.timeout = setTimeout($.proxy(function() {this.iterator(type);} ,this),this.switches.speed/divisor); // 1053
				this.switches.count++;                                                                                            // 1054
			}                                                                                                                  // 1055
		},                                                                                                                  // 1056
                                                                                                                      // 1057
		iterator: function (type) {                                                                                         // 1058
			this.step(type);                                                                                                   // 1059
			this.startSpin(type);                                                                                              // 1060
		},                                                                                                                  // 1061
                                                                                                                      // 1062
		step: function (dir) {                                                                                              // 1063
			var curValue = this.options.value;                                                                                 // 1064
			var limValue = dir ? this.options.max : this.options.min;                                                          // 1065
                                                                                                                      // 1066
			if ((dir ? curValue < limValue : curValue > limValue)) {                                                           // 1067
				var newVal = curValue + (dir ? 1 : -1) * this.options.step;                                                       // 1068
                                                                                                                      // 1069
				if (dir ? newVal > limValue : newVal < limValue) {                                                                // 1070
					this.value(limValue);                                                                                            // 1071
				} else {                                                                                                          // 1072
					this.value(newVal);                                                                                              // 1073
				}                                                                                                                 // 1074
			}                                                                                                                  // 1075
		},                                                                                                                  // 1076
                                                                                                                      // 1077
		value: function (value) {                                                                                           // 1078
			if (!isNaN(parseFloat(value)) && isFinite(value)) {                                                                // 1079
				value = parseFloat(value);                                                                                        // 1080
				this.options.value = value;                                                                                       // 1081
				this.$input.val(value);                                                                                           // 1082
				return this;                                                                                                      // 1083
			} else {                                                                                                           // 1084
				return this.options.value;                                                                                        // 1085
			}                                                                                                                  // 1086
		},                                                                                                                  // 1087
                                                                                                                      // 1088
		disable: function () {                                                                                              // 1089
			this.options.disabled = true;                                                                                      // 1090
			this.$input.attr('disabled','');                                                                                   // 1091
			this.$element.find('button').addClass('disabled');                                                                 // 1092
		},                                                                                                                  // 1093
                                                                                                                      // 1094
		enable: function () {                                                                                               // 1095
			this.options.disabled = false;                                                                                     // 1096
			this.$input.removeAttr("disabled");                                                                                // 1097
			this.$element.find('button').removeClass('disabled');                                                              // 1098
		}                                                                                                                   // 1099
	};                                                                                                                   // 1100
                                                                                                                      // 1101
                                                                                                                      // 1102
	// SPINNER PLUGIN DEFINITION                                                                                         // 1103
                                                                                                                      // 1104
	$.fn.spinner = function (option,value) {                                                                             // 1105
		var methodReturn;                                                                                                   // 1106
                                                                                                                      // 1107
		var $set = this.each(function () {                                                                                  // 1108
			var $this = $(this);                                                                                               // 1109
			var data = $this.data('spinner');                                                                                  // 1110
			var options = typeof option === 'object' && option;                                                                // 1111
                                                                                                                      // 1112
			if (!data) $this.data('spinner', (data = new Spinner(this, options)));                                             // 1113
			if (typeof option === 'string') methodReturn = data[option](value);                                                // 1114
		});                                                                                                                 // 1115
                                                                                                                      // 1116
		return (methodReturn === undefined) ? $set : methodReturn;                                                          // 1117
	};                                                                                                                   // 1118
                                                                                                                      // 1119
	$.fn.spinner.defaults = {                                                                                            // 1120
		value: 1,                                                                                                           // 1121
		min: 1,                                                                                                             // 1122
		max: 999,                                                                                                           // 1123
		step: 1,                                                                                                            // 1124
		hold: true,                                                                                                         // 1125
		speed: 'medium',                                                                                                    // 1126
		disabled: false                                                                                                     // 1127
	};                                                                                                                   // 1128
                                                                                                                      // 1129
	$.fn.spinner.Constructor = Spinner;                                                                                  // 1130
                                                                                                                      // 1131
                                                                                                                      // 1132
	// SPINNER DATA-API                                                                                                  // 1133
                                                                                                                      // 1134
	$(function () {                                                                                                      // 1135
		$('body').on('mousedown.spinner.data-api', '.spinner', function (e) {                                               // 1136
			var $this = $(this);                                                                                               // 1137
			if ($this.data('spinner')) return;                                                                                 // 1138
			$this.spinner($this.data());                                                                                       // 1139
		});                                                                                                                 // 1140
	});                                                                                                                  // 1141
                                                                                                                      // 1142
}(window.jQuery);                                                                                                     // 1143
                                                                                                                      // 1144
/*                                                                                                                    // 1145
 * Fuel UX Select                                                                                                     // 1146
 * https://github.com/ExactTarget/fuelux                                                                              // 1147
 *                                                                                                                    // 1148
 * Copyright (c) 2012 ExactTarget                                                                                     // 1149
 * Licensed under the MIT license.                                                                                    // 1150
 */                                                                                                                   // 1151
                                                                                                                      // 1152
+function ($) { "use strict";                                                                                         // 1153
                                                                                                                      // 1154
    // SELECT CONSTRUCTOR AND PROTOTYPE                                                                               // 1155
                                                                                                                      // 1156
    var Select = function (element, options) {                                                                        // 1157
        this.$element = $(element);                                                                                   // 1158
        this.options = $.extend({}, $.fn.select.defaults, options);                                                   // 1159
        this.$element.on('click', 'a', $.proxy(this.itemclicked, this));                                              // 1160
        this.$button = this.$element.find('.btn');                                                                    // 1161
        this.$label = this.$element.find('.dropdown-label');                                                          // 1162
        this.setDefaultSelection();                                                                                   // 1163
                                                                                                                      // 1164
        if (options.resize === 'auto') {                                                                              // 1165
            this.resize();                                                                                            // 1166
        }                                                                                                             // 1167
    };                                                                                                                // 1168
                                                                                                                      // 1169
    Select.prototype = {                                                                                              // 1170
                                                                                                                      // 1171
        constructor: Select,                                                                                          // 1172
                                                                                                                      // 1173
        itemclicked: function (e) {                                                                                   // 1174
            this.$selectedItem = $(e.target).parent();                                                                // 1175
            this.$label.text(this.$selectedItem.text());                                                              // 1176
                                                                                                                      // 1177
            // pass object including text and any data-attributes                                                     // 1178
            // to onchange event                                                                                      // 1179
            var data = this.selectedItem();                                                                           // 1180
                                                                                                                      // 1181
            // trigger changed event                                                                                  // 1182
            this.$element.trigger('changed', data);                                                                   // 1183
                                                                                                                      // 1184
            e.preventDefault();                                                                                       // 1185
        },                                                                                                            // 1186
                                                                                                                      // 1187
        resize: function() {                                                                                          // 1188
            var el = $('#selectTextSize')[0];                                                                         // 1189
                                                                                                                      // 1190
            // create element if it doesn't exist                                                                     // 1191
            // used to calculate the length of the longest string                                                     // 1192
            if(!el) {                                                                                                 // 1193
                $('<div/>').attr({id:'selectTextSize'}).appendTo('body');                                             // 1194
            }                                                                                                         // 1195
                                                                                                                      // 1196
            var width = 0;                                                                                            // 1197
            var newWidth = 0;                                                                                         // 1198
                                                                                                                      // 1199
            // iterate through each item to find longest string                                                       // 1200
            this.$element.find('a').each(function () {                                                                // 1201
                var $this = $(this);                                                                                  // 1202
                var txt = $this.text();                                                                               // 1203
                var $txtSize = $('#selectTextSize');                                                                  // 1204
                $txtSize.text(txt);                                                                                   // 1205
                newWidth = $txtSize.outerWidth();                                                                     // 1206
                if(newWidth > width) {                                                                                // 1207
                    width = newWidth;                                                                                 // 1208
                }                                                                                                     // 1209
            });                                                                                                       // 1210
                                                                                                                      // 1211
            this.$label.width(width);                                                                                 // 1212
        },                                                                                                            // 1213
                                                                                                                      // 1214
        selectedItem: function() {                                                                                    // 1215
            var txt = this.$selectedItem.text();                                                                      // 1216
            return $.extend({ text: txt }, this.$selectedItem.data());                                                // 1217
        },                                                                                                            // 1218
                                                                                                                      // 1219
        selectByText: function(text) {                                                                                // 1220
            var selector = 'li a:fuelTextExactCI(' + text + ')';                                                      // 1221
            this.selectBySelector(selector);                                                                          // 1222
        },                                                                                                            // 1223
                                                                                                                      // 1224
        selectByValue: function(value) {                                                                              // 1225
            var selector = 'li[data-value="' + value + '"]';                                                          // 1226
            this.selectBySelector(selector);                                                                          // 1227
        },                                                                                                            // 1228
                                                                                                                      // 1229
        selectByIndex: function(index) {                                                                              // 1230
            // zero-based index                                                                                       // 1231
            var selector = 'li:eq(' + index + ')';                                                                    // 1232
            this.selectBySelector(selector);                                                                          // 1233
        },                                                                                                            // 1234
                                                                                                                      // 1235
        selectBySelector: function(selector) {                                                                        // 1236
            var item = this.$element.find(selector);                                                                  // 1237
                                                                                                                      // 1238
            this.$selectedItem = item;                                                                                // 1239
            this.$label.text(this.$selectedItem.text());                                                              // 1240
        },                                                                                                            // 1241
                                                                                                                      // 1242
        setDefaultSelection: function() {                                                                             // 1243
            var selector = 'li[data-selected=true]:first';                                                            // 1244
            var item = this.$element.find(selector);                                                                  // 1245
            if(item.length === 0) {                                                                                   // 1246
                // select first item                                                                                  // 1247
                this.selectByIndex(0);                                                                                // 1248
            }                                                                                                         // 1249
            else {                                                                                                    // 1250
                // select by data-attribute                                                                           // 1251
                this.selectBySelector(selector);                                                                      // 1252
                item.removeData('selected');                                                                          // 1253
                item.removeAttr('data-selected');                                                                     // 1254
            }                                                                                                         // 1255
        },                                                                                                            // 1256
                                                                                                                      // 1257
        enable: function() {                                                                                          // 1258
            this.$button.removeClass('disabled');                                                                     // 1259
        },                                                                                                            // 1260
                                                                                                                      // 1261
        disable: function() {                                                                                         // 1262
            this.$button.addClass('disabled');                                                                        // 1263
        }                                                                                                             // 1264
                                                                                                                      // 1265
    };                                                                                                                // 1266
                                                                                                                      // 1267
                                                                                                                      // 1268
    // SELECT PLUGIN DEFINITION                                                                                       // 1269
                                                                                                                      // 1270
    $.fn.select = function (option,value) {                                                                           // 1271
        var methodReturn;                                                                                             // 1272
                                                                                                                      // 1273
        var $set = this.each(function () {                                                                            // 1274
            var $this = $(this);                                                                                      // 1275
            var data = $this.data('select');                                                                          // 1276
            var options = typeof option === 'object' && option;                                                       // 1277
                                                                                                                      // 1278
            if (!data) $this.data('select', (data = new Select(this, options)));                                      // 1279
            if (typeof option === 'string') methodReturn = data[option](value);                                       // 1280
        });                                                                                                           // 1281
                                                                                                                      // 1282
        return (methodReturn === undefined) ? $set : methodReturn;                                                    // 1283
    };                                                                                                                // 1284
                                                                                                                      // 1285
    $.fn.select.defaults = {};                                                                                        // 1286
                                                                                                                      // 1287
    $.fn.select.Constructor = Select;                                                                                 // 1288
                                                                                                                      // 1289
                                                                                                                      // 1290
    // SELECT DATA-API                                                                                                // 1291
                                                                                                                      // 1292
    $(function () {                                                                                                   // 1293
                                                                                                                      // 1294
        $(window).on('load', function () {                                                                            // 1295
            $('.select').each(function () {                                                                           // 1296
                var $this = $(this);                                                                                  // 1297
                if ($this.data('select')) return;                                                                     // 1298
                $this.select($this.data());                                                                           // 1299
            });                                                                                                       // 1300
        });                                                                                                           // 1301
                                                                                                                      // 1302
        $('body').on('mousedown.select.data-api', '.select', function (e) {                                           // 1303
            var $this = $(this);                                                                                      // 1304
            if ($this.data('select')) return;                                                                         // 1305
            $this.select($this.data());                                                                               // 1306
        });                                                                                                           // 1307
    });                                                                                                               // 1308
                                                                                                                      // 1309
}(window.jQuery);                                                                                                     // 1310
                                                                                                                      // 1311
/*                                                                                                                    // 1312
 * Fuel UX Tree                                                                                                       // 1313
 * https://github.com/ExactTarget/fuelux                                                                              // 1314
 *                                                                                                                    // 1315
 * Copyright (c) 2012 ExactTarget                                                                                     // 1316
 * Licensed under the MIT license.                                                                                    // 1317
 */                                                                                                                   // 1318
                                                                                                                      // 1319
+function ($) { "use strict";                                                                                         // 1320
                                                                                                                      // 1321
	// TREE CONSTRUCTOR AND PROTOTYPE                                                                                    // 1322
                                                                                                                      // 1323
	var Tree = function (element, options) {                                                                             // 1324
		this.$element = $(element);                                                                                         // 1325
		this.options = $.extend({}, $.fn.tree.defaults, options);                                                           // 1326
                                                                                                                      // 1327
		this.$element.on('click', '.tree-item', $.proxy( function(ev) { this.selectItem(ev.currentTarget); } ,this));       // 1328
		this.$element.on('click', '.tree-folder-header', $.proxy( function(ev) { this.selectFolder(ev.currentTarget); }, this));
                                                                                                                      // 1330
		this.render();                                                                                                      // 1331
	};                                                                                                                   // 1332
                                                                                                                      // 1333
	Tree.prototype = {                                                                                                   // 1334
		constructor: Tree,                                                                                                  // 1335
                                                                                                                      // 1336
		render: function () {                                                                                               // 1337
			this.populate(this.$element);                                                                                      // 1338
		},                                                                                                                  // 1339
                                                                                                                      // 1340
		populate: function ($el) {                                                                                          // 1341
			var self = this;                                                                                                   // 1342
			var loader = $el.parent().find('.tree-loader:eq(0)');                                                              // 1343
                                                                                                                      // 1344
			loader.show();                                                                                                     // 1345
			this.options.dataSource.data($el.data(), function (items) {                                                        // 1346
				loader.hide();                                                                                                    // 1347
                                                                                                                      // 1348
				$.each( items.data, function(index, value) {                                                                      // 1349
					var $entity;                                                                                                     // 1350
                                                                                                                      // 1351
					if(value.type === "folder") {                                                                                    // 1352
						$entity = self.$element.find('.tree-folder:eq(0)').clone().show();                                              // 1353
						$entity.find('.tree-folder-name').html(value.name);                                                             // 1354
						$entity.find('.tree-loader').html(self.options.loadingHTML);                                                    // 1355
						$entity.find('.tree-folder-header').data(value);                                                                // 1356
					} else if (value.type === "item") {                                                                              // 1357
						$entity = self.$element.find('.tree-item:eq(0)').clone().show();                                                // 1358
						$entity.find('.tree-item-name').html(value.name);                                                               // 1359
						$entity.data(value);                                                                                            // 1360
					}                                                                                                                // 1361
                                                                                                                      // 1362
					if($el.hasClass('tree-folder-header')) {                                                                         // 1363
						$el.parent().find('.tree-folder-content:eq(0)').append($entity);                                                // 1364
					} else {                                                                                                         // 1365
						$el.append($entity);                                                                                            // 1366
					}                                                                                                                // 1367
				});                                                                                                               // 1368
                                                                                                                      // 1369
				self.$element.trigger('loaded');                                                                                  // 1370
			});                                                                                                                // 1371
		},                                                                                                                  // 1372
                                                                                                                      // 1373
		selectItem: function (el) {                                                                                         // 1374
			var $el = $(el);                                                                                                   // 1375
			var $all = this.$element.find('.tree-selected');                                                                   // 1376
			var data = [];                                                                                                     // 1377
                                                                                                                      // 1378
			if (this.options.multiSelect) {                                                                                    // 1379
				$.each($all, function(index, value) {                                                                             // 1380
					var $val = $(value);                                                                                             // 1381
					if($val[0] !== $el[0]) {                                                                                         // 1382
						data.push( $(value).data() );                                                                                   // 1383
					}                                                                                                                // 1384
				});                                                                                                               // 1385
			} else if ($all[0] !== $el[0]) {                                                                                   // 1386
				$all.removeClass('tree-selected')                                                                                 // 1387
					.find('i').removeClass('icon-ok').addClass('tree-dot');                                                          // 1388
				data.push($el.data());                                                                                            // 1389
			}                                                                                                                  // 1390
                                                                                                                      // 1391
			if($el.hasClass('tree-selected')) {                                                                                // 1392
				$el.removeClass('tree-selected');                                                                                 // 1393
				$el.find('i').removeClass('icon-ok').addClass('tree-dot');                                                        // 1394
			} else {                                                                                                           // 1395
				$el.addClass ('tree-selected');                                                                                   // 1396
				$el.find('i').removeClass('tree-dot').addClass('icon-ok');                                                        // 1397
				if (this.options.multiSelect) {                                                                                   // 1398
					data.push( $el.data() );                                                                                         // 1399
				}                                                                                                                 // 1400
			}                                                                                                                  // 1401
                                                                                                                      // 1402
			if(data.length) {                                                                                                  // 1403
				this.$element.trigger('selected', {info: data});                                                                  // 1404
			}                                                                                                                  // 1405
                                                                                                                      // 1406
		},                                                                                                                  // 1407
                                                                                                                      // 1408
		selectFolder: function (el) {                                                                                       // 1409
			var $el = $(el);                                                                                                   // 1410
			var $par = $el.parent();                                                                                           // 1411
                                                                                                                      // 1412
			if($el.find('.icon-folder-close').length) {                                                                        // 1413
				if ($par.find('.tree-folder-content').children().length) {                                                        // 1414
					$par.find('.tree-folder-content:eq(0)').show();                                                                  // 1415
				} else {                                                                                                          // 1416
					this.populate( $el );                                                                                            // 1417
				}                                                                                                                 // 1418
                                                                                                                      // 1419
				$par.find('.icon-folder-close:eq(0)')                                                                             // 1420
					.removeClass('icon-folder-close')                                                                                // 1421
					.addClass('icon-folder-open');                                                                                   // 1422
                                                                                                                      // 1423
				this.$element.trigger('opened', $el.data());                                                                      // 1424
			} else {                                                                                                           // 1425
				if(this.options.cacheItems) {                                                                                     // 1426
					$par.find('.tree-folder-content:eq(0)').hide();                                                                  // 1427
				} else {                                                                                                          // 1428
					$par.find('.tree-folder-content:eq(0)').empty();                                                                 // 1429
				}                                                                                                                 // 1430
                                                                                                                      // 1431
				$par.find('.icon-folder-open:eq(0)')                                                                              // 1432
					.removeClass('icon-folder-open')                                                                                 // 1433
					.addClass('icon-folder-close');                                                                                  // 1434
                                                                                                                      // 1435
				this.$element.trigger('closed', $el.data());                                                                      // 1436
			}                                                                                                                  // 1437
		},                                                                                                                  // 1438
                                                                                                                      // 1439
		selectedItems: function () {                                                                                        // 1440
			var $sel = this.$element.find('.tree-selected');                                                                   // 1441
			var data = [];                                                                                                     // 1442
                                                                                                                      // 1443
			$.each($sel, function (index, value) {                                                                             // 1444
				data.push($(value).data());                                                                                       // 1445
			});                                                                                                                // 1446
			return data;                                                                                                       // 1447
		}                                                                                                                   // 1448
	};                                                                                                                   // 1449
                                                                                                                      // 1450
                                                                                                                      // 1451
	// TREE PLUGIN DEFINITION                                                                                            // 1452
                                                                                                                      // 1453
	$.fn.tree = function (option, value) {                                                                               // 1454
		var methodReturn;                                                                                                   // 1455
                                                                                                                      // 1456
		var $set = this.each(function () {                                                                                  // 1457
			var $this = $(this);                                                                                               // 1458
			var data = $this.data('tree');                                                                                     // 1459
			var options = typeof option === 'object' && option;                                                                // 1460
                                                                                                                      // 1461
			if (!data) $this.data('tree', (data = new Tree(this, options)));                                                   // 1462
			if (typeof option === 'string') methodReturn = data[option](value);                                                // 1463
		});                                                                                                                 // 1464
                                                                                                                      // 1465
		return (methodReturn === undefined) ? $set : methodReturn;                                                          // 1466
	};                                                                                                                   // 1467
                                                                                                                      // 1468
	$.fn.tree.defaults = {                                                                                               // 1469
		multiSelect: false,                                                                                                 // 1470
		loadingHTML: '<div>Loading...</div>',                                                                               // 1471
		cacheItems: true                                                                                                    // 1472
	};                                                                                                                   // 1473
                                                                                                                      // 1474
	$.fn.tree.Constructor = Tree;                                                                                        // 1475
                                                                                                                      // 1476
}(window.jQuery);                                                                                                     // 1477
                                                                                                                      // 1478
/*                                                                                                                    // 1479
 * Fuel UX Wizard                                                                                                     // 1480
 * https://github.com/ExactTarget/fuelux                                                                              // 1481
 *                                                                                                                    // 1482
 * Copyright (c) 2012 ExactTarget                                                                                     // 1483
 * Licensed under the MIT license.                                                                                    // 1484
 */                                                                                                                   // 1485
                                                                                                                      // 1486
+function ($) { "use strict";                                                                                         // 1487
                                                                                                                      // 1488
	// WIZARD CONSTRUCTOR AND PROTOTYPE                                                                                  // 1489
                                                                                                                      // 1490
	var Wizard = function (element, options) {                                                                           // 1491
		var kids;                                                                                                           // 1492
                                                                                                                      // 1493
		this.$element = $(element);                                                                                         // 1494
		this.options = $.extend({}, $.fn.wizard.defaults, options);                                                         // 1495
		this.currentStep = 1;                                                                                               // 1496
		this.numSteps = this.$element.find('li').length;                                                                    // 1497
		this.$prevBtn = this.$element.find('button.btn-prev');                                                              // 1498
		this.$nextBtn = this.$element.find('button.btn-next');                                                              // 1499
                                                                                                                      // 1500
		kids = this.$nextBtn.children().detach();                                                                           // 1501
		this.nextText = $.trim(this.$nextBtn.text());                                                                       // 1502
		this.$nextBtn.append(kids);                                                                                         // 1503
                                                                                                                      // 1504
		// handle events                                                                                                    // 1505
		this.$prevBtn.on('click', $.proxy(this.previous, this));                                                            // 1506
		this.$nextBtn.on('click', $.proxy(this.next, this));                                                                // 1507
		this.$element.on('click', 'li.complete', $.proxy(this.stepclicked, this));                                          // 1508
	};                                                                                                                   // 1509
                                                                                                                      // 1510
	Wizard.prototype = {                                                                                                 // 1511
                                                                                                                      // 1512
		constructor: Wizard,                                                                                                // 1513
                                                                                                                      // 1514
		setState: function () {                                                                                             // 1515
			var canMovePrev = (this.currentStep > 1);                                                                          // 1516
			var firstStep = (this.currentStep === 1);                                                                          // 1517
			var lastStep = (this.currentStep === this.numSteps);                                                               // 1518
                                                                                                                      // 1519
			// disable buttons based on current step                                                                           // 1520
			this.$prevBtn.attr('disabled', (firstStep === true || canMovePrev === false));                                     // 1521
                                                                                                                      // 1522
			// change button text of last step, if specified                                                                   // 1523
			var data = this.$nextBtn.data();                                                                                   // 1524
			if (data && data.last) {                                                                                           // 1525
				this.lastText = data.last;                                                                                        // 1526
				if (typeof this.lastText !== 'undefined') {                                                                       // 1527
					// replace text                                                                                                  // 1528
					var text = (lastStep !== true) ? this.nextText : this.lastText;                                                  // 1529
					var kids = this.$nextBtn.children().detach();                                                                    // 1530
					this.$nextBtn.text(text).append(kids);                                                                           // 1531
				}                                                                                                                 // 1532
			}                                                                                                                  // 1533
                                                                                                                      // 1534
			// reset classes for all steps                                                                                     // 1535
			var $steps = this.$element.find('li');                                                                             // 1536
			$steps.removeClass('active').removeClass('complete');                                                              // 1537
			$steps.find('span.badge').removeClass('badge-info').removeClass('badge-success');                                  // 1538
                                                                                                                      // 1539
			// set class for all previous steps                                                                                // 1540
			var prevSelector = 'li:lt(' + (this.currentStep - 1) + ')';                                                        // 1541
			var $prevSteps = this.$element.find(prevSelector);                                                                 // 1542
			$prevSteps.addClass('complete');                                                                                   // 1543
			$prevSteps.find('span.badge').addClass('badge-success');                                                           // 1544
                                                                                                                      // 1545
			// set class for current step                                                                                      // 1546
			var currentSelector = 'li:eq(' + (this.currentStep - 1) + ')';                                                     // 1547
			var $currentStep = this.$element.find(currentSelector);                                                            // 1548
			$currentStep.addClass('active');                                                                                   // 1549
			$currentStep.find('span.badge').addClass('badge-info');                                                            // 1550
                                                                                                                      // 1551
			// set display of target element                                                                                   // 1552
			var target = $currentStep.data().target;                                                                           // 1553
			// Dillon changed for support multi wizard                                                                         // 1554
			$('.step-pane', $(target).parent()).removeClass('active');                                                         // 1555
			$(target).addClass('active');                                                                                      // 1556
                                                                                                                      // 1557
			this.$element.trigger('changed');                                                                                  // 1558
		},                                                                                                                  // 1559
                                                                                                                      // 1560
		stepclicked: function (e) {                                                                                         // 1561
			var li = $(e.currentTarget);                                                                                       // 1562
                                                                                                                      // 1563
			// Dillon changed for support multi wizard                                                                         // 1564
			var index = li.parent().find('li').index(li);                                                                      // 1565
                                                                                                                      // 1566
			var evt = $.Event('stepclick');                                                                                    // 1567
			this.$element.trigger(evt, {step: index + 1});                                                                     // 1568
			if (evt.isDefaultPrevented()) return;                                                                              // 1569
                                                                                                                      // 1570
			this.currentStep = (index + 1);                                                                                    // 1571
			this.setState();                                                                                                   // 1572
		},                                                                                                                  // 1573
                                                                                                                      // 1574
		previous: function () {                                                                                             // 1575
			var canMovePrev = (this.currentStep > 1);                                                                          // 1576
			if (canMovePrev) {                                                                                                 // 1577
				var e = $.Event('change');                                                                                        // 1578
				this.$element.trigger(e, {step: this.currentStep, direction: 'previous'});                                        // 1579
				if (e.isDefaultPrevented()) return;                                                                               // 1580
                                                                                                                      // 1581
				this.currentStep -= 1;                                                                                            // 1582
				this.setState();                                                                                                  // 1583
			}                                                                                                                  // 1584
		},                                                                                                                  // 1585
                                                                                                                      // 1586
		next: function () {                                                                                                 // 1587
			var canMoveNext = (this.currentStep + 1 <= this.numSteps);                                                         // 1588
			var lastStep = (this.currentStep === this.numSteps);                                                               // 1589
                                                                                                                      // 1590
			if (canMoveNext) {                                                                                                 // 1591
				var e = $.Event('change');                                                                                        // 1592
				this.$element.trigger(e, {step: this.currentStep, direction: 'next'});                                            // 1593
                                                                                                                      // 1594
				if (e.isDefaultPrevented()) return;                                                                               // 1595
                                                                                                                      // 1596
				this.currentStep += 1;                                                                                            // 1597
				this.setState();                                                                                                  // 1598
			}                                                                                                                  // 1599
			else if (lastStep) {                                                                                               // 1600
				this.$element.trigger('finished');                                                                                // 1601
			}                                                                                                                  // 1602
		},                                                                                                                  // 1603
                                                                                                                      // 1604
		selectedItem: function (val) {                                                                                      // 1605
			return {                                                                                                           // 1606
				step: this.currentStep                                                                                            // 1607
			};                                                                                                                 // 1608
		}                                                                                                                   // 1609
	};                                                                                                                   // 1610
                                                                                                                      // 1611
                                                                                                                      // 1612
	// WIZARD PLUGIN DEFINITION                                                                                          // 1613
                                                                                                                      // 1614
	$.fn.wizard = function (option, value) {                                                                             // 1615
		var methodReturn;                                                                                                   // 1616
                                                                                                                      // 1617
		var $set = this.each(function () {                                                                                  // 1618
			var $this = $(this);                                                                                               // 1619
			var data = $this.data('wizard');                                                                                   // 1620
			var options = typeof option === 'object' && option;                                                                // 1621
                                                                                                                      // 1622
			if (!data) $this.data('wizard', (data = new Wizard(this, options)));                                               // 1623
			if (typeof option === 'string') methodReturn = data[option](value);                                                // 1624
		});                                                                                                                 // 1625
                                                                                                                      // 1626
		return (methodReturn === undefined) ? $set : methodReturn;                                                          // 1627
	};                                                                                                                   // 1628
                                                                                                                      // 1629
	$.fn.wizard.defaults = {};                                                                                           // 1630
                                                                                                                      // 1631
	$.fn.wizard.Constructor = Wizard;                                                                                    // 1632
                                                                                                                      // 1633
                                                                                                                      // 1634
	// WIZARD DATA-API                                                                                                   // 1635
                                                                                                                      // 1636
	$(function () {                                                                                                      // 1637
		$('body').on('mousedown.wizard.data-api', '.wizard', function () {                                                  // 1638
			var $this = $(this);                                                                                               // 1639
			if ($this.data('wizard')) return;                                                                                  // 1640
			$this.wizard($this.data());                                                                                        // 1641
		});                                                                                                                 // 1642
	});                                                                                                                  // 1643
                                                                                                                      // 1644
}(window.jQuery);                                                                                                     // 1645
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/andrasph:bootstrap-notebook-theme/notebook-theme/js/select2/select2.min.js                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*                                                                                                                    // 1
Copyright 2012 Igor Vaynberg                                                                                          // 2
                                                                                                                      // 3
Version: 3.4.2 Timestamp: Mon Aug 12 15:04:12 PDT 2013                                                                // 4
                                                                                                                      // 5
This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU                     // 6
General Public License version 2 (the "GPL License"). You may choose either license to govern your                    // 7
use of this software only upon the condition that you accept all of the terms of either the Apache                    // 8
License or the GPL License.                                                                                           // 9
                                                                                                                      // 10
You may obtain a copy of the Apache License and the GPL License at:                                                   // 11
                                                                                                                      // 12
http://www.apache.org/licenses/LICENSE-2.0                                                                            // 13
http://www.gnu.org/licenses/gpl-2.0.html                                                                              // 14
                                                                                                                      // 15
Unless required by applicable law or agreed to in writing, software distributed under the Apache License              // 16
or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,                 // 17
either express or implied. See the Apache License and the GPL License for the specific language governing             // 18
permissions and limitations under the Apache License and the GPL License.                                             // 19
*/                                                                                                                    // 20
!function(a){"undefined"==typeof a.fn.each2&&a.extend(a.fn,{each2:function(b){for(var c=a([0]),d=-1,e=this.length;++d<e&&(c.context=c[0]=this[d])&&b.call(c[0],d,c)!==!1;);return this}})}(jQuery),function(a,b){"use strict";function n(a){var b,c,d,e;if(!a||a.length<1)return a;for(b="",c=0,d=a.length;d>c;c++)e=a.charAt(c),b+=m[e]||e;return b}function o(a,b){for(var c=0,d=b.length;d>c;c+=1)if(q(a,b[c]))return c;return-1}function p(){var b=a(l);b.appendTo("body");var c={width:b.width()-b[0].clientWidth,height:b.height()-b[0].clientHeight};return b.remove(),c}function q(a,c){return a===c?!0:a===b||c===b?!1:null===a||null===c?!1:a.constructor===String?a+""==c+"":c.constructor===String?c+""==a+"":!1}function r(b,c){var d,e,f;if(null===b||b.length<1)return[];for(d=b.split(c),e=0,f=d.length;f>e;e+=1)d[e]=a.trim(d[e]);return d}function s(a){return a.outerWidth(!1)-a.width()}function t(c){var d="keyup-change-value";c.on("keydown",function(){a.data(c,d)===b&&a.data(c,d,c.val())}),c.on("keyup",function(){var e=a.data(c,d);e!==b&&c.val()!==e&&(a.removeData(c,d),c.trigger("keyup-change"))})}function u(c){c.on("mousemove",function(c){var d=i;(d===b||d.x!==c.pageX||d.y!==c.pageY)&&a(c.target).trigger("mousemove-filtered",c)})}function v(a,c,d){d=d||b;var e;return function(){var b=arguments;window.clearTimeout(e),e=window.setTimeout(function(){c.apply(d,b)},a)}}function w(a){var c,b=!1;return function(){return b===!1&&(c=a(),b=!0),c}}function x(a,b){var c=v(a,function(a){b.trigger("scroll-debounced",a)});b.on("scroll",function(a){o(a.target,b.get())>=0&&c(a)})}function y(a){a[0]!==document.activeElement&&window.setTimeout(function(){var d,b=a[0],c=a.val().length;a.focus(),a.is(":visible")&&b===document.activeElement&&(b.setSelectionRange?b.setSelectionRange(c,c):b.createTextRange&&(d=b.createTextRange(),d.collapse(!1),d.select()))},0)}function z(b){b=a(b)[0];var c=0,d=0;if("selectionStart"in b)c=b.selectionStart,d=b.selectionEnd-c;else if("selection"in document){b.focus();var e=document.selection.createRange();d=document.selection.createRange().text.length,e.moveStart("character",-b.value.length),c=e.text.length-d}return{offset:c,length:d}}function A(a){a.preventDefault(),a.stopPropagation()}function B(a){a.preventDefault(),a.stopImmediatePropagation()}function C(b){if(!h){var c=b[0].currentStyle||window.getComputedStyle(b[0],null);h=a(document.createElement("div")).css({position:"absolute",left:"-10000px",top:"-10000px",display:"none",fontSize:c.fontSize,fontFamily:c.fontFamily,fontStyle:c.fontStyle,fontWeight:c.fontWeight,letterSpacing:c.letterSpacing,textTransform:c.textTransform,whiteSpace:"nowrap"}),h.attr("class","select2-sizer"),a("body").append(h)}return h.text(b.val()),h.width()}function D(b,c,d){var e,g,f=[];e=b.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0===this.indexOf("select2-")&&f.push(this)})),e=c.attr("class"),e&&(e=""+e,a(e.split(" ")).each2(function(){0!==this.indexOf("select2-")&&(g=d(this),g&&f.push(this))})),b.attr("class",f.join(" "))}function E(a,b,c,d){var e=n(a.toUpperCase()).indexOf(n(b.toUpperCase())),f=b.length;return 0>e?(c.push(d(a)),void 0):(c.push(d(a.substring(0,e))),c.push("<span class='select2-match'>"),c.push(d(a.substring(e,e+f))),c.push("</span>"),c.push(d(a.substring(e+f,a.length))),void 0)}function F(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})}function G(c){var d,e=null,f=c.quietMillis||100,g=c.url,h=this;return function(i){window.clearTimeout(d),d=window.setTimeout(function(){var d=c.data,f=g,j=c.transport||a.fn.select2.ajaxDefaults.transport,k={type:c.type||"GET",cache:c.cache||!1,jsonpCallback:c.jsonpCallback||b,dataType:c.dataType||"json"},l=a.extend({},a.fn.select2.ajaxDefaults.params,k);d=d?d.call(h,i.term,i.page,i.context):null,f="function"==typeof f?f.call(h,i.term,i.page,i.context):f,e&&e.abort(),c.params&&(a.isFunction(c.params)?a.extend(l,c.params.call(h)):a.extend(l,c.params)),a.extend(l,{url:f,dataType:c.dataType,data:d,success:function(a){var b=c.results(a,i.page);i.callback(b)}}),e=j.call(h,l)},f)}}function H(b){var d,e,c=b,f=function(a){return""+a.text};a.isArray(c)&&(e=c,c={results:e}),a.isFunction(c)===!1&&(e=c,c=function(){return e});var g=c();return g.text&&(f=g.text,a.isFunction(f)||(d=g.text,f=function(a){return a[d]})),function(b){var g,d=b.term,e={results:[]};return""===d?(b.callback(c()),void 0):(g=function(c,e){var h,i;if(c=c[0],c.children){h={};for(i in c)c.hasOwnProperty(i)&&(h[i]=c[i]);h.children=[],a(c.children).each2(function(a,b){g(b,h.children)}),(h.children.length||b.matcher(d,f(h),c))&&e.push(h)}else b.matcher(d,f(c),c)&&e.push(c)},a(c().results).each2(function(a,b){g(b,e.results)}),b.callback(e),void 0)}}function I(c){var d=a.isFunction(c);return function(e){var f=e.term,g={results:[]};a(d?c():c).each(function(){var a=this.text!==b,c=a?this.text:this;(""===f||e.matcher(f,c))&&g.results.push(a?this:{id:this,text:this})}),e.callback(g)}}function J(b,c){if(a.isFunction(b))return!0;if(!b)return!1;throw new Error(c+" must be a function or a falsy value")}function K(b){return a.isFunction(b)?b():b}function L(b){var c=0;return a.each(b,function(a,b){b.children?c+=L(b.children):c++}),c}function M(a,c,d,e){var h,i,j,k,l,f=a,g=!1;if(!e.createSearchChoice||!e.tokenSeparators||e.tokenSeparators.length<1)return b;for(;;){for(i=-1,j=0,k=e.tokenSeparators.length;k>j&&(l=e.tokenSeparators[j],i=a.indexOf(l),!(i>=0));j++);if(0>i)break;if(h=a.substring(0,i),a=a.substring(i+l.length),h.length>0&&(h=e.createSearchChoice.call(this,h,c),h!==b&&null!==h&&e.id(h)!==b&&null!==e.id(h))){for(g=!1,j=0,k=c.length;k>j;j++)if(q(e.id(h),e.id(c[j]))){g=!0;break}g||d(h)}}return f!==a?a:void 0}function N(b,c){var d=function(){};return d.prototype=new b,d.prototype.constructor=d,d.prototype.parent=b.prototype,d.prototype=a.extend(d.prototype,c),d}if(window.Select2===b){var c,d,e,f,g,h,j,k,i={x:0,y:0},c={TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,SHIFT:16,CTRL:17,ALT:18,PAGE_UP:33,PAGE_DOWN:34,HOME:36,END:35,BACKSPACE:8,DELETE:46,isArrow:function(a){switch(a=a.which?a.which:a){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:return!0}return!1},isControl:function(a){var b=a.which;switch(b){case c.SHIFT:case c.CTRL:case c.ALT:return!0}return a.metaKey?!0:!1},isFunctionKey:function(a){return a=a.which?a.which:a,a>=112&&123>=a}},l="<div class='select2-measure-scrollbar'></div>",m={"\u24b6":"A","\uff21":"A","\xc0":"A","\xc1":"A","\xc2":"A","\u1ea6":"A","\u1ea4":"A","\u1eaa":"A","\u1ea8":"A","\xc3":"A","\u0100":"A","\u0102":"A","\u1eb0":"A","\u1eae":"A","\u1eb4":"A","\u1eb2":"A","\u0226":"A","\u01e0":"A","\xc4":"A","\u01de":"A","\u1ea2":"A","\xc5":"A","\u01fa":"A","\u01cd":"A","\u0200":"A","\u0202":"A","\u1ea0":"A","\u1eac":"A","\u1eb6":"A","\u1e00":"A","\u0104":"A","\u023a":"A","\u2c6f":"A","\ua732":"AA","\xc6":"AE","\u01fc":"AE","\u01e2":"AE","\ua734":"AO","\ua736":"AU","\ua738":"AV","\ua73a":"AV","\ua73c":"AY","\u24b7":"B","\uff22":"B","\u1e02":"B","\u1e04":"B","\u1e06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24b8":"C","\uff23":"C","\u0106":"C","\u0108":"C","\u010a":"C","\u010c":"C","\xc7":"C","\u1e08":"C","\u0187":"C","\u023b":"C","\ua73e":"C","\u24b9":"D","\uff24":"D","\u1e0a":"D","\u010e":"D","\u1e0c":"D","\u1e10":"D","\u1e12":"D","\u1e0e":"D","\u0110":"D","\u018b":"D","\u018a":"D","\u0189":"D","\ua779":"D","\u01f1":"DZ","\u01c4":"DZ","\u01f2":"Dz","\u01c5":"Dz","\u24ba":"E","\uff25":"E","\xc8":"E","\xc9":"E","\xca":"E","\u1ec0":"E","\u1ebe":"E","\u1ec4":"E","\u1ec2":"E","\u1ebc":"E","\u0112":"E","\u1e14":"E","\u1e16":"E","\u0114":"E","\u0116":"E","\xcb":"E","\u1eba":"E","\u011a":"E","\u0204":"E","\u0206":"E","\u1eb8":"E","\u1ec6":"E","\u0228":"E","\u1e1c":"E","\u0118":"E","\u1e18":"E","\u1e1a":"E","\u0190":"E","\u018e":"E","\u24bb":"F","\uff26":"F","\u1e1e":"F","\u0191":"F","\ua77b":"F","\u24bc":"G","\uff27":"G","\u01f4":"G","\u011c":"G","\u1e20":"G","\u011e":"G","\u0120":"G","\u01e6":"G","\u0122":"G","\u01e4":"G","\u0193":"G","\ua7a0":"G","\ua77d":"G","\ua77e":"G","\u24bd":"H","\uff28":"H","\u0124":"H","\u1e22":"H","\u1e26":"H","\u021e":"H","\u1e24":"H","\u1e28":"H","\u1e2a":"H","\u0126":"H","\u2c67":"H","\u2c75":"H","\ua78d":"H","\u24be":"I","\uff29":"I","\xcc":"I","\xcd":"I","\xce":"I","\u0128":"I","\u012a":"I","\u012c":"I","\u0130":"I","\xcf":"I","\u1e2e":"I","\u1ec8":"I","\u01cf":"I","\u0208":"I","\u020a":"I","\u1eca":"I","\u012e":"I","\u1e2c":"I","\u0197":"I","\u24bf":"J","\uff2a":"J","\u0134":"J","\u0248":"J","\u24c0":"K","\uff2b":"K","\u1e30":"K","\u01e8":"K","\u1e32":"K","\u0136":"K","\u1e34":"K","\u0198":"K","\u2c69":"K","\ua740":"K","\ua742":"K","\ua744":"K","\ua7a2":"K","\u24c1":"L","\uff2c":"L","\u013f":"L","\u0139":"L","\u013d":"L","\u1e36":"L","\u1e38":"L","\u013b":"L","\u1e3c":"L","\u1e3a":"L","\u0141":"L","\u023d":"L","\u2c62":"L","\u2c60":"L","\ua748":"L","\ua746":"L","\ua780":"L","\u01c7":"LJ","\u01c8":"Lj","\u24c2":"M","\uff2d":"M","\u1e3e":"M","\u1e40":"M","\u1e42":"M","\u2c6e":"M","\u019c":"M","\u24c3":"N","\uff2e":"N","\u01f8":"N","\u0143":"N","\xd1":"N","\u1e44":"N","\u0147":"N","\u1e46":"N","\u0145":"N","\u1e4a":"N","\u1e48":"N","\u0220":"N","\u019d":"N","\ua790":"N","\ua7a4":"N","\u01ca":"NJ","\u01cb":"Nj","\u24c4":"O","\uff2f":"O","\xd2":"O","\xd3":"O","\xd4":"O","\u1ed2":"O","\u1ed0":"O","\u1ed6":"O","\u1ed4":"O","\xd5":"O","\u1e4c":"O","\u022c":"O","\u1e4e":"O","\u014c":"O","\u1e50":"O","\u1e52":"O","\u014e":"O","\u022e":"O","\u0230":"O","\xd6":"O","\u022a":"O","\u1ece":"O","\u0150":"O","\u01d1":"O","\u020c":"O","\u020e":"O","\u01a0":"O","\u1edc":"O","\u1eda":"O","\u1ee0":"O","\u1ede":"O","\u1ee2":"O","\u1ecc":"O","\u1ed8":"O","\u01ea":"O","\u01ec":"O","\xd8":"O","\u01fe":"O","\u0186":"O","\u019f":"O","\ua74a":"O","\ua74c":"O","\u01a2":"OI","\ua74e":"OO","\u0222":"OU","\u24c5":"P","\uff30":"P","\u1e54":"P","\u1e56":"P","\u01a4":"P","\u2c63":"P","\ua750":"P","\ua752":"P","\ua754":"P","\u24c6":"Q","\uff31":"Q","\ua756":"Q","\ua758":"Q","\u024a":"Q","\u24c7":"R","\uff32":"R","\u0154":"R","\u1e58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1e5a":"R","\u1e5c":"R","\u0156":"R","\u1e5e":"R","\u024c":"R","\u2c64":"R","\ua75a":"R","\ua7a6":"R","\ua782":"R","\u24c8":"S","\uff33":"S","\u1e9e":"S","\u015a":"S","\u1e64":"S","\u015c":"S","\u1e60":"S","\u0160":"S","\u1e66":"S","\u1e62":"S","\u1e68":"S","\u0218":"S","\u015e":"S","\u2c7e":"S","\ua7a8":"S","\ua784":"S","\u24c9":"T","\uff34":"T","\u1e6a":"T","\u0164":"T","\u1e6c":"T","\u021a":"T","\u0162":"T","\u1e70":"T","\u1e6e":"T","\u0166":"T","\u01ac":"T","\u01ae":"T","\u023e":"T","\ua786":"T","\ua728":"TZ","\u24ca":"U","\uff35":"U","\xd9":"U","\xda":"U","\xdb":"U","\u0168":"U","\u1e78":"U","\u016a":"U","\u1e7a":"U","\u016c":"U","\xdc":"U","\u01db":"U","\u01d7":"U","\u01d5":"U","\u01d9":"U","\u1ee6":"U","\u016e":"U","\u0170":"U","\u01d3":"U","\u0214":"U","\u0216":"U","\u01af":"U","\u1eea":"U","\u1ee8":"U","\u1eee":"U","\u1eec":"U","\u1ef0":"U","\u1ee4":"U","\u1e72":"U","\u0172":"U","\u1e76":"U","\u1e74":"U","\u0244":"U","\u24cb":"V","\uff36":"V","\u1e7c":"V","\u1e7e":"V","\u01b2":"V","\ua75e":"V","\u0245":"V","\ua760":"VY","\u24cc":"W","\uff37":"W","\u1e80":"W","\u1e82":"W","\u0174":"W","\u1e86":"W","\u1e84":"W","\u1e88":"W","\u2c72":"W","\u24cd":"X","\uff38":"X","\u1e8a":"X","\u1e8c":"X","\u24ce":"Y","\uff39":"Y","\u1ef2":"Y","\xdd":"Y","\u0176":"Y","\u1ef8":"Y","\u0232":"Y","\u1e8e":"Y","\u0178":"Y","\u1ef6":"Y","\u1ef4":"Y","\u01b3":"Y","\u024e":"Y","\u1efe":"Y","\u24cf":"Z","\uff3a":"Z","\u0179":"Z","\u1e90":"Z","\u017b":"Z","\u017d":"Z","\u1e92":"Z","\u1e94":"Z","\u01b5":"Z","\u0224":"Z","\u2c7f":"Z","\u2c6b":"Z","\ua762":"Z","\u24d0":"a","\uff41":"a","\u1e9a":"a","\xe0":"a","\xe1":"a","\xe2":"a","\u1ea7":"a","\u1ea5":"a","\u1eab":"a","\u1ea9":"a","\xe3":"a","\u0101":"a","\u0103":"a","\u1eb1":"a","\u1eaf":"a","\u1eb5":"a","\u1eb3":"a","\u0227":"a","\u01e1":"a","\xe4":"a","\u01df":"a","\u1ea3":"a","\xe5":"a","\u01fb":"a","\u01ce":"a","\u0201":"a","\u0203":"a","\u1ea1":"a","\u1ead":"a","\u1eb7":"a","\u1e01":"a","\u0105":"a","\u2c65":"a","\u0250":"a","\ua733":"aa","\xe6":"ae","\u01fd":"ae","\u01e3":"ae","\ua735":"ao","\ua737":"au","\ua739":"av","\ua73b":"av","\ua73d":"ay","\u24d1":"b","\uff42":"b","\u1e03":"b","\u1e05":"b","\u1e07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24d2":"c","\uff43":"c","\u0107":"c","\u0109":"c","\u010b":"c","\u010d":"c","\xe7":"c","\u1e09":"c","\u0188":"c","\u023c":"c","\ua73f":"c","\u2184":"c","\u24d3":"d","\uff44":"d","\u1e0b":"d","\u010f":"d","\u1e0d":"d","\u1e11":"d","\u1e13":"d","\u1e0f":"d","\u0111":"d","\u018c":"d","\u0256":"d","\u0257":"d","\ua77a":"d","\u01f3":"dz","\u01c6":"dz","\u24d4":"e","\uff45":"e","\xe8":"e","\xe9":"e","\xea":"e","\u1ec1":"e","\u1ebf":"e","\u1ec5":"e","\u1ec3":"e","\u1ebd":"e","\u0113":"e","\u1e15":"e","\u1e17":"e","\u0115":"e","\u0117":"e","\xeb":"e","\u1ebb":"e","\u011b":"e","\u0205":"e","\u0207":"e","\u1eb9":"e","\u1ec7":"e","\u0229":"e","\u1e1d":"e","\u0119":"e","\u1e19":"e","\u1e1b":"e","\u0247":"e","\u025b":"e","\u01dd":"e","\u24d5":"f","\uff46":"f","\u1e1f":"f","\u0192":"f","\ua77c":"f","\u24d6":"g","\uff47":"g","\u01f5":"g","\u011d":"g","\u1e21":"g","\u011f":"g","\u0121":"g","\u01e7":"g","\u0123":"g","\u01e5":"g","\u0260":"g","\ua7a1":"g","\u1d79":"g","\ua77f":"g","\u24d7":"h","\uff48":"h","\u0125":"h","\u1e23":"h","\u1e27":"h","\u021f":"h","\u1e25":"h","\u1e29":"h","\u1e2b":"h","\u1e96":"h","\u0127":"h","\u2c68":"h","\u2c76":"h","\u0265":"h","\u0195":"hv","\u24d8":"i","\uff49":"i","\xec":"i","\xed":"i","\xee":"i","\u0129":"i","\u012b":"i","\u012d":"i","\xef":"i","\u1e2f":"i","\u1ec9":"i","\u01d0":"i","\u0209":"i","\u020b":"i","\u1ecb":"i","\u012f":"i","\u1e2d":"i","\u0268":"i","\u0131":"i","\u24d9":"j","\uff4a":"j","\u0135":"j","\u01f0":"j","\u0249":"j","\u24da":"k","\uff4b":"k","\u1e31":"k","\u01e9":"k","\u1e33":"k","\u0137":"k","\u1e35":"k","\u0199":"k","\u2c6a":"k","\ua741":"k","\ua743":"k","\ua745":"k","\ua7a3":"k","\u24db":"l","\uff4c":"l","\u0140":"l","\u013a":"l","\u013e":"l","\u1e37":"l","\u1e39":"l","\u013c":"l","\u1e3d":"l","\u1e3b":"l","\u017f":"l","\u0142":"l","\u019a":"l","\u026b":"l","\u2c61":"l","\ua749":"l","\ua781":"l","\ua747":"l","\u01c9":"lj","\u24dc":"m","\uff4d":"m","\u1e3f":"m","\u1e41":"m","\u1e43":"m","\u0271":"m","\u026f":"m","\u24dd":"n","\uff4e":"n","\u01f9":"n","\u0144":"n","\xf1":"n","\u1e45":"n","\u0148":"n","\u1e47":"n","\u0146":"n","\u1e4b":"n","\u1e49":"n","\u019e":"n","\u0272":"n","\u0149":"n","\ua791":"n","\ua7a5":"n","\u01cc":"nj","\u24de":"o","\uff4f":"o","\xf2":"o","\xf3":"o","\xf4":"o","\u1ed3":"o","\u1ed1":"o","\u1ed7":"o","\u1ed5":"o","\xf5":"o","\u1e4d":"o","\u022d":"o","\u1e4f":"o","\u014d":"o","\u1e51":"o","\u1e53":"o","\u014f":"o","\u022f":"o","\u0231":"o","\xf6":"o","\u022b":"o","\u1ecf":"o","\u0151":"o","\u01d2":"o","\u020d":"o","\u020f":"o","\u01a1":"o","\u1edd":"o","\u1edb":"o","\u1ee1":"o","\u1edf":"o","\u1ee3":"o","\u1ecd":"o","\u1ed9":"o","\u01eb":"o","\u01ed":"o","\xf8":"o","\u01ff":"o","\u0254":"o","\ua74b":"o","\ua74d":"o","\u0275":"o","\u01a3":"oi","\u0223":"ou","\ua74f":"oo","\u24df":"p","\uff50":"p","\u1e55":"p","\u1e57":"p","\u01a5":"p","\u1d7d":"p","\ua751":"p","\ua753":"p","\ua755":"p","\u24e0":"q","\uff51":"q","\u024b":"q","\ua757":"q","\ua759":"q","\u24e1":"r","\uff52":"r","\u0155":"r","\u1e59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1e5b":"r","\u1e5d":"r","\u0157":"r","\u1e5f":"r","\u024d":"r","\u027d":"r","\ua75b":"r","\ua7a7":"r","\ua783":"r","\u24e2":"s","\uff53":"s","\xdf":"s","\u015b":"s","\u1e65":"s","\u015d":"s","\u1e61":"s","\u0161":"s","\u1e67":"s","\u1e63":"s","\u1e69":"s","\u0219":"s","\u015f":"s","\u023f":"s","\ua7a9":"s","\ua785":"s","\u1e9b":"s","\u24e3":"t","\uff54":"t","\u1e6b":"t","\u1e97":"t","\u0165":"t","\u1e6d":"t","\u021b":"t","\u0163":"t","\u1e71":"t","\u1e6f":"t","\u0167":"t","\u01ad":"t","\u0288":"t","\u2c66":"t","\ua787":"t","\ua729":"tz","\u24e4":"u","\uff55":"u","\xf9":"u","\xfa":"u","\xfb":"u","\u0169":"u","\u1e79":"u","\u016b":"u","\u1e7b":"u","\u016d":"u","\xfc":"u","\u01dc":"u","\u01d8":"u","\u01d6":"u","\u01da":"u","\u1ee7":"u","\u016f":"u","\u0171":"u","\u01d4":"u","\u0215":"u","\u0217":"u","\u01b0":"u","\u1eeb":"u","\u1ee9":"u","\u1eef":"u","\u1eed":"u","\u1ef1":"u","\u1ee5":"u","\u1e73":"u","\u0173":"u","\u1e77":"u","\u1e75":"u","\u0289":"u","\u24e5":"v","\uff56":"v","\u1e7d":"v","\u1e7f":"v","\u028b":"v","\ua75f":"v","\u028c":"v","\ua761":"vy","\u24e6":"w","\uff57":"w","\u1e81":"w","\u1e83":"w","\u0175":"w","\u1e87":"w","\u1e85":"w","\u1e98":"w","\u1e89":"w","\u2c73":"w","\u24e7":"x","\uff58":"x","\u1e8b":"x","\u1e8d":"x","\u24e8":"y","\uff59":"y","\u1ef3":"y","\xfd":"y","\u0177":"y","\u1ef9":"y","\u0233":"y","\u1e8f":"y","\xff":"y","\u1ef7":"y","\u1e99":"y","\u1ef5":"y","\u01b4":"y","\u024f":"y","\u1eff":"y","\u24e9":"z","\uff5a":"z","\u017a":"z","\u1e91":"z","\u017c":"z","\u017e":"z","\u1e93":"z","\u1e95":"z","\u01b6":"z","\u0225":"z","\u0240":"z","\u2c6c":"z","\ua763":"z"};j=a(document),g=function(){var a=1;return function(){return a++}}(),j.on("mousemove",function(a){i.x=a.pageX,i.y=a.pageY}),d=N(Object,{bind:function(a){var b=this;return function(){a.apply(b,arguments)}},init:function(c){var d,e,h,i,f=".select2-results";this.opts=c=this.prepareOpts(c),this.id=c.id,c.element.data("select2")!==b&&null!==c.element.data("select2")&&c.element.data("select2").destroy(),this.container=this.createContainer(),this.containerId="s2id_"+(c.element.attr("id")||"autogen"+g()),this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,"\\$1"),this.container.attr("id",this.containerId),this.body=w(function(){return c.element.closest("body")}),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.attr("style",c.element.attr("style")),this.container.css(K(c.containerCss)),this.container.addClass(K(c.containerCssClass)),this.elementTabIndex=this.opts.element.attr("tabindex"),this.opts.element.data("select2",this).attr("tabindex","-1").before(this.container),this.container.data("select2",this),this.dropdown=this.container.find(".select2-drop"),this.dropdown.addClass(K(c.dropdownCssClass)),this.dropdown.data("select2",this),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.results=d=this.container.find(f),this.search=e=this.container.find("input.select2-input"),this.queryCount=0,this.resultsPage=0,this.context=null,this.initContainer(),u(this.results),this.dropdown.on("mousemove-filtered touchstart touchmove touchend",f,this.bind(this.highlightUnderEvent)),x(80,this.results),this.dropdown.on("scroll-debounced",f,this.bind(this.loadMoreIfNeeded)),a(this.container).on("change",".select2-input",function(a){a.stopPropagation()}),a(this.dropdown).on("change",".select2-input",function(a){a.stopPropagation()}),a.fn.mousewheel&&d.mousewheel(function(a,b,c,e){var f=d.scrollTop();e>0&&0>=f-e?(d.scrollTop(0),A(a)):0>e&&d.get(0).scrollHeight-d.scrollTop()+e<=d.height()&&(d.scrollTop(d.get(0).scrollHeight-d.height()),A(a))}),t(e),e.on("keyup-change input paste",this.bind(this.updateResults)),e.on("focus",function(){e.addClass("select2-focused")}),e.on("blur",function(){e.removeClass("select2-focused")}),this.dropdown.on("mouseup",f,this.bind(function(b){a(b.target).closest(".select2-result-selectable").length>0&&(this.highlightUnderEvent(b),this.selectHighlighted(b))})),this.dropdown.on("click mouseup mousedown",function(a){a.stopPropagation()}),a.isFunction(this.opts.initSelection)&&(this.initSelection(),this.monitorSource()),null!==c.maximumInputLength&&this.search.attr("maxlength",c.maximumInputLength);var h=c.element.prop("disabled");h===b&&(h=!1),this.enable(!h);var i=c.element.prop("readonly");i===b&&(i=!1),this.readonly(i),k=k||p(),this.autofocus=c.element.prop("autofocus"),c.element.prop("autofocus",!1),this.autofocus&&this.focus(),this.nextSearchTerm=b},destroy:function(){var a=this.opts.element,c=a.data("select2");this.close(),this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),c!==b&&(c.container.remove(),c.dropdown.remove(),a.removeClass("select2-offscreen").removeData("select2").off(".select2").prop("autofocus",this.autofocus||!1),this.elementTabIndex?a.attr({tabindex:this.elementTabIndex}):a.removeAttr("tabindex"),a.show())},optionToData:function(a){return a.is("option")?{id:a.prop("value"),text:a.text(),element:a.get(),css:a.attr("class"),disabled:a.prop("disabled"),locked:q(a.attr("locked"),"locked")||q(a.data("locked"),!0)}:a.is("optgroup")?{text:a.attr("label"),children:[],element:a.get(),css:a.attr("class")}:void 0},prepareOpts:function(c){var d,e,f,g,h=this;if(d=c.element,"select"===d.get(0).tagName.toLowerCase()&&(this.select=e=c.element),e&&a.each(["id","multiple","ajax","query","createSearchChoice","initSelection","data","tags"],function(){if(this in c)throw new Error("Option '"+this+"' is not allowed for Select2 when attached to a <select> element.")}),c=a.extend({},{populateResults:function(d,e,f){var g,l=this.opts.id;g=function(d,e,i){var j,k,m,n,o,p,q,r,s,t;for(d=c.sortResults(d,e,f),j=0,k=d.length;k>j;j+=1)m=d[j],o=m.disabled===!0,n=!o&&l(m)!==b,p=m.children&&m.children.length>0,q=a("<li></li>"),q.addClass("select2-results-dept-"+i),q.addClass("select2-result"),q.addClass(n?"select2-result-selectable":"select2-result-unselectable"),o&&q.addClass("select2-disabled"),p&&q.addClass("select2-result-with-children"),q.addClass(h.opts.formatResultCssClass(m)),r=a(document.createElement("div")),r.addClass("select2-result-label"),t=c.formatResult(m,r,f,h.opts.escapeMarkup),t!==b&&r.html(t),q.append(r),p&&(s=a("<ul></ul>"),s.addClass("select2-result-sub"),g(m.children,s,i+1),q.append(s)),q.data("select2-data",m),e.append(q)},g(e,d,0)}},a.fn.select2.defaults,c),"function"!=typeof c.id&&(f=c.id,c.id=function(a){return a[f]}),a.isArray(c.element.data("select2Tags"))){if("tags"in c)throw"tags specified as both an attribute 'data-select2-tags' and in options of Select2 "+c.element.attr("id");c.tags=c.element.data("select2Tags")}if(e?(c.query=this.bind(function(a){var f,g,i,c={results:[],more:!1},e=a.term;i=function(b,c){var d;b.is("option")?a.matcher(e,b.text(),b)&&c.push(h.optionToData(b)):b.is("optgroup")&&(d=h.optionToData(b),b.children().each2(function(a,b){i(b,d.children)}),d.children.length>0&&c.push(d))},f=d.children(),this.getPlaceholder()!==b&&f.length>0&&(g=this.getPlaceholderOption(),g&&(f=f.not(g))),f.each2(function(a,b){i(b,c.results)}),a.callback(c)}),c.id=function(a){return a.id},c.formatResultCssClass=function(a){return a.css}):"query"in c||("ajax"in c?(g=c.element.data("ajax-url"),g&&g.length>0&&(c.ajax.url=g),c.query=G.call(c.element,c.ajax)):"data"in c?c.query=H(c.data):"tags"in c&&(c.query=I(c.tags),c.createSearchChoice===b&&(c.createSearchChoice=function(b){return{id:a.trim(b),text:a.trim(b)}}),c.initSelection===b&&(c.initSelection=function(b,d){var e=[];a(r(b.val(),c.separator)).each(function(){var b=this,d=this,f=c.tags;a.isFunction(f)&&(f=f()),a(f).each(function(){return q(this.id,b)?(d=this.text,!1):void 0}),e.push({id:b,text:d})}),d(e)}))),"function"!=typeof c.query)throw"query function not defined for Select2 "+c.element.attr("id");return c},monitorSource:function(){var c,a=this.opts.element;a.on("change.select2",this.bind(function(){this.opts.element.data("select2-change-triggered")!==!0&&this.initSelection()})),c=this.bind(function(){var d,f=a.prop("disabled");f===b&&(f=!1),this.enable(!f);var d=a.prop("readonly");d===b&&(d=!1),this.readonly(d),D(this.container,this.opts.element,this.opts.adaptContainerCssClass),this.container.addClass(K(this.opts.containerCssClass)),D(this.dropdown,this.opts.element,this.opts.adaptDropdownCssClass),this.dropdown.addClass(K(this.opts.dropdownCssClass))}),a.on("propertychange.select2 DOMAttrModified.select2",c),this.mutationCallback===b&&(this.mutationCallback=function(a){a.forEach(c)}),"undefined"!=typeof WebKitMutationObserver&&(this.propertyObserver&&(delete this.propertyObserver,this.propertyObserver=null),this.propertyObserver=new WebKitMutationObserver(this.mutationCallback),this.propertyObserver.observe(a.get(0),{attributes:!0,subtree:!1}))},triggerSelect:function(b){var c=a.Event("select2-selecting",{val:this.id(b),object:b});return this.opts.element.trigger(c),!c.isDefaultPrevented()},triggerChange:function(b){b=b||{},b=a.extend({},b,{type:"change",val:this.val()}),this.opts.element.data("select2-change-triggered",!0),this.opts.element.trigger(b),this.opts.element.data("select2-change-triggered",!1),this.opts.element.click(),this.opts.blurOnChange&&this.opts.element.blur()},isInterfaceEnabled:function(){return this.enabledInterface===!0},enableInterface:function(){var a=this._enabled&&!this._readonly,b=!a;return a===this.enabledInterface?!1:(this.container.toggleClass("select2-container-disabled",b),this.close(),this.enabledInterface=a,!0)},enable:function(a){a===b&&(a=!0),this._enabled!==a&&(this._enabled=a,this.opts.element.prop("disabled",!a),this.enableInterface())},disable:function(){this.enable(!1)},readonly:function(a){return a===b&&(a=!1),this._readonly===a?!1:(this._readonly=a,this.opts.element.prop("readonly",a),this.enableInterface(),!0)},opened:function(){return this.container.hasClass("select2-dropdown-open")},positionDropdown:function(){var q,r,s,t,b=this.dropdown,c=this.container.offset(),d=this.container.outerHeight(!1),e=this.container.outerWidth(!1),f=b.outerHeight(!1),g=a(window).scrollLeft()+a(window).width(),h=a(window).scrollTop()+a(window).height(),i=c.top+d,j=c.left,l=h>=i+f,m=c.top-f>=this.body().scrollTop(),n=b.outerWidth(!1),o=g>=j+n,p=b.hasClass("select2-drop-above");this.opts.dropdownAutoWidth?(t=a(".select2-results",b)[0],b.addClass("select2-drop-auto-width"),b.css("width",""),n=b.outerWidth(!1)+(t.scrollHeight===t.clientHeight?0:k.width),n>e?e=n:n=e,o=g>=j+n):this.container.removeClass("select2-drop-auto-width"),"static"!==this.body().css("position")&&(q=this.body().offset(),i-=q.top,j-=q.left),p?(r=!0,!m&&l&&(r=!1)):(r=!1,!l&&m&&(r=!0)),o||(j=c.left+e-n),r?(i=c.top-f,this.container.addClass("select2-drop-above"),b.addClass("select2-drop-above")):(this.container.removeClass("select2-drop-above"),b.removeClass("select2-drop-above")),s=a.extend({top:i,left:j,width:e},K(this.opts.dropdownCss)),b.css(s)},shouldOpen:function(){var b;return this.opened()?!1:this._enabled===!1||this._readonly===!0?!1:(b=a.Event("select2-opening"),this.opts.element.trigger(b),!b.isDefaultPrevented())},clearDropdownAlignmentPreference:function(){this.container.removeClass("select2-drop-above"),this.dropdown.removeClass("select2-drop-above")},open:function(){return this.shouldOpen()?(this.opening(),!0):!1},opening:function(){var f,b=this.containerId,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.addClass("select2-dropdown-open").addClass("select2-container-active"),this.clearDropdownAlignmentPreference(),this.dropdown[0]!==this.body().children().last()[0]&&this.dropdown.detach().appendTo(this.body()),f=a("#select2-drop-mask"),0==f.length&&(f=a(document.createElement("div")),f.attr("id","select2-drop-mask").attr("class","select2-drop-mask"),f.hide(),f.appendTo(this.body()),f.on("mousedown touchstart click",function(b){var d,c=a("#select2-drop");c.length>0&&(d=c.data("select2"),d.opts.selectOnBlur&&d.selectHighlighted({noFocus:!0}),d.close({focus:!1}),b.preventDefault(),b.stopPropagation())})),this.dropdown.prev()[0]!==f[0]&&this.dropdown.before(f),a("#select2-drop").removeAttr("id"),this.dropdown.attr("id","select2-drop"),f.show(),this.positionDropdown(),this.dropdown.show(),this.positionDropdown(),this.dropdown.addClass("select2-drop-active");var h=this;this.container.parents().add(window).each(function(){a(this).on(d+" "+c+" "+e,function(){h.positionDropdown()})})},close:function(){if(this.opened()){var b=this.containerId,c="scroll."+b,d="resize."+b,e="orientationchange."+b;this.container.parents().add(window).each(function(){a(this).off(c).off(d).off(e)}),this.clearDropdownAlignmentPreference(),a("#select2-drop-mask").hide(),this.dropdown.removeAttr("id"),this.dropdown.hide(),this.container.removeClass("select2-dropdown-open"),this.results.empty(),this.clearSearch(),this.search.removeClass("select2-active"),this.opts.element.trigger(a.Event("select2-close"))}},externalSearch:function(a){this.open(),this.search.val(a),this.updateResults(!1)},clearSearch:function(){},getMaximumSelectionSize:function(){return K(this.opts.maximumSelectionSize)},ensureHighlightVisible:function(){var c,d,e,f,g,h,i,b=this.results;if(d=this.highlight(),!(0>d)){if(0==d)return b.scrollTop(0),void 0;c=this.findHighlightableChoices().find(".select2-result-label"),e=a(c[d]),f=e.offset().top+e.outerHeight(!0),d===c.length-1&&(i=b.find("li.select2-more-results"),i.length>0&&(f=i.offset().top+i.outerHeight(!0))),g=b.offset().top+b.outerHeight(!0),f>g&&b.scrollTop(b.scrollTop()+(f-g)),h=e.offset().top-b.offset().top,0>h&&"none"!=e.css("display")&&b.scrollTop(b.scrollTop()+h)}},findHighlightableChoices:function(){return this.results.find(".select2-result-selectable:not(.select2-selected):not(.select2-disabled)")},moveHighlight:function(b){for(var c=this.findHighlightableChoices(),d=this.highlight();d>-1&&d<c.length;){d+=b;var e=a(c[d]);if(e.hasClass("select2-result-selectable")&&!e.hasClass("select2-disabled")&&!e.hasClass("select2-selected")){this.highlight(d);break}}},highlight:function(b){var d,e,c=this.findHighlightableChoices();return 0===arguments.length?o(c.filter(".select2-highlighted")[0],c.get()):(b>=c.length&&(b=c.length-1),0>b&&(b=0),this.removeHighlight(),d=a(c[b]),d.addClass("select2-highlighted"),this.ensureHighlightVisible(),e=d.data("select2-data"),e&&this.opts.element.trigger({type:"select2-highlight",val:this.id(e),choice:e}),void 0)},removeHighlight:function(){this.results.find(".select2-highlighted").removeClass("select2-highlighted")},countSelectableResults:function(){return this.findHighlightableChoices().length},highlightUnderEvent:function(b){var c=a(b.target).closest(".select2-result-selectable");if(c.length>0&&!c.is(".select2-highlighted")){var d=this.findHighlightableChoices();this.highlight(d.index(c))}else 0==c.length&&this.removeHighlight()},loadMoreIfNeeded:function(){var c,a=this.results,b=a.find("li.select2-more-results"),e=this.resultsPage+1,f=this,g=this.search.val(),h=this.context;0!==b.length&&(c=b.offset().top-a.offset().top-a.height(),c<=this.opts.loadMorePadding&&(b.addClass("select2-active"),this.opts.query({element:this.opts.element,term:g,page:e,context:h,matcher:this.opts.matcher,callback:this.bind(function(c){f.opened()&&(f.opts.populateResults.call(this,a,c.results,{term:g,page:e,context:h}),f.postprocessResults(c,!1,!1),c.more===!0?(b.detach().appendTo(a).text(f.opts.formatLoadMore(e+1)),window.setTimeout(function(){f.loadMoreIfNeeded()},10)):b.remove(),f.positionDropdown(),f.resultsPage=e,f.context=c.context,this.opts.element.trigger({type:"select2-loaded",items:c}))})})))},tokenize:function(){},updateResults:function(c){function m(){d.removeClass("select2-active"),h.positionDropdown()}function n(a){e.html(a),m()}var g,i,l,d=this.search,e=this.results,f=this.opts,h=this,j=d.val(),k=a.data(this.container,"select2-last-term");if((c===!0||!k||!q(j,k))&&(a.data(this.container,"select2-last-term",j),c===!0||this.showSearchInput!==!1&&this.opened())){l=++this.queryCount;var o=this.getMaximumSelectionSize();if(o>=1&&(g=this.data(),a.isArray(g)&&g.length>=o&&J(f.formatSelectionTooBig,"formatSelectionTooBig")))return n("<li class='select2-selection-limit'>"+f.formatSelectionTooBig(o)+"</li>"),void 0;if(d.val().length<f.minimumInputLength)return J(f.formatInputTooShort,"formatInputTooShort")?n("<li class='select2-no-results'>"+f.formatInputTooShort(d.val(),f.minimumInputLength)+"</li>"):n(""),c&&this.showSearch&&this.showSearch(!0),void 0;if(f.maximumInputLength&&d.val().length>f.maximumInputLength)return J(f.formatInputTooLong,"formatInputTooLong")?n("<li class='select2-no-results'>"+f.formatInputTooLong(d.val(),f.maximumInputLength)+"</li>"):n(""),void 0;
f.formatSearching&&0===this.findHighlightableChoices().length&&n("<li class='select2-searching'>"+f.formatSearching()+"</li>"),d.addClass("select2-active"),this.removeHighlight(),i=this.tokenize(),i!=b&&null!=i&&d.val(i),this.resultsPage=1,f.query({element:f.element,term:d.val(),page:this.resultsPage,context:null,matcher:f.matcher,callback:this.bind(function(g){var i;if(l==this.queryCount){if(!this.opened())return this.search.removeClass("select2-active"),void 0;if(this.context=g.context===b?null:g.context,this.opts.createSearchChoice&&""!==d.val()&&(i=this.opts.createSearchChoice.call(h,d.val(),g.results),i!==b&&null!==i&&h.id(i)!==b&&null!==h.id(i)&&0===a(g.results).filter(function(){return q(h.id(this),h.id(i))}).length&&g.results.unshift(i)),0===g.results.length&&J(f.formatNoMatches,"formatNoMatches"))return n("<li class='select2-no-results'>"+f.formatNoMatches(d.val())+"</li>"),void 0;e.empty(),h.opts.populateResults.call(this,e,g.results,{term:d.val(),page:this.resultsPage,context:null}),g.more===!0&&J(f.formatLoadMore,"formatLoadMore")&&(e.append("<li class='select2-more-results'>"+h.opts.escapeMarkup(f.formatLoadMore(this.resultsPage))+"</li>"),window.setTimeout(function(){h.loadMoreIfNeeded()},10)),this.postprocessResults(g,c),m(),this.opts.element.trigger({type:"select2-loaded",items:g})}})})}},cancel:function(){this.close()},blur:function(){this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),this.container.removeClass("select2-container-active"),this.search[0]===document.activeElement&&this.search.blur(),this.clearSearch(),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")},focusSearch:function(){y(this.search)},selectHighlighted:function(a){var b=this.highlight(),c=this.results.find(".select2-highlighted"),d=c.closest(".select2-result").data("select2-data");d?(this.highlight(b),this.onSelect(d,a)):a&&a.noFocus&&this.close()},getPlaceholder:function(){var a;return this.opts.element.attr("placeholder")||this.opts.element.attr("data-placeholder")||this.opts.element.data("placeholder")||this.opts.placeholder||((a=this.getPlaceholderOption())!==b?a.text():b)},getPlaceholderOption:function(){if(this.select){var a=this.select.children().first();if(this.opts.placeholderOption!==b)return"first"===this.opts.placeholderOption&&a||"function"==typeof this.opts.placeholderOption&&this.opts.placeholderOption(this.select);if(""===a.text()&&""===a.val())return a}},initContainerWidth:function(){function c(){var c,d,e,f,g;if("off"===this.opts.width)return null;if("element"===this.opts.width)return 0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px";if("copy"===this.opts.width||"resolve"===this.opts.width){if(c=this.opts.element.attr("style"),c!==b)for(d=c.split(";"),f=0,g=d.length;g>f;f+=1)if(e=d[f].replace(/\s/g,"").match(/[^-]width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i),null!==e&&e.length>=1)return e[1];return"resolve"===this.opts.width?(c=this.opts.element.css("width"),c.indexOf("%")>0?c:0===this.opts.element.outerWidth(!1)?"auto":this.opts.element.outerWidth(!1)+"px"):null}return a.isFunction(this.opts.width)?this.opts.width():this.opts.width}var d=c.call(this);null!==d&&this.container.css("width",d)}}),e=N(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container"}).html(["<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>","   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>","   <span class='select2-arrow'><b></b></span>","</a>","<input class='select2-focusser select2-offscreen' type='text'/>","<div class='select2-drop select2-display-none'>","   <div class='select2-search'>","       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>","   </div>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.focusser.prop("disabled",!this.isInterfaceEnabled())},opening:function(){var c,d,e;this.opts.minimumResultsForSearch>=0&&this.showSearch(!0),this.parent.opening.apply(this,arguments),this.showSearchInput!==!1&&this.search.val(this.focusser.val()),this.search.focus(),c=this.search.get(0),c.createTextRange?(d=c.createTextRange(),d.collapse(!1),d.select()):c.setSelectionRange&&(e=this.search.val().length,c.setSelectionRange(e,e)),""===this.search.val()&&this.nextSearchTerm!=b&&(this.search.val(this.nextSearchTerm),this.search.select()),this.focusser.prop("disabled",!0).val(""),this.updateResults(!0),this.opts.element.trigger(a.Event("select2-open"))},close:function(a){this.opened()&&(this.parent.close.apply(this,arguments),a=a||{focus:!0},this.focusser.removeAttr("disabled"),a.focus&&this.focusser.focus())},focus:function(){this.opened()?this.close():(this.focusser.removeAttr("disabled"),this.focusser.focus())},isFocused:function(){return this.container.hasClass("select2-container-active")},cancel:function(){this.parent.cancel.apply(this,arguments),this.focusser.removeAttr("disabled"),this.focusser.focus()},destroy:function(){a("label[for='"+this.focusser.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)},initContainer:function(){var b,d=this.container,e=this.dropdown;this.opts.minimumResultsForSearch<0?this.showSearch(!1):this.showSearch(!0),this.selection=b=d.find(".select2-choice"),this.focusser=d.find(".select2-focusser"),this.focusser.attr("id","s2id_autogen"+g()),a("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.focusser.attr("id")),this.focusser.attr("tabindex",this.elementTabIndex),this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){if(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)return A(a),void 0;switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),void 0;case c.ESC:return this.cancel(a),A(a),void 0}}})),this.search.on("blur",this.bind(function(){document.activeElement===this.body().get(0)&&window.setTimeout(this.bind(function(){this.search.focus()}),0)})),this.focusser.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()&&a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.ESC){if(this.opts.openOnEnter===!1&&a.which===c.ENTER)return A(a),void 0;if(a.which==c.DOWN||a.which==c.UP||a.which==c.ENTER&&this.opts.openOnEnter){if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return;return this.open(),A(a),void 0}return a.which==c.DELETE||a.which==c.BACKSPACE?(this.opts.allowClear&&this.clear(),A(a),void 0):void 0}})),t(this.focusser),this.focusser.on("keyup-change input",this.bind(function(a){if(this.opts.minimumResultsForSearch>=0){if(a.stopPropagation(),this.opened())return;this.open()}})),b.on("mousedown","abbr",this.bind(function(a){this.isInterfaceEnabled()&&(this.clear(),B(a),this.close(),this.selection.focus())})),b.on("mousedown",this.bind(function(b){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.opened()?this.close():this.isInterfaceEnabled()&&this.open(),A(b)})),e.on("mousedown",this.bind(function(){this.search.focus()})),b.on("focus",this.bind(function(a){A(a)})),this.focusser.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})).on("blur",this.bind(function(){this.opened()||(this.container.removeClass("select2-container-active"),this.opts.element.trigger(a.Event("select2-blur")))})),this.search.on("focus",this.bind(function(){this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active")})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.setPlaceholder()},clear:function(a){var b=this.selection.data("select2-data");if(b){var c=this.getPlaceholderOption();this.opts.element.val(c?c.val():""),this.selection.find(".select2-chosen").empty(),this.selection.removeData("select2-data"),this.setPlaceholder(),a!==!1&&(this.opts.element.trigger({type:"select2-removed",val:this.id(b),choice:b}),this.triggerChange({removed:b}))}},initSelection:function(){if(this.isPlaceholderOptionSelected())this.updateSelection(null),this.close(),this.setPlaceholder();else{var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.setPlaceholder())})}},isPlaceholderOptionSelected:function(){var a;return this.opts.placeholder?(a=this.getPlaceholderOption())!==b&&a.is(":selected")||""===this.opts.element.val()||this.opts.element.val()===b||null===this.opts.element.val():!1},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=a.find(":selected");b(c.optionToData(d))}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=c.val(),f=null;b.query({matcher:function(a,c,d){var g=q(e,b.id(d));return g&&(f=d),g},callback:a.isFunction(d)?function(){d(f)}:a.noop})}),b},getPlaceholder:function(){return this.select&&this.getPlaceholderOption()===b?b:this.parent.getPlaceholder.apply(this,arguments)},setPlaceholder:function(){var a=this.getPlaceholder();if(this.isPlaceholderOptionSelected()&&a!==b){if(this.select&&this.getPlaceholderOption()===b)return;this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(a)),this.selection.addClass("select2-default"),this.container.removeClass("select2-allowclear")}},postprocessResults:function(a,b,c){var d=0,e=this;if(this.findHighlightableChoices().each2(function(a,b){return q(e.id(b.data("select2-data")),e.opts.element.val())?(d=a,!1):void 0}),c!==!1&&(b===!0&&d>=0?this.highlight(d):this.highlight(0)),b===!0){var g=this.opts.minimumResultsForSearch;g>=0&&this.showSearch(L(a.results)>=g)}},showSearch:function(b){this.showSearchInput!==b&&(this.showSearchInput=b,this.dropdown.find(".select2-search").toggleClass("select2-search-hidden",!b),this.dropdown.find(".select2-search").toggleClass("select2-offscreen",!b),a(this.dropdown,this.container).toggleClass("select2-with-searchbox",b))},onSelect:function(a,b){if(this.triggerSelect(a)){var c=this.opts.element.val(),d=this.data();this.opts.element.val(this.id(a)),this.updateSelection(a),this.opts.element.trigger({type:"select2-selected",val:this.id(a),choice:a}),this.nextSearchTerm=this.opts.nextSearchTerm(a,this.search.val()),this.close(),b&&b.noFocus||this.selection.focus(),q(c,this.id(a))||this.triggerChange({added:a,removed:d})}},updateSelection:function(a){var d,e,c=this.selection.find(".select2-chosen");this.selection.data("select2-data",a),c.empty(),null!==a&&(d=this.opts.formatSelection(a,c,this.opts.escapeMarkup)),d!==b&&c.append(d),e=this.opts.formatSelectionCssClass(a,c),e!==b&&c.addClass(e),this.selection.removeClass("select2-default"),this.opts.allowClear&&this.getPlaceholder()!==b&&this.container.addClass("select2-allowclear")},val:function(){var a,c=!1,d=null,e=this,f=this.data();if(0===arguments.length)return this.opts.element.val();if(a=arguments[0],arguments.length>1&&(c=arguments[1]),this.select)this.select.val(a).find(":selected").each2(function(a,b){return d=e.optionToData(b),!1}),this.updateSelection(d),this.setPlaceholder(),c&&this.triggerChange({added:d,removed:f});else{if(!a&&0!==a)return this.clear(c),void 0;if(this.opts.initSelection===b)throw new Error("cannot call val() if initSelection() is not defined");this.opts.element.val(a),this.opts.initSelection(this.opts.element,function(a){e.opts.element.val(a?e.id(a):""),e.updateSelection(a),e.setPlaceholder(),c&&e.triggerChange({added:a,removed:f})})}},clearSearch:function(){this.search.val(""),this.focusser.val("")},data:function(a){var c,d=!1;return 0===arguments.length?(c=this.selection.data("select2-data"),c==b&&(c=null),c):(arguments.length>1&&(d=arguments[1]),a?(c=this.data(),this.opts.element.val(a?this.id(a):""),this.updateSelection(a),d&&this.triggerChange({added:a,removed:c})):this.clear(d),void 0)}}),f=N(d,{createContainer:function(){var b=a(document.createElement("div")).attr({"class":"select2-container select2-container-multi"}).html(["<ul class='select2-choices'>","  <li class='select2-search-field'>","    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>","  </li>","</ul>","<div class='select2-drop select2-drop-multi select2-display-none'>","   <ul class='select2-results'>","   </ul>","</div>"].join(""));return b},prepareOpts:function(){var b=this.parent.prepareOpts.apply(this,arguments),c=this;return"select"===b.element.get(0).tagName.toLowerCase()?b.initSelection=function(a,b){var d=[];a.find(":selected").each2(function(a,b){d.push(c.optionToData(b))}),b(d)}:"data"in b&&(b.initSelection=b.initSelection||function(c,d){var e=r(c.val(),b.separator),f=[];b.query({matcher:function(c,d,g){var h=a.grep(e,function(a){return q(a,b.id(g))}).length;return h&&f.push(g),h},callback:a.isFunction(d)?function(){for(var a=[],c=0;c<e.length;c++)for(var g=e[c],h=0;h<f.length;h++){var i=f[h];if(q(g,b.id(i))){a.push(i),f.splice(h,1);break}}d(a)}:a.noop})}),b},selectChoice:function(a){var b=this.container.find(".select2-search-choice-focus");b.length&&a&&a[0]==b[0]||(b.length&&this.opts.element.trigger("choice-deselected",b),b.removeClass("select2-search-choice-focus"),a&&a.length&&(this.close(),a.addClass("select2-search-choice-focus"),this.opts.element.trigger("choice-selected",a)))},destroy:function(){a("label[for='"+this.search.attr("id")+"']").attr("for",this.opts.element.attr("id")),this.parent.destroy.apply(this,arguments)},initContainer:function(){var d,b=".select2-choices";this.searchContainer=this.container.find(".select2-search-field"),this.selection=d=this.container.find(b);var e=this;this.selection.on("click",".select2-search-choice",function(){e.search[0].focus(),e.selectChoice(a(this))}),this.search.attr("id","s2id_autogen"+g()),a("label[for='"+this.opts.element.attr("id")+"']").attr("for",this.search.attr("id")),this.search.on("input paste",this.bind(function(){this.isInterfaceEnabled()&&(this.opened()||this.open())})),this.search.attr("tabindex",this.elementTabIndex),this.keydowns=0,this.search.on("keydown",this.bind(function(a){if(this.isInterfaceEnabled()){++this.keydowns;var b=d.find(".select2-search-choice-focus"),e=b.prev(".select2-search-choice:not(.select2-locked)"),f=b.next(".select2-search-choice:not(.select2-locked)"),g=z(this.search);if(b.length&&(a.which==c.LEFT||a.which==c.RIGHT||a.which==c.BACKSPACE||a.which==c.DELETE||a.which==c.ENTER)){var h=b;return a.which==c.LEFT&&e.length?h=e:a.which==c.RIGHT?h=f.length?f:null:a.which===c.BACKSPACE?(this.unselect(b.first()),this.search.width(10),h=e.length?e:f):a.which==c.DELETE?(this.unselect(b.first()),this.search.width(10),h=f.length?f:null):a.which==c.ENTER&&(h=null),this.selectChoice(h),A(a),h&&h.length||this.open(),void 0}if((a.which===c.BACKSPACE&&1==this.keydowns||a.which==c.LEFT)&&0==g.offset&&!g.length)return this.selectChoice(d.find(".select2-search-choice:not(.select2-locked)").last()),A(a),void 0;if(this.selectChoice(null),this.opened())switch(a.which){case c.UP:case c.DOWN:return this.moveHighlight(a.which===c.UP?-1:1),A(a),void 0;case c.ENTER:return this.selectHighlighted(),A(a),void 0;case c.TAB:return this.opts.selectOnBlur&&this.selectHighlighted({noFocus:!0}),this.close(),void 0;case c.ESC:return this.cancel(a),A(a),void 0}if(a.which!==c.TAB&&!c.isControl(a)&&!c.isFunctionKey(a)&&a.which!==c.BACKSPACE&&a.which!==c.ESC){if(a.which===c.ENTER){if(this.opts.openOnEnter===!1)return;if(a.altKey||a.ctrlKey||a.shiftKey||a.metaKey)return}this.open(),(a.which===c.PAGE_UP||a.which===c.PAGE_DOWN)&&A(a),a.which===c.ENTER&&A(a)}}})),this.search.on("keyup",this.bind(function(){this.keydowns=0,this.resizeSearch()})),this.search.on("blur",this.bind(function(b){this.container.removeClass("select2-container-active"),this.search.removeClass("select2-focused"),this.selectChoice(null),this.opened()||this.clearSearch(),b.stopImmediatePropagation(),this.opts.element.trigger(a.Event("select2-blur"))})),this.container.on("click",b,this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").length>0||(this.selectChoice(null),this.clearPlaceholder(),this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.open(),this.focusSearch(),b.preventDefault()))})),this.container.on("focus",b,this.bind(function(){this.isInterfaceEnabled()&&(this.container.hasClass("select2-container-active")||this.opts.element.trigger(a.Event("select2-focus")),this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"),this.clearPlaceholder())})),this.initContainerWidth(),this.opts.element.addClass("select2-offscreen"),this.clearSearch()},enableInterface:function(){this.parent.enableInterface.apply(this,arguments)&&this.search.prop("disabled",!this.isInterfaceEnabled())},initSelection:function(){if(""===this.opts.element.val()&&""===this.opts.element.text()&&(this.updateSelection([]),this.close(),this.clearSearch()),this.select||""!==this.opts.element.val()){var c=this;this.opts.initSelection.call(null,this.opts.element,function(a){a!==b&&null!==a&&(c.updateSelection(a),c.close(),c.clearSearch())})}},clearSearch:function(){var a=this.getPlaceholder(),c=this.getMaxSearchWidth();a!==b&&0===this.getVal().length&&this.search.hasClass("select2-focused")===!1?(this.search.val(a).addClass("select2-default"),this.search.width(c>0?c:this.container.css("width"))):this.search.val("").width(10)},clearPlaceholder:function(){this.search.hasClass("select2-default")&&this.search.val("").removeClass("select2-default")},opening:function(){this.clearPlaceholder(),this.resizeSearch(),this.parent.opening.apply(this,arguments),this.focusSearch(),this.updateResults(!0),this.search.focus(),this.opts.element.trigger(a.Event("select2-open"))},close:function(){this.opened()&&this.parent.close.apply(this,arguments)},focus:function(){this.close(),this.search.focus()},isFocused:function(){return this.search.hasClass("select2-focused")},updateSelection:function(b){var c=[],d=[],e=this;a(b).each(function(){o(e.id(this),c)<0&&(c.push(e.id(this)),d.push(this))}),b=d,this.selection.find(".select2-search-choice").remove(),a(b).each(function(){e.addSelectedChoice(this)}),e.postprocessResults()},tokenize:function(){var a=this.search.val();a=this.opts.tokenizer.call(this,a,this.data(),this.bind(this.onSelect),this.opts),null!=a&&a!=b&&(this.search.val(a),a.length>0&&this.open())},onSelect:function(a,b){this.triggerSelect(a)&&(this.addSelectedChoice(a),this.opts.element.trigger({type:"selected",val:this.id(a),choice:a}),(this.select||!this.opts.closeOnSelect)&&this.postprocessResults(a,!1,this.opts.closeOnSelect===!0),this.opts.closeOnSelect?(this.close(),this.search.width(10)):this.countSelectableResults()>0?(this.search.width(10),this.resizeSearch(),this.getMaximumSelectionSize()>0&&this.val().length>=this.getMaximumSelectionSize()&&this.updateResults(!0),this.positionDropdown()):(this.close(),this.search.width(10)),this.triggerChange({added:a}),b&&b.noFocus||this.focusSearch())},cancel:function(){this.close(),this.focusSearch()},addSelectedChoice:function(c){var j,k,d=!c.locked,e=a("<li class='select2-search-choice'>    <div></div>    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a></li>"),f=a("<li class='select2-search-choice select2-locked'><div></div></li>"),g=d?e:f,h=this.id(c),i=this.getVal();j=this.opts.formatSelection(c,g.find("div"),this.opts.escapeMarkup),j!=b&&g.find("div").replaceWith("<div>"+j+"</div>"),k=this.opts.formatSelectionCssClass(c,g.find("div")),k!=b&&g.addClass(k),d&&g.find(".select2-search-choice-close").on("mousedown",A).on("click dblclick",this.bind(function(b){this.isInterfaceEnabled()&&(a(b.target).closest(".select2-search-choice").fadeOut("fast",this.bind(function(){this.unselect(a(b.target)),this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"),this.close(),this.focusSearch()})).dequeue(),A(b))})).on("focus",this.bind(function(){this.isInterfaceEnabled()&&(this.container.addClass("select2-container-active"),this.dropdown.addClass("select2-drop-active"))})),g.data("select2-data",c),g.insertBefore(this.searchContainer),i.push(h),this.setVal(i)},unselect:function(a){var c,d,b=this.getVal();if(a=a.closest(".select2-search-choice"),0===a.length)throw"Invalid argument: "+a+". Must be .select2-search-choice";c=a.data("select2-data"),c&&(d=o(this.id(c),b),d>=0&&(b.splice(d,1),this.setVal(b),this.select&&this.postprocessResults()),a.remove(),this.opts.element.trigger({type:"removed",val:this.id(c),choice:c}),this.triggerChange({removed:c}))},postprocessResults:function(a,b,c){var d=this.getVal(),e=this.results.find(".select2-result"),f=this.results.find(".select2-result-with-children"),g=this;e.each2(function(a,b){var c=g.id(b.data("select2-data"));o(c,d)>=0&&(b.addClass("select2-selected"),b.find(".select2-result-selectable").addClass("select2-selected"))}),f.each2(function(a,b){b.is(".select2-result-selectable")||0!==b.find(".select2-result-selectable:not(.select2-selected)").length||b.addClass("select2-selected")}),-1==this.highlight()&&c!==!1&&g.highlight(0),!this.opts.createSearchChoice&&!e.filter(".select2-result:not(.select2-selected)").length>0&&(!a||a&&!a.more&&0===this.results.find(".select2-no-results").length)&&J(g.opts.formatNoMatches,"formatNoMatches")&&this.results.append("<li class='select2-no-results'>"+g.opts.formatNoMatches(g.search.val())+"</li>")},getMaxSearchWidth:function(){return this.selection.width()-s(this.search)},resizeSearch:function(){var a,b,c,d,e,f=s(this.search);a=C(this.search)+10,b=this.search.offset().left,c=this.selection.width(),d=this.selection.offset().left,e=c-(b-d)-f,a>e&&(e=c-f),40>e&&(e=c-f),0>=e&&(e=a),this.search.width(e)},getVal:function(){var a;return this.select?(a=this.select.val(),null===a?[]:a):(a=this.opts.element.val(),r(a,this.opts.separator))},setVal:function(b){var c;this.select?this.select.val(b):(c=[],a(b).each(function(){o(this,c)<0&&c.push(this)}),this.opts.element.val(0===c.length?"":c.join(this.opts.separator)))},buildChangeDetails:function(a,b){for(var b=b.slice(0),a=a.slice(0),c=0;c<b.length;c++)for(var d=0;d<a.length;d++)q(this.opts.id(b[c]),this.opts.id(a[d]))&&(b.splice(c,1),c--,a.splice(d,1),d--);return{added:b,removed:a}},val:function(c,d){var e,f=this;if(0===arguments.length)return this.getVal();if(e=this.data(),e.length||(e=[]),!c&&0!==c)return this.opts.element.val(""),this.updateSelection([]),this.clearSearch(),d&&this.triggerChange({added:this.data(),removed:e}),void 0;if(this.setVal(c),this.select)this.opts.initSelection(this.select,this.bind(this.updateSelection)),d&&this.triggerChange(this.buildChangeDetails(e,this.data()));else{if(this.opts.initSelection===b)throw new Error("val() cannot be called if initSelection() is not defined");this.opts.initSelection(this.opts.element,function(b){var c=a.map(b,f.id);f.setVal(c),f.updateSelection(b),f.clearSearch(),d&&f.triggerChange(f.buildChangeDetails(e,this.data()))})}this.clearSearch()},onSortStart:function(){if(this.select)throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");this.search.width(0),this.searchContainer.hide()},onSortEnd:function(){var b=[],c=this;this.searchContainer.show(),this.searchContainer.appendTo(this.searchContainer.parent()),this.resizeSearch(),this.selection.find(".select2-search-choice").each(function(){b.push(c.opts.id(a(this).data("select2-data")))}),this.setVal(b),this.triggerChange()},data:function(b,c){var e,f,d=this;return 0===arguments.length?this.selection.find(".select2-search-choice").map(function(){return a(this).data("select2-data")}).get():(f=this.data(),b||(b=[]),e=a.map(b,function(a){return d.opts.id(a)}),this.setVal(e),this.updateSelection(b),this.clearSearch(),c&&this.triggerChange(this.buildChangeDetails(f,this.data())),void 0)}}),a.fn.select2=function(){var d,g,h,i,j,c=Array.prototype.slice.call(arguments,0),k=["val","destroy","opened","open","close","focus","isFocused","container","dropdown","onSortStart","onSortEnd","enable","disable","readonly","positionDropdown","data","search"],l=["opened","isFocused","container","dropdown"],m=["val","data"],n={search:"externalSearch"};return this.each(function(){if(0===c.length||"object"==typeof c[0])d=0===c.length?{}:a.extend({},c[0]),d.element=a(this),"select"===d.element.get(0).tagName.toLowerCase()?j=d.element.prop("multiple"):(j=d.multiple||!1,"tags"in d&&(d.multiple=j=!0)),g=j?new f:new e,g.init(d);else{if("string"!=typeof c[0])throw"Invalid arguments to select2 plugin: "+c;if(o(c[0],k)<0)throw"Unknown method: "+c[0];if(i=b,g=a(this).data("select2"),g===b)return;if(h=c[0],"container"===h?i=g.container:"dropdown"===h?i=g.dropdown:(n[h]&&(h=n[h]),i=g[h].apply(g,c.slice(1))),o(c[0],l)>=0||o(c[0],m)&&1==c.length)return!1}}),i===b?this:i},a.fn.select2.defaults={width:"copy",loadMorePadding:0,closeOnSelect:!0,openOnEnter:!0,containerCss:{},dropdownCss:{},containerCssClass:"",dropdownCssClass:"",formatResult:function(a,b,c,d){var e=[];return E(a.text,c.term,e,d),e.join("")},formatSelection:function(a,c,d){return a?d(a.text):b},sortResults:function(a){return a},formatResultCssClass:function(){return b},formatSelectionCssClass:function(){return b},formatNoMatches:function(){return"No matches found"},formatInputTooShort:function(a,b){var c=b-a.length;return"Please enter "+c+" more character"+(1==c?"":"s")},formatInputTooLong:function(a,b){var c=a.length-b;return"Please delete "+c+" character"+(1==c?"":"s")},formatSelectionTooBig:function(a){return"You can only select "+a+" item"+(1==a?"":"s")},formatLoadMore:function(){return"Loading more results..."},formatSearching:function(){return"Searching..."},minimumResultsForSearch:0,minimumInputLength:0,maximumInputLength:null,maximumSelectionSize:0,id:function(a){return a.id},matcher:function(a,b){return n(""+b).toUpperCase().indexOf(n(""+a).toUpperCase())>=0},separator:",",tokenSeparators:[],tokenizer:M,escapeMarkup:F,blurOnChange:!1,selectOnBlur:!1,adaptContainerCssClass:function(a){return a},adaptDropdownCssClass:function(){return null},nextSearchTerm:function(){return b}},a.fn.select2.ajaxDefaults={transport:a.ajax,params:{type:"GET",cache:!1,dataType:"json"}},window.Select2={query:{ajax:G,local:H,tags:I},util:{debounce:v,markMatch:E,escapeMarkup:F,stripDiacritics:n},"class":{"abstract":d,single:e,multi:f}}}}(jQuery);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/andrasph:bootstrap-notebook-theme/notebook-theme/js/fullcalendar/fullcalendar.min.js                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
/*!                                                                                                                   // 1
 * FullCalendar v1.6.3                                                                                                // 2
 * Docs & License: http://arshaw.com/fullcalendar/                                                                    // 3
 * (c) 2013 Adam Shaw                                                                                                 // 4
 */                                                                                                                   // 5
(function(t,e){function n(e){t.extend(!0,he,e)}function r(n,r,c){function u(t){ae?p()&&(T(),M(t)):f()}function f(){oe=r.theme?"ui":"fc",n.addClass("fc"),r.isRTL?n.addClass("fc-rtl"):n.addClass("fc-ltr"),r.theme&&n.addClass("ui-widget"),ae=t("<div class='fc-content' style='position:relative'/>").prependTo(n),ne=new a(ee,r),re=ne.render(),re&&n.prepend(re),y(r.defaultView),r.handleWindowResize&&t(window).resize(x),m()||v()}function v(){setTimeout(function(){!ie.start&&m()&&C()},0)}function h(){ie&&(te("viewDestroy",ie,ie,ie.element),ie.triggerEventDestroy()),t(window).unbind("resize",x),ne.destroy(),ae.remove(),n.removeClass("fc fc-rtl ui-widget")}function p(){return n.is(":visible")}function m(){return t("body").is(":visible")}function y(t){ie&&t==ie.name||w(t)}function w(e){he++,ie&&(te("viewDestroy",ie,ie,ie.element),B(),ie.triggerEventDestroy(),G(),ie.element.remove(),ne.deactivateButton(ie.name)),ne.activateButton(e),ie=new me[e](t("<div class='fc-view fc-view-"+e+"' style='position:relative'/>").appendTo(ae),ee),C(),$(),he--}function C(t){(!ie.start||t||ie.start>ge||ge>=ie.end)&&p()&&M(t)}function M(t){he++,ie.start&&(te("viewDestroy",ie,ie,ie.element),B(),N()),G(),ie.render(ge,t||0),S(),$(),(ie.afterRender||A)(),_(),q(),te("viewRender",ie,ie,ie.element),ie.trigger("viewDisplay",de),he--,z()}function E(){p()&&(B(),N(),T(),S(),F())}function T(){le=r.contentHeight?r.contentHeight:r.height?r.height-(re?re.height():0)-R(ae):Math.round(ae.width()/Math.max(r.aspectRatio,.5))}function S(){le===e&&T(),he++,ie.setHeight(le),ie.setWidth(ae.width()),he--,se=n.outerWidth()}function x(){if(!he)if(ie.start){var t=++ve;setTimeout(function(){t==ve&&!he&&p()&&se!=(se=n.outerWidth())&&(he++,E(),ie.trigger("windowResize",de),he--)},200)}else v()}function k(){N(),W()}function H(t){N(),F(t)}function F(t){p()&&(ie.setEventData(pe),ie.renderEvents(pe,t),ie.trigger("eventAfterAllRender"))}function N(){ie.triggerEventDestroy(),ie.clearEvents(),ie.clearEventData()}function z(){!r.lazyFetching||ue(ie.visStart,ie.visEnd)?W():F()}function W(){fe(ie.visStart,ie.visEnd)}function O(t){pe=t,F()}function L(t){H(t)}function _(){ne.updateTitle(ie.title)}function q(){var t=new Date;t>=ie.start&&ie.end>t?ne.disableButton("today"):ne.enableButton("today")}function Y(t,n,r){ie.select(t,n,r===e?!0:r)}function B(){ie&&ie.unselect()}function P(){C(-1)}function j(){C(1)}function I(){i(ge,-1),C()}function X(){i(ge,1),C()}function J(){ge=new Date,C()}function V(t,e,n){t instanceof Date?ge=d(t):g(ge,t,e,n),C()}function U(t,n,r){t!==e&&i(ge,t),n!==e&&s(ge,n),r!==e&&l(ge,r),C()}function Z(){return d(ge)}function G(){ae.css({width:"100%",height:ae.height(),overflow:"hidden"})}function $(){ae.css({width:"",height:"",overflow:""})}function Q(){return ie}function K(t,n){return n===e?r[t]:(("height"==t||"contentHeight"==t||"aspectRatio"==t)&&(r[t]=n,E()),e)}function te(t,n){return r[t]?r[t].apply(n||de,Array.prototype.slice.call(arguments,2)):e}var ee=this;ee.options=r,ee.render=u,ee.destroy=h,ee.refetchEvents=k,ee.reportEvents=O,ee.reportEventChange=L,ee.rerenderEvents=H,ee.changeView=y,ee.select=Y,ee.unselect=B,ee.prev=P,ee.next=j,ee.prevYear=I,ee.nextYear=X,ee.today=J,ee.gotoDate=V,ee.incrementDate=U,ee.formatDate=function(t,e){return b(t,e,r)},ee.formatDates=function(t,e,n){return D(t,e,n,r)},ee.getDate=Z,ee.getView=Q,ee.option=K,ee.trigger=te,o.call(ee,r,c);var ne,re,ae,oe,ie,se,le,ce,ue=ee.isFetchNeeded,fe=ee.fetchEvents,de=n[0],ve=0,he=0,ge=new Date,pe=[];g(ge,r.year,r.month,r.date),r.droppable&&t(document).bind("dragstart",function(e,n){var a=e.target,o=t(a);if(!o.parents(".fc").length){var i=r.dropAccept;(t.isFunction(i)?i.call(a,o):o.is(i))&&(ce=a,ie.dragStart(ce,e,n))}}).bind("dragstop",function(t,e){ce&&(ie.dragStop(ce,t,e),ce=null)})}function a(n,r){function a(){v=r.theme?"ui":"fc";var n=r.header;return n?h=t("<table class='fc-header' style='width:100%'/>").append(t("<tr/>").append(i("left")).append(i("center")).append(i("right"))):e}function o(){h.remove()}function i(e){var a=t("<td class='fc-header-"+e+"'/>"),o=r.header[e];return o&&t.each(o.split(" "),function(e){e>0&&a.append("<span class='fc-header-space'/>");var o;t.each(this.split(","),function(e,i){if("title"==i)a.append("<span class='fc-header-title'><h2>&nbsp;</h2></span>"),o&&o.addClass(v+"-corner-right"),o=null;else{var s;if(n[i]?s=n[i]:me[i]&&(s=function(){u.removeClass(v+"-state-hover"),n.changeView(i)}),s){var l=r.theme?q(r.buttonIcons,i):null,c=q(r.buttonText,i),u=t("<span class='fc-button fc-button-"+i+" "+v+"-state-default'>"+(l?"<span class='fc-icon-wrap'><span class='ui-icon ui-icon-"+l+"'/>"+"</span>":c)+"</span>").click(function(){u.hasClass(v+"-state-disabled")||s()}).mousedown(function(){u.not("."+v+"-state-active").not("."+v+"-state-disabled").addClass(v+"-state-down")}).mouseup(function(){u.removeClass(v+"-state-down")}).hover(function(){u.not("."+v+"-state-active").not("."+v+"-state-disabled").addClass(v+"-state-hover")},function(){u.removeClass(v+"-state-hover").removeClass(v+"-state-down")}).appendTo(a);B(u),o||u.addClass(v+"-corner-left"),o=u}}}),o&&o.addClass(v+"-corner-right")}),a}function s(t){h.find("h2").html(t)}function l(t){h.find("span.fc-button-"+t).addClass(v+"-state-active")}function c(t){h.find("span.fc-button-"+t).removeClass(v+"-state-active")}function u(t){h.find("span.fc-button-"+t).addClass(v+"-state-disabled")}function f(t){h.find("span.fc-button-"+t).removeClass(v+"-state-disabled")}var d=this;d.render=a,d.destroy=o,d.updateTitle=s,d.activateButton=l,d.deactivateButton=c,d.disableButton=u,d.enableButton=f;var v,h=t([])}function o(n,r){function a(t,e){return!E||E>t||e>T}function o(t,e){E=t,T=e,W=[];var n=++R,r=F.length;N=r;for(var a=0;r>a;a++)i(F[a],n)}function i(e,r){s(e,function(a){if(r==R){if(a){n.eventDataTransform&&(a=t.map(a,n.eventDataTransform)),e.eventDataTransform&&(a=t.map(a,e.eventDataTransform));for(var o=0;a.length>o;o++)a[o].source=e,b(a[o]);W=W.concat(a)}N--,N||k(W)}})}function s(r,a){var o,i,l=pe.sourceFetchers;for(o=0;l.length>o;o++){if(i=l[o](r,E,T,a),i===!0)return;if("object"==typeof i)return s(i,a),e}var c=r.events;if(c)t.isFunction(c)?(m(),c(d(E),d(T),function(t){a(t),y()})):t.isArray(c)?a(c):a();else{var u=r.url;if(u){var f,v=r.success,h=r.error,g=r.complete;f=t.isFunction(r.data)?r.data():r.data;var p=t.extend({},f||{}),b=X(r.startParam,n.startParam),D=X(r.endParam,n.endParam);b&&(p[b]=Math.round(+E/1e3)),D&&(p[D]=Math.round(+T/1e3)),m(),t.ajax(t.extend({},ye,r,{data:p,success:function(e){e=e||[];var n=I(v,this,arguments);t.isArray(n)&&(e=n),a(e)},error:function(){I(h,this,arguments),a()},complete:function(){I(g,this,arguments),y()}}))}else a()}}function l(t){t=c(t),t&&(N++,i(t,R))}function c(n){return t.isFunction(n)||t.isArray(n)?n={events:n}:"string"==typeof n&&(n={url:n}),"object"==typeof n?(D(n),F.push(n),n):e}function u(e){F=t.grep(F,function(t){return!w(t,e)}),W=t.grep(W,function(t){return!w(t.source,e)}),k(W)}function f(t){var e,n,r=W.length,a=x().defaultEventEnd,o=t.start-t._start,i=t.end?t.end-(t._end||a(t)):0;for(e=0;r>e;e++)n=W[e],n._id==t._id&&n!=t&&(n.start=new Date(+n.start+o),n.end=t.end?n.end?new Date(+n.end+i):new Date(+a(n)+i):null,n.title=t.title,n.url=t.url,n.allDay=t.allDay,n.className=t.className,n.editable=t.editable,n.color=t.color,n.backgroundColor=t.backgroundColor,n.borderColor=t.borderColor,n.textColor=t.textColor,b(n));b(t),k(W)}function v(t,e){b(t),t.source||(e&&(H.events.push(t),t.source=H),W.push(t)),k(W)}function h(e){if(e){if(!t.isFunction(e)){var n=e+"";e=function(t){return t._id==n}}W=t.grep(W,e,!0);for(var r=0;F.length>r;r++)t.isArray(F[r].events)&&(F[r].events=t.grep(F[r].events,e,!0))}else{W=[];for(var r=0;F.length>r;r++)t.isArray(F[r].events)&&(F[r].events=[])}k(W)}function g(e){return t.isFunction(e)?t.grep(W,e):e?(e+="",t.grep(W,function(t){return t._id==e})):W}function m(){z++||S("loading",null,!0)}function y(){--z||S("loading",null,!1)}function b(t){var r=t.source||{},a=X(r.ignoreTimezone,n.ignoreTimezone);t._id=t._id||(t.id===e?"_fc"+be++:t.id+""),t.date&&(t.start||(t.start=t.date),delete t.date),t._start=d(t.start=p(t.start,a)),t.end=p(t.end,a),t.end&&t.end<=t.start&&(t.end=null),t._end=t.end?d(t.end):null,t.allDay===e&&(t.allDay=X(r.allDayDefault,n.allDayDefault)),t.className?"string"==typeof t.className&&(t.className=t.className.split(/\s+/)):t.className=[]}function D(t){t.className?"string"==typeof t.className&&(t.className=t.className.split(/\s+/)):t.className=[];for(var e=pe.sourceNormalizers,n=0;e.length>n;n++)e[n](t)}function w(t,e){return t&&e&&C(t)==C(e)}function C(t){return("object"==typeof t?t.events||t.url:"")||t}var M=this;M.isFetchNeeded=a,M.fetchEvents=o,M.addEventSource=l,M.removeEventSource=u,M.updateEvent=f,M.renderEvent=v,M.removeEvents=h,M.clientEvents=g,M.normalizeEvent=b;for(var E,T,S=M.trigger,x=M.getView,k=M.reportEvents,H={events:[]},F=[H],R=0,N=0,z=0,W=[],A=0;r.length>A;A++)c(r[A])}function i(t,e,n){return t.setFullYear(t.getFullYear()+e),n||f(t),t}function s(t,e,n){if(+t){var r=t.getMonth()+e,a=d(t);for(a.setDate(1),a.setMonth(r),t.setMonth(r),n||f(t);t.getMonth()!=a.getMonth();)t.setDate(t.getDate()+(a>t?1:-1))}return t}function l(t,e,n){if(+t){var r=t.getDate()+e,a=d(t);a.setHours(9),a.setDate(r),t.setDate(r),n||f(t),c(t,a)}return t}function c(t,e){if(+t)for(;t.getDate()!=e.getDate();)t.setTime(+t+(e>t?1:-1)*Ce)}function u(t,e){return t.setMinutes(t.getMinutes()+e),t}function f(t){return t.setHours(0),t.setMinutes(0),t.setSeconds(0),t.setMilliseconds(0),t}function d(t,e){return e?f(new Date(+t)):new Date(+t)}function v(){var t,e=0;do t=new Date(1970,e++,1);while(t.getHours());return t}function h(t,e){return Math.round((d(t,!0)-d(e,!0))/we)}function g(t,n,r,a){n!==e&&n!=t.getFullYear()&&(t.setDate(1),t.setMonth(0),t.setFullYear(n)),r!==e&&r!=t.getMonth()&&(t.setDate(1),t.setMonth(r)),a!==e&&t.setDate(a)}function p(t,n){return"object"==typeof t?t:"number"==typeof t?new Date(1e3*t):"string"==typeof t?t.match(/^\d+(\.\d+)?$/)?new Date(1e3*parseFloat(t)):(n===e&&(n=!0),m(t,n)||(t?new Date(t):null)):null}function m(t,e){var n=t.match(/^([0-9]{4})(-([0-9]{2})(-([0-9]{2})([T ]([0-9]{2}):([0-9]{2})(:([0-9]{2})(\.([0-9]+))?)?(Z|(([-+])([0-9]{2})(:?([0-9]{2}))?))?)?)?)?$/);if(!n)return null;var r=new Date(n[1],0,1);if(e||!n[13]){var a=new Date(n[1],0,1,9,0);n[3]&&(r.setMonth(n[3]-1),a.setMonth(n[3]-1)),n[5]&&(r.setDate(n[5]),a.setDate(n[5])),c(r,a),n[7]&&r.setHours(n[7]),n[8]&&r.setMinutes(n[8]),n[10]&&r.setSeconds(n[10]),n[12]&&r.setMilliseconds(1e3*Number("0."+n[12])),c(r,a)}else if(r.setUTCFullYear(n[1],n[3]?n[3]-1:0,n[5]||1),r.setUTCHours(n[7]||0,n[8]||0,n[10]||0,n[12]?1e3*Number("0."+n[12]):0),n[14]){var o=60*Number(n[16])+(n[18]?Number(n[18]):0);o*="-"==n[15]?1:-1,r=new Date(+r+1e3*60*o)}return r}function y(t){if("number"==typeof t)return 60*t;if("object"==typeof t)return 60*t.getHours()+t.getMinutes();var e=t.match(/(\d+)(?::(\d+))?\s*(\w+)?/);if(e){var n=parseInt(e[1],10);return e[3]&&(n%=12,"p"==e[3].toLowerCase().charAt(0)&&(n+=12)),60*n+(e[2]?parseInt(e[2],10):0)}}function b(t,e,n){return D(t,null,e,n)}function D(t,e,n,r){r=r||he;var a,o,i,s,l=t,c=e,u=n.length,f="";for(a=0;u>a;a++)if(o=n.charAt(a),"'"==o){for(i=a+1;u>i;i++)if("'"==n.charAt(i)){l&&(f+=i==a+1?"'":n.substring(a+1,i),a=i);break}}else if("("==o){for(i=a+1;u>i;i++)if(")"==n.charAt(i)){var d=b(l,n.substring(a+1,i),r);parseInt(d.replace(/\D/,""),10)&&(f+=d),a=i;break}}else if("["==o){for(i=a+1;u>i;i++)if("]"==n.charAt(i)){var v=n.substring(a+1,i),d=b(l,v,r);d!=b(c,v,r)&&(f+=d),a=i;break}}else if("{"==o)l=e,c=t;else if("}"==o)l=t,c=e;else{for(i=u;i>a;i--)if(s=Ee[n.substring(a,i)]){l&&(f+=s(l,r)),a=i-1;break}i==a&&l&&(f+=o)}return f}function w(t){var e,n=new Date(t.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),e=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((e-n)/864e5)/7)+1}function C(t){return t.end?M(t.end,t.allDay):l(d(t.start),1)}function M(t,e){return t=d(t),e||t.getHours()||t.getMinutes()?l(t,1):f(t)}function E(n,r,a){n.unbind("mouseover").mouseover(function(n){for(var o,i,s,l=n.target;l!=this;)o=l,l=l.parentNode;(i=o._fci)!==e&&(o._fci=e,s=r[i],a(s.event,s.element,s),t(n.target).trigger(n)),n.stopPropagation()})}function T(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.width(Math.max(0,n-x(a,r)))}function S(e,n,r){for(var a,o=0;e.length>o;o++)a=t(e[o]),a.height(Math.max(0,n-R(a,r)))}function x(t,e){return k(t)+F(t)+(e?H(t):0)}function k(e){return(parseFloat(t.css(e[0],"paddingLeft",!0))||0)+(parseFloat(t.css(e[0],"paddingRight",!0))||0)}function H(e){return(parseFloat(t.css(e[0],"marginLeft",!0))||0)+(parseFloat(t.css(e[0],"marginRight",!0))||0)}function F(e){return(parseFloat(t.css(e[0],"borderLeftWidth",!0))||0)+(parseFloat(t.css(e[0],"borderRightWidth",!0))||0)}function R(t,e){return N(t)+W(t)+(e?z(t):0)}function N(e){return(parseFloat(t.css(e[0],"paddingTop",!0))||0)+(parseFloat(t.css(e[0],"paddingBottom",!0))||0)}function z(e){return(parseFloat(t.css(e[0],"marginTop",!0))||0)+(parseFloat(t.css(e[0],"marginBottom",!0))||0)}function W(e){return(parseFloat(t.css(e[0],"borderTopWidth",!0))||0)+(parseFloat(t.css(e[0],"borderBottomWidth",!0))||0)}function A(){}function O(t,e){return t-e}function L(t){return Math.max.apply(Math,t)}function _(t){return(10>t?"0":"")+t}function q(t,n){if(t[n]!==e)return t[n];for(var r,a=n.split(/(?=[A-Z])/),o=a.length-1;o>=0;o--)if(r=t[a[o].toLowerCase()],r!==e)return r;return t[""]}function Y(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#039;").replace(/"/g,"&quot;").replace(/\n/g,"<br />")}function B(t){t.attr("unselectable","on").css("MozUserSelect","none").bind("selectstart.ui",function(){return!1})}function P(t){t.children().removeClass("fc-first fc-last").filter(":first-child").addClass("fc-first").end().filter(":last-child").addClass("fc-last")}function j(t,e){var n=t.source||{},r=t.color,a=n.color,o=e("eventColor"),i=t.backgroundColor||r||n.backgroundColor||a||e("eventBackgroundColor")||o,s=t.borderColor||r||n.borderColor||a||e("eventBorderColor")||o,l=t.textColor||n.textColor||e("eventTextColor"),c=[];return i&&c.push("background-color:"+i),s&&c.push("border-color:"+s),l&&c.push("color:"+l),c.join(";")}function I(e,n,r){if(t.isFunction(e)&&(e=[e]),e){var a,o;for(a=0;e.length>a;a++)o=e[a].apply(n,r)||o;return o}}function X(){for(var t=0;arguments.length>t;t++)if(arguments[t]!==e)return arguments[t]}function J(t,e){function n(t,e){e&&(s(t,e),t.setDate(1));var n=a("firstDay"),f=d(t,!0);f.setDate(1);var v=s(d(f),1),g=d(f);l(g,-((g.getDay()-n+7)%7)),i(g);var p=d(v);l(p,(7-p.getDay()+n)%7),i(p,-1,!0);var m=c(),y=Math.round(h(p,g)/7);"fixed"==a("weekMode")&&(l(p,7*(6-y)),y=6),r.title=u(f,a("titleFormat")),r.start=f,r.end=v,r.visStart=g,r.visEnd=p,o(y,m,!0)}var r=this;r.render=n,Z.call(r,t,e,"month");var a=r.opt,o=r.renderBasic,i=r.skipHiddenDays,c=r.getCellsPerWeek,u=e.formatDate}function V(t,e){function n(t,e){e&&l(t,7*e);var n=l(d(t),-((t.getDay()-a("firstDay")+7)%7)),u=l(d(n),7),f=d(n);i(f);var v=d(u);i(v,-1,!0);var h=s();r.start=n,r.end=u,r.visStart=f,r.visEnd=v,r.title=c(f,l(d(v),-1),a("titleFormat")),o(1,h,!1)}var r=this;r.render=n,Z.call(r,t,e,"basicWeek");var a=r.opt,o=r.renderBasic,i=r.skipHiddenDays,s=r.getCellsPerWeek,c=e.formatDates}function U(t,e){function n(t,e){e&&l(t,e),i(t,0>e?-1:1);var n=d(t,!0),c=l(d(n),1);r.title=s(t,a("titleFormat")),r.start=r.visStart=n,r.end=r.visEnd=c,o(1,1,!1)}var r=this;r.render=n,Z.call(r,t,e,"basicDay");var a=r.opt,o=r.renderBasic,i=r.skipHiddenDays,s=e.formatDate}function Z(e,n,r){function a(t,e,n){ee=t,ne=e,re=n,o(),j||i(),s()}function o(){he=be("theme")?"ui":"fc",ge=be("columnFormat"),pe=be("weekNumbers"),me=be("weekNumberTitle"),ye="iso"!=be("weekNumberCalculation")?"w":"W"}function i(){Z=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(e)}function s(){var n=c();L&&L.remove(),L=t(n).appendTo(e),_=L.find("thead"),q=_.find(".fc-day-header"),j=L.find("tbody"),I=j.find("tr"),X=j.find(".fc-day"),J=I.find("td:first-child"),V=I.eq(0).find(".fc-day > div"),U=I.eq(0).find(".fc-day-content > div"),P(_.add(_.find("tr"))),P(I),I.eq(0).addClass("fc-first"),I.filter(":last").addClass("fc-last"),X.each(function(e,n){var r=Te(Math.floor(e/ne),e%ne);we("dayRender",O,r,t(n))}),y(X)}function c(){var t="<table class='fc-border-separate' style='width:100%' cellspacing='0'>"+u()+v()+"</table>";return t}function u(){var t,e,n=he+"-widget-header",r="";for(r+="<thead><tr>",pe&&(r+="<th class='fc-week-number "+n+"'>"+Y(me)+"</th>"),t=0;ne>t;t++)e=Te(0,t),r+="<th class='fc-day-header fc-"+De[e.getDay()]+" "+n+"'>"+Y(ke(e,ge))+"</th>";return r+="</tr></thead>"}function v(){var t,e,n,r=he+"-widget-content",a="";for(a+="<tbody>",t=0;ee>t;t++){for(a+="<tr class='fc-week'>",pe&&(n=Te(t,0),a+="<td class='fc-week-number "+r+"'>"+"<div>"+Y(ke(n,ye))+"</div>"+"</td>"),e=0;ne>e;e++)n=Te(t,e),a+=h(n);a+="</tr>"}return a+="</tbody>"}function h(t){var e=he+"-widget-content",n=O.start.getMonth(),r=f(new Date),a="",o=["fc-day","fc-"+De[t.getDay()],e];return t.getMonth()!=n&&o.push("fc-other-month"),+t==+r?o.push("fc-today",he+"-state-highlight"):r>t?o.push("fc-past"):o.push("fc-future"),a+="<td class='"+o.join(" ")+"'"+" data-date='"+ke(t,"yyyy-MM-dd")+"'"+">"+"<div>",re&&(a+="<div class='fc-day-number'>"+t.getDate()+"</div>"),a+="<div class='fc-day-content'><div style='position:relative'>&nbsp;</div></div></div></td>"}function g(e){Q=e;var n,r,a,o=Q-_.height();"variable"==be("weekMode")?n=r=Math.floor(o/(1==ee?2:6)):(n=Math.floor(o/ee),r=o-n*(ee-1)),J.each(function(e,o){ee>e&&(a=t(o),a.find("> div").css("min-height",(e==ee-1?r:n)-R(a)))})}function p(t){$=t,se.clear(),de.clear(),te=0,pe&&(te=_.find("th.fc-week-number").outerWidth()),K=Math.floor(($-te)/ne),T(q.slice(0,-1),K)}function y(t){t.click(b).mousedown(Ee)}function b(e){if(!be("selectable")){var n=m(t(this).data("date"));we("dayClick",this,n,!0,e)}}function D(t,e,n){n&&oe.build();for(var r=xe(t,e),a=0;r.length>a;a++){var o=r[a];y(w(o.row,o.leftCol,o.row,o.rightCol))}}function w(t,n,r,a){var o=oe.rect(t,n,r,a,e);return Ce(o,e)}function C(t){return d(t)}function M(t,e){D(t,l(d(e),1),!0)}function E(){Me()}function S(t,e,n){var r=Se(t),a=X[r.row*ne+r.col];we("dayClick",a,t,e,n)}function x(t,e){ie.start(function(t){Me(),t&&w(t.row,t.col,t.row,t.col)},e)}function k(t,e,n){var r=ie.stop();if(Me(),r){var a=Te(r);we("drop",t,a,!0,e,n)}}function H(t){return d(t.start)}function F(t){return se.left(t)}function N(t){return se.right(t)}function z(t){return de.left(t)}function W(t){return de.right(t)}function A(t){return I.eq(t)}var O=this;O.renderBasic=a,O.setHeight=g,O.setWidth=p,O.renderDayOverlay=D,O.defaultSelectionEnd=C,O.renderSelection=M,O.clearSelection=E,O.reportDayClick=S,O.dragStart=x,O.dragStop=k,O.defaultEventEnd=H,O.getHoverListener=function(){return ie},O.colLeft=F,O.colRight=N,O.colContentLeft=z,O.colContentRight=W,O.getIsCellAllDay=function(){return!0},O.allDayRow=A,O.getRowCnt=function(){return ee},O.getColCnt=function(){return ne},O.getColWidth=function(){return K},O.getDaySegmentContainer=function(){return Z},ae.call(O,e,n,r),ce.call(O),le.call(O),G.call(O);var L,_,q,j,I,X,J,V,U,Z,$,Q,K,te,ee,ne,re,oe,ie,se,de,he,ge,pe,me,ye,be=O.opt,we=O.trigger,Ce=O.renderOverlay,Me=O.clearOverlays,Ee=O.daySelectionMousedown,Te=O.cellToDate,Se=O.dateToCell,xe=O.rangeToSegments,ke=n.formatDate;B(e.addClass("fc-grid")),oe=new ue(function(e,n){var r,a,o;q.each(function(e,i){r=t(i),a=r.offset().left,e&&(o[1]=a),o=[a],n[e]=o}),o[1]=a+r.outerWidth(),I.each(function(n,i){ee>n&&(r=t(i),a=r.offset().top,n&&(o[1]=a),o=[a],e[n]=o)}),o[1]=a+r.outerHeight()}),ie=new fe(oe),se=new ve(function(t){return V.eq(t)}),de=new ve(function(t){return U.eq(t)})}function G(){function t(t,e){n.renderDayEvents(t,e)}function e(){n.getDaySegmentContainer().empty()}var n=this;n.renderEvents=t,n.clearEvents=e,oe.call(n)}function $(t,e){function n(t,e){e&&l(t,7*e);var n=l(d(t),-((t.getDay()-a("firstDay")+7)%7)),u=l(d(n),7),f=d(n);i(f);var v=d(u);i(v,-1,!0);var h=s();r.title=c(f,l(d(v),-1),a("titleFormat")),r.start=n,r.end=u,r.visStart=f,r.visEnd=v,o(h)}var r=this;r.render=n,K.call(r,t,e,"agendaWeek");var a=r.opt,o=r.renderAgenda,i=r.skipHiddenDays,s=r.getCellsPerWeek,c=e.formatDates}function Q(t,e){function n(t,e){e&&l(t,e),i(t,0>e?-1:1);var n=d(t,!0),c=l(d(n),1);r.title=s(t,a("titleFormat")),r.start=r.visStart=n,r.end=r.visEnd=c,o(1)}var r=this;r.render=n,K.call(r,t,e,"agendaDay");var a=r.opt,o=r.renderAgenda,i=r.skipHiddenDays,s=e.formatDate}function K(n,r,a){function o(t){Ae=t,i(),K?c():s()}function i(){Be=Ze("theme")?"ui":"fc",Pe=Ze("isRTL"),je=y(Ze("minTime")),Ie=y(Ze("maxTime")),Xe=Ze("columnFormat"),Je=Ze("weekNumbers"),Ve=Ze("weekNumberTitle"),Ue="iso"!=Ze("weekNumberCalculation")?"w":"W",Ne=Ze("snapMinutes")||Ze("slotMinutes")}function s(){var e,r,a,o,i,s=Be+"-widget-header",l=Be+"-widget-content",f=0==Ze("slotMinutes")%15;for(c(),ge=t("<div style='position:absolute;z-index:2;left:0;width:100%'/>").appendTo(n),Ze("allDaySlot")?(pe=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(ge),e="<table style='width:100%' class='fc-agenda-allday' cellspacing='0'><tr><th class='"+s+" fc-agenda-axis'>"+Ze("allDayText")+"</th>"+"<td>"+"<div class='fc-day-content'><div style='position:relative'/></div>"+"</td>"+"<th class='"+s+" fc-agenda-gutter'>&nbsp;</th>"+"</tr>"+"</table>",me=t(e).appendTo(ge),ye=me.find("tr"),C(ye.find("td")),ge.append("<div class='fc-agenda-divider "+s+"'>"+"<div class='fc-agenda-divider-inner'/>"+"</div>")):pe=t([]),be=t("<div style='position:absolute;width:100%;overflow-x:hidden;overflow-y:auto'/>").appendTo(ge),we=t("<div style='position:relative;width:100%;overflow:hidden'/>").appendTo(be),Ce=t("<div class='fc-event-container' style='position:absolute;z-index:8;top:0;left:0'/>").appendTo(we),e="<table class='fc-agenda-slots' style='width:100%' cellspacing='0'><tbody>",r=v(),o=u(d(r),Ie),u(r,je),Oe=0,a=0;o>r;a++)i=r.getMinutes(),e+="<tr class='fc-slot"+a+" "+(i?"fc-minor":"")+"'>"+"<th class='fc-agenda-axis "+s+"'>"+(f&&i?"&nbsp;":sn(r,Ze("axisFormat")))+"</th>"+"<td class='"+l+"'>"+"<div style='position:relative'>&nbsp;</div>"+"</td>"+"</tr>",u(r,Ze("slotMinutes")),Oe++;e+="</tbody></table>",Me=t(e).appendTo(we),Ee=Me.find("div:first"),M(Me.find("td"))}function c(){var e=h();K&&K.remove(),K=t(e).appendTo(n),ee=K.find("thead"),ne=ee.find("th").slice(1,-1),re=K.find("tbody"),oe=re.find("td").slice(0,-1),ie=oe.find("> div"),se=oe.find(".fc-day-content > div"),de=oe.eq(0),he=ie.eq(0),P(ee.add(ee.find("tr"))),P(re.add(re.find("tr")))}function h(){var t="<table style='width:100%' class='fc-agenda-days fc-border-separate' cellspacing='0'>"+g()+p()+"</table>";return t}function g(){var t,e,n,r=Be+"-widget-header",a="";for(a+="<thead><tr>",Je?(e=sn(t,Ue),Pe?e+=Ve:e=Ve+e,a+="<th class='fc-agenda-axis fc-week-number "+r+"'>"+Y(e)+"</th>"):a+="<th class='fc-agenda-axis "+r+"'>&nbsp;</th>",n=0;Ae>n;n++)t=rn(0,n),a+="<th class='fc-"+De[t.getDay()]+" fc-col"+n+" "+r+"'>"+Y(sn(t,Xe))+"</th>";return a+="<th class='fc-agenda-gutter "+r+"'>&nbsp;</th>"+"</tr>"+"</thead>"}function p(){var t,e,n,r,a,o=Be+"-widget-header",i=Be+"-widget-content",s=f(new Date),l="";for(l+="<tbody><tr><th class='fc-agenda-axis "+o+"'>&nbsp;</th>",n="",e=0;Ae>e;e++)t=rn(0,e),a=["fc-col"+e,"fc-"+De[t.getDay()],i],+t==+s?a.push(Be+"-state-highlight","fc-today"):s>t?a.push("fc-past"):a.push("fc-future"),r="<td class='"+a.join(" ")+"'>"+"<div>"+"<div class='fc-day-content'>"+"<div style='position:relative'>&nbsp;</div>"+"</div>"+"</div>"+"</td>",n+=r;return l+=n,l+="<td class='fc-agenda-gutter "+i+"'>&nbsp;</td>"+"</tr>"+"</tbody>"}function m(t){t===e&&(t=xe),xe=t,ln={};var n=re.position().top,r=be.position().top,a=Math.min(t-n,Me.height()+r+1);he.height(a-R(de)),ge.css("top",n),be.height(a-r-1),Re=Ee.height()+1,ze=Ze("slotMinutes")/Ne,We=Re/ze}function b(e){Se=e,qe.clear(),Ye.clear();var n=ee.find("th:first");me&&(n=n.add(me.find("th:first"))),n=n.add(Me.find("th:first")),ke=0,T(n.width("").each(function(e,n){ke=Math.max(ke,t(n).outerWidth())}),ke);var r=K.find(".fc-agenda-gutter");me&&(r=r.add(me.find("th.fc-agenda-gutter")));var a=be[0].clientWidth;Fe=be.width()-a,Fe?(T(r,Fe),r.show().prev().removeClass("fc-last")):r.hide().prev().addClass("fc-last"),He=Math.floor((a-ke)/Ae),T(ne.slice(0,-1),He)}function D(){function t(){be.scrollTop(r)}var e=v(),n=d(e);n.setHours(Ze("firstHour"));var r=_(e,n)+1;t(),setTimeout(t,0)}function w(){D()}function C(t){t.click(E).mousedown(en)}function M(t){t.click(E).mousedown(U)}function E(t){if(!Ze("selectable")){var e=Math.min(Ae-1,Math.floor((t.pageX-K.offset().left-ke)/He)),n=rn(0,e),r=this.parentNode.className.match(/fc-slot(\d+)/);if(r){var a=parseInt(r[1])*Ze("slotMinutes"),o=Math.floor(a/60);n.setHours(o),n.setMinutes(a%60+je),Ge("dayClick",oe[e],n,!1,t)}else Ge("dayClick",oe[e],n,!0,t)}}function x(t,e,n){n&&Le.build();for(var r=on(t,e),a=0;r.length>a;a++){var o=r[a];C(k(o.row,o.leftCol,o.row,o.rightCol))}}function k(t,e,n,r){var a=Le.rect(t,e,n,r,ge);return $e(a,ge)}function H(t,e){for(var n=0;Ae>n;n++){var r=rn(0,n),a=l(d(r),1),o=new Date(Math.max(r,t)),i=new Date(Math.min(a,e));if(i>o){var s=Le.rect(0,n,0,n,we),c=_(r,o),u=_(r,i);s.top=c,s.height=u-c,M($e(s,we))}}}function F(t){return qe.left(t)}function N(t){return Ye.left(t)}function z(t){return qe.right(t)}function W(t){return Ye.right(t)}function A(t){return Ze("allDaySlot")&&!t.row}function L(t){var e=rn(0,t.col),n=t.row;return Ze("allDaySlot")&&n--,n>=0&&u(e,je+n*Ne),e}function _(t,n){if(t=d(t,!0),u(d(t),je)>n)return 0;if(n>=u(d(t),Ie))return Me.height();var r=Ze("slotMinutes"),a=60*n.getHours()+n.getMinutes()-je,o=Math.floor(a/r),i=ln[o];return i===e&&(i=ln[o]=Me.find("tr").eq(o).find("td div")[0].offsetTop),Math.max(0,Math.round(i-1+Re*(a%r/r)))}function q(){return ye}function j(t){var e=d(t.start);return t.allDay?e:u(e,Ze("defaultEventMinutes"))}function I(t,e){return e?d(t):u(d(t),Ze("slotMinutes"))}function X(t,e,n){n?Ze("allDaySlot")&&x(t,l(d(e),1),!0):J(t,e)}function J(e,n){var r=Ze("selectHelper");if(Le.build(),r){var a=an(e).col;if(a>=0&&Ae>a){var o=Le.rect(0,a,0,a,we),i=_(e,e),s=_(e,n);if(s>i){if(o.top=i,o.height=s-i,o.left+=2,o.width-=5,t.isFunction(r)){var l=r(e,n);l&&(o.position="absolute",Te=t(l).css(o).appendTo(we))}else o.isStart=!0,o.isEnd=!0,Te=t(nn({title:"",start:e,end:n,className:["fc-select-helper"],editable:!1},o)),Te.css("opacity",Ze("dragOpacity"));Te&&(M(Te),we.append(Te),T(Te,o.width,!0),S(Te,o.height,!0))}}}else H(e,n)}function V(){Qe(),Te&&(Te.remove(),Te=null)}function U(e){if(1==e.which&&Ze("selectable")){tn(e);var n;_e.start(function(t,e){if(V(),t&&t.col==e.col&&!A(t)){var r=L(e),a=L(t);n=[r,u(d(r),Ne),a,u(d(a),Ne)].sort(O),J(n[0],n[3])}else n=null},e),t(document).one("mouseup",function(t){_e.stop(),n&&(+n[0]==+n[1]&&Z(n[0],!1,t),Ke(n[0],n[3],!1,t))})}}function Z(t,e,n){Ge("dayClick",oe[an(t).col],t,e,n)}function G(t,e){_e.start(function(t){if(Qe(),t)if(A(t))k(t.row,t.col,t.row,t.col);else{var e=L(t),n=u(d(e),Ze("defaultEventMinutes"));H(e,n)}},e)}function $(t,e,n){var r=_e.stop();Qe(),r&&Ge("drop",t,L(r),A(r),e,n)}var Q=this;Q.renderAgenda=o,Q.setWidth=b,Q.setHeight=m,Q.afterRender=w,Q.defaultEventEnd=j,Q.timePosition=_,Q.getIsCellAllDay=A,Q.allDayRow=q,Q.getCoordinateGrid=function(){return Le},Q.getHoverListener=function(){return _e},Q.colLeft=F,Q.colRight=z,Q.colContentLeft=N,Q.colContentRight=W,Q.getDaySegmentContainer=function(){return pe},Q.getSlotSegmentContainer=function(){return Ce},Q.getMinMinute=function(){return je},Q.getMaxMinute=function(){return Ie},Q.getSlotContainer=function(){return we},Q.getRowCnt=function(){return 1},Q.getColCnt=function(){return Ae},Q.getColWidth=function(){return He},Q.getSnapHeight=function(){return We},Q.getSnapMinutes=function(){return Ne},Q.defaultSelectionEnd=I,Q.renderDayOverlay=x,Q.renderSelection=X,Q.clearSelection=V,Q.reportDayClick=Z,Q.dragStart=G,Q.dragStop=$,ae.call(Q,n,r,a),ce.call(Q),le.call(Q),te.call(Q);var K,ee,ne,re,oe,ie,se,de,he,ge,pe,me,ye,be,we,Ce,Me,Ee,Te,Se,xe,ke,He,Fe,Re,Ne,ze,We,Ae,Oe,Le,_e,qe,Ye,Be,Pe,je,Ie,Xe,Je,Ve,Ue,Ze=Q.opt,Ge=Q.trigger,$e=Q.renderOverlay,Qe=Q.clearOverlays,Ke=Q.reportSelection,tn=Q.unselect,en=Q.daySelectionMousedown,nn=Q.slotSegHtml,rn=Q.cellToDate,an=Q.dateToCell,on=Q.rangeToSegments,sn=r.formatDate,ln={};B(n.addClass("fc-agenda")),Le=new ue(function(e,n){function r(t){return Math.max(l,Math.min(c,t))}var a,o,i;ne.each(function(e,r){a=t(r),o=a.offset().left,e&&(i[1]=o),i=[o],n[e]=i}),i[1]=o+a.outerWidth(),Ze("allDaySlot")&&(a=ye,o=a.offset().top,e[0]=[o,o+a.outerHeight()]);for(var s=we.offset().top,l=be.offset().top,c=l+be.outerHeight(),u=0;Oe*ze>u;u++)e.push([r(s+We*u),r(s+We*(u+1))])}),_e=new fe(Le),qe=new ve(function(t){return ie.eq(t)}),Ye=new ve(function(t){return se.eq(t)})}function te(){function n(t,e){var n,r=t.length,o=[],i=[];for(n=0;r>n;n++)t[n].allDay?o.push(t[n]):i.push(t[n]);y("allDaySlot")&&(re(o,e),k()),s(a(i),e)}function r(){H().empty(),F().empty()}function a(e){var n,r,a,s,l,c,f,v=P(),h=W(),g=z(),p=t.map(e,i),m=[];for(r=0;v>r;r++)for(n=q(0,r),u(n,h),a=ee(o(e,p,n,u(d(n),g-h))),ne(a),s=0;a.length>s;s++)for(l=a[s],c=0;l.length>c;c++)f=l[c],f.col=r,f.level=s,m.push(f);return m}function o(t,e,n,r){var a,o,i,s,l,c,u,f,v=[],h=t.length;for(a=0;h>a;a++)o=t[a],i=o.start,s=e[a],s>n&&r>i&&(n>i?(l=d(n),u=!1):(l=i,u=!0),s>r?(c=d(r),f=!1):(c=s,f=!0),v.push({event:o,start:l,end:c,isStart:u,isEnd:f,msLength:c-l}));return v.sort(B)}function i(t){return t.end?d(t.end):u(d(t.start),y("defaultEventMinutes"))}function s(n,r){var a,o,i,s,l,u,d,v,h,g,p,m,D,w,C,M,T,S,k,H=n.length,N="",z=F();for(k=(S=y("isRTL"))?-1:1,a=0;H>a;a++)o=n[a],i=o.event,s=A(o.start,o.start),l=A(o.start,o.end),u=o.col,d=o.level,v=o.forward||0,h=L(u),g=_(u)-h,g=Math.min(g-6,.95*g),p=d?g/(d+v+1):v?2*(g/(v+1)-6):g,m=h+g/(d+v+1)*d*k+(S?g-p:0),o.top=s,o.left=m,o.outerWidth=p,o.outerHeight=l-s,N+=c(i,o);for(z[0].innerHTML=N,D=z.children(),a=0;H>a;a++)o=n[a],i=o.event,w=t(D[a]),C=b("eventRender",i,i,w),C===!1?w.remove():(C&&C!==!0&&(w.remove(),w=t(C).css({position:"absolute",top:o.top,left:o.left}).appendTo(z)),o.element=w,i._id===r?f(i,w,o):w[0]._fci=a,U(i,w));for(E(z,n,f),a=0;H>a;a++)o=n[a],(w=o.element)&&(o.vsides=R(w,!0),o.hsides=x(w,!0),M=w.find(".fc-event-title"),M.length&&(o.contentTop=M[0].offsetTop));for(a=0;H>a;a++)o=n[a],(w=o.element)&&(w[0].style.width=Math.max(0,o.outerWidth-o.hsides)+"px",T=Math.max(0,o.outerHeight-o.vsides),w[0].style.height=T+"px",i=o.event,o.contentTop!==e&&10>T-o.contentTop&&(w.find("div.fc-event-time").text(ie(i.start,y("timeFormat"))+" - "+i.title),w.find("div.fc-event-title").remove()),b("eventAfterRender",i,i,w))}function c(t,e){var n="<",r=t.url,a=j(t,y),o=["fc-event","fc-event-vert"];return D(t)&&o.push("fc-event-draggable"),e.isStart&&o.push("fc-event-start"),e.isEnd&&o.push("fc-event-end"),o=o.concat(t.className),t.source&&(o=o.concat(t.source.className||[])),n+=r?"a href='"+Y(t.url)+"'":"div",n+=" class='"+o.join(" ")+"'"+" style="+"'"+"position:absolute;"+"top:"+e.top+"px;"+"left:"+e.left+"px;"+a+"'"+">"+"<div class='fc-event-inner'>"+"<div class='fc-event-time'>"+Y(se(t.start,t.end,y("timeFormat")))+"</div>"+"<div class='fc-event-title'>"+Y(t.title||"")+"</div>"+"</div>"+"<div class='fc-event-bg'></div>",e.isEnd&&w(t)&&(n+="<div class='ui-resizable-handle ui-resizable-s'>=</div>"),n+="</"+(r?"a":"div")+">"}function f(t,e,n){var r=e.find("div.fc-event-time");D(t)&&g(t,e,r),n.isEnd&&w(t)&&p(t,e,r),T(t,e)}function v(t,e,n){function r(){c||(e.width(a).height("").draggable("option","grid",null),c=!0)}var a,o,i,s=n.isStart,c=!0,u=N(),f=I(),v=X(),g=J(),p=W();e.draggable({opacity:y("dragOpacity","month"),revertDuration:y("dragRevertDuration"),start:function(n,p){b("eventDragStart",e,t,n,p),G(t,e),a=e.width(),u.start(function(n,a){if(te(),n){o=!1;var u=q(0,a.col),p=q(0,n.col);i=h(p,u),n.row?s?c&&(e.width(f-10),S(e,v*Math.round((t.end?(t.end-t.start)/Me:y("defaultEventMinutes"))/g)),e.draggable("option","grid",[f,1]),c=!1):o=!0:(K(l(d(t.start),i),l(C(t),i)),r()),o=o||c&&!i
}else r(),o=!0;e.draggable("option","revert",o)},n,"drag")},stop:function(n,a){if(u.stop(),te(),b("eventDragStop",e,t,n,a),o)r(),e.css("filter",""),Z(t,e);else{var s=0;c||(s=Math.round((e.offset().top-V().offset().top)/v)*g+p-(60*t.start.getHours()+t.start.getMinutes())),$(this,t,i,s,c,n,a)}}})}function g(t,e,n){function r(){te(),s&&(f?(n.hide(),e.draggable("option","grid",null),K(l(d(t.start),D),l(C(t),D))):(a(w),n.css("display",""),e.draggable("option","grid",[S,x])))}function a(e){var r,a=u(d(t.start),e);t.end&&(r=u(d(t.end),e)),n.text(se(a,r,y("timeFormat")))}var o,i,s,c,f,v,g,p,D,w,M,E=m.getCoordinateGrid(),T=P(),S=I(),x=X(),k=J();e.draggable({scroll:!1,grid:[S,x],axis:1==T?"y":!1,opacity:y("dragOpacity"),revertDuration:y("dragRevertDuration"),start:function(n,r){b("eventDragStart",e,t,n,r),G(t,e),E.build(),o=e.position(),i=E.cell(n.pageX,n.pageY),s=c=!0,f=v=O(i),g=p=0,D=0,w=M=0},drag:function(t,n){var a=E.cell(t.pageX,t.pageY);if(s=!!a){if(f=O(a),g=Math.round((n.position.left-o.left)/S),g!=p){var l=q(0,i.col),u=i.col+g;u=Math.max(0,u),u=Math.min(T-1,u);var d=q(0,u);D=h(d,l)}f||(w=Math.round((n.position.top-o.top)/x)*k)}(s!=c||f!=v||g!=p||w!=M)&&(r(),c=s,v=f,p=g,M=w),e.draggable("option","revert",!s)},stop:function(n,a){te(),b("eventDragStop",e,t,n,a),s&&(f||D||w)?$(this,t,D,f?0:w,f,n,a):(s=!0,f=!1,g=0,D=0,w=0,r(),e.css("filter",""),e.css(o),Z(t,e))}})}function p(t,e,n){var r,a,o=X(),i=J();e.resizable({handles:{s:".ui-resizable-handle"},grid:o,start:function(n,o){r=a=0,G(t,e),b("eventResizeStart",this,t,n,o)},resize:function(s,l){r=Math.round((Math.max(o,e.height())-l.originalSize.height)/o),r!=a&&(n.text(se(t.start,r||t.end?u(M(t),i*r):null,y("timeFormat"))),a=r)},stop:function(n,a){b("eventResizeStop",this,t,n,a),r?Q(this,t,0,i*r,n,a):Z(t,e)}})}var m=this;m.renderEvents=n,m.clearEvents=r,m.slotSegHtml=c,oe.call(m);var y=m.opt,b=m.trigger,D=m.isEventDraggable,w=m.isEventResizable,M=m.eventEnd,T=m.eventElementHandlers,k=m.setHeight,H=m.getDaySegmentContainer,F=m.getSlotSegmentContainer,N=m.getHoverListener,z=m.getMaxMinute,W=m.getMinMinute,A=m.timePosition,O=m.getIsCellAllDay,L=m.colContentLeft,_=m.colContentRight,q=m.cellToDate,B=m.segmentCompare,P=m.getColCnt,I=m.getColWidth,X=m.getSnapHeight,J=m.getSnapMinutes,V=m.getSlotContainer,U=m.reportEventElement,Z=m.showEvents,G=m.hideEvents,$=m.eventDrop,Q=m.eventResize,K=m.renderDayOverlay,te=m.clearOverlays,re=m.renderDayEvents,ae=m.calendar,ie=ae.formatDate,se=ae.formatDates;m.draggableDayEvent=v}function ee(t){var e,n,r,a,o,i=[],s=t.length;for(e=0;s>e;e++){for(n=t[e],r=0;;){if(a=!1,i[r])for(o=0;i[r].length>o;o++)if(re(i[r][o],n)){a=!0;break}if(!a)break;r++}i[r]?i[r].push(n):i[r]=[n]}return i}function ne(t){var e,n,r,a,o,i;for(e=t.length-1;e>0;e--)for(a=t[e],n=0;a.length>n;n++)for(o=a[n],r=0;t[e-1].length>r;r++)i=t[e-1][r],re(o,i)&&(i.forward=Math.max(i.forward||0,(o.forward||0)+1))}function re(t,e){return t.end>e.start&&t.start<e.end}function ae(n,r,a){function o(e,n){var r=Z[e];return t.isPlainObject(r)?q(r,n||a):r}function i(t,e){return r.trigger.apply(r,[t,e||B].concat(Array.prototype.slice.call(arguments,2),[B]))}function s(t){var e=t.source||{};return X(t.startEditable,e.startEditable,o("eventStartEditable"),t.editable,e.editable,o("editable"))&&!o("disableDragging")}function c(t){var e=t.source||{};return X(t.durationEditable,e.durationEditable,o("eventDurationEditable"),t.editable,e.editable,o("editable"))&&!o("disableResizing")}function f(t){J={};var e,n,r=t.length;for(e=0;r>e;e++)n=t[e],J[n._id]?J[n._id].push(n):J[n._id]=[n]}function v(){J={},V={},U=[]}function g(t){return t.end?d(t.end):P(t)}function p(t,e){U.push({event:t,element:e}),V[t._id]?V[t._id].push(e):V[t._id]=[e]}function m(){t.each(U,function(t,e){B.trigger("eventDestroy",e.event,e.event,e.element)})}function y(t,n){n.click(function(r){return n.hasClass("ui-draggable-dragging")||n.hasClass("ui-resizable-resizing")?e:i("eventClick",this,t,r)}).hover(function(e){i("eventMouseover",this,t,e)},function(e){i("eventMouseout",this,t,e)})}function b(t,e){w(t,e,"show")}function D(t,e){w(t,e,"hide")}function w(t,e,n){var r,a=V[t._id],o=a.length;for(r=0;o>r;r++)e&&a[r][0]==e[0]||a[r][n]()}function C(t,e,n,r,a,o,s){var l=e.allDay,c=e._id;E(J[c],n,r,a),i("eventDrop",t,e,n,r,a,function(){E(J[c],-n,-r,l),I(c)},o,s),I(c)}function M(t,e,n,r,a,o){var s=e._id;T(J[s],n,r),i("eventResize",t,e,n,r,function(){T(J[s],-n,-r),I(s)},a,o),I(s)}function E(t,n,r,a){r=r||0;for(var o,i=t.length,s=0;i>s;s++)o=t[s],a!==e&&(o.allDay=a),u(l(o.start,n,!0),r),o.end&&(o.end=u(l(o.end,n,!0),r)),j(o,Z)}function T(t,e,n){n=n||0;for(var r,a=t.length,o=0;a>o;o++)r=t[o],r.end=u(l(g(r),e,!0),n),j(r,Z)}function S(t){return"object"==typeof t&&(t=t.getDay()),Q[t]}function x(){return G}function k(t,e,n){for(e=e||1;Q[(t.getDay()+(n?e:0)+7)%7];)l(t,e)}function H(){var t=F.apply(null,arguments),e=R(t),n=N(e);return n}function F(t,e){var n=B.getColCnt(),r=ee?-1:1,a=ee?n-1:0;"object"==typeof t&&(e=t.col,t=t.row);var o=t*n+(e*r+a);return o}function R(t){var e=B.visStart.getDay();return t+=K[e],7*Math.floor(t/G)+te[(t%G+G)%G]-e}function N(t){var e=d(B.visStart);return l(e,t),e}function z(t){var e=W(t),n=A(e),r=O(n);return r}function W(t){return h(t,B.visStart)}function A(t){var e=B.visStart.getDay();return t+=e,Math.floor(t/7)*G+K[(t%7+7)%7]-K[e]}function O(t){var e=B.getColCnt(),n=ee?-1:1,r=ee?e-1:0,a=Math.floor(t/e),o=(t%e+e)%e*n+r;return{row:a,col:o}}function L(t,e){for(var n=B.getRowCnt(),r=B.getColCnt(),a=[],o=W(t),i=W(e),s=A(o),l=A(i)-1,c=0;n>c;c++){var u=c*r,f=u+r-1,d=Math.max(s,u),v=Math.min(l,f);if(v>=d){var h=O(d),g=O(v),p=[h.col,g.col].sort(),m=R(d)==o,y=R(v)+1==i;a.push({row:c,leftCol:p[0],rightCol:p[1],isStart:m,isEnd:y})}}return a}function _(t,e){return Y(t,e)||t.event.start-e.event.start||(t.event.title||"").localeCompare(e.event.title)}function Y(t,e){return"msLength"in t?e.msLength-t.msLength:e.rightCol-e.leftCol-(t.rightCol-t.leftCol)||e.event.allDay-t.event.allDay}var B=this;B.element=n,B.calendar=r,B.name=a,B.opt=o,B.trigger=i,B.isEventDraggable=s,B.isEventResizable=c,B.setEventData=f,B.clearEventData=v,B.eventEnd=g,B.reportEventElement=p,B.triggerEventDestroy=m,B.eventElementHandlers=y,B.showEvents=b,B.hideEvents=D,B.eventDrop=C,B.eventResize=M;var P=B.defaultEventEnd,j=r.normalizeEvent,I=r.reportEventChange,J={},V={},U=[],Z=r.options;B.isHiddenDay=S,B.skipHiddenDays=k,B.getCellsPerWeek=x,B.dateToCell=z,B.dateToDayOffset=W,B.dayOffsetToCellOffset=A,B.cellOffsetToCell=O,B.cellToDate=H,B.cellToCellOffset=F,B.cellOffsetToDayOffset=R,B.dayOffsetToDate=N,B.rangeToSegments=L,B.segmentCompare=_;var G,$=o("hiddenDays")||[],Q=[],K=[],te=[],ee=o("isRTL");(function(){o("weekends")===!1&&$.push(0,6);for(var e=0,n=0;7>e;e++)K[e]=n,Q[e]=-1!=t.inArray(e,$),Q[e]||(te[n]=e,n++);if(G=n,!G)throw"invalid hiddenDays"})()}function oe(){function e(t,e){var n=r(t,!1,!0);se(n,function(t,e){N(t.event,e)}),b(n,e),se(n,function(t,e){k("eventAfterRender",t.event,t.event,e)})}function n(t,e,n){var a=r([t],!0,!1),o=[];return se(a,function(t,r){t.row===e&&r.css("top",n),o.push(r[0])}),o}function r(e,n,r){var o,l,c=Z(),d=n?t("<div/>"):c,v=a(e);return i(v),o=s(v),d[0].innerHTML=o,l=d.children(),n&&c.append(l),u(v,l),se(v,function(t,e){t.hsides=x(e,!0)}),se(v,function(t,e){e.width(Math.max(0,t.outerWidth-t.hsides))}),se(v,function(t,e){t.outerHeight=e.outerHeight(!0)}),f(v,r),v}function a(t){for(var e=[],n=0;t.length>n;n++){var r=o(t[n]);e.push.apply(e,r)}return e}function o(t){for(var e=t.start,n=C(t),r=ee(e,n),a=0;r.length>a;a++)r[a].event=t;return r}function i(t){for(var e=S("isRTL"),n=0;t.length>n;n++){var r=t[n],a=(e?r.isEnd:r.isStart)?V:X,o=(e?r.isStart:r.isEnd)?U:J,i=a(r.leftCol),s=o(r.rightCol);r.left=i,r.outerWidth=s-i}}function s(t){for(var e="",n=0;t.length>n;n++)e+=c(t[n]);return e}function c(t){var e="",n=S("isRTL"),r=t.event,a=r.url,o=["fc-event","fc-event-hori"];H(r)&&o.push("fc-event-draggable"),t.isStart&&o.push("fc-event-start"),t.isEnd&&o.push("fc-event-end"),o=o.concat(r.className),r.source&&(o=o.concat(r.source.className||[]));var i=j(r,S);return e+=a?"<a href='"+Y(a)+"'":"<div",e+=" class='"+o.join(" ")+"'"+" style="+"'"+"position:absolute;"+"left:"+t.left+"px;"+i+"'"+">"+"<div class='fc-event-inner'>",!r.allDay&&t.isStart&&(e+="<span class='fc-event-time'>"+Y(G(r.start,r.end,S("timeFormat")))+"</span>"),e+="<span class='fc-event-title'>"+Y(r.title||"")+"</span>"+"</div>",t.isEnd&&F(r)&&(e+="<div class='ui-resizable-handle ui-resizable-"+(n?"w":"e")+"'>"+"&nbsp;&nbsp;&nbsp;"+"</div>"),e+="</"+(a?"a":"div")+">"}function u(e,n){for(var r=0;e.length>r;r++){var a=e[r],o=a.event,i=n.eq(r),s=k("eventRender",o,o,i);s===!1?i.remove():(s&&s!==!0&&(s=t(s).css({position:"absolute",left:a.left}),i.replaceWith(s),i=s),a.element=i)}}function f(t,e){var n=v(t),r=y(),a=[];if(e)for(var o=0;r.length>o;o++)r[o].height(n[o]);for(var o=0;r.length>o;o++)a.push(r[o].position().top);se(t,function(t,e){e.css("top",a[t.row]+t.top)})}function v(t){for(var e=q(),n=P(),r=[],a=g(t),o=0;e>o;o++){for(var i=a[o],s=[],l=0;n>l;l++)s.push(0);for(var c=0;i.length>c;c++){var u=i[c];u.top=L(s.slice(u.leftCol,u.rightCol+1));for(var l=u.leftCol;u.rightCol>=l;l++)s[l]=u.top+u.outerHeight}r.push(L(s))}return r}function g(t){var e,n,r,a=q(),o=[];for(e=0;t.length>e;e++)n=t[e],r=n.row,n.element&&(o[r]?o[r].push(n):o[r]=[n]);for(r=0;a>r;r++)o[r]=p(o[r]||[]);return o}function p(t){for(var e=[],n=m(t),r=0;n.length>r;r++)e.push.apply(e,n[r]);return e}function m(t){t.sort(ne);for(var e=[],n=0;t.length>n;n++){for(var r=t[n],a=0;e.length>a&&ie(r,e[a]);a++);e[a]?e[a].push(r):e[a]=[r]}return e}function y(){var t,e=q(),n=[];for(t=0;e>t;t++)n[t]=I(t).find("div.fc-day-content > div");return n}function b(t,e){var n=Z();se(t,function(t,n,r){var a=t.event;a._id===e?D(a,n,t):n[0]._fci=r}),E(n,t,D)}function D(t,e,n){H(t)&&T.draggableDayEvent(t,e,n),n.isEnd&&F(t)&&T.resizableDayEvent(t,e,n),z(t,e)}function w(t,e){var n,r=te();e.draggable({delay:50,opacity:S("dragOpacity"),revertDuration:S("dragRevertDuration"),start:function(a,o){k("eventDragStart",e,t,a,o),A(t,e),r.start(function(r,a,o,i){if(e.draggable("option","revert",!r||!o&&!i),Q(),r){var s=re(a),c=re(r);n=h(c,s),$(l(d(t.start),n),l(C(t),n))}else n=0},a,"drag")},stop:function(a,o){r.stop(),Q(),k("eventDragStop",e,t,a,o),n?O(this,t,n,0,t.allDay,a,o):(e.css("filter",""),W(t,e))}})}function M(e,r,a){var o=S("isRTL"),i=o?"w":"e",s=r.find(".ui-resizable-"+i),c=!1;B(r),r.mousedown(function(t){t.preventDefault()}).click(function(t){c&&(t.preventDefault(),t.stopImmediatePropagation())}),s.mousedown(function(o){function s(n){k("eventResizeStop",this,e,n),t("body").css("cursor",""),u.stop(),Q(),f&&_(this,e,f,0,n),setTimeout(function(){c=!1},0)}if(1==o.which){c=!0;var u=te();q(),P();var f,d,v=r.css("top"),h=t.extend({},e),g=ce(le(e.start));K(),t("body").css("cursor",i+"-resize").one("mouseup",s),k("eventResizeStart",this,e,o),u.start(function(r,o){if(r){var s=ae(o),c=ae(r);if(c=Math.max(c,g),f=oe(c)-oe(s)){h.end=l(R(e),f,!0);var u=d;d=n(h,a.row,v),d=t(d),d.find("*").css("cursor",i+"-resize"),u&&u.remove(),A(e)}else d&&(W(e),d.remove(),d=null);Q(),$(e.start,l(C(e),f))}},o)}})}var T=this;T.renderDayEvents=e,T.draggableDayEvent=w,T.resizableDayEvent=M;var S=T.opt,k=T.trigger,H=T.isEventDraggable,F=T.isEventResizable,R=T.eventEnd,N=T.reportEventElement,z=T.eventElementHandlers,W=T.showEvents,A=T.hideEvents,O=T.eventDrop,_=T.eventResize,q=T.getRowCnt,P=T.getColCnt;T.getColWidth;var I=T.allDayRow,X=T.colLeft,J=T.colRight,V=T.colContentLeft,U=T.colContentRight;T.dateToCell;var Z=T.getDaySegmentContainer,G=T.calendar.formatDates,$=T.renderDayOverlay,Q=T.clearOverlays,K=T.clearSelection,te=T.getHoverListener,ee=T.rangeToSegments,ne=T.segmentCompare,re=T.cellToDate,ae=T.cellToCellOffset,oe=T.cellOffsetToDayOffset,le=T.dateToDayOffset,ce=T.dayOffsetToCellOffset}function ie(t,e){for(var n=0;e.length>n;n++){var r=e[n];if(r.leftCol<=t.rightCol&&r.rightCol>=t.leftCol)return!0}return!1}function se(t,e){for(var n=0;t.length>n;n++){var r=t[n],a=r.element;a&&e(r,a,n)}}function le(){function e(t,e,a){n(),e||(e=l(t,a)),c(t,e,a),r(t,e,a)}function n(t){f&&(f=!1,u(),s("unselect",null,t))}function r(t,e,n,r){f=!0,s("select",null,t,e,n,r)}function a(e){var a=o.cellToDate,s=o.getIsCellAllDay,l=o.getHoverListener(),f=o.reportDayClick;if(1==e.which&&i("selectable")){n(e);var d;l.start(function(t,e){u(),t&&s(t)?(d=[a(e),a(t)].sort(O),c(d[0],d[1],!0)):d=null},e),t(document).one("mouseup",function(t){l.stop(),d&&(+d[0]==+d[1]&&f(d[0],!0,t),r(d[0],d[1],!0,t))})}}var o=this;o.select=e,o.unselect=n,o.reportSelection=r,o.daySelectionMousedown=a;var i=o.opt,s=o.trigger,l=o.defaultSelectionEnd,c=o.renderSelection,u=o.clearSelection,f=!1;i("selectable")&&i("unselectAuto")&&t(document).mousedown(function(e){var r=i("unselectCancel");r&&t(e.target).parents(r).length||n(e)})}function ce(){function e(e,n){var r=o.shift();return r||(r=t("<div class='fc-cell-overlay' style='position:absolute;z-index:3'/>")),r[0].parentNode!=n[0]&&r.appendTo(n),a.push(r.css(e).show()),r}function n(){for(var t;t=a.shift();)o.push(t.hide().unbind())}var r=this;r.renderOverlay=e,r.clearOverlays=n;var a=[],o=[]}function ue(t){var e,n,r=this;r.build=function(){e=[],n=[],t(e,n)},r.cell=function(t,r){var a,o=e.length,i=n.length,s=-1,l=-1;for(a=0;o>a;a++)if(r>=e[a][0]&&e[a][1]>r){s=a;break}for(a=0;i>a;a++)if(t>=n[a][0]&&n[a][1]>t){l=a;break}return s>=0&&l>=0?{row:s,col:l}:null},r.rect=function(t,r,a,o,i){var s=i.offset();return{top:e[t][0]-s.top,left:n[r][0]-s.left,width:n[o][1]-n[r][0],height:e[a][1]-e[t][0]}}}function fe(e){function n(t){de(t);var n=e.cell(t.pageX,t.pageY);(!n!=!i||n&&(n.row!=i.row||n.col!=i.col))&&(n?(o||(o=n),a(n,o,n.row-o.row,n.col-o.col)):a(n,o),i=n)}var r,a,o,i,s=this;s.start=function(s,l,c){a=s,o=i=null,e.build(),n(l),r=c||"mousemove",t(document).bind(r,n)},s.stop=function(){return t(document).unbind(r,n),i}}function de(t){t.pageX===e&&(t.pageX=t.originalEvent.pageX,t.pageY=t.originalEvent.pageY)}function ve(t){function n(e){return a[e]=a[e]||t(e)}var r=this,a={},o={},i={};r.left=function(t){return o[t]=o[t]===e?n(t).position().left:o[t]},r.right=function(t){return i[t]=i[t]===e?r.left(t)+n(t).width():i[t]},r.clear=function(){a={},o={},i={}}}var he={defaultView:"month",aspectRatio:1.35,header:{left:"title",center:"",right:"today prev,next"},weekends:!0,weekNumbers:!1,weekNumberCalculation:"iso",weekNumberTitle:"W",allDayDefault:!0,ignoreTimezone:!0,lazyFetching:!0,startParam:"start",endParam:"end",titleFormat:{month:"MMMM yyyy",week:"MMM d[ yyyy]{ '&#8212;'[ MMM] d yyyy}",day:"dddd, MMM d, yyyy"},columnFormat:{month:"ddd",week:"ddd M/d",day:"dddd M/d"},timeFormat:{"":"h(:mm)t"},isRTL:!1,firstDay:0,monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],buttonText:{prev:"<span class='fc-text-arrow'>&lsaquo;</span>",next:"<span class='fc-text-arrow'>&rsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&laquo;</span>",nextYear:"<span class='fc-text-arrow'>&raquo;</span>",today:"today",month:"month",week:"week",day:"day"},theme:!1,buttonIcons:{prev:"circle-triangle-w",next:"circle-triangle-e"},unselectAuto:!0,dropAccept:"*",handleWindowResize:!0},ge={header:{left:"next,prev today",center:"",right:"title"},buttonText:{prev:"<span class='fc-text-arrow'>&rsaquo;</span>",next:"<span class='fc-text-arrow'>&lsaquo;</span>",prevYear:"<span class='fc-text-arrow'>&raquo;</span>",nextYear:"<span class='fc-text-arrow'>&laquo;</span>"},buttonIcons:{prev:"circle-triangle-e",next:"circle-triangle-w"}},pe=t.fullCalendar={version:"1.6.3"},me=pe.views={};t.fn.fullCalendar=function(n){if("string"==typeof n){var a,o=Array.prototype.slice.call(arguments,1);return this.each(function(){var r=t.data(this,"fullCalendar");if(r&&t.isFunction(r[n])){var i=r[n].apply(r,o);a===e&&(a=i),"destroy"==n&&t.removeData(this,"fullCalendar")}}),a!==e?a:this}var i=n.eventSources||[];return delete n.eventSources,n.events&&(i.push(n.events),delete n.events),n=t.extend(!0,{},he,n.isRTL||n.isRTL===e&&he.isRTL?ge:{},n),this.each(function(e,a){var o=t(a),s=new r(o,n,i);o.data("fullCalendar",s),s.render()}),this},pe.sourceNormalizers=[],pe.sourceFetchers=[];var ye={dataType:"json",cache:!1},be=1;pe.addDays=l,pe.cloneDate=d,pe.parseDate=p,pe.parseISO8601=m,pe.parseTime=y,pe.formatDate=b,pe.formatDates=D;var De=["sun","mon","tue","wed","thu","fri","sat"],we=864e5,Ce=36e5,Me=6e4,Ee={s:function(t){return t.getSeconds()},ss:function(t){return _(t.getSeconds())},m:function(t){return t.getMinutes()},mm:function(t){return _(t.getMinutes())},h:function(t){return t.getHours()%12||12},hh:function(t){return _(t.getHours()%12||12)},H:function(t){return t.getHours()},HH:function(t){return _(t.getHours())},d:function(t){return t.getDate()},dd:function(t){return _(t.getDate())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return t.getMonth()+1},MM:function(t){return _(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},yy:function(t){return(t.getFullYear()+"").substring(2)},yyyy:function(t){return t.getFullYear()},t:function(t){return 12>t.getHours()?"a":"p"},tt:function(t){return 12>t.getHours()?"am":"pm"},T:function(t){return 12>t.getHours()?"A":"P"},TT:function(t){return 12>t.getHours()?"AM":"PM"},u:function(t){return b(t,"yyyy-MM-dd'T'HH:mm:ss'Z'")},S:function(t){var e=t.getDate();return e>10&&20>e?"th":["st","nd","rd"][e%10-1]||"th"},w:function(t,e){return e.weekNumberCalculation(t)},W:function(t){return w(t)}};pe.dateFormatters=Ee,pe.applyAll=I,me.month=J,me.basicWeek=V,me.basicDay=U,n({weekMode:"fixed"}),me.agendaWeek=$,me.agendaDay=Q,n({allDaySlot:!0,allDayText:"all-day",firstHour:6,slotMinutes:30,defaultEventMinutes:120,axisFormat:"h(:mm)tt",timeFormat:{agenda:"h:mm{ - h:mm}"},dragOpacity:{agenda:.5},minTime:0,maxTime:24})})(jQuery);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);
