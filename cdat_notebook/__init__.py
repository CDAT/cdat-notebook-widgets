from ._version import version_info, __version__

from .graphicsmethod import GMWidget

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'cdat-notebook-widgets',
        'require': 'cdat-notebook-widgets/extension'
    }]
