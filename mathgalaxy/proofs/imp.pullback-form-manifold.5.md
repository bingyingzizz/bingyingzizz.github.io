# imp.pullback-form-manifold
`imp.pullback-form-manifold` · 推出 · strong 边 · 根 `../`

`def.form-on-manifold` 微分形式 + `def.differential-map` 切映射 + `def.smooth-map` 光滑映射 → `prop.pullback-form-manifold` 拉回

(3) **与 $\mathrm{d}$ 交换**：两边都逐点定义，用图卡化到 $\mathbb{R}^{n}$ 的开集。由线性只需验单项 $\omega = a\,\mathrm{d}y^{I}$。此时 $F^{\ast}\omega = (a\circ F)\,\mathrm{d}F^{I}$，其中 $\mathrm{d}F^{I} = \mathrm{d}F^{i_{1}}\wedge\cdots\wedge\mathrm{d}F^{i_{k}}$。由反导子与 $\mathrm{d}^{2}F^{i} = 0$（$F^{i}$ 是函数）：$\mathrm{d}(F^{\ast}\omega) = \mathrm{d}(a\circ F)\wedge\mathrm{d}F^{I} + (a\circ F)\,\mathrm{d}(\mathrm{d}F^{I}) = \mathrm{d}(a\circ F)\wedge\mathrm{d}F^{I}.$ 链式法则给 $\mathrm{d}(a\circ F) = \sum_{j}(\partial_{j}a\circ F)\,\mathrm{d}F^{j}$，代回：$\mathrm{d}(F^{\ast}\omega) = \sum_{j}(\partial_{j}a\circ F)\,

> 续见 proofs/imp.pullback-form-manifold.6.md
