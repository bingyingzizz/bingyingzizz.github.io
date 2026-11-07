# 一维上同调与分裂扩张　`thm.h1-semidirect`　·　说明
根 `../`

也就是把 $d$ 换成 $d + (g \mapsto g \cdot a - a)$ —— 恰好加上一个**主**交叉同态。反过来，**$A$-内共轭**（即用 $A$ 中元素做的共轭）都能写成这样；但保持 $i$ 与 $\pi$ 的**任意**自同构不必是内共轭（分裂扩张 $G \times A$ 上 $(g,a) \mapsto (g, a + \varphi(g))$、$\varphi \in \operatorname{Hom}(G,A)$ 非主，就是反例），于是 $A$-共轭类恰是 $H^{1}$ 的元素。∎

⚠️⚠️ **最容易误读的一条**：$H^{1}(G, A)$ **不是**「分裂扩张的同构类」。

给定 $G$-模结构后，分裂扩张在相差同构的意义下**只有一个**（就是 $A \rtimes_{\varphi} G$）。

$H^{1}$ 分类的是**截面（分裂方式）的选择**。

举例最清楚：$G = A = \mathbb{Z}/2$、作用平凡时 $H^{1} = \operatorname{Hom}(\mathbb{Z}/2, \mathbb{Z}/2) = \mathbb{Z}/2 \ne 0$，而分裂扩张只有 $\mathbb{Z}/2 \times \mathbb{Z}/2$ 一个同构类。

> 续见 notes/thm.h1-semidirect.3.md
