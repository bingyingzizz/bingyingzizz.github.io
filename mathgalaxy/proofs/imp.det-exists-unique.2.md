# 多重线性 + 交错 $\implies$ 行列式的存在唯一性
`imp.det-exists-unique` · 推出 · strong 边 · 根 `../`

`def.multilinear-form` 多重线性型 + `def.alternating-form` 交错型 → `thm.det-exists-unique` 行列式的存在唯一性

$$D(v_1, \ldots, v_n) = \sum_{\sigma \in S_n} \operatorname{sgn}(\sigma)\ a_{\sigma(1), 1} \cdots a_{\sigma(n), n}$$

右端只依赖 $a_{ij}$，故 $D$ 唯一。

**存在性。** 直接把上式取作 $D$ 的定义，逐条验证三条公理：多重线性（每一项对每个 $a_{ij}$ 都是一次的，而 $a_{ij}$ 关于 $v_j$ 线性）、交错性（交换两个变元 = 把置换乘一个对换，$\operatorname{sgn}$ 变号，而所有项成对相消）、规范性（代入 $a_{ij} = \delta_{ij}$ 后只剩 $\sigma = \mathrm{id}$ 一项，值为 $1$）。∎

> **唯一性先证、存在性后验**：这是「用泛性质定义对象」的标准套路 —— 先把任何满足条件的对象都逼成一个显式公式，再把那个公式拿回来验证它确实满足条件。
