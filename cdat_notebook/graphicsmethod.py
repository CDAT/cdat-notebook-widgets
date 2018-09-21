import ipywidgets as widgets
from traitlets import Unicode, Dict, validate, List
import vcs
import vcs.utils


def get_dict(obj):
    return vcs.utils.dumpToDict(obj)[0]


@widgets.register('vcs.GM')
class GMWidget(widgets.DOMWidget):
    """"""
    _view_name = Unicode('GMView').tag(sync=True)
    _model_name = Unicode('GMModel').tag(sync=True)
    _view_module = Unicode('cdat-notebook-widgets').tag(sync=True)
    _model_module = Unicode('cdat-notebook-widgets').tag(sync=True)
    _model_module_version = Unicode('1.0.0').tag(sync=True)
    _view_module_version = Unicode('1.0.0').tag(sync=True)
    value = Dict(get_dict(vcs.createboxfill())).tag(sync=True)
    colormaps = List(vcs.listelements("colormap")).tag(sync=True)

    @validate("value")
    def _validate_value(self, proposal):
        value = proposal["value"]
        converted = {}
        for k, v in value.items():
            if v == 100000000000000000000:
                v = 1e20
            converted[k] = v
        return converted
