<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <a class="navbar-brand" href="#">KATALOG BUKU</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            exact-active-class="active"
                            to="/buku"
                            >Home</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link
                            class="nav-link"
                            exact-active-class="active"
                            to="/kelola-buku"
                            >Kelola Buku</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <main class="container pt-4">
        <div class="bg-body-tertiary p-3 rounded">
            <router-view />
        </div>
    </main>
</template>
