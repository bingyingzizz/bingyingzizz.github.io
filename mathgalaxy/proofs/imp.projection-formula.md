# 正交投影 + 标准正交基 $\implies$ 最佳逼近与显式公式
`imp.projection-formula` · 推出 · strong 边 · 根 `../`

`def.orthogonal-projection` 正交投影 + `thm.gram-schmidt` Gram–Schmidt 正交化 → `thm.projection-formula` 最佳逼近与投影公式

**显式公式**：设 $(e_1, \ldots, e_k)$ 是 $U$ 的标准正交基，令 $u := \sum_i \langle e_i, v\rangle e_i \in U$。则对每个 $j$，

$$\langle e_j, v - u\rangle = \langle e_j, v\rangle - \sum_i \langle e_i, v\rangle\,\langle e_j, e_i\rangle = \langle e_j, v\rangle - \langle e_j, v\rangle = 0$$

故 $v - u \perp U$，即 $u = P_U v$。

**最佳逼近**：对任意 $u' \in U$，由 $v - P_U v \perp U$ 与 $P_U v - u' \in U$ 得（勾股定理）

$$\|v - u'\|^{2} = \|v - P_U v\|^{2} + \|P_U v - u'\|^{2} \ge \|v - P_U v\|^{2}$$

等号仅当 $P_U v = u'$。

> 续见 proofs/imp.projection-formula.2.md
