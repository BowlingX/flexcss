## Dropdowns

Dropdowns in generals try always to fit in the current viewport and behave totally different on small devices.

Shrink down your browser to see what happens.

<button data-dropdown="dropdown-test" class="button small">a simple dropdown <i class="icon-down-dir"></i></button>

<div class="showcase">
    <div class="dropdown open dropdown-sample centered">
        <ul>
            <li><a href="#"><i class="icon-plus"></i> Dropdown Sample Link</a></li>
            <li><a  class="active" href="#"><i class="icon-mail"></i> Dropdown Sample Link (<code>.active</code>)</a></li>
            <li><a href="#"><i class="icon-attach"></i>Dropdown Sample Link</a></li>
        </ul>
    </div>
</div>
<hr>

<p>Dropdowns can be loaded async.</p>
<button id="async-dropdown-target" data-dropdown class="button small">An async dropdown</button>
<hr>
<div id="dropdown-test" class="dropdown">
    <ul>
        <li><a href="#"><i class="icon-plus"></i> Dropdown Sample Link</a></li>
        <li><a href="#"><i class="icon-mail"></i> Dropdown Sample Link</a></li>
        <li><a href="#"><i class="icon-attach"></i>Dropdown Sample Link</a></li>
    </ul>
</div>

{% highlight html %}
<button data-dropdown="dropdown-test" class="button small">A dropdown</button>
<div id="dropdown-test" class="dropdown">
    <ul>
        <li><a data-close-dropdown href="#">A Dropdown item</a></li>
    </ul>
</div>
{% endhighlight %}