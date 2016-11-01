var widgets = require('jupyter-js-widgets');
var _ = require('underscore');
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
    defaults: _.extend({}, widgets.DOMWidgetModel.prototype.defaults, {
        _model_name : 'GMModel',
        _view_name : 'GMView',
        _model_module : 'cdat-notebook-widgets',
        _view_module : 'cdat-notebook-widgets',
        value : {"g_name": "Gfb"},
    }),
});


// Custom View. Renders the widget model.
var GMView = widgets.DOMWidgetView.extend({
    render: function() {
        this.value_changed();
        this.model.on('change:value', this.value_changed, this);
    },
    value_changed: function() {
        var gm = this.model.get("value");
        function noop() {}
        var self = this;
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
            updateGraphicsMethods: noop,
            updateActiveGM: updateActiveGM
        }
        var component = React.createElement(VCSWidgets.GMEdit, props);
        ReactDOM.render(component, this.el);
    }
});


module.exports = {
    GMModel : GMModel,
    GMView : GMView
};
