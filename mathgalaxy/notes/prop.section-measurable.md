# 截口可测　`prop.section-measurable`　·　说明
根 `../`

证明是一个「先看矩形、再看 $\sigma$代数」的标准套路：令



$$\mathcal{R} = \{E \subseteq X \times Y : E_x \in \mathcal{N}\text{ 且} E^y \in \mathcal{M}\quad  \forall(x, y)\}$$



则 $\mathcal{R}$ 包含所有矩形，而且**$\mathcal{R}$ 是一个 $\sigma$代数**（截口运算保持并、交、补）。于是 $\mathcal{R} \supseteq \mathcal{M} \otimes \mathcal{N}$。

(b) 由 (a) 与两条恒等式得到：



$$f_x^{-1}(B) = (f^{-1}(B))_x, \quad  f^{y-1}(B) = (f^{-1}(B))^y$$



⚠ 注意 (b) 说的是「**每一个** $x$ 都行」，而 Fubini 定理里只能保证「几乎每一个」—— 那是因为 Fubini 还要它可积。
