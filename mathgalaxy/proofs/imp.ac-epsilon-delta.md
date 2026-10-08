# 绝对连续 $\implies \varepsilon$–$\delta$ 刻画（$\nu$ 有限时）
`imp.ac-epsilon-delta` · 推出 · strong 边 · 根 `../`

`def.absolute-continuity` 绝对连续 → `thm.ac-epsilon-delta` 绝对连续的 ε–δ 刻画

设 $\nu$ 有限且 $\nu \ll  \mu$。由「绝对连续与变差」那条命题，可以**不妨设 $\nu$ 本身就是正测度**（换成 $|\nu |$ 不影响结论）。

**$(\Longleftarrow )$** 若 $\mu (E) = 0$，则对任意 $\varepsilon > 0$ 有 $\mu (E) < \delta$，于是 $|\nu (E)| \le \varepsilon$；令 $\varepsilon \to 0$ 得 $\nu (E) = 0$。

**$(\implies )$ 反证。** 设存在 $\varepsilon > 0$，使对**一切** $n$ 都能找到 $E_n \in \mathcal{M}$ 满足

$$\mu(E_n) < 2^{-n}, \quad  \nu(E_n) \ge \varepsilon$$

令

$$F_k = \bigcup_{n \ge k} E_n, \quad  F = \bigcap_k F_k$$

则 $\mu(F_k) \le \sum_{n\ge k} 2^{-n} = 2^{1-k} \to 0$，由 $\mu$ 的下连续性与递减性得 $\mu(F) = 0$。

> 续见 proofs/imp.ac-epsilon-delta.2.md
