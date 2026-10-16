# Hahn 分解 $\implies$ Jordan 分解
`imp.jordan` · 推出 · strong 边 · 根 `../`

`thm.hahn-decomposition` Hahn 分解定理 → `thm.jordan-decomposition` Jordan 分解定理

取 $\nu$ 的一个 Hahn 分解 $X = P \sqcup  N$（$P$ 正、$N$ 负）。定义

$$\nu^+(E) := \nu(E \cap P), \quad  \nu^-(E) := -\nu(E \cap N)$$

**① 它们都是测度。** 对 $\nu ^{+}$：$\nu^+(\emptyset) = \nu(\emptyset) = 0$；对不交的 $\{E_j\}$，

$$\nu^+( \bigsqcup_j E_j ) = \nu( \bigsqcup_j (E_j \cap P) ) = \sum_j \nu(E_j \cap P) = \sum_j \nu^+(E_j)$$

（右边的每一项都 $\ge 0$，因为 $E_j \cap P$ 是正集的子集。）$\nu ^{-}$ 同理。

**② $\nu = \nu ^{+} - \nu ^{-}$。** 对任意 $E$，

$$\nu(E) = \nu(E \cap P) + \nu(E \cap N) = \nu^+(E) - \nu^-(E)$$

**③ $\nu ^{+} \perp \nu ^{-}$。** 取 $E = P$、$F = N$：$P$ 是 $\nu ^{-}$零集（$\nu ^{-}(P) = -\nu (P \cap N) = 0$），$N$ 是 $\nu ^{+}$零集。

> 续见 proofs/imp.jordan.2.md
