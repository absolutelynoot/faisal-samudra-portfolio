<template>
    <v-divider></v-divider>
    <v-footer class="d-flex flex-column">
        <div class="d-flex w-100 align-center px-4">
            <div v-for="link in links" class="d-flex me-5">
                <NuxtLink :to="link.to">{{ link.text }}</NuxtLink>
            </div>

            <v-spacer></v-spacer>

            <v-btn v-for="icon in icons" :key="icon" class="mx-4" :icon="icon" variant="plain" size="small"></v-btn>
        </div>

        <div class="px-4 py-2 text-end w-100">
            2023 — <strong>Faisal Samudra. All rights reserverd</strong>
        </div>
    </v-footer>
</template>

<script>
export default {
    data: () => ({
        icons: [
            'mdi-github',
            'mdi-linkedin'
        ],
        links: [
            { to: "/", text: "Home" },
            { to: "/Projects", text: "Projects" },
            { to: "/Awards", text: "Awards" },
            { to: "/About", text: "About" },
        ]
    }),
}
</script>

<style scoped>
/* Remove hyperlink text colors */
a {
    text-decoration: none;
    color: inherit;
}
</style>