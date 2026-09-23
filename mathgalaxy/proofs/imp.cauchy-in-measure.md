# 依测度 Cauchy $\implies$ 依测度收敛且有一子列 a.e. 收敛
`imp.cauchy-in-measure` · 推出 · strong 边 · 根 `../`

`def.cauchy-in-measure` 依测度 Cauchy → `thm.cauchy-in-measure` 依测度 Cauchy ⟹ 收敛

**① 先抽子列，使「坏集合」的总测度有限。** 由 Cauchy 性，对每个 $k$ 存在 $N_k$ 使

$$\mu(E_k) \le 2^{-k}, \quad \text{ 其中} E_k = \{x : |f_n(x) - f_{N_k}(x)| \ge 2^{-k}\}\quad  (n \ge N_k)$$

不妨取 $N_1 < N_2 < \cdots$。记 $g_j = f_{N_j}$。

**② 让坏集合的尾并收敛。** 令

$$F_k = \bigcup_{j \ge k} E_j, \quad \text{ 则} \mu(F_k) \le \sum_{j\ge k} 2^{-j} = 2^{1-k} \to 0$$

**③ 在 $F_k^c$ 上一致 Cauchy。** 若 $x \notin F_k$，则对一切 $i \ge j \ge k$ 有 $x \notin E_j$，于是

$$|g_i(x) - g_j(x)| \le 2^{1-j}$$

所以 $\{g_j\}$ 在 $F_k^c$ 上**一致收敛**（Cauchy 且界趋于 0）。

> 续见 proofs/imp.cauchy-in-measure.2.md
