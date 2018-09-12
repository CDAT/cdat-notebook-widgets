# cdat-notebook-widgets


Jupyter Widgets for CDAT

## Installation

### The conda env

```bash
conda create -n widgets3 -c cdat/label/nightly -c conda-forge -c cdat ipython nodejs vcs jupyterlab jupyter flake8 autopep8 pip nb_conda jupyterhub ipywidgets python=3
source activate widgets3
# Go to vcs repo 
git checkout boxfill_widgets_jupyter
python setup.py install --old-and-unmanageable
```


### This repo

To install use pip:

```bash
pip install cdat_notebook
jupyter nbextension enable --py --sys-prefix cdat_notebook
```


For a development installation (requires npm),

```bash
git clone https://github.com/uv-cdat/cdat-notebook-widgets.git
cd cdat-notebook-widgets
pip install -e .
jupyter nbextension install --py --symlink --sys-prefix cdat_notebook
jupyter nbextension enable --py --sys-prefix cdat_notebook
```

## Testing

```bash
jupyter-notebook  # jupyter-lab
# Run the notebook `SimpleCode.ipynb
```
