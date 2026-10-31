# 外幂的一维性 + 存在唯一性 $\implies$ 行列式就是那个系数
`imp.det-as-exterior` · 推出 · strong 边 · 根 `../`

`def.exterior-power` 外幂 + `thm.det-exists-unique` 行列式的存在唯一性 → `thm.det-as-exterior` 行列式 = 最高外幂上的作用

s\wedge T(v_n) = D\cdot(e_1\wedge\cdots\wedge e_n)$ 的系数（先固定 $v_i = e_i$ 定义，再对一般 $v_i$ 用交错多重线性延拓）。逐条验证 $D$ 满足多重线性、交错、规范化三条公理，由**行列式的存在唯一性**得 $D = \det T$。

> 续见 proofs/imp.det-as-exterior.4.md
