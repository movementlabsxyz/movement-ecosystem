from PIL import Image
import os

def resize_image(input_path, output_path, size):
    with Image.open(input_path) as img:
        img = img.resize(size, Image.Resampling.LANCZOS)
        img.save(output_path)

def main():
    # Define the sizes and paths for logo, banner, and hero images
    image_info = {
        'logo': {'size': (200, 200), 'input_dir': 'logo', 'output_dir': 'resized-logo'},
        'banner': {'size': (400, 400), 'input_dir': 'banner', 'output_dir': 'resized-banner'},
        'hero': {'size': (1700, 500), 'input_dir': 'hero', 'output_dir': 'resized-hero'}
    }

    # Resize each image type
    for image_type, info in image_info.items():
        input_dir = info['input_dir']
        output_dir = info['output_dir']
        size = info['size']

        # Create the output directory if it doesn't exist
        os.makedirs(output_dir, exist_ok=True)

        # Resize each image in the input directory
        for image_name in os.listdir(input_dir):
            if image_name.endswith('.png'):
                input_path = os.path.join(input_dir, image_name)
                output_path = os.path.join(output_dir, image_name)
                try:
                    resize_image(input_path, output_path, size)
                    print(f'Resized {image_type} image saved to {output_path}')
                except Exception as e:
                    print(f'Error processing {input_path}: {e}')


if __name__ == '__main__':
    main()
