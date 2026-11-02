# Arzelà–Ascoli 在全纯函数族上就是 Montel 定理
`imp.derived-montel-from-ascoli` · 推出 · strong 边 · 根 `../`

`thm.arzela-ascoli` Arzelà–Ascoli 定理 + `thm.cauchy-inequality` Cauchy 不等式 → `thm.montel` Montel 定理

取「第 $j$ 个子列的第 $j$ 项」这个对角子列，它在每个 $K_{j}$ 上从某一项起都属于第 $j$ 个子列，故在 $K_{j}$ 上一致收敛。

**④ 极限全纯。** 内闭一致收敛的全纯函数列的极限全纯（Weierstrass 定理），故 $\mathcal{F}$ 是正规族。$\blacksquare$

> 两个源缺一不可：Arzelà–Ascoli 给紧性，Cauchy 不等式把「全纯」换成「等度连续」—— 一般连续函数族没有这一条。
