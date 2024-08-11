import { createRouter, createWebHistory } from 'vue-router';
import { RoutePath, RouteName } from './router.constants';
import { useIsShowStore } from '@/stores/isShow.stores';
import MainLayout from '@/layouts/MainLayout/MainLayout.vue';
import HomeView from '@/views/HomeView/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: RoutePath.HOME,
      name: RouteName.HOME,
      component: HomeView,
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePath.PHOTO,
      name: RouteName.PHOTO,
      component: () => import('@/views/PhotoView/PhotoView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePath.CONTEST,
      name: RouteName.CONTEST,
      component: () => import('@/views/ContestView/ContestView.vue'),
      meta: {
        layout: MainLayout
      }
    },
    {
      path: RoutePath.ABOUT,
      name: RouteName.ABOUT,
      component: () => import('@/views/AboutView/AboutView.vue'),
      meta: {
        layout: MainLayout
      }
    }
  ]
});

router.afterEach((to, from) => {
  const isShowStore = useIsShowStore();
  if (from.name && !isShowStore.state) isShowStore.useState(!isShowStore.state);
});

export default router;
