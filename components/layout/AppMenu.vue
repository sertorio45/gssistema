<template>
  <div class="app-menu">
    <template v-for="(section, i) in filteredMenu" :key="i">
      <h2 v-if="section.heading" class="menu-heading">
        {{ section.heading }}
      </h2>
      <div class="menu-items">
        <template v-for="(item, j) in section.items" :key="`${i}-${j}`">
          <!-- Item com link direto -->
          <NuxtLink 
            v-if="'link' in item" 
            :to="item.link" 
            class="menu-item"
            active-class="active"
          >
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.title }}</span>
            <span v-if="item.new" class="badge-new">Novo</span>
          </NuxtLink>
          
          <!-- Grupo com subitens -->
          <div v-else-if="'children' in item" class="menu-group">
            <div class="menu-group-title">
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.title }}</span>
              <span v-if="item.new" class="badge-new">Novo</span>
            </div>
            
            <div class="menu-group-items">
              <NuxtLink 
                v-for="(child, k) in item.children" 
                :key="`${i}-${j}-${k}`" 
                :to="child.link"
                class="menu-item child"
                active-class="active"
              >
                <i v-if="child.icon" :class="child.icon"></i>
                <span>{{ child.title }}</span>
                <span v-if="child.new" class="badge-new">Novo</span>
              </NuxtLink>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import type { NavMenu } from '~/types/nav'
import { filterMenuByRole, navMenu } from '~/constants/menus'

const { user } = useAuth()

// Obtém o menu filtrado com base na role do usuário
const filteredMenu = computed<NavMenu[]>(() => {
  if (!user || !user.role) {
    return []
  }
  
  // Log para debug
  console.warn('Role do usuário:', user.role)
  const filtered = filterMenuByRole(navMenu, user.role)
  // Verificar se o menu de administração está presente
  const hasAdminMenu = filtered.some(section => 
    section.items.some(item => 
      'children' in item && item.title === 'Administration'
    )
  )
  console.warn('Menu Administration está visível:', hasAdminMenu)
  return filtered
})
</script>

<style scoped>
.app-menu {
  padding: 1rem;
}

.menu-heading {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: 0.5rem;
  margin-top: 1rem;
}

.menu-items {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.menu-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  border-radius: 0.25rem;
  text-decoration: none;
  color: var(--color-text);
  transition: background-color 0.2s;
}

.menu-item.active, .menu-item:hover {
  background-color: var(--color-primary-light);
  color: var(--color-primary);
}

.menu-item i {
  font-size: 1.2rem;
}

.menu-item.child {
  padding-left: 1.5rem;
  font-size: 0.9rem;
}

.menu-group-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.5rem;
  font-weight: 500;
}

.badge-new {
  font-size: 0.7rem;
  background-color: var(--color-primary);
  color: white;
  padding: 0.1rem 0.35rem;
  border-radius: 1rem;
  margin-left: auto;
}
</style> 