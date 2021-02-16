<template>
    <div>
        <h3>{{user.name}}</h3>
        <h3>{{user.email}}</h3>
    </div>
</template>
<script>
export default {
    props:['user']
}
</script>