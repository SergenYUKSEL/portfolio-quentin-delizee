import { onMounted, onUnmounted, ref, type Ref } from 'vue';

/**
 * Composable pour détecter quand un élément devient visible dans le viewport
 * et déclencher des animations au scroll
 * 
 * @param threshold - Pourcentage de visibilité requis (0.0 à 1.0) pour déclencher l'animation
 * @param triggerOnce - Si true, l'animation ne se déclenche qu'une seule fois
 * @returns Object contenant isVisible (état de visibilité) et elementRef (ref à attacher à l'élément)
 */
export function useScrollAnimation(
  threshold: number = 0.1,
  triggerOnce: boolean = true
) {
  const isVisible = ref(false);
  const elementRef: Ref<HTMLElement | null> = ref(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    // Créer l'Intersection Observer
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // L'élément est visible
            isVisible.value = true;
            
            // Si triggerOnce est true, arrêter d'observer après la première apparition
            if (triggerOnce && observer && elementRef.value) {
              observer.unobserve(elementRef.value);
            }
          } else if (!triggerOnce) {
            // Si triggerOnce est false, réinitialiser quand l'élément sort du viewport
            isVisible.value = false;
          }
        });
      },
      {
        threshold,
        rootMargin: '0px' // Peut être ajusté pour déclencher avant/après l'entrée dans le viewport
      }
    );

    // Observer l'élément si la ref est définie
    if (elementRef.value) {
      observer.observe(elementRef.value);
    }
  });

  // Nettoyer l'observer lors du démontage du composant
  onUnmounted(() => {
    if (observer) {
      observer.disconnect();
      observer = null;
    }
  });

  return {
    isVisible,
    elementRef
  };
}
