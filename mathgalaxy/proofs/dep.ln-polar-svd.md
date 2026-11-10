# 奇异值分解 $\iff$ 极分解
`dep.ln-polar-svd` · 等价 · strong 边 · 根 `../`

`thm.svd` 奇异值分解 → `thm.polar-decomposition` 极分解

**SVD $\implies$ 极分解**

设 $A = U\Sigma V^{*}$。令 $P := V\Sigma V^{*}$、$W := UV^{*}$：$\Sigma$ 对角非负故 $P$ 半正定 Hermite，$U,V$ 酉故 $W$ 酉，且 $WP = UV^{*}V\Sigma V^{*} = U\Sigma V^{*} = A$。又 $P^{2} = V\Sigma^{2}V^{*} = A^{*}A$，而半正定平方根唯一，故 $P = \sqrt{A^{*}A}$ —— 正是极分解里那个 $P$。

**极分解 $\implies$ SVD（方阵）**

设 $A = WP$，$W$ 酉、$P$ 半正定 Hermite。由谱定理 $P = V\Sigma V^{*}$，$\Sigma = \operatorname{diag}(\sigma_1,\ldots,\sigma_n)$、$\sigma_i \ge 0$。于是 $A = (WV)\Sigma V^{*}$，取 $U := WV$ 即得 SVD（重排使 $\sigma_1\ge\cdots$）。

> 两条定理在**方阵**情形互相推出（这正是等价的范围）；SVD 的陈述更宽、允许长方形，此时极分解要用等距代替酉。原记 analogy，FIX-065 按 AUD-062 改 equivalence 并补双向证明。
