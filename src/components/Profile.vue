<template>
    <div>
        <h3><strong>Nombre de usuario :</strong>  {{user.name}}</h3>
        <h3> <strong>E-mail :</strong>          {{user.email}}</h3>
    </div>
</template>
<script>
export default {
    props:['user']
}
</script>