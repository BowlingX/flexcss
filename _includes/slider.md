## Simple Content-Slider

A Simple responsive slider in pure CSS with `FlexCss.LightBox` enabled on image-targets.

<div class="slide-container">
    <input id="activate-slide-1" type="radio" name="slider" checked="checked">
    <input type="radio" id="activate-slide-2" name="slider">
    <input type="radio" id="activate-slide-3" name="slider">
    <input type="radio" id="activate-slide-4" name="slider">
    <ul class="slider">
        <li class="slide">
            <a data-thumb>
                <img alt="thumbnail" src="//c1.staticflickr.com/9/8634/16139197100_ca749e626f_c.jpg"/>
            </a>
        </li>
        <li class="slide">
            <a data-thumb><img alt="thumbnail" src="//c2.staticflickr.com/8/7542/16317744002_b8020c839e_c.jpg"/></a>
        </li>
        <li class="slide">
            <a data-thumb><img alt="thumbnail" src="//c2.staticflickr.com/8/7464/15665240433_f3f0c20a61_c.jpg"/></a>
        </li>
        <li class="slide">
            <a data-thumb><img alt="thumbnail" src="//c2.staticflickr.com/8/7554/16237514495_e7189c730d_c.jpg"/></a>
        </li>
    </ul>
    <ul class="slide-navigation">
        <li>
            <label class="icon-circle" for="activate-slide-1"></label>
        </li>
        <li>
            <label class="icon-circle" for="activate-slide-2"></label>
        </li>
        <li class="visible-small">
            <label class="icon-circle" for="activate-slide-3"></label>
        </li>
        <li class="visible-small">
            <label class="icon-circle" for="activate-slide-4"></label>
        </li>
    </ul>
</div>

<p class="small-font text-centered"><br>Photos <a href="https://www.flickr.com/photos/danrocha/">© Lies Thru a Lens</a>
    <a href="https://www.flickr.com/photos/danrocha/16139197100/">1</a>,
    <a href="https://www.flickr.com/photos/danrocha/16317744002">2</a>,
    <a href="https://www.flickr.com/photos/danrocha/15665240433">3</a>,
    <a href="https://www.flickr.com/photos/danrocha/16237514495">4</a> –
    <a href="https://creativecommons.org/licenses/by/2.0/">License</a></p>


{%highlight html%}
<div class="slide-container">
    <input id="activate-slide-1" type="radio" name="slider" checked="checked">
    <input type="radio" id="activate-slide-2" name="slider">
    <!-- [..] -->
    <ul class="slider">
        <li class="slide">
            <a data-thumb>
                <img alt="thumbnail" src="//img.com/img-1.jpg"/>
            </a>
        </li>
        <li class="slide">
            <a data-thumb>
                <img alt="thumbnail" src="//img.com/img-2.jpg"/>
            </a>
        </li>
        <!-- [..] -->
    </ul>
    <ul class="slide-navigation">
        <li>
            <label class="icon-circle" for="activate-slide-1"></label>
        </li>
        <li>
            <label class="icon-circle" for="activate-slide-2"></label>
        </li>
        <!-- [..] -->
    </ul>
</div>
{%endhighlight%}