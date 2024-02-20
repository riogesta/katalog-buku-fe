<template>
    <h2 class="mb-4">Daftar Buku</h2>
    <div class="row row-cols-2 row-cols-md-4 row-cols-lg-5 g-4">
        <!-- Contoh Buku 1 -->
        <div class="col" v-for="book in books">
            <div class="card h-100" v-bind:key="book.id">
                <img
                    v-bind:src="book.coverUrl"
                    class="card-img-top book-cover"
                    v-bind:alt="book.coverUrl"
                />
                <div class="card-body d-flex flex-column">
                    <h6 class="card-title">
                        <b
                            ><router-link :to="`/buku/${book.slug}`">{{
                                book.title
                            }}</router-link></b
                        >
                    </h6>
                    <p class="card-text flex-grow-1">{{ book.description }}</p>
                    <small>{{ book.author.name }}</small>
                </div>
                <div class="card-footer">
                    <small class="text-muted">
                        {{ formatDate(book.publishDate) }}</small
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";

const books = ref([]);

onMounted(async () => {
    try {
        const response = await axios.get("http://localhost:3000/books");
        books.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
});

function formatDate(isoString) {
    const month = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "Mei",
        "Juni",
        "Juli",
        "Agustus",
        "September",
        "Oktober",
        "November",
        "Desember",
    ];

    const date = new Date(isoString);
    const day = date.getDate();
    const monthName = month[date.getMonth()];
    const year = date.getFullYear();

    return `${day} ${monthName} ${year}`;
}
</script>

<style scoped>
.book-cover {
    height: 300px;
    object-fit: cover;
    object-position: center;
    transition: transform 0.3s ease;
}

.book-cover:hover {
    transform: scale(1.1);
    object-fit: cover;
}
</style>
