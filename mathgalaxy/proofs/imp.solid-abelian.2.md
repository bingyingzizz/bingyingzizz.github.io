# 完备化判据 + 关键计算 $\implies$ $\mathbf{Solid}$ 是阿贝尔子范畴
`imp.solid-abelian` · 推出 · strong 边 · 根 `../`

`lem.solid-completion-criterion` 完备化判据 + `prop.free-solid-solid` 自由固态群是固态的 + `cor.free-solid-product` 自由固态群是大乘积 + `thm.breen-deligne` Breen–Deligne 分解 → `thm.solid-abelian` 固态群构成阿贝尔子范畴

由引理 5.10，只需对「各项是若干 $\prod_I\mathbb{Z}$ 的直和」的复形 $C$ 证明：对一切 profinite $S$，
$$\operatorname{RHom}(Z[S]^{\blacksquare}, C) \cong \operatorname{RHom}(\mathbb{Z}[S], C) = R\Gamma(S, C).$$

**第二步：核心断言。** 对这样的 $C$ 与任意 profinite $S'$，有
$$\operatorname{RHom}(Z[S]^{\blacksquare}, C)(S') \cong R\Gamma(S \times S', C). \tag{6.1}$$

分三层证明。

**(a) $C$ 集中在度 $0$。** 写 $C = M = \bigoplus_{i \in I} \prod_{j \in J_i} \mathbb{Z}$。

> 续见 proofs/imp.solid-abelian.3.md
