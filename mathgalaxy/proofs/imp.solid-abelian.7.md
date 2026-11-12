# 完备化判据 + 关键计算 $\implies$ $\mathbf{Solid}$ 是阿贝尔子范畴
`imp.solid-abelian` · 推出 · strong 边 · 根 `../`

`lem.solid-completion-criterion` 完备化判据 + `prop.free-solid-solid` 自由固态群是固态的 + `cor.free-solid-product` 自由固态群是大乘积 + `thm.breen-deligne` Breen–Deligne 分解 → `thm.solid-abelian` 固态群构成阿贝尔子范畴

$f_\mathbb{R} : \bigoplus\mathbb{R} \to \bigoplus\mathbb{R}$ 是 $\mathbb{R}$-向量空间映射，核掉后余核 $Q \cong \bigoplus_L \mathbb{R}$。

于是 $\ker d_{\mathbb{R},i} = \operatorname{Hom}_\mathbb{R}(Q,\mathbb{R}) \cong \prod_L \mathbb{R}$。

由 Theorem 4.3(ii)，$\operatorname{RHom}(M(S,\mathbb{R}/\mathbb{Z}), \prod_L\mathbb{R}) = 0$；

由 Theorem 3.3，$R\Gamma(S, \prod_L\mathbb{R})$ 集中在度 $0$。

断言得证。

> 续见 proofs/imp.solid-abelian.8.md
