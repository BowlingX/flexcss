## Forms

Forms are <strong>fully responsive</strong> and include styles for common `HTML` widgets (`input`, `select`,
    `checkbox`). They behave to an internal grid without extra markup that is 3 columns on wide-screen and falls back to
    1 column on small devices. I tried to follow best practices to make it as easy as possible for Users
    AND Developers to use/create a form.

All Examples have validation enabled with `FlexCss.Form`.

----

### Example form with HTML5 validation

A simple Login-Form...

<form>
    <fieldset>
        <legend>Please login</legend>
        <div class="control-group">
            <label for="login">Username / E-Mail-Address</label>

            <div class="controls">
                <input required placeholder="Provide your E-Mail-Adress or Username" type="email" id="login"/>
            </div>
        </div>
        <div class="control-group">
            <label for="password">Password</label>

            <div class="controls">
                <input required type="password" id="password"/>
            </div>
        </div>
        <div class="control-group">
            <label class="checkbox no-label">
                <input type="checkbox" value="true" checked>
                <span class="checkbox-container">keep me logged in</span>
            </label>
        </div>

        <div class="form-actions">
            <button class="button small indent-label" type="submit">Login</button>
        </div>
    </fieldset>
</form>

----

{% highlight html %}
<form>
    <fieldset>
        <legend>Please login</legend>
        <div class="control-group">
            <label for="login">Username / E-Mail-Address</label>

            <div class="controls">
                <input required
                       placeholder="Provide your E-Mail-Adress or Username"
                       type="email" id="login"/>
            </div>
        </div>
        <div class="control-group">
            <label for="password">Password</label>

            <div class="controls">
                <input required type="password" id="password"/>
            </div>
        </div>
        <div class="control-group">
            <label class="checkbox no-label">
                <input type="checkbox" value="true" checked>
                <span class="checkbox-container">keep me logged in</span>
            </label>
        </div>

        <div class="form-actions">
            <button class="button small indent-label" type="submit">Login</button>
        </div>
    </fieldset>
</form>

{% endhighlight%}

----

### Complex form Examples

Forms can be quite complex, `FlexCss` has multiple options to display widgets.

#### Multiple fields in one row

<form>
    <fieldset>
        <div class="control-group">
            <label for="select-day">Birthday</label>

            <div class="controls">
                <div class="multi-form">
                    <div class="select-day">
                        <div class="select-element">
                            <select data-custom-label="select-day" id="select-day" name="day" required>
                                <option value="">-</option>
                                <option value="1">10</option>
                            </select>
                        </div>
                    </div>
                    <div class="select-month">
                        <div class="select-element">
                            <select data-custom-label="select-day" name="month" required>
                                <option value="">-</option>
                                <option value="1">October</option>
                            </select>
                        </div>
                    </div>
                    <div class="select-year">
                        <div class="select-element">
                            <select data-custom-label="select-day" name="year" required>
                                <option value="">-</option>
                                <option value="1">1985</option>
                            </select>
                        </div>
                    </div>

                </div>
                <p class="help-block">please provide your birthday, we will not publish your age...</p>
            </div>
            <div class="append break center">
               <label class="checkbox">
                   <input type="checkbox"/>
                   <span class="checkbox-container">hide</span>
               </label>
            </div>
        </div>
        <div class="control-group">
            <label for="first-input">Multiple Inputs</label>
            <div class="controls">
                <div class="multi-form">
                    <div><input id="first-input" type="text"/></div>
                    <div><input data-custom-label="first-input" required type="number"/></div>
                </div>
            </div>
        </div>
        <div class="control-group">
            <div class="controls no-label">
                <div class="multi-form">
                    <div><input data-custom-label="first-input" required type="text"/></div>
                    <div><input type="range"/></div>
                    <div><input type="text"/></div>
                    <div><input type="number"/></div>
                </div>
            </div>
            <div class="append break">
                <p class="fade-out">A description in a third row is sometimes cool :)</p>
            </div>
        </div>
        <div class="control-group">
            <label>A loading input field</label>

            <div class="controls">
                <input class="loading" disabled type="text"/>
            </div>
        </div>
        <div class="control-group">
            <label>Add a file</label>
            <div class="controls">
                <div class="append-input">
                    <input type="text"/>
                    <button class="button small secondary">test file</button>
                </div>
            </div>
        </div>
        </fieldset>
       <fieldset class="toggle-hide" id="toggle-invisible">
           <legend><a data-toggle="toggle-invisible">A Toggleable legend <i class="icon-right-open"></i></a>
               <p class="small-font weight-normal">You should really open this, there might be Dragons behind ;)</p>
           </legend>
           <div class="toggle-container">
               <div class="control-group">
                   <label for="hide-1">Username</label>
                   <div class="controls">
                       <input id="hide-1" type="text" required data-validate-visibility/>
                   </div>
               </div>
               <div class="control-group">
                   <label for="hide-2">About me</label>

                   <div class="controls">
                       <textarea id="hide-2" required data-validate-visibility></textarea>
                   </div>
               </div>
           </div>
       </fieldset>
       <fieldset>
        <legend>Sliders</legend>
        <div class="control-group">
            <label>Range-Control</label>
            <div class="controls">
               <input type="range"/>
           </div>
       </div>
       <div class="control-group">
                   <label class="fade-out">Disabled Range-Control
                   <i data-tooltip title="You can't use this control!" class="icon-help-circled"></i></label>
                   <div class="controls">
                      <input value="20" disabled type="range"/>
                  </div>
              </div>
       </fieldset>
        <div class="form-actions">
            <button class="button small indent-label" type="submit">save</button>
        </div>
