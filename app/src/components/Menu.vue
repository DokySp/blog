<template>
    <div class="view">
        <table class="item">
            <tr>
                <td>
                    <router-link to="/">HOME</router-link>
                </td>
                <td>
                    <router-link to="/about">ABOUT</router-link>
                </td>
                <td>
                    <router-link to="/contact">CONTACT</router-link>
                </td>
                <td>
                    <a href="https://github.com/dokysp" target="_blank">GITHUB</a>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .view {
        height: 50px;
        width: 700px;
        border-radius: 20px;
        background-color: #00000044;
        user-select: none;
    }
    
    .item {
        height: 100%;
        width: 92%;
        text-align: center;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    
    .item td {
        width: 25%;
        border-spacing: 3px;
    }
    
    .item tr :hover {
        background-color: #22222288;
        border-radius: 5px;
    }
    
    .item tr a {
        color: white;
        font-weight: 600;
        font-style: italic;
        text-decoration: none;
    }
</style>
