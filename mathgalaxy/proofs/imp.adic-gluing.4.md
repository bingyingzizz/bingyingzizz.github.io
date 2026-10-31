# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

**第五步：范畴判据。** 设 $F$ 是 $\mathcal{C}$ 上的层。$F$ 落在 $\Phi$ 的本质像中，当且仅当
1. $F$ 有覆盖 $\{F_i \to F\}$，每个 $F_i \cong \operatorname{Spec}(A_i,A_i^+)$；
2. 对每个 $i$，$F_i \times_F F_i$ 也是仿射的（$\cong \operatorname{Spec}$ 的某个有理局部化），且两个投影是开浸入。

（Prop 10.5 的一般判据；这里用在 $\mathcal{C}$ 上。）条件 1 给出一族仿射；条件 2 保证胶合数据一致：由第三步，纤维积存在且仍是仿射；由第四步，可用标准覆盖细化；由第一步，胶合出的层与 $\Phi$ 的像一致。

> 续见 proofs/imp.adic-gluing.5.md
