# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

**第二步：全忠实。** 对 adic 空间 $X, Y$，
$$\operatorname{Hom}(X,Y) \longrightarrow \operatorname{Hom}\big((|X|,\mathcal{O}_X), (|Y|,\mathcal{O}_Y)\big)$$
是双射（Prop 10.1(b)）。化到 $Y = \operatorname{Spec}(A,A^+)$ 仿射：一个「空间」映射 $X \to \operatorname{Spec}(A,A^+)$ 等价于 Huber 对映射 $(A,A^+) \to (\mathcal{O}_X(X), \mathcal{O}_X(X)^\circ)$ —— 由第一步的层性，$\mathcal{O}_X(X)$ 上带自然的拓扑与整环，逐点取局部化即得 adic 空间映射。反方向显然。于是 $\Phi$ 全忠实。

> 续见 proofs/imp.adic-gluing.3.md
