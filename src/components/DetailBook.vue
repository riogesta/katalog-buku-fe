<template>
    <div class="container mt-5">
        <div v-if="book" class="row">
            <div class="col-md-4">
                <img :src="book.coverUrl" class="img-fluid" alt="Cover Buku" />
            </div>
            <div class="col-md-8">
                <h2 class="mb-3">{{ book.title }}</h2>
                <p class="text-muted">{{ book.author.name }}</p>
                <p>{{ book.description }}</p>
                <p class="text-muted">
                    <div class="">
                        Tanggal Terbit: {{ formatDate(book.publishDate) }}
                    </div>
                    <div>
                        Penerbit: {{ book.publisher.name }}
                    </div>
                </p>
                <!-- Tambahkan detail lainnya sesuai kebutuhan -->
            </div>
        </div>
        <div v-else class="alert alert-warning">Buku tidak ditemukan.</div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            slug: this.$route.params.slug,
            book: null,
        };
    },
    async mounted() {
        try {
            const response = await axios.get(
                `http://localhost:3000/books/${this.slug}`,
                this.book
            );
            console.log(response.data.data);
            this.book = response.data.data;
            // console.log(response);
        } catch (error) {
            console.error(error);
        }
    },
    methods: {
        formatDate(isoString) {
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
        },
    },
};
</script>
