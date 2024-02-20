<template>
    <div class="mt-4" v-if="isSlotVisible">
        <h2 class="mb-4">{{ actionData.type }} Buku</h2>
        <!-- Contoh Buku 1 -->
        <form @submit.prevent="onSubmit">
            <div class="mb-3">
                <label for="title" class="form-label">Judul</label>
                <input
                    type="text"
                    class="form-control"
                    id="title"
                    v-model="book.title"
                />
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Deskripsi</label>
                <textarea
                    class="form-control"
                    id="desc"
                    v-model="book.description"
                />
            </div>
            <div class="mb-3">
                <label for="isbn" class="form-label">ISBN</label>
                <input
                    type="text"
                    class="form-control"
                    id="isbn"
                    v-model="book.isbn"
                />
            </div>
            <div class="mb-3">
                <label for="date" class="form-label">Tanggal Rilis</label>
                <input
                    type="date"
                    class="form-control"
                    id="date"
                    v-model="book.publishDate"
                />
            </div>
            <div class="mb-3">
                <label for="pages" class="form-label">Jumlah Halaman</label>
                <input
                    type="number"
                    class="form-control"
                    id="pages"
                    v-model="book.pages"
                />
            </div>
            <div class="mb-3">
                <label for="cover" class="form-label">Cover URL</label>
                <input
                    type="text"
                    class="form-control"
                    id="cover"
                    v-model="book.coverUrl"
                />
            </div>
            <div class="mb-3">
                <label for="author" class="form-label">Penulis</label>
                <select class="form-select" id="author" v-model="book.authorId">
                    <option disabled selected>-- PILIH PENULIS --</option>
                    <option
                        v-for="author in authors"
                        :key="author.id"
                        :value="author.id"
                    >
                        {{ author.name }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="author" class="form-label">Penerbit</label>
                <select
                    class="form-select"
                    id="author"
                    v-model="book.publisherId"
                >
                    <option disabled selected>-- PILIH PENERBIT --</option>
                    <option
                        v-for="publisher in publishers"
                        :key="publisher.id"
                        :value="publisher.id"
                    >
                        {{ publisher.name }}
                    </option>
                </select>
            </div>
            <div class="mb-3">
                <label for="category" class="form-label">Kategori</label>
                <select
                    id="category"
                    class="form-select"
                    v-model="book.genreId"
                >
                    <option disabled selected>-- PILIH KATEGORI --</option>
                    <option
                        v-for="genre in genres"
                        :key="genre.id"
                        :value="genre.id"
                    >
                        {{ genre.name }}
                    </option>
                </select>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
import moment from "moment";

const props = defineProps({
    isSlotVisible: Boolean,
    actionData: Object,
    authors: Array,
    publishers: Array,
    genres: Array,
});

const emit = defineEmits(["submit-form", "submit-form-edit"]);

const book = ref({
    title: "",
    description: "",
    isbn: "",
    publishDate: "",
    pages: 0,
    coverUrl: "",
    authorId: 0,
    publisherId: 0,
    genreId: 0,
});

watch(
    () => props.actionData.content,
    (newContent) => {
        // if (props.actionData.type == "add") {
        //     resetForm();
        // } else if (newContent) {
        //     book.value = {
        //         ...newContent,
        //         publishDate: newContent.publishDate
        //             ? moment(newContent.publishDate).format("YYYY-MM-DD")
        //             : "",
        //     };
        // }
        book.value = newContent;
        if (newContent && newContent.publishDate) {
            book.value.publishDate = moment(newContent.publishDate).format(
                "YYYY-MM-DD"
            );
        } else {
            book.value = {
                title: "",
                description: "",
                isbn: "",
                publishDate: "",
                pages: 0,
                coverUrl: "",
                authorId: 0,
                publisherId: 0,
                genreId: 0,
            };
        }
    }
);

function onSubmit() {
    if (actionData.type == "add") {
        emit("submit-form", book.value);
    } else if (actionData.type == "edit") {
        emit("submit-form-edit", book.value);
    }
}
</script>
