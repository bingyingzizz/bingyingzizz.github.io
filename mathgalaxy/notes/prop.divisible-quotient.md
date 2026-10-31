# 可除群的商　`prop.divisible-quotient`　·　说明
根 `../`

**证明**：记 $\pi : D \to D/H$。给定 $\bar{x} \in D/H$ 与 $n \ne 0$，取代表 $x$；由 $D$ 可除取 $y$ 使 $n y = x$；则 $n \bar{y} = \overline{n y} = \bar{x}$ ✓。所以 $n \cdot$ 在 $D/H$ 上满，$D/H$ 可除 ✓。∎

⚠️ 只对**商**成立：可除群的子群不必可除（$\mathbb{Z} \subseteq \mathbb{Q}$：$\mathbb{Q}$ 可除，$\mathbb{Z}$ 不可除）。

⭐ 两条对照：在 $\mathbb{Z}$-模里，内射对象的**商**仍内射（本条），而它的**子模**不必（$\mathbb{Z} \subseteq \mathbb{Q}$）。投射模则两头都不省心：它的商（$\mathbb{Z}/2$ 之于 $\mathbb{Z}$）与子模（理想 $(x, y) \subseteq k[x, y]$）都可以不投射。

📌 一般环上要小心：可除性对商总是封闭的（逐元素论证），但「内射」对商封闭只在 $\mathbb{Z}$ 这类主理想整环上由「可除即内射」推得，不能当成普遍事实。
