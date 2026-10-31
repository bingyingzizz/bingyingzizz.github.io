# 完备化判据 + 关键计算 $\implies$ $\mathbf{Solid}$ 是阿贝尔子范畴
`imp.solid-abelian` · 推出 · strong 边 · 根 `../`

`lem.solid-completion-criterion` 完备化判据 + `prop.free-solid-solid` 自由固态群是固态的 + `cor.free-solid-product` 自由固态群是大乘积 → `thm.solid-abelian` 固态群构成阿贝尔子范畴

**第三步：从断言到 (6.1)。** 对 $S = \{*\}$ 用断言：$\operatorname{RHom}(\mathbb{R}/\mathbb{Z}, C)(S') = R\Gamma(S', C)[-1] = \operatorname{RHom}(\mathbb{Z}[1], C)(S')$，故 $\operatorname{RHom}(\mathbb{R}, C) = 0$。于是（$M(S,\mathbb{R})$ 是凝聚态 $\mathbb{R}$-模）
$$\operatorname{RHom}(M(S,\mathbb{R}), C) = \operatorname{RHom}_\mathbb{R}(M(S,\mathbb{R}), \operatorname{RHom}(\mathbb{R}, C)) = 0.$$
由 $0 \to M(S,\mathbb{Z}) \to M(S,\mathbb{R}) \to M(S,\mathbb{R}/\mathbb{Z}) \to 0$ 得
$$\operatorname{RHom}(M(S,\mathbb{Z}), C) \cong \operatorname{RHom}(M(S,\mathbb{R}/\mat

> 续见 proofs/imp.solid-abelian.10.md
