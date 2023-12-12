<template>
    <Page>
        <ActionBar>
            <Label text="Blur View" />
        </ActionBar>

        <GridLayout>
            <Image  borderRadius="100"  src="https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format" id="bgimage" stretch="aspectFill" />
            <BlurView :blurRadius="blurRadius" borderRadius="100"></BlurView>
            <GridLayout orientation="horizontal" verticalAlignment="bottom" columns="*,auto">
                <Slider @valueChange="blurRadius = $event.value" :value="blurRadius" minValue="0" maxValue="100"></Slider>
                <Label :text="blurRadius" verticalAlignment="center" col="1"></Label>
            </GridLayout>
        </GridLayout>
    </Page>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
    computed: {
        message() {
            return 'Blank {N}-Vue app';
        }
    },
    data() {
        return {
            blurRadius: 10
        };
    },
    methods: {}
});
</script>

<style scoped lang="scss">
ActionBar {
    background-color: #42b883;
    color: white;
}
Button {
    background-color: #42b883;
    color: white;
}
</style>
