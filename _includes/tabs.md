## Tabs and Navigation

Tabs allow content to be separated under different topics.

<div class="overflow-container">
    <ul class="tabs" data-toggle-list>
        <li class="active"><a data-toggle="tab-content-about" href="">About me</a></li>
        <li><a data-toggle="tab-content-friends" href="#">Friends</a></li>
        <li class="disabled"><a href="">Community-Posts (disabled)</a></li>
        <li><a id="toggle-photo" data-toggle href="">Photos (Async) <span class="badge">20</span></a></li>
        <li class="link"><a data-dropdown="menu-dropdown" href="#"><i class="icon-ellipsis"></i></a>
        </li>
    </ul>
</div>
<div id="menu-dropdown" class="dropdown">
    <ul>
        <li><a data-close-dropdown href="#">Dropdown-Item 1</a></li>
        <li><a data-close-dropdown href="#">Dropdown-Item 2</a></li>
        <li><a data-close-dropdown href="#">Dropdown-Item 3</a></li>
    </ul>
</div>
<div class="toggle-content" id="async-tab"><p>An Asnc Tab</p></div>

<div id="tab-content-friends" class="toggle-content">
    <p>Whats happening here with my friends?</p>
</div>

<div id="tab-content-about" class="toggle-content active">
    <p>About myself</p>
</div>
<hr>

### Small Tabs

<ul class="tabs small-font tabs-small" data-toggle-list>
    <li class="active"><a data-toggle="tab-content-all" href="">a tab</a></li>
    <li><a data-toggle="tab-content-countrymen" href="#">a second tab</a></li>
</ul>
<div class="toggle-content toggle-content-small active" id="tab-content-all">
    <p class="small-font">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor.
        Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
    </p>
</div>
<div class="toggle-content toggle-content-small" id="tab-content-countrymen">
    <p class="small-font">No content available.</p>
</div>