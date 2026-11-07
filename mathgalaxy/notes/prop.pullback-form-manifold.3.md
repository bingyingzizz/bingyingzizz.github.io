# 拉回　`prop.pullback-form-manifold`　·　说明
根 `../`

(3) **与 $\mathrm{d}$ 交换**：两边都逐点定义，用图卡化到 $\mathbb{R}^{n}$ 的开集。由线性只需验单项 $\omega = a\,\mathrm{d}y^{I}$。此时 $F^{\ast}\omega = (a\circ F)\,\mathrm{d}F^{I}$，其中 $\mathrm{d}F^{I} = \mathrm{d}F^{i_{1}}\wedge\cdots\wedge\mathrm{d}F^{i_{k}}$。由反导子与 $\mathrm{d}^{2}F^{i} = 0$（$F^{i}$ 是函数）：$\mathrm{d}(F^{\ast}\omega) = \mathrm{d}(a\circ F)\wedge\mathrm{d}F^{I} + (a\circ F)\,\mathrm{d}(\mathrm{d}F^{I}) = \mathrm{d}(a\circ F)\wedge\mathrm{d}F^{I}.$ 链式法则给 $\mathrm{d}(a\circ F) = \sum_{j}(\partial_{j}a\circ F)\,\mathrm{d}F^{j}$，代回：$\mathrm{d}(F^{\ast}\omega) = \sum_{j}(\partial_{j}a\circ F)\,\mathrm{d}F^{j}\wedge\mathrm{d}F^{I} = F^{\ast}\Bigl(\sum_{j}\partial_{j}a\,\mathrm{d}y^{j}\wedge\mathrm{d}y^{I}\Bigr) = F^{\ast}(\mathrm{d}a\wedge\mathrm{d}y^{I}) = F^{\ast}(\mathrm{d}\omega),$ 末步用了 $\mathrm{d}\omega 

> 续见 notes/prop.pullback-form-manifold.4.md
