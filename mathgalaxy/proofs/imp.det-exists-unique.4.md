# 多重线性 + 交错 $\implies$ 行列式的存在唯一性
`imp.det-exists-unique` · 推出 · strong 边 · 根 `../`

`def.multilinear-form` 多重线性型 + `def.alternating-form` 交错型 → `thm.det-exists-unique` 行列式的存在唯一性

于是可以用它**定义** $D(v_{1}, \ldots, v_{n})$：$v_{1} \wedge \cdots \wedge v_{n} = D(v_{1}, \ldots, v_{n})\, e_{1} \wedge \cdots \wedge e_{n}$。

三条公理各自免费：**多重线性**来自 $\wedge$ 对每个变元线性；**交错性**来自 $v \wedge v = 0$（商空间构造里直接杀掉的）；**规范性**来自 $e_{1} \wedge \cdots \wedge e_{n}$ 取作基、系数定为 $1$。

**唯一性**也是免费的：一维空间上的线性映射只能乘一个数，而那个数被 $D(e_{1}, \ldots, e_{n}) = 1$ 钉死。∎

> 续见 proofs/imp.det-exists-unique.5.md
