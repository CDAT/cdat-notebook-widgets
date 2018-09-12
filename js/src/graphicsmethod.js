// got syntax at: https://github.com/jupyter-widgets/widget-cookiecutter/blob/master/%7B%7Bcookiecutter.github_project_name%7D%7D/js/lib/example.js#L24


var widgets = require('@jupyter-widgets/base');

var _ = require('lodash');
var React = require('react');
var ReactDOM = require('react-dom');
var VCSWidgets = require('vcs-widgets');


// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including `_model_name`, `_view_name`, `_model_module`
// and `_view_module` when different from the base class.
//
// When serialiazing entire widget state for embedding, only values different from the
// defaults will be specified.

var GMModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name: 'GMModel',
        _view_name: 'GMView',
        _model_module: 'cdat-notebook-widgets',
        _view_module: 'cdat-notebook-widgets',
        _model_module_version: '~1.0.0',
        _view_module_version: '~1.0.0',
        value: { "g_name": "Gfb" },
        colormaps: ["default"]
    }),
});

// Custom View. Renders the widget model.

var GMView = widgets.DOMWidgetView.extend({
    render: function () {
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
        },
    value_changed: function () {
        var gm = this.model.get("value");
        var self = this;
        function saveChanges() {
            self.touch();
        }
        function updateActiveGM(props) {
            self.model.set("value", props);
        }
        var gms = {}
        gms[gm.g_name] = {}
        gms[gm.g_name][gm.name] = gm;
        var props = {
            graphicsMethod: gm.name,
            graphicsMethodParent: gm.g_name,
            gmProps: gm,
            graphicsMethods: gms,
            updateGraphicsMethod: saveChanges,
            updateActiveGM: updateActiveGM,
            colormaps: this.model.get("colormaps")
        }
        var component = React.createElement(VCSWidgets.default.GMEdit, props);
        class Hello extends React.Component {
            render() {
              return React.createElement('div', null, ` ${this.props.toWhat}`);
            }
          }
          
          ReactDOM.render(
            React.createElement(Hello, {toWhat: component}, null),
            this.el
          );
        //ReactDOM.render(<h1>Hello, beuatiful world!</h1>, this.el);
        //this.el.textContent = 'Hello World!';
    }
});

module.exports = {
    GMModel : GMModel,
    GMView : GMView
};
