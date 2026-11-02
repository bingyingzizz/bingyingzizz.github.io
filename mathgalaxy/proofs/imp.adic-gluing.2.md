# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

化到 $Y = \operatorname{Spec}(A,A^+)$ 仿射：一个「空间」映射 $X \to \operatorname{Spec}(A,A^+)$ 等价于 Huber 对映射 $(A,A^+) \to (\mathcal{O}_X(X), \mathcal{O}_X(X)^\circ)$ —— 由第一步的层性，$\mathcal{O}_X(X)$ 上带自然的拓扑与整环，逐点取局部化即得 adic 空间映射。

反方向显然。

于是 $\Phi$ 全忠实。

**第三步：仿射的纤维积。** 对 Huber 对映射 $A \to B$、$A \to C$（$A^+$ 的情形同），
$$\begin{aligned}
&\operatorname{Spec}(B,B^+) \times_{\operatorname{Spec}(A,A^+)} \operatorname{Spec}(C,C^+) \\
&\qquad \cong \operatorname{Spec}\big((B,B^+) \hat\otimes_{(A,A^+)} (C,C^+)\big),
\end{aligned}$$
即基变换方块是笛卡尔方块（Prop 10.2）；其中 $\hat\otimes$ 是 Huber 对的完备张量积。

> 续见 proofs/imp.adic-gluing.3.md
