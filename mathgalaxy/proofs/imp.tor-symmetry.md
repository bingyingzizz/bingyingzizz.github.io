# imp.tor-symmetry
`imp.tor-symmetry` · 推出 · strong 边 · 根 `../`

`def.tor` 挠积 + `def.bicomplex` 双复形 + `def.spectral-sequence` 谱序列 → `prop.tor-symmetry` 挠积的对称性

**证明（双复形的两种算法）。** 取 $M, N$ 各自的投射消解 $P_{\bullet} \twoheadrightarrow M$、$Q_{\bullet} \twoheadrightarrow N$，作双复形 $P \otimes Q$（$p$ 次行为 $P_{p}\otimes Q_{q}$），取全复形 $T_{\bullet}$。

对它按**行**过滤：
$$E_{p,q}^{1} = H_{q}\bigl(P_{p}\otimes Q_{\bullet}\bigr) = \begin{cases} P_{p}\otimes N , & q = 0 \\ 0 , & q \ne 0 \end{cases}$$
（因为 $Q_{\bullet} \to N$ 是消解、$P_{p}$ 平坦，张量后仍正合）✓。

> 续见 proofs/imp.tor-symmetry.2.md
