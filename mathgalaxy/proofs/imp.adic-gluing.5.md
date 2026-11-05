# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

**第四步：覆盖可细化。** 任一 $\mathcal{C}$ 的覆盖都能被标准覆盖细化（Lemma 10.4，Huber 的逼近论证）：把每个 $A \to A_i$ 换成有理局部化 $A \to A\langle T_1,\ldots,T_n\rangle/(\ldots)$ 的复合，用强 Noether 性与「开浸入的复合仍是开浸入」逐项对齐。

**第五步：范畴判据。** 设 $F$ 是 $\mathcal{C}$ 上的层。$F$ 落在 $\Phi$ 的本质像中，当且仅当
1. $F$ 有覆盖 $\{F_i \to F\}$，每个 $F_i \cong \operatorname{Spec}(A_i,A_i^+)$；
2. 对每个 $i$，$F_i \times_F F_i$ 也是仿射的（$\cong \operatorname{Spec}$ 的某个有理局部化），且两个投影是开浸入。

> 续见 proofs/imp.adic-gluing.6.md
