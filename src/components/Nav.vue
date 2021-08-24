<template>
  <nav class="navbar navbar-light navbar-expand-md bg-secondary">
        <div class="container-fluid"><a class="navbar-brand" href="#">Brand</a><button data-bs-toggle="collapse" class="navbar-toggler" data-bs-target="#navcol-1"><span class="visually-hidden">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
            <ul class="navbar-nav d-flex flex-row loginstat">
                <li class="nav-item"><a class="nav-link active" href="#">login</a></li>
                <li class="nav-item"><a class="nav-link" href="#">wellcome</a></li>
            </ul>
            <div class="collapse navbar-collapse" id="navcol-1">
                <ul class="navbar-nav">
                    
                   <li class="nav-item"><a class="nav-link" href="#"><router-link to="/home">Home</router-link> </a></li>
                   
                    <li class="nav-item"><a class="nav-link" href="#"><router-link to="/login">Login</router-link></a></li>
                   
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
            
}
</script>

<style>
ul li a{
    color: rgb(75, 72, 72);
    text-decoration:none
    ;
}ul li a:hover{
    color: white;
    
    ;
}
</style>