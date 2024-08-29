<script setup>
import { defineProps, defineEmits, onMounted, ref } from 'vue';

const props = defineProps({
    numeroEstrelas: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['avaliar']);

const estrelas = ref([]);
const avaliacao = ref(0);

const iniciarEstrelas = () => {
    estrelas.value = [];
    for(let i = 1; i <= props.numeroEstrelas; i++) {
        estrelas.value.push({ id: i, estilo: 'bi bi-star estrela' });
    };
}

const marcarAvaliacao = (n) => {

    avaliacao.value = n;

    estrelas.value = [];
    for (let i = 1; i <= props.numeroEstrelas; i++) {
        const estilo = i <= n ? 'bi bi-star-fill estrela preenchida' : 'bi bi-star estrela';
        estrelas.value.push({ id: i, estilo });
    }

    // Enviar um evento personalizado para o componente pai
    //emit('avaliar', avaliacao.value);
    emit('update:avaliar', avaliacao.value);
}

onMounted(() => {
    iniciarEstrelas();
});
</script>

<template>
    <div>
        <i 
            v-for="estrela in estrelas" 
            :key="estrela.id" 
            :class="estrela.estilo" 
            @click="marcarAvaliacao(estrela.id)"
        >
        </i>
    </div>
</template>

<style scoped>
.estrela {
    font-size: 1.5rem;
    color: #999;
    margin-left: 1px;
    margin-right: 1px;
}
.preenchida {
    color: #FC0;
}
</style>
