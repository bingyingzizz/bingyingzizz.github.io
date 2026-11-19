# imp.universal-coefficients
`imp.universal-coefficients` · 推出 · strong 边 · 根 `../`

`def.cochain-complex` 上链复形 + `def.cohomology` 同调 + `def.pid` 主理想整环 + `def.tor` 挠积 → `thm.universal-coefficients` 万有系数定理

把同一条正合段在 $n-1$ 处再用一次，$\operatorname{Tor}_{1}^{R}(H_{n-1}(C), A)$ 正是 $B_{n-1}\otimes A \to Z_{n-1}\otimes A$ 的**核** ✓。
**③ 拼起来。** 把 ① 记成 $H_{n}(C\otimes A) = L/K$，其中 $L := \ker(Z_{n}\otimes A \to B_{n-1}\otimes A)$、$K := \operatorname{im}(B_{n}\otimes A \to Z_{n}\otimes A)$ ✓。
下段由 ② 在 $n$ 处，得 $(Z_{n}\otimes A)/K \cong H_{n}(C)\otimes A$ ✓；上段由 ② 在 $n-1$ 处，得 $\operatorname{Tor}_{1}^{R}(H_{n-1}(C), A) = \ker\bigl(B_{n-1}\otimes A \to Z_{n-1}\otimes A\bigr)$ ✓。

> 续见 proofs/imp.universal-coefficients.4.md
