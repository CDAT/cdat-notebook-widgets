cdat-notebook-widgets
===============================

Jupyter Widgets for CDAT

Installation
------------

To install use pip:

    $ pip install cdat_notebook
    $ jupyter nbextension enable --py --sys-prefix cdat_notebook


For a development installation (requires npm),

    $ git clone https://github.com/uv-cdat/cdat-notebook-widgets.git
    $ cd cdat-notebook-widgets
    $ pip install -e .
    $ jupyter nbextension install --py --symlink --sys-prefix cdat_notebook
    $ jupyter nbextension enable --py --sys-prefix cdat_notebook
