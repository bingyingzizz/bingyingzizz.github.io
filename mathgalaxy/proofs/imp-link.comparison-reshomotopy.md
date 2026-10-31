# 比较定理（取恒等映射）$\implies$ 两条消解同伦等价
`imp-link.comparison-reshomotopy` · 推出 · strong 边 · 根 `../`

`thm.comparison-theorem` 比较定理 → `prop.resolution-homotopy` 消解的同伦唯一性

把比较定理用到 $f = 1_{M} : M \to M$ 上：存在性给出提升 $\varphi : P_{\bullet} \to Q_{\bullet}$，同伦唯一性说任意两个提升同伦。
再把两条消解**互换**用一次，得提升 $\psi : Q_{\bullet} \to P_{\bullet}$。
复合 $\psi\varphi$ 与 $1_{P_{\bullet}}$ 都是 $1_{M}$ 的提升（增广处都等于 $\varepsilon$），故由同伦唯一性 $\psi\varphi \sim 1_{P_{\bullet}}$ ✓；另一边同理 ✓。这正是同伦等价。∎
