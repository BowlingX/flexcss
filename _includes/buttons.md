
## Buttons

Different Buttons and sizes. The following also have tooltips.

<span class="button" data-tooltip title="Tooltip on a block element">A Primary Button</span>
Action Button: <span class="button action"><i
    class="icon-ellipsis-vert"></i></span> or
    <span data-tooltip title="A Tooltip that is visible on a block element. Long tooltips must break."
         class="button disabled">disabled</span>

### Loading state

<span class="button loading">preparing...</span>
<span class="button small loading secondary">alternative loading</span>

### Block

Buttons that spread over whole container.

<p>
    <span class="button block">block Button</span>
    <br>
    <span class="button block"><i class="icon-arrows-cw"></i> a block button with icon</span>
</p>

### Small and mini

<span class="button small">small</span>
<span class="button mini">mini</span>

### Alternative colors

<span class="button secondary">secondary</span>
<span class="button danger">danger</span>
<span class="button alternative">alternative</span>

### Outlined

<span class="button outline">primary</span>
<span class="button secondary outline">secondary</span>
<span class="button danger outline">danger</span>
<span class="button alternative outline">alternative</span>

{% highlight html %}
<!-- Buttons may have different sizes (normal and small) -->
<button class="button"></button>
<button class="button small"></button>

<!-- Buttons may have different states -->
<button class="button loading"></button>

<!-- Buttons may have different functions/colors -->
<button class="button danger"></button>
<button class="button secondary"></button>
<button class="button alternative outline"></button>

{% endhighlight %}
