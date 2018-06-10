<template>
    <table class="table">
        <thead>
        <slot name="thead"></slot>
        </thead>
        <slot name="tbody"></slot>
    </table>
</template>

<script>
    export default {
        name: "zTable"
    }
</script>

<style lang="scss">

</style>
