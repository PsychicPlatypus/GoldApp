import os
from sys import platform


def which_system() -> str:
    return (
        "Copy the following command in your CLI:\n\n"
        + "\t$ source api/.venv/bin/activate"
        if platform == "linux" or platform == "linux2" or platform == "darwin"
        else "\t$ . api/.venv/Scripts/activate"
    )


print(
    f"""
{ which_system() }
\nTo Deactivate:
\n\t$ deactivate
    """
)
