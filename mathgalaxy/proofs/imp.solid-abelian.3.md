# 完备化判据 + 关键计算 $\implies$ $\mathbf{Solid}$ 是阿贝尔子范畴
`imp.solid-abelian` · 推出 · strong 边 · 根 `../`

`lem.solid-completion-criterion` 完备化判据 + `prop.free-solid-solid` 自由固态群是固态的 + `cor.free-solid-product` 自由固态群是大乘积 → `thm.solid-abelian` 固态群构成阿贝尔子范畴

由 Theorem 4.3（`table.rhom-zrt` 那一条的母定理），
$$\operatorname{RHom}(M(S,\mathbb{R}/\mathbb{Z}), M)(S') = \bigoplus_i \prod_j \operatorname{RHom}(M(S,\mathbb{R}/\mathbb{Z}), \mathbb{Z})(S') = \bigoplus_i \prod_j C(S \times S', \mathbb{Z})[-1].$$
另一方面 $R\Gamma(S, M) = \bigoplus_i \prod_j R\Gamma(S, \prod \mathbb{Z}) = \bigoplus_i \prod_j C(S,\mathbb{Z})[0]$（Theorem 3.3）。两边取 $S'$ 点后一致。

**(b) $C$ 有界。** 对复形长度归纳，用三角与「两边都保有限直和」即得。

> 续见 proofs/imp.solid-abelian.4.md
