<template>
  <div class="w-full min-h-screen bg-gray-100 flex justify-center items-center flex-col">

    <!-- FIRST SCREEN -->

    <transition name="fade">
     <div v-if="screen == 0" class="page-screen splash-screen">
        <div class="gradient-screen h-[70%] w-full absolute bottom-0 p-5">
          <h1 class="text-4xl text-white font-bold text-center mt-12">Smart Solar</h1>
          <div>
            <p class="text-white mt-3 text-2xl text-center p-5">A Mechatronics Engineering project aimed at reducing climate change for the future using smart solar systems</p>
            <button @click="screen += 1" class=" bg-[#23AA1B] text-white p-3 w-full rounded-3xl font-semibold mt-8">Continue ></button>
          </div>
        </div>
     </div>
    </transition>

     <!-- SECOND SCREEN -->

    <transition name="fade" >
     <div v-if="screen == 1" class="page-screen">
      <!-- GROUP 1 -->
       <div class="self-start p-5 mt-5">
        <h1 class="font-bold text-3xl">MCE Solar Inverter</h1>
        <p>126 KW/H - Discharging</p>
       </div>

       <!-- GROUP 2 -->
       <p class="mt-6 text-2xl opacity-50">Device Control</p>

       <!-- GROUP 3 -->
       <div class="p-4 mt-6">
        <button class=" size-[200px] rounded-full border bg-black text-white hover:scale-95 outline-offset-4 outline-black outline flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
            <path d="M7.5 1v7h1V1z"/>
            <path d="M3 8.812a5 5 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812"/>
          </svg>
        </button>
       </div>

       <!-- GROUP 4 -->
        <div class="flex flex-row p-8 gap-3 mt-2 flex-wrap">
          <div class="w-full flex flex-row gap-3">
            <div class="stat-box w-[50%]">
              <span class="text-3xl font-bold">220V</span>
              <span>Output Voltage</span>
            </div>

            <div class="stat-box w-[50%]">
              <span class="text-3xl font-bold">20C</span>
              <span>Bat. Temperature</span>
            </div>
          </div>
          

          <div class="stat-box w-full">
            <span class="text-3xl font-bold">5A/H</span>
            <span>Battery Current</span>
          </div>
          
        </div>

        <button @click="screen += 1" class=" w-[85%] bg-black text-white p-3 rounded-2xl">NEXT ></button>
       
     </div>
    </transition>

      <!-- SECOND SCREEN -->
      
    <transition name="fade">
      <div v-if="screen == 2" class="page-screen">
      <!-- GROUP 1 -->
       <div class="self-start p-5 mt-5">
        <h1 class="font-bold text-3xl">MCE Solar Inverter</h1>
        <p>126 KW/H - Discharging</p>
       </div>

       <!-- GROUP 2 -->
       <p class="mt-6 text-2xl opacity-50">Usage Statistics</p>

       <!-- GROUP 3 -->
       <div class="p-4 mt-6 w-[80%] flex flex-col gap-3">
        
        <div class="flex flex-row gap-2 items-center">
          <span>Mon</span>
          <progress min="0" max="24" value="20"/>
          <span>20hrs</span>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <span>Tue</span>
          <progress min="0" max="24" value="10"/>
          <span>10hrs</span>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <span>Wed</span>
          <progress min="0" max="24" value="5"/>
          <span>5hrs</span>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <span>Thur</span>
          <progress min="0" max="24" value="22"/>
          <span>22hrs</span>
        </div>

        <div class="flex flex-row gap-2 items-center">
          <span>Fri</span>
          <progress min="0" max="24" value="5"/>
          <span>5hrs</span>
        </div>
       </div>

       <!-- GROUP 4 -->
        <div class="flex flex-row p-8 gap-3 mt-3 flex-wrap">
          <div class="w-full flex flex-row gap-3">
            <div class="stat-box w-[50%]">
              <span class="text-3xl font-bold">220V</span>
              <span>Output Voltage</span>
            </div>

            <div class="stat-box w-[50%]">
              <span class="text-3xl font-bold">20C</span>
              <span>Bat. Temperature</span>
            </div>
          </div>
          

          <div class="stat-box w-full">
            <span class="text-3xl font-bold">5A/H</span>
            <span>Battery Current</span>
           
          </div>
          
        </div>

        <button @click="screen -= 1" class=" w-[85%] bg-black text-white p-3 rounded-2xl">< PREVIOUS</button>
       
     </div>
    </transition>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        screen: 0,
      }
    },
  }
</script>

<style scoped>

button{
    @apply  bg-opacity-80 hover:bg-opacity-100
}

progress{
  @apply w-full
}

progress[value]::-webkit-progress-bar {
  /* background-color: #eee; */
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.25) inset; */
  @apply rounded-full bg-[#23AA1B] bg-opacity-10
}

progress[value]::-webkit-progress-value {
  @apply rounded-full bg-[#23AA1B]
}


  .splash-screen{
    background-image: url('../assets/bg.jpg');
    background-repeat: no-repeat;
  }

  .gradient-screen{
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%); 
  }

  .page-screen{
    @apply bg-white flex items-center w-[400px] h-screen lg:max-h-[900px] relative flex-col
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease-in;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .stat-box{
    @apply border rounded-3xl border-black p-5 flex flex-col min-w-[150px]
  }
  
</style>