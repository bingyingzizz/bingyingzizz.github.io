# 伽罗瓦基本定理　`thm.galois-correspondence`　·　说明
根 `../`

⚠ **本节点只给骨架**（`status: skeleton`）。完整证明分两大段，本图只写路线：

1. **反向单射**：$E \mapsto \operatorname{Gal}(K/E)$ 显然反序；要证「$E = K^{\operatorname{Gal}(K/E)}$」—— 这一步用伽罗瓦条件 + Artin 的线性无关性引理（不同自同构线性无关），是本图的空白。

2. **满射**：任一子群 $H \le G$ 都要是某个中间域的固定群，即 $H = \operatorname{Gal}(K/K^{H})$，且 $[K : K^{H}] = |H|$（Artin 定理）。

⭐ **第三条（正规 $\iff$ 正规子群）是这条定理最有用的部分**：它把「域扩张的正规性」这个看起来抽象的条件，翻译成「对应的子群正规」。五次方程那条线就是靠它把「域的可解性」降成「群的可解性」。

⚠ **三个条件都不能省**：不有限（$\overline{\mathbb{Q}}/\mathbb{Q}$）时子群太多、中间域太多，双射变成「子群 $\to$ 中间域」的单向且不满（伽罗瓦群是 profinite 群，要做无穷版本）；不可分时 $|\operatorname{Gal}| < [K:F]$，数都对不上。
