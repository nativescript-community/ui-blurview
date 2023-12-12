{{ load:../../tools/readme/edit-warning.md }}
{{ template:title }}
{{ template:badges }}
{{ template:description }}

{{ template:toc }}

## API

## Usage
You need to add `xmlns:gv="@nativescript-community/ui-blurview"` to your page tag, and then simply use `<gv:BlurView/>` in order to add the widget to your page. 
```xml
<!-- test-page.xml -->
<Page xmlns="http://schemas.nativescript.org/tns.xsd" xmlns:gv="@nativescript-community/ui-blurview" loaded="pageLoaded">
    <GridLayout rows="" columns="">
        <Image src="https://wallpaperscraft.com/image/rose_flower_colorful_close-up_petals_18824_960x544.jpg" id="bgimage" stretch="aspectFill" />
        <bv:BlurView></bv:BlurView>
    </GridLayout>
</Page>
```

{{ load:../../tools/readme/demos-and-development.md }}
{{ load:../../tools/readme/questions.md }}