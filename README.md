# react-cloudinary

Simple wrapper around [cloudinary_npm](https://github.com/cloudinary/cloudinary_npm).

# installation

    npm install react-cloudinary --save

# usage

    import { cloudinaryConfig, CloudinaryImage, CloudinaryVideo } from 'react-cloudinary';

    cloudinaryConfig({ cloud_name: 'xxxx' });

    const imagePublicId = 'imagePublicId';
    <CloudinaryImage publicId={publicId} options={{ width: 300, height: 300 }} />

    const videoPublicId = 'videoPublicId';
    <CloudinaryImage publicId={videoPublicId} options={{ width: 300, height: 300, controles: true, preload: 'auto' }} />
