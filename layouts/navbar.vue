<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container">
                <a class="navbar-brand" href="/">
                    <img src="/assets/img/navbar-logo.png" alt="navbar-logo" class="w-100">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" href="/"><i class="fas fa-home"></i> Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/release-notes"><i class="fas fa-map-marker-alt"></i> Release Notes</a>
                        </li>
                    </ul>
                    <ul class="navbar-nav d-flex">
                        <li class="nav-item">
                            <a class="nav-link active" href="/developer"><i class="fas fa-code"></i> Developer</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Nuxt />
        <center class="mt-5 mb-5">
            <p class="text-primary mb-0"><i class="fab fa-facebook-square"></i> <a target="_blank" href="https://www.facebook.com/doschedule.co" class="text-decoration-none">Do Schedule</a></p>
            <small>© Copyright 2021 DoSchedule.Work , All Rights Reserved</small>
        </center>
    </div>
</template>