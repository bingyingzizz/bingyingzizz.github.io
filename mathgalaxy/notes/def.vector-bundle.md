# 向量丛　`def.vector-bundle`　·　说明
根 `../`

**为什么「局部平凡」不够，还要上闭链**：局部平凡只说明「每块都像乘积」；真正决定丛的是**怎么粘**，而粘法就记在 $g_{\alpha\beta}$ 里。上闭链条件是「粘得自洽」的充要条件，也把丛与 1-上链的上同调类 $H^{1}(M;\operatorname{GL}(k,\mathbb{R}))$ 联系起来 —— 这一点本图只提不证。

**例子**：$TM$ 是秩 $n$ 的（`def.tangent-bundle`）；$M \times \mathbb{R}^{k}$ 叫**平凡丛**；余切丛 $T^{\ast}M$ 与 $(r,s)$ 型张量丛（`def.tensor-field`）；$S^{1}$ 上的 Möbius 带是秩 $1$ 的非平凡丛，$S^{1} \times \mathbb{R}$ 是平凡的 —— 两者局部一样，整体不同。

**换结构群就是换丛**：$\operatorname{GL}(k,\mathbb{R})$ 换成 $\operatorname{O}(k)$ 得欧氏丛（配了纤维度量），换成 $\operatorname{GL}(k,\mathbb{C})$ 得复向量丛，换成 $\operatorname{GL}(k,\mathbb{Z})$ 得平坦丛。$TM$ 的结构群能缩到 $\operatorname{O}(n)$，靠的是「总可配黎曼度量」（`prop.bundle-metric`）—— 这不是自动的。

> 续见 notes/def.vector-bundle.2.md
