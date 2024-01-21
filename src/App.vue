<script setup>
import { computed, ref, unref } from 'vue';
import { useDisplay, useTheme } from 'vuetify';

const display = useDisplay()

const isMobile = computed(() => {
  return unref(display.mobile)
})

const icons = [
  {
      name:'fab fa-twitter',
      url: 'https://www.twitter.com/',
      target: '_blank'
  },
  {
      name:'fab fa-github',
      url: 'https://www.github.com/michaelchiew08',
      target: '_blank'
  },
  {
      name:'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/michaelchiew',
      target: '_blank'
  },
  {
      name:'fab fa-instagram',
      url: 'https://www.instagram.com/michael_chiew',
      target: '_blank'
  }
]

const appBarNavigationLinks = [
  'Dashboard',
  'Messages',
  'Profile',
  'Updates',
];

const cards = ['Today', 'Yesterday']
const links = [
  ['mdi-inbox-arrow-down', 'Inbox'],
  ['mdi-send', 'Send'],
  ['mdi-delete', 'Trash'],
  ['mdi-alert-octagon', 'Spam'],
]

const drawer = ref(null)

const theme = useTheme()

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}

const model = ref(theme.global.name.value);
  
</script>

<script>
  export default {
    data: () => ({
      appBarNavigationLinks: [
        'Dashboard',
        'Messages',
        'Profile',
        'Updates',
      ],
      cards: ['Today', 'Yesterday'],
      drawer: null,
      links: [
        ['mdi-inbox-arrow-down', 'Inbox'],
        ['mdi-send', 'Send'],
        ['mdi-delete', 'Trash'],
        ['mdi-alert-octagon', 'Spam'],
      ],
      icons: [
        {
            name:'fab fa-twitter',
            url: 'https://www.twitter.com/',
            target: '_blank'
        },
        {
            name:'fab fa-github',
            url: 'https://www.github.com/michaelchiew08',
            target: '_blank'
        },
        {
            name:'fab fa-linkedin',
            url: 'https://www.linkedin.com/in/michaelchiew',
            target: '_blank'
        },
        {
            name:'fab fa-instagram',
            url: 'https://www.instagram.com/michael_chiew',
            target: '_blank'
        }
      ]
    }),
  }
</script>

<template>
  <v-app id="inspire">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar
          class="me-4 "
          size="64"
        >
        <!-- <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a> -->
        
        <Vue3Lottie
            animation-link="https://assets2.lottiefiles.com/packages/lf20_GbabwrUY2k.json"
            :height="150"
            :width="150"
          />
        </v-avatar>

        <!-- <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn> -->

        <v-btn><router-link class="link-unset-decoration" :to="{ name: 'home' }">Home</router-link></v-btn>
        <v-btn><router-link class="link-unset-decoration" :to="{ name: 'about' }">About</router-link></v-btn>
        <v-btn><router-link class="link-unset-decoration" :to="{ name: 'contact-us' }">Contact Us</router-link></v-btn>
        
        <v-spacer></v-spacer>
        

        <v-responsive max-width="240">
          <v-text-field
            density="compact"
            flat
            hide-details
            label="Search"
            rounded="lg"
            single-line
            variant="solo-filled"
          ></v-text-field>
        </v-responsive>
        
        <v-responsive max-width="160">
          <v-switch 
            v-model="model" 
            hide-details 
            inset
            true-value="Dark"
            false-value="Light"
            @change="toggleTheme"
            :label="`Theme: ${model}`"
          ></v-switch>
        </v-responsive>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container class="py-8 px-6"
        fluid>
        <v-row>
          <!-- <v-col cols="2">
            <v-sheet rounded="lg">
              <v-list rounded="lg">
                <v-list-item
                  v-for="n in 5"
                  :key="n"
                  link
                  :title="`List Item ${n}`"
                ></v-list-item>

                <v-divider class="my-2"></v-divider>

                <v-list-item
                  color="grey-lighten-4"
                  link
                  title="Refresh"
                ></v-list-item>
              </v-list>
            </v-sheet>
          </v-col> -->

          <v-col>
            <v-sheet min-height="70vh" rounded="lg">
              <router-view />
            </v-sheet>
          </v-col>

          <!-- <v-col v-for="card in cards"
            :key="card"
            cols="12">
            <v-card>
              <v-list lines="two">
                <v-list-subheader :title="card"></v-list-subheader>

                <template v-for="n in 6" :key="n">
                  <v-list-item>
                    <template v-slot:prepend>
                      <v-avatar color="grey-darken-1"></v-avatar>
                    </template>

                    <v-list-item-title :title="`Message ${n}`"></v-list-item-title>

                    <v-list-item-subtitle title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil repellendus distinctio similique"></v-list-item-subtitle>
                  </v-list-item>

                  <v-divider
                    v-if="n !== 6"
                    :key="`divider-${n}`"
                    inset
                  ></v-divider>
                </template>
              </v-list>
            </v-card>
          </v-col> -->
        </v-row>
      </v-container>      
    </v-main>
    
    <v-footer
        class="text-center d-flex flex-column"
      >
        <div>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-3"
            dark
            icon
          >
            <a :href="icon.url" :target="icon.target"><v-icon size="24px">{{ icon.name }}</v-icon></a>
          </v-btn>
        </div>

        <div class="pt-0">
          Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </div>

        <v-divider></v-divider>

        <div>
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </div>
      </v-footer>
  </v-app>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.link-unset-decoration {
  text-decoration: unset;
}
</style>
