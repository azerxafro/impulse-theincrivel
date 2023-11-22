(function () {
    const handleVariantChange = (evt) => {
        console.log('chums:handleVariantChange()', evt);
    }

    document.addEventListener('variant:change', handleVariantChange);
}());
