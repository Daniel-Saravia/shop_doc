#!/bin/bash

# Create the content directory if it doesn't exist
CONTENT_DIR="content"
mkdir -p "$CONTENT_DIR"

# Array of file names
files=(
  "home.html"
  "quickstart.html"
  "showcase.html"
  "mnist_tutorial.html"
  "api_reference.html"
  "tensor.html"
  "properties.html"
  "creation.html"
  "movement.html"
  "elementwise.html"
  "complex_ops.html"
  "dtypes.html"
  "nn.html"
  "environment_variables.html"
  "runtime.html"
  "developer.html"
  "intro.html"
  "function_autodiff.html"
  "uop.html"
  "runtime_overview.html"
  "hcq.html"
  "tinybox.html"
)

# Create empty files
for file in "${files[@]}"; do
  file_path="$CONTENT_DIR/$file"
  if [[ ! -e $file_path ]]; then
    touch "$file_path"
    echo "<!-- $file created by script -->" > "$file_path"
    echo "Created $file_path"
  else
    echo "$file_path already exists, skipping."
  fi
done

echo "All files have been created in the $CONTENT_DIR directory."
