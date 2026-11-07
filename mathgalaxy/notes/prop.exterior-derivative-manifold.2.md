# 外微分　`prop.exterior-derivative-manifold`　·　说明
根 `../`

**引理 A（图卡内唯一性）**：设 $U \subseteq \mathbb{R}^{n}$ 是开集，$D$ 是 $\Omega^{\bullet}(U)$ 上满足 (1)–(4) 的算子。则对 $\omega = \sum_{I} a_{I}\,\mathrm{d}x^{I}$ 有 $D\omega = \sum_{I}\mathrm{d}a_{I}\wedge\mathrm{d}x^{I}$。**证明**：$0$-形式由 (1) 直接给出。看单项 $a\,\mathrm{d}x^{I}$，$I = (i_{1} < \cdots < i_{k})$：$\mathrm{d}x^{i} = \mathrm{d}(x^{i})$（对坐标函数用 (1)），由 (4) 得 $D(\mathrm{d}x^{i}) = D^{2}(x^{i}) = 0$；再由 (3) 归纳得 $D(\mathrm{d}x^{I}) = 0$。于是 $D(a\,\mathrm{d}x^{I}) = \mathrm{d}a\wedge\mathrm{d}x^{I} + a\,D(\mathrm{d}x^{I}) = \mathrm{d}a\wedge\mathrm{d}x^{I}$；由 (2) 线性拼起来即得。$\square$

> 续见 notes/prop.exterior-derivative-manifold.3.md
