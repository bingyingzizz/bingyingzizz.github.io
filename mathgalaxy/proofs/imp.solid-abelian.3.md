# 完备化判据 + 关键计算 $\implies$ $\mathbf{Solid}$ 是阿贝尔子范畴
`imp.solid-abelian` · 推出 · strong 边 · 根 `../`

`lem.solid-completion-criterion` 完备化判据 + `prop.free-solid-solid` 自由固态群是固态的 + `cor.free-solid-product` 自由固态群是大乘积 → `thm.solid-abelian` 固态群构成阿贝尔子范畴

**(a) $C$ 集中在度 $0$。** 写 $C = M = \bigoplus_{i \in I} \prod_{j \in J_i} \mathbb{Z}$。由 Lecture IV 的定理（Eilenberg–MacLane/Breen–Deligne，`thm.breen-deligne`）与 $\mathbb{Z}[X]$ 的 pseudocoherence，$M(S,\mathbb{R}/\mathbb{Z}) \cong \prod \mathbb{R}/\mathbb{Z}$ 是 pseudocoherent 的，从而 $M(S,\mathbb{R}/\mathbb{Z}) \otimes \mathbb{Z}[S']$ 也是。由 Theorem 4.3（`table.rhom-zrt` 那一条的母定理），
$$\operatorname{RHom}(M(S,\mathbb{R}/\mathbb{Z}), M)(S') = \bigoplus_i \prod_j \operatorname{RHom}(M(S,\mathbb{R}/\mathbb{Z}), \mathbb{Z})(S') = \bigoplus_i \prod_j C(S \time

> 续见 proofs/imp.solid-abelian.4.md