</form>

<hr>

Use <code>multi-form</code> to group inputs / widgets in one row, `no-label` on `constrols` can be used if no label is present.
{% highlight html %}
<div class="control-group">
    <div class="controls no-label">
        <div class="multi-form">
            <input type="text"/>
            <input type="text"/>
            <!-- [...] -->
        </div>
    </div>
</div>
{% endhighlight %}
<hr>
### A `wide` form

`wide` forms will stay in widescreen mode and the label is always on top

<form class="wide">
    <fieldset>
        <div class="control-group">
            <label for="title_id">Topic / Headline</label>

            <div class="controls">
                <input id="title_id" required placeholder="Be descriptive and meaningfull" maxlength="70" type="text">
            </div>
        </div>
        <div class="control-group">
            <label for="textarea_text">Text</label>

            <p>A Description may also be on top, you could write something more about
                this here...</p>

            <div class="controls">
                <textarea required placeholder="Please be nice and do not post anything awkward"
                          id="textarea_text"></textarea>

                <p>A help text under an element</p>
            </div>
        </div>
    </fieldset>
</form>
<hr>
### Uneditable and disabled inputs

To let simple elements look like an input field, add `.input`

<form class="saveRemember ajxForm form-horizontal" method="POST" data-remote="json">
    <fieldset>
        <div class="control-group">
            <label>A disabled <code>.input</code></label>

            <div class="controls">
                <span class="input uneditable-input">BowlingX</span>
            </div>
        </div>
        <div class="control-group">
            <label>An <code>.input</code> field</label>

            <div class="controls">
                <span class="input">BowlingX</span>
            </div>
        </div>
        <div class="control-group">
          <label>An disabled field</label>

          <div class="controls">
              <input type="text" disabled/>
          </div>
         </div>
         <div class="control-group">
           <label>An disabled select</label>

           <div class="controls">
                <div class="select-element disabled">
                    <select disabled></select>
               </div>
           </div>
         </div>
    </fieldset>
</form>
<hr>
{%highlight html %}
<span class="input">Value</span>

<span class="input uneditable-input">Uneditable</span>

<div class="select-element disabled">
   <select disabled></select>
</div>
{%endhighlight%}

<hr>

### Checkboxes and Radios

<form>
    <fieldset>
        <div class="control-group">
            <label>Interest</label>

            <div class="controls multi-select-field">
                <label class="checkbox">
                    <input disabled checked="checked" type="checkbox"/>
                    <span class="checkbox-container">find friends (disabled)</span>
                </label>
                <label class="checkbox">
                    <input checked="checked" type="checkbox"/>
                    <span class="checkbox-container">dating</span>
                </label>
            </div>
        </div>
        <div class="control-group">
            <label>Select your favorite language</label>
            <div class="controls multi-select-field">
                <label class="checkbox">
                    <input required type="radio" name="radio" value="S"/>
                    <span class="checkbox-container">Scala</span>
                </label>
                <label class="checkbox">
                    <input required type="radio" name="radio" value="J"/>
                    <span class="checkbox-container">Java</span>
                </label>
                <label class="checkbox">
                    <input disabled required type="radio" name="radio" value="X"/>
                    <span class="checkbox-container">PHP (disabled)</span>
                </label>
            </div>
        </div>
        <div class="control-group">
            <label>Displayed in one row</label>
            <div class="controls multi-select-field multi-row">
              <label class="checkbox">
                  <input required type="radio" name="radio" value="S"/>
                  <span class="checkbox-container">Scala</span>
              </label>
              <label class="checkbox">
                  <input required type="radio" name="radio" value="J"/>
                  <span class="checkbox-container">Java</span>
              </label>
              <label class="checkbox">
                  <input disabled required checked type="radio" name="radio" value="X"/>
                  <span class="checkbox-container">PHP (disabled)</span>
              </label>
            </div>
        </div>
    </fieldset>
</form>

----

To render a checkbox or radio we use a wrapper element, the class is always `checkbox`.

{% highlight html %}
<div class="controls multi-select-field">
    <label class="checkbox">
        <input required type="radio" name="radio" value="S"/>
        <span class="checkbox-container">Scala</span>
    </label>
</div>
{% endhighlight %}
