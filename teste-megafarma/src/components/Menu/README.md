# Menu Hamburguer - Estrutura

Partes do trabalho divididas para 3 pessoas:

- Parte A (esta): Contexto global de estado, hook `useMenu`, componente `HamburgerButton`, integração mínima no `Cabecalho` mantendo menu desktop e utilitários de estilo.
- Parte B: Painel/Drawer mobile acessível (focus trap, animações, links e navegação), com testes básicos.
- Parte C: Integração com rotas/guards, estados avançados (ex.: fechar ao navegar, clique fora, ESC), testes de acessibilidade e refinamento visual.

Estrutura de pastas:

```
src/components/Menu/
  context/
    MenuContext.tsx
  hooks/
    useMenu.ts
  HamburgerButton/
    HamburgerButton.tsx
  README.md
  Menu.tsx (menu desktop existente)
```


