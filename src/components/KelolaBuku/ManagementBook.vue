<template>
    <!-- {{ books }} -->
    <!-- Tombol untuk membuka modal -->
    <button type="button" class="btn btn-primary" @click="prepareData('add')">
        {{ messageButton }}
    </button>

    <change-book-comp
        :isSlotVisible="showSlot"
        :actionData="actionData"
        :authors="authors"
        :publishers="publishers"
        :genres="genres"
        @submit-form="submitBook"
        @submit-form-edit="editBook"
    />

    <!-- Tampilan Kelola Buku -->
    <div class="mt-4">
        <div v-if="showSlot"></div>
        <div v-else>
            <h3>Kelola Buku</h3>
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Judul</th>
                        <th>Penulis</th>
                        <!-- Kolom lainnya -->
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody class="table-group-divider">
                    <tr v-for="book in books" :key="book.id">
                        <td>{{ book.title }}</td>
                        <td>{{ book.author.name }}</td>
                        <!-- Data lainnya -->
                        <td>
                            <button
                                class="btn btn-sm btn-danger mx-1"
                                @click="deleteBook(book.id)"
                            >
                                Hapus
                            </button>
                            <button
                                class="btn btn-sm btn-warning mx-1"
                                @click="prepareData('edit', book)"
                            >
                                Edit
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import axios from "axios";
import changeBookComp from "@/components/KelolaBuku/changeBookComp.vue";

// toggle button add & edit
const showSlot = ref(false);
const messageButton = ref("Tambah Buku");
const actionData = ref({
    type: "",
    content: "",
});

watch(showSlot, (newCondition) => {
    if (newCondition) {
        messageButton.value = "Kembali";
    } else {
        messageButton.value = "Tambah Buku";
    }
});

const prepareData = (type, book = null) => {
    showSlot.value = !showSlot.value;

    if (type == "add") {
        actionData.value = {
            type: "Tambah",
        };
    }

    if (type == "edit") {
        actionData.value = {
            type: "Edit",
            content: book,
        };
    }
};
// end toggle

const books = ref([]);
const authors = ref([]);
const publishers = ref([]);
const genres = ref([]);

async function fetchBooks() {
    try {
        const response = await axios.get("http://localhost:3000/books");
        books.value = response.data.data;
    } catch (error) {
        console.error(error);
    }
}

async function submitBook(data) {
    try {
        const response = await axios.post("http://localhost:3000/books", data);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    showSlot.value = false;
    actionData.value = { type: "", content: null };
    fetchBooks();
}

async function deleteBook(id) {
    try {
        const response = await axios.delete(
            `http://localhost:3000/books/${id}`
        );
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }

    fetchBooks();
}

async function editBook(id) {
    try {
        const respone = await axios.patch(`http://localhost:3000/books/${id}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

async function loadAdditionalData() {
    try {
        // get data authors
        let response = await axios.get("http://localhost:3000/authors");
        authors.value = response.data;
        // get data publishers
        response = await axios.get("http://localhost:3000/publishers");
        publishers.value = response.data;
        // get data genre
        response = await axios.get("http://localhost:3000/genres");
        genres.value = response.data;
    } catch (error) {
        console.error(error);
    }
}

onMounted(() => {
    fetchBooks();
    loadAdditionalData();
});
</script>
