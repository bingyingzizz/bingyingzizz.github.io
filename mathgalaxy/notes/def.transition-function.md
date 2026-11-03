# 转移函数　`def.transition-function`　·　说明
根 `../`

**为什么它是「全部数据」**：局部上丛永远是平凡的（$U \times F$），所以丛的全部区别都在重叠处。换句话说，丛的几何 = 转移函数的几何。这也解释了为什么分类丛要模掉换基：换一组平凡化（$\Phi_{\alpha} \mapsto h_{\alpha}\Phi_{\alpha}$）会把 $g_{\alpha\beta}$ 换成 $h_{\alpha} g_{\alpha\beta} h_{\beta}^{-1}$，而丛本身没变 —— 这就是分类定理里的「等价」关系（见 `thm.bundle-classification`）。

**取值落在哪里，就决定了是什么丛**：$g_{\alpha\beta}$ 落在 $\mathrm{GL}(k,\mathbb{R})$ $\implies$ 实向量丛；落在 $\mathrm{O}(k)$ $\implies$ 配了纤维度量的丛；落在 $\mathrm{GL}(k,\mathbb{C})$ $\implies$ 复丛；落在离散群 $\implies$ 平坦丛。这个「落在哪」的群就叫**结构群**（`def.structure-group`），所以「换结构群」在技术上就是「把转移函数的取值限制在更小的子群里」。

> 续见 notes/def.transition-function.2.md
