<template>
    <div
        class="modal fade"
        id="tambahBukuModal"
        tabindex="-1"
        aria-labelledby="tambahBukuModalLabel"
        aria-hidden="true"
        ref="modalElement"
    >
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="tambahBukuModalLabel">
                        Tambah Buku
                    </h5>
                    <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="row">
                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <input
                                        v-model="newBook.title"
                                        type="text"
                                        class="form-control"
                                        id="title"
                                        placeholder="Judul Buku"
                                    />
                                    <label for="title">Judul</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <textarea
                                        v-model="newBook.description"
                                        class="form-control"
                                        placeholder="Deskripsi Buku"
                                        id="desc"
                                    />
                                    <label for="desc">Deskripsi</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-8">
                                    <div class="form-floating mb-3">
                                        <input
                                            v-model="newBook.isbn"
                                            type="text"
                                            class="form-control"
                                            placeholder="ISBN Buku"
                                            id="isbn"
                                        />
                                        <label for="isbn">ISBN</label>
                                    </div>
                                </div>
                                <div class="col-lg-4">
                                    <div class="form-floating mb-3">
                                        <input
                                            v-model="newBook.pages"
                                            type="number"
                                            class="form-control"
                                            placeholder="Banyak halaman buku"
                                            id="pages"
                                            required
                                        />
                                        <label for="pages"
                                            >Banyak Halaman</label
                                        >
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <input
                                        v-model="newBook.publishDate"
                                        type="date"
                                        class="form-control"
                                        placeholder="Tanggal terbit buku"
                                        id="terbit"
                                    />
                                    <label for="terbit">Tanggal Terbit</label>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <input
                                        v-model="newBook.coverUrl"
                                        type="text"
                                        class="form-control"
                                        placeholder="url cover buku"
                                        id="coverUrl"
                                        required
                                    />
                                    <label for="coverUrl">Url Cover Buku</label>
                                </div>
                            </div>
                            <hr />
                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <select
                                        id="author"
                                        class="form-select"
                                        v-model="newBook.authorId"
                                        placeholder="Penulis"
                                    >
                                        <option selected disabled>
                                            -- PILIH PENULIS --
                                        </option>
                                        <option
                                            v-for="author in authors"
                                            v-bind:key="author.id"
                                            v-bind:value="author.id"
                                        >
                                            {{ author.name }}
                                        </option>
                                    </select>
                                    <label for="author">Penulis</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <select
                                        id="publisher"
                                        class="form-select"
                                        v-model="newBook.publisherId"
                                        placeholder="Penerbit"
                                    >
                                        <option selected disabled>
                                            -- PILIH PENERBIT --
                                        </option>
                                        <option
                                            v-for="publisher in publishers"
                                            v-bind:key="publisher.id"
                                            v-bind:value="publisher.id"
                                        >
                                            {{ publisher.name }}
                                        </option>
                                    </select>
                                    <label for="publisher">Penerbit</label>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-floating mb-3">
                                    <select
                                        id="genre"
                                        class="form-select"
                                        v-model="newBook.genreId"
                                        placeholder="Penerbit"
                                    >
                                        <option selected disabled>
                                            -- PILIH GENRE --
                                        </option>
                                        <option
                                            v-for="genre in genres"
                                            v-bind:key="genre.id"
                                            v-bind:value="genre.id"
                                        >
                                            {{ genre.name }}
                                        </option>
                                    </select>
                                    <label for="genre">Genre</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                    >
                        Tutup
                    </button>
                    <button
                        type="button"
                        class="btn btn-primary"
                        @click="submit"
                    >
                        Simpan
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineEmits } from "vue";

const form = defineProps(["newBook", "authors", "publishers", "genres"]);

const emit = defineEmits(["submit-book"]);

const submit = () => {
    emit("submit-book");
};

// console.log(newBook);
// export default {
//     props: ["newBook", "authors", "publishers", "genres"],
//     methods: {
//         sendDataToParent() {
//             this.$emit("submitBook");
//         },
//     },
// };
</script>
