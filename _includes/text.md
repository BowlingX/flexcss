## Text

Some very basic Headlines

<h1>h1. heading</h1>
<h2>h2. heading</h2>
<h3>h3. heading</h3>
<h4>h4. heading</h4>
<h5>h5. heading</h5>
<h6>h6. heading</h6>

This is an example copy text with
    <a data-tooltip title="A simple example tooltip" href="#">a link (hover over it to show a tooltip)</a>
    and some <strong>bold</strong> text in it.

<p class="fade-out">We may <code>fade-out</code> text that is less important.
A <a data-tooltip title="Where is this link going to?">link to something</a> would also be different.</p>

{% highlight html %}
<p class="fade-out">A less important text</p>
{% endhighlight %}

----

### Badges

Badges add meta-information to elements. Checkout this
<span class="badge">simple Badge</span> or just this number <span class="badge">10</span>.

They work nicely in Navigation bars or even lists:

<ul>
    <li>A list with <span class="badge">Badge</span> <span class="badge">5</span> <span
            class="badge">20</span>
    </li>
    <li>Another Item</li>
</ul>

{% highlight html %}
<span class="badge">5</span>
{% endhighlight %}

----

### Breadcrumbs

Breadcrumbs show a specific path of the current page, they will be truncated to the first and last item on small screens.

<div>
    <ul class="breadcrumb">
        <li><a href="#">World</a></li>
        <li><a href="#">Asia</a></li>
        <li><a href="#">Thailand</a></li>
        <li><a href="#">Introduce yourself</a></li>
    </ul>
</div>
<div>
    <ul class="breadcrumb">
        <li><a href="#">Root</a></li>
        <li><a href="#">Child 1</a></li>
        <li><a href="#">Child 2</a></li>
        <li><a href="#">This is a very long child that may break later or gets cut of</a></li>
    </ul>
</div>
{% highlight html %}
<ul class="breadcrumb">
    <li><a href="#">Root</a></li>
    <li><a href="#">Child 1</a></li>
</ul>
{% endhighlight %}
<hr>

### Pagination

Different types of pagination, on small screens only arrows (next and prev) are visible.

<div>
    <ul class="paginator">
        <li class="arrow item"><a><i class="icon-left-open"></i></a></li>

        <li class="item"><a href="#">1</a>
        </li>
        <li class="current item"><a href="#">2</a>
        </li>
        <li class="item"><a href="#">3</a>
        </li>
        <li class="arrow item"><a><i class="icon-right-open"></i></a></li>
    </ul>
</div>

<div>
    <ul class="paginator">
        <li class="arrow item"><a><i class="icon-left-open"></i></a></li>
        <li class="item"><a href="#">1</a>
        </li>
        <li class="item fade-out">...
        </li>
        <li class="item"><a href="#">8</a>
        </li>
        <li class="item"><a href="#">9</a>
        </li>
        <li class="current item"><a href="#">10</a>
        </li>
        <li class="item"><a href="#">11</a>
        </li>
        <li class="item"><a href="#">12</a>
        </li>
        <li class="item fade-out">...</li>
        <li class="item"><a href="#">25</a>
        </li>
        <li class="arrow item"><a><i class="icon-right-open"></i></a></li>
    </ul>
</div>

{% highlight html %}
<ul class="paginator">
    <li class="arrow item">
        <a><i class="icon-left-open"></i></a>
    </li>
    <li class="current item">
        <a href="#">2</a>
    </li>
    <li class="item">
        <a href="#">3</a>
    </li>
    <li class="arrow item">
        <a><i class="icon-right-open"></i></a>
    </li>
</ul>
{% endhighlight %}