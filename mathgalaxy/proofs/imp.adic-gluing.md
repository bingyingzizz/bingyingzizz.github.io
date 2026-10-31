# 结构层 + 局部化的全忠实 $\implies$ $\infty$-范畴粘合
`imp.adic-gluing` · 推出 · strong 边 · 根 `../`

`thm.adic-structure-sheaf` adic 结构层是层 + `prop.analytic-base-change` 解析环的 base change → `thm.adic-gluing` 导出范畴按无穷范畴粘合

**记号。** $\mathcal{C}$ = 离散 Huber 对构成的景，覆盖取「标准覆盖」；$\operatorname{Spec}(A,A^+)$ 表示对应的 adic 谱。函子 $\Phi : X \mapsto (|X|, \mathcal{O}_X)$ 从离散 adic 空间到 $\mathcal{C}$ 上的「空间」（局部模型层 + 环层）之范畴。

**第一步：$\operatorname{Spec}$ 是层。** 对标准覆盖 $\{(A,A^+) \to (A_i,A_i^+)\}$，$\operatorname{Spec}$ 的粘合条件逐点验证：覆盖在拓扑空间层面是开覆盖，结构层由 $A \to \varprojlim A_i$ 的完全性给出（Prop 10.1(a)）。

> 续见 proofs/imp.adic-gluing.2.md
