Image assets are referenced using absolute paths like /assets/figmaimages/figma_image_60_200.png.
Ensure a folder exists at public/assets/figmaimages containing the exported images when deploying.
If assets are only present at repository root /assets, copy them into public/assets prior to build:
cp -r ../../assets/figmaimages ./assets/figmaimages
