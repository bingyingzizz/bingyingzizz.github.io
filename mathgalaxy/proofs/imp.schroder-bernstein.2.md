# 两个方向的单射 $\implies$ 双射
`imp.schroder-bernstein` · 推出 · strong 边 · 根 `../`

`def.bijection` 单射 / 满射 / 双射 → `thm.schroder-bernstein` Schröder–Bernstein 定理

$$f(A^{*}) = \bigcup_{n} f(A_n) = \bigcup_{n} g^{-1}(A_{n+1}) \subseteq g^{-1}(A^{*} \setminus A_0)$$

与 $h(A^{\sharp}) = g^{-1}(A^{\sharp})$ 不相交 —— 因为 $A^{\sharp} \cap (A^{*} \setminus A_0) = \emptyset$。

**④ $h$ 是满射。** 若 $b \in B$：令 $a = g(b) \in A$。若 $a \in A^{\sharp}$，则 $h(a) = g^{-1}(a) = b$；若 $a \in A^{*}$，则 $a \in A_n$ 对某个 $n \ge 1$（因为 $a = g(b)$ 落在 $g(B)$ 里），于是 $a = g(f(a'))$ 对某个 $a' \in A_{n-1} \subseteq A^{*}$，由 $g$ 单射得 $f(a') = b$，即 $h(a') = b$。

综上 $h$ 是双射，故 $|A| = |B|$。$\blacksquare$
