# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

**第三步：仿射的纤维积。** 对 Huber 对映射 $A \to B$、$A \to C$（$A^+$ 的情形同），
$$\begin{aligned}
&\operatorname{Spec}(B,B^+) \times_{\operatorname{Spec}(A,A^+)} \operatorname{Spec}(C,C^+) \\
&\qquad \cong \operatorname{Spec}\big((B,B^+) \hat\otimes_{(A,A^+)} (C,C^+)\big),
\end{aligned}$$
即基变换方块是笛卡尔方块（Prop 10.2）；其中 $\hat\otimes$ 是 Huber 对的完备张量积。

**第四步：覆盖可细化。** 任一 $\mathcal{C}$ 的覆盖都能被标准覆盖细化（Lemma 10.4，Huber 的逼近论证）：把每个 $A \to A_i$ 换成有理局部化 $A \to A\langle T_1,\ldots,T_n\rangle/(\ldots)$ 的复合，用强 Noether 性与「开浸入的复合仍是开浸入」逐项对齐。

> 续见 proofs/imp.adic-gluing.4.md
